---
id: meta-seo
title: Meta Tags & SEO - Complete HTML Optimization Guide
description:
  Master HTML meta tags, Open Graph, Twitter Cards, structured data, and SEO
  best practices for better search engine visibility and social sharing.
keywords:
  [
    html meta tags,
    seo optimization,
    open graph,
    twitter cards,
    structured data,
    json ld,
    meta description,
    meta keywords,
  ]
tags: [HTML, SEO, Meta, OpenGraph, StructuredData, Social]
sidebar_position: 10
---

# 🔍 Meta Tags & SEO

Meta tags and SEO optimization are crucial for making your website discoverable
by search engines and properly displayed when shared on social media platforms.

## 📖 Why Meta Tags Matter?

Meta tags provide information about your web page to:

- **Search Engines**: Help understand page content and purpose
- **Social Platforms**: Control how links appear when shared
- **Browsers**: Guide behavior and display
- **Users**: Provide context before clicking

---

## 🏗️ Basic Meta Tags

### Document Information

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Character encoding (MUST be first) -->
    <meta charset="UTF-8" />

    <!-- Page title (appears in search results and browser tab) -->
    <title>Complete HTML Guide - Learn Web Development</title>

    <!-- Page description (appears in search snippets) -->
    <meta
      name="description"
      content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards. Complete tutorial for beginners and experts."
    />

    <!-- Keywords (less important now, but still used by some search engines) -->
    <meta
      name="keywords"
      content="html tutorial, learn html, web development, html5, semantic html, html forms, html tables"
    />

    <!-- Author information -->
    <meta name="author" content="CodeScrolls Team" />

    <!-- Content language -->
    <meta name="language" content="English" />

    <!-- Content type and viewport -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Theme color (browser UI) -->
    <meta name="theme-color" content="#000000" />

    <!-- Color scheme (dark/light mode) -->
    <meta name="color-scheme" content="dark light" />

    <!-- Format detection (disable auto-linking) -->
    <meta name="format-detection" content="telephone=no" />

    <!-- Apple mobile web app -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="CodeScrolls" />
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

### Modern Meta Tags

#### Theme Color

Controls browser UI color (address bar, etc.).

```html
<!-- Single theme color -->
<meta name="theme-color" content="#000000" />

<!-- Media query for dark mode -->
<meta
  name="theme-color"
  content="#ffffff"
  media="(prefers-color-scheme: light)"
/>
<meta
  name="theme-color"
  content="#000000"
  media="(prefers-color-scheme: dark)"
/>
```

#### Color Scheme

Hints to browser about supported color schemes.

```html
<!-- Supports both light and dark -->
<meta name="color-scheme" content="light dark" />

<!-- Light only -->
<meta name="color-scheme" content="light" />

<!-- Dark only -->
<meta name="color-scheme" content="dark" />
```

#### Format Detection

Controls automatic detection and formatting of phone numbers, addresses, etc.

```html
<!-- Disable phone number detection -->
<meta name="format-detection" content="telephone=no" />

<!-- Disable address detection -->
<meta name="format-detection" content="address=no" />

<!-- Disable email detection -->
<meta name="format-detection" content="email=no" />

<!-- Disable all auto-detection -->
<meta name="format-detection" content="telephone=no, address=no, email=no" />
```

#### Apple Mobile Web App

iOS-specific meta tags for web apps.

```html
<!-- Enable standalone mode -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- Status bar style -->
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<!-- Options: default, black, black-translucent -->

<!-- App title -->
<meta name="apple-mobile-web-app-title" content="My App" />

<!-- App icons -->
<link rel="apple-touch-icon" href="/icon-180.png" sizes="180x180" />
<link rel="apple-touch-icon" href="/icon-152.png" sizes="152x152" />
<link rel="apple-touch-icon" href="/icon-120.png" sizes="120x120" />
```

### Modern Link Relations

Performance and resource hints.

```html
<head>
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://api.example.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />

  <!-- DNS prefetch -->
  <link rel="dns-prefetch" href="https://cdn.example.com" />

  <!-- Preload critical resources -->
  <link
    rel="preload"
    href="/font.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  <link rel="preload" href="/hero-image.jpg" as="image" />
  <link rel="preload" href="/critical.css" as="style" />
  <link rel="preload" href="/app.js" as="script" />

  <!-- Prefetch for likely next page -->
  <link rel="prefetch" href="/next-page.html" />
  <link rel="prefetch" href="/api/data.json" as="fetch" crossorigin />

  <!-- Module preload for ES modules -->
  <link rel="modulepreload" href="/app.js" />
  <link rel="modulepreload" href="/vendor.js" />

  <!-- PWA manifest -->
  <link rel="manifest" href="/manifest.json" />
</head>
```

**Preconnect vs DNS-Prefetch:**

```html
<!-- Preconnect: Full connection (DNS + TCP + TLS) -->
<link rel="preconnect" href="https://api.example.com" />

<!-- DNS-Prefetch: DNS lookup only (lighter) -->
<link rel="dns-prefetch" href="https://cdn.example.com" />
```

**Preload Examples:**

```html
<!-- Critical font -->
<link
  rel="preload"
  href="/fonts/main.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>

<!-- Critical image -->
<link
  rel="preload"
  href="/hero.jpg"
  as="image"
  imagesrcset="/hero-small.jpg 480w, /hero-large.jpg 1024w"
  imagesizes="(max-width: 480px) 100vw, 1024px"
/>

<!-- Critical CSS -->
<link rel="preload" href="/critical.css" as="style" />
<link rel="stylesheet" href="/critical.css" />
```

### Content Security Policy (CSP)

Security meta tag for preventing XSS attacks.

```html
<!-- Basic CSP -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>

<!-- Strict CSP with nonce -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self' 'nonce-{random}';"
/>

<!-- CSP with external sources -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' https://cdn.example.com; img-src 'self' data: https:;"
/>

<!-- Report-only mode (testing) -->
<meta
  http-equiv="Content-Security-Policy-Report-Only"
  content="default-src 'self'; report-uri /csp-report"
/>
```

**Common CSP Directives:**

```html
<!-- Allow from same origin only -->
default-src 'self'

<!-- Allow inline scripts (less secure) -->
script-src 'self' 'unsafe-inline'

<!-- Allow specific external domains -->
script-src 'self' https://cdn.example.com

<!-- Allow data URIs for images -->
img-src 'self' data: https:

<!-- No inline styles -->
style-src 'self'

<!-- Allow fonts from Google -->
font-src 'self' https://fonts.googleapis.com
```

### Search Engine Directives

```html
<head>
  <!-- Robots meta tag -->
  <meta name="robots" content="index, follow" />

  <!-- Specific robot controls -->
  <meta
    name="googlebot"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />

  <!-- Bing specific -->
  <meta name="bingbot" content="index, follow, max-snippet:150" />

  <!-- Prevent indexing for development/staging -->
  <meta name="robots" content="noindex, nofollow" />

  <!-- Allow indexing but prevent snippet -->
  <meta name="robots" content="index, nosnippet" />

  <!-- Revisit frequency (mostly ignored by modern search engines) -->
  <meta name="revisit-after" content="7 days" />
</head>
```

---

## 🌐 Open Graph Protocol

Open Graph tags control how your content appears when shared on Facebook,
LinkedIn, and other social platforms.

### Basic Open Graph Tags

```html
<head>
  <!-- Required Open Graph tags -->
  <meta
    property="og:title"
    content="Complete HTML Guide - Learn Web Development"
  />
  <meta
    property="og:description"
    content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards."
  />
  <meta
    property="og:image"
    content="https://codescrolls.com/img/html-guide-og.png"
  />
  <meta property="og:url" content="https://codescrolls.com/html" />
  <meta property="og:type" content="website" />

  <!-- Optional but recommended -->
  <meta property="og:site_name" content="CodeScrolls" />
  <meta property="og:locale" content="en_US" />

  <!-- Image dimensions (helps with loading) -->
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="HTML tutorial screenshot" />
</head>
```

### Open Graph Types

```html
<!-- Website (default) -->
<meta property="og:type" content="website" />

<!-- Article -->
<meta property="og:type" content="article" />
<meta property="article:author" content="John Doe" />
<meta property="article:published_time" content="2025-01-15T10:00:00Z" />
<meta property="article:modified_time" content="2025-01-16T14:30:00Z" />
<meta property="article:section" content="Web Development" />
<meta property="article:tag" content="HTML" />

<!-- Product -->
<meta property="og:type" content="product" />
<meta property="product:price:amount" content="29.99" />
<meta property="product:price:currency" content="USD" />

<!-- Video -->
<meta property="og:type" content="video.other" />
<meta property="og:video" content="https://example.com/video.mp4" />
<meta property="og:video:width" content="1280" />
<meta property="og:video:height" content="720" />
<meta property="og:video:type" content="video/mp4" />

<!-- Music -->
<meta property="og:type" content="music.song" />
<meta property="music:duration" content="180" />
<meta property="music:album" content="Greatest Hits" />
<meta property="music:musician" content="Artist Name" />
```

### Dynamic Open Graph with JavaScript

```html
<head>
  <meta property="og:title" content="Loading..." id="og-title" />
  <meta property="og:description" content="Loading..." id="og-description" />
  <meta property="og:image" content="/img/default-og.png" id="og-image" />
</head>

<script>
  // Update Open Graph tags dynamically
  function updateOpenGraph(data) {
    document.getElementById('og-title').content = data.title;
    document.getElementById('og-description').content = data.description;
    document.getElementById('og-image').content = data.image;
  }

  // Example usage
  fetch('/api/page-metadata')
    .then(response => response.json())
    .then(data => updateOpenGraph(data));
</script>
```

---

## 🐦 Twitter Card Tags

Twitter Cards control how your content appears when shared on Twitter (now X).

### Summary Card (Default)

```html
<head>
  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:title"
    content="Complete HTML Guide - Learn Web Development"
  />
  <meta
    name="twitter:description"
    content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards."
  />
  <meta
    name="twitter:image"
    content="https://codescrolls.com/img/html-guide-twitter.png"
  />
  <meta name="twitter:image:alt" content="HTML tutorial preview" />
</head>
```

### Large Image Card

```html
<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Complete HTML Guide" />
  <meta
    name="twitter:description"
    content="Master HTML with comprehensive tutorials, examples, and best practices."
  />
  <meta
    name="twitter:image"
    content="https://codescrolls.com/img/html-large-card.png"
  />
  <meta name="twitter:image:alt" content="HTML tutorial with code examples" />
</head>
```

### App Card

```html
<head>
  <meta name="twitter:card" content="app" />
  <meta name="twitter:title" content="CodeScrolls HTML App" />
  <meta
    name="twitter:description"
    content="Learn HTML with interactive examples"
  />
  <meta
    name="twitter:image"
    content="https://codescrolls.com/img/app-icon.png"
  />

  <!-- iOS App -->
  <meta name="twitter:app:id:iphone" content="123456789" />
  <meta name="twitter:app:url:iphone" content="codescrolls://html-guide" />
  <meta name="twitter:app:name:iphone" content="CodeScrolls" />

  <!-- Android App -->
  <meta name="twitter:app:id:googleplay" content="com.codescrolls.app" />
  <meta name="twitter:app:url:googleplay" content="codescrolls://html-guide" />
  <meta name="twitter:app:name:googleplay" content="CodeScrolls" />
</head>
```

### Player Card (for Videos)

```html
<head>
  <meta name="twitter:card" content="player" />
  <meta name="twitter:title" content="HTML Tutorial Video" />
  <meta
    name="twitter:description"
    content="Watch our comprehensive HTML tutorial"
  />
  <meta
    name="twitter:image"
    content="https://codescrolls.com/img/video-thumbnail.png"
  />

  <!-- Player configuration -->
  <meta
    name="twitter:player"
    content="https://codescrolls.com/embed/html-tutorial"
  />
  <meta name="twitter:player:width" content="640" />
  <meta name="twitter:player:height" content="360" />
  <meta
    name="twitter:player:stream"
    content="https://codescrolls.com/video/html-tutorial.mp4"
  />
  <meta name="twitter:player:stream:content_type" content="video/mp4" />
</head>
```

---

## 📊 Structured Data (JSON-LD)

Structured data helps search engines understand your content and can enable rich
snippets in search results.

### Article Schema

```html
<head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Complete HTML Guide - Learn Web Development",
      "description": "Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards.",
      "image": [
        "https://codescrolls.com/img/html-guide-og.png",
        "https://codescrolls.com/img/html-guide-twitter.png"
      ],
      "datePublished": "2025-01-15T10:00:00Z",
      "dateModified": "2025-01-16T14:30:00Z",
      "author": {
        "@type": "Person",
        "name": "CodeScrolls Team",
        "url": "https://codescrolls.com/authors/codescrolls-team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CodeScrolls",
        "logo": {
          "@type": "ImageObject",
          "url": "https://codescrolls.com/img/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://codescrolls.com/html"
      },
      "wordCount": 2500,
      "timeRequired": "PT30M",
      "articleSection": "Web Development"
    }
  </script>
</head>
```

### Website Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CodeScrolls",
    "description": "Learn web development with comprehensive tutorials and guides",
    "url": "https://codescrolls.com",
    "sameAs": [
      "https://twitter.com/codescrolls",
      "https://github.com/codescrolls",
      "https://linkedin.com/company/codescrolls"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "CodeScrolls",
      "logo": {
        "@type": "ImageObject",
        "url": "https://codescrolls.com/img/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://codescrolls.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
</script>
```

### Product Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HTML Mastery Course",
    "description": "Complete HTML learning course with practical examples",
    "image": "https://codescrolls.com/img/html-course.png",
    "brand": {
      "@type": "Brand",
      "name": "CodeScrolls"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "CodeScrolls"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Developer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent course! Very comprehensive and practical."
      }
    ]
  }
</script>
```

### Breadcrumb Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codescrolls.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "HTML",
        "item": "https://codescrolls.com/html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Forms",
        "item": "https://codescrolls.com/html/basics/forms"
      }
    ]
  }
</script>
```

---

## 🔧 Technical Meta Tags

### Mobile Optimization

```html
<head>
  <!-- Mobile viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- iOS specific -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <meta name="apple-mobile-web-app-title" content="CodeScrolls" />
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

  <!-- Android specific -->
  <meta name="theme-color" content="#007bff" />
  <meta name="mobile-web-app-capable" content="yes" />

  <!-- Windows specific -->
  <meta name="msapplication-TileColor" content="#007bff" />
  <meta name="msapplication-TileImage" content="/img/mstile-144x144.png" />
</head>
```

### Performance and Caching

```html
<head>
  <!-- DNS prefetching -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//www.google-analytics.com" />

  <!-- Preconnect to important origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Resource hints -->
  <link rel="prefetch" href="/css/main.css" />
  <link rel="preload" href="/js/main.js" as="script" />
  <link rel="preload" href="/img/hero.jpg" as="image" />

  <!-- Caching directives (HTTP headers preferred) -->
  <meta http-equiv="cache-control" content="max-age=3600" />
  <meta http-equiv="expires" content="Wed, 21 Oct 2025 07:28:00 GMT" />
</head>
```

---

## 🎯 SEO Best Practices

### Title Tag Optimization

```html
<head>
  <!-- Good title (50-60 characters) -->
  <title>Complete HTML Guide - Learn Web Development | CodeScrolls</title>

  <!-- Too short -->
  <title>HTML Guide</title>

  <!-- Too long (gets truncated) -->
  <title>
    Complete and Comprehensive HTML Tutorial Guide for Beginners and Advanced
    Developers with Examples and Best Practices
  </title>

  <!-- With branding -->
  <title>HTML Forms Tutorial | CodeScrolls - Learn Web Development</title>

  <!-- Dynamic titles -->
  <title><%= pageTitle %> | <%= siteName %></title>
</head>
```

### Meta Description Optimization

```html
<head>
  <!-- Good description (150-160 characters) -->
  <meta
    name="description"
    content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards. Complete tutorial for beginners and experts."
  />

  <!-- Too short -->
  <meta name="description" content="Learn HTML." />

  <!-- Too long (gets truncated) -->
  <meta
    name="description"
    content="This is a very long description that goes on and on about HTML tutorials, examples, best practices, SEO optimization, modern web standards, accessibility, semantic markup, forms, tables, multimedia, and much more that will definitely get truncated in search results because it's way too long for a meta description."
  />

  <!-- With call-to-action -->
  <meta
    name="description"
    content="Learn HTML with interactive examples. Master semantic markup, forms, accessibility & SEO. Start your web development journey today!"
  />
</head>
```

### URL Structure

```html
<!-- Good URL structure -->
<!-- https://codescrolls.com/html/basics/elements -->
<!-- https://codescrolls.com/blog/understanding-html-semantics -->

<!-- Bad URL structure -->
<!-- https://codescrolls.com/page?id=123&cat=html -->
<!-- https://codescrolls.com/html-tutorial-complete-guide-for-beginners.aspx -->

<!-- URL with keywords -->
<!-- https://codescrolls.com/html/forms/validation -->
<!-- https://codescrolls.com/seo/meta-tags-guide -->
```

---

## 📈 SEO Analysis Tools

### Meta Tag Validator

```html
<!-- Add to your development environment -->
<script>
  // Simple meta tag checker
  function checkMetaTags() {
    const required = ['description', 'viewport'];
    const recommended = ['title', 'og:title', 'og:description', 'og:image'];

    console.log('=== Meta Tag Analysis ===');

    required.forEach(tag => {
      const element = document.querySelector(`meta[name="${tag}"]`);
      console.log(`${tag}: ${element ? '✅' : '❌'}`);
    });

    recommended.forEach(tag => {
      const element =
        document.querySelector(`meta[property="${tag}"]`) ||
        document.querySelector(`meta[name="${tag}"]`);
      console.log(`${tag}: ${element ? '✅' : '⚠️'}`);
    });
  }

  // Run on page load
  window.addEventListener('load', checkMetaTags);
</script>
```

### Social Media Preview Tool

```html
<div id="social-preview" style="display: none;">
  <div class="preview-card">
    <img id="preview-image" src="" alt="Preview" />
    <div class="preview-content">
      <h3 id="preview-title"></h3>
      <p id="preview-description"></p>
      <small id="preview-url"></small>
    </div>
  </div>
</div>

<script>
  function updateSocialPreview() {
    // Open Graph
    const ogTitle = document.querySelector(
      'meta[property="og:title"]',
    )?.content;
    const ogDesc = document.querySelector(
      'meta[property="og:description"]',
    )?.content;
    const ogImage = document.querySelector(
      'meta[property="og:image"]',
    )?.content;
    const ogUrl = document.querySelector('meta[property="og:url"]')?.content;

    // Update preview
    document.getElementById('preview-title').textContent =
      ogTitle || document.title;
    document.getElementById('preview-description').textContent =
      ogDesc ||
      document.querySelector('meta[name="description"]')?.content ||
      '';
    document.getElementById('preview-image').src = ogImage || '';
    document.getElementById('preview-url').textContent =
      ogUrl || window.location.href;
  }

  // Update on load and when meta tags change
  window.addEventListener('load', updateSocialPreview);
</script>
```

---

## 🔍 Testing and Validation

### Online SEO Tools

```html
<!-- Add to development checklist -->
<script>
  const seoChecklist = {
    title: {
      check: () => document.title.length > 0 && document.title.length <= 60,
      message: 'Title should be 1-60 characters',
    },
    description: {
      check: () => {
        const desc = document.querySelector('meta[name="description"]');
        return desc && desc.content.length >= 50 && desc.content.length <= 160;
      },
      message: 'Meta description should be 50-160 characters',
    },
    ogTags: {
      check: () => {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector(
          'meta[property="og:description"]',
        );
        const ogImage = document.querySelector('meta[property="og:image"]');
        return ogTitle && ogDesc && ogImage;
      },
      message: 'Open Graph tags should be present',
    },
    viewport: {
      check: () => document.querySelector('meta[name="viewport"]'),
      message: 'Viewport meta tag is required for mobile',
    },
  };

  function runSEOCheck() {
    console.log('🔍 SEO Checklist Results:');
    Object.entries(seoChecklist).forEach(([key, item]) => {
      const result = item.check();
      console.log(`${result ? '✅' : '❌'} ${key}: ${item.message}`);
    });
  }

  // Run checks
  runSEOCheck();
</script>
```

---

## 📋 Complete SEO Meta Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Basic Meta Tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Complete HTML Guide - Learn Web Development | CodeScrolls</title>
    <meta
      name="description"
      content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards. Complete tutorial for beginners and experts."
    />
    <meta
      name="keywords"
      content="html tutorial, learn html, web development, html5, semantic html"
    />
    <meta name="author" content="CodeScrolls Team" />
    <meta name="robots" content="index, follow" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://codescrolls.com/html" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://codescrolls.com/html" />
    <meta
      property="og:title"
      content="Complete HTML Guide - Learn Web Development"
    />
    <meta
      property="og:description"
      content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards."
    />
    <meta
      property="og:image"
      content="https://codescrolls.com/img/html-guide-og.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="CodeScrolls" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://codescrolls.com/html" />
    <meta
      name="twitter:title"
      content="Complete HTML Guide - Learn Web Development"
    />
    <meta
      name="twitter:description"
      content="Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards."
    />
    <meta
      name="twitter:image"
      content="https://codescrolls.com/img/html-guide-twitter.png"
    />

    <!-- Mobile & Performance -->
    <meta name="theme-color" content="#007bff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />

    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />

    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Complete HTML Guide - Learn Web Development",
        "description": "Master HTML from basics to advanced with practical examples, SEO optimization, and modern web standards.",
        "image": "https://codescrolls.com/img/html-guide-og.png",
        "datePublished": "2025-01-15T10:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "CodeScrolls"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CodeScrolls",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codescrolls.com/img/logo.png"
          }
        }
      }
    </script>
  </head>
  <body>
    <!-- Your content here -->
  </body>
</html>
```

---

## 🎯 Best Practices Summary

### ✅ DO:

```html
<!-- Use descriptive, keyword-rich titles -->
<title>HTML Forms Tutorial | CodeScrolls - Learn Web Development</title>

<!-- Write compelling meta descriptions -->
<meta
  name="description"
  content="Master HTML forms with validation, accessibility, and modern UX patterns. Complete guide with examples."
/>

<!-- Include Open Graph tags for social sharing -->
<meta property="og:title" content="HTML Forms Guide" />
<meta
  property="og:description"
  content="Learn HTML forms with practical examples"
/>
<meta property="og:image" content="https://example.com/og-image.png" />

<!-- Add structured data for rich snippets -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HTML Forms Tutorial",
    "author": "CodeScrolls Team"
  }
</script>

<!-- Use canonical URLs -->
<link rel="canonical" href="https://codescrolls.com/html/forms" />
```

### ❌ DON'T:

```html
<!-- Don't use duplicate titles -->
<title>Home Page</title>
<!-- Too generic -->

<!-- Don't keyword stuff -->
<meta
  name="description"
  content="html html html tutorial tutorial tutorial learn learn learn"
/>

<!-- Don't forget image alt text in Open Graph -->
<meta property="og:image" content="/image.jpg" />
<!-- Missing og:image:alt -->

<!-- Don't use misleading structured data -->
<script type="application/ld+json">
  {
    "@type": "Article",
    "headline": "Cheap Products", <!-- Misleading -->
    "description": "Expensive luxury items" <!-- Inconsistent -->
  }
</script>
```

---

## 🚀 What's Next?

You've completed all HTML Intermediate topics! Now explore **Web Components**:

👉 [Next: Web Components →](../advanced/web-components.md)

Or return to the [HTML Overview →](../index.md)

Master meta tags and SEO for better web visibility! 🔍
