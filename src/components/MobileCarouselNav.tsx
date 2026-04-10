import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselNavProps {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  labels?: string[];
}

const MobileCarouselNav = ({ active, total, onPrev, onNext, labels }: MobileCarouselNavProps) => {
  if (total <= 1) return null;

  return (
    <div className="flex md:hidden items-center justify-center gap-3 mt-4">
      <button
        onClick={onPrev}
        className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center active:scale-95 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4 text-primary" />
      </button>

      <div className="flex items-center gap-2 min-w-[80px] justify-center">
        {labels ? (
          <span className="text-sm font-body font-medium text-foreground">
            {labels[active]}
          </span>
        ) : (
          <span className="text-sm font-body text-muted-foreground tabular-nums">
            <span className="text-foreground font-medium">{active + 1}</span>
            <span className="mx-1">/</span>
            <span>{total}</span>
          </span>
        )}
      </div>

      <button
        onClick={onNext}
        className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center active:scale-95 transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4 text-primary" />
      </button>
    </div>
  );
};

export default MobileCarouselNav;
