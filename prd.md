# AI Agent Prompt Engineering Document
## KSRTC-SWIFT Redesign — 6 Interactive Concept Pages

---

## 🎯 Executive Overview

This document provides **6 detailed PRDs (Product Requirement Documents)**, each containing a **single, self-contained prompt** for an AI agent. 

Each prompt generates a **fully interactive HTML page** that showcases one complete design concept for the KSRTC-SWIFT homepage. The pages are designed as **interactive prototypes** where clicking on an idea card opens that specific design.

---

# PROMPT 1: "THE JOURNEY PLANNER" 
## *Route-First, Map-Integrated Design*

```markdown
You are a senior UI/UX engineer specializing in transportation interfaces.

Create a single, self-contained HTML page that serves as an interactive design showcase for KSRTC-SWIFT. This page must display 6 different homepage design concepts as clickable cards. When a user clicks any concept card, the page transitions to show that specific design in full detail.

## CONCEPT 1: "The Journey Planner"

### Design Philosophy
- Route-first experience with integrated map visualization
- Google Maps-inspired layout with search prominence
- Visual journey planning before booking

### Visual Specifications

**Color Palette:**
- Primary: Deep Teal `#0A4A4A`
- Secondary: Warm Gold `#C8943E`
- Background: Cream `#FDF8F0`
- Accent: Soft Coral `#E87A5A`
- Text: Dark Navy `#1A2A3A`
- Success: Forest Green `#2A7A4A`

**Typography:**
- Headlines: 'Playfair Display', serif (old-world charm)
- Body: 'Inter', sans-serif (modern clarity)
- Labels: 'JetBrains Mono', monospace (for data points)

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
| [Logo] KSRTC SWIFT                        [Login] [Menu]         |
+------------------------------------------------------------------+
|                                                                   |
|  "Where are you heading today?"                                   |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |  FROM: [Trivandrum______▼]   TO: [Kochi_______▼]          |  |
|  |  DATE: [Dec 15, 2026 ▼]      PASSENGERS: [2 ▼]            |  |
|  |  TRIP TYPE: [○ One Way] [● Round Trip]                    |  |
|  |  [ 🚌 FIND MY BUS ]   [ 🗺️ EXPLORE ROUTE ]              |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +----------------------------------+----------------------------+ |
|  |      ROUTE MAP                   |    POPULAR ROUTES         | |
|  |                                  |    From Your City         | |
|  |  [Interactive SVG Map of         |    ┌──────────────────┐  | |
|  |   Kerala with glowing            |    │ Kochi → Trivandrum│  | |
|  |   route lines]                   |    │ 6:00 AM | ₹800    │  | |
|  |                                  |    └──────────────────┘  | |
|  |  ● Trivandrum                    |    ┌──────────────────┐  | |
|  |   ● Kollam                       |    │ Kochi → Calicut  │  | |
|  |    ● Alleppey                    |    │ 8:30 AM | ₹950   │  | |
|  |     ● Kochi                      |    └──────────────────┘  | |
|  |      ● Thrissur                  |    ┌──────────────────┐  | |
|  |       ● Calicut                  │    │ Kochi → Munnar   │  | |
|  |                                  │    │ 10:00 AM | ₹500  │  | |
|  |  [Zoom In] [Zoom Out] [Fullscreen]│    └──────────────────┘  | |
|  +----------------------------------+----------------------------+ |
|                                                                   |
|  +--- QUICK LINKS ---------------------------------------------+ |
|  | [🎫 Book Ticket] [📊 Status] [🔄 Cancel] [🚌 Charter]     | |
|  | [📸 Gallery] [📱 App Download]                              | |
|  +------------------------------------------------------------+ |
|                                                                   |
|  "Your journey, beautifully visualized."                         |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Search Widget:**
   - Autocomplete for city names (use static list: Trivandrum, Kochi, Calicut, Munnar, Alleppey, Thrissur, Kollam, Kasaragod, Wayanad)
   - Date picker with 3-month view
   - Passenger counter with +/− buttons
   - Round trip toggle that shows return date field

2. **Route Map:**
   - SVG map of Kerala with key cities as interactive dots
   - Hover on city shows name and upcoming buses
   - Click city opens route search pre-filled
   - Animated route lines when a route is selected

3. **Popular Routes Cards:**
   - 3-4 route cards with departure time, fare, and "Select" button
   - Hover effect: card lifts with shadow
   - Clicking "Select" auto-fills the search widget

4. **Quick Links Bar:**
   - 6 icon+text buttons in a horizontal row
   - Each opens relevant section (or shows tooltip for MVP)

5. **Charter Discovery (Critical):**
   - Small pill button: "🚌 Need a private bus? Ask us"
   - When clicked, opens a mini-modal with charter form
   - Form includes: pickup/drop, date, time, vehicle type, passenger count

6. **Responsive Behavior:**
   - Desktop: side-by-side map and routes
   - Tablet: map on top, routes below
   - Mobile: search widget first, then popular routes, map as expandable

### Micro-Interactions:

- Search bar expands on focus with smooth animation (300ms ease)
- Route lines on map animate from origin to destination when a route is selected
- Cards have subtle hover lift (transform: translateY(-4px), shadow increase)
- Buttons have ripple effect on click
- Loading skeleton appears when searching
- Success toast notification on booking action

### Accessibility Requirements:

- All interactive elements keyboard-navigable (Tab order)
- ARIA labels on all form inputs
- Focus indicators: 3px blue ring
- Alt text on all map markers
- Screen reader announcements for route selection
- High contrast mode support

### Technical Implementation:

- Use vanilla JavaScript (no frameworks)
- CSS Grid for layout, CSS Flexbox for components
- SVG for map (inline, not image)
- Fonts: Google Fonts (Playfair Display, Inter, JetBrains Mono)
- No external libraries except fonts
- All animations use CSS transitions and keyframes
- Font size: 16px base, with rem units

### Deliverable:

A complete HTML page where:
1. The main page shows 6 concept cards (like a gallery)
2. Clicking "Concept 1: The Journey Planner" card opens this design
3. The design is fully interactive with the elements above
4. All interactions work (hover, click, focus, keyboard)
5. The page is responsive (desktop, tablet, mobile)

### Bonus Points:

- Add a dark mode toggle
- Include bus icons that animate along route lines
- Show real-time bus positions (mock data)
- Add a "popular searches" section below the map

### Success Metrics to Show in UI:

- Display a small badge: "⭐ 78% faster search time"
- Show "🚌 2,500+ daily trips" counter
- Show "👥 4.8★ user rating" with stars

### What NOT to Include:

- No analytics or tracking scripts
- No external API calls (use mock data)
- No payment processing (UI only)
- No actual backend connectivity

### Testing Checklist:

- [ ] Search autocomplete shows cities
- [ ] Date picker opens and allows selection
- [ ] Map cities are clickable
- [ ] Route cards populate search widget
- [ ] Quick links show tooltips
- [ ] Charter modal opens and closes
- [ ] Dark mode toggles properly
- [ ] Keyboard navigation works end-to-end
- [ ] Mobile layout stacks correctly
- [ ] All animations smooth (60fps)

### Delivery Format:

A single HTML file with embedded CSS and JavaScript, self-contained with all assets (fonts via CDN, SVG inline). The page should be visually polished, production-ready, and demonstrate the design concept convincingly enough for stakeholder approval.

---

**Important:** This is CONCEPT 1 of 6. The page must have navigation between all 6 concepts. When user clicks "Concept 1" card, this design opens. Other concept cards will link to their respective designs (which will be created in separate prompts).

**File Naming:** `ksrtc-concept1-journey-planner.html`

Start the HTML with `<!DOCTYPE html>` and include a navigation header that shows all 6 concept names with active state highlighting.
```

---

# PROMPT 2: "THE TRUSTED COMPANION"
## *Status & Confidence-First Design*

```markdown
You are a senior UI/UX engineer specializing in trust-building interfaces for transportation.

Create a single, self-contained HTML page that showcases CONCEPT 2: "The Trusted Companion" design for KSRTC-SWIFT. This page must be part of a 6-concept showcase where clicking the concept 2 card reveals this design.

## CONCEPT 2: "The Trusted Companion"

### Design Philosophy
- Status and confidence-first experience
- Designed for anxious travelers seeking certainty
- Dashboard layout with real-time information prominence
- "Truth at a glance" approach

### Visual Specifications

**Color Palette:**
- Primary: Navy Blue `#1A2A4A` (trustworthy, stable)
- Secondary: Teal Accent `#1A7A7A` (reassuring, calm)
- Background: Off-White `#F5F6F8` (clean, professional)
- Warning: Amber `#E8A83A` (attention without alarm)
- Danger: Muted Red `#C84A4A` (clear but not jarring)
- Success: Teal Green `#2A9A7A` (positive confirmation)
- Text: Dark Grey `#2A2A3A`

**Typography:**
- Headlines: 'Lora', serif (trustworthy, established)
- Body: 'Open Sans', sans-serif (readable, clean)
- Data: 'Source Code Pro', monospace (clear numbers)

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
| [Logo] KSRTC SWIFT                    [🔔 3] [👤 Rajesh] [☰]   |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------------------------------------------------+  |
|  |  ⚡ Quick Status Check                                     |  |
|  |  Enter PNR: [KSRTC123456789] [🔍 Check Now]               |  |
|  |  Or scan your ticket QR code 📷                           |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |  📊 YOUR DASHBOARD                                         |  |
|  |  ┌──────────┬──────────┬──────────┬──────────┐          |  |
|  |  │  TODAY'S │  DELAY   │  CANCELLED│ REFUNDS  │          |  |
|  |  │  TRIPS   │  ALERTS  │  BUSES   │ PENDING  │          |  |
|  |  │  3       │  1       │  0       │  ₹420    │          |  |
|  |  └──────────┴──────────┴──────────┴──────────┘          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- UPCOMING TRIPS ------------------------------------------+  |
|  |  🟢 Today, 6:00 PM  │ Trivandrum → Kochi                  |  |
|  |  Seat: A12 │ Boarding: Central Station                    |  |
|  |  [View Details] [Cancel] [Share]                          |  |
|  |  ────────────────────────────────────────────────────────── |  |
|  |  🟡 Today, 8:30 PM  │ Kochi → Calicut                    |  |
|  |  Seat: B04 │ Boarding: Vytilla Hub                       |  |
|  |  [View Details] [Cancel] [Share]                          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- REAL-TIME ALERTS ----------------------------------------+  |
|  |  📢 Light rain expected in Alappuzha. Carry umbrella.      |  |
|  |  ⏰ Your bus to Kochi is running 15 minutes late.          |  |
|  |  ✅ Your refund of ₹420 has been processed.               |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- QUICK ACTIONS -------------------------------------------+  |
|  | [📞 Call Support] [💬 WhatsApp] [📧 Email]                |  |
|  | [🔄 Rebook Last Trip] [📊 Trip History]                    |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  💡 "Your journey, always in sight."                            |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Status Check Widget (Hero):**
   - Input field with clear placeholder: "Enter your 12-digit PNR"
   - "Check Now" button with loading state
   - QR camera icon (opens camera mockup on click)
   - Auto-scan simulation: when camera opens, show a mock QR scan animation
   - Result display: shows bus, time, seat, status with color coding

2. **Dashboard Metrics Cards:**
   - 4 metric cards with animated counters
   - Hover reveals additional info in tooltip
   - Clicking opens detailed view
   - Each card has icon matching its category

3. **Upcoming Trips List:**
   - Each trip as a card with status indicator (colored dot)
   - Expandable: click to see full itinerary
   - Cancel button with confirmation modal
   - Share button (copies trip details to clipboard)
   - Timeline view: shows journey progress for in-progress trips

4. **Real-Time Alerts:**
   - Auto-refreshing notification feed (mock updates every 30s)
   - Color-coded by severity (info, warning, success)
   - Dismissible with slide-out animation
   - Location-aware (shows alerts based on user's city)
   - Notification counter on header icon

5. **Quick Actions:**
   - 5 large touch-target buttons
   - Each opens respective modal/action
   - Phone icon triggers: "Call support" with number displayed
   - WhatsApp icon opens: "Chat with us on WhatsApp" with link

6. **Cancellation Flow (Critical):**
   - From any trip card, "Cancel" button opens modal
   - Modal shows: "💰 You'll get ₹320 back if you cancel now"
   - Refund slider showing amount based on time
   - "Confirm Cancellation" with OTP verification step
   - Post-cancellation: show "Your ticket has been cancelled. Refund initiated."

### Micro-Interactions:

- PNR input shows validation as user types (green check when valid)
- Status check button has pulse animation while loading
- Metric cards count up to their numbers on page load
- Alert items slide in from right, auto-dismiss after 10s
- Trip cards have expand/collapse with smooth height transition
- QR scanner shows a scanning line animation
- Refund slider updates amount in real-time
- Confirmation modal has fade-in with backdrop blur

### Accessibility Requirements:

- PNR input has `aria-label="PNR Number"`
- Status indicators have `aria-live="polite"`
- Alert area has `role="alert"` and `aria-atomic="true"`
- All modals trap focus
- Keyboard shortcuts: Ctrl+1 (status check), Ctrl+2 (dashboard), Ctrl+3 (support)
- High contrast mode support

### Technical Implementation:

- Vanilla JavaScript with ES6+
- CSS Grid for dashboard, Flexbox for components
- CSS custom properties for theming
- LocalStorage for mock trip data persistence
- Web Speech API for reading out status (optional)
- No external libraries
- Google Fonts: Lora, Open Sans, Source Code Pro

### Deliverable:

Complete HTML page where:
1. The main page shows 6 concept cards
2. Clicking "Concept 2: The Trusted Companion" opens this design
3. All dashboard elements are interactive
4. Status check works with mock data
5. Trip cancellation flow works end-to-end
6. Alerts auto-update
7. Responsive across all devices

### Success Metrics to Show in UI:

- Badge: "⏱️ 40% faster status checks"
- Badge: "📞 60% fewer support calls"
- Badge: "⭐ 4.7★ user trust rating"
- Counter: "🚌 1,247 trips tracked today"

### What to Include (Critical):

- Full cancellation flow with visual refund calculator
- PNR status check with mock results
- Trip sharing to clipboard
- Support contact with clickable phone number
- QR scanner mockup with camera permission simulation

### Testing Checklist:

- [ ] PNR validation works (12 digits, alphanumeric)
- [ ] Status check shows mock result
- [ ] QR scanner opens and simulates scan
- [ ] Metric cards animate on load
- [ ] Trip cards expand/collapse
- [ ] Cancellation modal shows refund amount
- [ ] Refund slider updates correctly
- [ ] Alerts auto-refresh every 30s
- [ ] Alert counter updates
- [ ] Dark mode toggle works
- [ ] Keyboard navigation complete
- [ ] Mobile responsive

### Delivery Format:

Single HTML file with embedded CSS and JavaScript. All assets self-contained. Production-quality visual polish.

**File Naming:** `ksrtc-concept2-trusted-companion.html`

Start with `<!DOCTYPE html>` and include concept navigation header.
```

---

# PROMPT 3: "THE KERALA DARSHAN"
## *Tourism & Discovery-First Design*

```markdown
You are a senior UI/UX engineer specializing in tourism and travel discovery interfaces.

Create a single, self-contained HTML page that showcases CONCEPT 3: "The Kerala Darshan" design for KSRTC-SWIFT. This page must be part of a 6-concept showcase where clicking the concept 3 card reveals this design.

## CONCEPT 3: "The Kerala Darshan"

### Design Philosophy
- Tourism and discovery-first experience
- Designed for tourists exploring Kerala
- Visual, immersive, and culturally rich
- "Discover Kerala, one bus at a time"

### Visual Specifications

**Color Palette:**
- Primary: Sunset Orange `#E8844A` (warm, inviting)
- Secondary: Coconut Green `#4A8C4A` (fresh, natural)
- Background: Sand `#E8DDC0` (earthy, organic)
- Accent: Turquoise `#3AA8B8` (water, backwaters)
- Text: Deep Brown `#3A2A1A` (warm, readable)
- Light: Cream `#FDF8F0`
- Gold: `#D4A84A` (cultural richness)

**Typography:**
- Headlines: 'Cormorant Garamond', serif (elegant, cultural)
- Body: 'Nunito', sans-serif (friendly, approachable)
- Accent: 'Caveat', handwriting (for quotes and highlights)

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
| ☀️ KSRTC SWIFT                          [🌍 English▼] [☰]      |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------------------------------------------------+  |
|  |  "Discover Kerala, one bus at a time"                     |  |
|  |                                                           |  |
|  |  ┌─────────────────────────────────────────────────────┐  |  |
|  |  │  🌴 What do you want to experience?                │  |  |
|  |  │  [⛰️ Hills] [🏖️ Beaches] [🌊 Backwaters]        │  |  |
|  |  │  [🛕 Temples] [🏙️ Cities] [🎪 Festivals]        │  |  |
|  |  │  [✨ Surprise Me]                                  │  |  |
|  |  └─────────────────────────────────────────────────────┘  |  |
|  |                                                           |  |
|  |  ┌───────────────────┐  ┌─────────────────────────────┐  |  |
|  |  │  🏞️ MUNNAR       │  │  Calicut → Bangalore        │  |  |
|  |  │  Hill Station     │  │  ⏰ 8:30 AM    💰 ₹950     │  |  |
|  |  │  Famous for tea   │  │  🏆 4.8★        [Book Now] │  |  |
|  |  │  plantations      │  └─────────────────────────────┘  |  |
|  |  │  [View Routes]    │  ┌─────────────────────────────┐  |  |
|  |  └───────────────────┘  │  🌊 ALLEPPEY               │  |  |
|  |                         │  Backwater Paradise          │  |  |
|  |  ┌───────────────────┐  │  [View Routes]              │  |  |
|  |  │  🎉 ONAM FESTIVAL │  └─────────────────────────────┘  |  |
|  |  │  Aug 20 - Sep 1   │  ┌─────────────────────────────┐  |  |
|  |  │  Special buses    │  │  🏖️ VARKALA               │  |  |
|  |  │  Available!       │  │  Beach Getaway              │  |  |
|  |  │  [Book Now]       │  │  [View Routes]              │  |  |
|  |  └───────────────────┘  └─────────────────────────────┘  |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- EXPERIENCE YOUR JOURNEY ---------------------------------+  |
|  |  [🎫 Tickets] [🚌 Charter] [🍽️ Rail Rolls] [📸 Gallery] |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  💡 "Every journey tells a story."                               |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Experience Categories:**
   - 6 visual cards with icons for different travel types
   - Hover: background image changes to destination photo
   - Click: filters bus results by that category
   - Each category has a unique color gradient
   - "Surprise Me" button: randomizes a route with 50%+ empty seats

2. **Destination Discovery Cards:**
   - 4-6 destination cards in a grid
   - Each has: hero image, name, tagline, rating, route count
   - Click: opens a modal with bus options
   - "View Routes" button: scrolls to route list
   - Card hover: image zoom effect, overlay darkens

3. **Cultural Calendar:**
   - Horizontal scroll of upcoming festivals
   - Shows festival name, date, location
   - "Special buses" badge for routes with extra services
   - Click: see all buses available for that festival period
   - Integration with search: "Book for Onam" button

4. **Interactive Kerala Map:**
   - SVG map with major tourist destinations highlighted
   - Heatmap overlay showing popular tourist routes
   - Click destination: shows its experience card
   - Animated bus icons moving between cities

5. **Meals on Wheels (Rail Rolls Integration):**
   - Dedicated tab showing food ordering
   - Menu preview with 3-4 items
   - "Order Now" button (opens Rail Rolls in new tab)
   - Location-based suggestions: "Food available at Calicut halt"

6. **Cultural Tips Widget:**
   - "Travel like a local" section
   - Language tips: 5 basic Malayalam phrases with audio pronunciation (mock)
   - "What to pack" based on destination
   - Local cuisine suggestions with images

### Micro-Interactions:

- Category cards have hover animation (image zoom + gradient shift)
- Destination cards: 3D tilt on mouse move
- Festival calendar: auto-scroll, pause on hover
- Map: glowing route lines, pulsing destination markers
- Cultural tips: expandable accordion
- Search transitions: smooth fade between states
- Image lazy loading with blur-up effect

### Accessibility Requirements:

- Category cards have `role="button"` and proper focus states
- Image alt text describes the destination
- Festival dates have `aria-label`
- Map is keyboard navigable with proper landmarks
- Audio pronunciation has play/pause controls
- High contrast mode support

### Technical Implementation:

- Vanilla JavaScript with ES6+
- CSS animations and transitions
- Inline SVG for map
- Web Audio API for pronunciation (mock)
- LocalStorage for favorite destinations
- Google Fonts: Cormorant Garamond, Nunito, Caveat
- No external libraries except fonts

### Deliverable:

Complete HTML page where:
1. The main page shows 6 concept cards
2. Clicking "Concept 3: The Kerala Darshan" opens this design
3. All tourism-focused elements are interactive
4. Category filtering works with mock data
5. Map is interactive and shows destinations
6. Cultural calendar shows events
7. Responsive across all devices

### Success Metrics to Show in UI:

- Badge: "🌍 60% increase in tourist bookings"
- Badge: "⭐ 4.6★ cultural experience rating"
- Counter: "🏝️ 15+ destinations explored"
- Badge: "🎭 50+ festivals covered"

### What to Include (Critical):

- Experience-based search filter
- Destination cards with route links
- Festival calendar with bus availability
- Kerala map with tourist spots
- Cultural tips section
- Meals on Wheels integration tab

### Testing Checklist:

- [ ] Category cards show correct destinations
- [ ] "Surprise Me" shows random route
- [ ] Destination cards open bus options
- [ ] Festival calendar scrolls and shows events
- [ ] Map highlights destinations on click
- [ ] Cultural tips expand/collapse
- [ ] Meals on Wheels shows menu preview
- [ ] Audio pronunciation plays
- [ ] Dark mode toggle works
- [ ] Mobile responsive

### Delivery Format:

Single HTML file with embedded CSS and JavaScript. All assets self-contained (use SVG icons, not Font Awesome). Production-quality visual polish.

**File Naming:** `ksrtc-concept3-kerala-darshan.html`

Start with `<!DOCTYPE html>` and include concept navigation header.
```

---

# PROMPT 4: "THE POWER USER"
## *Corporate & Frequent Traveler Design*

```markdown
You are a senior UI/UX engineer specializing in enterprise and power-user interfaces.

Create a single, self-contained HTML page that showcases CONCEPT 4: "The Power User" design for KSRTC-SWIFT. This page must be part of a 6-concept showcase where clicking the concept 4 card reveals this design.

## CONCEPT 4: "The Power User"

### Design Philosophy
- Efficiency and analytics-first experience
- Designed for corporate travelers and frequent users
- Dashboard with personalization and data richness
- "Travel smarter, not harder"

### Visual Specifications

**Color Palette:**
- Background: Dark `#0A0A0A` (default dark mode)
- Primary: Mint Green `#00C8A8` (energy, action)
- Secondary: Deep Purple `#4A2A6A` (premium, sophisticated)
- Accent: Electric Blue `#0088FF` (data visualization)
- Text: White `#FFFFFF` (readability on dark)
- Muted: Grey `#6A6A7A`
- Success: Bright Green `#00E88A`
- Warning: Gold `#E8B83A`

**Typography:**
- Headlines: 'Inter', sans-serif (ultra-clean)
- Body: 'Inter', sans-serif
- Data: 'JetBrains Mono', monospace (for numbers)
- Labels: 'Inter', semibold

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
| ⚡ KSRTC SWIFT                          [🔔] [👤 Rajesh] [⚙️]   |
+------------------------------------------------------------------+
|                                                                   |
|  Welcome back, Rajesh! You've saved ₹1,200 this month.           |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |  📊 QUICK STATS                                           |  |
|  |  ┌─────────┬─────────┬─────────┬─────────┬─────────┐    |  |
|  |  │ TRIPS   │ KM      │ SAVINGS │ POINTS  │ RATING  │    |  |
|  |  │ THIS    │ TRAVELED│ THIS    │         │ 4.8★    │    |  |
|  |  │ MONTH   │ 2,340   │ MONTH   │ 2,340   │         │    |  |
|  |  │ 12      │         │ ₹1,200  │         │         │    |  |
|  |  └─────────┴─────────┴─────────┴─────────┴─────────┘    |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- UPCOMING TRIPS (Next 7 Days) -----------------------------+  |
|  |  ┌───────────────────────────────────────────────────────┐  |  |
|  |  │ 🟢 Today  │ Trivandrum → Kochi │ 2 seats │ ₹1,200  │  |  |
|  |  │   6:00 PM │ GST: ABC Corp     │ Window  │ [Menu]   │  |  |
|  |  ├───────────────────────────────────────────────────────┤  |  |
|  |  │ 🟡 Tue 18 │ Kochi → Calicut   │ 1 seat  │ ₹540    │  |  |
|  |  │   8:30 AM │ Personal         │ Aisle   │ [Menu]   │  |  |
|  |  ├───────────────────────────────────────────────────────┤  |  |
|  |  │ 🔴 Fri 22 │ Calicut → Bangalore│ 6 seats │ ₹3,400  │  |  |
|  |  │   6:00 AM │ GST: XYZ Ltd     │ Mixed   │ [Menu]   │  |  |
|  |  └───────────────────────────────────────────────────────┘  |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- QUICK ACTIONS -------------------------------------------+  |
|  | [🔄 Rebook Last] [📊 Analytics] [📋 Expense Report]        |  |
|  | [👥 Group Booking] [🚌 Charter] [💳 GST Invoice]          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- ANALYTICS SNEAK PEEK ------------------------------------+  |
|  |  📈 Your travel patterns this quarter                       |  |
|  |  [Bar Chart: Monthly trips] [Pie Chart: Route distribution] |  |
|  |  🌿 Carbon saved: 120kg CO2 (vs driving)                    |  |
|  |  [View Full Analytics →]                                   |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Welcome Header with Personalization:**
   - User name display with greeting
   - Savings counter (animated)
   - Quick status: "3 upcoming trips this week"
   - Profile avatar with online indicator

2. **Quick Stats Dashboard:**
   - 5 metric cards with real-time counters
   - Each card has icon, number, label, and trend indicator (↑/↓)
   - Hover shows detailed breakdown
   - Click opens relevant analytics section

3. **Upcoming Trips List:**
   - Color-coded by urgency (green=soon, yellow=today, red=this week)
   - Each trip shows: time, route, seats, fare, booking type (GST/Personal)
   - Menu button (3 dots) opens: Details, Change, Cancel, Share
   - GST badge visible for corporate bookings
   - Quick rebook option from past trips

4. **Group & Corporate Booking:**
   - "Group Booking" button opens modal with:
     - Number of passengers (up to 50)
     - GST auto-fill from profile
     - Department selector (for corporate users)
     - "Auto-approve" toggle for authorized users
   - Shows group discount calculator in real-time
   - Bulk seat selection interface

5. **Advanced Analytics:**
   - Interactive bar chart (monthly trip count)
   - Pie chart (route distribution)
   - Carbon savings counter
   - Export options: PDF, CSV, Email
   - Date range filter

6. **GST Invoice Management:**
   - "GST Invoice" button opens modal
   - Shows all trips with GST flag
   - Bulk invoice generation option
   - Download PDF mockup
   - Company details editor

7. **Charter for Business:**
   - Dedicated "Charter" tab with:
     - Pre-saved pickup/drop locations
     - Recurring charter option: "Every Friday, 6 PM"
     - Staff count selector
     - "Chat with charter team" button
     - Estimated pricing calculator

### Micro-Interactions:

- Stats cards count up on load with number animation
- Trip rows expand on click with smooth height transition
- Chart bars animate to their values
- Quick action buttons: glow on hover, click ripple
- GST badge shows company name on hover
- Dark mode toggle with smooth transition
- Data table sortable columns (click header to sort)
- Loading skeleton for analytics section

### Accessibility Requirements:

- Data tables have proper headers (`th`)
- Charts have ARIA labels and data table fallbacks
- All interactive elements keyboard-navigable
- Focus rings on all focusable elements
- ARIA landmarks for dashboard sections
- High contrast mode support

### Technical Implementation:

- Vanilla JavaScript with ES6+
- CSS Grid and Flexbox
- CSS custom properties for theming
- Canvas/Chart.js mock (or pure CSS charts)
- LocalStorage for user preferences
- Google Fonts: Inter, JetBrains Mono
- No external libraries except fonts

### Deliverable:

Complete HTML page where:
1. The main page shows 6 concept cards
2. Clicking "Concept 4: The Power User" opens this design
3. All dashboard elements are interactive
4. Charts render with mock data
5. Group booking flow works
6. GST invoice generator works
7. Charter for business works
8. Responsive across all devices

### Success Metrics to Show in UI:

- Badge: "📈 45% more bookings per user"
- Badge: "💼 80% corporate user satisfaction"
- Badge: "⏱️ 2-minute average booking time"
- Counter: "🏆 Top 10% traveler"

### What to Include (Critical):

- Corporate user personalization
- GST invoice generation
- Group booking with discount calculator
- Analytics dashboard with charts
- Recurring charter option
- Quick rebook functionality

### Testing Checklist:

- [ ] User dashboard shows personal data
- [ ] Stats cards animate correctly
- [ ] Trip list shows all upcoming trips
- [ ] Group booking modal works
- [ ] GST invoice generates with correct data
- [ ] Charts render with mock data
- [ ] Charter booking shows pre-saved locations
- [ ] Rebook button works (prefills previous trip)
- [ ] Dark mode toggle works
- [ ] Mobile responsive

### Delivery Format:

Single HTML file with embedded CSS and JavaScript. All assets self-contained. Production-quality visual polish.

**File Naming:** `ksrtc-concept4-power-user.html`

Start with `<!DOCTYPE html>` and include concept navigation header.
```

---

# PROMPT 5: "THE HYBRID EXPERIENCE"
## *Ultimate All-in-One Design*

```markdown
You are a senior UI/UX engineer specializing in complex, unified interfaces.

Create a single, self-contained HTML page that showcases CONCEPT 5: "The Hybrid Experience" design for KSRTC-SWIFT. This page must be part of a 6-concept showcase where clicking the concept 5 card reveals this design.

## CONCEPT 5: "The Hybrid Experience"

### Design Philosophy
- Unified all-in-one experience
- Combines best elements from all previous concepts
- Context-aware interface that adapts to user state
- "Everything you need, exactly when you need it"

### Visual Specifications

**Color Palette:**
- Adaptive: Changes based on user's journey state
  - Searching: Cool Blues `#1A5A7A` (calm, focused)
  - Booking: Warm Golds `#C8943E` (excitement, action)
  - Traveling: Greens `#2A8A5A` (in-motion, progress)
  - Completed: Soft Greys `#8A8A8A` (satisfaction)
- Base: White `#FFFFFF`, Dark `#1A1A2A`
- Accent: Dynamic (based on state)

**Typography:**
- Headlines: 'Playfair Display', serif (hero moments)
- Body: 'Inter', sans-serif
- System: 'SF Pro Display' / 'Roboto' (for system elements)
- Data: 'JetBrains Mono', monospace

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
|  KSRTC SWIFT                            [🔍] [👤] [☰]          |
+------------------------------------------------------------------+
|                                                                   |
|  ┌─────────────┬───────────────────────────────────────────────┐  |
|  │             │   "Your journey starts here"                  │  |
|  │   🗺️ MAP   │                                               │  |
|  │   VIEW      │   FROM: [Trivandrum______] TO: [Kochi____]   │  |
|  │             │   DATE: [Dec 15 ▼]     PASS: [2 ▼]          │  |
|  │  ─────────  │   TYPE: [● One Way] [○ Round Trip]          │  |
|  │  RECENT:    │   [🔍 SEARCH BUSES]                         │  |
|  │  Tvm→Kochi  │                                               │  |
|  │  Tvm→Calicut│   ┌─ RESULTS ─────────────────────────────┐ │  |
|  │  Kochi→Munnar│  │ 🚌 6:00 AM │ AC Sleeper │ ₹800 │[SEAT]│ │  |
|  └─────────────┴─────────────────────────────────────────────┘  |
|                                                                   |
|  +--- ALL-IN-ONE NAV -------------------------------------------+  |
|  | [🎫 Ticket] [📊 Status] [🔄 Cancel] [🚌 Charter] [📸 Gallery] |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- CONTEXT-AWARE SECTION ------------------------------------+  |
|  |  📢 "Welcome back, Rajesh! You have 3 upcoming trips."      |  |
|  |  💡 "Return ticket? Get 10% off on your Kochi trip."        |  |
|  |  🆕 "Link-ticket booking now available for 2+ destinations." |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Unified Split View (Desktop):**
   - Left: Interactive map showing bus positions
   - Right: Search widget + results
   - Map: shows live bus positions (mock), route overlays, clickable stops
   - Results: search results with seat availability, price, time
   - Clicking bus on map highlights its result card

2. **Context-Aware Interface:**
   - User state detection:
     - Guest: shows simplified search + signup incentive
     - Logged-in: shows personalized greeting + trip count
     - Traveling: shows live journey status
     - Returning: shows feedback prompt
   - Dynamic color scheme based on state
   - Smart suggestions: "Others also booked..." + crowd ratio

3. **Unified Search:**
   - Autocomplete with route popularity badges
   - "I'm flexible" toggle: shows cheapest days in calendar
   - Quick filters: "AC Only", "Sleeper", "Budget Tourism"
   - Recent searches with visual chips

4. **Smart Results Display:**
   - Each result card shows: bus type, time, price, seats available, rating
   - "Upgrade" badge: "₹200 more for Volvo"
   - Crowd ratio: "70% booked" indicator
   - Quick actions: "Select Seat" opens seat map

5. **All-in-One Navigation:**
   - 5 primary navigation buttons visible at all times
   - Each opens its respective section as overlay/modal
   - Smooth transitions between sections
   - Keyboard shortcuts: Alt+1 to Alt+5

6. **Context-Aware Prompts:**
   - Based on user history:
     - "Return trip? Book now and save 10%"
     - "You've traveled this route 5 times. Book again in 1 tap."
     - "Weekend trip to Munnar? Popular choice!"
   - Based on time: "Good morning! Early bird fares available."
   - Based on location: "Buses to your city depart in 2 hours."

### Micro-Interactions:

- Split view resizable on desktop
- Map pins pulse and animate
- Results cards: smooth appear animation (staggered)
- Context sections: slide in/out with state change
- Seat map: 3D perspective animation on open
- Navigation: active state with underline animation
- Suggestions: pop in with bounce when new ones appear

### Accessibility Requirements:

- Split view has proper focus management
- Map is keyboard navigable with `role="application"`
- Results have `role="list"` and proper `aria-label`
- Context prompts have `aria-live="polite"`
- All interactive elements keyboard-accessible
- High contrast mode support

### Technical Implementation:

- Vanilla JavaScript with ES6+
- CSS Grid and Flexbox
- SVG for map with JavaScript interaction
- CSS custom properties for dynamic theming
- LocalStorage for user state persistence
- Google Fonts: Playfair Display, Inter, JetBrains Mono
- Web Speech API for text-to-speech of prompts

### Deliverable:

Complete HTML page where:
1. The main page shows 6 concept cards
2. Clicking "Concept 5: The Hybrid Experience" opens this design
3. Split view works with map and search
4. Context-aware interface adapts to user state
5. All navigation links open their sections
6. Smart suggestions show based on context
7. Responsive across all devices

### Success Metrics to Show in UI:

- Badge: "⭐ 4.9★ overall platform rating"
- Badge: "⏱️ 30% faster than competitors"
- Counter: "🚌 2,500+ daily trips"
- Badge: "🏆 Kerala's #1 bus platform"

### What to Include (Critical):

- Split view with map + search
- Context-aware UI that changes with user state
- All 5 primary navigation sections
- Smart suggestions based on user history
- Unified search with flexible options
- Seat selection with 3D view

### Testing Checklist:

- [ ] Split view resizes correctly
- [ ] Map shows mock bus positions
- [ ] Context changes with user state toggle
- [ ] All navigation buttons open their sections
- [ ] Results show with seat availability
- [ ] Smart suggestions appear based on context
- [ ] Seat map opens with 3D view
- [ ] Dark mode toggle works
- [ ] Mobile responsive

### Delivery Format:

Single HTML file with embedded CSS and JavaScript. All assets self-contained. Production-quality visual polish.

**File Naming:** `ksrtc-concept5-hybrid-experience.html`

Start with `<!DOCTYPE html>` and include concept navigation header.
```

---

# PROMPT 6: "THE MINIMALIST TRANSFORMER"
## *Clean, Fast, Conversion-Focused Design*

```markdown
You are a senior UI/UX engineer specializing in conversion optimization and minimalist design.

Create a single, self-contained HTML page that showcases CONCEPT 6: "The Minimalist Transformer" design for KSRTC-SWIFT. This page must be part of a 6-concept showcase where clicking the concept 6 card reveals this design.

## CONCEPT 6: "The Minimalist Transformer"

### Design Philosophy
- Conversion-first, minimal distraction experience
- Designed for speed and immediate action
- "Book your bus in 60 seconds or less"
- Frictionless, mobile-first, desktop-optimized

### Visual Specifications

**Color Palette:**
- Primary: Pure Blue `#0066FF` (trust, action)
- Secondary: White `#FFFFFF` (clean, open)
- Background: Light Grey `#F5F7FA` (airy, modern)
- Accent: Mint `#00C8A8` (confirmation, success)
- Text: Dark `#1A1A2A`
- Muted: Mid Grey `#8A8A9A`
- Danger: Coral `#FF5A5A` (clear errors)

**Typography:**
- Headlines: 'Inter', sans-serif (ultra-clean)
- Body: 'Inter', sans-serif
- Data: 'Inter', medium
- Labels: 'Inter', semibold

**Layout Structure (1280px viewport):**

```
+------------------------------------------------------------------+
| [Logo] KSRTC SWIFT                                [👤]           |
+------------------------------------------------------------------+
|                                                                   |
|  ┌────────────────────────────────────────────────────────────┐  |
|  │                                                           │  |
|  │  "Where to?"                                              │  |
|  │                                                           │  |
|  │  ┌─────────────────────────────────────────────────────┐  │  |
|  │  │  From │  [Trivandrum______________]  [Swap]       │  │  |
|  │  │  To   │  [Kochi____________________]              │  │  |
|  │  │  Date │  [Dec 15, 2026 ▼]  Pass: [2 ▼]           │  │  |
|  │  │       │  [● One Way] [○ Round Trip]              │  │  |
|  │  │       │  [ 🔍 Find My Bus ]                       │  │  |
|  │  └─────────────────────────────────────────────────────┘  │  |
|  │                                                           │  |
|  │  💡 "Fast, simple, reliable."                            │  |
|  │                                                           │  |
|  └────────────────────────────────────────────────────────────┘  |
|                                                                   |
|  +--- QUICK POPULAR -------------------------------------------------+  |
|  |  Kochi→Tvm │ 6:00 AM │ ₹800 │ Kochi→Calicut │ 8:30 AM │ ₹950 │  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  +--- ALL IN ONE -------------------------------------------------+  |
|  |  [📊 Status] [🔄 Cancel] [🚌 Charter] [📱 App]                |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+
```

### Interactive Elements Required:

1. **Hero Search Widget (Conversion-Focused):**
   - Giant input fields with clear labels
   - Smart autocomplete with city suggestions
   - Swap button to reverse destinations
   - Date picker with one-click "Today" and "Tomorrow" buttons
   - Passenger selector with +/- buttons
   - Round trip toggle with return date shown below
   - CTA button: "Find My Bus" in primary color
   - Error states: red border with helpful message
   - Loading state: spinner animation on button

2. **Popular Quick Links:**
   - 2-4 popular routes displayed as chips below search
   - Clicking populates search fields
   - Shows time and price as tooltip
   - "See all routes" link

3. **All-in-One Utility Bar:**
   - 4 simple icons in a horizontal bar
   - Status, Cancel, Charter, App Download
   - Each opens lightweight modal or section
   - Minimal design, maximum utility

4. **Progressive Disclosure:**
   - Guest: shows only search widget
   - Logged-in: shows "Welcome back" + recent trips
   - Mobile: bottom sheet for additional options
   - Search results: appear as overlay or below

5. **Speed Optimizations:**
   - Search predicts as user types
   - Results load instantly with mock data
   - Seat selection: 3-click process
   - Booking confirmation in 5 steps or less

6. **Charter Discovery:**
   - Small link: "Need a private bus? → Charter"
   - Opens single-field form in modal
   - Minimal inputs: pickup, drop, date, passengers
   - "Get Quote" button

### Micro-Interactions:

- Search bar: focuses with smooth animation
- Swap button: rotates 180° on click
- Date buttons: "Today" and "Tomorrow" highlight on selection
- CTA button: pulse on hover, loading spinner on click
- Popular chips: lift on hover, fill search on click
- Utility icons: scale on hover
- All transitions: 200ms ease-in-out
- Error states: shake animation

### Accessibility Requirements:

- Clear focus indicators (3px blue ring)
- Form labels visible at all times
- ARIA labels on all icons
- Keyboard shortcuts: Alt+S (search), Alt+T (today), Alt+O (tomorrow)
- Error messages announced to screen readers
- High contrast mode support

### Technical Implementation:

- Vanilla JavaScript with ES6+
- CSS Grid and Flexbox
- CSS transitions for all animations
- No external libraries except fonts
- Google Fonts: Inter
- LocalStorage for recent searches

### Deliverable:

Complete HTML page where:
1. The main page shows 6 concept cards
2. Clicking "Concept 6: The Minimalist Transformer" opens this design
3. Search widget works with autocomplete
4. Popular chips populate search
5. Utility bar opens their respective sections
6. Charter modal works
7. Responsive across all devices

### Success Metrics to Show in UI:

- Badge: "⏱️ 45-second average booking time"
- Badge: "⭐ 4.9★ speed rating"
- Badge: "📈 35% higher conversion rate"
- Counter: "🚌 1,000+ bookings today"

### What to Include (Critical):

- Conversion-optimized search widget
- Autocomplete with city suggestions
- Popular routes as quick links
- All-in-one utility bar
- Charter discovery with minimal form
- Speed-first design
- Mobile-optimized layout

### Testing Checklist:

- [ ] Search autocomplete works
- [ ] Swap button reverses destinations
- [ ] Date picker shows Today/Tomorrow buttons
- [ ] Popular chips fill search fields
- [ ] Utility bar sections open
- [ ] Charter modal works
- [ ] Guest vs logged-in state differs
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] All animations smooth

### Delivery Format:

Single HTML file with embedded CSS and JavaScript. All assets self-contained. Production-quality visual polish.

**File Naming:** `ksrtc-concept6-minimalist-transformer.html`

Start with `<!DOCTYPE html>` and include concept navigation header.

### Special Note:

This concept should demonstrate **conversion optimization** through:
- Minimal cognitive load
- Clear visual hierarchy (search first, everything else secondary)
- Fast interactions (no unnecessary steps)
- Mobile-first responsive design
- Clear CTAs with action-oriented copy

The design should feel like a modern, premium booking experience that prioritizes getting the user to their destination as quickly as possible.
```

---

# 📦 MASTER PACKAGE INSTRUCTIONS

## To Create the Complete Showcase:

1. **Create a master HTML file** that serves as the gallery view
2. **Include all 6 concept files** as separate HTML files
3. **The master file** should have:
   - 6 concept cards in a grid
   - Each card with name, thumbnail preview, and brief description
   - Clicking any card opens its respective HTML file
   - Navigation between concepts (previous/next buttons)
   - Consistent header across all concepts

## File Structure:

```
ksrtc-showcase/
├── index.html                # Master gallery
├── css/
│   └── global.css           # Shared styles
├── js/
│   └── navigation.js        # Between-concept navigation
├── concepts/
│   ├── concept1-journey-planner.html
│   ├── concept2-trusted-companion.html
│   ├── concept3-kerala-darshan.html
│   ├── concept4-power-user.html
│   ├── concept5-hybrid-experience.html
│   └── concept6-minimalist-transformer.html
└── assets/
    ├── images/              # Placeholder images
    ├── icons/               # SVG icons
    └── data/                # Mock data JSON
```

## Master Gallery HTML Template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KSRTC-SWIFT — 6 Redesign Concepts</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* Global styles for gallery */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #F5F7FA;
            color: #1A1A2A;
            padding: 40px 20px;
        }
        .container { max-width: 1280px; margin: 0 auto; }
        header { text-align: center; margin-bottom: 60px; }
        h1 { font-size: 42px; font-weight: 800; }
        h1 span { color: #0066FF; }
        p.sub { color: #6A6A7A; font-size: 18px; margin-top: 8px; }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 30px;
        }
        .card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }
        .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .card-preview {
            height: 200px;
            background: #E8ECF2;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            position: relative;
        }
        .card-preview .number {
            position: absolute;
            top: 12px;
            right: 16px;
            background: rgba(0,0,0,0.7);
            color: white;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 700;
        }
        .card-content { padding: 24px; }
        .card-content h3 { font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .card-content p { color: #6A6A7A; font-size: 14px; line-height: 1.6; }
        .card-content .tags {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            flex-wrap: wrap;
        }
        .card-content .tag {
            font-size: 11px;
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 20px;
            background: #F0F2F5;
            color: #4A4A5A;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .card-content .tag.primary { background: #0066FF; color: white; }
        .card-content .tag.gold { background: #C8943E; color: white; }
        .card-content .tag.green { background: #2A8A5A; color: white; }
        .card-content .tag.purple { background: #4A2A6A; color: white; }
        .card-content .tag.teal { background: #1A7A7A; color: white; }
        .card-content .tag.mint { background: #00C8A8; color: white; }
        .badge { margin-top: 12px; }
        @media (max-width: 768px) {
            .grid { grid-template-columns: 1fr; }
            h1 { font-size: 28px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>KSRTC-SWIFT <span>Redesign</span></h1>
            <p class="sub">6 visionary concepts for Kerala's premier bus platform</p>
        </header>
        <div class="grid">
            <!-- Concept 1 -->
            <div class="card" onclick="window.location.href='concepts/concept1-journey-planner.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #0A4A4A, #1A7A7A); color: white;">
                    🗺️
                    <span class="number">1</span>
                </div>
                <div class="card-content">
                    <h3>The Journey Planner</h3>
                    <p>Route-first, map-integrated experience with Google Maps-inspired layout and visual journey planning.</p>
                    <div class="tags">
                        <span class="tag primary">Map-First</span>
                        <span class="tag gold">Visual</span>
                        <span class="tag">Interactive</span>
                    </div>
                </div>
            </div>
            <!-- Concept 2 -->
            <div class="card" onclick="window.location.href='concepts/concept2-trusted-companion.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #1A2A4A, #1A7A7A); color: white;">
                    🛡️
                    <span class="number">2</span>
                </div>
                <div class="card-content">
                    <h3>The Trusted Companion</h3>
                    <p>Status and confidence-first experience designed for anxious travelers seeking certainty and real-time updates.</p>
                    <div class="tags">
                        <span class="tag">Real-Time</span>
                        <span class="tag primary">Trust</span>
                        <span class="tag">Dashboard</span>
                    </div>
                </div>
            </div>
            <!-- Concept 3 -->
            <div class="card" onclick="window.location.href='concepts/concept3-kerala-darshan.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #E8844A, #4A8C4A); color: white;">
                    🌴
                    <span class="number">3</span>
                </div>
                <div class="card-content">
                    <h3>The Kerala Darshan</h3>
                    <p>Tourism and discovery-first experience designed for travelers exploring Kerala's cultural and natural beauty.</p>
                    <div class="tags">
                        <span class="tag gold">Tourism</span>
                        <span class="tag green">Discovery</span>
                        <span class="tag">Cultural</span>
                    </div>
                </div>
            </div>
            <!-- Concept 4 -->
            <div class="card" onclick="window.location.href='concepts/concept4-power-user.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #0A0A0A, #4A2A6A); color: white;">
                    ⚡
                    <span class="number">4</span>
                </div>
                <div class="card-content">
                    <h3>The Power User</h3>
                    <p>Corporate and frequent traveler interface with analytics, GST management, group booking, and efficiency tools.</p>
                    <div class="tags">
                        <span class="tag purple">Corporate</span>
                        <span class="tag">Analytics</span>
                        <span class="tag primary">GST</span>
                    </div>
                </div>
            </div>
            <!-- Concept 5 -->
            <div class="card" onclick="window.location.href='concepts/concept5-hybrid-experience.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #1A5A7A, #C8943E); color: white;">
                    🧠
                    <span class="number">5</span>
                </div>
                <div class="card-content">
                    <h3>The Hybrid Experience</h3>
                    <p>Unified all-in-one platform that combines all concepts with context-aware UI that adapts to user state.</p>
                    <div class="tags">
                        <span class="tag teal">Adaptive</span>
                        <span class="tag gold">Unified</span>
                        <span class="tag primary">All-in-One</span>
                    </div>
                </div>
            </div>
            <!-- Concept 6 -->
            <div class="card" onclick="window.location.href='concepts/concept6-minimalist-transformer.html'">
                <div class="card-preview" style="background: linear-gradient(135deg, #0066FF, #00C8A8); color: white;">
                    🚀
                    <span class="number">6</span>
                </div>
                <div class="card-content">
                    <h3>The Minimalist Transformer</h3>
                    <p>Conversion-focused, distraction-free experience designed for speed and immediate action. Book in 60 seconds.</p>
                    <div class="tags">
                        <span class="tag mint">Speed</span>
                        <span class="tag primary">Conversion</span>
                        <span class="tag">Minimal</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🚀 Final Instructions for AI Agent

**When generating all 6 concept files, ensure:**

1. ✅ Each file is **self-contained** (no external dependencies except Google Fonts)
2. ✅ Each concept **opens from the master gallery** via click
3. ✅ Each concept has a **navigation header** showing all 6 concepts with active state
4. ✅ **All interactions work** without console errors
5. ✅ **Responsive** across desktop, tablet, and mobile
6. ✅ **Accessible** with proper ARIA attributes
7. ✅ **Visual polish** matching the design specifications
8. ✅ **Dark mode toggle** included in all concepts
9. ✅ **Production-quality** code with comments

**Delivery:** 7 HTML files (1 master + 6 concepts) that together form a complete, interactive design showcase for KSRTC-SWIFT.

---

*End of PRD Document*