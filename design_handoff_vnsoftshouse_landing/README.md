# Handoff: VNsoftshouse — One-Page Agency Website

## Overview
A single-page marketing site for **VNsoftshouse (Visioneer Nusantara Software House)**, a new Indonesian software house with no clients or portfolio yet. Sections: Navbar → Hero → Services (Mobile App, Website, ERP, AI Automation, Blockchain Application) → About us → Contact us → Footer. The navbar links scroll to sections on the same page.

## About the Design Files
`VNsoftshouse.dc.html` is a **design reference created in HTML**. It shows the intended look and behavior and is **not production code to copy directly**. Recreate it in the target codebase's existing environment and patterns. If no codebase exists yet, use **Next.js (App Router) + TypeScript + Tailwind CSS**, deploy as a static site, and keep each section as its own component.

To view the reference, open the file in a browser. It needs `support.js` (included) in the same folder.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii and copy are final. Reproduce them exactly. The striped grey boxes are **image placeholders**. Swap in real images when they exist and keep the same aspect ratios.

## Global Rules (from the design guideline)
- One interactive color: Action Blue `#0066cc` on light backgrounds, Sky Blue `#2997ff` for links on dark backgrounds. No other accent colors. The only exception is the logo's own cyan.
- No gradients, no shadows on cards, buttons or text. The **only** shadow is on the hero image: `rgba(0,0,0,0.22) 3px 5px 30px 0`.
- Sections are full-bleed and rectangular (0 radius). Background color changes act as section dividers.
- Font: `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif`. On non-Apple platforms you may use **Inter** as a fallback. Weights are 300, 400 and 600 only (never 500).
- Body text is 17px / 1.47 / -0.374px.
- Every button's pressed state is `transform: scale(0.95)`. Keyboard focus is a `2px solid #0071e3` outline.
- Smooth scrolling (`html { scroll-behavior: smooth }`). Each section has `scroll-margin-top: 44px` to clear the sticky nav.

## Design Tokens
**Colors**
- primary `#0066cc` · primary-focus `#0071e3` · primary-on-dark `#2997ff`
- ink `#1d1d1f` · ink-muted-80 `#333333` · ink-muted-48 `#7a7a7a` · body-muted (on dark) `#cccccc`
- canvas `#ffffff` · parchment `#f5f5f7` · hairline `#e0e0e0`
- tile-1 `#272729` · tile-2 `#2a2a2c` · tile-3 `#252527` · nav `#000000`
- Placeholder stripe (light): `#f5f5f7` / `#ececee`. Placeholder stripe (dark): `#2f2f31` / `#252527`.

**Typography**
| Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| hero | clamp(34px, 6vw, 72px) | 600 | 1.07 | -0.015em |
| section-h2 | clamp(34px, 5vw, 56px) | 600 | 1.07 | -0.28px |
| tile-h3 | clamp(28–32px, 3.4–4vw, 40px) | 600 | 1.10 | 0 |
| lead | clamp(21px, 2.4vw, 28px) | 400 | 1.24 | 0.196px |
| lead-airy | clamp(19px, 2vw, 24px) | 300 | 1.5 | 0 |
| tagline/eyebrow | 21px | 600 | 1.19 | 0.231px |
| body | 17px | 400 | 1.47 | -0.374px |
| body-strong | 17px | 600 | 1.24 | -0.374px |
| caption | 14px | 400 | 1.43 | -0.224px |
| caption-strong | 14px | 600 | 1.29 | -0.224px |
| nav / fine-print | 12px | 400 | 1.0 | -0.12px |
| button-large | 18px | 300 | 1.0 | 0 |

**Spacing:** 4, 8, 12, 17, 24, 32, 48, 64, 80, 96px. Section vertical padding is 80–96px. Side gutter is 22px (32px inside split tiles).
**Radius:** 8px (inner images), 18px (cards, image tops, textarea), 9999px (pills, inputs).
**Content width:** 980px for text sections, 1200px for the services grid variant.

## Screens / Sections

### 1. Navbar (sticky)
- `position: sticky; top: 0; z-index: 50`, background `#000`, height 44px. Inner container is max-width 1024px with 22px padding and flex space-between.
- Left: the logo (`assets/VN_logo.svg`, 22px tall) followed by the word "VNsoftshouse" (12px/600, white).
- Right: links Home · Services · About · Contact (12px, white at 85% opacity, 22px gap), each pointing to `#home`, `#services`, `#about` and `#contact`. Then a pill CTA "Start a project" (blue `#0066cc`, white 12px text, padding 5×12, links to `#contact`). The CTA is optional; it is a setting in the reference.
- Mobile (≤ 833px): collapse the links into a hamburger menu. Keep the logo and the CTA visible.

### 2. Hero (`#home`)
- White background, padding 96px 22px 0, centered column with max-width 980px.
- Eyebrow: "Visioneer Nusantara Software House" (tagline style).
- H1: "Software, envisioned." / line break / "Built to move you forward." (hero style, `text-wrap: balance`).
- Lead (max-width 640px, 20px above): "Mobile apps, websites, ERP, AI automation and blockchain — designed and engineered by one focused team."
- CTAs (32px above, 14px gap):
  - Primary pill "Start a project": `#0066cc` background, white 17px text, padding 11×22, links to `#contact`.
  - Ghost pill "Explore services": transparent background, `#0066cc` text with a 1px `#0066cc` border, links to `#services`.
- Image (64px above): max-width 880px, aspect ratio 16:8, top corners rounded 18px. It carries the system product shadow and runs into the bottom edge of the section. Placeholder content: "hero render — product UI on laptop + phone".

### 3. Services (`#services`)
**Intro:** parchment background, padding 80px 22px, centered text.
- Eyebrow "Services" in `#7a7a7a`.
- H2 "Five disciplines. One team."
- Body (max-width 620px, `#333`): "From the first sketch to production and beyond, we design, build and maintain the software your business runs on."

**Layout A, "Tiles" (default).** Full-bleed tiles stacked with no gap. Each tile contains: a numbered eyebrow (14px/600), an h3, a description, a text link with "›", then a placeholder image at the bottom with top corners rounded 18px. Tile padding is 80px top and 0 bottom.
1. **Mobile App**: full width, background `#272729`, white text, description in `#ccc`, lead-airy style. Copy: "01 — Mobile App" / "Native feel. Every platform." / "iOS and Android apps built for speed, polish and the long run — from MVP to app-store launch." / link "Discuss your app ›" (`#2997ff`). Image: max-width 520px, ratio 5:3, label "phone mockups — app screens".
2. **Row of two tiles** (grid `repeat(auto-fit, minmax(min(100%, 420px), 1fr))`, stacks on narrow screens):
   - **Website** (white background): "02 — Website" / "Fast. Findable. Yours." / "Company sites, landing pages and web platforms with clean design, strong SEO and a CMS your team can use." / "Plan a website ›". Image ratio 4:3, max-width 440px, label "browser mockup".
   - **ERP** (`#f5f5f7` background): "03 — ERP" / "Your whole operation, one system." / "Custom ERP for inventory, finance, HR and sales — shaped around how your business actually works." / "Scope an ERP ›". Label "dashboard screenshot".
3. **Row of two dark tiles:**
   - **AI Automation** (`#2a2a2c`): "04 — AI Automation" / "Let the routine run itself." / "AI agents, chatbots and workflow automation that cut manual work and connect the tools you already use." / "Automate a workflow ›". Label "workflow / agent visual".
   - **Blockchain Application** (`#252527`): "05 — Blockchain Application" / "Trust, written into code." / "Smart contracts, dApps and tokenized systems — audited logic for transparent, tamper-proof records." / "Explore blockchain ›". Label "dApp interface".
- All service links currently point to `#contact`.

**Layout B, "Grid" (alternative).** Parchment background. A 5-up grid of white cards (`minmax(220px, 1fr)`, 20px gap) inside a 1200px max-width container. Each card has a 1px `#e0e0e0` border, 18px radius and 24px padding. Card contents: a 1:1 image with 8px radius, the number (12px, `#7a7a7a`), the name (body-strong), a one-line description (caption, `#333`), and "Learn more ›" in blue. One-liners:
- Mobile App: "iOS and Android apps, from MVP to store launch."
- Website: "Fast, SEO-ready sites and web platforms."
- ERP: "Inventory, finance, HR and sales in one system."
- AI Automation: "Agents, chatbots and automated workflows."
- Blockchain Application: "Smart contracts, dApps and tokenized systems."

### 4. About us (`#about`)
- White background, padding 96px 22px, max-width 980px.
- Centered header: the logo at 72px tall, eyebrow "About us", H2 "A new studio with a clear vision.", then a lead-airy paragraph (max-width 760px): "Visioneer Nusantara is a software house from Indonesia. We started VN to give businesses a partner that thinks like a product team — curious about the problem, careful with the craft, and accountable for the result."
- Three value cards (64px above; grid `minmax(260px, 1fr)`, 20px gap). Each has a `#f5f5f7` background, 18px radius, 32px padding, a tagline-style title and body text in `#333`:
  - "Vision first": "We start with your goals, not a tech stack. Every build has a reason."
  - "Engineered to last": "Clean architecture, documented code and systems your team can grow."
  - "Partners, not vendors": "Transparent timelines, weekly demos, and support after launch."
- Process row (64px above): a 1px `#e0e0e0` top border with 32px padding above, and a 4-column grid (`minmax(200px, 1fr)`). Each step has a number (14px/600 blue), a title (17px/600) and a description (caption, `#333`):
  - 01 Discover: "We map goals, users and scope."
  - 02 Design: "Flows and interfaces you can click through."
  - 03 Build: "Iterative sprints with weekly demos."
  - 04 Launch & support: "Deployment, monitoring and care."

### 5. Contact us (`#contact`)
- Dark background `#272729`, padding 96px 22px. Two-column grid (`minmax(380px, 1fr)`, 56px gap) that stacks on narrow screens.
- **Left column:** eyebrow "Contact us" (`#ccc`), H2 "Let's build what's next." (white), and the body text "Tell us about your idea. We'll reply within one business day with next steps." (`#ccc`, max-width 400px). Below that, a contact list with 18px gaps; each item has a 12px `#ccc` label and a 17px value:
  - Email: `hello@vnsoftshouse.com` (`mailto:` link, `#2997ff`). **Placeholder, replace.**
  - WhatsApp: `+62 000 0000 0000` (`#2997ff`). **Placeholder, replace.**
  - Based in: "Indonesia · working worldwide" (white).
- **Right column, the form** (vertical flex, 12px gap):
  - "Full name" input and "Email address" input (type email): white background, 44px tall, pill radius, padding 12×20, 17px text, `rgba(0,0,0,0.08)` border, 2px `#0071e3` focus outline.
  - Project-type chips (multi-select): Mobile App, Website, ERP, AI Automation, Blockchain. Pills with padding 8×14 and 14px text. Unselected: transparent background, white text, 1px `rgba(255,255,255,0.35)` border. Selected: `#0066cc` background and border. "Website" is selected by default.
  - Textarea "Tell us about your project": 5 rows, 18px radius, padding 14×20, vertical resize only.
  - Submit button "Send message": `#0066cc` background, white text, 18px/300, padding 14×28, pill radius, aligned left.
- **Success state** (replaces the form after submit): a `#2a2a2c` card with 18px radius and 40px padding. It shows "Thank you." (28px/600), then "We've received your message and will be in touch within one business day." (`#ccc`), then a text button "Send another ›" (`#2997ff`) that brings the form back.

### 6. Footer
- Parchment background, padding 48px 22px 40px, max-width 980px.
- Top row (flex, space-between, wraps; 1px `#e0e0e0` bottom border with 20px padding): the logo (28px) beside "VNsoftshouse" (14px/600) and "Visioneer Nusantara Software House" (12px, `#7a7a7a`). On the right, links Home · Services · About · Contact (12px, `#333`, 22px gap).
- Legal line: "© 2026 Visioneer Nusantara Software House. All rights reserved." (12px, `#7a7a7a`, 16px above).

## Interactions & Behavior
- Navbar and footer links smooth-scroll to their section anchors.
- Buttons scale to 0.95 when pressed. No hover effects are specified; links may underline on hover.
- Contact form: validate that name, email and message are required and that the email is in a valid format. Show errors in 14px text below each field. Error styling is not in the guideline, so keep it minimal. On submit, POST to a backend or form service (Resend, Formspree, or a server action), show a loading state on the button (disable it and change the label to "Sending…"), then show the success card.
- Responsive breakpoints: 1068px (hero font sizes scale down via clamp), 833px (nav collapses to a hamburger), 640px (everything is a single column; section padding drops to about 48px).

## State Management
- `selectedProjectTypes: string[]`, default `['Website']`
- `formStatus: 'idle' | 'submitting' | 'sent' | 'error'`
- Form field values and their validation errors

## Assets
- `assets/VN_logo.svg`: the VN logo supplied by the client (cyan, roughly `#00ADE1`). Use it as provided. It has a wide viewBox, so set the height and let the width be auto.
- All other imagery is placeholder. Real images are needed for: the hero device render, mobile app screens, the website browser mockup, the ERP dashboard, the AI workflow visual, and the dApp interface.

## Files
- `VNsoftshouse.dc.html`: the full design reference, with all sections and both services layouts.
- `support.js`: the runtime the reference file needs to open in a browser. Do not port it.
- `assets/VN_logo.svg`: the logo.
