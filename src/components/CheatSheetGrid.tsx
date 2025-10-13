import Link from '@docusaurus/Link';
import './CheatSheetGrid.css';

const cheatsheets = [
  {
    title: 'HTML',
    href: './cheatsheets/html',
    icon: '/img/skills/Html.png',
    description:
      'Essential HTML elements, semantic markup, forms, accessibility, and responsive design patterns.',
  },
  {
    title: 'JavaScript',
    href: './cheatsheets/javascript',
    icon: '/img/skills/JavaScript.png',
    description:
      'Core JavaScript syntax, ES6+ features, DOM manipulation, async programming, and best practices.',
  },
  {
    title: 'TypeScript',
    href: './cheatsheets/typescript',
    icon: '/img/skills/TypeScript.png',
    description:
      'Type-safe JavaScript with interfaces, generics, utility types, and advanced type patterns.',
  },
  {
    title: 'React',
    href: './cheatsheets/react',
    icon: '/img/skills/React.png',
    description:
      'React hooks, components, state management, Context API, and modern React patterns.',
  },
  {
    title: 'Node.js',
    href: './cheatsheets/nodejs',
    icon: '/img/skills/NodeJS.png',
    description:
      'Server-side JavaScript, Express.js, APIs, file system, and backend development essentials.',
  },
  {
    title: 'Markdown',
    href: './cheatsheets/markdown',
    icon: '/img/skills/Markdown.png',
    description:
      'Markdown syntax, formatting, tables, links, images, and documentation writing tips.',
  },
  {
    title: 'Git',
    href: './cheatsheets/git',
    icon: '/img/skills/Git.png',
    description:
      'Version control commands, branching strategies, merge conflicts, and Git workflow essentials.',
  },
  {
    title: 'Linux CLI',
    href: './cheatsheets/linux',
    icon: '/img/skills/Linux.png',
    description:
      'Essential Linux commands, file operations, permissions, processes, and shell scripting basics.',
  },
  {
    title: 'VS Code',
    href: './cheatsheets/vscode',
    icon: '/img/skills/VSCode.png',
    description: 'VS Code shortcuts, extensions, debugging, customization, and productivity tips.',
  },
  {
    title: 'CSS',
    href: './cheatsheets/css',
    icon: '/img/skills/Css.png',
    description:
      'CSS selectors, properties, layouts, animations, responsive design, and modern CSS features.',
  },
];

export default function CheatSheetGrid() {
  return (
    <div className='cheatsheet-grid'>
      {cheatsheets.map(({ title, href, icon, description }) => (
        <Link key={title} href={href} className='cheatsheet-card'>
          <img src={icon} alt={`${title} icon`} className='cheatsheet-icon' loading='lazy' />
          <strong className='cheatsheet-title'>{title}</strong>
          <p className='cheatsheet-description'>{description}</p>
        </Link>
      ))}
    </div>
  );
}
