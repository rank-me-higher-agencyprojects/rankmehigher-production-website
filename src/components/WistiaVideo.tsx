import { useEffect, useRef, type CSSProperties } from "react";

const scriptLoads = new Map<string, Promise<void>>();

function loadScriptOnce(src: string, type?: string): Promise<void> {
  const pending = scriptLoads.get(src);
  if (pending) return pending;
  const promise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(src)), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    if (type) script.type = type;
    script.addEventListener("load", () => {
      script.setAttribute("data-loaded", "1");
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(src)), { once: true });
    document.head.appendChild(script);
  });
  scriptLoads.set(src, promise);
  return promise;
}

function loadWistia(mediaId: string): Promise<void> {
  return Promise.all([
    loadScriptOnce("https://fast.wistia.com/player.js"),
    loadScriptOnce(`https://fast.wistia.com/embed/${mediaId}.js`, "module"),
  ]).then(() => undefined);
}

/**
 * Stable on the server and on the first client render. The custom element
 * is inserted after mount so hydration does not see a wistia-player, and
 * player.js is injected once per page.
 */
export function WistiaPlayer({
  mediaId,
  aspect = "1.7777777777777777",
}: {
  mediaId: string;
  aspect?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const paddingTop = aspect.startsWith("0.56") ? "177.78%" : "56.25%";
  const frameStyle: CSSProperties = { position: "relative", paddingTop };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const player = document.createElement("wistia-player");
    player.setAttribute("media-id", mediaId);
    player.setAttribute("aspect", aspect);
    player.style.position = "absolute";
    player.style.inset = "0";
    player.style.width = "100%";
    player.style.height = "100%";
    host.replaceChildren(player);
    loadWistia(mediaId).catch(() => {
      // A blocked embed should not reject into an unhandled error.
    });
    return () => {
      host.replaceChildren();
    };
  }, [mediaId, aspect]);

  return (
    <div style={frameStyle}>
      <div ref={hostRef} />
    </div>
  );
}

interface WistiaVideoProps {
  videoId?: string;
  isMobile?: boolean;
  aspectRatio?: "16:9" | "9:16";
}

// Validate Wistia video ID format (alphanumeric, typically 10 chars)
const isValidWistiaId = (id: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(id) && id.length >= 6 && id.length <= 20;
};

const WistiaVideo = ({ videoId = "k4xdzi49er", isMobile = false, aspectRatio = "16:9" }: WistiaVideoProps) => {
  const aspectValue = aspectRatio === "16:9" ? "1.7777777777777777" : "0.5625";
  const sanitizedVideoId = isValidWistiaId(videoId) ? videoId : "k4xdzi49er";
  const player = <WistiaPlayer mediaId={sanitizedVideoId} aspect={aspectValue} />;

  if (isMobile) {
    return (
      <div className="relative w-full">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30 blur-2xl opacity-50" />
        <div className="relative z-10 rounded-xl overflow-hidden border border-primary/30 shadow-xl shadow-primary/20">
          {player}
        </div>
      </div>
    );
  }

  if (aspectRatio === "9:16") {
    return (
      <div className="relative w-full">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          {player}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
      <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl border border-white/10" />
        <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none z-10 rounded-2xl" />
        {player}
      </div>
    </div>
  );
};

export default WistiaVideo;
