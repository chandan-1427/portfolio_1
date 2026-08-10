### Portfolio

A clean and minimal portfolio website built with React and Vite.

#### Description

This is my portfolio website showcasing my work as a Full Stack Developer & AI Engineer. The site features a minimal design with smooth scrolling, responsive layout, and clean typography.

View in your browser - [portfolio-1-two-lovat.vercel.app](https://portfolio-1-two-lovat.vercel.app)

#### Why I Built This

I wanted to build a portfolio that is minimal, clean, and simple. I wanted to avoid making something overly flashy, messy, or overdesigned. I wanted to prove that a good portfolio does not need unnecessary animations, too many colors, or complicated layouts.

I also wanted to remind myself and others that not everything AI generates is correct. AI can help, but developers still need to make good decisions, simplify things, and keep a clear mindset. A developer should know when to remove unnecessary things instead of always adding more.

This project is a small example of choosing clarity, simplicity, and readability over complexity.

#### Tech Stack

- React 19.2.4
- Vite 8
- Tailwind CSS 4.2.2
- Lenis (smooth scrolling)
- React Icons
- Tailwind Merge
- Inter, Fraunces Variable and Stalemate fonts

#### Features

- Smooth scrolling with Lenis
- Sidebar navigation (desktop)
- Bottom navigation (mobile)
- Hero section with animated text
- Downloadable resume
- About section with experience cards
- Skills section with categorized technologies
- Data-driven projects showcase with live and source-code links
- Contact section with email copy and social links
- Reusable cards, tags, buttons, metadata rows, and tooltips
- Back-to-top footer
- Lazy-loaded sections with React Suspense
- Reduced motion support
- Custom scrollbar and text selection styles

#### Project Structure

```
src/
  components/
    Description.jsx       # Shared descriptive text
    LinkButton.jsx        # External link button
    MetaDataRow.jsx       # Card title and metadata
    SectionEyebrow.jsx    # Section label
    TagList.jsx           # Reusable technology tags
    ToolTip.jsx           # Navigation and social tooltips
  data/
    experience_items.js   # Experience content
    projects.js           # Project content
    skills.js             # Grouped skills
    socials.js            # Social links
  layouts/
    Footer.jsx            # Back-to-top footer
    Sidebar.jsx           # Responsive navigation
  lib/
    cn.js                 # Tailwind class merging utility
    scrollTo.js           # Accessible section scrolling
  sections/
    Hero.jsx              # Landing section and resume link
    About.jsx             # Background and experience
    Skills.jsx            # Categorized technical skills
    Projects.jsx          # Project showcase
    Contact.jsx           # Email and social links
  App.jsx                 # App layout, lazy loading, and Lenis setup
  index.css               # Fonts, global styles, and Tailwind theme
  main.jsx                # React entry point
```

#### Design Approach

- The UI is minimal because I believe less is more. Subtle transparency in theme creates depth without distraction. Spacing, typography, and layout are kept simple to maintain readability across all devices.

- Reusable components are used to keep the code maintainable and consistent. The sidebar navigation and section layouts follow the same patterns throughout the site.

- Experience, skills, projects, and social links are kept in dedicated data files. This separates portfolio content from the UI and makes updates simpler without changing the section components.

- Readability and maintainability were prioritized over complex effects. The animations are subtle and purposeful, enhancing the user experience without overwhelming the content.

#### What I Learned

— Simplicity is harder than adding more features.

— Good UI is often about consistency rather than creativity.

— Small design choices matter more than I initially thought.

— Reusable components make the code cleaner and easier to maintain.

*AI suggestions should be reviewed carefully instead of copied directly because sometimes the best solution is the simplest one.*

#### Final Thoughts

This is a small project, but it represents my design mindset. I prefer clean and maintainable interfaces. I want to continue building products that are simple, useful, and easy to understand.

#### Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/chandan-1427/chandan_portfolio.git
   ```
2. Move into the project directory:
   ```bash
   cd chandan_portfolio
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

#### Build

To build for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

#### Lint

To check the code with ESLint:
```bash
pnpm lint
```

#### Contributions, suggestions, and feedback are always welcome. Have a good day - CHANDAN
