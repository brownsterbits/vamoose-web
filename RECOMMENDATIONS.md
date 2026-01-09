# Vamoose Landing Page Recommendations

Documented: 2025-12-24
Last Updated: 2026-01-08

---

## Session Log - Jan 8, 2026

### Completed This Session

1. **Tech stack review** - Documented full stack (Next.js 16, React 18, TypeScript, Tailwind, Supabase, Resend, Vercel)

2. **Supabase keep-alive** - Prevents free tier from pausing after 7 days inactivity
   - Initially implemented Vercel cron approach
   - Switched to GitHub Actions (simpler, no env vars needed)
   - Workflow: `.github/workflows/supabase-keepalive.yml`
   - Runs every 5 days, pings Supabase health endpoint
   - Fixed to accept 401 response (auth required but project active)
   - **Tested and passing** ✅

3. **Architecture decision documented** - OK to use Supabase for marketing site + Firebase for mobile app (different use cases, no shared data needed)

### Commits This Session
- `df7e35a` - Add Supabase keep-alive via GitHub Actions
- `9c9a0df` - Fix keep-alive to accept 401 as valid response

### To Resume
1. All keep-alive work is complete and tested
2. Continue with remaining recommendations below (social meta tags, app imagery, etc.)
3. Note: Another project also has keep-alive workflow that may need the same 401 fix

---

## Session Log - Dec 24, 2025

### Completed This Session

1. **Mobile navigation** - Added hamburger menu (`components/Header.tsx`)
2. **Waitlist form** - Full Supabase + Resend integration
   - Form component with loading/success/error states (`components/WaitlistForm.tsx`)
   - API route (`app/api/waitlist/route.ts`)
   - Stores emails in Supabase `waitlist` table
   - Sends confirmation email via Resend
3. **Fixed broken links** - Created Privacy Policy and Terms pages
   - `/privacy` - Privacy Policy page
   - `/terms` - Terms of Service page
   - Removed "Guide: Wildfire Prep" link (no content yet)
4. **Updated copy** - Removed Pacific Northwest regional messaging (now generic)
5. **Deployed to Vercel** - Pushed to GitHub, connected to Vercel

### Backend Configuration (Already Done)

**Supabase (Organization: Vamoose)**
- Project URL: `https://yzgnikoibgfawyhdbmgu.supabase.co`
- Table: `waitlist` (id, email, created_at)

**Resend (Separate account from StaffCue)**
- Domain: `vamoose.io` (verified)
- Sends from: `noreply@vamoose.io`

**Vercel**
- Repo: `brownsterbits/vamoose-web`
- Needs environment variables set in Vercel dashboard:
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `RESEND_API_KEY`

### Immediate Next Steps

1. **Verify Vercel deployment**
   - [ ] Add environment variables in Vercel dashboard
   - [ ] Test form submission on production URL
   - [ ] Connect custom domain (vamoose.io) via DNS

2. **User mentioned design feedback** - To be discussed

3. **User mentioned "hint harder at value"** - Content/copy improvements before social push

---

## Critical Issues

### 1. No mobile navigation
- **Status**: [x] DONE - `components/Header.tsx`

### 2. Form doesn't work
- **Status**: [x] DONE - Supabase + Resend integration

### 3. Dead links
- **Status**: [x] DONE - Privacy/Terms pages created, Guide link removed

---

## High Priority

### 4. Social meta tags
- **Problem**: No Open Graph or Twitter card meta tags
- **Impact**: Poor appearance when shared on social media
- **Solution**: Add OG image, title, description; Twitter card tags
- **Status**: [ ] Pending
- **Note**: User wants to improve value proposition content first

### 5. App preview imagery
- **Problem**: Hero section has gradient blur placeholder instead of real visuals
- **Impact**: Visitors don't know what the app looks like
- **Solution**: Add app mockups, screenshots, or illustration
- **Status**: [ ] Pending

---

## Medium Priority

### 6. Sticky header on scroll
- **Problem**: Header uses `absolute` positioning - disappears on scroll
- **Solution**: Change to `sticky top-0` with backdrop blur effect
- **Status**: [ ] Pending

### 7. Favicon & app icons
- **Problem**: Using default Next.js favicon
- **Solution**: Add custom favicon.ico and Apple touch icons
- **Status**: [ ] Pending

### 8. Accessibility improvements
- **Problems**:
  - Emojis used as icons lack screen reader context
  - Form input uses placeholder instead of visible label (FIXED - has sr-only label now)
  - Color contrast not verified
- **Solutions**:
  - Add `aria-hidden="true"` to emojis with separate SR text
  - Run contrast checker on primary/secondary colors
- **Status**: [ ] Partially done

### 9. Cite statistics sources
- **Problem**: Stats like "55 billion-dollar disasters" and "12 days" lack sources
- **Impact**: Reduces credibility
- **Solution**: Add source links or footnotes (likely NOAA data)
- **Status**: [ ] Pending

### 10. Clean up unused Tailwind colors
- **Problem**: `vamoose.*` color palette defined in `tailwind.config.ts` but never used
- **Solution**: Either adopt this palette or remove dead code
- **Status**: [ ] Pending

---

## Lower Priority

### 11. Add trust signals
- Testimonials from beta testers
- "Featured in..." logos
- Security/privacy badges
- **Status**: [ ] Pending

### 12. Analytics integration
- Options: Plausible, Fathom, or GA4
- Track: scroll depth, CTA clicks, form submissions
- **Status**: [ ] Pending

### 13. Legal pages
- **Status**: [x] DONE - Basic content created
- Note: May need legal review before App Store submission

### 14. Urgency/scarcity messaging
- "Limited beta spots"
- "Join X families already on the list"
- Launch countdown (if date is set)
- **Status**: [ ] Pending

### 15. Video or animation
- Short demo video in hero section
- Or Lottie animation showing app in action
- **Status**: [ ] Pending

---

## Files Changed This Session

**New Files:**
- `components/Header.tsx` - Mobile-responsive header with hamburger menu
- `components/WaitlistForm.tsx` - Form with full state management
- `app/api/waitlist/route.ts` - API endpoint for Supabase + Resend
- `app/privacy/page.tsx` - Privacy Policy page
- `app/terms/page.tsx` - Terms of Service page
- `.env.example` - Template for environment variables
- `.env.local` - Local environment variables (gitignored)

**Modified Files:**
- `app/page.tsx` - Uses new Header/WaitlistForm components, updated copy
- `tsconfig.json` - Added path aliases (`@/*`)
- `package.json` - Added @supabase/supabase-js, resend dependencies

---

## To Resume

1. Verify Vercel env vars are set and production form works
2. Discuss design feedback user mentioned
3. Improve value proposition copy before social meta tags
4. Continue with remaining recommendations

---

*Last worked on: Dec 24, 2025 with Claude Code*
