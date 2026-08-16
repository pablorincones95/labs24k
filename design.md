---
name: Sovereign Command
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#b6c4ff'
  on-secondary: '#00277f'
  secondary-container: '#0056fd'
  on-secondary-container: '#e4e7ff'
  tertiary: '#efecec'
  on-tertiary: '#313030'
  tertiary-container: '#d3d0cf'
  on-tertiary-container: '#5a5959'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#001550'
  on-secondary-fixed-variant: '#003ab2'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  neon-cyan: '#00E5FF'
  tech-blue: '#0057FF'
  system-green: '#39FF14'
  deep-void: '#000000'
  surface-glass: rgba(255, 255, 255, 0.03)
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  cta-label:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 4rem
  gutter: 1.5rem
  section-gap: 8rem
  container-padding: 2rem
  stack-sm: 0.5rem
  stack-md: 1rem
---

## Brand & Style

This design system embodies the "Sovereign AI" narrative: an elite, high-security operations center for global AI infrastructure. The brand personality is authoritative, surgical, and technologically superior. It is designed for enterprise decision-makers who require absolute precision and institutional-grade reliability.

The visual style is a fusion of **Corporate Modern** and **Glassmorphism**, elevated by technical **Brutalist** accents. The interface should feel like a premium command center—utilizing dark-mode depth, glowing neon data visualizations, and ultra-structured grid systems to communicate power and control.

**Visual Principles:**
- **Technical Authority:** Use monospaced labels and system status indicators to reinforce the "Active Engine" persona.
- **Controlled Glow:** Use luminous accents sparingly to highlight critical data points and interactive paths against a deep black void.
- **Architectural Depth:** Layered translucent surfaces create a sense of vast digital space, suggesting a complex but organized infrastructure.

## Colors

The palette is anchored in **Deep Void (#000000)** to maximize contrast and establish a premium, high-end atmosphere. **Neon Cyan** serves as the primary interactive color, representing the active flow of AI energy. **Tech Blue** provides structural depth and secondary hierarchy.

**Functional Color Usage:**
- **Primary (Neon Cyan):** Used for primary CTAs, active states, and critical success indicators.
- **Secondary (Tech Blue):** Used for data visualization, subtle accents, and hovered states.
- **System Green:** Reserved exclusively for "Active" status markers and real-time system health indicators.
- **Surface Tiers:** Use varying shades of near-black (`#0A0A0A` to `#121212`) to separate background from content containers.

## Typography

Typography is used to establish technical precision and corporate authority.

- **Montserrat** is the display face, used in uppercase for high-impact headings to convey strength.
- **Inter** handles all body copy, ensuring maximum readability for complex data descriptions and professional communications.
- **JetBrains Mono** is utilized for "System Labels" (e.g., `[ SYS: ACTIVE ]`), providing the technical "Command Center" aesthetic.

**Formatting Rules:**
- All H1 and H2 headers should be rendered in **Uppercase** with tight letter spacing.
- Labels and status indicators must use the Monospace font to mimic terminal readouts.
- Use high-contrast white (`#FFFFFF`) for headers and muted grey (`rgba(255,255,255,0.7)`) for secondary body text.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop, focusing on wide margins and significant vertical "Black Space" to maintain a premium feel.

**Layout Model:**
- **Desktop (1440px+):** 12 columns, 80px margins.
- **Tablet (768px - 1024px):** 8 columns, 40px margins.
- **Mobile (Below 768px):** 4 columns, 20px margins.

**Spacing Philosophy:**
- Use **Section Gaps (8rem)** to allow the "Sovereign" imagery and metrics to breathe.
- Implement **Grid Patterns** as background overlays (low opacity: 0.05) to emphasize the mathematical precision of the layout.
- Align all components to an **8px base grid** to ensure technical consistency across the UI.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Glassmorphism** rather than traditional shadows.

- **Surface Level 0:** Deep Void (`#000000`).
- **Surface Level 1 (Cards):** Translucent glass (`rgba(255, 255, 255, 0.03)`) with a `backdrop-filter: blur(20px)`.
- **Accents:** Use 1px "Hairline" borders in `rgba(0, 229, 255, 0.2)` to define container boundaries without heavy visual weight.
- **Glow Effects:** Critical components (Primary Buttons, Active Metrics) utilize a soft `0px 0px 20px rgba(0, 229, 255, 0.4)` outer glow to simulate a luminous display.

## Shapes

The shape language is **Soft (Level 1)**, utilizing a 4px (0.25rem) base radius. This minimal rounding retains the industrial, high-tech edge while avoiding the aggressive sharpness of pure brutalism.

- **Standard Elements:** 4px radius for inputs, small cards, and secondary buttons.
- **Primary Buttons:** May use a 0px (Sharp) radius for a more "Sovereign" and commanding presence.
- **Data Containers:** Use 1px borders with sharp corners to emphasize a "boxed" infrastructure look.

## Components

### Buttons
- **Primary:** Solid Neon Cyan background, black Montserrat text (Uppercase). Subtle cyan outer glow on hover.
- **Secondary:** Ghost style with 1px Tech Blue border and Tech Blue text.
- **System Action:** Monospaced text with brackets (e.g., `[ INITIATE SECURE LINK ]`).

### Cards & Containers
- **Metrics Card:** Glassmorphic background, hairline cyan top-border, and luminous green status text in the top-right corner.
- **Industry Card:** Dark grey background (`#121212`) with large, low-opacity iconography and bold Montserrat headers.

### Input Fields
- Dark, inset background (`#050505`) with a 1px Tech Blue border that glows Neon Cyan upon focus. Monospaced placeholder text.

### Chips & Tags
- Small, rectangular chips with monospaced text. Backgrounds should be highly transparent versions of their status colors (e.g., 10% opacity System Green for "ACTIVE").

### Additional Elements
- **Grid Overlays:** A subtle, repeating 24px grid pattern should be applied to the background of hero sections and main operation panels.
- **Scanning Line:** An occasional, slow-moving horizontal light bar (0.05 opacity) can pass over data cards to simulate "Real-time AI Processing."