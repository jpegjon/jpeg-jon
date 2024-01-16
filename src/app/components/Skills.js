import React from "react";

function Skills() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex flex-col gap-y-20 ">
        <div className="flex flex-col gap-y-8">
          <h2>Skills</h2>
          <ul className="grid grid-cols-2 gap-y-2 font-light">
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Shopify</li>
            <li>Liquid</li>
            <li>Vue</li>
            <li>JIRA</li>
            <li>Webflow</li>
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
