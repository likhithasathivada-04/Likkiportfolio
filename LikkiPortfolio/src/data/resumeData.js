// Single Source of Truth for Sathivada Likhitha's Portfolio
// 100% faithful to the official resume document

export const RESUME_DATA = {
  personal: {
    name: "Sathivada Likhitha",
    initials: "SL",
    profileImage: "/profile.png",
    headline: "Computer Science Student | Java & Full Stack Developer",
    subheadline: "Passionate about building practical software solutions, solving real-world problems, and engineering clean, scalable applications.",
    phone: "+91 9182237441",
    email: "likhithasathivada@gmail.com",
    github: "https://github.com/likhithasathivada-04",
    linkedin: "https://www.linkedin.com/in/likhitha-sathivada-5918a939b/",
    resumePdfUrl: "/SATHIVADA_LIKHITHA_RESUME.pdf",
    resumeDownloadName: "SATHIVADA_LIKHITHA_RESUME.pdf",
    location: "Visakhapatnam, Andhra Pradesh, India",
    status: "Open for Software Developer Internships & Entry-Level Roles",
  },

  summary: {
    text: "Computer Science student with a strong foundation in Java, SQL, Data Structures, and Object-Oriented Programming. Hands-on experience in web development using HTML, CSS, JavaScript, and React.js, along with backend technologies including Spring Boot and REST APIs. Passionate about building practical software solutions, learning new technologies, and solving real-world problems.",
    highlights: [
      {
        title: "Core Foundations",
        description: "Robust command over Java, Data Structures & Algorithms, Object-Oriented Programming, and Relational Databases (MySQL).",
        icon: "Code2"
      },
      {
        title: "Full Stack Mastery",
        description: "Hands-on engineering across frontend (React.js, JavaScript, HTML5, CSS3) and backend frameworks (Spring Boot, REST APIs).",
        icon: "Layers"
      },
      {
        title: "Continuous Learner",
        description: "Google Cloud 24 Skill Badges earned across GenAI, and completed structured Full Stack industry training.",
        icon: "Sparkles"
      },
      {
        title: "Pragmatic Problem Solver",
        description: "Focused on creating impact through real-world applications in smart water sustainability and healthcare tracking.",
        icon: "Target"
      }
    ]
  },

  education: [
    {
      institution: "Vignan's Institute of Engineering for Women",
      degree: "B.Tech - Computer Science",
      period: "2023 – 2027",
      scoreType: "CGPA",
      score: "8.36",
      status: "Pursuing",
      description: "Comprehensive Computer Science engineering curriculum with focus on Data Structures, OOP, Software Engineering, Database Systems, and Web Technologies.",
      badge: "Current Degree",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2021 – 2023",
      scoreType: "MPC",
      score: "95%",
      status: "Completed",
      description: "Mathematics, Physics, and Chemistry (MPC) with exceptional academic excellence (95%). Strong analytical and quantitative problem-solving foundation.",
      badge: "Academic Excellence",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      institution: "M.P.&.E.V.E.M High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2020 – 2021",
      scoreType: "Aggregate",
      score: "92%",
      status: "Completed",
      description: "High academic distinction (92%) with a strong foundational grasp of mathematics and science.",
      badge: "Distinction",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ],

  skills: {
    categories: [
      {
        name: "Programming",
        description: "Core language proficiency",
        icon: "Terminal",
        items: [
          { name: "Java", level: "Advanced", primary: true, tag: "Primary Language" }
        ]
      },
      {
        name: "Core CS",
        description: "Computer Science fundamentals",
        icon: "Cpu",
        items: [
          { name: "Data Structures & Algorithms", level: "Proficient", primary: true, tag: "Problem Solving" },
          { name: "Object-Oriented Programming (OOP)", level: "Proficient", primary: true, tag: "Architecture" }
        ]
      },
      {
        name: "Web Development",
        description: "Frontend interfaces & web standards",
        icon: "Globe",
        items: [
          { name: "React.js", level: "Hands-on", primary: true, tag: "Component UI" },
          { name: "JavaScript", level: "Proficient", primary: true, tag: "ES6+" },
          { name: "HTML5", level: "Advanced", primary: false, tag: "Semantic Markup" },
          { name: "CSS3", level: "Advanced", primary: false, tag: "Responsive Styling" }
        ]
      },
      {
        name: "Backend",
        description: "Server architecture & API design",
        icon: "Server",
        items: [
          { name: "Spring Boot", level: "Hands-on", primary: true, tag: "Microservices & APIs" },
          { name: "REST APIs", level: "Proficient", primary: true, tag: "Integration" }
        ]
      },
      {
        name: "Database",
        description: "Data persistence & query optimization",
        icon: "Database",
        items: [
          { name: "MySQL", level: "Proficient", primary: true, tag: "Relational Queries" }
        ]
      },
      {
        name: "Tools & Environment",
        description: "Developer tools & version control",
        icon: "Wrench",
        items: [
          { name: "GitHub", level: "Proficient", primary: false, tag: "Version Control" },
          { name: "VS Code", level: "Proficient", primary: false, tag: "IDE" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "healthcare-fitness-tracker",
      title: "Healthcare and Fitness Tracker App",
      subtitle: "Comprehensive health, nutrition, and biometric tracking mobile web application",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Healthcare & Wellness",
      githubUrl: "https://github.com/likhithasathivada-04",
      bullets: [
        "Developing a mobile application that promotes healthy living by tracking fitness activities, nutrition, and personal wellness goals.",
        "Combines real-time biometric data, personalized activity insights, and preventive health alerts to help users take proactive control of their well-being."
      ],
      highlights: [
        "Real-time biometric data capture and tracking",
        "Personalized activity and wellness insights",
        "Preventive health alert mechanism",
        "Intuitive mobile-first responsive user interface"
      ],
      color: "from-blue-600/20 via-indigo-600/10 to-transparent",
      borderColor: "border-blue-500/30",
      accentBadge: "Healthcare Tech"
    },
    {
      id: "aquasaver-smart-water",
      title: "AquaSaver - Smart Water Management & Reporting App",
      subtitle: "Sustainable water resource monitoring and accountability platform",
      technologies: ["HTML", "CSS", "JavaScript", "Flask"],
      category: "Sustainability & Smart Management",
      githubUrl: "https://github.com/likhithasathivada-04",
      bullets: [
        "Successfully implemented a smart water management system, resulting in significant water savings and cost reductions.",
        "The app builds accountability through usage reporting, helping reduce waste, lower costs, and support sustainable water management."
      ],
      highlights: [
        "Smart water usage tracking and monitoring engine",
        "Automated reporting to build accountability and curb wastage",
        "Measurable water savings and cost reduction impact",
        "Full stack integration connecting Flask backend with interactive web UI"
      ],
      color: "from-cyan-600/20 via-blue-600/10 to-transparent",
      borderColor: "border-cyan-500/30",
      accentBadge: "Sustainability Tech"
    }
  ],

  certifications: [
    {
      id: "google-genai",
      title: "Generative AI by Google",
      organization: "Google Cloud Skills Boost",
      date: "Nov 2024",
      duration: "45-hour Online Course",
      badgeCount: "24 Skill Badges (Beginner to Advanced)",
      bullets: [
        "Completed 45-hour online course with 24 skill badges (Beginner to Advanced) on Google Cloud Skills Boost."
      ],
      tags: ["Generative AI", "Google Cloud", "24 Badges", "Cloud Skills"],
      icon: "Sparkles",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      id: "full-stack-internship",
      title: "Learning Full Stack Development",
      organization: "Full Stack Development Internship",
      date: "12 May 2025 – 9 July 2025",
      duration: "Hands-on Industry Internship",
      badgeCount: "Hands-on Training",
      bullets: [
        "Successfully completed a Full Stack Development internship with hands-on training in Java and web development."
      ],
      tags: ["Full Stack", "Java", "Web Development", "Hands-on Training"],
      icon: "Code",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: "digital-edge-101",
      title: "Digital Edge 101",
      organization: "IT-ITeS Sector Skills Council (NASSCOM)",
      date: "7 Mar 2026",
      duration: "Professional Competencies Certification",
      badgeCount: "NASSCOM Certified",
      bullets: [
        "Developed foundational knowledge of workspace readiness, digital skills, and professional competencies."
      ],
      tags: ["NASSCOM", "Workspace Readiness", "Digital Skills", "Professional Competencies"],
      icon: "Award",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    }
  ],

  achievements: [
    {
      title: "Google Cloud Skill Badges",
      metric: "24 Badges",
      description: "Earned 24 skill badges through Google Cloud Skills Boost spanning Beginner to Advanced tiers.",
      icon: "CheckCircle2",
      color: "border-amber-500/40 bg-amber-500/10 text-amber-300"
    },
    {
      title: "Full Stack Development Training",
      metric: "Internship Completed",
      description: "Completed hands-on practical training in Java and full stack web development architectures.",
      icon: "CheckCircle2",
      color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
    },
    {
      title: "Continuous Backend Skill Growth",
      metric: "Active Development",
      description: "Continuously developed practical engineering skills in Java, SQL, Spring Boot, and REST APIs.",
      icon: "CheckCircle2",
      color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
    }
  ]
};
