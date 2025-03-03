"use client";

import React, { useState } from "react";
import { Bookmark } from "../types";

interface BookMarkFormProps {
  onAdd: (bookMark: Bookmark) => void;
}

export function BookMarksForm({ onAdd }: BookMarkFormProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;
    onAdd({ id: Date.now().toString(), title: title, url: url });
    setTitle("");
    setUrl("");
  };

  return (
    <form
      className="bg-slate-800 text-gray-300 w-fit mx-auto my-10 p-6 flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-semibold">Add a New Bookmark</h1>

      <div className="flex flex-col gap-1">
        <label className="tracking-wider">Title</label>
        <input
          className="px-2 py-0.5 focus:outline-1 outline-gray-700 "
          type="text"
          placeholder="Enter bookmark title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="tracking-wider">URL</label>
        <input
          className="px-2 py-0.5 focus:outline-1 outline-gray-700 "
          type="url"
          placeholder="Paste URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold w-fit px-4 py-1 mt-2 rounded-xl text-lg cursor-pointer" 
      type="submit">
        Add to Collection</button>
    </form>
  );
}
