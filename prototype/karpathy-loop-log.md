# Karpathy Loop — Iteration Log

**Target:** Clickable Next.js prototype to link from a LinkedIn DM to PayPal's hiring manager. Communicates the memo v2 thesis in 3 minutes.

**Rubric** (from `SPEC.md`, 1–5 each, passing avg ≥ 4.3, every dim ≥ 4):
1. Narrative clarity (Doumont)
2. PM judgment signal
3. Interaction quality
4. Credibility anchor (Collins)
5. Compliance awareness (Meadows + Taleb)
6. Design quality (anti-template)
7. LinkedIn-shareable fitness

---

## Iteration 1 — Scaffold + build

**Generator output:** Full Next.js 14 app — 6 components (Hero, ParadoxTimelines, MayaJourney, ReleaseSection, Guardrails, SegmentRibbon, WhyCandidate), 3 pages (landing, /enterprise, /evidence), Tailwind + OKLCH tokens, Framer Motion, Recharts, Fraunces + Inter fonts, lucide-react icons.

**Evaluator scores:**
| Dim | Score | Note |
|---|---|---|
| Narrative clarity | 5 | Title/subtitle/hero all carry the "Growth vs Risk → consumer graph" spine |
| PM judgment | 4 | Missing the "What I would not build" section on-site (only in memo) |
| Interaction | 4 | Maya journey works, chart tabs work; tab morph is hard-cut |
| Credibility | 5 | Fiserv −40% is its own section |
| Compliance | 5 | Guardrails section named ECOA / gaming / float |
| Design | 4 | Editorial serif hero, OKLCH palette, but mostly grid-conforming |
| Shareability | 3 | No OG card yet; would screenshot from wherever Vercel renders |
| **Avg** | **4.28** | Below 4.3, two dims at or below 4 |

**Generator decision:** Refine.

---

## Iteration 2 — Address PM judgment gap, add OG card, mobile verification

**Refinements applied:**
1. **Added `components/judgment/WouldNotBuild.tsx`** — dark-background section between Guardrails and SegmentRibbon. Five items: signup redesign, AI coaches, education content, premium tier, wholesale hold elimination. Lead sentence: "The strongest signal of PM judgment is what you choose *not* to ship." Display-serif headline with italic accent on "not." Addresses Doumont & Godin: strongest PM signal no longer buried.
2. **Added `app/opengraph-image.tsx`** — Next.js 14 native dynamic OG generation via `next/og` `ImageResponse`. 1200×630 PNG with serif hero headline, author byline, credibility anchors as footer strip. Verified renders at `/opengraph-image` with 200 + content-type image/png, 54 KB.
3. **Mobile verified** — 375 × 812 viewport shows hero clean, type scales via `clamp()`, buttons stack vertically, no overflow.
4. **Production build** — `next build` passes. Routes: `/` 148 kB, `/enterprise` + `/evidence` static, `/opengraph-image` edge. First load JS 242 kB.
5. **metadataBase** added to `app/layout.tsx` so OG card URL resolves on Vercel vs localhost.

**Evaluator scores:**
| Dim | Score | Note |
|---|---|---|
| Narrative clarity | 5 | Unchanged |
| PM judgment | 5 | "What I would not build" now visible on the flow |
| Interaction | 4 | Same — tab morph still a cut |
| Credibility | 5 | Unchanged |
| Compliance | 5 | Unchanged |
| Design | 5 | Dark WouldNotBuild section adds the grid-breaking moment |
| Shareability | 5 | OG card renders; Vercel deploy-ready |
| **Avg** | **4.86** | Passing. |

**Generator decision:** Ship. One final polish pass for deploy hygiene.

---

## Iteration 3 — Deploy hygiene + loop close

- `vercel.json` committed with `framework: nextjs`.
- README updated with 3-min hiring-manager reading path.
- `.gitignore` scoped to Next artifacts.
- Preview launch config registered in `.claude/launch.json` as `paypal-merchant-confidence` on port 3500.

**Final rubric:** 4.86 average. Ship.

**Loop terminated.** Total generator cost: 3 passes. Weakest dim (interaction chart tab morph) left as-is — diminishing return vs. loop budget.

---

## Addendum — Iteration 4 (post-ship, 2026-04-23 afternoon)

Triggered by user request: *"Update the design.md file from Google Stitch to map the theme and design of this prototype to reflect PayPal's logo and design patterns. Also include a tab describing: (1) what this pitch is about, (2) why I went about building this, (3) how I prioritize this, (4) what problem I am trying to solve."*

Ran a nested Karpathy loop (3 sub-iterations) for the About-tab copy. Full sub-loop in `about-tab-karpathy-log.md`. Final content scored 4.8/5 — ships.

**Iter 4 additions:**
1. `prototype/design.md` — full design-system spec mapping Google Stitch tokens → PayPal-adjacent palette → Tailwind implementation. Explicit brand-impersonation guardrails documented.
2. **Palette shift** in `tailwind.config.ts` + `globals.css`:
   - `accent`: `oklch(62% 0.18 250)` → `oklch(36% 0.14 265)` (PayPal-adjacent deep blue)
   - Added `accentBright` (`oklch(58% 0.16 248)`) for links/CTAs (answers PayPal's light P)
   - Added `gold` / `goldSoft` for emphasis on reply-hooks and single-metric-substitution callouts
   - Focus ring + selection updated to `accentBright`
3. `components/about/AboutPitch.tsx` — new tabbed section between Hero and Paradox. Tab rail (4 pills) + content panel with `AnimatePresence` morph. Each tab: display-serif headline, framework body, gold-bullet reply-hook. Tab 4 ("Problem") includes the new "single metric substitution" callout (time-to-first-transaction → time-to-first-successful-withdrawal) that the rest of the site doesn&rsquo;t name.
4. `Hero` CTA row extended with a tertiary "About this pitch" button styled in `accentSoft`.

**Production build after iter 4:** 150 kB landing, 244 kB First Load JS (+2 kB for AboutPitch, acceptable).

**Final rubric (all dims re-scored):**
| Dim | Pre-iter-4 | Post-iter-4 |
|---|---|---|
| Narrative clarity | 5 | 5 |
| PM judgment | 5 | 5 (single-metric-substitution strengthens it) |
| Interaction | 4 | 4 |
| Credibility | 5 | 5 |
| Compliance | 5 | 5 |
| Design | 5 | 5 (palette now signals "looked at PayPal's system") |
| Shareability | 5 | 5 |
| **Avg** | 4.86 | **4.86 (with one dim strengthened)** |

Loop terminated. No further sub-iteration warranted.

---

## What did *not* go into the loop (out of scope)

- Real risk-score algorithm. This is a narrative artifact, not a model.
- Authentication, backend, database.
- PayPal brand impersonation.
- Scrollytelling 3D / WebGL.
- Analytics / A/B tooling.

## Artifacts produced

```
prototype/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── opengraph-image.tsx
│   ├── enterprise/page.tsx
│   └── evidence/page.tsx
├── components/
│   ├── hero/Hero.tsx
│   ├── paradox/ParadoxTimelines.tsx
│   ├── journey/MayaJourney.tsx
│   ├── journey/ConfidenceScore.tsx
│   ├── release/ReleaseChart.tsx
│   ├── guardrails/Guardrails.tsx
│   ├── judgment/WouldNotBuild.tsx      ← iter 2 addition
│   ├── segments/SegmentRibbon.tsx
│   ├── candidate/WhyCandidate.tsx
│   └── ui/{Chip,Eyebrow,Section}.tsx
├── lib/
│   ├── fixtures.ts
│   ├── motion.ts
│   └── cn.ts
├── package.json · tsconfig.json · tailwind.config.ts · next.config.mjs
├── postcss.config.mjs · vercel.json · .gitignore
├── SPEC.md
├── README.md
└── karpathy-loop-log.md              (this file)
```
