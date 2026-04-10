import React, { useId } from "react";

/** Soft mountain silhouette divider — place between sections */
export const MountainDivider = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[40px] md:h-[60px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 80L60 72C120 64 240 48 360 42C480 36 600 40 720 38C840 36 960 28 1080 26C1200 24 1320 28 1380 30L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

/** Wavy line divider — organic, subtle */
export const WaveDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden leading-[0] ${className}`}>
    <svg
      viewBox="0 0 1440 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[20px] md:h-[30px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20C240 8 480 32 720 20C960 8 1200 32 1440 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
      />
    </svg>
  </div>
);

/** Small compass rose — decorative accent near headings */
export const CompassAccent = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 md:w-6 md:h-6 ${className}`}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.4" />
    <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
    <path d="M12 6L13.5 11L12 12L10.5 11Z" fill="currentColor" opacity="0.6" />
    <path d="M12 18L10.5 13L12 12L13.5 13Z" fill="currentColor" opacity="0.25" />
  </svg>
);

/** Nordic knot / endless knot — small decorative element */
export const NordicKnot = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-3 ${className}`}
  >
    <path
      d="M2 6C2 3 5 2 8 4C11 6 13 8 16 6C19 4 21 2 24 4C27 6 30 3 30 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.3"
    />
  </svg>
);

/** Aurora wisp — flowing decorative curve */
export const AuroraWisp = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 md:w-32 h-5 md:h-6 ${className}`}
  >
    <path
      d="M4 18C20 6 40 2 60 12C80 22 100 6 116 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.2"
    />
    <path
      d="M4 14C24 4 44 8 60 14C76 20 96 10 116 14"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.12"
    />
  </svg>
);

/** Snowflake — small decorative icon */
export const Snowflake = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-3 h-3 md:w-4 md:h-4 ${className}`}
  >
    <path d="M8 1V15M1 8H15M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.15" />
  </svg>
);

/** Horizontal line with diamond — elegant section separator */
export const DiamondSeparator = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px w-8 md:w-12 bg-primary/20" />
    <svg viewBox="0 0 8 8" className="w-2 h-2 text-primary/30" fill="currentColor">
      <rect x="4" y="0" width="5.66" height="5.66" transform="rotate(45 4 4)" />
    </svg>
    <div className="h-px w-8 md:w-12 bg-primary/20" />
  </div>
);

// ─── BACKGROUND PATTERNS ───────────────────────────────

/** Topographic contour lines — great for dark sections */
export const TopoBg = ({ className = "" }: { className?: string }) => {
  const id = useId().replace(/:/g, "");
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`topo-${id}`} x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20 100C40 80 60 60 100 60C140 60 160 80 180 100" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.06" />
            <path d="M10 140C40 120 70 100 100 100C130 100 160 120 190 140" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.04" />
            <path d="M0 180C50 160 80 140 100 140C120 140 150 160 200 180" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.03" />
            <path d="M30 40C50 20 70 10 100 10C130 10 150 20 170 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#topo-${id})`} />
      </svg>
    </div>
  );
};

/** Subtle dot grid — clean, minimal texture */
export const DotGridBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="0.8" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

/** Diagonal hatching — for a hand-drawn/craft feel */
export const HatchBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hatch" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="0.4" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hatch)" />
    </svg>
  </div>
);

/** Aurora gradient glow — soft colored light at the top of a section */
export const AuroraBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
    <svg className="absolute top-0 left-0 w-full h-1/2" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="aurora1" cx="30%" cy="0%" r="60%">
          <stop offset="0%" stopColor="hsl(160, 60%, 40%)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aurora2" cx="70%" cy="0%" r="50%">
          <stop offset="0%" stopColor="hsl(36, 60%, 50%)" stopOpacity="0.04" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="400" fill="url(#aurora1)" />
      <rect width="1440" height="400" fill="url(#aurora2)" />
    </svg>
  </div>
);

/** Scattered stars — small random dots for a night sky feel */
export const StarFieldBg = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stars" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="25" r="0.6" fill="currentColor" opacity="0.12" />
          <circle cx="85" cy="10" r="0.4" fill="currentColor" opacity="0.08" />
          <circle cx="50" cy="55" r="0.5" fill="currentColor" opacity="0.10" />
          <circle cx="105" cy="70" r="0.3" fill="currentColor" opacity="0.06" />
          <circle cx="30" cy="95" r="0.5" fill="currentColor" opacity="0.09" />
          <circle cx="75" cy="105" r="0.4" fill="currentColor" opacity="0.07" />
          <circle cx="10" cy="65" r="0.3" fill="currentColor" opacity="0.05" />
          <circle cx="95" cy="40" r="0.6" fill="currentColor" opacity="0.11" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#stars)" />
    </svg>
  </div>
);
