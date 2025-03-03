"use client";

import React, { useState } from "react";
import { saveUser } from "../utils/storage";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function NameInput() {
  const [name, setName] = useState("");
  const router = useRouter();

  const showToastMessage = (value: string) => {
    toast.error(value, {
      position: "top-right",
    });
  };

  const successMessage = () => {
    toast.success(`${name} added`, {
      position: "top-right",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return showToastMessage("Name is required");

    if (name.length < 6) {
      showToastMessage("Name must be at least 6 characters");
      setName("");
      return;
    }
    saveUser(name);
    successMessage();
    setTimeout(() => {
      router.push("/bookmarks");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 justify-center items-center"
    >
      <input
        className="text-lg text-[#F5F5F7] border border-gray-500 h-fit py-1 px-2 rounded-xl outline-0"
        type="text"
        placeholder="Enter your name to get started"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold w-fit px-4 py-1 my-4 rounded-xl text-lg cursor-pointer"
      >
        Get Started
      </button>
      <ToastContainer />
    </form>
  );
}
