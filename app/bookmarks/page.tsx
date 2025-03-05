"use client";

import { useEffect, useState } from "react";
import { BookMarkCard } from "../components/BookMarkCard";
import { BookMarksForm } from "../components/BookMarksForm";
import { getBookmarks, saveBookmarks } from "../utils/storage";
import { useRouter } from "next/navigation";
import { useUser } from "../contexts/UserContext";
import { ReactTyped } from "react-typed";

function Bookmark() {
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { user } = useUser();
  const router = useRouter();


  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      setBookmarks(getBookmarks())
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      saveBookmarks(bookmarks);
    }
  }, [bookmarks, user]);

  if (!user) return null;

  const handleAddBookmark = (bookmark: {
    id: string;
    title: string;
    url: string;
    category: string;
  }) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch = bookmark.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || bookmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!user) return null;

  return (
    <section className="pt-34 pb-8 max-w-[1250px] mx-auto w-[95%]">
      <div>
        <h1 className="text-[#FFD166] text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        <ReactTyped 
                strings={["Your Saved Links, All in One Place"]}
                typeSpeed={65}
              />
        </h1>

        <BookMarksForm onAdd={handleAddBookmark} />

        <div className="flex flex-col gap-2 sm:flex-row justify-between mb-2">
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-700 p-2 py-1 outline-0"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-700 p-2 py-1.5 outline-0"
          >
            <option className="bg-gray-800" value="All">
              All Categories
            </option>
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

        <div>
          <p className="text-[#FFD166] text-lg sm:text-xl lg:text-2xl font-bold text-center"> <span className="capitalize">{user}</span> BookMark&apos;s </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-10 py-4 max-w-[100%]">
          {filteredBookmarks.length > 0 ? (
            filteredBookmarks.map((b) => (
              <BookMarkCard
                key={b.id}
                {...b}
                onDelete={(id) =>
                  setBookmarks(bookmarks.filter((x) => x.id !== id))
                }
              />
            ))
          ) : (
            <p className="text-gray-300 font-semibold">No bookmarks found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Bookmark;
