import React from "react";
import Image from "next/image";

function Work() {
  return (
    <div className="flex flex-col px-4 md:px-6">
      <div className="flex flex-col gap-y-8">
        <h2>Selected Work</h2>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-y-3">
            <a
              className="lg:overflow-hidden"
              target="_blank"
              href="https://forloveandlemons.com"
            >
              <Image
                className="h-[300px] max-h-[300px] w-full object-cover lg:h-[700px] lg:max-h-[700px] lg:transition-transform lg:duration-1000 lg:hover:scale-110"
                alt="a model wearing white floral lingerie and lifting dumbbells"
                src="/model-wearing-floral-lingerie-lifting-dumbbells.jpg"
                width="1200"
                height="800"
              />
            </a>
            <div className="flex flex-row justify-between">
              <a target="_blank" href="https://forloveandlemons.com">
                <h3>For Love & Lemons</h3>
              </a>
              <span className="text-gray-400">2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <a
              className="lg:overflow-hidden"
              target="_blank"
              href="https://www.lostin.com"
            >
              <Image
                className="h-[300px] max-h-[300px] w-full object-cover lg:h-[700px] lg:max-h-[700px] lg:transition-transform lg:duration-1000 lg:hover:scale-110"
                alt="LOST iN Europe book cover"
                src="/lost-in-europe-book-cover.jpg"
                width="1200"
                height="800"
              />
            </a>
            <div className="flex flex-row justify-between">
              <a target="_blank" href="https://www.lostin.com">
                <h3>LOST iN</h3>
              </a>
              <span className="text-gray-400">2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <a
              className="lg:overflow-hidden"
              target="_blank"
              href="https://kimikobeauty.com"
            >
              <Image
                className="h-[300px] max-h-[300px] w-full object-cover lg:h-[700px] lg:max-h-[700px] lg:transition-transform lg:duration-1000 lg:hover:scale-110"
                alt="super fine eyebrow pencil"
                src="/super-fine-eyebrow-pencil.jpg"
                width="1200"
                height="800"
              />
            </a>
            <div className="flex flex-row justify-between">
              <a target="_blank" href="https://kimikobeauty.com">
                <h3>Kimiko Beauty</h3>
              </a>
              <span className="text-gray-400">2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <a
              className="lg:overflow-hidden"
              target="_blank"
              href="https://kindtail.com"
            >
              <Image
                className="h-[300px] max-h-[300px] w-full object-cover lg:h-[700px] lg:max-h-[700px] lg:transition-transform lg:duration-1000 lg:hover:scale-110"
                alt="dog resting in crate"
                src="/dog-resting-in-crate.jpg"
                width="1200"
                height="800"
              />
            </a>
            <div className="flex flex-row justify-between">
              <a target="_blank" href="https://kindtail.com">
                <h3>Kindtail</h3>
              </a>
              <span className="text-gray-400">2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default Work;
