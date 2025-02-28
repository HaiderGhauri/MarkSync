import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#1E1E2F] text-[#FFD166] max-h-18 w-full bg-blend-darken fixed top-0">
      <div className="mx-auto flex p-5 px-0 justify-between items-center max-w-[1250px] w-[95%]">
        <div>
            <p className="text-2xl">MarkSync</p>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base gap-4 justify-center">
          <Link href={"/"} className="text-lg hover:font-semibold">Home</Link>
          <Link href={"/bookmark"} className="text-lg hover:font-semibold">BookMarks</Link>
        </nav>
      </div>
    </header>
  );
}
