import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { applyStoredTheme } from "@/store/useTheme";
import appCss from "../styles.css?url";
// Apply persisted theme before first paint
applyStoredTheme();
function NotFoundComponent() {
  return _jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: _jsxs("div", {
      className: "max-w-md text-center",
      children: [
        _jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
        _jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page introuvable",
        }),
        _jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "La page que vous cherchez n'existe pas.",
        }),
        _jsx("div", {
          className: "mt-6",
          children: _jsx(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Accueil",
          }),
        }),
      ],
    }),
  });
}
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SIAD — MAG DISTRIBUTION" },
      {
        name: "description",
        content: "Système Interactif d'Aide à la Décision — Tableau de bord BI",
      },
      { property: "og:title", content: "SIAD — MAG DISTRIBUTION" },
      {
        property: "og:description",
        content: "Système Interactif d'Aide à la Décision — Tableau de bord BI",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@MAGDistribution" },
      { name: "twitter:title", content: "SIAD — MAG DISTRIBUTION" },
      {
        name: "twitter:description",
        content: "Système Interactif d'Aide à la Décision — Tableau de bord BI",
      },
      {
        property: "og:image",
        content: "/logo.png",
      },
      {
        name: "twitter:image",
        content: "/logo.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
function RootShell({ children }) {
  return _jsxs("html", {
    lang: "en",
    children: [
      _jsx("head", { children: _jsx(HeadContent, {}) }),
      _jsxs("body", { children: [children, _jsx(Scripts, {})] }),
    ],
  });
}
function RootComponent() {
  return _jsx(DashboardLayout, {});
}
