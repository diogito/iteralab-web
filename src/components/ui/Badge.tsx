import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-indigo-500 text-white',
        variant === 'outline' && 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30',
        className
      )}
      {...props}
    />
  );
}
