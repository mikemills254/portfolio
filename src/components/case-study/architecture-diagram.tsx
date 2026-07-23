import { ArrowDown, ArrowRight } from 'lucide-react';

interface ArchitectureDiagramProps {
    stages: string[][];
}

export function ArchitectureDiagram({ stages }: ArchitectureDiagramProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-3">
            {stages.map((stage, i) => (
                <div key={i} className="flex flex-col lg:flex-row items-center gap-3">
                    <div className="flex flex-col gap-2">
                        {stage.map((node) => (
                            <div
                                key={node}
                                className="border border-border bg-card rounded-sm px-4 py-3 text-xs sm:text-sm font-medium text-center whitespace-nowrap"
                            >
                                {node}
                            </div>
                        ))}
                    </div>
                    {i < stages.length - 1 && (
                        <div className="text-muted-foreground shrink-0">
                            <ArrowDown className="w-4 h-4 lg:hidden" />
                            <ArrowRight className="w-4 h-4 hidden lg:block" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
