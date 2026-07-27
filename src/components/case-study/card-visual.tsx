import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    CalendarClock,
    FileText,
    type LucideIcon,
    MessageCircle,
    Network,
    Pill,
    Receipt,
    RefreshCw,
} from 'lucide-react';

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
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 15%, hsl(var(--primary) / 0.08), transparent 65%)' }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

function FlowConnector({ icon: Icon }: { icon: LucideIcon }) {
    return (
        <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-px bg-border" />
            <div className="relative w-9 h-9 rounded-full border border-primary/30 bg-card flex items-center justify-center shadow-sm">
                <Icon className="w-4 h-4 text-primary" />
                <motion.span
                    className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>
            <span className="w-3 h-px bg-border" />
        </div>
    );
}

function CivicRagVisual({ className }: { className?: string }) {
    return (
        <VisualFrame className={className}>
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-14 shrink-0">
                    <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-sm border border-border bg-card/40" />
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-sm border border-border bg-card/70" />
                    <div className="relative w-12 h-14 rounded-sm border border-border bg-card flex flex-col justify-center gap-1.5 p-2.5 shadow-sm">
                        <FileText className="w-3.5 h-3.5 text-muted-foreground mb-0.5" />
                        <div className="h-1 bg-muted-foreground/30 rounded-full" />
                        <div className="h-1 bg-muted-foreground/30 rounded-full w-3/4" />
                        <div className="h-1 bg-muted-foreground/30 rounded-full w-1/2" />
                    </div>
                </div>

                <FlowConnector icon={Network} />

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
            <div className="flex items-center gap-3">
                <div className="rounded-sm border border-border bg-card p-2.5 shadow-sm shrink-0">
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 21 }, (_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-[2px] ${booked.has(i) ? 'bg-primary' : 'bg-border'}`}
                            />
                        ))}
                    </div>
                </div>

                <FlowConnector icon={RefreshCw} />

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
            <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center shadow-sm shrink-0">
                    <Pill className="w-4 h-4 text-primary" />
                </div>

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

                <div className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center shadow-sm shrink-0">
                    <CalendarClock className="w-4 h-4 text-muted-foreground" />
                </div>
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
