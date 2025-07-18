import Link from '@docusaurus/Link';
import { Card, CardContent } from './ui/card';

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
    <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {cheatsheets.map(({ title, href, icon }) => (
        <Link key={title} href={href} className='no-underline hover:no-underline'>
          <Card className='border border-border bg-white/70 backdrop-blur-md transition-transform hover:scale-[1.03] dark:bg-[#1e1e1e]/70'>
            <CardContent className='flex flex-col items-center justify-center space-y-2 p-4'>
              <img
                src={icon}
                alt={`${title} icon`}
                className='h-10 object-contain dark:brightness-90'
              />
              <strong className='text-center'>{title}</strong>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
