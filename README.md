# Equee Frontend

> Public-facing website for Equee - Superannuation Business Solutions

## Overview

Equee Frontend is the public-facing website for Equee, a superannuation business platform. This website showcases Equee's features and functionality, providing information to potential users and directing them to the main portal for product sign-up.

**Live Site:** [qa.equee.com.au](https://qa.equee.com.au) *(Coming Soon)*

## Features

### Current Features
- Custom Equee design system implementation
- Responsive navigation with mobile hamburger menu
- Client-side routing setup
- Modern React + TypeScript architecture

### Planned Features
- **Home Page** - Showcase Equee product features and functionality
- **Contact Page** - User contact form and information
- **Financial Services Guide** - Comprehensive user information resource
- **Portal Integration** - Seamless links to main Equee application

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** Custom CSS with Equee Design System
- **Code Quality:** ESLint + Babel
- **Node.js:** v24.5.0
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js v24.5.0
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd equee-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## Project Structure

```
public/
src/
├── assets/
│   ├── icons/          # Icon files
│   └── img/           # Images and logos
├── components/
│   ├── Navbar.tsx     # Navigation component
│   └── Navbar.css     # Navigation styles
├── pages/
│   ├── Home.tsx       # Home page component
│   ├── Contact.tsx    # Contact page component
│   └── NotFound.tsx   # 404 error page
├── styles/
│   └── globals.css    # Equee design system & global styles
├── App.tsx            # Main application component
├── App.css            # Application styles
├── index.css          # Global CSS imports
└── main.tsx           # Application entry point
```

## Design System

This project implements the Equee brand design system featuring:

- **Colors:** Orange and purple gradients with supporting neutrals
- **Typography:** Poppins font family with responsive scaling
- **Components:** Branded buttons, cards, and navigation elements
- **Layout:** Responsive grid system and utility classes

### Available CSS Classes

```css
/* Buttons */
.btn-primary-orange    /* Orange gradient button */
.btn-primary-purple    /* Purple gradient button */
.btn-secondary         /* White button with orange border */

/* Typography */
.h1, .h2, .h3, .h4, .h5, .h6  /* Styled headings */
.p-large               /* Large paragraph text */

/* Layout */
.container             /* Centered content container */
.d-flex                /* Flexbox utilities */
.text-center           /* Text alignment */
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on:
- **Primary:** AWS Amplify
- **Alternative:** AWS S3 Static Hosting

The production site will be available at `qa.equee.com.au`.

## Development Status

**Current Status:** Active Development

This project is in early development phase, started in August 2024. Core architecture and design system are established, with feature development ongoing.

## Architecture Decisions

- **SPA Architecture:** Single-page application for optimal user experience
- **Component-Based:** Modular React components for maintainability
- **Design System First:** Custom CSS system based on Equee brand guidelines
- **TypeScript:** Type safety for better development experience
- **Modern Build Tools:** Vite for fast development and optimized builds

## Development Workflow

1. **Feature Development:** Create feature branches from main
2. **Code Quality:** ESLint ensures code consistency
3. **Component Structure:** Follow established patterns in `/components` and `/pages`
4. **Styling:** Use Equee design system classes and CSS custom properties
5. **Testing:** Manual testing across devices and browsers

## Related Projects

- **Equee Portal** - Main application where users sign up and manage accounts
- **Equee API** - Backend services supporting both frontend and portal
- **Equee Admin Portal** - Application for business users to track and manage user accounts

## Contact

**Project Maintainer:** [argine@melsoft.com.au](mailto:argine@melsoft.com.au)

## License

This project is proprietary software owned by Equee. All rights reserved.

---

*Built with care for the Australian superannuation industry*