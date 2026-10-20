# UPSC ZONE AI — The Knowledge Atlas

> **An editorial-inspired, modern educational platform combining the elegance of archival atlases, the clarity of premium digital products, and the usefulness of an intelligent preparation dashboard.**

Built for competitive exam and UPSC Civil Services Examination (CSE) aspirants who value discipline, structured revision, and deep contextual understanding over superficial trivia.

---

## 🧭 The Core Creative Direction

The website embodies **The Knowledge Atlas** aesthetic:
- **Warm Atlas Paper Surfaces** (`#F4EFE5` base, `#FFFDFA` card surfaces, `#EAE2D4` secondary sheets).
- **Primary Ink Navy** (`#14283F`) and **Deep Navy Chapter Backgrounds** (`#101D2D`).
- **Terracotta Annotations** (`#BF693D`) for waypoints, highlights, and primary actions.
- **Muted Sage Green** (`#78856A`) for completed goals and verified indicators.
- **Topographic Contour Lines & Geographic Coordinates** (`28°36'N 77°12'E`, `IST 82°30'E`) giving every section an archival cartographic identity.
- **Typographic Harmony**:
  - **Display / Editorial Font**: `Instrument Serif`
  - **Interface / Body Font**: `Manrope`

---

## ⚡ Signature Interaction & Key Features

### 1. The Self-Drawing Preparation Path
- Scroll-responsive animated SVG path representing the 4-stage preparation trajectory:
  - **01 — Build Your Foundation** (NCERTs & Static Core)
  - **02 — Practice with Purpose** (Sectional MCQs & Elimination Drills)
  - **03 — Revise Strategically** (Spaced Repetition & Daily Current Affairs)
  - **04 — Measure Your Progress** (Full-Length Simulations & LBSNAA Apex)
- Waypoints highlight interactively with detailed deliverables inspection.

### 2. Original Cartographic Hero Composition
- Original vector composition connecting Indian geography, knowledge corridors (New Delhi, Mussoorie, Prayagraj, Bengaluru), and active preparation telemetry.
- Dynamic "Next Learning Goal" pulse card with one-click drill launch.

### 3. Believable Educational Product Dashboard
- **Live Interactive Checklist**: Check or uncheck study items—real-time recalculation of daily percentage and progress bars.
- **Mock Test Telemetry**: Net marks, accuracy rate, and negative score deductions.
- **Subject Coverage**: Granular tracking across GS Papers I–IV.
- **Weekly Study Hours**: Responsive cadence graph.

### 4. Current Affairs Editorial Reader
- Mapped strictly to UPSC GS-II and GS-III papers.
- Full reader modal with **Executive Context**, **Key Analytical Dimensions**, **High-Yield Prelims Pointers**, **Mains Angle**, and **Sample Practice Questions**.

### 5. Interactive Previous Year Questions (PYQ) Laboratory
- Real statement-based UPSC format with 4 options.
- Immediate scoring (+2 / -0.66), correctness highlights, and official elimination rationales.

### 6. "Start Free" Diagnostic Itinerary Generator
- 3-step interactive onboarding: select exam year (2025/2026/2027), optional subject, and daily study hours to immediately generate a tailored 4-phase preparation itinerary.

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Atlas tokens & cartographic utilities
- **Icons**: Lucide React
- **Animations & Celebrations**: SVG Stroke-Dash, Canvas Confetti
- **Typography**: Instrument Serif & Manrope (Google Fonts)

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js (v18+ recommended, tested on v24)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Public Deployment Guide

The repository includes pre-configured deployment manifests:
- `vercel.json` for [Vercel](https://vercel.com)
- `netlify.toml` for [Netlify](https://netlify.com)

### Deploying to Vercel
1. Install the Vercel CLI: `npm i -g vercel` (or connect your GitHub repository directly on [vercel.com](https://vercel.com)).
2. Run:
   ```bash
   vercel
   ```
3. When prompted, use default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploying to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli` (or drag and drop the `dist/` directory on [app.netlify.com](https://app.netlify.com)).
2. Run:
   ```bash
   netlify deploy --prod
   ```

---

## 📄 License & Attribution

Designed and developed for **UPSC ZONE AI** under the Knowledge Atlas Design System.
*UPSC ZONE AI is an independent academic preparation platform and is not affiliated with the Union Public Service Commission.*
