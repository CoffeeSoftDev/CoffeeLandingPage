# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AGRINOL corporate landing page - a static website for a Mexican regional development company focused on Puerto Chiapas. No build system or package manager; pure HTML/CSS/JS served directly.

## Development

Open `index.html` directly in a browser or serve via WAMP at `localhost/CoffeeLandingPage/`.

## Architecture

**Data-Driven Rendering Pattern**: All dynamic content lives in `assets/js/index.js` as a single `apiData` object. This simulates an API response and allows easy content updates without touching HTML.

The rendering flow:
1. `DOMContentLoaded` triggers `initApp()`
2. Section renderers (`renderQuienesSomos`, `renderAsociados`, etc.) inject HTML into placeholder `<section>` elements using template literals
3. Initialization functions set up interactivity (observers, modals, video players)

**Styling**: Tailwind CSS via CDN with custom theme config inline in `index.html`. Extended colors: `primary` (blue), `secondary` (green), `sand` (beige). Custom animations in `assets/css/styles.css`.

**Key Interactive Features**:
- Infinite horizontal carousel for team members (CSS animation with JS pause-on-hover)
- Modal system for team member bios (dynamically created, reads from data attributes)
- Video grid with play/pause controls
- Intersection Observer for fade-in animations

## Content Updates

To modify site content, edit the `apiData` object in `assets/js/index.js`. Sections: `quienesSomos`, `asociados`, `proyectos`, `portafolio`, `footer`.
