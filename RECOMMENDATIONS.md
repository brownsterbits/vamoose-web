# Vamoose Landing Page Recommendations

Documented: 2025-12-21
Status: Pending Review

---

## Critical Issues

### 1. No mobile navigation
- **Problem**: Nav links hidden on mobile (`hidden md:flex`) with no hamburger menu
- **Impact**: Mobile users can't navigate the page
- **Solution**: Add hamburger menu component with slide-out or dropdown
- **Status**: [ ] Pending

### 2. Form doesn't work
- **Problem**: Email form has no `action`, no handler, no success/error states
- **Impact**: Visitors can't actually join the waitlist
- **Solution**: Integrate with Mailchimp, ConvertKit, Resend, or Supabase
- **Requirements**: Loading spinner, success toast, error handling, consider double opt-in
- **Status**: [ ] Pending

### 3. Dead links
- **Problem**: Privacy Policy, Terms, and "Guide: Wildfire Prep" all link to `#`
- **Impact**: Broken user experience, not App Store ready
- **Solution**: Create actual pages or remove links until ready
- **Status**: [ ] Pending

---

## High Priority

### 4. Social meta tags
- **Problem**: No Open Graph or Twitter card meta tags
- **Impact**: Poor appearance when shared on social media
- **Solution**: Add OG image, title, description; Twitter card tags
- **Status**: [ ] Pending

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
  - Form input uses placeholder instead of visible label
  - Color contrast not verified
- **Solutions**:
  - Add `aria-hidden="true"` to emojis with separate SR text
  - Add visible `<label>` element to email input
  - Run contrast checker on primary/secondary colors
- **Status**: [ ] Pending

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
- Create actual Privacy Policy content
- Create Terms of Service content
- Required before App Store launch
- **Status**: [ ] Pending

### 14. Urgency/scarcity messaging
- "Limited beta spots for PNW families"
- "Join X families already on the list"
- Launch countdown (if date is set)
- **Status**: [ ] Pending

### 15. Video or animation
- Short demo video in hero section
- Or Lottie animation showing app in action
- **Status**: [ ] Pending

---

## Code Quality Notes

- Unused `Image` import from `next/image` at `app/page.tsx:1`
- Step numbers use `text-secondary/5` (5% opacity) - nearly invisible
- Could extract repeated card styles into Tailwind `@apply` components

---

## Suggested Priority Order

1. Form integration (critical - can't capture leads without it)
2. Mobile nav (critical - large portion of traffic)
3. Social meta tags (high - needed before sharing)
4. App mockups (high - visual credibility)
5. Everything else as time permits

---

*Review one-by-one with Claude Code when ready.*
