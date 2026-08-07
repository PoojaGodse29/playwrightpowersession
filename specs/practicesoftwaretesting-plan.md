# PracticeSoftwareTesting Basic Plan

## Application Overview

Expanded Playwright test plan for practicesoftwaretesting.com covering customer and admin operations, plus edge cases.

## Test Scenarios

### 1. Customer workflows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Customer browsing and cart operations

**File:** `specs/practicesoftwaretesting-plan.md`

**Steps:**
  1. -
    - expect: Homepage loads and category navigation is visible
    - expect: Hand Tools and Power Tools categories display products
  2. -
    - expect: Product details page shows title, price, and Add to cart button
  3. -
    - expect: Two products can be added to the cart and are visible in cart
  4. -
    - expect: One product can be removed while the other remains
    - expect: Cart empty state appears after removing all items

### 2. Admin workflows

**Seed:** `tests/seed.spec.ts`

#### 2.1. Admin dashboard and user management

**File:** `specs/practicesoftwaretesting-plan.md`

**Steps:**
  1. -
    - expect: Admin dashboard loads after login
    - expect: Orders and Users nav items are present
  2. -
    - expect: Orders page displays order list or header
  3. -
    - expect: New user can be added and success confirmed
