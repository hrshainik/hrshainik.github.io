/**
 * /api/og — Dynamic Open Graph image generator
 *
 * Runs on Vercel's Edge runtime. Renders a 1200×630 PNG using Satori
 * (the engine behind @vercel/og), styled with the site's brand tokens
 * and the same Geist + Geist Mono pairing the page uses.
 *
 * Query parameters (all optional — sensible defaults match the site):
 *   ?title=…    Display name      (max 60 chars)
 *   ?role=…     Role / job title  (max 40 chars)
 *   ?tagline=…  Single-line description (max 180 chars)
 *   ?kicker=…   Small uppercase label above the title (max 30 chars)
 *   ?domain=…   Footer URL string (max 40 chars)
 *
 * Example: /api/og?title=Habibur%20Rahman&role=Full-Stack%20Developer
 *
 * Output is cached at the Vercel edge for 1 year — query-param variants
 * are cached independently, so adding/changing params triggers a fresh render
 * only on first request.
 */

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

/* ── Brand tokens (mirror :root in styles.css) ──────────────────────── */
const ACCENT = "#5eb8b8";
const ACCENT_BRIGHT = "#6fd4d4";
const TEXT_PRIMARY = "rgba(255, 255, 255, 0.95)";
const TEXT_SUBTLE = "rgba(255, 255, 255, 0.68)";
const TEXT_FAINT = "rgba(255, 255, 255, 0.5)";

/* ── Font loading — Geist & Geist Mono from jsdelivr ─────────────────── */
/* Cached on the edge instance so the second invocation skips the fetch. */
type FontSpec = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500 | 600 | 700;
  style: "normal";
};

let cachedFonts: FontSpec[] | null = null;

async function loadFonts(): Promise<FontSpec[]> {
  if (cachedFonts) return cachedFonts;

  // Geist is published on npm at the `geist` package — jsdelivr mirrors npm.
  const base = "https://cdn.jsdelivr.net/npm/geist@1.4.2/dist/fonts";

  try {
    const [sansBold, sansSemi, monoMed] = await Promise.all([
      fetch(`${base}/geist-sans/Geist-Bold.ttf`).then((r) => {
        if (!r.ok) throw new Error(`Geist-Bold ${r.status}`);
        return r.arrayBuffer();
      }),
      fetch(`${base}/geist-sans/Geist-SemiBold.ttf`).then((r) => {
        if (!r.ok) throw new Error(`Geist-SemiBold ${r.status}`);
        return r.arrayBuffer();
      }),
      fetch(`${base}/geist-mono/GeistMono-Medium.ttf`).then((r) => {
        if (!r.ok) throw new Error(`GeistMono-Medium ${r.status}`);
        return r.arrayBuffer();
      }),
    ]);

    cachedFonts = [
      { name: "Geist", data: sansBold, weight: 700, style: "normal" },
      { name: "Geist", data: sansSemi, weight: 600, style: "normal" },
      { name: "GeistMono", data: monoMed, weight: 500, style: "normal" },
    ];
  } catch (err) {
    // Fallback: Satori uses Noto Sans by default. Still a valid image.
    console.error("[og] font load failed, falling back to default", err);
    cachedFonts = [];
  }

  return cachedFonts;
}

/* ── Tiny helper: clamp + trim user-provided strings ─────────────────── */
const pickStr = (
  params: URLSearchParams,
  key: string,
  fallback: string,
  max: number
): string => {
  const raw = params.get(key)?.trim();
  const value = raw && raw.length > 0 ? raw : fallback;
  return value.slice(0, max);
};

export default async function handler(req: Request): Promise<Response> {
  const params = new URL(req.url).searchParams;

  const title = pickStr(params, "title", "Habibur Rahman", 60);
  const role = pickStr(params, "role", "Full-Stack Developer", 40);
  const tagline = pickStr(
    params,
    "tagline",
    "Building AI-native products, SaaS platforms, and high-performance web experiences for ambitious teams worldwide.",
    180
  );
  const kicker = pickStr(params, "kicker", "Portfolio · 2026", 30);
  const domain = pickStr(params, "domain", "hrshainik.vercel.app", 40);

  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 88px",
          background:
            "linear-gradient(135deg, #0a1818 0%, #0f2424 55%, #1a3d3d 120%)",
          color: TEXT_PRIMARY,
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        {/* Glow orb — top-right */}
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -180,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(94, 184, 184, 0.32), transparent 65%)",
          }}
        />

        {/* Glow orb — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -200,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(94, 184, 184, 0.20), transparent 60%)",
          }}
        />

        {/* Faint grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(94, 184, 184, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 184, 184, 0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* ── Kicker (small mono uppercase label with accent rule) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 36,
            color: ACCENT,
            fontFamily: "GeistMono",
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ width: 56, height: 1, background: ACCENT }} />
          <span>{kicker}</span>
        </div>

        {/* ── Title (huge display) ── */}
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: -3,
            marginBottom: 22,
            position: "relative",
            zIndex: 1,
          }}
        >
          {title}
        </div>

        {/* ── Role (medium accent) ── */}
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: ACCENT_BRIGHT,
            fontWeight: 600,
            marginBottom: 44,
            letterSpacing: -0.5,
            position: "relative",
            zIndex: 1,
          }}
        >
          {role}
        </div>

        {/* ── Tagline (body) ── */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.45,
            color: TEXT_SUBTLE,
            maxWidth: 960,
            letterSpacing: -0.3,
            position: "relative",
            zIndex: 1,
          }}
        >
          {tagline}
        </div>

        {/* Spacer pushes the footer to the bottom */}
        <div style={{ flexGrow: 1 }} />

        {/* ── Footer (domain with accent rule) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "GeistMono",
            fontSize: 22,
            fontWeight: 500,
            color: TEXT_FAINT,
            letterSpacing: 1.5,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ width: 36, height: 1, background: ACCENT }} />
          <span>{domain}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fonts.length > 0 ? fonts : undefined,
      headers: {
        // 1-year edge cache. Different query params cache independently.
        "Cache-Control":
          "public, max-age=31536000, s-maxage=31536000, immutable, no-transform",
        "Content-Type": "image/png",
      },
    }
  );
}
