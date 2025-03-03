import { Bookmark } from "../types";

export const saveBookmarks = (bookmarks: Bookmark[]) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const getBookmarks = (): Bookmark[] => {
    if (typeof window === 'undefined') return [];
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? (JSON.parse(storedBookmarks) as Bookmark[]) : [];
};

export const deleteBookmark = (id: string) => {
  const bookmarks = getBookmarks().filter((b) => b.id !== id);
  saveBookmarks(bookmarks);
};
