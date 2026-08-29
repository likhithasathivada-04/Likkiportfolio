import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { ArrowUp, Download, Heart, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <img
              src={RESUME_DATA.personal.profileImage}
              alt={RESUME_DATA.personal.name}
              className="w-9 h-9 rounded-xl object-cover ring-1 ring-indigo-500/50"
            />
            <div>
              <div className="font-bold text-white text-sm">
                {RESUME_DATA.personal.name}
              </div>
              <div className="text-[11px] text-slate-500">
                Computer Science Student • Software Developer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Actions & Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile (likhithasathivada-04)"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-blue-400 hover:text-blue-300 transition-colors"
              title="LinkedIn Profile (likhitha-sathivada)"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              download={RESUME_DATA.personal.resumeDownloadName}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-colors font-medium text-xs"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Sathivada Likhitha. All rights reserved. Sourced strictly from original resume.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-indigo-400 transition-colors">
              {RESUME_DATA.personal.email}
            </a>
            <span>•</span>
            <span>{RESUME_DATA.personal.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
