import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M16.5 16.5 21 21" />
    </svg>
  );
}

export function AllInOneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function TeamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path strokeLinecap="round" d="M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
      <path strokeLinecap="round" d="M14.5 14.5c2.4.4 4 2.6 4 5.5" />
    </svg>
  );
}

export function ExperienceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.5s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.9c0 5.8-7.5 10.2-7.5 10.2Z"
      />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l7 2.8v5.2c0 5-3 8-7 9.5-4-1.5-7-4.5-7-9.5V6.3l7-2.8Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8 2.6-5.4Z"
      />
    </svg>
  );
}

export function ScaleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" d="M12 3.5v17M7 5.5h10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9.5l3-4 3 4M4 9.5a3 3 0 0 0 6 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 9.5l3-4 3 4M14 9.5a3 3 0 0 0 6 0" />
    </svg>
  );
}

// TODO(PIEL): el brandbook pide Material Symbols + Health Icons. Por ahora usamos
// SVGs inline propios (sin dependencias nuevas) con el mismo trazo. Migrar cuando se defina.

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 9.5V20h13V9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-5h4v5" />
    </svg>
  );
}

export function MedalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="14.5" r="5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5v4M10 14.5h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9 6.5 3.5h11L15.5 9" />
    </svg>
  );
}

export function HospitalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4.5" y="6" width="15" height="14" rx="1.5" />
      <path strokeLinecap="round" d="M3 20h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M10 11h4" />
    </svg>
  );
}

export function HandHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9.5s-3.2-2-3.2-4.1A1.9 1.9 0 0 1 12 4.2a1.9 1.9 0 0 1 3.2 1.2C15.2 7.5 12 9.5 12 9.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 14.5c2-1.4 4-.8 5.5.2l2 1.3M3 13v7M3 16.5c3 2.5 6 3.5 9 1.5l6-4a1.6 1.6 0 0 0-1.8-2.6l-3.4 1.7"
      />
    </svg>
  );
}

export function ClipboardCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="5" y="5" width="14" height="16" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5V3.5h6V5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5l2.2 2.2 4.3-4.6" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 8 9 10.5a1.6 1.6 0 0 0 2.2 2.3l1.6-1.5 3.4 3.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.8 9.3 15 7.2c.6-.6 1.5-.6 2.1 0l3.4 3.3M3.5 10.5 7 7.2c.6-.6 1.5-.6 2.1 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 12 2 1.9M15 14l1.7 1.6a1.4 1.4 0 0 0 2-2" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4-4 6.5-7 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 14 8 17 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5h7l5 5V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3.5V8.5h5" />
      <path strokeLinecap="round" d="M9 13h6M9 16.5h6" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.4 3.8 8.5S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-8.5S9.5 5.9 12 3.5Z" />
    </svg>
  );
}

// Íconos de especialidades médicas.

export function StethoscopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 3v4.5a3.5 3.5 0 0 0 7 0V3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.2v3.3a5.5 5.5 0 0 0 11 0V13" />
      <circle cx="20" cy="10.5" r="2.2" />
    </svg>
  );
}

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.5c-2 0-3.4 1.5-3.4 3.8 0 1.4.5 2.7.8 4.4.4 2.6.6 6.3 2.1 6.3 1.1 0 1.1-3.2 2.4-3.2s1.3 3.2 2.4 3.2c1.5 0 1.7-3.7 2.1-6.3.3-1.7.8-3 .8-4.4 0-2.3-1.4-3.8-3.4-3.8-1.2 0-1.7.7-2.9.7s-1.7-.7-2.9-.7Z"
      />
    </svg>
  );
}

export function EarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 9.5a5 5 0 0 1 10 0c0 3-2.6 3.6-2.6 6.1A2.9 2.9 0 0 1 9 17" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.7 9.5a2.3 2.3 0 0 1 4.6 0" />
    </svg>
  );
}

export function SpeechIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6a2.5 2.5 0 0 1-2.5 2.5H10l-4 3.3v-3.3A2.5 2.5 0 0 1 4 12.5Z"
      />
      <path strokeLinecap="round" d="M8 8.5h8M8 11.5h5" />
    </svg>
  );
}

export function DnaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3c0 4.5 10 5.5 10 10s-10 5.5-10 8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 3c0 4.5-10 5.5-10 10" />
      <path strokeLinecap="round" d="M8.5 6h7M9.5 9h5M9.5 15.5h5M8.5 18.5h7" />
    </svg>
  );
}

export function SyringeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 3.5 20.5 9.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5 7.8 16.2l-3.3 1 1-3.3L15.2 4.2" />
      <path strokeLinecap="round" d="M12.5 8.5 14.5 10.5M10.5 10.5 12.5 12.5" />
      <path strokeLinecap="round" d="M4.5 19.5 3 21" />
    </svg>
  );
}
