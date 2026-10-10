"use client";

import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

export default function LoginModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* 1. ปุ่ม Login เดิมของคุณ (เพิ่ม onClick เพื่อเปิด Modal) */}
      <button
        type="button"
        onClick={() => setOpenModal(true)}
        className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-blue-700 px-3 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:px-5"
      >
        <span className="hidden sm:inline">Login</span>
        <span className="sm:hidden">Login</span>
        <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
          <path
            d="M4 10h12m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 2. Flowbite Modal */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible
        popup
        size="md"
      >
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6 px-2 pb-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              เข้าสู่ระบบ
            </h3>

            {/* ฟอร์มกรอกข้อมูล */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                  ลืมรหัสผ่าน?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}