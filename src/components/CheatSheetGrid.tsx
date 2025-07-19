import Link from '@docusaurus/Link';
import './CheatSheetGrid.css';

const cheatsheets = [
  { title: 'JavaScript', href: './cheatsheets/javascript', icon: '/img/skills/JavaScript.svg' },
  { title: 'TypeScript', href: './cheatsheets/typescript', icon: '/img/skills/TypeScript.svg' },
  { title: 'React', href: './cheatsheets/react', icon: '/img/skills/React.svg' },
  { title: 'Node.js', href: './cheatsheets/nodejs', icon: '/img/skills/NodeJS.svg' },
  { title: 'Markdown', href: './cheatsheets/markdown', icon: '/img/skills/Markdown.svg' },
  { title: 'Git', href: './cheatsheets/git', icon: '/img/skills/Git.svg' },
  { title: 'Linux CLI', href: './cheatsheets/linux', icon: '/img/skills/Linux.svg' },
  { title: 'VS Code', href: './cheatsheets/vscode', icon: '/img/skills/VSCode.svg' },
];

export default function CheatSheetGrid() {
  return (
    <div className='cheatsheet-grid'>
      {cheatsheets.map(({ title, href, icon }) => (
        <Link key={title} href={href} className='cheatsheet-card'>
          <img src={icon} alt={`${title} icon`} className='cheatsheet-icon' />
          <strong className='cheatsheet-title'>{title}</strong>
        </Link>
      ))}
    </div>
  );
}
