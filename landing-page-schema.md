# Landing Page Detailed Schema

This document explains the full landing page structure, section by section, including:
- render order,
- layout direction (left/right),
- content hierarchy,
- data arrays/constants,
- where and how each piece is displayed.

## 1) Page Composition and Section Order

The homepage is assembled in `app/page.tsx` in this exact sequence:

1. `SiteHeader`
2. `Hero`
3. `Problem`
4. `HowItWorks`
5. `Outputs`
6. `Waitlist`
7. `Footer` (outside the bordered inner container)

High-level shell:
- Outer wrapper: full-screen height, background + text theme classes.
- Inner wrapper: max width `1200px`, centered, vertical borders on `sm+`.
- Footer: full-width section with its own inner centered container.

---

## 2) `SiteHeader` Section

**Component:** `components/site-header.tsx`  
**Purpose:** Sticky navigation + primary CTA access.

### 2.1 Layout Structure
- Sticky top header with blurred translucent background.
- Single horizontal row (`h-16`) with 3 zones:
  1. Left: logo mark + brand text.
  2. Center (desktop): nav links.
  3. Right: action buttons.

### 2.2 Left Zone (Brand)
- `img` logo: `/long.svg`.
- Brand text: `strikeloop` using `Space_Grotesk`.

### 2.3 Center Zone (Nav Links)
- Hidden on mobile (`hidden md:flex`).
- Link items are rendered from inline array:
  - `#problem` -> "Problem"
  - `#how-it-works` -> "How it works"
  - `#outputs` -> "Outputs"
  - `#waitlist` -> "Join waitlist"
- Each link has hover underline animation.

### 2.4 Right Zone (Actions)
- Secondary button: "See report" -> `#waitlist` (hidden on very small screens).
- Primary button: "Join waitlist" + arrow icon -> `#waitlist`.

---

## 3) `Hero` Section

**Component:** `components/hero.tsx`  
**Purpose:** Primary value proposition, trust hints, and first conversion CTA.

### 3.1 Overall Layout
- Two-column grid on large screens (`lg:grid-cols-2`).
- On mobile, visual block appears first because of order classes:
  - Visual: `order-1 lg:order-2`
  - Copy: `order-2 lg:order-1`

### 3.2 Left Side on Desktop (Copy Column)
- Eyebrow badge:
  - "For developers, CTOs, and startup teams shipping fast"
- Main headline (`h1`):
  - "Choose the right infrastructure decisions before they become expensive mistakes."
- Supporting description paragraph:
  - Explains codebase + cloud-context analysis and tradeoff-based recommendations.
- Trust microcopy line:
  - "Read-only access • No auto-deploy • Team approval required"
- CTA row:
  - Primary: "Analyze my repo" -> `#waitlist`
  - Secondary: "See decision report" -> `#waitlist`

### 3.3 Right Side on Desktop (Visual Column)
- Core visual image: `/hero.svg` via `next/image`.
- Decorative blur circles (background accents).
- Floating metric chips (shown from `sm+`):
  - "Projected savings: -$620/mo"
  - "Load risk: medium"

### 3.4 Hidden Report Card Block
- There is a third `Card` block in this component marked with `className="hidden"`.
- It contains a detailed "Infrastructure Decision Report" preview but is currently never rendered due to `hidden`.

---

## 4) `Problem` Section

**Component:** `components/problem.tsx`  
**Purpose:** Explain pain points and show cost waste example.

### 4.1 Section Header
- Eyebrow label: "The Problem"
- Headline:
  - "Most infrastructure plans take 3 weeks and still go wrong."
- Supporting description:
  - Frames speed vs safe planning tradeoff.

### 4.2 Two-Column Content Layout
- `grid lg:grid-cols-2`:
  - Left: pain points list cards.
  - Right: audit-terminal style cost waste panel.

### 4.3 Left Column (Pain Points Data Source)
Rendered from `painPoints` array:
- Each item has:
  - `icon` (Lucide icon component),
  - `label` (main statement),
  - `sub` (supporting detail).
- Current items:
  1. 3–4 weeks lost before infra starts
  2. $38K+ overprovisioning on first deployment
  3. Security gaps found post-deploy
  4. Scaling based on guesswork

Display rules:
- One card per pain point.
- Icon box on left, text stack on right.
- Hover state increases visual emphasis.

### 4.4 Right Column (Waste Audit Panel Data Source)
Rendered from `wasteItems` array:
- Each row includes:
  - `label` (resource),
  - `cost` (monthly waste),
  - `pct` (percentage overage).

Current waste rows:
1. API Server x4 over-provisioned -> `$840/mo`, `+62%`
2. RDS db.m5.large underutilized -> `$320/mo`, `+44%`
3. Orphaned Lambda budget -> `$180/mo`, `+21%`
4. Unused cross-region S3 transfer -> `$64/mo`, `+8%`

Additional static display values in the panel:
- Title: `infra-waste-audit.report`
- Status chip: "Before strikeloop"
- Repo label: `github.com/acme/payments-api`
- Total identified waste: `$1,404/mo`
- Progress indicator: `78% of budget`

---

## 5) `HowItWorks` Section

**Component:** `components/how-it-works.tsx`  
**Purpose:** Explain process flow using step cards + pseudo-terminal evidence.

### 5.1 Section Header
- Eyebrow: "How it works"
- Headline: "Four steps. Zero guesswork."
- Supporting paragraph: emphasizes simulation over generic best-practice advice.

### 5.2 Step List Data Model (`steps` array)
Each step object includes:
- `n` (step number string),
- `title`,
- `body`,
- `tag`,
- `lines` (terminal log lines with color metadata),
- optional `highlight` (used for emphasized styling).

### 5.3 Per-Step Visual Layout
Each step card uses `lg:grid-cols-5`:
- Left side (`2/5` width): step metadata.
  - Large step number watermark.
  - Tag pill.
  - Step title and descriptive body.
- Right side (`3/5` width): terminal preview.
  - Fake window chrome.
  - Log lines from `step.lines` rendered line-by-line.

### 5.4 Step Content (Current)
1. Connect repository (`GitHub integration`)
2. Map workload (`Workload analysis`)
3. Simulate, stress-test, automate (`Sandbox simulation`, highlighted)
4. Review and approve (`Human approval`)

---

## 6) `Outputs` Section

**Component:** `components/outputs.tsx`  
**Purpose:** Show concrete deliverables and decision artifact preview.

### 6.1 Section Header
- Eyebrow: "Outputs"
- Headline:
  - "Everything your team needs to approve with confidence."
- Description:
  - Emphasizes inspectable, editable artifacts.

### 6.2 Output Cards Grid (Data Source: `outputs`)
- Responsive grid:
  - `sm`: 2 columns
  - `lg`: 3 columns
- Each card contains:
  - icon indicator (check or file icon),
  - `label`,
  - `badge`,
  - `desc`,
  - optional "Unique" marker when `highlight` is true.

Current output items:
1. Terraform Code (IaC-native)
2. Architecture Diagram (SVG export)
3. Cost Breakdown ($2,840/mo)
4. Security Findings (3 critical)
5. Scaling Strategy (Per-tier)
6. Reasoning Report (AI research, highlighted unique item)

### 6.3 Report Strip (Two Columns)
After card grid, a horizontal report strip is rendered:

#### Left Half: Report Rows (`reportRows`)
Key-value rows:
- Repository -> `github.com/acme/payments-api`
- Monthly cost -> `$2,840 / mo`
- Savings vs current -> `↓ 18%  ($620/mo)`
- Security -> `3 critical · 4 medium`
- Simulation -> `✓ Passed · 97% confidence`
- Status -> `⏳ Pending approval`

#### Right Half: Terraform Preview (`tfLines`)
Code-like snippet from `tfLines` array:
- ECS cluster resource block
- RDS instance class
- approval comment line

Bottom action buttons:
- "Approve & Apply" -> `#waitlist`
- "Modify" -> `#waitlist`

---

## 7) `Waitlist` Section

**Component:** `components/waitlist.tsx`  
**Purpose:** Primary conversion area with real submission logic.

### 7.1 Technical Behavior
- Client component (`'use client'`).
- Uses local React state:
  - `email`, `loading`, `status`, `message`.
- Submits to Supabase:
  - `supabase.from('waitlist').insert([{ email: userEmail }])`
- Handles response states:
  - success,
  - duplicate (`error.code === '23505'`),
  - generic error.

### 7.2 Layout + Content Blocks
- Centered vertical stack.
- Eyebrow:
  - "strikeloop Private Beta"
- Headline:
  - "Ship infrastructure that actually fits."
- Supporting text:
  - "Don't guess. Simulate, verify, and approve..."

### 7.3 Waitlist Card
Card top content:
- Title: "Join the waitlist"
- Subtitle: early access + roadmap + pricing note.

Conditional middle state:
- If `status === success`:
  - show success confirmation block with check icon.
- Else:
  - show inline form:
    - email input (left),
    - submit button (right) with loading spinner support.

Error/duplicate helper text:
- Rendered below form when `status` is `duplicate` or `error`.

Card footer:
- Renders `benefits` array items:
  1. Early access before public launch
  2. Direct input on features & roadmap

Section footnote:
- "No spam. No marketing blasts. Just your spot when it's ready."

---

## 8) `Footer` Section

**Component:** `components/footer.tsx`  
**Purpose:** brand close, contact, and legal/footer metadata.

### 8.1 Main Footer Row
- Left block:
  - logo (`/long.svg`),
  - brand name (`strikeloop`),
  - tagline text.
- Right block ("Contact"):
  - email: `team@strikeloop.com`
  - location: `Bengaluru, India`

### 8.2 Bottom Bar
- Dynamic year from `new Date().getFullYear()`.
- Copyright text.
- Right-side chip: "Private Beta".

---

## 9) Data and Rendering Map (Quick Reference)

- `SiteHeader`: inline nav link array rendered with `.map()`.
- `Hero`: mostly static text + image; hidden report card not active.
- `Problem`:
  - `painPoints` -> left cards
  - `wasteItems` -> right terminal rows
- `HowItWorks`:
  - `steps` -> full step cards
  - `step.lines` -> right terminal logs per step
- `Outputs`:
  - `outputs` -> top artifact cards
  - `reportRows` -> report key-value list
  - `tfLines` -> terraform preview lines
- `Waitlist`:
  - `benefits` -> footer bullets in form card
  - dynamic state-driven rendering from Supabase insert result
- `Footer`: static contact blocks + dynamic year.

---

## 10) Anchor/Navigation Targets

The header links and CTA buttons target these section ids:
- `#problem`
- `#how-it-works`
- `#outputs`
- `#waitlist`

Only sections with matching ids are scroll destinations:
- `Problem`, `HowItWorks`, `Outputs`, `Waitlist`.

---

## 11) Notes for Future Editing

- To change visible page order, edit `app/page.tsx` component order.
- To update section text/content:
  - static copy: edit each component directly.
  - list-based content: update the local arrays (`painPoints`, `steps`, `outputs`, etc.).
- To disable/enable waitlist backend behavior, edit `components/waitlist.tsx` (Supabase insert logic).
- The hidden card in `Hero` can be activated by removing `hidden` class if needed.
