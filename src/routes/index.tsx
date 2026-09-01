import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { guideHtml, navGroups, type NavItem } from "@/content/guide";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guide d'utilisation SIDSE IBDC — Documentation" },
      {
        name: "description",
        content:
          "Documentation SIDSE IBDC : profils utilisateurs, permissions, gestion des comptes, module PDC, indicateurs, ODD, PTA et rapports.",
      },
      { property: "og:title", content: "Guide d'utilisation SIDSE IBDC" },
      {
        property: "og:description",
        content:
          "Guide pas à pas de la plateforme SIDSE IBDC (Piè Baromètre) : comptes, permissions, PDC, indicateurs et rapports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsPage,
});

function DocsPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const allIds = useMemo(
    () => navGroups.flatMap((g) => g.items.map((i) => i.href)),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return navGroups;
    return navGroups
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => i.title.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const onThisPage = useMemo<NavItem[]>(() => {
    const group = navGroups.find((g) =>
      g.items.some((i) => i.href === activeId),
    );
    if (!group) return [];
    let parentIndex = group.items.findIndex((i) => i.href === activeId);
    while (parentIndex > 0 && group.items[parentIndex]?.sub) parentIndex--;
    const parent = group.items[parentIndex];
    if (!parent) return [];
    const rest = group.items.slice(parentIndex + 1);
    const children: NavItem[] = [];
    for (const item of rest) {
      if (!item.sub) break;
      children.push(item);
    }
    return [parent, ...children];
  }, [activeId]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 },
    );
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [allIds]);

  const go = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-4 px-4 sm:px-6">
          <button
            type="button"
            aria-label="Ouvrir le sommaire"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground lg:hidden"
          >
            ☰
          </button>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-extrabold text-primary-foreground">
              S
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight">
              SIDSE IBDC
              <span className="ml-2 rounded-full bg-secondary px-2 py-0.5 align-middle text-[11px] font-semibold text-muted-foreground">
                Docs
              </span>
            </span>
          </div>
          <div className="ml-auto hidden text-sm text-muted-foreground sm:block">
            Piè Baromètre · Guide d'utilisation
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-8 px-4 sm:px-6">
        {/* Sidebar */}
        <aside
          className={`${
            menuOpen ? "block" : "hidden"
          } fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-r border-border bg-background px-4 py-6 lg:sticky lg:top-16 lg:z-auto lg:block lg:h-[calc(100vh-4rem)] lg:w-[286px] lg:flex-none lg:px-0 lg:pr-6`}
        >
          <label className="relative mb-5 block">
            <span className="sr-only">Rechercher dans le guide</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une section…"
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
            />
          </label>

          <nav className="space-y-6 pb-10">
            {filtered.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-2 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  {group.label}
                </p>
                <ul className="space-y-0.5 border-l border-border">
                  {group.items.map((item) => {
                    const active = item.href === activeId;
                    return (
                      <li key={item.href}>
                        <a
                          href={`#${item.href}`}
                          onClick={go(item.href)}
                          className={`-ml-px block border-l py-1.5 text-[13.5px] transition-colors ${
                            item.sub ? "pl-6" : "pl-3"
                          } ${
                            active
                              ? "border-primary font-semibold text-accent-foreground"
                              : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="px-2 text-sm text-muted-foreground">
                Aucune section ne correspond à « {query} ».
              </p>
            )}
          </nav>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 py-10 lg:py-14">
          <article
            className="doc-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: guideHtml }}
          />
          <footer className="doc-footer max-w-3xl">
            Guide évolutif — SIDSE IBDC (Piè Baromètre). De nouvelles sections
            sont ajoutées au fur et à mesure.
          </footer>
        </main>

        {/* On this page */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 flex-none py-14 xl:block">
          <p className="mb-3 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
            Sur cette page
          </p>
          <ul className="space-y-1.5">
            {onThisPage.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={go(item.href)}
                  className={`block text-[13px] leading-snug transition-colors ${
                    item.sub ? "pl-3" : ""
                  } ${
                    item.href === activeId
                      ? "font-semibold text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
