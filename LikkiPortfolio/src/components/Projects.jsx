import React, { useState } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  HeartPulse, 
  Users
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    if (id.includes("health")) return HeartPulse;
    return Users;
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Full-stack and RESTful backend applications engineered with Java, Spring Boot, Spring Data JPA, and relational databases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => {
            const IconComp = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/40 border border-slate-800 hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 group"
              >
                <div>
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      {project.accentBadge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.date ? project.date : `Project #${index + 1}`}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:text-indigo-300 transition-all shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Exact Resume Bullet Points */}
                  <div className="space-y-2.5 my-5">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Pill List */}
                  <div className="p-3.5 rounded-xl bg-slate-800/30 border border-slate-800/80 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights &amp; Architecture:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {project.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Tech Stack Chips + GitHub & Details Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-indigo-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* GitHub Link Button for Project */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 hover:border-slate-500 transition-all shadow-sm"
                      title="View GitHub Repository (likhithasathivada-04)"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                      <span>GitHub</span>
                    </a>

                    {/* Details Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 text-xs font-semibold border border-indigo-500/30 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xl rounded-2xl bg-[#0E1424] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    {selectedProject.accentBadge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Project Description (From Resume)
                </h4>
                <div className="space-y-2">
                  {selectedProject.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-indigo-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
