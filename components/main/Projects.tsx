import React from "react";
import ProjectsCard from "../sub/ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis proyectos
      </h1>
      <div className="h-full h-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectsCard
          src="/NextWebsite.png"
          title="Modern Next.js Portafolio"
          description="Lorem ipsum dolor sit amet. Sed voluptatibus atque vel consequuntur quibusdam est quia beatae est deleniti magni non aliquam alias."
        />
         <ProjectsCard
          src="/CardImage.png"
          title="Interactive website cards"
          description="Lorem ipsum dolor sit amet. Sed voluptatibus atque vel consequuntur quibusdam est quia beatae est deleniti magni non aliquam alias."
        />
         <ProjectsCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portafolio"
          description="Lorem ipsum dolor sit amet. Sed voluptatibus atque vel consequuntur quibusdam est quia beatae est deleniti magni non aliquam alias."
        />
      </div>
    </div>
  );
};

export default Projects;
