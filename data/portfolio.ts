export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'AI & ML' | 'Full Stack' | 'Data Science';
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SRAVYA VEMURI",
    role: "AI & ML Engineer / Full Stack Developer",
    tagline: "Building intelligent computer vision systems, robust machine learning pipelines, and responsive web applications.",
    bio: "B.Tech Graduate in Computer Science & Engineering specializing in Artificial Intelligence and Machine Learning (8.35 CGPA). Passionate about turning raw data, computer vision models, and deep learning into production-ready web applications — from civic automation to healthcare decision support.",
    location: "Andhra Pradesh, India",
    email: "vemurisravya3@gmail.com",
    phone: "+91 7671958208",
    github: "https://github.com/sravya-28",
    linkedin: "http://www.linkedin.com/in/sravyavemuri77",
    cgpa: "8.35 / 10.0",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)"
  },

  stats: [
    { label: "CGPA Score", value: "8.35", suffix: "/10" },
    { label: "Model Accuracy Achieved", value: "80.3%", suffix: "" },
    { label: "Key AI & ML Projects", value: "3+", suffix: "" },
    { label: "Certifications", value: "2", suffix: " Verified" }
  ],

  skillCategories: [
    {
      title: "AI & Machine Learning",
      description: "Deep Learning, Computer Vision, and Predictive Modeling",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Deep Learning (CNN)", level: "Advanced" },
        { name: "Computer Vision (OpenCV)", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "TensorFlow / PyTorch", level: "Intermediate" },
        { name: "Image Processing", level: "Advanced" }
      ]
    },
    {
      title: "Web & Full Stack Development",
      description: "Modern Responsive Web Applications & UI/UX Design",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js (App Router)", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "REST APIs", level: "Intermediate" }
      ]
    },
    {
      title: "Data & Infrastructure",
      description: "Database Design, Pipelines, and Version Control",
      skills: [
        { name: "SQL (MySQL / Workbench)", level: "Advanced" },
        { name: "Data Preprocessing", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code & Jupyter", level: "Advanced" },
        { name: "Google Colab", level: "Advanced" },
        { name: "Vercel Deployment", level: "Intermediate" }
      ]
    }
  ] as SkillCategory[],

  softSkills: [
    "Analytical Problem Solving",
    "Time & Project Management",
    "Technical Documentation",
    "Verbal & Written Communication",
    "Agile Collaboration"
  ],

  projects: [
    {
      id: "civic-issue-detection",
      title: "AI-Driven Civic Issues Detection & Automated Reporting System",
      subtitle: "B.Tech Major Capstone Project",
      description: "An automated computer vision system that detects road surface defects (potholes and cracks) from imagery, evaluates damage severity using trained CNN models, and dispatches automated alerts to municipal authorities.",
      highlights: [
        "Built and trained Convolutional Neural Network (CNN) models for road damage classification",
        "Applied OpenCV image processing and feature extraction for noise reduction and precision bounding",
        "Implemented automated alert reporting to reduce manual inspection overhead and speed up repair response times",
        "Evaluated model performance using Accuracy, Precision, Recall, and F1-Score metrics"
      ],
      techStack: ["Python", "Deep Learning", "CNN", "OpenCV", "Computer Vision", "Tailwind CSS"],
      githubUrl: "https://github.com/sravya-28/civic-issue-detection",
      liveUrl: "https://civic-issue-detection.vercel.app",
      category: "AI & ML",
      featured: true,
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Clinical Decision Support & Prediction Pipeline",
      subtitle: "IIDT Blackbucks ML Internship Project",
      description: "An end-to-end machine learning pipeline built on the UCI heart disease dataset that evaluates patient risk profiles, benchmarks 3 classification algorithms, and delivers real-time clinical prediction.",
      highlights: [
        "Benchmarked Logistic Regression, Decision Tree, and Random Forest classifiers",
        "Achieved 80.3% classification accuracy using Random Forest algorithm",
        "Constructed confusion matrices, ROC curves, and detailed classification precision-recall reports",
        "Reduced manual diagnosis review time through an intuitive web prediction interface"
      ],
      techStack: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "SQL", "Flask API"],
      githubUrl: "https://github.com/sravya-28/heart-disease-prediction",
      liveUrl: "https://heart-disease-predict.vercel.app",
      category: "Data Science",
      featured: true,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ai-analytics-dashboard",
      title: "AI Model Performance & Analytics Dashboard",
      subtitle: "Full Stack Next.js Project",
      description: "A production-grade web dashboard designed for tracking real-time ML model metrics, inference speed, dataset distribution, and system logs with sleek dark-mode glassmorphism aesthetics.",
      highlights: [
        "Interactive metrics dashboards with dynamic charts and Framer Motion micro-interactions",
        "Server-rendered Next.js App Router architecture with strict TypeScript safety",
        "Custom responsive navigation with fast filtering across model categories and performance indicators"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
      githubUrl: "https://github.com/sravya-28/ai-analytics-dashboard",
      liveUrl: "https://ai-analytics-dashboard.vercel.app",
      category: "Full Stack",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
    }
  ] as Project[],

  experience: [
    {
      role: "AI & ML Engineer Intern",
      company: "IIDT Blackbucks",
      period: "2 Months Internship",
      type: "Internship",
      location: "Remote / On-site",
      points: [
        "Executed end-to-end machine learning workflows covering data cleaning, normalization, feature scaling, model building, and evaluation.",
        "Built and benchmarked 3 classification models (Logistic Regression, Decision Tree, Random Forest) on real-world medical data.",
        "Achieved 80.3% classification accuracy with Random Forest, identifying top predictive risk markers.",
        "Enabled real-time prediction API for new patient input streams to accelerate medical data screening."
      ]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Technology - B.Tech in CSE (AI & ML)",
      institution: "Dhanekula Institute of Engineering & Technology",
      period: "2022 - 2026",
      grade: "8.35 / 10.0 CGPA",
      details: "Comprehensive coursework in Artificial Intelligence, Machine Learning, Deep Learning, Data Structures, Database Systems, Object-Oriented Programming, and Software Engineering."
    }
  ] as Education[],

  certifications: [
    {
      title: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "April 2023"
    },
    {
      title: "AI Certification",
      issuer: "AICTE",
      date: "June 2025"
    }
  ] as Certification[]
};
