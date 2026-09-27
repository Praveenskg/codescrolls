import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const categories = [
    {
      name: 'HTML',
      href: '/docs/html',
      icon: '/img/skills/Html.png',
      description: 'Semantic markup, forms, accessibility, Canvas, SVG, Web Components, and SEO.',
    },
    {
      name: 'CSS',
      href: '/docs/css',
      icon: '/img/skills/Css.png',
      description:
        'Layouts, animations, responsive design, Flexbox, Grid, and modern CSS features.',
    },
    {
      name: 'JavaScript',
      href: '/docs/javascript',
      icon: '/img/skills/JavaScript.png',
      description:
        'ES6+, DOM manipulation, async programming, design patterns, and modern JS practices.',
    },
    {
      name: 'TypeScript',
      href: '/docs/typescript',
      icon: '/img/skills/TypeScript.png',
      description:
        'Type-safe JavaScript with interfaces, generics, advanced types, and scalable apps.',
    },
    {
      name: 'Python',
      href: '/docs/python',
      icon: '/img/skills/Python.svg',
      description:
        'Python fundamentals, data structures, OOP, async, packaging, and practical workflows.',
    },
    {
      name: 'Rust',
      href: '/docs/rust',
      icon: '/img/skills/Rust.svg',
      description:
        'Ownership, borrowing, traits, concurrency, async Rust, and systems programming with Cargo.',
    },
    {
      name: 'Node.js',
      href: '/docs/nodejs',
      icon: '/img/skills/NodeJS.png',
      description:
        'Event loop, Express, streams, auth, databases, and production Node.js backends.',
    },
    {
      name: 'React',
      href: '/docs/react',
      icon: '/img/skills/React.png',
      description:
        'Hooks, components, state management, Context API, React 19, and advanced patterns.',
    },
    {
      name: 'Interviews',
      href: '/docs/interviews',
      icon: '/img/skills/NodeJS.png',
      description:
        '300+ interview questions for HTML, CSS, JavaScript, TypeScript, React, and Node.js.',
    },
    {
      name: 'Cheat Sheets',
      href: '/docs/cheatsheets',
      icon: '/img/skills/Git.png',
      description:
        'Quick references for Git, Linux, SQL, APIs, VS Code, and core web technologies.',
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: '/img/skills/VSCode.png',
      description:
        'Tutorials and deep-dives on React, TypeScript, performance, Docker, and tooling.',
    },
  ];

  const featuredPosts = [
    {
      title: 'React 19 Complete Guide',
      description: 'Features, hooks, Actions, and best practices for React 19.',
      href: '/blog/react-19-complete-guide',
      tag: 'React',
    },
    {
      title: 'Modern TypeScript Features',
      description: 'satisfies, const type params, NoInfer, and practical patterns.',
      href: '/blog/modern-typescript-features',
      tag: 'TypeScript',
    },
    {
      title: 'JavaScript Closures Explained',
      description: 'Lexical scoping, closures, and practical real-world use cases.',
      href: '/blog/javascript-closures',
      tag: 'JavaScript',
    },
  ];

  const features = [
    {
      icon: '📚',
      title: 'Complete Documentation',
      description:
        '180+ documentation pages covering HTML, CSS, JavaScript, TypeScript, React, Python, Rust, and Node.js.',
    },
    {
      icon: '💡',
      title: 'Interview Ready',
      description:
        '300+ curated interview questions with detailed explanations for technical interviews.',
    },
    {
      icon: '📋',
      title: 'Cheat Sheets',
      description:
        '14 quick-reference sheets for languages, Git, Linux, SQL, APIs, and developer tools.',
    },
    {
      icon: '🎯',
      title: 'Practical Focus',
      description:
        'Real-world examples, production patterns, and clear notes you can revisit anytime.',
    },
    {
      icon: '🔄',
      title: 'Always Updated',
      description: 'Continuously updated with current web development trends and technologies.',
    },
    {
      icon: '♿',
      title: 'Accessibility First',
      description: 'WCAG-minded content with clear structure and inclusive design principles.',
    },
  ];

  const hubs = [
    {
      name: 'Documentation',
      href: '/docs',
      icon: '📚',
      description:
        'Structured guides for HTML, CSS, JavaScript, TypeScript, React, Python, Rust, and Node.js.',
    },
    {
      name: 'Interview Hub',
      href: '/docs/interviews',
      icon: '💼',
      description: '300+ curated interview questions for JavaScript, React, TypeScript, and more.',
    },
    {
      name: 'Cheat Sheets',
      href: '/docs/cheatsheets',
      icon: '📝',
      description:
        '14 quick reference guides for programming languages, Git, tools, and productivity.',
    },
  ];

  return (
    <Layout
      title="Web Development Docs, Tutorials & Cheat Sheets"
      description="Learn web development with clear documentation, practical tutorials, cheat sheets, and interview preparation for JavaScript, React, TypeScript, HTML, CSS, and more."
    >
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <main id="main-content" className={styles.homeMain}>
        {/* Hero Section with Animation */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroAnimation}>
              <span className={styles.floatingEmoji}>💻</span>
              <span className={styles.floatingEmoji}>🚀</span>
              <span className={styles.floatingEmoji}>⚡</span>
            </div>
            <h1 className={styles.heroHeading}>
              Welcome to <span className={styles.gradientText1}>Code</span>
              <span className={styles.gradientText2}>Scrolls</span>
            </h1>
            <p className={styles.heroSubtext}>
              Scroll through code. Learn. Build. Repeat. Master HTML, CSS, JavaScript, TypeScript,
              React, Python, Rust, and Node.js with clear docs, cheat sheets, and interview prep.
            </p>
            <div className={styles.buttonGroup}>
              <Link
                className={styles.btnPrimary}
                href="/docs"
                aria-label="Start learning web development"
              >
                🚀 Start Learning
              </Link>
              <Link
                className={styles.btnSecondary}
                to="/blog"
                aria-label="Read CodeScrolls blog posts"
              >
                📖 Read Blog
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.categorySection}>
          <h2 className={styles.sectionHeading}>Explore Topics</h2>
          <p className={styles.sectionSubtext}>
            Core tracks, cheat sheets, interview prep, and blog posts — from basics to advanced
          </p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.categoryGrid}>
            {categories.map(({ name, href, icon, description }) => (
              <Link
                key={name}
                to={href}
                className={styles.categoryCard}
                aria-label={`Explore ${name} documentation`}
              >
                <img
                  src={useBaseUrl(icon)}
                  alt={`${name} documentation and tutorials`}
                  className={styles.categoryIcon}
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <span className={styles.categoryName}>{name}</span>
                <p className={styles.categoryDescription}>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Statistics Section */}

        {/* Features Highlight Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionHeading}>Why CodeScrolls?</h2>
          <p className={styles.sectionSubtext}>
            Everything you need to accelerate your web development journey
          </p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.featuresGrid}>
            {features.map(({ icon, title, description }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Blog Posts Section */}
        <section className={styles.blogSection}>
          <h2 className={styles.sectionHeading}>Featured Articles</h2>
          <p className={styles.sectionSubtext}>Latest insights and tutorials from our blog</p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.blogGrid}>
            {featuredPosts.map(({ title, description, href, tag }) => (
              <Link
                key={title}
                to={href}
                className={styles.blogCard}
                aria-label={`Read blog post: ${title}`}
              >
                <span className={styles.blogTag}>{tag}</span>
                <h3 className={styles.blogTitle}>{title}</h3>
                <p className={styles.blogDescription}>{description}</p>
                <span className={styles.blogLink}>Read more →</span>
              </Link>
            ))}
          </div>
          <div className={styles.ctaCenter}>
            <Link className={styles.btnOutline} to="/blog" aria-label="View all blog posts">
              View All Posts
            </Link>
          </div>
        </section>

        {/* Resources Hub Section */}
        <section className={styles.hubsSection}>
          <h2 className={styles.sectionHeading}>Learning Resources</h2>
          <p className={styles.sectionSubtext}>Additional resources to boost your learning</p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.hubsGrid}>
            {hubs.map(({ name, href, icon, description }) => (
              <Link
                key={name}
                to={href}
                className={styles.hubCard}
                aria-label={`Explore ${name} resources`}
              >
                <div className={styles.hubIcon}>{icon}</div>
                <h3 className={styles.hubName}>{name}</h3>
                <p className={styles.hubDescription}>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className={styles.quoteSection}>
          <div className={styles.quoteCard}>
            <div className={styles.quoteIcon}>💡</div>
            <blockquote className={styles.quoteText}>
              &ldquo;The journey of a thousand miles begins with a single line of code. Start your
              web development journey with CodeScrolls today.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Ready to Level Up Your Skills?</h2>
            <p className={styles.ctaText}>
              Level up with HTML, CSS, JavaScript, TypeScript, React, Python, Rust, and Node.js on
              CodeScrolls &mdash; free docs, cheat sheets, and interview prep.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className={styles.btnPrimary}
                href="/docs"
                aria-label="Get started with CodeScrolls documentation"
              >
                Get Started Now
              </Link>
              <Link
                className={styles.btnOutlineLight}
                to="https://github.com/Praveenskg/codescrolls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Star CodeScrolls on GitHub (opens in new tab)"
              >
                ⭐ Star on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
