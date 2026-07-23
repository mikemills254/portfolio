import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { AlertTriangle, FileText, MessageCircle, Receipt } from 'lucide-react';

interface CardVisualProps {
    slug: string;
    className?: string;
}

const DOT_GRID: CSSProperties = {
    backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
    backgroundSize: '16px 16px',
    opacity: 0.6,
};

function VisualFrame({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={`relative w-full h-full overflow-hidden rounded-sm border border-border bg-secondary/30 flex items-center justify-center ${className ?? ''}`}>
            <div className="absolute inset-0 pointer-events-none" style={DOT_GRID} />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

function CivicRagVisual({ className }: { className?: string }) {
    return (
        <VisualFrame className={className}>
            <div className="flex items-center gap-4">
                <div className="w-12 h-14 rounded-sm border border-border bg-card flex flex-col justify-center gap-1.5 p-2.5 shadow-sm">
                    <FileText className="w-3.5 h-3.5 text-muted-foreground mb-0.5" />
                    <div className="h-1 bg-muted-foreground/30 rounded-full" />
                    <div className="h-1 bg-muted-foreground/30 rounded-full w-3/4" />
                    <div className="h-1 bg-muted-foreground/30 rounded-full w-1/2" />
                </div>
                <div className="flex flex-col gap-1">
                    {[0, 1, 2].map((i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-primary/50" />
                    ))}
                </div>
                <div className="bg-primary text-primary-foreground rounded-lg rounded-bl-sm px-3.5 py-3 shadow-sm flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <div className="flex flex-col gap-1">
                        <div className="h-1 bg-primary-foreground/60 rounded-full w-10" />
                        <div className="h-1 bg-primary-foreground/60 rounded-full w-7" />
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}

function BusinessPlatformVisual({ className }: { className?: string }) {
    const booked = new Set([2, 3, 9, 10, 11, 16]);
    return (
        <VisualFrame className={className}>
            <div className="flex items-center gap-5">
                <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 21 }, (_, i) => (
                        <span
                            key={i}
                            className={`w-2.5 h-2.5 rounded-[2px] ${booked.has(i) ? 'bg-primary' : 'bg-border'}`}
                        />
                    ))}
                </div>
                <div className="bg-card border border-border rounded-sm px-3.5 py-3 shadow-sm flex items-center gap-2.5">
                    <Receipt className="w-4 h-4 text-primary" />
                    <div className="flex flex-col gap-1">
                        <div className="h-1 bg-muted-foreground/30 rounded-full w-10" />
                        <div className="h-1 bg-muted-foreground/30 rounded-full w-6" />
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}

function PharmacyVisual({ className }: { className?: string }) {
    const heights = [10, 16, 8, 20, 12];
    const lowStockIndex = 2;
    return (
        <VisualFrame className={className}>
            <div className="flex items-end gap-2.5">
                {heights.map((h, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                        {i === lowStockIndex && (
                            <AlertTriangle className="w-3.5 h-3.5 text-destructive mb-1.5" />
                        )}
                        <div
                            className={`w-4 rounded-t-sm ${i === lowStockIndex ? 'bg-destructive/60' : 'bg-primary/70'}`}
                            style={{ height: `${h * 3}px` }}
                        />
                        <div className="w-5 h-2 rounded-b-sm bg-card border border-border border-t-0" />
                    </div>
                ))}
            </div>
        </VisualFrame>
    );
}

const VISUALS: Record<string, (props: { className?: string }) => ReactElement> = {
    'civic-rag-assistant': CivicRagVisual,
    'business-management-platform': BusinessPlatformVisual,
    'pharmacy-inventory-system': PharmacyVisual,
};

export function CardVisual({ slug, className }: CardVisualProps) {
    const Visual = VISUALS[slug];
    if (!Visual) return null;
    return <Visual className={className} />;
}
