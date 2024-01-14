import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="px-4 pt-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:gap-y-36">
        <div className="flex justify-between md:grid md:grid-cols-2">
          <h1>Jon Tsiknias</h1>
          <div className="flex justify-between">
            <p>Based in Los Angeles</p>
            <p className="hidden md:block">Available for work</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:items-end">
          <Image
            alt="animated profile picture"
            className="w-60"
            src="/placeholder-profile.jpg"
            width="476"
            height="476"
          />
          <h2>Developer</h2>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default Header;
