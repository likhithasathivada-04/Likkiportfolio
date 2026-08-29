import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { X, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export default function ResumeViewerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl h-[90vh] rounded-2xl bg-[#0C1220] border border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-[#090E18] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>{RESUME_DATA.personal.name} - Original Resume</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  Original PDF
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Official document • 100% byte-for-byte original file
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <a
              href={RESUME_DATA.personal.resumePdfUrl}
              download={RESUME_DATA.personal.resumeDownloadName}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded Original PDF Preview */}
        <div className="flex-1 bg-slate-950 p-2 relative">
          <iframe
            src={`${RESUME_DATA.personal.resumePdfUrl}#toolbar=0&navpanes=0`}
            title="Sathivada Likhitha Original Resume PDF"
            className="w-full h-full rounded-xl border border-slate-800/80 bg-white"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 bg-[#090E18] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct static file download: <code className="text-indigo-300 font-mono">/SATHIVADA_LIKHITHA_RESUME.pdf</code></span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
