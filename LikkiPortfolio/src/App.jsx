import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeViewerModal from "./components/ResumeViewerModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "certifications",
      "achievements",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium text-xs shadow-xl shadow-indigo-600/30 flex items-center gap-2 animate-bounce">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
