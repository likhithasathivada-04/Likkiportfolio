import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { GraduationCap, Award, Calendar, BookOpen, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Solid academic progression with sustained high distinction and rigorous computer science curriculum.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESUME_DATA.education.map((edu, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

              <div>
                {/* Badge and Period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Score / Grade Box */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {edu.scoreType}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 font-bold text-sm">
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
