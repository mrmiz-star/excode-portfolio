# Portfolio Design System & Theme Documentation

This document outlines the refined design system implemented for the portfolio website to ensure a premium, high-authority engineering aesthetic.

## 🎨 Color Palette

We moved away from "standard" colors to a more curated, harmonious palette using CSS variables.

| Variable | Color | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| `--color-primary` | **Electric Cyan** | `#00e5ff` | Main highlights, headers, primary buttons. |
| `--color-secondary` | **Vivid Purple** | `#d400ff` | Secondary highlights, special tags, hover states. |
| `--color-accent` | **Neon Lime** | `#ccff00` | Status indicators, success messages, alerts. |
| `--color-bg-deep` | **Obsidian Blue** | `#050a0f` | Main background color. |
| `--color-bg-card` | **Glass Surface** | `rgba(13, 20, 33, 0.7)` | Card backgrounds with glassmorphism. |

## ✨ Visual Effects

### 1. Glassmorphism
Cards now use a deeper blur effect (`20px`) and refined borders to feel like real glass panels.
- **Backdrop Blur**: `blur(20px)`
- **Border**: `1px solid rgba(0, 229, 255, 0.12)`
- **Hover**: Subtle lift and glow effect.

### 2. Background Depth
The background is no longer a flat color. It uses radial gradients to create depth and a "glow" from the top and bottom corners.

### 3. Glow Pulsing
Critical elements (like the developer name and status dots) use a soft `glow-pulse` animation to draw attention without being distracting.

## 🖥️ Components Updated

- **Hero**: Refined typography and stat badges.
- **Project Cards**: Unified button styles and improved status indicators.
- **Engineering Section**: Cleaned up the layout and point system.
- **Contact Form**: Improved input fields and submission states.
- **Project Modal**: Overhauled the premium view to match the new cyan/purple theme.

## 🔧 Maintenance

To change any color globally, update the values in `src/index.css` under the `@theme` block. This will automatically propagate the changes to all components.

```css
@theme {
  --color-primary: #00e5ff;
  /* ... other variables ... */
}
```

---
*Last Updated: 2026-05-12*
