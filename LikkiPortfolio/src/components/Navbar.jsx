import React, { useState, useEffect } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { Download, Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar({ activeSection, onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative">
            <img
              src={RESUME_DATA.personal.profileImage}
              alt={RESUME_DATA.personal.name}
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-indigo-500/50 group-hover:ring-indigo-400 group-hover:scale-105 transition-all shadow-md shadow-indigo-500/20"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#080C14] rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors tracking-tight text-base sm:text-lg">
              {RESUME_DATA.personal.name}
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Top Right Action & Social Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub Link */}
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/90 rounded-lg border border-slate-700/60 hover:border-slate-500 transition-all hover:scale-105"
            title="GitHub Profile (likhithasathivada-04)"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-slate-200" />
          </a>

          {/* LinkedIn Link */}
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/90 rounded-lg border border-slate-700/60 hover:border-blue-500/60 transition-all hover:scale-105"
            title="LinkedIn Profile (likhitha-sathivada)"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
          </a>

          {/* Direct Resume Download Link */}
          <a
            href={RESUME_DATA.personal.resumePdfUrl}
            download={RESUME_DATA.personal.resumeDownloadName}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all ml-1"
            title="Download original resume PDF directly"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>

          {/* Quick Preview Button */}
          <button
            onClick={onOpenResumeModal}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors"
            title="Preview Original Resume PDF"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-800"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-blue-400 hover:bg-slate-800 rounded-lg border border-slate-800"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.resumePdfUrl}
            download={RESUME_DATA.personal.resumeDownloadName}
            className="sm:hidden flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0E18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-slate-800 mb-3">
            <div className="flex items-center gap-3">
              <img
                src={RESUME_DATA.personal.profileImage}
                alt={RESUME_DATA.personal.name}
                className="w-11 h-11 rounded-lg object-cover ring-1 ring-indigo-500/50"
              />
              <div>
                <div className="font-bold text-white text-sm">{RESUME_DATA.personal.name}</div>
                <div className="text-xs text-indigo-300 font-medium">B.Tech CSE • CGPA: 8.36</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 text-blue-400 hover:text-white border border-slate-700"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              download={RESUME_DATA.personal.resumeDownloadName}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Original Resume (PDF)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white font-medium text-sm border border-slate-700"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Preview Original Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
