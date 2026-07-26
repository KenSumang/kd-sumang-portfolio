---
title: "Harminder Singh"
description: "A bespoke WordPress website for an Australian integrated wealth strategist, combining accounting, legal, and property expertise into a single client-facing platform."
tags: ["WordPress", "Tailwind CSS", "PHP", "JavaScript", "ACF"]
thumbnail: "./harminder-singh.png"
status: "in-progress"
---

Harminder Singh & Associates is a professional services website built for an
Australian wealth strategist operating at the intersection of **accounting,
law, and property development**. The project required a fully custom WordPress
theme — not a page builder, not a template — built from scratch to match a
precise design system and a specific set of client-managed content requirements.

## The client

Harminder is a Bella Vista, NSW-based advisor whose practice is built on a
single premise: that siloed expertise — separate accountants, lawyers, and
property agents — creates blind spots that cost high-net-worth clients
significantly. His integrated approach connects those dots, and the website
needed to communicate that philosophy clearly and credibly.

The target audience is high-net-worth individuals and business owners who
have complex financial situations and are looking for something beyond
standard advisory services.

## The problem

The client needed a website that:

- Communicated a premium, trust-first brand identity without feeling
  corporate or generic.
- Allowed the client to self-manage content — insights, case studies,
  and projects — without developer involvement.
- Handled dynamic filtering, pagination, and search on content-heavy
  pages without full page reloads.
- Integrated a working contact form that routes enquiries directly to
  the client's inbox.
- Could be migrated cleanly to GoDaddy Managed WordPress for hosting.

## How it's built

The site is a fully custom WordPress theme built with **Tailwind CSS v3**,
vanilla **JavaScript**, and **PHP** template files. No page builders, no
pre-built themes.

**Content management** is handled through three custom post types registered
in `functions.php`:

- `insight` — long-form analysis articles with category and icon fields
- `case_study` — client success stories with result badge and icon fields
- `project` — property development and real estate listings with location,
  image, and external link fields

Each post type uses **Advanced Custom Fields (ACF)** for structured metadata,
with the Gutenberg block editor handling free-form article content. This
gives the client a clean, HTML-free writing experience while preserving
full design control over how the content renders on the front end.

**Dynamic filtering and pagination** on the Insights and Case Studies pages
are handled via a generic AJAX handler (`harminder_filter_posts`) in
`functions.php`. A reusable `initPostsFilter()` JavaScript function accepts
a configuration object — post type, grid ID, tab selector, search input ID —
and initialises the filtering behaviour for any page. Adding a new filterable
post type requires one new card template file and one additional function call.

**Email** is handled via Web3Forms — a zero-configuration transactional
email service that routes contact form submissions directly to the client's
inbox without requiring OAuth setup or SMTP configuration on the server.

**Site-wide settings** — social media URLs, featured posts — are managed
through an ACF Options Page, giving the client a single place to update
global content without touching any page templates.

## Design system

The visual identity is built around a **navy, gold, and white** palette with
`Playfair Display` as the display serif and `DM Sans` as the body typeface.
The design language is intentionally restrained — generous whitespace, sharp
edges, no border radius on interactive elements — to communicate authority
and precision rather than approachability.

Tailwind v3 is configured with a custom `tailwind.config.js` that maps the
design tokens — colors, fonts, breakpoints — to utility classes used
consistently across all templates.

## Pages and features

- **Homepage** — hero banner, about section, comparison diagram, featured
  case study (CMS-managed), expertise pillars, CTA.
- **Insights** — AJAX-filtered article grid with category tabs, search,
  and dot-indicator pagination. Featured analysis section pulls from a
  CMS-selected post.
- **Single Insight** — full article page with Gutenberg content, author
  bio, and CTA section.
- **Case Studies** — AJAX-paginated card grid. Featured case study on
  homepage pulls from a CMS-selected post.
- **Single Case Study** — full case detail page with result badge, content,
  and CTA section.
- **Services** — four service category pages (Financial, Legal, Property
  Development, Real Estate) each with a dynamic project card grid.
- **Projects** — AJAX-paginated property card grid with featured image,
  location tag, and external listing link.
- **About** — Harminder's background, philosophy, and team positioning.
- **Contact** — custom form with Web3Forms integration routing to
  `harminder@buildstead.com.au`.

## Status

Core development complete on LocalWP. Pending deployment to GoDaddy Managed
WordPress and final email configuration. All custom post types, ACF field
groups, AJAX handlers, and page templates are functional. Content population
ongoing with the client.
