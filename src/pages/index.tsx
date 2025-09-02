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
      name: 'Git & GitHub',
      href: '/cheatsheets/git',
      icon: '/img/skills/Git.png',
      description: 'Version control, collaboration, pull requests, and best practices.',
    },
    {
      name: 'Databases',
      href: '/database',
      icon: '/img/skills/Supabase.png',
      description:
        'Learn SQL/NoSQL databases with hands-on experience using Supabase & PostgreSQL.',
    },
    {
      name: 'Linux',
      href: '/cheatsheets/linux',
      icon: '/img/skills/Linux.png',
      description: 'Control servers and systems using Linux commands and workflows.',
    },
  ];

  const hubs = [
    {
      name: 'Interview Hub',
      href: '/interviews',
      description: 'Curated interview questions for JavaScript, React, TypeScript, and more.',
    },
    {
      name: 'Cheat Sheets',
      href: '/cheatsheets',
      description:
        'Quick reference guides for programming languages, Git, tools, and productivity.',
    },
  ];

  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.homeMain}>
        <section className={styles.introSection}>
          <h1 className={styles.introHeading}>
            Welcome to <span className={styles.gradientText1}>Code</span>
            <span className={styles.gradientText2}>Scrolls</span>
          </h1>
          <p className={styles.introSubtext}>
            Your one-stop hub for coding cheat sheets, language guides, Git tricks, and dev notes.
          </p>
          <div className={styles.buttonGroup}>
            <Link className={styles.btnBlue} href='/javascript'>
              Start Learning JavaScript
            </Link>
            <Link
              className={styles.btnPurple}
              to='https://github.com/praveenskg/codescrolls'
              target='_blank'
            >
              Contribute on GitHub
            </Link>
            <Link className={styles.btnBlue} to='/blog'>
              Visit Blog
            </Link>
          </div>
        </section>

        <section className={styles.categorySection}>
          <img
            src={useBaseUrl('/img/react.png')}
            alt='Code Categories'
            className={styles.categoryImg}
            loading='eager'
          />
          <h2 className={styles.categoryHeading}>Explore Topics</h2>
          <hr className={styles.categoryUnderline} />
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

        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeading}>Resources & Hubs</h2>
          <hr className={styles.categoryUnderline} />
          <div className={styles.categoryGrid}>
            {hubs.map(({ name, href, description }) => (
              <Link key={name} to={href} className={styles.categoryCard}>
                <h3 className={styles.categoryName}>{name}</h3>
                <p className={styles.categoryDescription}>{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeading}>Why Use CodeScrolls?</h2>
          <hr className={styles.categoryUnderline} />
          <ul className={styles.overviewList}>
            <li>Professional and concise documentation for web development.</li>
            <li>Covers frontend & backend topics, frameworks, and tools.</li>
            <li>Ideal for developers preparing for interviews or polishing skills.</li>
            <li>Continuously updated with latest industry practices.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
