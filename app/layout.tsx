import type { Metadata } from "next";
import { Google_Sans_Flex, Prompt } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  adjustFontFallback: false,
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPSR Security | ระบบรักษาความปลอดภัยอาคาร",
  description:
    "ระบบรักษาความปลอดภัยอาคาร สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล ดูแลทุกพื้นที่เพื่อชุมชนที่ปลอดภัย",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${googleSansFlex.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
