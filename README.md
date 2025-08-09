# 🎨 Design Sensei - UI/UX & Graphic Design Website

Welcome to **Design Sensei**, an elegant, futuristic learning platform built using modern web technologies. This site showcases design courses, portfolio highlights, and a mentorship-driven learning experience.

---

## 🌐 Live Preview

> 🔗 [Coming Soon] — Deploy using **Vercel**, **Netlify**, or Firebase Hosting.

---

## 🛠️ Tech Stack

- ⚛️ **React.js (Vite)**
- 🧠 **TypeScript**
- 🎨 **TailwindCSS**
- 🧩 **ShadCN/UI**
- 🛡️ **ESLint**
- 🚀 **Modern Component Structure**

## 📂 Project Structure (as of v0.6.0)

Design-Sensei/
│
├── public/ # Static assets (images, icons, favicons)
│
├── src/
│ ├── app/ # Application root layout and main routes
│ │ ├── layout.tsx # Root layout wrapper
│ │ └── page.tsx # Home page
│ │
│ ├── components/ # Reusable UI components
│ │ ├── SidebarNav.tsx # Sidebar navigation component
│ │ ├── ThemeToggle.tsx # Light/Dark mode toggle
│ │ └── ui/ # shadcn/ui components
│ │
│ ├── pages/ # Page-specific components
│ │ ├── Profile.tsx # User profile page
│ │ ├── Login.tsx # Login page
│ │ └── Signup.tsx # Signup page
│ │
│ ├── lib/ # Utilities and services
│ │ ├── firebase-config.ts # Firebase initialization
│ │ └── auth.ts # Authentication functions
│ │
│ ├── theme/ # Theme context and provider
│ │ └── theme-provider.tsx # Handles light/dark mode
│ │
│ ├── styles/ # Global styles
│ │ └── index.css # Tailwind base styles
│ │
│ ├── App.tsx # Main app logic and routes
│ ├── main.tsx # React DOM entry point
│ └── vite-env.d.ts # TypeScript declarations
│
├── index.html # HTML entry point
├── package.json # Dependencies and scripts
├── tailwind.config.ts # Tailwind CSS config
├── tsconfig.json # TypeScript config
└── vite.config.ts # Vite build config



---

## 📌 File Details
- **SidebarNav.tsx** – Refactored navigation sidebar with grouped links and search.
- **ThemeToggle.tsx** – Handles switching between light and dark mode.
- **firebase-config.ts** – Initializes Firebase app using `.env` variables.
- **auth.ts** – Contains functions for login, signup, logout, and Google Auth.
- **Profile.tsx** – Profile page UI with user details and form.
- **Login.tsx / Signup.tsx** – Auth pages with email/password + Google sign-in.
- **theme-provider.tsx** – Wraps app with theme context for dark/light mode persistence.
- **index.css** – Tailwind base styles and global resets.

---


