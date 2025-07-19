import Link from '@docusaurus/Link';
import './CheatSheetGrid.css';

const cheatsheets = [
  { title: 'JavaScript', href: './cheatsheets/javascript', icon: '/img/skills/JavaScript.png' },
  { title: 'TypeScript', href: './cheatsheets/typescript', icon: '/img/skills/TypeScript.png' },
  { title: 'React', href: './cheatsheets/react', icon: '/img/skills/React.png' },
  { title: 'Node.js', href: './cheatsheets/nodejs', icon: '/img/skills/NodeJS.png' },
  { title: 'Markdown', href: './cheatsheets/markdown', icon: '/img/skills/Markdown.png' },
  { title: 'Git', href: './cheatsheets/git', icon: '/img/skills/Git.png' },
  { title: 'Linux CLI', href: './cheatsheets/linux', icon: '/img/skills/Linux.png' },
  { title: 'VS Code', href: './cheatsheets/vscode', icon: '/img/skills/VSCode.png' },
];

export default function CheatSheetGrid() {
  return (
    <div className='cheatsheet-grid'>
      {cheatsheets.map(({ title, href, icon }) => (
        <Link key={title} href={href} className='cheatsheet-card'>
          <img src={icon} alt={`${title} icon`} className='cheatsheet-icon' loading='lazy' />
          <strong className='cheatsheet-title'>{title}</strong>
        </Link>
      ))}
    </div>
  );
}
