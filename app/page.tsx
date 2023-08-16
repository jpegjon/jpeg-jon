import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
export default function Home() {
  return (
    <main>
      <div className="my-10 flex flex-col gap-y-16 p-4 md:items-center md:p-0">
        <div className="flex flex-col gap-y-10 md:w-2/5">
          <div className="flex flex-col justify-between gap-y-4 md:flex-row">
            <div className="flex gap-x-4">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-xl md:text-3xl">
                  Jonathan Tsikniadopoulos
                </h1>
                <p className="text-lg text-pumpkin">
                  Web developer & project manager
                </p>
              </div>
            </div>
            <div className="flex h-fit flex-row items-center justify-between gap-y-3 md:flex-col">
              <div className="flex gap-x-3">
                <a
                  target="_blank"
                  className="h-fit"
                  href="https://github.com/jpegjon"
                >
                  <FiGithub className="text-2xl" />
                </a>
                <a
                  target="_blank"
                  className="h-fit"
                  href="https://www.linkedin.com/in/jpegjon/"
                >
                  <FiLinkedin className="text-2xl" />
                </a>
                <a
                  target="_blank"
                  className="h-fit"
                  href="mailto:jon.tsiknias@gmail.com"
                >
                  <FiMail className="text-2xl" />
                </a>
                <a
                  target="_blank"
                  className="h-fit"
                  href="https://www.instagram.com/jpeg_jon/"
                >
                  <FiInstagram className="text-2xl" />
                </a>
              </div>
              <div className="flex">
                <a
                  className="flex items-center gap-x-2 rounded-md border-2 border-neutral-900 bg-neutral-900 px-3.5 py-2 font-medium text-neutral-100 transition-colors duration-500 hover:bg-transparent hover:text-neutral-900"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <span>View résumé</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-4">
            <p className="text-lg">
              Back in 2006, I spent my evenings creating custom MySpace layouts
              and learning the ins and outs of HTML and CSS. Fast forward to
              today, where I've had the privilege of building software for a{" "}
              <a
                className="font-black underline"
                href="https://qodespace.com/"
                target="_blank"
              >
                start-up
              </a>
              , a large{" "}
              <a
                className="font-black underline"
                href="https://www.nogin.com/"
                target="_blank"
              >
                enterprise company
              </a>
              , and everything in between.
            </p>
            <p className="text-lg">
              These days, I lead a team of developers and build software
              solutions for our e-commerce clients at{" "}
              <a
                className="font-black underline"
                href="https://qodespace.com/"
                target="_blank"
              >
                Qode Space
              </a>
              .
            </p>
            <p className="text-lg">
              When I'm not in front of my computer, I enjoy long walks with my
              dog and girlfriend, going to soccer games, and playing video
              games.
            </p>
          </div>
          <hr className="mx-auto w-7/12 border-4 border-neutral-900" />
        </div>
        <div className="flex flex-col gap-y-4 md:w-2/5">
          <h1 className="text-4xl">Projects</h1>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-x-10 gap-y-4 md:flex-row">
              <div className="basis-1/2">
                <Image
                  className="h-full rounded-2xl border-2 border-black object-cover"
                  src="/website-homepage.jpg"
                  width={600}
                  height={500}
                  alt="a homepage screenshot of jpegjon.com"
                />
              </div>
              <div className="flex basis-1/2 flex-col gap-y-4">
                <h3 className="text-3xl">Portfolio Site</h3>
                <p className="text-lg">
                  This very site you're on! Made with Next.js for image
                  optimizations and other performance benefits, and Tailwind CSS
                  for styling. Deployed using Vercel CLI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Next.js
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-x-4">
                  <a
                    href="https://github.com/jpegjon/jpeg-jon"
                    target="_blank"
                    className="flex items-center gap-x-2 rounded-md border-2 border-neutral-900 px-3.5 py-2 font-medium text-neutral-900 transition-colors duration-500 hover:bg-neutral-900 hover:text-neutral-100"
                  >
                    <span>View code</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 md:flex-row">
              <div className="basis-1/2">
                <Image
                  className="h-full rounded-2xl border-2 border-black object-cover"
                  src="/twitter-clone-homepage.jpg"
                  width={600}
                  height={500}
                  alt="a homepage screenshot of the twitter clone web app"
                />
              </div>
              <div className="flex basis-1/2 flex-col gap-y-4">
                <h3 className="text-3xl">Twitter Clone</h3>
                <p className="text-lg">
                  A web app with NextAuth authentication, where a user can post
                  new Tweets or comment on existing ones. Sanity is used in the
                  back-end to fetch Tweets and also link Tweets to their
                  comments.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Next.js
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Sanity CMS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Vercel
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    Toast
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    GROQ
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-xs font-medium text-neutral-900">
                    NextAuth
                  </span>
                </div>
                <div className="flex gap-x-4">
                  <a
                    href="https://github.com/jpegjon/twitter-clone"
                    target="_blank"
                    className="flex items-center gap-x-2 rounded-md border-2 border-neutral-900 px-3.5 py-2 font-medium text-neutral-900 transition-colors duration-500 hover:bg-neutral-900 hover:text-neutral-100"
                  >
                    <span>View code</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://jpegjon-twitter-clone.vercel.app/"
                    target="_blank"
                    className="flex items-center gap-x-2 rounded-md border-2 border-neutral-900 bg-neutral-900 px-3.5 py-2 font-medium text-neutral-100 transition-colors duration-500 hover:bg-transparent hover:text-neutral-900"
                  >
                    <span>View demo</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:w-2/5">
          <h1 className="text-4xl">Skills</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-4">
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              JavaScript
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              React
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              TypeScript
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Shopify expert
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Site redesigns
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              JIRA
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Agile / scrum
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Vue.js
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Vercel
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              User testing
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Usability testing
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Liquid
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Notion
            </span>
            <span className="inline-flex items-center rounded-md bg-neutral-300 px-4 py-2 font-medium text-neutral-900">
              Webflow
            </span>
            <span className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-neutral-900">
              + more
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:w-2/5">
          <h1 className="text-4xl">Experience</h1>
          <div className="flex flex-col gap-y-4 divide-y-2">
            <div className="flex flex-col items-start justify-between gap-y-3 md:flex-row">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl">Lead developer</h3>
                <p className="max-w-xl text-lg">
                  Deliver high-quality production code for e-commerce brands in
                  the apparel, beauty, and hotel industries. Provide leadership
                  within the engineering department through mentorship and
                  knowledge shares. Lead site redesign and migration projects
                  onto the Shopify platform.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    Liquid
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    CSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    SCSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    HTML
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <p className="text-lg font-black">Qode Space</p>
                <p className="text-lg">Jul 2020 - Present</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-y-3 last:pt-2 md:flex-row">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl">Project Manager</h3>
                <p className="max-w-xl text-lg">
                  Lead a team of developers in delivering new features and
                  functional software for e-commerce brands. Lead daily
                  standups, weekly sprint planning and post-project
                  retrospectives.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    JIRA
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    Agile / Scrum
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    User testing
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    CSS
                  </span>
                  <span className="inline-flex items-center rounded-md border border-neutral-900 px-2 py-1 text-sm font-medium text-neutral-900">
                    HTML
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <p className="text-lg font-black">Nogin</p>
                <p className="text-lg">Nov 2011 - Jul 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
