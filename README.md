#  ShopEase — Production-Grade E-Commerce Platform

ShopEase is a full-featured, production-grade e-commerce web application built with **Next.js (App Router)**.  
The project demonstrates **hybrid rendering strategies (SSG, SSR, ISR)**, strong **performance optimization**, **SEO best practices**, **accessibility compliance**, and a **complete testing setup**.

This application is designed to be **portfolio-ready** and aligned with real-world e-commerce requirements.

---

##  Live Demo

🔗 **Live Application:** https://YOUR-VERCEL-URL.vercel.app  
🎥 **Video Walkthrough (2–5 min):** https://YOUR-VIDEO-LINK

---

##  Project Objectives

- Build a scalable e-commerce platform using **Next.js App Router**
- Implement **SSG, SSR, and ISR** appropriately
- Achieve **Lighthouse Performance ≥ 90**
- Meet **Core Web Vitals (LCP, CLS, INP)**
- Ensure **WCAG 2.1 AA accessibility**
- Implement **unit, integration, and E2E tests**
- Deliver clean, maintainable, TypeScript-based architecture

---

##  Tech Stack

### Frontend
- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)
- **Lucide React** (icons)

### Data & APIs
- **Fake Store API** (product data)
- Client-side persistence via **localStorage**

### Testing
- **Jest** (unit tests)
- **React Testing Library** (component & integration tests)
- **Playwright** (end-to-end tests)

### Deployment
- **Vercel**

---

##  Application Architecture

- app/
- ├── page.tsx # Home (SSG)
- ├── products/ # Product Listing (SSR)
- │ └── [id]/ # Product Detail (SSG + ISR)
- ├── cart/ # Cart (CSR)
- ├── checkout/ # Checkout flow (CSR)
- ├── account/ # User Account (SSR)
- ├── wishlist/ # Wishlist (CSR)
- ├── about/ # About Page
- components/
- ├── ProductCard.tsx
- ├── Filters.tsx
- ├── SearchBar.tsx
- ├── Header.tsx
- ├── Footer.tsx
- ├── checkout/
- store/
- ├── cartStore.ts
- ├── wishlistStore.ts
- ├── authStore.ts
- lib/
- ├── api.ts # API abstraction
- tests/
- ├── unit/
- ├── integration/
- └── e2e/

---

##  Rendering Strategy

| Page | Strategy | Reason |
|----|----|----|
| Home | **SSG** | Fast load, SEO-friendly |
| Product Listing | **SSR** | Dynamic filters & search |
| Product Detail | **SSG + ISR** | Fast + auto updates |
| Cart | **CSR** | Client-only state |
| Checkout | **CSR** | Form-heavy workflow |
| Account | **SSR** | User-specific secure data |

---

##  Core Features

###  Shopping
- Product listing with **search, filter, sorting**
- Persistent cart using **localStorage**
- Quantity controls and selective checkout
- Wishlist with add/remove functionality

###  Authentication (Client-side)
- Login & Signup flow
- Avatar dropdown with user details
- Conditional UI based on auth state

###  Checkout
- Multi-step checkout (Shipping → Billing → Review)
- Selected items only proceed to checkout
- Order summary before placement

###  Reviews & Ratings
- View product ratings
- Submit reviews (client-side demo implementation)
- JSON-LD structured data for SEO

---

##  Performance & SEO

- **Lighthouse Performance ≥ 90**
- Optimized images using `next/image`
- Dynamic metadata (`title`, `description`)
- `sitemap.xml` and `robots.txt`
- **JSON-LD structured data** for products

---

##  Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable UI
- Semantic HTML
- Proper ARIA labels
- Screen-reader friendly components

---

##  Testing Strategy

### Unit Tests
- Zustand stores
- Reusable UI components

### Integration Tests
- Add-to-cart flows
- Cart state updates

### End-to-End Tests
- User adds product → cart → checkout
- Playwright simulates real user journey

---

##  Running Locally

### 1️ Clone Repository
 git clone https://github.com/YOUR-USERNAME/shopease.git
 cd shopease

### 2️ Install Dependencies
Install all required project dependencies before running the application.

### 3️ Run Development Server
Start the development server and open the application in your browser.

**Local URL:**  
http://localhost:3000

---

##  Running Tests

### Unit & Integration Tests
All unit and integration tests are configured to validate individual components, hooks, and feature flows.

### End-to-End (E2E) Tests
End-to-end tests ensure complete user journeys work as expected, from browsing products to completing checkout.

---

##  submission.yml

A mandatory submission.yml file is included at the project root.  
It defines the automated evaluation pipeline, including:

- Dependency installation  
- Linting checks  
- Unit tests  
- Integration tests  
- End-to-End (E2E) tests  

This configuration ensures full compatibility with automated evaluation systems.

---

##  Video Walkthrough

The walkthrough video demonstrates the complete functionality and design of the application, including:

- Product browsing and filtering  
- Cart and wishlist usage  
- Checkout flow  
- Account management  
- Design decisions and overall architecture  

---

##  Evaluation Readiness Checklist

- ✔️ All required pages implemented  
- ✔️ SSG / SSR / ISR used correctly  
- ✔️ Lighthouse score ≥ 90  
- ✔️ WCAG 2.1 AA accessibility compliance  
- ✔️ All tests passing successfully  
- ✔️ Clean, modular TypeScript codebase  
- ✔️ README and submission.yml included  
- ✔️ Live deployment available  

---

## 🏁 Final Note

**ShopEase** reflects real-world frontend engineering standards with a strong focus on:

- Performance  
- Scalability  
- Accessibility  
- Developer experience  

