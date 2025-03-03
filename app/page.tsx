/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="pt-20 text-[#FFD166]">
    //   <div className="relative bg-slate-950">
    //     <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
    //     </div>
    //   </div>
    // </main>
    <main className="pt-18 text-[#FFD166] pb-8">
      <div className="bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:12px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_80%,transparent_100%)]"></div>

        <section className=" relative max-w-[1250px] mx-auto w-[95%] flex items-center flex-col gap-4 px-4 pt-18 pb-36">
          <div className="text-center gap-4 flex items-center flex-col relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Never Lose a Link Again Sync with MarkSync!
            </h1>
            <p className="tracking-wide text-lg">
              MarkSync helps you keep your important links at your fingertips.
              No more clutter - just seamless bookmarking!
            </p>

            <Link href={"/bookmarks"}>
              <button className="bg-[#FF6B6B] text-[#F5F5F7] font-semibold w-fit px-4 py-1 my-4 rounded-xl text-lg cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          <div className="w-lg h-auto ">
            <Image
              src="/heroimg.jpg"
              alt="Hero Image"
              // layout="fill"
              // objectFit="cover"
              width={500}
              height={500}
              className=" rounded-3xl absolute right-[32%]"
            />
          </div>
        </section>
      </div>
      {/* <img
        src="/svg-stroke.svg"
        alt="animation"
        className="w-xl absolute left-[20%]"
      /> */}

      <section className="max-w-[1250px] mx-auto w-[95%] text-gray-900 mt-80 flex flex-col gap-8">
        <div className="flex justify-around items-center flex-col gap-6 sm:flex-row">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Save, Organize & Access - Anytime
            </h2>
            <p className="sm:text-lg">
              MarkSync makes bookmarking effortless, so your important links are
              always just a click away.
            </p>
          </div>

          <div className="relative w-[300px] h-[250px]">
            <Image
              src="/organize.png"
              layout="fill"
              objectFit="cover"
              alt="Image"
            />
          </div>
        </div>

        <div className="flex justify-around items-center flex-col gap-6 sm:flex-row-reverse">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Your Personal Bookmark Hub
            </h2>
            <p className="sm:text-lg">
              Say goodbye to lost links! Keep everything organized and easily
              accessible in one place.
            </p>
          </div>

          <div className="relative w-[300px] h-[250px]">
            <Image
              src="/personal.jpg"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="mix-blend-darken"
            />
          </div>
        </div>

        <div className="flex justify-around items-center flex-col gap-6 sm:flex-row">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Smart Bookmarking for a Smarter You
            </h2>
            <p className="sm:text-lg">
              Save, categorize, and sync your favorite links effortlessly -
              never lose track again!
            </p>
          </div>

          <div className="relative w-[350px] h-[250px]">
            <Image
              src="/svg-stroke.svg"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
