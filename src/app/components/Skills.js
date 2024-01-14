import React from "react";

function Skills() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex flex-col gap-y-20 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-8">
          <h2>Award</h2>
          <ul className="flex flex-col gap-y-2">
            <li>Best Visual Designer of the Year</li>
            <li>The Webby Awards The D&AD</li>
            <li>Awards - Category: Digital Design</li>
            <li>
              The LovieAwards - Category: Websites, Online Advertising, Social
              Media
            </li>
            <li>5x Awwwards</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-8">
          <h2>Publication</h2>
          <ul className="flex flex-col gap-y-2">
            <li>Design Week</li>
            <li>ImagineFX</li>
            <li>Communication Arts</li>
            <li>University of the Arts London</li>
            <li>Creative Review</li>
            <li>3D World</li>
          </ul>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}

export default Skills;
