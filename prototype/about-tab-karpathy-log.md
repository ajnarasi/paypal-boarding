# Karpathy Loop — About Tab Content Decision

**Target:** 4-tab "About this pitch" section in the prototype. Must answer: (1) what the pitch is, (2) why I built it, (3) how I prioritized, (4) what problem I'm solving — from a PM's voice, written to the hiring manager.

**Eval rubric (1–5 each):**
1. **Differentiation** — Does this read like a candidate the hiring manager hasn&rsquo;t seen before?
2. **PM judgment signal** — Does each tab show frameworks, not opinions?
3. **Brevity** — Can each tab be read in ≤ 20 sec?
4. **No redundancy** — Does it avoid repeating what the rest of the prototype already shows?
5. **Engagement hook** — Does it invite a reply, not just inform?

Passing: avg ≥ 4.2, no dimension < 4.

---

## Iteration 1 — Strawman: literal FAQ

**Tab 1 (What):** "This is a clickable walkthrough of a merchant onboarding thesis for PayPal. Explore the scroll sections to see the recommendations."

**Tab 2 (Why):** "I built this because I'm passionate about merchant onboarding and wanted to demonstrate initiative."

**Tab 3 (How):** "I prioritized the recommendations based on impact."

**Tab 4 (Problem):** "PayPal's merchant onboarding has a trust-system paradox where Growth and Risk optimize against each other."

**Evaluator scores:**
| Dim | Score | Note |
|---|---|---|
| Differentiation | 1 | Reads like every PM application |
| PM judgment | 2 | States positions, shows no framework |
| Brevity | 4 | Short enough |
| No redundancy | 1 | Tab 4 restates the Paradox section verbatim |
| Engagement hook | 1 | Zero invitations |
| **Avg** | **1.8** | Fails hard |

**Generator decision:** Reframe. The literal answers waste the slot. Each tab must contribute something the rest of the prototype *does not* already show.

---

## Iteration 2 — Reframe: meta-pitch, not FAQ

Principles applied:
- Each tab shows a *framework*, not a conclusion.
- Each tab says something the rest of the prototype cannot.
- Each tab ends with a one-line hook the hiring manager can respond to.
- Where possible, mirror the "What I would not build" pattern — state what this pitch is *not*.

### Tab 1 · What this pitch is

> **A prototype-first application, not a cover letter.**
>
> A one-page memo + clickable walkthrough + 4-min Loom + business-panel-reviewed recommendation — built in 4 business days from public data.
>
> **What it is not:** a resume, a case study, or a polished consulting deck.
>
> *Test it by asking: could any other candidate have shipped this over a weekend? If not, the signal is the artifact.*

### Tab 2 · Why I built it

> **Because the JD describes a problem I've already shipped adjacent to — and I'd rather show it than describe it.**
>
> Over four years at Fiserv, I built the merchant-side of the exact same paradox across 55 APMs and 70+ countries. I don't need 12 months to understand PayPal's system. I need 20 minutes of your time to show I already do.
>
> *The prototype is the evidence. The memo is the argument. The Loom is the compression.*

### Tab 3 · How I prioritized

> **Three heuristics cut 10 potential recommendations to 3.**
>
> 1. **Architectural leverage** > UX polish. Fix the conflict between two subsystems, not the handoff between them.
> 2. **Segment leverage.** SMB is where the paradox is architectural *and* where PayPal's consumer graph is asymmetric vs. Stripe and Adyen.
> 3. **Risk optionality.** Default stays conservative. Opt-in is where velocity lives. This is the edit that survives contact with the real fraud regime.
>
> *Happy to walk through the rejected 7 — that's usually the more useful half of a prioritization conversation.*

### Tab 4 · What problem I am trying to solve

> **A new SMB who sells $4K on day 3 and can't access the funds until day 24 is functionally not activated — regardless of what the funnel dashboard says.**
>
> Trustpilot 1.3/5 across 35K reviews. That's not a signup-form problem. It's the downstream experience of two systems optimizing against each other at the SMB tier.
>
> *Primary metric I'd own: time-to-first-successful-withdrawal (not time-to-first-transaction). That one substitution realigns Growth and Risk on the same goal.*

**Evaluator scores:**
| Dim | Score | Note |
|---|---|---|
| Differentiation | 5 | Prototype-first framing + rejected-7 invitation unusual |
| PM judgment | 5 | Each tab shows a framework |
| Brevity | 4 | Tab 3 could be tighter |
| No redundancy | 4 | Tab 4 references paradox but adds the metric substitution the rest of the site doesn't name |
| Engagement hook | 5 | Every tab ends with a reply prompt |
| **Avg** | **4.6** | Passing |

**Generator decision:** Ship with one final tighten on Tab 3, and elevate the "time-to-first-successful-withdrawal" framing since it's a fresh metric substitution that wasn't flagged in the main memo or deck.

---

## Iteration 3 — Final copy (what ships)

Applied: trimmed Tab 3, promoted the metric-substitution call in Tab 4 to its own chip.

**Delta from iter 2:**
- Tab 3: dropped connective "this is the edit that survives" clause — the principle stands on its own.
- Tab 4: pulled the "time-to-first-successful-withdrawal" substitution out as a dedicated callout — it's the single most concrete PM artifact in the whole About section.

**Final rubric: 4.8/5.** Loop terminated.

---

## What shipped (componentized in `components/about/AboutPitch.tsx`)

Four tabs, in order: **What · Why · How · Problem**.
Each tab: display-serif headline, 2–3 sentence body, inline pull-quote, one "reply hook" italicized line.
Layout: tab rail on top (pill tabs), content panel below with `AnimatePresence` morph.
Palette: uses the shifted PayPal-adjacent accent tokens (see `design.md`).
