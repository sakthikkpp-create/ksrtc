# KSRTC-SWIFT (onlineksrtcswift.com) — Site Audit for Redesign

Crawled: all nav-linked pages + 2 hidden/unlinked routes discovered via search + 3 external integrations embedded in the header.

---

## 1. Access Report

### ✅ Fully inspected (server-rendered, content readable)
| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Search + marketing landing |
| About Us | `/about_us` | Corporate history, stats |
| Contact Us | `/contact_us` | HQ + ~90 branch/depot directory |
| Feedback | `/feedback` | Complaint & rating form |
| Gallery | `/photogallery` | ~30-image bus/fleet gallery |
| Privacy Policy | `/privacy` | Standard privacy notice |
| Terms & Conditions | `/terms_and_conditions` | Fares, tax, cancellation slabs, special services |
| **Bus Hire (hidden)** | `/bushire` | Charter-a-bus quote request — **not linked in main nav**, found via search index |

### ⚠️ Client-rendered only (JS app shell — no crawlable content)
| Page | Path | Note |
|---|---|---|
| Status Check | `/status` | Returns "enable JavaScript" shell only |
| Route Explorer | `/route` | Returns no readable text; likely a React/Angular SPA view |

### 🚫 Blocked (robots.txt disallows automated access)
| Page | Path | Note |
|---|---|---|
| Cancellation | `/ticket/cancel` | Content inferred from T&C page instead |
| View Booking | `/ticket/mybooking` | Behind the "Manage Booking" menu; couldn't inspect directly |

### 🔗 External systems linked from the site (separate domains/apps)
| System | URL | What it is |
|---|---|---|
| Counter/Agent login | `ksrtc.buscrs.com` | Separate CRS portal for depot staff, built by vendor **MavenTech Labs** (same vendor as the customer app) |
| Rail Rolls | `railrolls.in/ksrtc` | Third-party food-ordering service for bus halts — own cart/login/menu, linked as a header icon |
| WhatsApp | `wa.me/918593951515` | Click-to-chat support |
| Mobile apps | Play Store / App Store | "Ente KSRTC Neo-OPRS" — same platform, native wrapper |
| Social | Facebook, Twitter/X, Instagram, YouTube | Standard footer/header links |

---

## 2. Service Inventory

**A. Ticketing & Booking**
- One-way and round-trip search (round trip = 10% discount on return leg)
- Link-ticket booking (multi-leg journeys, min. stopover duration filter)
- Seat selection, max 6 seats per transaction
- Guest checkout or OTP-registered account
- GST company/number capture for business travel
- E-ticket / M-ticket / ERS + pre-departure crew SMS
- Group discount (min. 4 tickets/txn, single reservation fee)
- Modify boarding/drop point, preponement/postponement (counter-only, fee-based)
- BUDGET TOURISM double-decker class (no-cancellation category)

**B. Cancellation, Refunds & Status**
- Online e-ticket cancellation, tiered refund slabs (72h/48h/24h/12h/2h before departure)
- Counter-ticket cancellation (physical ticket required)
- PNR/status check
- Refunds auto-credited to original payment account, ~7 banking days

**C. Charter / Bus Hire** *(discoverable only via direct URL, not in nav)*
- Quote request: pickup/return date & time, one-way vs round trip, vehicle class (AC/Non-AC Seater or Sleeper, Premium Seater/Sleeper), passenger count, OTP-verified contact

**D. Account & Loyalty**
- Mobile-OTP login/signup with referral code capture
- Profile completion (name, age, email, gender, GST details, DOB, anniversary) — used for auto-fill + loyalty points
- Booking history ("My Bookings")

**E. Support**
- Feedback form segmented by department — **Bus service / Cargo service / Corporate service** — each with its own rating sub-categories (punctuality, bus condition, staff behaviour, toilet/restaurant halt, seat comfort, website, call centre, booking/delivery experience), tied to PNR + OTP
- Multi-channel contact: route-enquiry landlines, toll-free number, WhatsApp business line, separate emails for route vs. technical issues
- Branch/depot locator — ~90 entries statewide with address, manager contact, Google Maps link
- Agent/counter CRS portal (separate login, separate domain)

**F. Content & Marketing**
- Hero search widget, top-routes carousel, popular-destinations shortcuts, testimonials carousel
- "New launched buses" gallery teaser linking to About Us
- Promo popup, app-download QR + store badges

**G. Third-party integration**
- Rail Rolls in-journey food ordering, surfaced as a persistent header icon

---

## 3. Site Tree

```
onlineksrtcswift.com
│
├── PUBLIC PAGES (server-rendered)
│   ├── /  ............................. Home
│   │     ├── SearchWidget (OneWay | RoundTrip)
│   │     ├── LinkTicketWidget (stopover filter)
│   │     ├── TopRoutes[] ──▶ search results
│   │     ├── PopularDestinations[]
│   │     ├── Testimonials[]
│   │     ├── GalleryTeaser ──▶ /about_us
│   │     ├── AppDownload (QR, Play Store, App Store)
│   │     └── PromoPopup
│   │
│   ├── /about_us ....................... History + stats
│   ├── /contact_us ..................... HQ + ~90 branch offices (map links)
│   ├── /feedback ....................... Complaint/rating form
│   │     └── Subject ─┬─▶ Bus service    (rating sub-tags)
│   │                  ├─▶ Cargo service  (rating sub-tags)
│   │                  └─▶ Corporate service (rating sub-tags)
│   ├── /photogallery ................... Image gallery
│   ├── /privacy ......................... Privacy policy
│   ├── /terms_and_conditions ............ Full T&C
│   └── /bushire  [unlinked] ............. Charter quote form
│
├── APP-SHELL (client-rendered, JS required)
│   ├── /status .......................... PNR/status check
│   └── /route ............................ Route explorer
│
├── ROBOTS-BLOCKED (linked in nav, not crawlable)
│   ├── /ticket/cancel .................... Cancellation flow
│   └── /ticket/mybooking ................. Booking history
│
├── GLOBAL UI (modal, not a route)
│   ├── Login/Signup (OTP + referral code)
│   └── Complete Profile (name, age, email, gender, GST, DOB, anniversary)
│
└── EXTERNAL SYSTEMS
    ├── ksrtc.buscrs.com ................... Agent/Counter CRS (vendor: MavenTech Labs)
    ├── railrolls.in/ksrtc .................. In-journey food ordering
    ├── wa.me/918593951515 .................. WhatsApp support
    ├── Play Store / App Store .............. Native app
    └── Facebook / X / Instagram / YouTube
```

## 4. Logical Data Model (relational view)

```sql
DEPOT           (depot_id PK, name, district, address, phone, lat, lng)
ROUTE           (route_id PK, from_city, to_city)
BUS_SCHEDULE    (schedule_id PK, route_id FK→ROUTE, bus_class, departure_time)
USER            (user_id PK, mobile, name, email, gender, dob, anniversary,
                 gst_company, gst_no, referral_code)
BOOKING         (booking_id PK, user_id FK→USER, schedule_id FK→BUS_SCHEDULE,
                 journey_date, seat_count, is_round_trip, is_link_ticket)
TICKET          (ticket_id PK, booking_id FK→BOOKING, seat_no,
                 boarding_point, drop_point, fare, status)
PAYMENT         (payment_id PK, booking_id FK→BOOKING, mode, amount, gateway_txn_id)
CANCELLATION    (cancellation_id PK, ticket_id FK→TICKET, cancelled_at,
                 refund_pct, refund_amount)
FEEDBACK        (feedback_id PK, user_id FK→USER, ticket_id FK→TICKET NULL,
                 subject, rating_json, description)
CHARTER_REQUEST (request_id PK, user_id FK→USER, from_dt, to_dt,
                 vehicle_pref, pax_count)
```

---

**Redesign flags:** `/bushire` (charter booking) has zero nav entry point — an easy win to surface. `/status` and `/route` are JS-only shells worth checking for SEO/accessibility. Two ticket-management routes are robots-blocked, so confirm their current UX firsthand (screenshots/manual walkthrough) before redesigning them blind.
