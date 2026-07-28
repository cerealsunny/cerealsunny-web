"use client";

type IconProps = { size?: number };

export const IconCorn = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3c-3 3-3 15 0 18 3-3 3-15 0-18z" />
    <path d="M9 3c2-1 4-.5 5 1" />
    <path d="M7.5 6.5h3M7 9.5h4M6.7 12.5h4.3M7 15.5h4M7.5 18h3" />
  </svg>
);

export const IconSugarCrystal = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="9" y="3" width="6" height="6" rx="1" transform="rotate(45 12 6)" />
    <rect x="3" y="13" width="5" height="5" rx="1" transform="rotate(45 5.5 15.5)" />
    <rect x="14" y="14" width="5.5" height="5.5" rx="1" transform="rotate(45 16.75 16.75)" />
  </svg>
);

export const IconCacao = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c4 2 6 7 6 11a6 6 0 01-12 0c0-4 2-9 6-11z" />
    <path d="M12 2v20" />
    <path d="M9 7c1 .5 1 1.5 0 2M15 7c-1 .5-1 1.5 0 2M8 13c1.2.6 1.2 1.8 0 2.4M16 13c-1.2.6-1.2 1.8 0 2.4" />
  </svg>
);

export const IconWheat = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V4" />
    <path d="M12 6l-4-2M12 6l4-2M12 9l-4-2M12 9l4-2M12 12l-4-2M12 12l4-2M12 15l-3-1.5M12 15l3-1.5" />
  </svg>
);

export const IconBowl = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11h16c0 4-3.5 7-8 7s-8-3-8-7z" />
    <ellipse cx="12" cy="11" rx="8" ry="1.6" />
    <path d="M9 6.5l1-1M12 5.5l.8-1.2M15 6.5l-.8-1" />
  </svg>
);

export const IconChicken = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4c3 0 5 2 5 5 0 4-3 6-3 6l-3 3a2.8 2.8 0 01-4-4l3-3s2-1 2-4c0-1.5-.5-3-2-3" />
    <path d="M9 15l-3.5 3.5a1.8 1.8 0 002.5 2.5L11.5 17.5" />
  </svg>
);

export const IconChocolateBar = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M9 6v12M15 6v12M3 12h18" />
  </svg>
);

export const IconChocolateSwirl = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M12 21c-4 0-7-2.5-7-6 0-3 2.5-5 5.5-5 2.3 0 4 1.5 4 3.5 0 1.7-1.3 3-3 3-1.3 0-2.3-1-2.3-2.2 0-.9.7-1.5 1.5-1.5" />
  </svg>
);

export const IconParfait = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4h10l-1.5 15a2 2 0 01-2 1.8h-3a2 2 0 01-2-1.8L7 4z" />
    <path d="M6.3 9h11.4M6.7 13h10.6" />
  </svg>
);

export const IconSparkle = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </svg>
);

export const IconPhone = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.19 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.34 6.34l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export const IconMail = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconPin = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s7-7.2 7-12.5A7 7 0 005 9.5C5 14.8 12 22 12 22z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const IconLeaf = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20c8 0 14-6 14-14 0-1 0-2-.2-3-6 0-12 3-13.5 9C3.5 15 4 20 4 20z" />
    <path d="M6 18c3-4 6-7 11.5-13.5" />
  </svg>
);
