import React from "react";

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
