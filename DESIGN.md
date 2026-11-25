---
name: MagicArena
description: Indoor playground homepage; a rainbow you walk under, grown from the logo's arcs.
colors:
  teal: "#1E5A68"
  teal-deep: "#163F49"
  coral: "#FF7B63"
  coral-hover: "#FF957F"
  sunflower: "#FFC23C"
  sky: "#9ED4E4"
  sand: "#F4DCBC"
  ink: "#16323A"
  muted: "#4B5F65"
  mist: "#F3FAFC"
  surface: "#FFFFFF"
  sticker-cream: "#FFFDF8"
  on-teal: "#FFFFFF"
  on-teal-soft: "#C2E4EE"
  on-sun: "#3B3418"
typography:
  display:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  hero:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "clamp(2.45rem, 4.4vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "clamp(2.3rem, 5.2vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.04
  quote:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.3
  numeral:
    fontFamily: "Gluten, Trebuchet MS, sans-serif"
    fontSize: "2.3rem"
    fontWeight: 700
    lineHeight: 1.05
    fontFeature: "tnum"
  lede:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1.4vw, 1.22rem)"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  md: "18px"
  lg: "28px"
  xl: "40px"
  pill: "999px"
  arch: "999px 999px 0 0"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  section-y: "clamp(80px, 11vw, 140px)"
  container: "1240px"
  grid-gap: "18px"
  card-pad: "28px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 10px 0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.coral-hover}"
    textColor: "{colors.ink}"
  button-on-sky:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "56px"
  nav-link:
    textColor: "{colors.on-teal}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  card-experience:
    rounded: "{rounded.xl}"
    padding: "16px 16px 26px"
  card-pass:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px 22px"
  card-community:
    backgroundColor: "{colors.teal-deep}"
    textColor: "{colors.on-teal-soft}"
    rounded: "{rounded.lg}"
    padding: "30px 26px"
  sticker-price:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "clamp(190px, 17vw, 224px)"
  chip-offer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sunflower}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  faq-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: MagicArena

## Overview

**Creative North Star: "The Rainbow You Walk Under"**

The logo's monoline rainbow is not a mark placed on the page; it is the page's architecture. Its arcs grow into thick concentric color bands around the hero photo, into arch-topped photo windows, into curved section edges that rise like the top of a rainbow, and into the closing arc the visitor finally passes beneath. Its terracotta leaves and twin rings return as small line drawings: list bullets, floating stickers, the flames of a party-cake candle. Everything new is built from pieces the logo already owns.

A deep teal field holds the hero and the anchoring dark sections, and color arrives in solid blocks: sunflower, sky and sand panels, one coral voice reserved for "reserve". Type is gooey and hand-made at display sizes (Gluten), plain and warm at reading sizes (Nunito). Density is generous: sections breathe on an 80 to 140px vertical rhythm, cards sit in staggered rows rather than equal grids, and motion is springy but brief, so the page reads as joyful without being loud, matching a place that promises stimulation without overstimulation.

**Key Characteristics:**
- Teal field hero and dark anchors; light sections on a cool mist page.
- Concentric four-band rainbow (coral, sunflower, sky, sand, outside in) as the signature figure.
- Arch windows for every photo; arc-topped section edges for every color change.
- Pill and large-radius forms only; no square corners anywhere.
- Coral is the action color and is never body text.
- Logo leaves and twin rings as the only ornament and the only bullet glyph.

## Colors

A deep-teal field with color-blocked candy accents, tuned so every text pairing clears WCAG AA.

### Primary
- **Rainbow Teal** (teal): the field. Owns the hero, the Comunidad and Visitanos sections, the mobile menu panel, line-art drawn on light panels, and price numerals on sky. White or Soft Teal Mist text on it.
- **Night Teal** (teal-deep): the step below the field. Footer ground and the community cards sitting on a teal section.

### Secondary
- **Reserve Coral** (coral): the call to action. Fills every "Reservá" pill, the outermost rainbow band, the leaf flames, and the hero line that runs from the innermost band to the CTA. Text on it is always Arena Ink. Hover lightens to **Coral Glow** (coral-hover).

### Tertiary
- **Sunflower** (sunflower): the warm block. Hours tab, Fiestas section ground, one experience card, focus rings, text selection, the highlighted word in the hero headline, open FAQ toggles, footer column headings on teal, and the "today" row in the hours table.
- **Pool Sky** (sky): the cool block. Price sticker, Café box, a pass card, an experience card.
- **Warm Sand** (sand): the sand-pit block. Nosotros ground, location pill, photo backplates while images load, the innermost rainbow band.

### Neutral
- **Arena Ink** (ink): all body text and headings on light grounds; the dark disc inside the CTA; the Black Friday chip ground.
- **Slate Muted** (muted): intros, placeholder notes, struck-through prices, secondary footnotes on light grounds.
- **Mist** (mist): the page ground; also the fill of the curved edge that closes a teal section.
- **Surface White** (surface): rules card, FAQ items, product cards, the Café button.
- **Sticker Cream** (sticker-cream): the cream behind anything that is the logo or acts as a sticker: the logo pill in the nav, footer logo tile, rotating seals, the 6 to 8px rings around the round photo inset and the price sticker, cake candles.
- **Soft Teal Mist** (on-teal-soft): body text on teal and night teal. **Sun Ink** (on-sun): body text on sunflower.

### Named Rules
**The Coral Means Reserve Rule.** Coral fills the action and the rainbow figure, nothing else. It never becomes a section ground, a card fill, or text on a light ground (it reaches only 2.41:1 on Mist).

**The Outer-Coral Rule.** A full rainbow reads coral, sunflower, sky, sand from outside to inside, every time (hero arch, mobile menu, closing arc). A three-band arch on a sand ground drops coral and uses teal, sky, sunflower.

**The Logo Stays in the Logo Rule.** The logo's own colors (its muted teal, pale sky, ochre, terracotta, script blue) live only inside the raster logo. They are not UI tokens; the interface palette is the vivid set above.

## Typography

**Display Font:** Gluten (with Trebuchet MS, sans-serif)
**Body Font:** Nunito (with system-ui, sans-serif)

**Character:** Gluten is soft and gooey, like a shape pressed into wet sand; Nunito's rounded terminals keep reading text friendly without competing. Both are self-hosted woff2, `font-display: swap`.

### Hierarchy
- **Display** (700, clamp(3rem, 8vw, 6rem), 1.04): the single closing question ("¿Venís a jugar?") above the final CTA.
- **Hero** (700, clamp(2.45rem, 4.4vw, 4.4rem), 1.04): the hero headline, set in 2 to 3 masked lines with one word in Sunflower.
- **Headline** (700, clamp(2.3rem, 5.2vw, 4.1rem), 1.04, -0.01em, balanced wrap): section titles.
- **Title** (700, 1.4 to 1.7rem, 1.04): card and panel titles (experiences, passes, rules, community, hours).
- **Quote** (700, clamp(1.5rem, 2.6vw, 2.1rem), 1.3, max 24ch): the founders' line, in Rainbow Teal.
- **Numeral** (700, 2.3 to 2.4rem, 1.05, tabular): prices on pass cards and the sticker.
- **Lede** (500, clamp(1.06rem, 1.4vw, 1.22rem), 1.6, max 46ch; the hero lede caps at 32ch): section intros in Slate Muted.
- **Body** (500, 1.0625rem, 1.6, pretty wrap): everything else; card copy steps down to 0.98rem.
- **Label** (800, 1.06rem, 1): buttons, link-underlines, FAQ questions, value names.

### Named Rules
**The Gooey-Only-Big Rule.** Gluten appears only at 1.4rem and up (headings, prices, quote, menu links). Small headings that must stay legible, such as product names and footer column titles, switch to Nunito 800.

**The No-Eyebrow Rule.** Headings stand alone. No uppercase, letter-spaced kicker sits above a title; the only spaced capitals in the system are the text running around a rotating seal.

## Layout

A 1240px container with a fluid gutter (clamp(20px, 5vw, 64px)) and a section rhythm of clamp(80px, 11vw, 140px). Full-bleed colored sections carry their content inside the container.

Grids are deliberately asymmetric: the hero splits 1.12fr / 0.88fr, section heads put the title against an intro at 1fr / 0.8fr, two-column sections use 0.9/1.1 or 0.8/1.2. Repeated cards avoid the equal row: the four experience cards stair-step (0, 56, 112, 56px offsets), and the at-a-glance band mixes three different forms (a hanging tab, a round sticker, a pill line) and overlaps the hero's bottom edge by up to 150px.

Gaps sit at 12 to 18px between cards and 24 to 88px between columns. Breakpoints: 1080px (four-up grids go two-up), 900px (nav collapses to the menu button, every two-column grid stacks, the sticky bottom CTA bar appears, art moves above copy in Fiestas), 560px (single column, alternating 92%-wide experience cards hug left and right), 520px and 420px (sticker centering, logo shrink).

## Elevation & Depth

Mostly flat, color-blocked depth. Panels separate by color, not shadow; experience, pass, rules, community and FAQ cards are flat at rest. Shadows are reserved for things that physically sit on top of the page (the CTA, the hours tab, the price sticker, the round photo inset) and for the product card's hover lift. Every shadow is soft, blurred, pulled in by negative spread and tinted with Arena Ink, never a hard offset.

### Shadow Vocabulary
- **CTA drop** (`box-shadow: 0 14px 30px -14px rgba(10,30,36,.55)`): the primary button; removed in the nav and inside the Café box.
- **Tab drop** (`box-shadow: 0 26px 40px -26px rgba(22,50,58,.55)`): the hours tab hanging over the hero edge.
- **Sticker ring** (`box-shadow: 0 0 0 8px #FFFDF8, 0 26px 40px -22px rgba(22,50,58,.6)`): the price sticker; a cream die-cut edge plus a drop.
- **Inset drop** (`box-shadow: 0 18px 34px -18px rgba(0,0,0,.5)`): the round photo inset on the hero arch.
- **Lift** (`box-shadow: 0 26px 40px -28px rgba(22,50,58,.6)`): product card on hover, paired with a 6px rise.

### Named Rules
**The Stickers Cast Shadows Rule.** Only objects that sit on the page cast a shadow; panels that are the page stay flat.

## Shapes

Round like the logo's stroke. Radii step 18px (FAQ items, window bottoms), 28px (most cards), 40px (experience cards, Café box), and full pill for buttons, nav links, location line and chips. Photos sit in **arch windows** (full-round top, flat or 18px bottom) or in circles; product photos get a soft convex bottom edge. Sections change color through an **arc edge**: a 28 to 64px tall SVG quadratic curve that rises at the center, filled with the incoming section's color. The rainbow itself is drawn as 28px round-capped strokes (18px in the menu, 34px at the close), and the hours tab is a hanging shape: 28px top corners, 40px bottom corners. Line art (leaves, rings, cup, path) is a 5 to 6px round-capped monoline, matching the logo.

**The Arch Rule.** A photo never sits in a square frame; it gets an arch window or a circle.

## Components

### Buttons
Chunky, friendly, and unmistakably the thing to tap.
- **Shape:** full pill (999px), 56px tall, asymmetric padding (28px left, 10px right) so a 40px Arena Ink disc carrying a WhatsApp or arrow icon sits flush at the right end.
- **Primary:** Reserve Coral fill, Arena Ink label at Nunito 800, CTA drop shadow.
- **Hover / Focus:** fill eases to Coral Glow over 0.45s; the icon disc tilts -12deg on a springy curve; press scales to 0.96. Focus is the global 3px Sunflower outline at 3px offset.
- **Nav variant:** 46px tall, no shadow, no icon. **On-sky variant** (Café): Surface White fill, icon in Pool Sky.
- **Text link:** Nunito 800 with a 2.5px currentColor underline-border; the border turns Sunflower on hover.

### Chips
- **Offer chip:** Arena Ink pill with Sunflower text, 8px 16px padding, for time-limited promotions only.
- **Status line:** a 10px dot with a 5px soft halo (green when open, Sunflower when closed) beside Soft Teal Mist text.

### Cards / Containers
- **Experience card:** 40px radius, solid Sand, Sky, Sunflower or Teal block, 16px frame padding around an arch window, title and copy inset 8px. Image scales to 1.06 on hover.
- **Pass card:** 28px radius, color passed per card (Sky, Sunflower, Sand), Gluten price numeral in Rainbow Teal.
- **Community card:** Night Teal on Teal, 28px radius, 30px 26px padding, link pinned to the bottom.
- **Party package:** pale sun-cream panel on Sunflower, title and price on one baseline, description below.
- **Product card:** Surface White, 28px radius, 4:5 photo with convex bottom edge; lifts 6px with the Lift shadow on hover. Price in Rainbow Teal, original price struck in Slate Muted.

### Navigation
Sits inside the teal hero, not above it. The logo rides a Sticker Cream pill (raster mark plus wordmark); links are white Nunito 700 pills that gain a 12% white wash on hover; a coral "Reservá" pill closes the row. Below 900px the links collapse into a 48px ringed menu button whose two bars morph into a cross, opening a full-screen teal panel revealed by a circular clip from the top right; the panel draws a small four-band rainbow, lists links in Gluten at clamp(2rem, 9vw, 2.6rem), and ends with the CTA. A fixed full-width CTA bar docks at the bottom on phones and hides while the hero or the closing visit section is in view.

### FAQ
Surface White items at 18px radius; the question in Nunito 800 with a 30px round toggle that rotates 45deg into a cross and turns Sunflower when open.

### Rainbow Arch (signature)
The hero figure: four concentric round-capped bands that drop straight to the bottom edge, an arch photo window inside the innermost band, a round inset with a cream ring at the lower left, logo-style leaves sprouting from the crown with twin rings above, and a rotating cream seal (18s per turn) at the upper right. On load the bands draw in, the photo wipes up from the bottom, and the innermost band continues as a coral line that ends at the CTA.

### Motion
Motion is springy and short. Entrances rise by a 56px base distance on an expo-out curve (`cubic-bezier(.25,1,.5,1)`, 1s, 0.085s stagger); stickers and toggles use an overshoot pop (`cubic-bezier(.34,1.68,.68,1)`); clip reveals use an in-out curve (`cubic-bezier(.76,0,.24,1)`). Hover transitions run 0.45s. Rainbow bands always draw on with stroke-dashoffset. Under reduced motion every animation and transition collapses to near-zero, and all content is visible without JavaScript.

## Do's and Don'ts

### Do:
- **Do** let Rainbow Teal own the first viewport and return as the dark anchor for community, visit and footer.
- **Do** draw a full rainbow coral, sunflower, sky, sand from outside in, with 28px round-capped strokes.
- **Do** put every photo in an arch window or a circle, and change section color through an arc edge filled with the incoming color.
- **Do** set Arena Ink on coral, sunflower, sky and sand, and white or Soft Teal Mist on teal.
- **Do** use the logo's twin rings as list bullets and its leaf as the only decorative glyph, drawn as inline SVG monoline.
- **Do** keep radii at 18, 28, 40px or full pill.
- **Do** keep shadows soft, ink-tinted and negatively spread, and only under objects that sit on the page.

### Don't:
- **Don't** use coral as text or as a section ground; it reaches only 2.41:1 on Mist.
- **Don't** use the logo's raster colors as interface colors.
- **Don't** put an uppercase, letter-spaced kicker or eyebrow above a heading; the rotating seal is the only spaced-capitals text.
- **Don't** set Gluten below 1.4rem; switch to Nunito 800.
- **Don't** line cards up as three equal icon tiles; stagger them or vary their form.
- **Don't** use square-cornered photos, cards or buttons.
- **Don't** use hard offset shadows or emoji and font-glyph icons.
