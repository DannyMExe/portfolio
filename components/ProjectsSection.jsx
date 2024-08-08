"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    desc: "Welcome to my personal showcase!",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/DannyMExe/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BiteBook (WIP)",
    desc: "A web app utilizing Google Places to keep a personal list of favorite restaurants with comments/ratings",
    image: "/images/bitebook.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Capstone Bookie",
    desc: "A sports betting clone made as my capstone project from Fullstack Academy.",
    image: "/images/bookie/FSAsb.png",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/DannyMExe/FSABookie",
    previewUrl: "https://www.fsabookie.com/",
  },
  {
    id: 4,
    title: "Professional Website",
    desc: "A professional website done for the client based on their designs.",
    image: "/images/lerman.com.png",
    tag: ["All", "Freelance"],
    gitUrl: "https://github.com/DannyMExe/zafra-lerman",
    previewUrl: "https://zafralerman.com/",
  },
  {
    id: 5,
    title: "Organization Website",
    desc: "A website done for the client's educational organization.",
    image: "/images/institute.png",
    tag: ["All", "Freelance"],
    gitUrl: "https://github.com/DannyMExe/lerman-institute",
    previewUrl: "https://www.lermaninstitute.org/",
  },
  {
    id: 6,
    title: "Umami Meats",
    desc: "An e-commerce group project based on high end Japanese meat and sushi.",
    image: "/images/umamimeats.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "https://umami-meats.vercel.app/steaks",
  },
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={activeTag === "All"}
        />
        <ProjectTag
          name="Projects"
          onClick={handleTagChange}
          isSelected={activeTag === "Projects"}
        />
        <ProjectTag
          name="Freelance"
          onClick={handleTagChange}
          isSelected={activeTag === "Freelance"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            desc={project.desc}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
