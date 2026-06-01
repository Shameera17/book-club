# Tech Book Club - Project Setup Guide

This guide covers best practices for setting up and maintaining the styling architecture of this Next.js project.

## Table of Contents

- [Quick Start](#quick-start)
- [Styling Architecture](#styling-architecture)
- [Figma to Code Workflow](#figma-to-code-workflow)
- [Design Tokens Setup](#design-tokens-setup)
- [Typography System](#typography-system)
- [Adding New Styles](#adding-new-styles)
- [Best Practices](#best-practices)

---

## Quick Start

### Prerequisites

- Node.js 20+ installed
- pnpm package manager
- Access to Figma design files (if applicable)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your application.

---

## Styling Architecture

This project uses a hybrid approach combining **Tailwind CSS 4** with **CSS custom properties** for maximum flexibility and maintainability.

### File Structure

```
app/
├── globals.css              # Main entry point, imports all styles
├── styles/                  # Organized style modules
│   ├── theme.css           # Design tokens (colors, spacing, etc.)
│   ├── typography.css      # Text presets and font definitions
│   └── [feature].css       # Feature-specific styles
└── layout.tsx              # Font configuration
```

### Why This Architecture?

✅ **Centralized Design Tokens**: All design decisions in `theme.css`  
✅ **Component-Scoped Styles**: Feature styles isolated in separate files  
✅ **Tailwind Integration**: CSS variables work seamlessly with Tailwind  
✅ **Type-Safe Fonts**: Next.js font optimization with TypeScript  
✅ **Easy Maintenance**: Update tokens once, propagate everywhere

---

## Figma to Code Workflow

### Step 1: Inspect Figma Design

1. Open your Figma file
2. Select the **Inspect** panel (right sidebar)
3. Identify design tokens:
   - **Colors**: Background, text, accent colors
   - **Typography**: Font families, sizes, weights, line heights, letter spacing
   - **Spacing**: Padding, margins, gaps
   - **Border Radius**: Corner radius values
   - **Shadows**: Box shadow definitions

### Step 2: Extract Typography Values

**In Figma:**

- Look for **Text Styles** in the design system
- Note: Font family, size, weight, line height, letter spacing
- Check for responsive variants (mobile vs desktop)

**Example Figma Text Style:**

```
Display 1
Font: Martian Mono
Size: 62px
Weight: Bold (700)
Line Height: 120%
Letter Spacing: -2px
```

### Step 3: Convert to CSS Variables

Add to `app/styles/typography.css`:

```css
/* Text Preset 1 - Display 1 from Figma */
.text-preset-1 {
  font-family: var(--font-martian-mono);
  font-size: 62px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -2px;
}

/* Add responsive variant if specified */
@media (max-width: 768px) {
  .text-preset-1 {
    font-size: 38px;
  }
}
```

### Step 4: Extract Color Palette

**In Figma:**

- Locate **Color Styles** panel
- Copy hex values for all colors
- Note semantic names (primary, neutral, accent, etc.)

**Example Figma Colors:**

```
Neutral/White: #FFFFFF
Neutral/Background: #FAF3F3
Neutral/Dark: #062630
Accent/Salmon Light: #FFF5EF
Accent/Salmon: #FEA38F
```

Add to `app/styles/theme.css`:

```css
@theme inline {
  /* Neutral colors */
  --color-neutral-0: #ffffff;
  --color-neutral-100: #faf3f3;
  --color-neutral-900: #062630;

  /* Accent colors */
  --color-light-salmon-50: #fff5ef;
  --color-light-salmon-500: #fea38f;
}
```

### Step 5: Extract Spacing Scale

**In Figma:**

- Check **Auto Layout** spacing values
- Look for consistent spacing patterns (8px grid, 4px baseline, etc.)

Add to `app/styles/theme.css`:

```css
@theme inline {
  /* Spacing scale (8px base grid) */
  --spacing-100: 8px;
  --spacing-200: 16px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
}
```

---

## Design Tokens Setup

### Creating `app/styles/theme.css`

This file is the **single source of truth** for all design decisions.

```css
:root {
  /* Gradients (if using CSS gradients instead of Tailwind) */
  --gradient-hero: linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%);
  --gradient-button: linear-gradient(90deg, #385150 0%, #062630 100%);
}

@theme inline {
  /* ============================================
     COLORS
     ============================================ */

  /* Neutral palette */
  --color-neutral-0: #ffffff;
  --color-neutral-100: #faf3f3;
  --color-neutral-200: #e6e1df;
  --color-neutral-700: #385150;
  --color-neutral-900: #062630;

  /* Brand colors */
  --color-light-salmon-50: #fff5ef;
  --color-light-salmon-100: #ffe2d1;
  --color-light-salmon-500: #fea38f;

  /* ============================================
     SPACING
     ============================================ */

  /* Base unit: 8px */
  --spacing-0: 0;
  --spacing-025: 2px;
  --spacing-050: 4px;
  --spacing-075: 6px;
  --spacing-100: 8px;
  --spacing-150: 12px;
  --spacing-200: 16px;
  --spacing-250: 20px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
  --spacing-600: 48px;
  --spacing-800: 64px;
  --spacing-1000: 80px;

  /* ============================================
     BORDER RADIUS
     ============================================ */

  --radius-0: 0;
  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-full: 999px;

  /* ============================================
     SHADOWS (Optional)
     ============================================ */

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### Using Design Tokens

**In CSS:**

```css
.my-component {
  color: var(--color-neutral-900);
  padding: var(--spacing-300);
  border-radius: var(--radius-12);
}
```

**In Tailwind (via `@theme inline`):**

```tsx
<div className="text-neutral-900 p-300 rounded-12">Content</div>
```

---

## Typography System

### Step 1: Add Fonts to Project

**Download from Figma:**

1. Click on text element
2. Right sidebar → **Font** section
3. Click font name → "Download font" (or get from Google Fonts)
4. Place `.ttf` or `.woff2` files in `public/fonts/[font-name]/static/`

**Folder structure:**

```
public/
└── fonts/
    ├── inter/
    │   ├── OFL.txt           # License
    │   ├── README.txt
    │   └── static/
    │       ├── Inter_18pt-Regular.ttf
    │       └── Inter_18pt-SemiBold.ttf
    └── martian-mono/
        ├── OFL.txt
        └── static/
            ├── MartianMono-Regular.ttf
            ├── MartianMono-SemiBold.ttf
            └── MartianMono-Bold.ttf
```

### Step 2: Configure Fonts in `layout.tsx`

```tsx
import localFont from "next/font/local";

// Primary font (e.g., Inter for body text)
const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/static/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap", // Prevent invisible text during font load
});

// Display font (e.g., Martian Mono for headings)
const martianMono = localFont({
  src: [
    {
      path: "../public/fonts/martian-mono/static/MartianMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/martian-mono/static/MartianMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/martian-mono/static/MartianMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-martian-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${martianMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Step 3: Create Typography Presets in `typography.css`

Map Figma text styles to CSS classes:

```css
/* ============================================
   TYPOGRAPHY PRESETS
   Map directly to Figma text styles
   ============================================ */

/* Display 1 - Hero headings */
.text-preset-1 {
  font-family: var(--font-martian-mono);
  font-size: 62px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -2px;
}

@media (max-width: 768px) {
  .text-preset-1 {
    font-size: 38px;
  }
}

/* Display 2 - Section headings */
.text-preset-2 {
  font-family: var(--font-martian-mono);
  font-size: 50px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -2px;
}

@media (max-width: 768px) {
  .text-preset-2 {
    font-size: 34px;
  }
}

/* Heading 1 - Card titles */
.text-preset-3 {
  font-family: var(--font-martian-mono);
  font-size: 34px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -1px;
}

/* Body Large - Primary content */
.text-preset-5 {
  font-family: var(--font-inter);
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.5px;
}

/* Body Large Semibold - Emphasized text */
.text-preset-5-semibold {
  font-family: var(--font-inter);
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.5px;
}
```

### Step 4: Register Fonts in `globals.css`

```css
@theme inline {
  /* Make fonts available to Tailwind */
  --font-sans: var(--font-inter);
  --font-mono: var(--font-martian-mono);
}

body {
  font-family: var(--font-sans);
}
```

### Step 5: Usage in Components

**Using preset classes:**

```tsx
<h1 className="text-preset-1">Hero Title</h1>
<p className="text-preset-5">Body paragraph text</p>
```

**Using Tailwind utilities:**

```tsx
<h2 className="font-mono text-[50px] font-semibold leading-[130%] tracking-[-2px]">
  Custom Heading
</h2>
```

---

## Importing Styles to `globals.css`

The `globals.css` file is the **main entry point** for all styles.

### Current Setup

```css
@import "tailwindcss"; /* Tailwind base styles */
@import "./styles/theme.css"; /* Design tokens first */
@import "./styles/typography.css"; /* Typography second */

:root {
  /* Runtime semantic colors */
  --background: var(--color-neutral-0);
  --foreground: var(--color-neutral-900);
}

@theme inline {
  /* Map semantic colors for Tailwind */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-martian-mono);
}

@media (prefers-color-scheme: light) {
  :root {
    --background: var(--color-neutral-0);
    --foreground: var(--color-neutral-900);
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

.bg-gradient-hero {
  background: var(--gradient-hero);
}

.bg-gradient-button {
  background: var(--gradient-button);
}

.bg-gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Import Order Best Practice

**Always follow this order:**

1. **Tailwind base** - `@import "tailwindcss"`
2. **Design tokens** - `@import "./styles/theme.css"`
3. **Typography** - `@import "./styles/typography.css"`
4. **Component styles** - `@import "./styles/buttons.css"`
5. **Utility overrides** - Custom utilities at the end

### Adding New Style Modules

**Example: Adding `buttons.css`**

```css
/* app/styles/buttons.css */

/* Primary button */
.btn-primary {
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--gradient-button);
  color: var(--color-neutral-0);
  border-radius: var(--radius-12);
  font-family: var(--font-martian-mono);
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

/* Secondary button */
.btn-secondary {
  padding: var(--spacing-200) var(--spacing-300);
  background: transparent;
  color: var(--color-neutral-900);
  border: 2px solid var(--color-neutral-900);
  border-radius: var(--radius-12);
}
```

**Then import in `globals.css`:**

```css
@import "tailwindcss";
@import "./styles/theme.css";
@import "./styles/typography.css";
@import "./styles/buttons.css"; /* Add new module */

/* ... rest of globals.css */
```

---

## Adding New Styles

### Workflow: From Figma to Code

#### 1. Identify Design Pattern in Figma

- Is it a **color**? → Add to `theme.css` under `@theme inline`
- Is it **typography**? → Add to `typography.css` as a preset
- Is it a **component style**? → Create new CSS module
- Is it a **utility**? → Add to `globals.css`

#### 2. Add Color from Figma

**Figma:** "Primary Blue #3B82F6"

**Code:** Add to `app/styles/theme.css`

```css
@theme inline {
  --color-primary-500: #3b82f6;
}
```

**Usage:**

```tsx
<div className="bg-primary-500 text-white">...</div>
```

#### 3. Add Typography from Figma

**Figma:** "Button Text - Martian Mono 18px Semibold"

**Code:** Add to `app/styles/typography.css`

```css
.text-button {
  font-family: var(--font-martian-mono);
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -1px;
}
```

**Usage:**

```tsx
<button className="text-button">Click Me</button>
```

#### 4. Add Component Styles

**For complex components**, create a dedicated CSS file:

```css
/* app/styles/cards.css */

.card {
  background: var(--color-neutral-0);
  padding: var(--spacing-400);
  border-radius: var(--radius-16);
  box-shadow: var(--shadow-md);
}

.card-title {
  font-family: var(--font-martian-mono);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--spacing-200);
}
```

Import in `globals.css`:

```css
@import "./styles/cards.css";
```

---

## Best Practices

### ✅ DO

- **Use design tokens** for all values (colors, spacing, fonts)
- **Create semantic presets** that map to Figma styles
- **Keep CSS modules small** and focused (one concern per file)
- **Import in order**: tokens → typography → components → utilities
- **Use descriptive names**: `.text-preset-1` better than `.big-text`
- **Add comments** explaining where Figma styles map to code
- **Make typography responsive** with media queries
- **Use CSS variables** for values that change at runtime
- **Leverage Tailwind** for one-off utilities
- **Version control fonts** in the project

### ❌ DON'T

- **Don't hardcode values** - use variables instead
- **Don't mix naming conventions** - stick to kebab-case for CSS
- **Don't over-abstract** - if it's used once, inline is fine
- **Don't skip responsive variants** - always check mobile in Figma
- **Don't ignore font licenses** - include OFL.txt/LICENSE files
- **Don't load unused font weights** - only import what you need
- **Don't use `@import url()`** for external fonts in production (self-host instead)

### File Organization Tips

```
app/styles/
├── theme.css           # Design tokens (colors, spacing, radius, shadows)
├── typography.css      # Text presets and font definitions
├── buttons.css         # Button variants
├── cards.css           # Card components
├── forms.css           # Form inputs and validation
├── navigation.css      # Nav, header, footer styles
└── utilities.css       # Custom utility classes
```

### Naming Conventions

**Design tokens (variables):**

```css
--color-[semantic]-[scale]
--spacing-[scale]
--radius-[value]
--font-[semantic]
```

**Component classes:**

```css
.component-name           /* Base component */
.component-name-variant   /* Component variant */
.component__element       /* BEM element (optional) */
```

**Utility classes:**

```css
.text-preset-[number]     /* Typography preset */
.bg-gradient-[name]       /* Gradient utility */
```

---

## Maintenance Checklist

### When Adding New Features

- [ ] Check Figma for existing design patterns first
- [ ] Add new colors/spacing to `theme.css` if needed
- [ ] Create typography presets for new text styles
- [ ] Document any deviations from Figma
- [ ] Test responsive behavior on mobile/tablet
- [ ] Ensure accessibility (contrast ratios, focus states)

### When Updating Design Tokens

- [ ] Update `theme.css` with new values
- [ ] Check all components using that token
- [ ] Test in light/dark modes (if applicable)
- [ ] Update documentation if token name changes

### Regular Audits

- [ ] Remove unused CSS classes (quarterly)
- [ ] Consolidate duplicate styles
- [ ] Verify Figma and code are in sync
- [ ] Update typography if font versions change
- [ ] Review and update this documentation

---

## Troubleshooting

### Fonts not loading?

1. Check file paths in `layout.tsx` are correct
2. Verify `.ttf` files exist in `public/fonts/`
3. Clear Next.js cache: `rm -rf .next && pnpm dev`
4. Check browser DevTools Network tab for 404 errors

### CSS variables not working in Tailwind?

1. Ensure variables are defined in `@theme inline` block
2. Check import order in `globals.css`
3. Restart dev server after adding new tokens

### Styles not applying?

1. Check CSS specificity - Tailwind utilities override custom classes
2. Verify import order in `globals.css`
3. Use browser DevTools to see which styles are applied
4. Check for typos in class names

### Responsive styles not working?

1. Use `@media` queries for custom CSS
2. Use Tailwind breakpoints for utilities: `md:text-preset-2`
3. Test in browser DevTools device emulation

---

## Resources

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Figma Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)

---

## Quick Reference Card

### Add a Color

1. Get hex from Figma
2. Add to `app/styles/theme.css` in `@theme inline`
3. Use in Tailwind: `bg-[color-name]`

### Add Typography

1. Get specs from Figma (family, size, weight, line-height, spacing)
2. Add preset to `app/styles/typography.css`
3. Use class: `text-preset-[number]`

### Add a Component Style

1. Create `app/styles/[component].css`
2. Define styles using CSS variables
3. Import in `globals.css`
4. Use class in component

### Add a Font

1. Download from Figma/Google Fonts
2. Place in `public/fonts/[font-name]/static/`
3. Configure in `layout.tsx` with `localFont()`
4. Add variable to `globals.css` `@theme inline`

---

**Last Updated:** May 29, 2026  
**Maintainer:** Tech Book Club Team  
**Version:** 1.0.0
