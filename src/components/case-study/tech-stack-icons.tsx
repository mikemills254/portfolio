import { TECH_ICONS } from '../../data/tech-icons';

interface TechStackIconsProps {
    stack: string[];
    size?: 'sm' | 'md';
}

export function TechStackIcons({ stack, size = 'sm' }: TechStackIconsProps) {
    const box = size === 'md' ? 'w-12 h-12' : 'w-10 h-10';
    const iconSize = size === 'md' ? 22 : 18;

    return (
        <div className="flex flex-wrap gap-2">
            {stack.map((name) => {
                const Icon = TECH_ICONS[name];
                return (
                    <div
                        key={name}
                        title={name}
                        className={`${box} rounded-sm border border-border bg-secondary/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors`}
                    >
                        {Icon ? <Icon size={iconSize} /> : <span className="text-[10px] font-semibold">{name.slice(0, 2)}</span>}
                        <span className="sr-only">{name}</span>
                    </div>
                );
            })}
        </div>
    );
}
