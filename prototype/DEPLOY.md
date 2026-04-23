# Deploy to Vercel

Step-by-step for getting the prototype live at a public URL you can paste into the LinkedIn DM.

## Prerequisites (one-time, ~90 sec)

- A Vercel account (free tier is enough for this). If you don&rsquo;t have one: https://vercel.com/signup
- Node 18+ locally (you already have this — `npm run build` works).

## One-command deploy (recommended)

```bash
cd /Users/ajnarasi/Documents/Work/Projects/APM/PayPal-Merchant-Onboarding/prototype
npx vercel --prod
```

The first run will:
1. Prompt for login (email magic link). Complete auth in the browser, then return to the terminal.
2. Ask "Set up and deploy?" → **Y**
3. Ask "Which scope?" → pick your personal account.
4. Ask "Link to existing project?" → **N**
5. Ask "Project name?" → **paypal-merchant-confidence** (or anything you prefer; becomes the subdomain).
6. Ask "In which directory is your code located?" → **./ ** (current dir — this is the prototype, not the repo root).
7. Auto-detect **Next.js** → leave defaults.
8. Deploy. You&rsquo;ll get a production URL like `https://paypal-merchant-confidence.vercel.app`.

Total time: ~2 minutes for first deploy. Subsequent `npx vercel --prod` re-runs from the same directory take ~45 sec.

## After the first deploy — add the public URL to the OG card

Edit `app/layout.tsx` — replace the `metadataBase` fallback with your real Vercel URL:

```ts
metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://paypal-merchant-confidence.vercel.app"), // <- your URL
),
```

Or set it as an env var in the Vercel dashboard (**Settings → Environment Variables**):
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: your production URL
- Apply to: Production, Preview, Development

Redeploy: `npx vercel --prod`.

## Custom domain (optional)

If you want something nicer than `*.vercel.app`:

```bash
npx vercel domains add your-domain.com
npx vercel alias https://paypal-merchant-confidence-<hash>.vercel.app your-domain.com
```

## Verify the deploy

After deploy completes:

```bash
# Smoke test
curl -s -o /dev/null -w "%{http_code}\n" https://<your-url>/
curl -s -o /dev/null -w "%{http_code}\n" https://<your-url>/enterprise
curl -s -o /dev/null -w "%{http_code}\n" https://<your-url>/evidence

# OG card renders?
curl -s -o /tmp/og.png -w "%{http_code} %{content_type}\n" https://<your-url>/opengraph-image
open /tmp/og.png
```

Quick visual check: paste the URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) or [OpenGraph.xyz](https://www.opengraph.xyz/) to confirm the OG card preview renders correctly.

## Re-deploy after changes

```bash
cd /Users/ajnarasi/Documents/Work/Projects/APM/PayPal-Merchant-Onboarding/prototype
npx vercel --prod
```

## If you want GitHub-triggered auto-deploy

Instead of running `vercel` each time, connect the repo to Vercel via the dashboard:

1. https://vercel.com/new
2. Import from your git provider → select the APM repo.
3. **Root Directory** → `PayPal-Merchant-Onboarding/prototype` (this is important — the project is nested).
4. **Framework preset** → Next.js (auto-detected).
5. Deploy.

Every `git push` to the main branch then triggers a production deploy; every PR gets a preview URL. Good pattern for this kind of artifact because you can keep iterating on it and the LinkedIn URL stays the same.

## Cost

Free tier covers this fully:
- Hobby plan · unlimited static requests · 100 GB bandwidth/mo.
- Edge runtime for the OG image is billed by invocation — but LinkedIn DMs + hiring manager views will be far under the free tier threshold.

## Rollback

If a deploy looks wrong, in the dashboard:
- Deployments → Previous deploy → **Promote to Production**.

Or from CLI:

```bash
npx vercel rollback <previous-deploy-url> --prod
```
