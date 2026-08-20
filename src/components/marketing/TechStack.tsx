import { Cpu, Bot, GitBranch, Database, MessageSquare, Globe } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const technologies = [
  { name: 'OpenAI', icon: Cpu },
  { name: 'Anthropic Claude', icon: Bot },
  { name: 'LangChain / LangGraph', icon: GitBranch },
  { name: 'Bases vectoriales', icon: Database },
  { name: 'WhatsApp Business API', icon: MessageSquare },
  { name: 'Next.js', icon: Globe },
];

export function TechStack() {
  return (
    <section className="py-12 border-b border-zinc-200 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-xs uppercase tracking-widest text-zinc-500 mb-8">
            Construido con tecnología de producción
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:border-indigo-500/50 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <tech.icon className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors duration-300" />
                <span className="font-display font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
