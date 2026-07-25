# Production-Ready Developer Portfolio Website

A modern, high-performance, dark-mode developer portfolio web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons. Pre-configured for **Sravya Vemuri** (AI & ML Engineer / Full Stack Developer).

![Portfolio Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

---

## Key Features

- **Responsive Single-Page Layout**: Smooth scroll navigation across Hero, About, Skills, Projects, Experience, and Contact sections.
- **Glassmorphism Dark Aesthetics**: Custom Tailwind color palette, glow backdrop effects, sleek dark cards, and subtle micro-animations.
- **Centralized Data Layer (`data/portfolio.ts`)**: Update projects, skills, education, experience, and contact info in a single file without modifying UI components.
- **Interactive Project Showcase**: Responsive 3-column card grid with category filtering tabs, tech stack tags, GitHub links, and live demo URLs.
- **Validated Contact Form**: Client-side validation for Name, Email, and Message with instant visual feedback and success confirmation states.
- **100% TypeScript Safety & Next.js App Router**: Optimized for Vercel deployment with zero build errors or warnings.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Local Development Instructions

### Prerequisites
Make sure you have Node.js (v18.0.0 or higher) installed on your system.

### 1. Install Dependencies
Open your terminal in the project root directory and run:
```bash
npm install
```

### 2. Run Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
To verify production build and type checking locally:
```bash
npm run build
```
To run the production build locally:
```bash
npm run start
```

---

## How to Customize Content

All personal data, skills, projects, and contact info are stored in `data/portfolio.ts`.

To update your details:
1. Open `data/portfolio.ts` in your code editor.
2. Edit any of the following fields:
   - `personal`: Name, role, tagline, bio, contact email, phone, GitHub, LinkedIn.
   - `stats`: Key metric counters shown on the hero section.
   - `skillCategories`: Categorized lists of skills and proficiency levels.
   - `projects`: Add/edit projects with titles, descriptions, tech stacks, GitHub links, and live URLs.
   - `experience`: Work/internship experience items.
   - `education`: Academic history and CGPA metrics.
   - `certifications`: Professional licenses and course certifications.

Save the file, and Next.js will automatically hot-reload the updates!

---

## Deployment to Vercel

This portfolio is fully optimized for one-click deployment on [Vercel](https://vercel.com).

### Option 1: Via Vercel Dashboard (Recommended)
1. Push your codebase to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New" -> "Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and host your portfolio with an SSL-enabled domain in under 60 seconds!

### Option 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## License

MIT License. Feel free to use this template to build your own developer portfolio!
