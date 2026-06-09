# DMA_BUILD_PROMPT.md
## Antigravity IDE — Agentic Build Prompt
## Digi Mabble Academy Landing Page

---

## YOUR ROLE

You are building a complete, production-ready, single-page landing page for **Digi Mabble Academy (DMA)** — a practical AI skills bootcamp for college students, backed by Digi Mabble, a real AI and IT solutions company.

This is a **Day 0 pre-launch page**. Its only job is to convert visitors into beta batch applicants. Every design and copy decision must serve that goal.

---

## OUTPUT REQUIRED

A single, complete `index.html` file with:
- All CSS embedded in a `<style>` block in the `<head>`
- All JavaScript embedded in a `<script>` block before `</body>`
- Google Fonts loaded via `<link>` in `<head>`
- Phosphor Icons loaded via CDN
- No external frameworks (no Bootstrap, no Tailwind, no React)
- Fully responsive (mobile-first)
- Production-ready, clean, commented code

---

## BRAND RULES — FOLLOW STRICTLY

### Colors (in priority order — do NOT deviate)
```css
:root {
  --navy: #1B2A6B;        /* PRIMARY — hero, dark sections, headings, primary bg */
  --navy-deep: #0D1B4B;   /* body text on white, footer bg */
  --white: #FFFFFF;        /* cards, body sections, text on dark */
  --ice-blue: #C8D8F0;    /* alternating section backgrounds */
  --gold: #F5A623;         /* ACCENT ONLY — CTA button, label pills, max 4-5 uses */
  --gray-muted: #6B7280;   /* captions, secondary text */
  --border-light: #E5E7EB; /* card borders, dividers */
}
```

**GOLD RULE:** Gold appears MAXIMUM 4–5 times on the entire page:
1. Primary CTA button fill
2. Label pills (small, uppercase)
3. 1–2 accent words in headlines
4. Checkmarks in lists
5. Assessment block background (one full section only)

### Typography
```css
/* Import in <head> */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

font-family: 'Manrope', sans-serif;

/* Scale */
h1: font-size clamp(36px, 6vw, 68px); font-weight: 800;
h2: font-size clamp(28px, 4vw, 48px); font-weight: 700;
h3: font-size clamp(18px, 2vw, 24px); font-weight: 600;
body: font-size 16px; font-weight: 400; line-height: 1.7;
label-pill: font-size 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;
```

### Buttons
```css
/* PRIMARY — used for main CTAs */
.btn-primary {
  background: #F5A623;
  color: #1B2A6B;
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.9; }

/* SECONDARY */
.btn-secondary {
  background: #1B2A6B;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

/* OUTLINE */
.btn-outline {
  background: transparent;
  color: #FFFFFF;
  padding: 13px 31px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 15px;
  border: 2px solid #FFFFFF;
}
```

### Label Pills
```css
.label-pill {
  display: inline-block;
  background: #F5A623;
  color: #1B2A6B;
  padding: 5px 14px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}
```

### Section Spacing
```css
section { padding: 90px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
@media (max-width: 768px) { section { padding: 60px 0; } }
```

### Decorative Diamond Dot Pattern (Hero sections)
```css
/* SVG background pattern — white dots on navy */
background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
background-size: 24px 24px;
```

---

## BUILD THESE 16 SECTIONS IN ORDER

---

### [SECTION 1] NAVIGATION

```
Layout: sticky, white bg, 1px bottom border (#E5E7EB), height 70px
Left: DMA Logo SVG (DIGI MABBLE in navy, ACADEMY in gold #F5A623, same geometric icon)
Center: nav links — Courses · Our Approach · Beta Batch · Blog
Right: "Join Community" (WhatsApp icon, navy text) + "Apply Now" btn-primary

Behavior:
- Sticky on scroll
- Background transitions from transparent to white on scroll (add .scrolled class via JS)
- Mobile: hamburger icon → full-screen navy overlay menu, gold Apply Now at bottom

Logo text code:
<span style="color: #1B2A6B; font-weight: 800;">DIGI MABBLE </span>
<span style="color: #F5A623; font-weight: 800;">ACADEMY</span>
```

---

### [SECTION 2] HERO

```
Layout: Navy bg #1B2A6B, min-height 100vh
Decoration: Diamond dot pattern top-right quadrant (CSS radial-gradient, white 12% opacity)
Bottom: Wavy SVG divider transitioning to white

Left block (55%):
  - Label pill (gold): "BATCH ZERO · ONLY 20 SEATS"
  - H1 (white, Manrope 800):
      Line 1: <span style="color:#F5A623">AI</span> is already replacing jobs.
      Line 2: The question is — whose?
  - Subtext (white, opacity 0.7, 18px):
      "Digi Mabble Academy teaches college students real, job-ready AI skills.
      Not theory. Not MCQs. Real tools. Real projects. Real proof."
  - Button row:
      [btn-primary] "Claim Your Founding Spot →" → opens booking modal
      [btn-secondary] "See What You'll Build →" → smooth scroll to #projects

Right block (45%):
  Founding Member Card — dark navy card, gold 1.5px border, border-radius 12px, padding 40px
  Content:
    - "DIGI MABBLE ACADEMY" — small white text, logo icon small
    - "FOUNDING MEMBER" — large Manrope 800, white
    - "#__ of 20" — gold, large, animated counter (JS: count up to 7 or placeholder)
    - "BATCH ZERO · 2026" — small muted white
    - "[Your Name Here]" — small muted italic

Wavy divider SVG at bottom of hero (white wave into next section):
<svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF"/>
</svg>
```

---

### [SECTION 3] STATS BAR

```
Theme: White bg
Layout: 4 stat blocks in a flex row, centered, thin vertical dividers between

Stats:
  [12+]  Industries Digi Mabble has built AI for
  [8+]   AI products already deployed by our team
  [80%]  Practical learning — not theory
  [20]   Beta seats available

Design per stat:
  - Number: Manrope 800, 52px, navy #1B2A6B
  - Gold underline: 3px solid #F5A623, width 32px, centered below number
  - Label: 13px, #6B7280, margin-top 8px

Below bar (centered, small italic, muted):
  "Powered by real AI experience from Digi Mabble"
```

---

### [SECTION 4] PARENT COMPANY TRUST

```
Theme: Ice Blue bg #C8D8F0
Label pill (gold): "BACKED BY REAL AI EXPERIENCE"
H2 (navy): "We don't just teach AI. We build it."
Subtext (navy, 80% opacity):
  "Digi Mabble Academy is backed by Digi Mabble — a real AI and IT solutions
  company that has deployed AI tools across 12+ industries. Our mentors don't
  teach from slides. They teach from what they've actually shipped."

Two column layout:

LEFT — Services (3-col icon grid, outline icons, navy):
  AI Chatbots · AI CRM Systems · AI Voice Bots
  AI Social Media Automation · AI Email Management · AI Booking Systems
  IT Consulting & Advisory · Cyber Security · WhatsApp & Telegram Bots

RIGHT — Industries (icon grid, navy icons, gold label above):
  Label: "INDUSTRIES WE'VE WORKED IN"
  Automobile · IoT · Laboratories · Healthcare · IT · E-Commerce
  Food & Beverage · Delivery · Banking · Construction · Industrial · Production

Below (navy text link, right aligned):
  "Learn more about Digi Mabble →" (opens https://digimabble.com in new tab)
```

---

### [SECTION 5] PAIN POINT

```
Theme: Navy dark #1B2A6B
Decoration: Diamond dot pattern, bottom-left corner (white, 8% opacity)

Two column layout:

LEFT — Big stat visual:
  "3 in 5" — Manrope 800, white, ~110px
  Below: "graduates struggle to find jobs matching their degree —
  because companies want skills, not certificates."
  Source line (small, muted): "WEF Future of Jobs Report"

RIGHT — Copy block:
  Label pill (gold): "THE REALITY"
  H2 (white): "Your degree won't save you. Your skills will."
  Body (white, 70% opacity):
    "Companies in 2025 are hiring for AI fluency. Most college syllabuses
    haven't caught up. The gap between what employers want and what colleges
    teach has never been wider — and it's only getting worse."
  CTA: [btn-primary] "Don't get left behind → Apply Now"
```

---

### [SECTION 6] AI SKILLS ASSESSMENT BLOCK

```
Theme: Gold background #F5A623 (ONLY full-gold section on page)
Layout: Centered, full-width, generous padding

Label pill (navy bg, white text): "FREE · 2 MINUTES"
H2 (navy, Manrope 800): "Find your AI level. Get a personalised path."
Subtext (navy, 80%): "Answer 6 quick questions. We'll tell you exactly
  where you stand and what to learn next."

CTA: [btn-secondary large] "Start the Free Assessment →"
  → links to Tally/Google Form (URL: PLACEHOLDER_ASSESSMENT_URL)

Below button (small navy italic):
  "You'll receive your personalised report + course recommendation by email."
```

---

### [SECTION 7] SKILLS PYRAMID / APPROACH

```
Theme: White bg
Label pill (gold): "HOW WE TEACH"
H2 (navy): "We teach AI the way it should be learned — by doing."
Subtext: "80% practical. 20% theory. No MCQs. No exams. Your grade is your GitHub portfolio."

Three cards in a row (dark navy bg #1B2A6B, gold 1px border, border-radius 12px):

CARD 1 — Skills Pyramid:
  Title (gold, uppercase): "THE SKILLS PYRAMID"
  4 tiers from bottom to top with increasing size/opacity:
    KNOWLEDGE — You know AI exists. That's it.
    UNDERSTANDING — You use AI, but inconsistent results
    APPLICATION — You use AI confidently every day
    MASTERY — You build AI tools and teach others ← (gold, largest)

CARD 2 — Habits Pyramid:
  Title (gold, uppercase): "THE HABITS PYRAMID"
  4 tiers:
    AWARENESS — Tried it once, never again
    OCCASIONAL — Use AI sometimes
    INTEGRATED — AI is part of daily life
    ADVOCACY — Mentor and influence peers ← (gold, largest)

CARD 3 — Skills-Habits Matrix:
  Title (gold, uppercase): "WHERE DO YOU SIT?"
  Simple 2x2 grid, white lines:
    Top-right: "AI CHAMPION" (gold text)
    Top-left: "THE GUESSER"
    Bottom-right: "THE COLLECTOR"
    Bottom-left: "AI NEWCOMER"
  X-axis label: LOW SKILLS → HIGH SKILLS
  Y-axis label: LOW HABIT → HIGH HABIT

Below cards (centered, navy text link):
  "Where do you sit? → Take the free assessment" (scrolls to #assessment)
```

---

### [SECTION 8] WHAT YOU'LL BUILD (id="projects")

```
Theme: Ice Blue bg #C8D8F0
Label pill (gold): "REAL PROJECTS · REAL PORTFOLIO"
H2 (navy): "Here's what you'll actually build."
Subtext: "No multiple choice. No theory exams. Your grade is a live
  GitHub portfolio that employers can actually see."

6 project cards — 3 col grid (white bg, 3px navy top border, border-radius 8px, soft shadow):
Each card:
  - Phosphor icon (outline, navy, 32px)
  - Title (Manrope 600, navy)
  - 1 sentence description (14px, muted)

Projects:
  [Robot icon] AI Content Generator
    "Auto-creates social media posts from a topic brief using ChatGPT"
  [File icon] Resume Screener Bot
    "Reads a job description and scores your resume against it instantly"
  [Chart icon] WhatsApp Report Automation
    "Sends daily reports from a Google Sheet to WhatsApp automatically"
  [Image icon] AI Image Prompt Generator
    "Creates Midjourney/DALL-E prompts from a product description"
  [Globe icon] Personal AI Portfolio Site
    "A live website built with AI tools showcasing all your projects"
  [Phone icon] Social Caption Generator
    "Produces 5 caption variations from a single photo description"

Below cards (centered, italic, #6B7280, 14px):
  "Can't think of a project idea? Our mentors will help you scope one in your first office hours session."
```

---

### [SECTION 9] BETA / FOUNDING MEMBER

```
Theme: Navy dark #1B2A6B
Label pill (gold): "BATCH ZERO · EXCLUSIVE"
H2 (white): "You won't just be a student. You'll be a Founding Member."
Subtext (white, 70%):
  "The first 20 people to join DMA will shape everything — the curriculum,
  the community, the culture. Your feedback builds this academy."

Two column layout:

LEFT — Checklist:
  Heading (white, Manrope 600): "What Founding Members get:"
  List (gold ✅ checkmarks, white text):
    Founding Member number (e.g. "You are #7 of 20")
    Monday Starter Pack every week (Notion + Google Sheets)
    Daily 15-min AI streak task via WhatsApp
    Live leaderboard updated weekly
    Private WhatsApp group with direct mentor access
    Demo Day — public, recorded, industry panel
    GitHub portfolio + certificate of completion
    Behind-the-scenes access to DMA's build process
    Beta price: Free or ₹499 only

RIGHT — Founding Member Card (same as hero card, slightly larger):
  Dark card, gold border, centered
  "FOUNDING MEMBER" large white
  "#__ of 20" gold
  Animated number counter

Below card:
  [btn-primary large, centered] "Claim your founding spot →"
```

---

### [SECTION 10] COURSE OUTCOMES

```
Theme: White bg
Label pill (gold): "WHAT YOU'LL WALK AWAY WITH"
H2 (navy): "Skills that show up on your resume — and your GitHub."
Subtext: "6 weeks. Hands-on. Mentor-guided. No coding required."

Two column layout:

LEFT — Outcomes grid (2 col, Phosphor outline icons navy):
  🛠 Build real AI-powered tools from scratch
  💬 Write prompts that actually get results (DMA PACT framework)
  ⚙️ Automate repetitive tasks using Make.com and ChatGPT
  📁 Launch a live GitHub portfolio employers can see
  🎤 Present your work at a public Demo Day with an industry panel
  🤝 Get direct mentor access via WhatsApp and Office Hours

RIGHT — Pricing Card (white bg, navy 1.5px border, border-radius 12px, shadow):
  Top: Label pill (gold): "BETA BATCH PRICE"
  Price: "₹499" (Manrope 800, 52px, navy)
  Below: "or completely FREE*" (small, muted)
  Divider line
  Checklist (gold ✅):
    6-week bootcamp
    Daily streak tasks
    Mentor office hours
    Demo Day + industry panel
    GitHub portfolio
    Founding Member number
  Fine print: "*Free if you refer 2 friends to the waitlist"
  [btn-primary full-width] "APPLY NOW →"
  Below button: "Only 20 seats total" (small, red dot + muted text)
```

---

### [SECTION 11] WHY STUDENTS ARE JOINING

```
Theme: Ice Blue bg #C8D8F0
Label pill (gold): "WHY STUDENTS ARE JOINING"
H2 (navy): "What's pulling people to Batch Zero."

3 cards (white bg, soft shadow, border-radius 12px, 3px navy top border):
Each card:
  - Quote text (italic, navy, 16px)
  - Attribution: "— Early waitlist student" (small, muted)
  - Benefit tag (small pill, ice-blue bg, navy text) — e.g. "Real proof", "Backed by experts", "Founding identity"

Card 1:
  Quote: "I've done 3 online courses and have nothing to show for it. DMA is the
  first place that said — your grade is your GitHub. That got me."
  Benefit pill: "Real proof over paper certificates"

Card 2:
  Quote: "The fact that it's run by Digi Mabble — a company that actually builds
  AI products — makes it completely different from random course creators."
  Benefit pill: "Backed by people who build AI"

Card 3:
  Quote: "Being #7 of 20 means something. I'm not just another student in a batch
  of 500. That identity matters."
  Benefit pill: "Founding Member identity"

Note in code comment: <!-- Replace these with real student quotes after Beta Week 2 -->
```

---

### [SECTION 12] MENTOR CREDIBILITY

```
Theme: White bg
Label pill (gold): "YOUR MENTORS"
H2 (navy): "Taught by practitioners, not professors."
Subtext: "Our mentors are the Digi Mabble team — people who use AI daily on live
  client projects across healthcare, banking, e-commerce and more."

Mentor cards (3 col, white bg, light border, border-radius 12px):
  Each card:
    - Round photo placeholder (80px, navy ring border, #C8D8F0 bg with person icon)
    - Name (Manrope 700, navy)
    - Role (Manrope 500, muted)
    - Credibility line (14px, navy)
    - LinkedIn icon (Phosphor, navy)

Note in code: <!-- Replace placeholder avatars with real mentor photos -->

Credibility strip (full-width, white bg, navy top + bottom border 1px, centered text, muted):
  "Digi Mabble · AI & IT Solutions · 12+ Industries · 8+ AI Products Deployed · Real Client Work"
```

---

### [SECTION 13] FAQ

```
Theme: Navy dark #1B2A6B
Label pill (gold): "GOT QUESTIONS?"
H2: <span style="color:#F5A623">FREQUENTLY</span> ASKED QUESTIONS (white Manrope 800)
Subtext (white, 70%): "Get answers to common questions about the course."

8 FAQ accordion items:
Each item:
  - Full-width row, slightly lighter navy bg (#1E3070 or rgba(255,255,255,0.05))
  - Padding: 20px 28px
  - Border-radius: 6px
  - White monospace-feel bold question text (Manrope 700, 15px)
  - Gold "+" on right (rotates to "×" when open, CSS transition)
  - Answer: white, 70% opacity, 15px, appears on click (JS toggle)
  - Active state: gold 3px left border

Questions and answers:
1. Is this course really free?
   "Beta batch is free or ₹499 — decided on application. The small fee filters for
   serious students. After beta, pricing increases significantly."

2. Do I need coding experience?
   "Absolutely not. DMA teaches no-code AI tools only. If you can use a smartphone
   and Google Docs, you're ready to start."

3. What tools will I learn?
   "ChatGPT, Gemini, Perplexity, Make.com, Canva AI, Notion AI — and more. All are
   free or have free student tiers."

4. How much time per day?
   "15–20 minutes for daily streak tasks + 1–2 hours per week for live sessions and
   project work. Designed around a college schedule."

5. Will I get a certificate?
   "Better than a certificate — you'll get a live GitHub portfolio, a Demo Day
   recording and your Founding Member status. Employers want proof of work, not paper."

6. What happens at Demo Day?
   "At 6 weeks, every student presents their AI project live — publicly recorded,
   with an industry panel. It goes on LinkedIn and GitHub."

7. What if I miss a live session?
   "All sessions are recorded and available in the student group. The Monday Starter
   Pack keeps you on track regardless."

8. I'm a school student. Can I join?
   "Yes — if you're 15+ and motivated. No technical background required whatsoever."
```

---

### [SECTION 14] BLOG / FREE RESOURCES

```
Theme: White bg
Label pill (gold): "FREE RESOURCES"
H2 (navy): "Start learning before you even enroll."

3 article preview cards (white bg, 3px ice-blue top border, border-radius 8px, light shadow):
Each card:
  - Category tag (small, navy bg, white text pill)
  - Article title (Manrope 600, navy)
  - 1 line description (14px, muted)
  - "Read →" link (navy, bold)

Articles:
  [AI Tools] "5 AI tools every student should know right now"
  [Career] "How to add AI skills to your resume (with examples)"
  [Beginner] "The AI learning roadmap — where to start from zero"

CTA (centered, navy text link, 16px bold):
  "Read all articles →"
```

---

### [SECTION 15] FINAL CTA

```
Theme: Navy dark #1B2A6B
Decoration: Diamond dot pattern FULL background (white, 10% opacity)

Layout: Centered

H2 (white, Manrope 800, large):
  "Only 20 spots."
  "Beta closes soon."

Subtext (white, 70%):
  "Once Batch Zero is full, the next batch will launch at full price.
  This is the only window to get in at zero cost."

Buttons (centered, gap 16px, stacked on mobile):
  [btn-primary large] "Apply for Beta Batch →"
  [btn-outline] "Join WhatsApp Community"

Below buttons:
  🔴 [X] seats remaining  ← small, white, 14px
  (manually update X or connect to counter)
```

---

### [SECTION 16] FOOTER

```
Theme: Deep navy bg #0D1B4B

Layout: 4-column grid desktop, stacked mobile, padding 60px 0 32px

COL 1 — Brand:
  DMA logo (white text, gold ACADEMY)
  Tagline: "AI skills for the next generation of builders." (white, 14px, muted)
  Newsletter block:
    "Get weekly AI tips" label (white, Manrope 600)
    Input (dark bg, white border, white placeholder text) + [Subscribe] btn-primary

COL 2 — Navigate (white muted heading, white links):
  About Us · Our Approach · Beta Batch · Blog · Contact

COL 3 — Community:
  WhatsApp Community · Instagram · LinkedIn · YouTube

COL 4 — Contact:
  academy@digimabble.com (white)
  WhatsApp: [number] (white)
  Social icons row: Instagram · LinkedIn · YouTube · WhatsApp (Phosphor icons, white, 20px)

Bottom bar (border-top 1px rgba(255,255,255,0.1), padding-top 24px, flex row):
  Left: "© 2026 Digi Mabble Academy. A Digi Mabble initiative."
  Right: "Privacy Policy" link
  Both: white, 13px, muted opacity
```

---

## BOOKING MODAL

```
Triggered by: ALL "Claim Your Founding Spot" / "Apply Now" / "Apply for Beta Batch" buttons
Overlay: rgba(13,27,75,0.92) full screen
Modal card: white bg, border-radius 16px, max-width 540px, centered, padding 48px

Header:
  Label pill (gold): "FOUNDING MEMBER APPLICATION"
  H3 (navy): "Claim your spot in Batch Zero"
  Subtext (muted): "Takes 2 minutes. We'll confirm your spot via WhatsApp."

Form fields (all required except last):
  Full Name (text input)
  Email Address (email input)
  WhatsApp Number (tel input)
  College Name (text input)
  Current Year of Study (select: School · College 1st/2nd · College 3rd/Final · Graduate)
  What do you want AI for? (select: Better job/placement · Freelancing · Own project · Curious)
  How did you hear about us? (select: Instagram · WhatsApp · Friend · Google · Other)
  Anything else? (textarea, optional, 3 rows)

Submit button: [btn-primary full-width] "Submit Application →"
Below: "Only [X] seats remaining" — small, muted

On submit: POST to Google Forms / Tally embed URL
Close: × button top-right OR click overlay

Note in code: <!-- Connect form action to: PLACEHOLDER_FORM_URL -->
```

---

## JAVASCRIPT REQUIREMENTS

```javascript
// 1. Sticky nav — add .scrolled class (white bg + shadow) after 50px scroll
// 2. Hamburger menu — toggle mobile nav overlay
// 3. Smooth scroll — all anchor links (#projects, #assessment etc.)
// 4. FAQ accordion — toggle answer visibility + rotate + icon
// 5. Modal — open on CTA clicks, close on × or overlay click, trap focus
// 6. Stats counter — animate numbers on scroll into view (IntersectionObserver)
// 7. Section fade-in — elements fade up as they enter viewport (IntersectionObserver)
// 8. Founding Member counter — animate #__ up from 0 to placeholder number (e.g. 7)
```

---

## PLACEHOLDER VALUES TO REPLACE BEFORE LAUNCH

| Placeholder | Replace With | Where |
|---|---|---|
| `PLACEHOLDER_ASSESSMENT_URL` | Tally or Google Form URL | Section 6 CTA |
| `PLACEHOLDER_FORM_URL` | Application form action URL | Modal form |
| `[X] seats remaining` | Real number (manual or live) | Section 15, Modal |
| `#__ of 20` | Starting number (e.g. 7) | Hero card, Section 9 |
| `[Your Name Here]` | Remove / leave as placeholder | Hero card |
| `academy@digimabble.com` | Confirm email is live | Footer |
| `WhatsApp: [number]` | Real WhatsApp Business number | Footer, Nav |
| Mentor photo placeholders | Real mentor photos | Section 12 |
| Blog article links | Real blog URLs | Section 14 |

---

## QUALITY CHECKLIST BEFORE DELIVERING

- [ ] Page loads in < 3 seconds (no heavy assets)
- [ ] Mobile layout tested at 375px and 768px
- [ ] All CTAs open modal or scroll correctly
- [ ] FAQ accordion opens/closes smoothly
- [ ] Gold is used maximum 5 times on page
- [ ] No "India" or "Indian" anywhere in copy
- [ ] No testimonials with invented names
- [ ] No star ratings or fake review scores
- [ ] No fixed curriculum week-by-week (outcomes-based only)
- [ ] All images have alt text
- [ ] Font loads correctly (Manrope)
- [ ] Nav is sticky and functional on mobile
- [ ] Modal opens and closes correctly
- [ ] All placeholder URLs are clearly marked in comments

---

*Build prompt for Antigravity IDE — Digi Mabble Academy Landing Page*
*PRD Reference: DMA_PRD.md v2.0*
*Design references: ai-academy.com + digimabble.com + digimabbleai.com*
