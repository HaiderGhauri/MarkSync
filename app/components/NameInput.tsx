"use client"

import React, { useState } from "react";
import { saveUser } from "../utils/storage";
import { useRouter } from 'next/navigation'; 

export function NameInput() {
  
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(!name) return;
        saveUser(name)
        router.push("/bookmarks")
    }
  
    return (
    <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center">
      <input 
      className="text-lg text-[#F5F5F7] border border-gray-500 h-fit py-1 px-2 rounded-xl"
      type="text" 
      placeholder="Enter your name to get started" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <button type="submit"
      className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold w-fit px-4 py-1 my-4 rounded-xl text-lg cursor-pointer">
        Get Started
      </button>
    </form>
  );
}
