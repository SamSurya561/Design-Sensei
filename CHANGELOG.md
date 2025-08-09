# Changelog
All notable changes to the "Design Sensei" website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.6.0] - 2025-08-09
### Added
- **Enhanced Sidebar UI/UX**: Refactored the entire sidebar into a new, dedicated `SidebarNav.tsx` component to improve code organization and maintainability.
- **Grouped Navigation**: Reorganized sidebar navigation links into logical groups ("Main Menu," "Support," and "System") with clear headings for a more intuitive user experience.
- **Search Functionality**: Added a search input field to the sidebar header for future feature implementation.

### Changed
- **Redesigned User Footer**: Completely redesigned the user profile section in the sidebar footer to match the user-provided reference image, featuring a cleaner layout with the user's avatar, name, email, and a distinct logout icon.
- **Visual Polish**: Adjusted padding, spacing, and layout throughout the sidebar to create a more balanced, modern, and aesthetically pleasing design.

---

## [0.5.0] - 2025-08-09
### Added
- **User Profile Page**: Created a new, dedicated `/profile` page for authenticated users to manage their account.
- **Profile Information Form**: Implemented a form on the profile page allowing users to update their display name and add a date of birth.
- **Account Management**: Added a section for account settings, including a "Reset Password" option for users who signed up with an email and password.
- **Reusable DatePicker Component**: Built a new DatePicker component using `shadcn/ui` primitives for selecting the date of birth.
- **Profile Page Route**: Added the `/profile` route to `App.tsx` and linked the user's avatar in the sidebar to this new page.

---

## [0.4.0] - 2025-08-08
### Added
- **Dedicated Auth Pages**: Created new, focused pages for `/login` and `/signup` to provide a conventional user authentication experience.
- **Email/Password & Google Sign-In**: Implemented forms on both auth pages for email/password authentication and buttons for Google Sign-In.
- **Conditional Layout Rendering**: Updated the main `App.tsx` layout to intelligently render either the main application with the sidebar or the focused auth pages, depending on the current route.

### Changed
- **Sidebar Auth Links**: Updated the "Log In" and "Sign Up" buttons in the sidebar to be links that navigate to the new dedicated authentication pages.
- **Refined Auth Functions**: Enhanced the `lib/auth.ts` library to include functions for email/password sign-up and to handle errors more gracefully.

---

## [0.3.0] - 2025-08-08
### Added
- **Firebase Integration**: Switched the backend service from Supabase to Firebase for authentication and database services.
- **Firebase Configuration**: Created a `firebase-config.ts` file to initialize the Firebase app using secure environment variables.
- **Global Auth Provider**: Implemented a new `AuthProvider` using React Context to manage and provide the user's authentication state across the entire application.
- **Theme Provider**: Added a `ThemeProvider` to manage the light/dark mode state and persist the user's preference in local storage.

### Changed
- **Dynamic Sidebar Footer**: The sidebar footer now dynamically displays the user's profile information and a "Log Out" button when authenticated, or "Log In" / "Sign Up" buttons when not.

---

## [0.2.0] - 2025-08-08
### Added
- **Persistent Sidebar Navigation**: Implemented a modern, collapsible sidebar that remains visible on all pages on desktop screens.
- **Responsive Mobile Navigation**: Created a sleek mobile header that includes the logo and a trigger to open the navigation in a drawer menu.
- **React Router Setup**: Integrated `react-router-dom` to handle client-side routing.
- **Initial Page Routes**: Set up routes for the Home, About, and Courses pages, along with a NotFound page for handling invalid URLs.

---

## [0.1.0] - 2025-08-07
### Added
- **Project Initialization**: Initialized a new project using Vite with a React and TypeScript template.
- **Styling and Component Library**: Integrated Tailwind CSS for utility-first styling and `shadcn/ui` for a base library of accessible and reusable components.
- **Core Directory Structure**: Established the initial project architecture with `/pages` and `/components` directories.
- **Initial Commit**: Created the Git repository and performed the first commit.

---

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
