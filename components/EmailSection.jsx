import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;`s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I`&apos;`m currently looking for new oppurtunities, my inbox is always
          open. Whether you have a question or just want to say hi, I`&apos;`ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/dannymexe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={30}
              className="text-white hover:text-gray-500 transition duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/danny-margolin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="text-white hover:text-gray-500 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
