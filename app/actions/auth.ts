"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export type FormState = {
  error?: string;
} | null;

export type SessionUser = {
  id: number;
  username: string;
  nameUser: string | null;
  role: string;
};

export async function handleLogin(prevState: FormState, formData: FormData): Promise<FormState> {
  const username = formData.get("username")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!username || !password) {
    return { error: "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน" };
  }

  let redirectToDashboard = false;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return { error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordCorrect) {
      return { error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    // สร้าง Session Cookie แบบ HTTP-only
    const cookieStore = await cookies();
    const sessionData: SessionUser = {
      id: user.id,
      username: user.username,
      nameUser: user.nameUser,
      role: user.role,
    };

    cookieStore.set("ipsr_session", JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 วัน
      path: "/",
    });

    redirectToDashboard = true;
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่อีกครั้ง" };
  }

  if (redirectToDashboard) {
    redirect("/dashboard");
  }

  return null;
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get("ipsr_session")?.value;
  if (!session) return null;

  try {
    return JSON.parse(session) as SessionUser;
  } catch {
    return null;
  }
}

export async function handleLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("ipsr_session");
  redirect("/");
}