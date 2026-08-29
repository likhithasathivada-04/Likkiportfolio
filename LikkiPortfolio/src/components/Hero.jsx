import React, { useState } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { 
  Download, 
  ArrowRight, 
  Mail, 
  FileText, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Layers,
  GraduationCap,
  Award,
  Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero({ onOpenResumeModal }) {
  const [activeCodeTab, setActiveCodeTab] = useState("java");

  const codeSnippets = {
    java: `// Java & Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/fitness")
public class FitnessController {
    
    @Autowired
    private FitnessTrackerService trackerService;

    @GetMapping("/biometrics/{userId}")
    public ResponseEntity<WellnessReport> getBiometrics(
            @PathVariable Long userId) {
        WellnessReport report = trackerService.generateInsights(userId);
        return ResponseEntity.ok(report);
    }
}`,
    react: `// React.js Metric Insight Component
export const MetricTracker = ({ userGoals, liveData }) => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const report = calculateWellnessScore(liveData);
    setAnalytics(report);
  }, [liveData]);

  return <InsightCard data={analytics} status="active" />;
};`,
    sql: `-- MySQL Relational Architecture
CREATE TABLE water_usage_logs (
    log_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    zone_identifier VARCHAR(64) NOT NULL,
    flow_rate_lpm DECIMAL(10, 2) NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_zone_time (zone_identifier, recorded_at)
);`
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Developer Internships & Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-slate-400 font-medium text-base sm:text-lg tracking-wide">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                  {RESUME_DATA.personal.name}
                </span>
              </h1>
              <div className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                {RESUME_DATA.personal.headline}
              </div>
            </div>

            {/* Summary description strictly from resume */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer Science student at <strong className="text-white font-semibold">Vignan's Institute of Engineering for Women</strong> with strong foundations in <strong className="text-indigo-300">Java, Data Structures, SQL, OOP</strong>, along with web and backend engineering in <strong className="text-indigo-300">Spring Boot, REST APIs, and React.js</strong>.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-indigo-400">8.36</div>
                <div className="text-[11px] text-slate-400 font-medium">B.Tech CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">24+</div>
                <div className="text-[11px] text-slate-400 font-medium">Google Cloud Badges</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">95%</div>
                <div className="text-[11px] text-slate-400 font-medium">HSC MPC Score</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              {/* Most Important: Direct Original PDF Download Link */}
              <a
                href={RESUME_DATA.personal.resumePdfUrl}
                download={RESUME_DATA.personal.resumeDownloadName}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                title="Download original byte-for-byte resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Original Resume</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-indigo-500/50 transition-all hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              {/* Preview Original PDF Modal Trigger */}
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-1.5 px-3 py-3 rounded-xl text-xs text-slate-400 hover:text-indigo-300 hover:bg-slate-800/40 transition-colors"
                title="Preview Original Resume PDF"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Quick Preview</span>
              </button>
            </div>

            {/* Direct Contact & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{RESUME_DATA.personal.email}</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Portrait Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glowing gradient backdrops */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-cyan-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] border border-slate-700/70 p-4 sm:p-5 shadow-2xl overflow-hidden">
                {/* Image Container with Elegant Rounded Corners */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/5] shadow-inner">
                  <img
                    src={RESUME_DATA.personal.profileImage}
                    alt={RESUME_DATA.personal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/90 via-transparent to-transparent"></div>

                  {/* Candidate Name Bar on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">
                        {RESUME_DATA.personal.name}
                      </div>
                      <div className="text-[11px] text-indigo-300 font-medium">
                        B.Tech Computer Science (2023–2027)
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold text-xs">
                      8.36 CGPA
                    </div>
                  </div>
                </div>

                {/* Floating Tech Chips Below Image */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="block font-bold text-indigo-400">Java</span>
                    <span className="text-[10px] text-slate-400">Primary Core</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="block font-bold text-purple-400">Spring Boot</span>
                    <span className="text-[10px] text-slate-400">REST APIs</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="block font-bold text-cyan-400">React.js</span>
                    <span className="text-[10px] text-slate-400">Web UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Code Terminal Showcase Bar */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#0C1220] border border-slate-800 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#0A0E1A] border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  sathivada_likhitha_engineering.dev
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  Full Stack Architecture
                </span>
              </div>
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex items-center bg-[#070B14] px-3 pt-2 border-b border-slate-800/60 gap-2 text-xs font-mono">
              <button
                onClick={() => setActiveCodeTab("java")}
                className={`px-3.5 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === "java"
                    ? "bg-[#0C1220] text-indigo-300 border-t border-x border-slate-700/80 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Java &amp; Spring Boot
              </button>
              <button
                onClick={() => setActiveCodeTab("react")}
                className={`px-3.5 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === "react"
                    ? "bg-[#0C1220] text-cyan-300 border-t border-x border-slate-700/80 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                React.js Frontend
              </button>
              <button
                onClick={() => setActiveCodeTab("sql")}
                className={`px-3.5 py-1.5 rounded-t-lg transition-colors flex items-center gap-1.5 ${
                  activeCodeTab === "sql"
                    ? "bg-[#0C1220] text-purple-300 border-t border-x border-slate-700/80 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                MySQL Relational Schema
              </button>
            </div>

            {/* Code Window Body */}
            <div className="p-4 sm:p-5 bg-[#0A0F1D] font-mono text-xs overflow-x-auto min-h-[190px]">
              <pre className="text-slate-300 leading-relaxed">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>

            {/* Bottom Card Summary */}
            <div className="p-3.5 bg-[#080C16] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Resume Tech Stack: Java, SQL, Spring Boot, REST APIs, React.js</span>
              </div>
              <a
                href={RESUME_DATA.personal.resumePdfUrl}
                download={RESUME_DATA.personal.resumeDownloadName}
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 hover:underline text-[11px]"
              >
                <span>Download Original PDF</span>
                <Download className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
