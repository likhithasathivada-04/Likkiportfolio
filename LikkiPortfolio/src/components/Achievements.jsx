import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { Trophy, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Recognized milestones achieved through hands-on technical internships, Google Cloud certifications, and skill development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESUME_DATA.achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:text-indigo-300 transition-all">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
