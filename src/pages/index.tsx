import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const categories = [
    { name: 'JavaScript', href: '/docs/javascript', icon: '/img/skills/JavaScript.svg' },
    { name: 'TypeScript', href: '/docs/typescript', icon: '/img/skills/TypeScript.svg' },
    { name: 'React', href: '/docs/react', icon: '/img/skills/React.svg' },
    { name: 'Git & GitHub', href: '/docs/git', icon: '/img/skills/Git.svg' },
    { name: 'Databases', href: '/docs/database', icon: '/img/skills/Supabase.svg' },
    { name: 'Linux', href: '/docs/linux', icon: '/img/skills/Linux.svg' },
  ];

  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description={siteConfig.tagline}>
      <main className={styles.homeMain}>
        <section className={styles.introSection}>
          <h1 className={styles.introHeading}>
            Welcome to <span className={styles.gradientText1}>Code</span>
            <span className={styles.gradientText2}>Pedia</span> 🚀
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
              href='https://github.com/Praveenskg/codepedia'
              target='_blank'
              rel='noopener noreferrer'
            >
              🌟 GitHub Repo
            </Link>
          </div>
        </section>
        <section className={styles.categorySection}>
          <img
            src={useBaseUrl('/img/undraw_docusaurus_react.svg')}
            alt='Code Categories'
            className={styles.categoryImg}
            loading='lazy'
          />
          <h2 className={styles.categoryHeading}>📂 Categories</h2>
          <hr className={styles.categoryUnderline} />
          <div className={styles.categoryGrid}>
            {categories.map(({ name, href, icon }) => (
              <Link key={name} to={href} className={styles.categoryCard}>
                <img src={useBaseUrl(icon)} alt={name} className={styles.categoryIcon} />
                <span className={styles.categoryName}>{name}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
