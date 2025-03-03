"use client";

import React, { useState } from "react";
import { Bookmark } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BookMarkFormProps {
  onAdd: (bookMark: Bookmark) => void;
}

export function BookMarksForm({ onAdd }: BookMarkFormProps) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Work");

  const showToastMessage = (value: string) => {
    toast.error(value, {
      position: "top-right",
    });
  };

  const successMessage = (value: string) => {
      toast.success(value, {
        position: "top-right",
      });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url || !category){
      return showToastMessage("Please enter valid values");
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      showToastMessage("Please enter a valid url");
      return;
    }
    
    onAdd({
      id: Date.now().toString(),
      title: title,
      url: url,
      category: category,
    });
    successMessage("BookMark added")
    setTitle("");
    setUrl("");
    setCategory("Work");
  };

  return (
    <form
      className="bg-slate-800 text-gray-300 w-fit mx-auto my-10 p-6 flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-semibold">Add a New Bookmark</h1>

      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="flex flex-col gap-1">
          <label className="tracking-wider">Title</label>
          <input
            className="px-2 py-0.5 border border-gray-700 outline-0"
            type="text"
            maxLength={22}
            placeholder="Enter bookmark title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="tracking-wider">URL</label>
          <input
            className="px-2 py-0.5 border border-gray-700 outline-0"
            type="url"
            placeholder="Paste URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="tracking-wider">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-700 p-2 py-1 outline-0"
          >
            <option className="bg-gray-800" value="Work">
              Work
            </option>
            <option className="bg-gray-800" value="Social">
              Social
            </option>
            <option className="bg-gray-800" value="Entertainment">
              Entertainment
            </option>
            <option className="bg-gray-800" value="Education">
              Education
            </option>
            <option className="bg-gray-800" value="Shopping">
              Shopping
            </option>
            <option className="bg-gray-800" value="Personal">
              Personal
            </option>
            <option className="bg-gray-800" value="News">
              News
            </option>
            <option className="bg-gray-800" value="Other">
              Other
            </option>
          </select>
        </div>

        <button
          className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold px-4 py-1 mt-2 rounded-xl text-lg cursor-pointer"
          type="submit"
        >
          Add to Collection
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}
