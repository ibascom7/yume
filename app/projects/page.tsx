"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("Select a project");

  const projects = [
    {
      name: "NASC-RTG",
      id: "project-1",
      // Thumbnail from public/, e.g. "/nasc-rtg-poster.png"; a gray box shows until it's set
      image: "",
      description: "A short summary of the poster.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <Link
            href="/projects"
            className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <div className="ml-auto">
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded bg-white text-black hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option disabled>Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-300 rounded-lg p-3 sm:p-4 bg-white shadow-sm"
              >
                <Link
                  href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-bold text-lg sm:text-xl text-black hover:text-gray-600 transition-colors"
                >
                  {project.name}
                </Link>
                <hr className="border-gray-300 my-2 sm:my-3" />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={150}
                        height={150}
                        className="rounded-lg w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover"
                      />
                    ) : (
                      <div className="rounded-lg w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-gray-100" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
