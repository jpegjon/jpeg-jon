import React from "react";

function Bio() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-10">
          <h2>Experience</h2>
          <div className="flex flex-col gap-y-1">
            <p className="font-light">Lead Developer - Qode Space</p>
            <p className="font-light text-gray-500">2020 - Present</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="font-light">Technical Project Manager - Nogin</p>
            <p className="font-light text-gray-500">2018 - 2020</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="font-light">Project Manager - Branded Online</p>
            <p className="font-light text-gray-500">2011 - 2018</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <h2>About</h2>
          <p className="text-xl font-light leading-normal md:text-2xl">
            Hello there! My name is Jon. As an experienced developer, I bring a
            passion for creativity, problem-solving and a strategic mindset to
            every project I work on. With a background in computer science and
            over a decade of project management experience, I have honed my
            skills in conceptualizing and executing visually compelling ideas. I
            have had the opportunity to collaborate with talented teams and
            clients across various industries, ranging from fashion to beauty
            and entertainment.
          </p>
          <a
            className="flex w-max flex-row items-center gap-x-2 rounded-full border border-gray-300 px-4 py-2 transition duration-300 hover:border-gray-400"
            target="_blank"
            href="/resume.pdf"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-[#f06e00]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>
            <span>Download resume</span>
          </a>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default Bio;
