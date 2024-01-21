"use client";

import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import { projects } from "@/data/content/projects";

export default function Page({ params }: { params: { project: string } }) {
  const project = projects.find((item) => item.path === params.project);
  return (
    <>
      <Navbar />
      <div className="placeholder h-[100px] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="container mx-auto" style={{ maxWidth: "800px" }}>
            <div className="text-white px-4 md:px-0">
              <p
                className="text-xl md:text-3xl py-10"
                dangerouslySetInnerHTML={{ __html: project?.desc ?? "" }}
              ></p>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-3 md:gap-6 py-6">
            {project?.img.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt={project.title}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                width={0}
                height={0}
              />
            ))}
          </div>
          <div className="container mx-auto" style={{ maxWidth: "800px" }}>
            <div className="text-white px-4 md:px-0">
              <p className="text-xl md:text-3xl py-10">{project?.footer}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}