import React from "react";

function Bio() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-10">
          <h2>Experience</h2>
          <div className="flex flex-col gap-y-1">
            <p>Art Director - Nike</p>
            <p>Nike Running, Nike Training, Jordan, Nike Sport</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>Art Director - U.U.M Agency</p>
            <p>Dior, Gucci, Disney, Mugler, Decathlon</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>Design Lead - M.A.D Production</p>
            <p>KFC, Balenciaga, CGV Cinema</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>Designer/Photographer - M.M.M Agency</p>
            <p>Adidas, Calvin Klein, Tommy Hilfiger, NYC Healthcare</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <h2>About</h2>
          <p>
            Hello there! My name is Chandler. As an art director, I bring a
            passion for creativity and a strategic mindset to every project I
            work on. With a background in visual arts and a keen eye for design,
            I have honed my skills in conceptualizing and executing visually
            compelling ideas. I have had the opportunity to collaborate with
            talented teams and clients across various industries, ranging from
            advertising to film and digital media
          </p>
          <a target="_blank" href="/resume.pdf">
            Download resume
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
