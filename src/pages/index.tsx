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
      name: 'JavaScript',
      href: '/javascript',
      icon: '/img/skills/JavaScript.png',
      description: 'Variables, functions, arrays, ES6+, async/await, DOM, and design patterns.',
    },
    {
      name: 'TypeScript',
      href: '/typescript',
      icon: '/img/skills/TypeScript.png',
      description: 'Static typing, interfaces, generics, and code reliability for large projects.',
    },
    {
      name: 'React',
      href: '/react',
      icon: '/img/skills/React.png',
      description: 'Hooks, Components, Props, State, Context API, and modern UI design patterns.',
    },
    {
      name: 'Interviews',
      href: '/interviews',
      icon: '/img/skills/NodeJS.png',
      description: 'Common interview questions for JavaScript, React, TypeScript, and Node.js.',
    },
    {
      name: 'Git & GitHub',
      href: '/cheatsheets/git',
      icon: '/img/skills/Git.png',
      description: 'Version control, collaboration, pull requests, and best practices.',
    },
    {
      name: 'Linux',
      href: '/cheatsheets/linux',
      icon: '/img/skills/Linux.png',
      description: 'Control servers and systems using Linux commands and workflows.',
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
      title: 'JavaScript Hoisting Explained',
      description: 'Understanding hoisting behavior for variables and functions.',
      href: '/blog/javascript-hoisting',
      tag: 'JavaScript',
    },
  ];

  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Docs',
      description: '100+ documentation pages covering JavaScript, React, TypeScript, and more.',
    },
    {
      icon: '💡',
      title: 'Interview Ready',
      description: '300+ curated interview questions with detailed explanations.',
    },
    {
      icon: '⚡',
      title: 'Quick Reference',
      description: 'Cheat sheets for instant access to syntax and commands.',
    },
    {
      icon: '🎯',
      title: 'Practical Examples',
      description: 'Real-world code examples and best practices.',
    },
    {
      icon: '🔄',
      title: 'Always Updated',
      description: 'Continuously updated with the latest web development trends.',
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Beautiful dark mode for comfortable reading anytime.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Documentation Pages' },
    { value: '300+', label: 'Interview Questions' },
    { value: '8+', label: 'Blog Posts' },
    { value: '6+', label: 'Cheat Sheets' },
  ];

  const hubs = [
    {
      name: 'Interview Hub',
      href: '/interviews',
      icon: '💼',
      description: 'Curated interview questions for JavaScript, React, TypeScript, and more.',
    },
    {
      name: 'Cheat Sheets',
      href: '/cheatsheets',
      icon: '📝',
      description:
        'Quick reference guides for programming languages, Git, tools, and productivity.',
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
              Your comprehensive hub for modern web development. Master JavaScript, React,
              TypeScript, and more with clear documentation, practical examples, and expert
              insights.
            </p>
            <div className={styles.buttonGroup}>
              <Link className={styles.btnPrimary} href='/javascript'>
                🚀 Start Learning
              </Link>
              <Link className={styles.btnSecondary} to='/blog'>
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
            Dive deep into the technologies that power modern web development
          </p>
          <hr className={styles.sectionUnderline} />
          <div className={styles.categoryGrid}>
            {categories.map(({ name, href, icon, description }) => (
              <Link key={name} to={href} className={styles.categoryCard}>
                <img
                  src={useBaseUrl(icon)}
                  alt={name}
                  className={styles.categoryIcon}
                  loading='lazy'
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
            <Link className={styles.btnOutline} to='/blog'>
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
              Join thousands of developers learning modern web development with CodeScrolls. Start
              your journey today &ndash; it&apos;s completely free!
            </p>
            <div className={styles.ctaButtons}>
              <Link className={styles.btnPrimary} href='/javascript'>
                Get Started Now
              </Link>
              <Link
                className={styles.btnOutlineLight}
                to='https://github.com/praveenskg/codescrolls'
                target='_blank'
                rel='noopener noreferrer'
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
