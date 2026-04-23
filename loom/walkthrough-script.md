# Loom Walkthrough Script — PayPal Merchant Confidence Prototype

**Total runtime:** ~4 minutes (SMB primary: 2:30 · Enterprise comparison: 1:30)
**Delivery:** Recorded in one take after two rehearsals. Speak conversationally, do not read verbatim.
**Framing for the hiring manager:** You&rsquo;re showing the *product thinking*, not the code. Linger on the paradox visual and Maya&rsquo;s score ticking up — those are the two moments that sell the thesis.

**Pre-roll setup:**
- Chrome window · 1280 wide · zoomed to 100%
- Dev tools closed · no bookmarks visible · incognito recommended
- Loom overlay: top-right, small face bubble
- Two browser tabs ready: `/` and `/enterprise`

---

## Part 1 — SMB primary walkthrough (2:30)

### 0:00 – 0:20 · Open & hook
**On screen:** Landing hero — "PayPal's Growth and Risk systems optimize against each other."

> "Hi, Ajay here. I built this prototype because I think the merchant onboarding problem at PayPal isn't a UX problem — it's a trust-system paradox. Let me walk you through what I mean in about three minutes, and then the rest is in the memo."

*[Click &ldquo;Begin the walkthrough&rdquo; or scroll down]*

---

### 0:20 – 0:45 · The paradox
**On screen:** Two parallel timelines — Growth (green) accelerating toward activation; Risk (red) freezing at first transaction. "Divergence at first txn" callout.

> "Here&rsquo;s the mental model. The Growth team is chartered to accelerate a new merchant toward their first transaction. The Risk team is chartered to slow them down the moment that transaction happens. Same event, two systems, opposite reactions. The 21-day hold isn&rsquo;t a risk feature anymore — it&rsquo;s an activation tax. And when Trustpilot shows a 1.3 out of 5 across 35,000 reviews, that&rsquo;s not a signup-form problem. The hold is the product."

*[Briefly hover on the 1.3/5 stat]*

---

### 0:45 – 1:30 · Maya — the consumer-graph move
**On screen:** Maya journey section. Click through steps 1 → 4.

> "Now — this is the move I&rsquo;d lead with. Meet Maya. She runs a small Shopify store. She&rsquo;s had a PayPal personal account since 2014 and a Venmo profile since 2019. When she signs up her business, PayPal already knows her."

*[Click Start Maya&rsquo;s journey]*

> "Step one — she enters her email. Plus 34 on the Confidence Score because PayPal recognizes twelve years of consumer history and 1,420 verified transactions."

*[Click Next]*

> "Step two — business info auto-fills from her consumer identity. Plus 12."

*[Click Next]*

> "Step three — she connects Chase. Same bank she linked to her personal account in 2017. Plus 18 — it&rsquo;s re-used, not re-verified."

*[Click Next]*

> "Step four — Shopify OAuth. Her three-year store history crosses the opt-in threshold. She&rsquo;s at 80 out of 100. *Opt-in eligible.*"

*[Pause 1 sec on the green score]*

> "This is the one recommendation Stripe and Adyen can&rsquo;t match. They can build any UX and any risk model. They can&rsquo;t build a 400-million-account consumer graph. That&rsquo;s the asymmetry."

---

### 1:30 – 2:10 · Progressive release — opt-in, not default
**On screen:** Release chart section. Start on "Standard (today)" tab.

> "Now — the part most PMs get wrong. If you just flip the 21-day hold into a 25/50/100 release curve, one coordinated fraud ring blows up the experiment. So the architecture I'd ship is opt-in."

*[Click "Opt-in · Enhanced verification" tab]*

> "Merchants above the confidence threshold — like Maya — opt into 25% instant, 50% by day three, 100% by day seven, by completing enhanced verification. Fraud exposure up 0.4 points. Float revenue down 18%. LTV up 2 to 4."

*[Click "Opt-in · Posted collateral" tab]*

> "If they post $2K collateral, the curve gets steeper — 40% instant. Fraud exposure neutral because the collateral absorbs the tail."

> "The A/B doesn&rsquo;t ask whether this is better. It measures where LTV plus TPV lift crosses the float delta. That&rsquo;s the right experimental design."

---

### 2:10 – 2:30 · Guardrails, then what I&rsquo;d not build
**On screen:** Guardrails bento grid → scroll to "What I would not build" dark section.

> "Four guardrails the product has to hold: fair-lending, no protected-class proxies, gaming resistance, and a named float tradeoff. This is the section that turns the pitch from naive to shippable."

*[Scroll to dark section]*

> "And the strongest signal of PM judgment is what you choose not to ship. I&rsquo;d not build a redesigned signup form — entropy is downstream. Not AI onboarding coaches — wrong problem. Not more education — the issue is the hold exists, not that merchants don&rsquo;t understand it."

---

## Part 2 — Enterprise comparison (1:30)

### 2:30 – 2:50 · The sequencing question
**On screen:** Segment ribbon — SMB · Mid-market · Enterprise.

> "Quick one on segments, because the JD spans SMB through enterprise and I lead with SMB. The reason: the paradox is architectural at SMB and parametric at enterprise. Let me show you what I mean."

*[Click &ldquo;Full enterprise sequencing brief&rdquo; → /enterprise]*

---

### 2:50 – 3:20 · The matrix
**On screen:** `/enterprise` page — comparison table highlighting "None — paradox origin" for SMB visibility.

> "Here's the table. Look at the merchant visibility row — only at SMB is it None. Mid-market has CSMs; enterprise has dedicated AMs and custom dashboards. The broken experience driving Trustpilot and the churn to Stripe only exists at SMB."

*[Hover the highlighted "None — paradox origin" cell]*

> "And SMB is also the only segment where PayPal&rsquo;s consumer graph is asymmetric. Enterprise merchants are legal entities — Stripe and Adyen have parity there via D&B and Experian Business. So the moat applies where I'm building."

---

### 3:20 – 3:50 · The revenue math
**On screen:** Scroll to the two-column "Where the consumer graph is asymmetric" + "Enterprise has the logos. SMB has the marginal TPV lift" section.

> "On revenue — enterprise has the logos, but SMB is where the marginal TPV lift per PM-quarter is highest. A 5% SMB activation lift across the acquiring cohort moves aggregate TPV more than a 5% enterprise retention lift because the SMB denominator is millions of merchants. That&rsquo;s the capital-allocation argument."

---

### 3:50 – 4:10 · The roadmap + close
**On screen:** Scroll to the Q1–Year 2 roadmap strip.

> "And the primitives I build at SMB templatize upward. Q3 the Confidence Score becomes a CSM dashboard. Q4 it becomes a line in the enterprise contract for reserve-release milestones. Year two, one data model across segments."

*[Pause, return to camera]*

> "That&rsquo;s the pitch. The memo has the A/B design and the cohort math. I&rsquo;d love 20 minutes to walk through the data model or the opt-in cohort design. Thanks for watching."

---

## Recording checklist

- [ ] Prototype running on `localhost:3500` **or** Vercel preview URL
- [ ] Maya journey *reset* before recording (score at 0)
- [ ] Release chart on "Standard (today)" tab before recording
- [ ] `/enterprise` page scrolled to top before Part 2
- [ ] Audio levels checked — &minus;12 dB peak
- [ ] Camera framing head-and-shoulders
- [ ] Mouse highlights enabled in Loom settings

## Post-production

- Loom auto-trim silences > 1 sec
- Cut any spoken "um" over 0.3 sec
- Export MP4 1080p · get shareable Loom link for LinkedIn DM
- Keep the raw recording in `loom/raw/` locally, not committed

## LinkedIn DM template

> Hi [name] — I&rsquo;m Ajay, Sr Director PM at Fiserv. I built a 3-min clickable walkthrough for the Director, Merchant Onboarding role at PayPal: [Vercel URL]. It argues that the activation problem is a trust-system paradox, not a UX problem — and that the consumer graph is the one move Stripe and Adyen can&rsquo;t match. 4-min Loom: [Loom URL]. One-page memo: [memo URL]. Happy to get on a call if anything resonates.
