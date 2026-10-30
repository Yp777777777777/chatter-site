"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CHANGELOG, FALLBACK, REPO } from "@/lib/data";

const Ctx = createContext({ ...FALLBACK, log: CHANGELOG, live: false });
export const useRelease = () => useContext(Ctx);

const CACHE = "chatter.release.cache";
const TTL = 15 * 60 * 1000;
const API = `https://api.github.com/repos/${REPO}/releases?per_page=5`;

function bullets(body) {
  const items = [];
  for (const line of String(body || "").split("\n")) {
    const m = line.trim().match(/^(?:->|[-*•])\s+(.*)$/);
    if (!m || !m[1]) continue;
    const text = m[1].trim();
    if (!text || /^version:\s*versionname/i.test(text)) continue;
    items.push(text);
  }
  return items.slice(0, 6);
}

export function parseReleases(list) {
  if (!Array.isArray(list)) return null;
  const parsed = list
    .map((r) => {
      const version = String(r.tag_name || "").replace(/^v/i, "");
      if (!version) return null;
      const assets = Array.isArray(r.assets) ? r.assets : [];
      const ipa =
        assets.find((a) => /^chatter\.ipa$/i.test(a.name)) ||
        assets.find((a) => /\.ipa$/i.test(a.name));
      const apk = assets.find((a) => /\.apk$/i.test(a.name));
      const tag = r.tag_name || `v${version}`;
      const items = bullets(r.body);
      return {
        version,
        name: r.name || `Update ${version}`,
        ipa:
          ipa?.browser_download_url ||
          `https://github.com/${REPO}/releases/download/${tag}/Chatter.ipa`,
        apk:
          apk?.browser_download_url ||
          `https://github.com/${REPO}/releases/download/${tag}/chatter.apk`,
        notes: r.html_url || `https://github.com/${REPO}/releases/tag/${tag}`,
        title: r.name || `Update ${version}`,
        items: items.length ? items : ["Published as a public build."],
        v: version,
      };
    })
    .filter(Boolean);
  return parsed.length ? parsed : null;
}

export default function ReleaseProvider({ children }) {
  const [state, setState] = useState({ ...FALLBACK, log: CHANGELOG, live: false });

  useEffect(() => {
    let alive = true;
    const apply = (parsed) => {
      if (!alive || !parsed?.length) return;
      const top = parsed[0];
      setState({
        version: top.version,
        name: top.name,
        ipa: top.ipa,
        apk: top.apk,
        notes: top.notes,
        releasesUrl: FALLBACK.releasesUrl,
        log: parsed.map((r) => ({ v: r.v, title: r.title, items: r.items })),
        live: true,
      });
    };

    try {
      const cached = JSON.parse(localStorage.getItem(CACHE) || "null");
      if (cached && Date.now() - cached.at < TTL) apply(cached.parsed);
    } catch (e) {}

    fetch(API, { headers: { Accept: "application/vnd.github+json" } })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((list) => {
        const parsed = parseReleases(list);
        if (!parsed) return;
        apply(parsed);
        try {
          localStorage.setItem(CACHE, JSON.stringify({ at: Date.now(), parsed }));
        } catch (e) {}
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}
