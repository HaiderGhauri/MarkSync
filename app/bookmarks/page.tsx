"use client";

import { useEffect, useState } from "react";
import { BookMarkCard } from "../components/BookMarkCard";
import { BookMarksForm } from "../components/BookMarksForm";
import { getBookmarks, saveBookmarks } from "../utils/storage";

function Bookmark() {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  useEffect(() => {
    saveBookmarks(bookmarks);
  }, [bookmarks]);

  const handleAddBookmark = (bookmark: {
    id: string;
    title: string;
    url: string;
    category?: string;
  }) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  return (
    <section className="pt-18 text-gray-900 pb-8 max-w-[1250px] mx-auto w-[95%]">
      <div>
        <h1>Your Saved Links, All in One Place</h1>

        <BookMarksForm onAdd={handleAddBookmark} />

        <div>
          {bookmarks.map((b) => (
            <BookMarkCard key={b.id} {...b} onDelete={(id) => setBookmarks(bookmarks.filter((x) => x.id !== id))} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bookmark;
