import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Codepedia is your dev library for language docs, cheat sheets, and more."
    >
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>{siteConfig.title}</span> 🚀
          </h1>
          <p className={styles.subtitle}>
            Your one-stop hub for coding cheat sheets, language guides, Git tricks, and dev notes.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/javascript">
              📘 Start Learning JavaScript
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Praveenskg/codepedia"
              target="_blank"
            >
              🌟 GitHub Repo
            </Link>
          </div>
        </section>

        <section className={styles.categories}>
          <img
            src={useBaseUrl('/img/undraw_docusaurus_react.svg')}
            alt="Code Categories"
            className={styles.categoryImage}
          />
          <h2 className={styles.categoriesHeading}>📂 Categories</h2>
          <hr className={styles.divider} />

          <div className={styles.grid}>
            <Link to="/docs/javascript" className={styles.card}>
              <img
                src={useBaseUrl('/img/skills/JavaScript.svg')}
                alt="JavaScript"
                className={styles.cardIcon}
              />
              JavaScript
            </Link>
            <Link to="/docs/typescript" className={styles.card}>
              <img
                src={useBaseUrl('/img/skills/TypeScript.svg')}
                alt="TypeScript"
                className={styles.cardIcon}
              />
              TypeScript
            </Link>
            <Link to="/docs/react" className={styles.card}>
              <img
                src={useBaseUrl('/img/skills/React-Dark.svg')}
                alt="React"
                className={styles.cardIcon}
              />
              React
            </Link>
            <Link to="/docs/git" className={styles.card}>
              <img src={useBaseUrl('/img/skills/Git.svg')} alt="Git" className={styles.cardIcon} />
              Git & GitHub
            </Link>
            <Link to="/docs/database" className={styles.card}>
              <img
                src={useBaseUrl('/img/skills/Supabase-Light.svg')}
                alt="Database"
                className={styles.cardIcon}
              />
              Databases
            </Link>
            <Link to="/docs/linux" className={styles.card}>
              <img
                src={useBaseUrl('/img/skills/Linux-Light.svg')}
                alt="Linux"
                className={styles.cardIcon}
              />
              Linux
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
