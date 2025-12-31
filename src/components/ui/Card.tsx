import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'muted' | 'highlight';
}

const variants = {
  default: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none',
  muted: 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200/50 dark:border-zinc-800/50 shadow-md shadow-zinc-200/30 dark:shadow-none',
  highlight: 'bg-white dark:bg-zinc-900 border-indigo-500/50 ring-1 ring-indigo-500/20 shadow-lg shadow-indigo-500/10 dark:shadow-none',
};

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
