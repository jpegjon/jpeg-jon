import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="px-4 pt-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:gap-y-36">
        <div className="flex justify-between md:grid md:grid-cols-2">
          <h1>Jonathan Tsikniadopoulos</h1>
          <div className="flex justify-between">
            <p>Based in Los Angeles</p>
            <span className="hidden flex-row items-center gap-x-2 rounded-full border border-gray-300 px-3 py-1 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-xs">Available for work</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:items-end">
          <Image
            alt="minimalist cartoon drawing of a robot"
            className="w-60"
            src="/robot.svg"
            width="476"
            height="476"
          />
          <h2 className="text-6xl font-semibold md:text-8xl">Developer</h2>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default Header;
