import Link from '@docusaurus/Link';
import './CheatSheetGrid.css';

const interviews = [
  {
    title: 'HTML',
    href: './interviews/html',
    icon: '/img/skills/Html.png',
    description: 'Tags, semantics, forms, accessibility, and HTML5 features.',
  },
  {
    title: 'CSS',
    href: './interviews/css',
    icon: '/img/skills/Css.png',
    description: 'Selectors, flexbox, grid, animations, and responsive design.',
  },
  {
    title: 'JavaScript',
    href: './interviews/javascript',
    icon: '/img/skills/JavaScript.png',
    description: 'Core concepts, ES6+, DOM, and tricky interview questions.',
  },
  {
    title: 'TypeScript',
    href: './interviews/typescript',
    icon: '/img/skills/TypeScript.png',
    description: 'Strong typing, interfaces, generics, and advanced TS features.',
  },
  {
    title: 'React',
    href: './interviews/react',
    icon: '/img/skills/React.png',
    description: 'Hooks, state management, lifecycle, and real-world React questions.',
  },
  {
    title: 'Node.js',
    href: './interviews/nodejs',
    icon: '/img/skills/NodeJS.png',
    description: 'Event loop, async programming, Express, and backend challenges.',
  },
];

export default function InterviewGrid() {
  return (
    <div className='cheatsheet-grid'>
      {interviews.map(({ title, href, icon, description }) => (
        <Link key={title} href={href} className='cheatsheet-card'>
          <img src={icon} alt={`${title} icon`} className='cheatsheet-icon' loading='lazy' />
          <strong className='cheatsheet-title'>{title}</strong>
          <p className='cheatsheet-description'>{description}</p>
        </Link>
      ))}
    </div>
  );
}
