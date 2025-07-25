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
      href: '/docs/javascript',
      icon: '/img/skills/JavaScript.png',
      description:
        'Learn the most popular programming language of the web. Master variables, functions, DOM manipulation, and ES6+ features.',
    },
    {
      name: 'TypeScript',
      href: '/docs/typescript',
      icon: '/img/skills/TypeScript.png',
      description:
        'TypeScript is JavaScript with superpowers. Add static typing, interfaces, and make your code safer and scalable.',
    },
    {
      name: 'React',
      href: '/docs/react',
      icon: '/img/skills/React.png',
      description:
        'Build dynamic and fast UIs with React. Learn about components, hooks, state management, and the React ecosystem.',
    },
    {
      name: 'Git & GitHub',
      href: '/docs/git',
      icon: '/img/skills/Git.png',
      description:
        'Version control your projects with Git. Learn how to collaborate using GitHub, pull requests, and best practices.',
    },
    {
      name: 'Databases',
      href: '/docs/database',
      icon: '/img/skills/Supabase.png',
      description:
        'Understand the basics of SQL and NoSQL databases. Get hands-on with tools like Supabase and PostgreSQL.',
    },
    {
      name: 'Linux',
      href: '/docs/linux',
      icon: '/img/skills/Linux.png',
      description:
        'Navigate and control systems using Linux commands. Perfect for developers and server-side operations.',
    },
  ];

  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.homeMain}>
        <section className={styles.introSection}>
          <h1 className={styles.introHeading}>
            Welcome to <span className={styles.gradientText1}>Code</span>
            <span className={styles.gradientText2}>Scrolls</span> 🚀
          </h1>
          <p className={styles.introSubtext}>
            Your one-stop hub for coding cheat sheets, language guides, Git tricks, and dev notes.
          </p>
          <div className={styles.buttonGroup}>
            <Link className={styles.btnBlue} href='/docs/javascript'>
              Start Learning JavaScript
            </Link>
            <Link
              className={styles.btnPurple}
              href='https://github.com/Praveenskg/codescrolls'
              target='_blank'
              rel='noopener noreferrer'
            >
              🌟 GitHub Repo
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
          <h2 className={styles.categoryHeading}>Categories</h2>
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
      </main>
    </Layout>
  );
}
