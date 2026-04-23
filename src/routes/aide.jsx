import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Book, HelpCircle, Mail, Phone, MessageCircle } from "lucide-react";
export const Route = createFileRoute("/aide")({
  component: AidePage,
});
function AidePage() {
  return _jsxs("div", {
    className: \"space-y-8 pt-10\",
    children: [
      _jsx(\"div\", {
        className: \"text-center space-y-4 mb-2\",
        children: [
          _jsx(\"h1\", {
            className: \"text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent\",
            children: \"Centre d'Aide\",
          }),
          _jsx(\"p\", {
            className: \"text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed\",
            children: \"Trouvez des réponses à vos questions et apprenez à utiliser le système SIAD efficacement.\",
          }),
        ],
      }),
      _jsxs(\"div\", {
        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5\",
        children: [
          _jsx(ChartCard, {
            title: "Documentation",
            children: _jsxs("div", {
              className: "space-y-4",
              children: [
                _jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    _jsx(Book, { className: "text-primary mt-1", size: 20 }),
                    _jsxs("div", {
                      children: [
                        _jsx("h3", {
                          className: "font-semibold text-foreground",
                          children: "Guide d'utilisation",
                        }),
                        _jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Apprenez les bases du système et naviguez dans les différentes fonctionnalités.",
                        }),
                      ],
                    }),
                  ],
                }),
                _jsxs("button", {
                  className: \"w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 font-medium text-sm\",
                  children: "Voir la documentation",
                }),
              ],
            }),
          }),
          _jsx(ChartCard, {
            title: "Questions Fréquentes",
            children: _jsxs("div", {
              className: "space-y-4",
              children: [
                _jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    _jsx(HelpCircle, { className: "text-primary mt-1", size: 20 }),
                    _jsxs("div", {
                      children: [
                        _jsx("h3", {
                          className: "font-semibold text-foreground",
                          children: "FAQ",
                        }),
                        _jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Consultez les réponses aux questions les plus courantes des utilisateurs.",
                        }),
                      ],
                    }),
                  ],
                }),
                _jsxs("button", {
                  className: "w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                  children: "Consulter la FAQ",
                }),
              ],
            }),
          }),
          _jsx(ChartCard, {
            title: "Support Technique",
            children: _jsxs("div", {
              className: "space-y-4",
              children: [
                _jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    _jsx(MessageCircle, { className: "text-primary mt-1", size: 20 }),
                    _jsxs("div", {
                      children: [
                        _jsx("h3", {
                          className: "font-semibold text-foreground",
                          children: "Contactez-nous",
                        }),
                        _jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Notre équipe technique est disponible pour vous aider.",
                        }),
                      ],
                    }),
                  ],
                }),
                _jsxs("div", {
                  className: "space-y-2 mt-4",
                  children: [
                    _jsxs("button", {
                      className: "w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",
                      children: [_jsx(Mail, { size: 16 }), "Envoyer un email"],
                    }),
                    _jsxs("button", {
                      className: "w-full px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2",
                      children: [_jsx(Phone, { size: 16 }), "Appeler le support"],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      _jsx(ChartCard, {
        title: "Tutoriels Vidéo",
        children: _jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: [
            _jsxs("div", {
              className: "border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer",
              children: [
                _jsx("div", {
                  className: "w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center",
                  children: _jsx("span", {
                    className: "text-muted-foreground",
                    children: "Vignette vidéo",
                  }),
                }),
                _jsx("h4", {
                  className: "font-semibold text-foreground mb-2",
                  children: "Premiers pas avec SIAD",
                }),
                _jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Découvrez comment démarrer avec le système.",
                }),
              ],
            }),
            _jsxs("div", {
              className: "border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer",
              children: [
                _jsx("div", {
                  className: "w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center",
                  children: _jsx("span", {
                    className: "text-muted-foreground",
                    children: "Vignette vidéo",
                  }),
                }),
                _jsx("h4", {
                  className: "font-semibold text-foreground mb-2",
                  children: "Analyse des ventes",
                }),
                _jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Apprenez à interpréter les données de vente.",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
