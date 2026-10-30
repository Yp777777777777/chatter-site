const P = {
  sliders: <><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  bell: <><path d="M6 17V11a6 6 0 1 1 12 0v6l2 2H4l2-2Z" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.4-1-2.5 0-1 .8-1.7 1.9-1.7H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
  bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  github: <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.3a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.8 5.7 5.5 6A2.8 2.8 0 0 0 8.7 17.7V21" />,
  shield: <path d="M12 3 5 6v6c0 4.500 3 7.500 7 9 4-1.500 7-4.500 7-9V6l-7-3Z" />,
  check: <path d="m5 12 5 5L20 7" />,
};

export function Icon({ name, size = 20, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  );
}

export function Logo({ size = 40, bare = false }) {
  const id = `lg${size}${bare ? "b" : ""}`;
  return (
    <svg width={size} height={size} viewBox="0 0 108 108" role="img" aria-label="Chatter">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff6b4a" /><stop offset="1" stopColor="#d674ff" />
        </linearGradient>
      </defs>
      {!bare && <rect width="108" height="108" rx="26" fill={`url(#${id})`} />}
      <path d="M66.4 44.1a15.75 15.75 0 1 0 0 19.8" fill="none" stroke={bare ? `url(#${id})` : "#fff"} strokeWidth="6.8" strokeLinecap="round" />
      <circle cx="69.8" cy="54" r="4.7" fill={bare ? "#d674ff" : "#fff"} />
    </svg>
  );
}
