"use client"

import React, { useState } from "react"
import { Bookmark } from "../types"

interface BookMarkFormProps {
    onAdd: (bookMark: Bookmark) => void
}

export function BookMarksForm({onAdd}: BookMarkFormProps) {


    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title || !url) return;
        onAdd({id: Date.now().toString(), title: title, url: url})
        setTitle("")
        setUrl("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>
            Add Your BookMark
        </h1>

        <div>
            <input 
            type="text" 
            placeholder="Text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div>
            <input 
            type="url" 
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
        </div>

        <button type="submit">
            Add
        </button>
    </form>
  )
}

