# Tech Book Club

A modern, responsive landing page for a tech book club community built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 16.2.4** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **PostCSS** - CSS processing

## ✨ Features

- **Hero Section** - Eye-catching introduction with gradient backgrounds and pattern overlays
- **Feature Showcases** - Multiple content sections highlighting community benefits
- **Membership Tiers** - Three pricing options (Starter, Pro, Enterprise)
- **Testimonials** - Social proof with ratings and member quotes
- **Smooth Scrolling** - Navigate between sections seamlessly
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Accessible** - Focus states and keyboard navigation support
- **Interactive Elements** - Hover effects and smooth transitions

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── lib/
│   │   ├── assets.ts        # Image path helpers
│   │   └── helpers.ts       # Utility functions
│   └── styles/
│       ├── home.css         # Home page styles
│       ├── theme.css        # Design tokens
│       └── typography.css   # Text presets
├── ui/
│   ├── buttons/
│   │   └── index.tsx        # Reusable button component
│   ├── list-items/
│   │   └── index.tsx        # List item variants
│   ├── pages/
│   │   └── home.tsx         # Landing page component
│   └── wrapper/
│       └── index.tsx        # Section wrapper components
└── public/
    ├── fonts/               # Inter & Martian Mono fonts
    └── images/              # SVGs and images
```

## 🎨 Design System

### Colors

- **Neutral**: White to dark teal (#ffffff to #062630)
- **Light Salmon**: Warm accent colors (#fff5ef to #fea38f)

### Typography

- **Primary Font**: Inter
- **Secondary Font**: Martian Mono
- **Text Presets**: 7 predefined sizes with responsive scaling

### Spacing

- Custom spacing scale from 2px to 80px
- Responsive padding and margins

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Private project

---

Built as a Frontend Mentor coding challenge
