import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'muted' | 'highlight';
}

const variants = {
  default: 'bg-zinc-900 border-zinc-800',
  muted: 'bg-zinc-900/50 border-zinc-800/50',
  highlight: 'bg-zinc-900 border-indigo-500/50 ring-1 ring-indigo-500/20',
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
