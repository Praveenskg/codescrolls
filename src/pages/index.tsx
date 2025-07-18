import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const categories = [
    {
      name: 'JavaScript',
      href: '/docs/javascript',
      icon: '/img/skills/JavaScript.svg',
    },
    {
      name: 'TypeScript',
      href: '/docs/typescript',
      icon: '/img/skills/TypeScript.svg',
    },
    {
      name: 'React',
      href: '/docs/react',
      icon: '/img/skills/React.svg',
    },
    {
      name: 'Git & GitHub',
      href: '/docs/git',
      icon: '/img/skills/Git.svg',
    },
    {
      name: 'Databases',
      href: '/docs/database',
      icon: '/img/skills/Supabase.svg',
    },
    {
      name: 'Linux',
      href: '/docs/linux',
      icon: '/img/skills/Linux.svg',
    },
  ];

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description='Codepedia is your dev library for language docs, cheat sheets, and more.'
    >
      <main className='flex flex-col items-center justify-center px-4 py-12 md:py-16'>
        <section className='max-w-3xl text-center'>
          <h1 className='mb-4 text-center text-4xl font-bold md:text-5xl'>
            Welcome to{' '}
            <span className='bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Code
            </span>
            <span className='bg-linear-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent'>
              Pedia
            </span>{' '}
            🚀
          </h1>
          <p className='mb-8 text-lg text-gray-600 dark:text-gray-300'>
            Your one-stop hub for coding cheat sheets, language guides, Git tricks, and dev notes.
          </p>
          <div className='mt-6 flex flex-wrap justify-center gap-4'>
            <Link
              href='/docs/javascript'
              className='flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:no-underline hover:shadow-2xl'
            >
              Start Learning JavaScript
            </Link>
            <Link
              href='https://github.com/Praveenskg/codepedia'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:no-underline hover:shadow-2xl'
            >
              🌟 GitHub Repo
            </Link>
          </div>
        </section>

        <section className='mt-16 w-full max-w-6xl text-center'>
          <img
            src={useBaseUrl('/img/undraw_docusaurus_react.svg')}
            alt='Code Categories'
            className='mx-auto mb-6 h-48'
            loading='lazy'
          />
          <h2 className='mb-2 text-2xl font-semibold'>📂 Categories</h2>
          <hr className='mx-auto mb-6 h-2 w-24 rounded-full border-0 bg-linear-to-r from-blue-500 to-green-500' />
          <div className='mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3'>
            {categories.map(({ name, href, icon }) => (
              <Link
                key={name}
                to={href}
                className='flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:no-underline hover:shadow-[0_10px_30px_rgba(127,90,240,0.35)] dark:border-gray-800'
              >
                <img src={useBaseUrl(icon)} alt={name} className='h-10' />
                <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>{name}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
