# Personal Portfolio — CLAUDE.md

## Project

Single-page portfolio for Carlos Román, Backend Developer. Built with Vite + React + TypeScript + Tailwind CSS v4.

## Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`) + CSS custom properties
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Structure

```
src/
  components/
    Nav.tsx       # Fixed top navigation bar
    Hero.tsx      # Full-viewport hero section
    About.tsx     # Bio + stats grid
    Skills.tsx    # Technical skills grouped by category
    Projects.tsx  # Production project cards
    Contact.tsx   # Contact links
    Footer.tsx    # Footer
  App.tsx         # Root — composes all sections
  main.tsx        # Entry point
  index.css       # Design tokens + Tailwind import
```

## Design System

Style: **Exaggerated Minimalism + OLED Dark Mode**

| Token | Value |
|-------|-------|
| Background | `#0a0a0a` |
| Surface | `#111111` |
| Surface 2 | `#1a1a1a` |
| Border | `#1f1f1f` |
| Text | `#ffffff` |
| Text secondary | `#a1a1aa` |
| Accent | `#2563eb` |
| Font | Inter |
| Hero size | `clamp(3rem, 10vw, 9rem)` |
| Font weight | 900 (headings), 500 (labels), 400 (body) |

## Commit Rules

- **Never** mention the AI model, tool, or vendor in commit messages (no "Claude", "Anthropic", "Sonnet", "Opus", "GPT", "AI-generated", etc.)
- Write commits in the imperative: `Add hero section`, `Fix nav scroll offset`
- Keep messages short and human

## Dev

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run preview
```
