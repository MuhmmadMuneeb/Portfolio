import React from "react";
import { CardContainer, CardBody, CardItem } from "./Card";
import { projects } from "../config/projectsData";

const Projects = () => {
 
  return (
    <section id="projects" className="bg-[#19181c] py-20 px-6">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-5xl md:text-7xl text-white hero-title uppercase">Featured</h2>
        <p className="text-[#66d9ed] roboto-mono-500 tracking-[0.3em] uppercase text-sm mt-2">Selected Works</p>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project, idx) => (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="bg-[#1e1e22] relative group/card border-white/[0.1] hover:border-[#66d9ed]/50 w-full sm:w-[30rem] h-auto rounded-2xl p-6 border transition-all duration-500 shadow-2xl">
              
              {/* Floating Title */}
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white hero-title tracking-tight"
              >
                {project.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-400 text-sm max-w-sm mt-4 roboto-mono-500 leading-relaxed"
              >
                {project.desc}
              </CardItem>

              {/* Project Image */}
              <CardItem translateZ="100" className="w-full mt-6">
                <div className="relative overflow-hidden rounded-xl group-hover/card:shadow-[0_0_30px_rgba(102,217,237,0.2)]">
                   <img
                    src={project.img}
                    className="h-60 w-full object-cover rounded-xl grayscale group-hover/card:grayscale-0 transition-all duration-500"
                    alt={project.title}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                </div>
              </CardItem>

              {/* Tech Tags */}
              <CardItem translateZ="40" className="flex gap-2 mt-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-[#66d9ed] border border-[#66d9ed]/30 px-2 py-1 rounded bg-[#66d9ed]/5">
                    {tag}
                  </span>
                ))}
              </CardItem>

              {/* Bottom Actions */}
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#66d9ed] hover:underline transition-all"
                >
                  CASE STUDY →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-6 py-2 rounded-lg bg-white text-black hover:bg-[#66d9ed] hover:text-black text-xs font-bold transition-all uppercase tracking-tighter"
                >
                  LIVE DEMO
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;