import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { 
  Code2, 
  Layers, 
  Sparkles, 
  Target, 
  Download, 
  FileText, 
  CheckCircle, 
  GraduationCap, 
  Briefcase,
  Mail
} from "lucide-react";

export default function About({ onOpenResumeModal }) {
  const iconMap = {
    Code2: Code2,
    Layers: Layers,
    Sparkles: Sparkles,
    Target: Target,
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Sathivada Likhitha
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            A dedicated Computer Science student committed to building dependable software solutions with clean code, scalable architecture, and continuous learning.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card with Photo & Quick Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 text-center space-y-4 shadow-xl">
              <div className="relative inline-block mx-auto">
                <img
                  src={RESUME_DATA.personal.profileImage}
                  alt={RESUME_DATA.personal.name}
                  className="w-32 h-32 rounded-2xl object-cover ring-2 ring-indigo-500/40 shadow-lg mx-auto"
                />
                <span className="absolute bottom-1 right-1 px-2 py-0.5 rounded-full bg-emerald-500 text-black font-bold text-[10px]">
                  ACTIVE
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {RESUME_DATA.personal.name}
                </h3>
                <p className="text-xs text-indigo-300 font-medium mt-0.5">
                  B.Tech - Computer Science (2023–2027)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Vignan's Institute of Engineering for Women
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2 text-left text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Current CGPA:</span>
                  <span className="font-bold text-indigo-300">8.36</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">HSC Score:</span>
                  <span className="font-bold text-purple-300">95% (MPC)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">SSC Score:</span>
                  <span className="font-bold text-cyan-300">92%</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Skill Badges:</span>
                  <span className="font-bold text-amber-300">24 Badges (Google Cloud)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <a
                  href={RESUME_DATA.personal.resumePdfUrl}
                  download={RESUME_DATA.personal.resumeDownloadName}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Resume Summary & 4 Pillars */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-indigo-500 rounded-full inline-block"></span>
                Professional Summary
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                {RESUME_DATA.summary.text}
              </p>

              {/* Key Competency Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white block">Java &amp; Core CS</span>
                    Data Structures, Algorithms, OOP
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white block">Backend Frameworks</span>
                    Spring Boot, REST APIs, MySQL
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white block">Frontend Engineering</span>
                    React.js, JavaScript, HTML5, CSS3
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white block">Continuous Training</span>
                    Google Cloud Badges &amp; Internship
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Highlight Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.summary.highlights.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1 group-hover:text-indigo-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
