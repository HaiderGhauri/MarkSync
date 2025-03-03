"use client";

import { useEffect, useState } from "react";
import { BookMarkCard } from "../components/BookMarkCard";
import { BookMarksForm } from "../components/BookMarksForm";
import { getBookmarks, getUser, saveBookmarks } from "../utils/storage";
import { useRouter } from "next/navigation";

function Bookmark() {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const user = getUser();
  const router = useRouter()

  useEffect(() => {
    if(!user) {
      router.push("/")
    }
  }, [])
  

  useEffect(() => {
    if (user) {
      saveBookmarks(bookmarks);
    }
  }, [bookmarks]);

  if (!user) return null;

  const handleAddBookmark = (bookmark: {
    id: string;
    title: string;
    url: string;
    category?: string;
  }) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  return (
    <section className="pt-34 pb-8 max-w-[1250px] mx-auto w-[95%]">
      <div>
        <h1 className="text-[#FFD166] text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Your Saved Links, All in One Place</h1>

        <BookMarksForm onAdd={handleAddBookmark} />

        <div className="bg-amber-900 flex gap-10 p-4">
          {bookmarks.map((b) => (
            <BookMarkCard
              key={b.id}
              {...b}
              onDelete={(id) =>
                setBookmarks(bookmarks.filter((x) => x.id !== id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bookmark;
