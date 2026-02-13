# Findings - Bhaumik Gohel Portfolio

## Discovery & Research

### North Star
- A high-performance personal portfolio website.
- Ensure automated deployment readiness via GitHub to Vercel.

### Integrations
- None (Direct implementation).

### Source of Truth
- Local data for projects, bio, and contact info.

### Delivery Payload
- GitHub repository (for Vercel deployment).

### Behavioral Rules
- **Dark Mode**: Default and primary aesthetic.
- **Typography**: "Outfit" (Google Fonts).
- **Libraries**: No heavy libraries (e.g., Bootstrap). Use Vanilla CSS and Javascript.
- **Performance**: High-performance/loading speed.

### Research & Resources
- **Inspiration**: Premium dark mode portfolios (Wall of Portfolios, Dribbble) emphasize high-contrast accents (e.g., #00ff88 or #7000ff) and glassmorphism.
- **Typography**: "Outfit" (Google Fonts) - weight 300 to 700 for hierarchy.
- **Performance**: 
    - Use `defer` for scripts to avoid render-blocking.
    - Inline critical CSS in `<head>`.
    - Use WebP for all images.
    - Leverage `requestAnimationFrame` for smooth entrance animations.
- **Architecture**:
    - `index.html`: Structure (SEO Optimized).
    - `style.css`: Modern CSS (Variables, Grid, Flexbox).
    - `app.js`: Minimalist navigation and data loading from `portfolio.json`.

### Constraints
- Clean, premium design as per Antigravity standards.
- No external CSS libraries.
- High Core Web Vitals (LCP < 2.5s).

