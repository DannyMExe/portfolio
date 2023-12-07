"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Ultra } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>Javascript</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul>
        <li>Umami Meats E-commerce Project</li>
        <li>Capstone Bookie Sports Betting Project</li>
        <li>BiteBook Restaurant Journal Project</li>
        <li>Freelance: zafralerman.com</li>
        <li>Freelance: lermaninstitute.org</li>
        <li>Volunteer: HairWeShare.org WordPress Website</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li>Some College (Computer Science & Business)</li>
        <li>Fullstack Academy Bootcamp</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>Javahsdhscript</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/about-image.png" width={500} height={500} />
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae suscipit eum nemo impedit eius inventore modi veniam
              delectus nesciunt exercitationem! Id totam, harum laboriosam
              voluptates nam assumenda maiores alias nemo!
            </p>
            <div className="flex flex-row mt-8 gap-2">
              {/* <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton> */}
              {["Skills", "Experience", "Education"].map((skill, idx) => {
                return (
                  <TabButton
                    selectTab={() => handleTabChange(skill)}
                    active={tab === skill}
                    key={idx}
                  >
                    {skill}
                  </TabButton>
                );
              })}
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
