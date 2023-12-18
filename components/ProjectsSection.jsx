import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    desc: "Welcome to my personal showcase! Crafted with the latest React and Next.js technologies, this portfolio website is more than just a digital space—it's a vibrant reflection of my journey as a web developer. Here, you'll find a brief introduction about me, detailing my passion for technology and creative problem-solving. Dive into my resume to explore my professional experiences, skills, and the milestones I've achieved in the tech world. Most excitingly, this site features a gallery of my projects, each one a testament to my expertise and dedication in web development. Whether you're a fellow developer, a potential employer, or just curious, I invite you to explore, engage, and discover the world through my code!",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    desc: "Welcome to my personal showcase! Crafted with the latest React and Next.js technologies, this portfolio website is more than just a digital space—it's a vibrant reflection of my journey as a web developer. Here, you'll find a brief introduction about me, detailing my passion for technology and creative problem-solving. Dive into my resume to explore my professional experiences, skills, and the milestones I've achieved in the tech world. Most excitingly, this site features a gallery of my projects, each one a testament to my expertise and dedication in web development. Whether you're a fellow developer, a potential employer, or just curious, I invite you to explore, engage, and discover the world through my code!",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    desc: "Welcome to my personal showcase! Crafted with the latest React and Next.js technologies, this portfolio website is more than just a digital space—it's a vibrant reflection of my journey as a web developer. Here, you'll find a brief introduction about me, detailing my passion for technology and creative problem-solving. Dive into my resume to explore my professional experiences, skills, and the milestones I've achieved in the tech world. Most excitingly, this site features a gallery of my projects, each one a testament to my expertise and dedication in web development. Whether you're a fellow developer, a potential employer, or just curious, I invite you to explore, engage, and discover the world through my code!",
    image: "/images/projectPortfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
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
