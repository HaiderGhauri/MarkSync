import Link from "next/link";
import { Bookmark } from "../types";

interface BookmarkCardProps extends Bookmark{
    onDelete: (id: string) => void
}

export function BookMarkCard({id, title, url, onDelete}: BookmarkCardProps) {
  return (
    <div>
      <div>
        <Link href={url}>
         <p>{title}</p>
        </Link>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

