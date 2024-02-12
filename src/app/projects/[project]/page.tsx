"use client";

import Navbar from "@/components/global/Navbar";
import { projects } from "@/data/content/projects";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import Youtube from "@/components/global/Youtube";

export default function Page({ params }: { params: { project: string } }) {
  const project = projects.find((item) => item.path === params.project);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                dangerouslySetInnerHTML={{
                  __html: isClient ? project?.desc ?? "" : ""
                }}
              ></p>
              <div className="flex gap-2">
              {project?.appstore ? (
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href={project?.appstore}
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/appstore.svg"}
                    sizes="100vw"
                    style={{ width: "100%", height: "40px", cursor: "pointer" }}
                    radius="none"
                    loading="lazy"
                  />
                </a>
              ) : (
                <></>
              )}
              {project?.testflight ? (
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href={project?.testflight}
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/testflight.svg"}
                    sizes="100vw"
                    style={{ width: "100%", height: "40px", cursor: "pointer" }}
                    radius="none"
                    loading="lazy"
                  />
                </a>
              ) : (
                <></>
              )}
              {project?.newspaper ? (
                <a
                  className="cursor-pointer"
                  target="_blank"
                  href={project?.newspaper}
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/newspaper.svg"}
                    sizes="100vw"
                    style={{ width: "100%", height: "40px", cursor: "pointer" }}
                    radius="none"
                    loading="lazy"
                  />
                </a>
              ) : (
                <></>
              )}
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-3 md:gap-6 py-6">
            {project?.img.map((item, index) => (
              <div key={index}>
                <Image
                  src={item}
                  alt={project.title}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                  radius="none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {project?.video ? isClient && <Youtube url={project.video} /> : <></>}
          <div className="container mx-auto" style={{ maxWidth: "800px" }}>
            <div className="text-white px-4 md:px-0 content">
              <p
                className="text-xl md:text-3xl py-10"
                dangerouslySetInnerHTML={{
                  __html: isClient ? project?.footer ?? "" : ""
                }}
              ></p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
