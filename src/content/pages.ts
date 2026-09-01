import { guideHtml, navGroups } from "./guide";

export type GuidePage = { id: string; title: string; html: string };

const MARKER = '<section class="block" id="';

function splitGuide(): GuidePage[] {
  const parts = guideHtml.split(MARKER);
  const pages: GuidePage[] = [];

  const head = parts[0]?.trim() ?? "";
  if (head) pages.push({ id: "intro", title: "Introduction", html: head });

  for (const part of parts.slice(1)) {
    const quote = part.indexOf('"');
    const id = part.slice(0, quote);
    const html = MARKER + part;
    pages.push({ id, title: id, html });
  }
  // The first section belongs to the introduction page
  if (pages.length > 1 && pages[0]?.id === "intro" && pages[1]) {
    pages[0].html += "\n" + pages[1].html;
    pages.splice(1, 1);
  }


  // Titles from the navigation when available
  const titleById = new Map<string, string>();
  for (const group of navGroups) {
    for (const item of group.items) titleById.set(item.href, item.title);
  }

  return pages.map((p) =>
    p.id === "intro"
      ? p
      : { ...p, title: titleById.get(p.id) ?? p.title },
  );
}

export const guidePages: GuidePage[] = splitGuide();

/** Maps every nav href (including sub-sections) to the page that contains it. */
export const pageIdForAnchor: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const page of guidePages) map[page.id] = page.id;
  for (const group of navGroups) {
    for (const item of group.items) {
      if (map[item.href]) continue;
      const page = guidePages.find((p) => p.html.includes(`id="${item.href}"`));
      if (page) map[item.href] = page.id;
    }
  }
  return map;
})();
