# Design System Document: TuskQtech Signature Framework

## 1. Overview & Creative North Star
**The Creative North Star: "Kinetic Monolith"**

This design system is built at the intersection of high-energy tech and editorial sophistication. We are merging the raw, structural honesty of Neo-Brutalism with the sleek, atmospheric precision of high-end dark mode applications. The "Kinetic Monolith" represents the strength of the elephant motif—unmoving and authoritative—juxtaposed with the vibrant, high-velocity energy of the Neon Cyan and Amber palette.

To break the "template" look, we employ **Intentional Asymmetry**. Layouts should feel like a custom-coded terminal: utilize large-scale typography, overlapping containers, and a rigid adherence to tonal depth over structural lines. We move away from generic "card-on-gray" layouts toward a layered, immersive environment where depth is felt, not outlined.

---

## 2. Colors & Surface Logic

### The Palette
- **Primary (Neon Cyan):** `#99f7ff` (Used for primary actions and energetic accents).
- **Secondary (Vibrant Amber):** `#ffaa17` (Used for educational highlights and conversion points).
- **Neutral Base (Deep Dark):** `#0c0e13` (The void from which all elements emerge).
- **Surface Accents:** `surface_container` levels provide the architectural foundation.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. We define space through **Chromodynamics**:
- Transitioning from `surface` to `surface_container_low` defines a new content block.
- Use horizontal padding and vertical white space (80px–120px) to separate ideas, rather than a divider line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. 
1. **The Base:** `background` (#0c0e13).
2. **The Section:** `surface_container_low` (#111318).
3. **The Card/Interaction:** `surface_container_highest` (#23262d).
*Nesting Principle:* An inner container must always be a lighter/higher tier than its parent to simulate physical proximity to the user.

### The "Glass & Gradient" Rule
To inject "soul" into the tech aesthetic, primary CTAs and hero elements must utilize linear gradients. 
- **Signature Gradient:** `primary` (#99f7ff) to `primary_container` (#00f1fe) at a 135-degree angle.
- **Glassmorphism:** For floating navbars or modal overlays, use `surface_bright` at 60% opacity with a `20px` backdrop-blur.

---

## 3. Typography
Our typography is a trio of distinct voices that form a cohesive authority.

*   **Headlines (Teko):** High-impact, condensed, and architectural. Used for `display-lg` through `headline-sm`. Teko should always be set in uppercase with a slight letter-spacing of `0.02em` to enhance the Neo-Brutalist feel.
*   **UI & Body (Inter):** The workhorse. Inter provides the Stripe-like clarity required for complex tech agency offerings. It is used for all `title` and `body` scales.
*   **Technical Callouts (JetBrains Mono):** Injected into labels, code snippets, or small metadata. This anchors the brand in "Tech & Education," providing an honest, developer-centric aesthetic.

**Hierarchy Goal:** A 4:1 scale ratio between `display-lg` (3.5rem) and `body-md` (0.875rem) ensures that the brand feels monumental and opinionated.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid "drop shadows" in the traditional sense. Depth is achieved via **Tonal Layering**. By placing a `surface_container_highest` object against a `background` floor, the contrast creates a natural lift.

### Ambient Shadows
If an object must "float" (e.g., a dropdown or a floating action button), use an **Ambient Glow**:
- **Shadow Color:** `#000000` at 40% opacity.
- **Blur:** 40px.
- **Spread:** -10px (to keep it tight and sophisticated).
- **Tint:** Incorporate a subtle 4% `primary` color into the shadow to simulate the neon glow of the tusk motif.

### The "Ghost Border" Fallback
If accessibility requires a border, use the **Ghost Border**: `outline_variant` (#46484d) at 15% opacity. It should be barely perceptible, serving as a suggestion of a boundary rather than a wall.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text. Border-radius: `sm` (0.125rem) for a sharp, tech-forward look.
- **Secondary (The Tusk):** Amber `#ffaa17` background with `on_secondary` text. Used specifically for "Enroll" or "Contact" to draw the eye instantly.
- **Tertiary:** Ghost style. No background, `primary` text, `Ghost Border` on hover.

### Chips
- Use `JetBrains Mono` for chip text. 
- Background: `surface_container_high`.
- Radius: `full`. These are the only rounded elements, acting as "soft" data points against the rigid, sharp-edged layout.

### Input Fields
- Background: `surface_container_lowest` (#000000).
- Bottom-only border: 2px `outline` (#74757b).
- Active State: Border transitions to `primary` (#99f7ff).

### Signature Component: The "Tech-Card"
- No borders. 
- Background: `surface_container`.
- Top-Left Corner: A 4px vertical accent bar in `secondary` (Amber).
- Bottom-Right: A `JetBrains Mono` label indicating the "Module" or "Service ID."

---

## 6. Do’s and Don’ts

### Do
- **DO** use asymmetry. Place text on a 12-column grid but allow images or code blocks to bleed off the edge of the grid.
- **DO** use the logo's Amber and Cyan as "Energy Sources." Use them sparingly but with high intensity.
- **DO** use `JetBrains Mono` for all numbers and technical specs. It reinforces the "Education" pillar.

### Don't
- **DON'T** use 100% opaque white for body text. Use `on_surface_variant` (#aaabb1) for long-form reading to reduce eye strain in dark mode.
- **DON'T** use rounded corners larger than `sm` (0.125rem) for structural elements. We want a sharp, "machined" aesthetic.
- **DON'T** use dividers. If you feel the need to add a line, add 40px of padding instead.
- **DON'T** use standard blue. Only use the Neon Cyan (#06F2FF) provided in the tokens.