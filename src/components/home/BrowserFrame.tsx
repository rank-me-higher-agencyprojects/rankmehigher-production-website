import type { ReactNode } from "react";

/**
 * Hand-built CSS browser chrome: three muted traffic dots and a URL pill.
 * Purely decorative — wraps a product screenshot.
 */
const BrowserFrame = ({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`overflow-hidden rounded-xl border border-white/10 bg-[hsl(0_0%_6%)] shadow-[0_32px_96px_-32px_rgba(0,0,0,0.9)] md:rounded-2xl ${className}`}
  >
    <div className="relative flex h-10 items-center border-b border-white/[0.06] bg-white/[0.02] px-4">
      <div aria-hidden className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-2.5 w-2.5 text-white/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <span className="whitespace-nowrap text-[10px] tracking-wide text-white/40 sm:text-[11px]">{url}</span>
      </div>
    </div>
    <div className="relative">{children}</div>
  </div>
);

export default BrowserFrame;
