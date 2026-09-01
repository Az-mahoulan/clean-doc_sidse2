import { guideHtml, navGroups, type NavItem } from "./guide";

export type GuidePage = { id: string; title: string; html: string; sub?: boolean };

function splitGuide(): GuidePage[] {
  const allItems: NavItem[] = navGroups.flatMap((g) => g.items);

  // Find start position of each nav item anchor/section in guideHtml
  const itemsWithPos: { item: NavItem; index: number }[] = [];
  for (const item of allItems) {
    const regex = new RegExp(`(<(?:section|div|h3)[^>]*id=["']${item.href}["'][^>]*>)`, "i");
    const match = regex.exec(guideHtml);
    if (match) {
      itemsWithPos.push({
        item,
        index: match.index,
      });
    }
  }

  // Sort by appearance in HTML
  itemsWithPos.sort((a, b) => a.index - b.index);

  const pages: GuidePage[] = [];
  for (let i = 0; i < itemsWithPos.length; i++) {
    const current = itemsWithPos[i];
    const next = itemsWithPos[i + 1];
    let slice = guideHtml.slice(current.index, next ? next.index : guideHtml.length).trim();

    // Ensure proper section wrapper for sub-sections or standalone elements
    if (!slice.startsWith("<section") && !slice.startsWith("<div class=\"doc-header\"")) {
      slice = slice.replace(/<\/section>\s*$/, "");
      slice = `<section class="block" id="${current.item.href}">${slice}</section>`;
    } else if (slice.startsWith("<section") && !slice.endsWith("</section>")) {
      slice = `${slice}\n</section>`;
    }

    pages.push({
      id: current.item.href,
      title: current.item.title,
      sub: current.item.sub,
      html: slice,
    });
  }

  return pages;
}

export const guidePages: GuidePage[] = splitGuide();

/** Maps every nav href (including sub-sections) to the page that contains it. */
export const pageIdForAnchor: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const page of guidePages) map[page.id] = page.id;
  for (const group of navGroups) {
    for (const item of group.items) {
      if (!map[item.href]) map[item.href] = item.href;
    }
  }
  return map;
})();
