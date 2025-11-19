import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const categories = [
    {
      name: 'HTML',
      href: '/docs/html',
      icon: '/img/skills/Html.png',
      description:
        'Complete HTML guide from basics to advanced: semantic markup, forms, accessibility, Canvas, SVG, Web Components, and SEO.',
    },
    {
      name: 'JavaScript',
      href: '/docs/javascript',
      icon: '/img/skills/JavaScript.png',
      description:
        'Master JavaScript fundamentals, ES6+, DOM manipulation, async programming, design patterns, and modern development practices.',
    },
    {
      name: 'TypeScript',
      href: '/docs/typescript',
      icon: '/img/skills/TypeScript.png',
      description:
        'Type-safe JavaScript with interfaces, generics, advanced types, and scalable application development.',
    },
    {
      name: 'React',
      href: '/docs/react',
      icon: '/img/skills/React.png',
      description:
        'Modern React development: hooks, components, state management, Context API, and advanced patterns.',
    },
    {
      name: 'CSS',
      href: '/docs/css',
      icon: '/img/skills/Css.png',
      description:
        'Complete CSS mastery: layouts, animations, responsive design, Flexbox, Grid, and modern CSS features.',
    },
    {
      name: 'Node.js',
      href: '/docs/cheatsheets/nodejs',
      icon: '/img/skills/NodeJS.png',
      description:
        'Server-side JavaScript with Express.js, APIs, databases, authentication, and scalable backend development.',
    },
    {
      name: 'Interviews',
      href: '/docs/interviews',
      icon: '/img/skills/NodeJS.png',
      description:
        'Comprehensive interview preparation for JavaScript, React, TypeScript, HTML, CSS, Node.js, and system design.',
    },
    {
      name: 'Git & GitHub',
      href: '/docs/cheatsheets/git',
      icon: '/img/skills/Git.png',
      description:
        'Version control mastery: Git commands, GitHub workflows, collaboration, and DevOps best practices.',
    },
    {
      name: 'Linux',
      href: '/docs/cheatsheets/linux',
      icon: '/img/skills/Linux.png',
      description:
        'Linux system administration: commands, server management, shell scripting, and development environments.',
    },
  ];

  const featuredPosts = [
    {
      title: 'Understanding JavaScript Closures',
      description: 'Deep dive into closures, lexical scoping, and practical use cases.',
      href: '/blog/javascript-closures',
      tag: 'JavaScript',
    },
    {
      title: 'Complete Guide to React Hooks',
      description: 'Master useState, useEffect, useContext, and custom hooks.',
      href: '/blog/complete-guide-react-hooks',
      tag: 'React',
    },
    {
      title: 'Understanding useEffect Hook in React',
      description:
        'Learn how useEffect works in React with practical examples and common pitfalls.',
      href: '/blog/react-useeffect-hook',
      tag: 'React',
    },
  ];

  const features = [
    {
      icon: '📚',
      title: 'Complete Documentation',
      description:
        '111+ comprehensive documentation pages covering HTML, JavaScript, CSS, React, and TypeScript from basics to advanced.',
    },
    {
      icon: '💡',
      title: 'Interview Ready',
      description:
        '300+ curated interview questions with detailed explanations for technical interviews.',
    },
    {
      icon: '🎨',
      title: 'Interactive Examples',
      description:
        'Live code examples including Canvas games, SVG animations, and Web Components demos.',
    },
    {
      icon: '🎯',
      title: 'Professional Quality',
      description:
        'Industry-standard best practices, accessibility compliance, and SEO optimization.',
    },
    {
      icon: '🔄',
      title: 'Always Updated',
      description: 'Continuously updated with the latest web development trends and technologies.',
    },
    {
      icon: '♿',
      title: 'Accessibility First',
      description:
        'WCAG compliant content with screen reader support and inclusive design principles.',
    },
  ];

  const stats = [
    { value: '111+', label: 'Documentation Pages' },
    { value: '300+', label: 'Interview Questions' },
    { value: '8+', label: 'Blog Posts' },
    { value: '10+', label: 'Cheat Sheets' },
  ];

  const hubs = [
    {
      name: 'Documentation',
      href: '/docs',
      icon: '📚',
      description: 'Comprehensive tutorials and guides for web development technologies.',
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
        '10+ quick reference guides for programming languages, Git, tools, and productivity.',
    },
  ];

  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.homeMain}>
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
              Your comprehensive hub for modern web development. Master HTML, JavaScript, CSS,
              React, TypeScript, and more with clear documentation, practical examples, and expert
              insights.
            </p>
            <div className={styles.buttonGroup}>
              <Link className={styles.btnPrimary} href="/docs">
                🚀 Start Learning
              </Link>
              <Link className={styles.btnSecondary} to="/blog">
                📖 Read Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </section>

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

        {/* Explore Topics Section */}
        <section className={styles.categorySection}>
          <h2 className={styles.sectionHeading}>Explore Topics</h2>
          <p className={styles.sectionSubtext}>
            Comprehensive documentation covering HTML, JavaScript, CSS, React, and TypeScript from
            basics to advanced concepts
          </p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.categoryGrid}>
            {categories.map(({ name, href, icon, description }) => (
              <Link key={name} to={href} className={styles.categoryCard}>
                <img
                  src={useBaseUrl(icon)}
                  alt={name}
                  className={styles.categoryIcon}
                  loading="lazy"
                />
                <span className={styles.categoryName}>{name}</span>
                <p className={styles.categoryDescription}>{description}</p>
              </Link>
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
              <Link key={title} to={href} className={styles.blogCard}>
                <span className={styles.blogTag}>{tag}</span>
                <h3 className={styles.blogTitle}>{title}</h3>
                <p className={styles.blogDescription}>{description}</p>
                <span className={styles.blogLink}>Read more →</span>
              </Link>
            ))}
          </div>
          <div className={styles.ctaCenter}>
            <Link className={styles.btnOutline} to="/blog">
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
              <Link key={name} to={href} className={styles.hubCard}>
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
              Join thousands of developers mastering HTML, JavaScript, CSS, React, and TypeScript
              with CodeScrolls. Start your journey today &ndash; it&apos;s completely free!
            </p>
            <div className={styles.ctaButtons}>
              <Link className={styles.btnPrimary} href="/docs/javascript">
                Get Started Now
              </Link>
              <Link
                className={styles.btnOutlineLight}
                to="https://github.com/praveenskg/codescrolls"
                target="_blank"
                rel="noopener noreferrer"
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
