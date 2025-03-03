import Link from "next/link";
import { Bookmark } from "../types";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BookmarkCardProps extends Bookmark {
  onDelete: (id: string) => void;
}

export function BookMarkCard({
  id,
  title,
  url,
  category,
  onDelete,
}: BookmarkCardProps) {

  const showConfirmToast = () => {
    toast(
      <div className="flex flex-col gap-2">
        <p>Are you sure you want to delete <span className="text-blue-500">&quot;{title}&quot;</span>?</p> 
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss()}
            className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
          >
            No
          </button>
          <button
            onClick={() => {
              onDelete(id);
              toast.dismiss();
            }}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          >
            Yes
          </button>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: false,
        closeButton: false, 
        draggable: false,
      }
    );
  };

  return (
    <div className="bg-slate-800 px-5 py-2 rounded-2xl font-semibold flex flex-col gap-4 justify-center items-center w-[87%] sm:w-[100%] sm:max-w-[330px]">
      <p className="text-gray-400 text-center w-full break-all">
        Title:<Link href={url} target="_blank">
          <span className="text-blue-500 underline ml-1.5">{title}</span>{" "}
        </Link>{" "}
      </p>

      <p className="text-gray-400 text-center">Category: <span>{category}</span></p>

      <button onClick={showConfirmToast} className="text-red-600 mb-1 cursor-pointer">
        <FaTrash />
      </button>
      <ToastContainer position="top-right" />
    </div>
  );
}
