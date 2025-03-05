"use client";

import Link from "next/link";
import { useUser } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";

export function Header() {
  const { user, deleteUser } = useUser();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleDeleteUser = () => {
    deleteUser();
    router.push("/");
  };

  const handleError = () => {
    if (!user) {
      toast.error("Name is required");
    }
  };

  const toastMessage = (value: string) => {
    toast.error(value, {
      autoClose: 2500,
    });
  };

  const showConfirmToast = () => {
    toast(
      <div className="flex flex-col gap-2">
        <p>
          Are you sure you want to delete{" "}
          <span className="text-blue-500">&quot;{user}&quot;</span>? This will
          delete all your data permanently.
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => {
              toast.dismiss();
              toastMessage("Cancelled");
            }}
            className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
          >
            No
          </button>
          <button
            onClick={() => {
              handleDeleteUser();
              toast.dismiss();
              toast.success("Deleted", {
                autoClose: 2500,
              });
            }}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          >
            Yes
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="bg-[#1E1E2F]/90 text-[#FFD166] max-h-18 w-full backdrop-blur-xs shadow-lg fixed top-0 z-10">
      <div className="mx-auto flex p-5 px-0 justify-between items-center max-w-[1250px] w-[95%]">
        <div>
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            {/* <p className="text-2xl cursor-pointer">MarkSync</p> */}
            <Logo/>
          </Link>
        </div>

        <nav
          className={`md:ml-auto items-center gap-4 justify-center ${
            isOpen
              ? "flex flex-col pb-6 absolute top-[4.53rem] right-0 w-screen bg-[#1E1E2F]/90 backdrop-blur-xs shadow-lg"
              : "hidden sm:flex"
          }`}
        >
          <Link
            href={"/"}
            onClick={() => setIsOpen(false)}
            className="text-lg hover:font-semibold"
          >
            Home
          </Link>

          <Link
            href={"/bookmarks"}
            onClick={() => {
              setIsOpen(false);
              handleError();
            }}
            className="text-lg hover:font-semibold"
          >
            BookMarks
          </Link>

          {user && (
            <button
              className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold px-4 py-1 rounded-xl text-lg cursor-pointer hover:bg-[#ff6b6bc7]"
              onClick={() => {
                setIsOpen(false);
                showConfirmToast();
              }}
            >
              Delete User
            </button>
          )}
        </nav>

        <button
          className="text-3xl cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}
