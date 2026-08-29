import React, { useState } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
  Terminal,
  Layers,
  Check
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const iconMap = {
    Terminal: Terminal,
    Cpu: Cpu,
    Globe: Globe,
    Server: Server,
    Database: Database,
    Wrench: Wrench,
  };

  const categories = RESUME_DATA.skills.categories;

  const filteredCategories =
    selectedCategory === "all"
      ? categories
      : categories.filter((cat) => cat.name.toLowerCase().includes(selectedCategory));

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
            Organized proficiencies across programming languages, core computer science concepts, web engineering, backend architecture, databases, and developer tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setSelectedCategory("programming")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "programming"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            Programming &amp; Core CS
          </button>
          <button
            onClick={() => setSelectedCategory("web")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "web"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            Web &amp; Frontend
          </button>
          <button
            onClick={() => setSelectedCategory("backend")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === "backend"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            Backend &amp; Database
          </button>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const IconComp = iconMap[category.icon] || Code2;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:text-indigo-300 transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-3">
                  {category.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-indigo-300 border border-slate-700/60">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stack Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/40 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                Full Stack &amp; Core CS Synergy
              </div>
              <div className="text-xs text-slate-400">
                Java • Spring Boot • React.js • MySQL • Data Structures &amp; Algorithms
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Strictly Verified Resume Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
