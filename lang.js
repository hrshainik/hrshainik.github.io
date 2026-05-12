/**
 * lang.js — Multilingual engine for the portfolio
 *
 * Priority order for language resolution:
 *   1. localStorage (previously saved user preference)
 *   2. IP-based geolocation  → ipapi.co/json (free, no key required)
 *   3. Browser navigator.language
 *   4. Default: English
 *
 * DOM convention:
 *   data-i18n="key.path"      → sets element.textContent
 *   data-i18n-html="key.path" → sets element.innerHTML  (for content with links)
 *   data-i18n-aria="key.path" → sets element.setAttribute('aria-label', value)
 */

(function () {
  "use strict";

  /* ── Constants ─────────────────────────────────────────────────────────── */

  const SUPPORTED = ["en", "bn", "ar", "es", "fr", "de", "pt"];
  const DEFAULT = "en";
  const LS_KEY = "portfolio_lang";
  const RTL_LANGS = new Set(["ar"]);

  /**
   * ISO 3166-1 alpha-2 country code → language code.
   * Countries not listed default to English.
   */
  const COUNTRY_MAP = {
    // Bengali
    BD: "bn",
    // Arabic (Middle East & North Africa)
    SA: "ar",
    AE: "ar",
    EG: "ar",
    KW: "ar",
    QA: "ar",
    BH: "ar",
    OM: "ar",
    JO: "ar",
    LB: "ar",
    IQ: "ar",
    SY: "ar",
    YE: "ar",
    LY: "ar",
    DZ: "ar",
    MA: "ar",
    TN: "ar",
    MR: "ar",
    SD: "ar",
    SO: "ar",
    DJ: "ar",
    KM: "ar",
    PS: "ar",
    // Spanish
    ES: "es",
    MX: "es",
    AR: "es",
    CO: "es",
    PE: "es",
    VE: "es",
    CL: "es",
    EC: "es",
    GT: "es",
    CU: "es",
    BO: "es",
    DO: "es",
    HN: "es",
    PY: "es",
    SV: "es",
    NI: "es",
    CR: "es",
    PA: "es",
    UY: "es",
    GQ: "es",
    // French
    FR: "fr",
    BE: "fr",
    LU: "fr",
    MC: "fr",
    CD: "fr",
    CI: "fr",
    CM: "fr",
    MG: "fr",
    ML: "fr",
    BF: "fr",
    TG: "fr",
    BJ: "fr",
    SN: "fr",
    NE: "fr",
    TD: "fr",
    CF: "fr",
    CG: "fr",
    GA: "fr",
    GN: "fr",
    RW: "fr",
    BI: "fr",
    MU: "fr",
    SC: "fr",
    GW: "fr",
    HT: "fr",
    VU: "fr",
    NC: "fr",
    PF: "fr",
    // German
    DE: "de",
    AT: "de",
    LI: "de",
    // Portuguese
    PT: "pt",
    BR: "pt",
    AO: "pt",
    MZ: "pt",
    CV: "pt",
    GW: "pt",
    ST: "pt",
    TL: "pt",
  };

  /* ── Utility ────────────────────────────────────────────────────────────── */

  /** Resolve a dot-notation path against an object, e.g. 'about.heading' */
  function get(obj, path) {
    return path
      .split(".")
      .reduce(
        (acc, key) =>
          acc != null && acc[key] !== undefined ? acc[key] : undefined,
        obj,
      );
  }

  /** Safe localStorage access */
  function lsGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }
  function lsSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (_) {}
  }

  /** Parse browser's navigator.language into a supported code or null */
  function parseBrowserLang() {
    const raw = (navigator.language || navigator.userLanguage || "")
      .split("-")[0]
      .toLowerCase();
    return SUPPORTED.includes(raw) ? raw : null;
  }

  /* ── DOM updater ────────────────────────────────────────────────────────── */

  function applyTranslations(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    const isRTL = RTL_LANGS.has(lang);

    /* html element */
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.body.classList.toggle("rtl", isRTL);

    /* <title> and meta */
    document.title = t.meta.title;
    setMeta("name", "description", t.meta.description);
    setMeta("name", "title", t.meta.title);
    setMeta("property", "og:title", t.meta.title);
    setMeta("property", "og:description", t.meta.description);
    setMeta("property", "twitter:title", t.meta.title);
    setMeta("property", "twitter:description", t.meta.description);

    /* data-i18n → textContent */
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = get(t, el.getAttribute("data-i18n"));
      if (val !== undefined) el.textContent = val;
    });

    /* data-i18n-html → innerHTML  (links preserved) */
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const val = get(t, el.getAttribute("data-i18n-html"));
      if (val !== undefined) el.innerHTML = val;
    });

    /* data-i18n-aria → aria-label */
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = get(t, el.getAttribute("data-i18n-aria"));
      if (val !== undefined) el.setAttribute("aria-label", val);
    });

    /* service list items — rebuild from translation array */
    ["web", "app", "uiux"].forEach((svc) => {
      const items = get(t, `services.${svc}.items`);
      if (!Array.isArray(items)) return;
      const ul = document.querySelector(`[data-svc-list="${svc}"]`);
      if (!ul) return;
      ul.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    });

    /* language switcher UI */
    updateSwitcherUI(lang, t);

    /* persist */
    lsSet(LS_KEY, lang);
  }

  function setMeta(attr, val, content) {
    const el = document.querySelector(`meta[${attr}="${val}"]`);
    if (el) el.setAttribute("content", content);
  }

  /* ── Language Switcher UI ──────────────────────────────────────────────── */

  function updateSwitcherUI(lang, t) {
    /* badge */
    const badge = document.getElementById("langCurrent");
    if (badge) badge.textContent = lang.toUpperCase();

    /* sr label */
    const sr = document.getElementById("langSrLabel");
    if (sr) sr.textContent = `${t.langSwitcher.label}: ${lang.toUpperCase()}`;

    /* button aria */
    const btn = document.getElementById("langToggle");
    if (btn) btn.setAttribute("aria-label", t.langSwitcher.buttonAria);

    /* option states and native names */
    document.querySelectorAll("[data-lang-option]").forEach((el) => {
      const optLang = el.getAttribute("data-lang-option");
      const nativeName = get(t, `langNames.${optLang}`);
      const nameEl = el.querySelector(".lang-option-name");
      if (nameEl && nativeName) nameEl.textContent = nativeName;
      el.setAttribute("aria-selected", optLang === lang ? "true" : "false");
      el.classList.toggle("active", optLang === lang);
    });
  }

  /* ── Switcher interaction ──────────────────────────────────────────────── */

  function initSwitcher() {
    const toggle = document.getElementById("langToggle");
    const dropdown = document.getElementById("langDropdown");
    if (!toggle || !dropdown) return;

    const open = () => {
      dropdown.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.contains("open") ? close() : open();
    });

    document.addEventListener("click", close);
    dropdown.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        close();
        toggle.focus();
      }
    });

    /* language option selection */
    document.querySelectorAll("[data-lang-option]").forEach((el) => {
      el.addEventListener("click", () => {
        const selectedLang = el.getAttribute("data-lang-option");
        if (SUPPORTED.includes(selectedLang)) {
          applyTranslations(selectedLang);
          close();
        }
      });

      /* keyboard: Enter / Space activate */
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
  }

  /* ── Geolocation via IP ─────────────────────────────────────────────────── */

  async function detectLangByIP() {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3500);
      const res = await fetch("https://ipapi.co/json/", {
        signal: ctrl.signal,
      });
      clearTimeout(timer);
      if (!res.ok) return null;
      const data = await res.json();
      const country = (data.country_code || "").toUpperCase();
      return COUNTRY_MAP[country] || null;
    } catch (_) {
      return null;
    }
  }

  /* ── Banner: shown once when language is auto-detected ─────────────────── */

  function showDetectionBanner(detectedLang, t) {
    /* don't show if user previously dismissed */
    if (lsGet("lang_banner_dismissed") === "1") return;

    const langName =
      get(TRANSLATIONS["en"], `langNames.${detectedLang}`) || detectedLang;
    const banner = document.createElement("div");
    banner.className = "lang-detect-banner";
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML = `
      <span class="lang-detect-msg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none"
             stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        Page translated to <strong>${langName}</strong> based on your location.
      </span>
      <button class="lang-detect-dismiss" aria-label="Dismiss language notification">✕</button>
    `;
    document.body.appendChild(banner);

    /* animate in */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => banner.classList.add("visible"));
    });

    /* dismiss */
    const dismiss = () => {
      banner.classList.remove("visible");
      lsSet("lang_banner_dismissed", "1");
      setTimeout(() => banner.remove(), 400);
    };
    banner
      .querySelector(".lang-detect-dismiss")
      .addEventListener("click", dismiss);
    setTimeout(dismiss, 8000);
  }

  /* ── Main init ──────────────────────────────────────────────────────────── */

  async function init() {
    initSwitcher();

    /* 1. Saved preference */
    const saved = lsGet(LS_KEY);
    if (saved && SUPPORTED.includes(saved)) {
      applyTranslations(saved);
      return;
    }

    /* 2. IP geolocation */
    const ipLang = await detectLangByIP();
    if (ipLang && SUPPORTED.includes(ipLang) && ipLang !== DEFAULT) {
      applyTranslations(ipLang);
      showDetectionBanner(ipLang, TRANSLATIONS[ipLang]);
      return;
    }

    /* 3. Browser language */
    const browserLang = parseBrowserLang();
    if (browserLang && SUPPORTED.includes(browserLang)) {
      applyTranslations(browserLang);
      return;
    }

    /* 4. Default */
    applyTranslations(DEFAULT);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
