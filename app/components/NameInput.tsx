"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../contexts/UserContext";

interface NameInputProps {
  disabled?: boolean
}

export function NameInput({ disabled = false }: NameInputProps ) {
  const [name, setName] = useState("");
  const router = useRouter();
  const {setUser} = useUser();

  const showToastMessage = (value: string) => {
    toast.error(value);
  };

  const successMessage = () => {
    toast.success(`${name} added`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return showToastMessage("Name is required");

    if (name.length < 6) {
      showToastMessage("Name must be at least 6 characters");
      setName("");
      return;
    }
    setUser(name)
    setName("")
    successMessage();
    setTimeout(() => {
      router.push("/bookmarks");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
    >
      <input
        className="text-lg text-[#F5F5F7] border border-gray-500 h-fit py-1 px-2 rounded-xl outline-0"
        type="text"
        placeholder="Enter your name to get started"
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
        disabled={disabled}
      />
      <button
        disabled={disabled}
        type="submit"
        className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold w-fit px-2.5 sm:px-4 py-1 rounded-xl sm:text-lg cursor-pointer hover:bg-[#ff6b6bc7]"
      >
        Get Started
      </button>
      {/* <ToastContainer /> */}
    </form>
  );
}
