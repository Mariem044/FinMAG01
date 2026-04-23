import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Bell, Sun, Moon, Menu, SlidersHorizontal } from "lucide-react";
import { useTheme } from "@/store/useTheme";
import { useSidebar } from "@/store/useSidebar";
import { useFilters } from "@/store/useFilters";
import { REGIONS, FAMILLES, QUARTERS, MONTHS } from "@/data/mockData";
import { useState } from "react";
const pageNames = {
  "/": "Tableau de Bord",
  "/ventes": "Analyse des Ventes",
  "/clients": "Analyse Clients",
  "/produits": "Analyse Produits",
  "/commerciaux": "Analyse Commerciale",
  "/ecritures": "Écritures Comptables",
  "/recouvrement": "Recouvrement",
  "/regions": "Analyse Géographique",
  "/achats": "Achats & Fournisseurs",
  "/impayes": "Analyse des Impayés",
};
export function Header({ pathname }) {
  const {
    year,
    setYear,
    quarter,
    setQuarter,
    month,
    setMonth,
    region,
    setRegion,
    famille,
    setFamille,
  } = useFilters();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { toggle: toggleSidebar } = useSidebar();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const title = pageNames[pathname] || "SIAD";
  const selectClass = `
    relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 text-foreground
    rounded-xl px-4 py-2 text-[11px] lg:text-[12px] font-semibold outline-none
    focus:border-primary focus:ring-2 focus:ring-primary/50 focus:from-primary/20 focus:to-primary/10 focus:shadow-lg focus:shadow-primary/30
    hover:border-primary hover:from-primary/25 hover:to-primary/15 hover:shadow-sm hover:shadow-primary/20
    appearance-none cursor-pointer transition-all duration-300 transform hover:scale-105
    backdrop-blur-sm
  `;
  const iconBtn = `
    w-8 h-8 flex items-center justify-center rounded-lg
    text-text-muted hover:text-foreground hover:bg-gradient-to-br hover:from-surface-hover hover:to-surface-hover/80
    hover:shadow-md hover:shadow-primary/10 hover:scale-110
    transition-all duration-300 relative overflow-hidden group
    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400
    shadow-md shadow-primary/20
  `;
  return _jsxs(_Fragment, {
    children: [
      _jsxs("header", {
        className:
          "fixed top-0 left-0 right-0 lg:left-[248px] h-14 bg-sidebar-bg/95 backdrop-blur border-b border-border/90 shadow-[0_1px_0_0_rgba(59,130,246,0.18)] flex items-center justify-between px-4 z-30 gap-3",
        children: [
          _jsxs("div", {
            className: "flex items-center gap-3 min-w-0",
            children: [
              _jsx("button", {
                onClick: toggleSidebar,
                className: `${iconBtn} lg:hidden flex-shrink-0`,
                title: "Menu",
                children: _jsx(Menu, { size: 18 }),
              }),
              _jsx("div", {
                className: "min-w-0",
                children: _jsx("h2", {
                  className: "text-[14px] font-semibold text-foreground truncate",
                  children: title,
                }),
              }),
            ],
          }),
          _jsxs("div", {
            className: "hidden md:flex items-center gap-2 flex-1 justify-center",
            children: [
              _jsx("select", {
                value: year,
                onChange: (e) => setYear(+e.target.value),
                className: selectClass,
                children: [2022, 2023, 2024].map((y) =>
                  _jsx("option", { value: y, children: y }, y),
                ),
              }),
              _jsxs("select", {
                value: quarter,
                onChange: (e) => setQuarter(e.target.value),
                className: selectClass,
                children: [
                  _jsx("option", { value: "Tous", children: "Trimestre" }),
                  QUARTERS.map((q) => _jsx("option", { value: q, children: q }, q)),
                ],
              }),
              _jsxs("select", {
                value: month,
                onChange: (e) => setMonth(e.target.value),
                className: selectClass,
                children: [
                  _jsx("option", { value: "Tous", children: "Mois" }),
                  MONTHS.map((m) => _jsx("option", { value: m, children: m }, m)),
                ],
              }),
              _jsxs("select", {
                value: region,
                onChange: (e) => setRegion(e.target.value),
                className: selectClass,
                children: [
                  _jsx("option", { value: "Toutes", children: "R\u00E9gion" }),
                  REGIONS.map((r) => _jsx("option", { value: r, children: r }, r)),
                ],
              }),
              _jsxs("select", {
                value: famille,
                onChange: (e) => setFamille(e.target.value),
                className: selectClass,
                children: [
                  _jsx("option", { value: "Toutes", children: "Famille" }),
                  FAMILLES.map((f) => _jsx("option", { value: f, children: f }, f)),
                ],
              }),
            ],
          }),
          _jsxs("div", {
            className: "flex items-center gap-1.5 flex-shrink-0",
            children: [
              _jsxs("button", {
                onClick: () => setFiltersOpen((v) => !v),
                className:
                  "md:hidden inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/25 to-primary/15 px-3 py-1.5 text-[12px] text-primary-foreground hover:from-primary/35 hover:to-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all duration-400 transform hover:scale-105",
                title: "Filtres",
                children: [_jsx(SlidersHorizontal, { size: 14 }), "Filtres"],
              }),
              _jsx("button", {
                onClick: toggleTheme,
                title: isDark ? "Mode clair" : "Mode sombre",
                className: iconBtn,
                children: isDark ? _jsx(Sun, { size: 16 }) : _jsx(Moon, { size: 16 }),
              }),
              _jsx("button", {
                className: iconBtn,
                title: "Notifications",
                children: _jsx(Bell, { size: 16 }),
              }),
              _jsx("div", {
                className:
                  "w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-[11px] font-bold flex-shrink-0",
                children: "AD",
              }),
            ],
          }),
        ],
      }),
      filtersOpen &&
        _jsxs("div", {
          className:
            "fixed top-14 left-0 right-0 z-20 bg-sidebar-bg border-b border-border px-4 py-3 flex flex-wrap gap-2 md:hidden shadow-lg",
          children: [
            _jsx("select", {
              value: year,
              onChange: (e) => setYear(+e.target.value),
              className: selectClass,
              children: [2022, 2023, 2024].map((y) => _jsx("option", { value: y, children: y }, y)),
            }),
            _jsxs("select", {
              value: quarter,
              onChange: (e) => setQuarter(e.target.value),
              className: selectClass,
              children: [
                _jsx("option", { value: "Tous", children: "Trimestre" }),
                QUARTERS.map((q) => _jsx("option", { value: q, children: q }, q)),
              ],
            }),
            _jsxs("select", {
              value: month,
              onChange: (e) => setMonth(e.target.value),
              className: selectClass,
              children: [
                _jsx("option", { value: "Tous", children: "Mois" }),
                MONTHS.map((m) => _jsx("option", { value: m, children: m }, m)),
              ],
            }),
            _jsxs("select", {
              value: region,
              onChange: (e) => setRegion(e.target.value),
              className: selectClass,
              children: [
                _jsx("option", { value: "Toutes", children: "R\u00E9gion" }),
                REGIONS.map((r) => _jsx("option", { value: r, children: r }, r)),
              ],
            }),
            _jsxs("select", {
              value: famille,
              onChange: (e) => setFamille(e.target.value),
              className: selectClass,
              children: [
                _jsx("option", { value: "Toutes", children: "Famille" }),
                FAMILLES.map((f) => _jsx("option", { value: f, children: f }, f)),
              ],
            }),
          ],
        }),
    ],
  });
}
