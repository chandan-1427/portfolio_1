### Portfolio

A clean and minimal portfolio website built with React and Vite.

#### Description

This is my portfolio website showcasing my work as a Full Stack Developer & AI Engineer. The site features a minimal design with smooth scrolling, responsive layout, and clean typography.
View in your browser - [portfolio-1-two-lovat.vercel.app](https://portfolio-1-two-lovat.vercel.app/)

#### Why I Built This

I wanted to build a portfolio that is minimal, clean, and simple. I wanted to avoid making something overly flashy, messy, or overdesigned. I wanted to prove that a good portfolio does not need unnecessary animations, too many colors, or complicated layouts.

I also wanted to remind myself and others that not everything AI generates is correct. AI can help, but developers still need to make good decisions, simplify things, and keep a clear mindset. A developer should know when to remove unnecessary things instead of always adding more.

This project is a small example of choosing clarity, simplicity, and readability over complexity.

#### Tech Stack

- React 19
- Vite
- Tailwind CSS 4.2.2
- Lenis (smooth scrolling)
- React Icons
- Geist and Work Sans fonts

#### Features

- Smooth scrolling with Lenis
- Sidebar navigation (desktop)
- Bottom navigation (mobile)
- Hero section with animated text
- About section with experience timeline
- Skills section with categorized technologies
- Projects showcase
- Contact section
- Lazy loading with React Suspense
- Reduced motion support

#### Project Structure

```
src/
  layouts/
    Sidebar.jsx          # Navigation component
  sections/
    Hero.jsx             # Landing section
    About.jsx            # Experience and background
    Skills.jsx           # Technical skills
    Projects.jsx         # Project showcase
    Contact.jsx          # Contact information
  App.jsx                # Main application component
  index.css              # Global styles and Tailwind
  main.jsx               # React entry point
```

#### Design Approach

The UI is minimal because I believe less is more. Subtle transparency in theme creates depth without distraction. Spacing, typography, and layout are kept simple to maintain readability across all devices.

Reusable components are used to keep the code maintainable and consistent. The sidebar navigation and section layouts follow the same patterns throughout the site.

Readability and maintainability were prioritized over complex effects. The animations are subtle and purposeful, enhancing the user experience without overwhelming the content.

#### What I Learned

Simplicity is harder than adding more features. Small design choices matter more than I initially thought. Reusable components make the code cleaner and easier to maintain. Good UI is often about consistency rather than creativity.

AI suggestions should be reviewed carefully instead of copied directly. Sometimes the best solution is the simplest one.

#### Final Thoughts

This is a small project, but it represents my design mindset. I prefer clean and maintainable interfaces. I want to continue building products that are simple, useful, and easy to understand.

#### Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/chandan-1427/portfolio_1.git
   ```
2. Install dependencies:
   ```bash
   cd portfolio_1
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

#### Build

To build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

#### Contributions, suggestions, and feedback are always welcome. Have a good day - CHANDAN