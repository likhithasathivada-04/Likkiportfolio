import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { Award, Sparkles, Calendar, CheckCircle2, Cloud, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const iconMap = {
    Sparkles: Sparkles,
    Code: Sparkles,
    Award: Award,
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Verified online coursework, hands-on internships, and foundational workspace competency credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESUME_DATA.certifications.map((cert, index) => {
            const IconComp = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                      <ShieldCheck className="w-3 h-3 text-indigo-400" />
                      {cert.badgeCount}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:text-indigo-300 transition-all shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {cert.organization}
                      </p>
                    </div>
                  </div>

                  {/* Duration / Subtitle */}
                  <div className="text-xs font-mono text-indigo-400 mb-4 px-2.5 py-1 rounded bg-indigo-950/40 border border-indigo-800/30 inline-block">
                    {cert.duration}
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {cert.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
