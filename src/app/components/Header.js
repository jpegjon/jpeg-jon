import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="px-4 pt-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:gap-y-36">
        <div className="flex justify-between md:grid md:grid-cols-2">
          <h1>Jon Tsikniadopoulos</h1>
          <div className="flex justify-between">
            <p>Based in Los Angeles</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:items-end">
          <Image
            alt="a profile picture of me, Jonathan Tsikniadopoulos"
            className="h-60 w-60 rounded-full object-cover grayscale"
            src="/jonathan-tsikniadopoulos-profile.jpg"
            width="476"
            height="476"
            priority={true}
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
