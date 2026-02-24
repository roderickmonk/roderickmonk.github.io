# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro 5 static site for a Math & Computer Studies high school curriculum website.

**Stack:**
- Astro 5 with static site generation
- Tailwind CSS v4 (integrated via Vite plugin in `astro.config.mjs`)
- TypeScript with strict config

**Layout pattern:**
- `src/layouts/Layout.astro` - Base layout with Nav and Footer components, accepts `title` prop
- All pages import Layout and wrap their content in `<Layout title="...">...</Layout>`

**Styling:**
- Global styles in `src/styles/global.css` with Tailwind imports
- Uses a graph-paper grid background effect (`.grid-background` class)
- Utility-first Tailwind classes used directly in components

**Pages:**
- index (home), about, teaching, resources, technology, contact, cv
