import React from "react";
import SocialMedia from "../Data/SocialMedia.json";

const Footer = () => {
  return (
    <footer className=" m-5 p-5 bg-gray-500 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {SocialMedia.SocialMedia.map((social) => (
            <a
              key={social.id} 
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-16"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-cyan-500 transition-all duration-300">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5"
                />
              </div>
                              <p className="text-xs mt-1">{social.name}</p>

            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
