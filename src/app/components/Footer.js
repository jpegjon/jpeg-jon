import React from "react";

function Footer() {
  return (
    <div className="px-4 pb-12 md:px-6">
      <div className="flex flex-col gap-y-12 md:grid md:grid-cols-2">
        <div>
          <ul className="flex flex-col gap-y-1">
            <li>Instagram</li>
            <li>Behance</li>
            <li>Dribble</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col">
            <p>Don't be shy! Let's connect and make something special</p>
            <a href="mailto:jon.tsiknias@gmail.com">jon.tsiknias@gmail.com</a>
          </div>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
