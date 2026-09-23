# Build Brief — FUME.Fit Mobile Landing Page (VSL Funnel)

You are building a **high-converting, mobile-first landing page** for a paid-traffic sales funnel.
Read this entire brief before writing code. All copy is given verbatim — use it exactly, do not invent or rewrite marketing copy.

---

## 1. Business context

- **Brand:** FUME.Fit — Indian metabolic-health / weight-loss coaching brand.
- **Product being sold on this page:** a **₹198 one-on-one "Root-Cause Consultation" call** (original price ₹999).
- **Traffic source:** Meta (Facebook/Instagram) paid ads. Most visitors arrive by tapping an ad, often inside the **Instagram/Facebook in-app browser**, on mid-range Android phones, on 4G.
- **Audience:** Indian working professionals, 30–55, dealing with diabetes, thyroid issues, PCOS, belly fat. Not fitness enthusiasts — busy, skeptical, tired of failed diets.
- **The single goal of the page:** get the visitor to tap a CTA button that jumps to `#consultation-form`. Nothing else matters.

**Therefore:** ~90% of viewers are on phones. Mobile is not the "small version" of the design — mobile **is** the design. Desktop is secondary.

---

## 2. Tech stack

- **Next.js (App Router)** with TypeScript
- **Tailwind CSS v4**
- `next/image` for all images
- No heavy animation libraries (no GSAP / Framer Motion / Lottie). CSS animation only.
- Page must be a static server component where possible; only the countdown timer needs `"use client"`.

Put custom CSS in a route-scoped stylesheet with prefixed class names (e.g. `.lp-*`) so it cannot leak into other pages.

---

## 3. Mobile-first requirements (non-negotiable)

1. **Design at 390px width first.** Then check **360px** (very common Android) — nothing may break there.
2. **Must never scroll horizontally.** Test: `document.documentElement.scrollWidth === document.documentElement.clientWidth` at every scroll position, on 360px / 390px / 768px / 1440px.
3. Tap targets minimum **48×48px**.
4. Body text minimum **13px**; never below 11px even for labels.
5. A **fixed sticky CTA bar** sits at the bottom of the viewport at all times. The page must have bottom padding greater than the bar's height so the last section is never hidden behind it. Respect `env(safe-area-inset-bottom)` for iPhone home-indicator.
6. The hero video thumbnail must be visible **without scrolling** on a 390×844 screen, or within one short scroll. Do not push it below the fold.
7. Desktop (≥1024px): do not just stretch the mobile column into a thin ribbon in the middle of a huge empty screen. Give desktop real layouts — 2-column hero, multi-column card grids.

---

## 4. Exact content to use

### Offer constants
```
price:            198
originalPrice:    999
currency:         INR (₹)
countdown:        5 minutes (mm:ss, restarts at 00:00)
CTA anchor href:  #consultation-form
sticky bar label: CLAIM SEAT
```

### CTA button labels (rotate these, all link to #consultation-form)
```
primary:   BOOK YOUR 1:1 ROOT-CAUSE CONSULTATION @ ₹198
bookShort: BOOK YOUR 1:1 ROOT-CAUSE CONSULTATION
register:  REGISTER NOW
```

### Refund line (appears under most CTAs)
```
If you feel the session wasn't useful, we'll refund the fee. No questions asked.
```

### Hero
```
eyebrow:     VIDEO UNLOCKED
headline:    Ultimate Metabolic Reset Formula For Busy Professionals!
subheadline: Fix The Root Cause of Diabetes, Thyroid & Belly Fat with FUME Science-Backed
             Metabolic Reset Framework. Without Diets, Gym, or Lifelong Medicines.
socialProof: Trusted by 4,000+ busy professionals with diabetes, thyroid & fertility challenges
videoLabel:  Click Play
```
Hero needs: eyebrow pill, headline, subheadline, a row of 4 overlapping avatar images + the socialProof line, a 16:9 video thumbnail with a large play button and the "Click Play" label, and a primary CTA.

### Bonuses — heading: "Unlock These Powerful Tools When You Claim Your Call Today!" (eyebrow: "Included free")
```
1. 50 Delicious Templates for Hormone Balance
   Enjoy guilt-free, tasty recipes designed to naturally balance your hormones and shed stubborn belly fat.
2. Meal Planning Made Simple
   Master meal planning with practical tips and proven strategies that fit seamlessly into your busy lifestyle.
3. 5 Secrets to Boost Your Metabolism
   Discover natural techniques to ignite your metabolism.
4. 5 Proven Ways to Trim Your Waist
   Get actionable strategies to achieve a flat belly effortlessly.
5. Exclusive One-on-One Consultation Call
   Receive a customized health game plan tailored to your unique goals and lifestyle.
```

### Value stack
```
Total Value: ₹30,000
Headline:    Yours Today for Just ₹198!
Condition:   (Only when you claim your call)
```

### Guarantee
```
headline:    Our Bold Promise: 100% Satisfaction or Your Money Back!
description: We are so confident in the transformative value of our program that we're willing to
             guarantee it. During your one-on-one consultation, you'll receive actionable,
             personalized steps to help you achieve your health and fitness goals faster than ever before.
guarantee:   If you follow the strategies we provide and don't see real, measurable results, we'll
             refund your consultation fee in full. No questions asked.
closing:     Your success is our priority, and with our proven system, you've got nothing to lose
             and everything to gain!
```
Include a money-back-guarantee badge image.

### Benefits — heading: "Here's What You'll Gain From This 1:1 Call"
```
1. Clarity on why previous attempts at weight loss haven't worked, and how to fix it permanently.
2. A step-by-step action plan tailored to your unique health and fitness goals.
3. Strategies to maximize results with minimal time investment.
4. Renewed energy, confidence, and control over your health.

closing: This isn't just a consultation. It's the first step to a healthier, happier you.
```

### Social proof intro
```
4,000+ Busy Professionals Have Transformed Their Lives!
```

### Transformations (each with a photo)
```
Anjana         — Reduced 11 kg & reversed PCOS
Smita          — Lost 20 kg & reversed PCOS
Ramdas Jagtap  — 51 yrs young. Transformation
Vinayak        — Reduced 7 inches & reversed metabolic distress
Deepak         — Lost 26 kgs & 11 inch from waist
FUME Client    — Reduced liver markers and cholesterol
```

### Video testimonials — heading: "Hear It From People Who Took The Call" (each = video thumbnail + play button)
```
Dr. Paramita Mishra — Dr. Paramita Mishra Shares her Fitness Journey
Arun               — At 80, He Looks 50!
                      (sub: Arun Credits Fume.Fit for His Unbelievable Transformation)
Vandana            — Vandana shares how she lost 6.5 kg in a short time.
FUME Client        — Nothing Worked. Until Fume!
FUME Client        — This One Call Could Save You Lakhs in Healthcare Costs and Help You Avoid
                      Serious Health Risks.
```

### Founder
```
name:          Dr. Uma
role:          Hormonal Health and Transformational Coach and Founder of FUME
introHeadline: Meet Dr. Uma, the Creator of the Metabolic Reset Formula
story:         Like many of you, I faced severe health challenges that seemed impossible to
               overcome: diabetes, high cholesterol, Hypothyroid, and constant fatigue from
               working in a high-stress corporate job for 17 years.
attempts:      I tried every diet and intense workout routine I could find, but nothing worked.
result:        Lost 19 kgs, reversed chronic conditions, and regained energy.
created:       Metabolic Reset Formula. Has helped over 10,000 individuals.
mission:       Help one million people transform their health and reclaim their youthfulness.
philosophy:    Science-backed, sustainable solutions that work for busy professionals.
closing:       If I can do it, so can you!

stat tiles:    Started 75 kg  |  Lost 19 kg  |  Helped 10k+
```
Also a section titled **"Your Health is Truly Priceless"** with a CTA and a founder photo card.

### Decision — heading: "Let's Be Honest. This Proven Method Works, and Now It's Your Moment to Decide!"
```
Option 1 — Stick With Old Habits  (negative / dimmed styling)
  You can choose to stick with your old habits, but chances are, nothing will change.

Option 2 — Take Action Today      (positive / highlighted styling)
  Take action today. Book a call and receive a personalized game plan from an expert with a
  proven track record of transforming the lives of thousands of professionals like you!

closing: The choice is yours. But remember, every journey starts with a single step. Make today
         the day you take that step toward a healthier, happier you.
```

### Footer
```
brand:      FUME
links:      Disclaimer | Privacy Policy
copyright:  Copyright © 2025 Fume | All Rights Reserved
disclaimer: This site is not a part of Meta or Facebook Inc. Additionally this site is not
            endorsed by Facebook in any way. Facebook is a trademark of Meta Inc.
```

### Images
Use Unsplash placeholder URLs (fitness / healthy food / doctor / gym subjects) for: hero video thumbnail, 4 avatars, 6 transformation photos, 5 testimonial thumbnails, a healthy-food image, a founder portrait. Plus one money-back-guarantee badge graphic.

---

## 5. Required section order

1. Sticky header (logo + small CTA)
2. Hero (eyebrow, headline, sub, social proof, video, CTA)
3. Price / offer block with `id="consultation-form"` + CTA + refund note
4. Bonuses (5)
5. Value stack (₹30,000 → ₹198)
6. Guarantee
7. Benefits (4)
8. Social proof intro
9. Transformations (6 photos)
10. Video testimonials (5)
11. "Your Health is Truly Priceless" + founder photo card
12. Founder story + 3 stat tiles
13. Decision (2 options)
14. Final CTA (price + REGISTER NOW)
15. Footer
16. Fixed sticky CTA bar (price, strikethrough price, countdown, CLAIM SEAT button)

---

## 6. Visual design direction

Pick **one** coherent aesthetic and execute it fully — do not mix three styles.

The page must look **premium and energetic**, not like a default Tailwind template. It is competing against slick competitor funnels. Flat white cards with light grey shadows read as cheap — avoid that.

Suggested directions (choose one):
- **Deep immersive dark** — near-black base with rich colour glows, luminous cards, bright gradient CTAs.
- **Bold sticker/neo-brutalist** — high-contrast, thick borders, hard offset shadows, chunky pill buttons.
- **Editorial light** — lots of whitespace, huge confident typography, one vivid accent colour.

Requirements regardless of direction:
- One strong accent colour used consistently for CTAs and highlights.
- Strong typographic hierarchy — headlines should be genuinely large and heavy (`font-black`), body text calm and readable.
- Use fluid type so it scales: `font-size: clamp(2.5rem, 11vw, 3.6rem)` for the big price, similar for headlines. Never a fixed `rem` size for large display text.
- Generous spacing. Cramped sections feel cheap. Section padding ≈ `py-11` mobile, `py-14` tablet, `py-16` desktop. Space between a heading block and its content ≈ `space-y-7`. Card interior padding ≈ `p-5`/`p-6`, not `p-3`.
- Every CTA button must look obviously tappable and be the loudest element in its section.

---

## 7. Animation spec

The page should feel alive, but **smooth above all** — a janky page kills conversions.

**Allowed / encouraged:**
- Ambient, always-running motion: gradient shine sweeping across CTA buttons, pulsing ring around play buttons, an auto-scrolling marquee strip of transformation results, gently floating badges.
- A one-time entrance animation on hero elements with small staggered delays (0.08s apart).
- Tap feedback (`:active`) on every card and button — this is what mobile users actually feel.
- Horizontal scroll-snap carousel for the transformation photos on mobile.

**Forbidden — these cause real, measured problems:**
- ❌ **Do not animate `filter: blur()`.** Animating a transform on a large blurred element re-rasterizes it every frame and destroys scroll performance on mobile.
- ❌ **Do not use `backdrop-filter: blur()` on many elements.** One or two is fine; on every card over a fixed background it saturates the compositor — sections then paint late or appear blank while scrolling.
- ❌ **Do not animate `box-shadow`, `background-position`, `width`, `height`, `top`/`left`.** These force repaint/relayout every frame.
- ✅ **Only animate `transform` and `opacity`.** These are GPU-composited. This is the single most important performance rule on this page.
- ❌ **Do not build a scroll-triggered "fade in as you scroll" reveal system.** It was tried and rejected on this project. If you use one anyway, see the pitfalls below.

**Accessibility:** wrap all motion in `@media (prefers-reduced-motion: reduce)` and disable it there.

---

## 8. Known pitfalls — read carefully, these all actually happened

These are real bugs found in a previous attempt. Avoid them from the start.

**Layout**
1. **Flex child with fixed-size content needs `shrink-0`.** An avatar stack (`flex -space-x-2.5`) next to a long paragraph got squeezed below its content width, and the fixed-34px images spilled **on top of** the text. Add `shrink-0` to the image wrapper and `min-w-0` to the text.
2. **An absolutely-centred badge must be narrower than the gutter it sits in.** A 44px "VS" badge centred in a 24px grid gap overlapped both cards by ~10px. Make the gap larger than the badge, or put the badge in normal flow on mobile and only absolutely position it at `sm:` and up.
3. **The second column of a 2-column grid stacks LAST on mobile.** A hero video placed in column 2 rendered *below* the CTA button on phones. Control the mobile order explicitly (split into three blocks and use `lg:col-start` / `lg:row-start`, or use `order-*`).
4. **Watch for holes in card grids.** A last card with `col-span-2` in a 2-column grid left an empty cell beside the previous card.
5. **Don't overlap text onto photos** unless there is a strong gradient scrim behind it. Caption text over a bright photo is unreadable — put it in a panel below the image instead.

**CSS**
6. **`background-clip: text` + `line-height: 1` clips the glyphs.** Gradient text gets its top sheared off. Use `line-height: 1.15+` and `display: inline-block`.
7. **A sweeping `::before`/`::after` needs `overflow: hidden` on its parent.** A shine pseudo-element translating to `140%` of its width with no clipping parent blew the document `scrollWidth` out to 819px on a 390px viewport — a horizontal-scroll bug.
8. **Tailwind v4: plain CSS outside `@layer` beats utility classes**, regardless of source order. A reusable `.card { background: ... }` class will silently override a `bg-*` utility on the same element. Either the class owns the background, or the utility does — never both.
9. **`:hover` does not exist on touch devices.** Any effect built only in `:hover` is invisible to ~90% of this page's traffic. Gate hover styles behind `@media (hover: hover) and (pointer: fine)` and provide an `:active` state for touch.

**If you build a scroll-reveal anyway (not recommended)**
10. A blanket "failsafe" timer that force-reveals content after ~1.2s will reveal **every section on the page** before the user has scrolled to any of them — so nothing ever appears to animate. Any fallback timer must be long (8s+) or absent.
11. Easing curves like `cubic-bezier(0.16, 1, 0.3, 1)` resolve ~95% of the motion in the first ~20–30ms. It technically animates but reads as an instant pop. Use a curve that spreads motion across the duration, e.g. `cubic-bezier(0.33, 0, 0.2, 1)`.
12. An IntersectionObserver `rootMargin` that triggers 120px early means the animation finishes off-screen before the section scrolls into view.

---

## 9. Acceptance checklist

Before declaring done, verify each of these:

- [ ] No horizontal scroll at 360px, 390px, 768px, 1440px (`scrollWidth === clientWidth`)
- [ ] No element visually overlaps another unintentionally at any of those widths
- [ ] Scrolling is smooth on a mid-range phone / CPU-throttled DevTools (no dropped frames)
- [ ] Every section from the list in §5 is present with the exact copy from §4
- [ ] Every CTA links to `#consultation-form` and that id exists on the page
- [ ] The sticky bar never covers page content, and respects the iPhone safe area
- [ ] Countdown timer renders without a hydration mismatch warning
- [ ] All animations disabled under `prefers-reduced-motion: reduce`
- [ ] Tap feedback is visible on buttons and cards on a touch device
- [ ] Only `transform` / `opacity` appear inside `@keyframes`
- [ ] Desktop ≥1024px has real multi-column layouts, not a narrow centred strip
- [ ] TypeScript and ESLint pass clean

---

## 10. How to deliver

Build it, then **actually open the page in a browser at 390px and at 1440px and look at it** before saying it's finished. Screenshot each full section and check it against the acceptance checklist above. Most of the bugs listed in §8 are invisible in code review and obvious in a screenshot.
