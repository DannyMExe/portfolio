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
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    desc: "Crafted with the latest Next.js technologies",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    desc: "A brief introduction about me.",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
    <>
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
          name="Web"
          onClick={handleTagChange}
          isSelected={activeTag === "Web"}
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
    </>
  );
};

export default ProjectsSection;
