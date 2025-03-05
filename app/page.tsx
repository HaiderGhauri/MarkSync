/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import { NameInput } from "./components/NameInput";
import { useUser } from "./contexts/UserContext";
import { ReactTyped } from "react-typed";


export default function Home() {

  const {user} = useUser();

  return (
    <main className="text-[#FFD166] pb-8 z-0 bg-slate-950">
      <div className="bg-slate-950 pt-18">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:12px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_80%,transparent_100%)]"></div>

        <section className="max-w-[1250px] mx-auto w-[95%] flex items-center flex-col gap-4 px-4 pt-18 pb-10">
          <div className="text-center gap-4 flex items-center flex-col relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <ReactTyped 
                strings={["Welcome to MarkSync Manage Your Bookmarks"]}
                typeSpeed={65}
                startWhenVisible
              />
            </h1>
            <p className="tracking-wide text-lg">
            <ReactTyped 
                strings={["MarkSync helps you keep your important links at your fingertips. No more clutter - just seamless bookmarking!"]}
                typeSpeed={65}
                startWhenVisible
              />
            </p>

            <NameInput disabled={!!user} />
          </div>
        </section>

        <div className="w-full mx-auto relative rounded-3xl overflow-hidden px-5 sm:px-0 sm:pr-7">
            <Image
              src="/heroimg.jpg"
              alt="Hero Image"
              // layout="fill"
              // objectFit="cover"
              width={500}
              height={500}
              className=" rounded-3xl mx-auto"
            />
          </div>
      </div>
      {/* <img
        src="/svg-stroke.svg"
        alt="animation"
        className="w-xl absolute left-[20%]"
      /> */}

      <section className="max-w-[1250px] mx-auto w-[88%] text-gray-300 mt-25 md:mt-35 flex flex-col gap-8">
        <div className="flex justify-around items-center flex-col gap-6 sm:flex-row">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <ReactTyped 
                strings={["Save, Organize & Access - Anytime"]}
                typeSpeed={65}
                startWhenVisible
              />
            </h2>
            <p className="sm:text-lg">
            <ReactTyped 
                strings={["MarkSync makes bookmarking effortless, so your important links are always just a click away."]}
                typeSpeed={65}
                startWhenVisible
              />
             
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
            <ReactTyped 
                strings={["Your Personal Bookmark Hub"]}
                typeSpeed={65}
                startWhenVisible
              />
            </h2>
            <p className="sm:text-lg">
            <ReactTyped 
                strings={["Say goodbye to lost links! Keep everything organized and easily accessible in one place."]}
                typeSpeed={65}
                startWhenVisible
              />
            </p>
          </div>

          <div className="relative w-[300px] h-[250px]">
            <Image
              src="/personal.jpg"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className=""
            />
          </div>
        </div>

        <div className="flex justify-around items-center flex-col gap-6 sm:flex-row">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <ReactTyped 
                strings={["Smart Bookmarking for a Smarter You"]}
                typeSpeed={65}
                startWhenVisible
              />
            </h2>
            <p className="sm:text-lg">
            <ReactTyped 
                strings={["Save, categorize, and sync your favorite links effortlessly - never lose track again!"]}
                typeSpeed={65}
                startWhenVisible
              />
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
