import React from "react";

function Footer() {
  return (
    <div className="px-4 pb-12 md:px-6">
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2">
        <div>
          <ul className="flex flex-col gap-y-1">
            <li>
              <a href="mailto:jon.tsiknias@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/jpegjon" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jpegjon" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jpeg_jon" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-3">
            <p className="text-2xl md:text-3xl">
              Don&apos;t be shy! Let&apos;s connect and make something special
            </p>
            <a
              className="w-max text-2xl text-gray-500 md:text-3xl"
              href="mailto:jon.tsiknias@gmail.com"
            >
              jon.tsiknias@gmail.com
            </a>
          </div>
          <p className="font-light">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
