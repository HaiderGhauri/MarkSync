import { Bookmark } from "../types";

export const getUser = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("user");
};

export const saveUser = (user: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", user);
  }
};

export const deleteUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("bookmarks");
  }
};

export const saveBookmarks = (bookmarks: Bookmark[]) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const getBookmarks = (): Bookmark[] => {
  if (typeof window === "undefined") return [];
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? (JSON.parse(storedBookmarks) as Bookmark[]) : [];
};

export const deleteBookmark = (id: string) => {
  const bookmarks = getBookmarks().filter((b) => b.id !== id);
  saveBookmarks(bookmarks);
};
