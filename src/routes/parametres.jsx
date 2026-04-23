import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Settings, User, Bell, Shield, Database, Palette, Globe, Lock } from "lucide-react";
export const Route = createFileRoute("/parametres")({
  component: ParametresPage,
});
function ParametresPage() {
  return _jsxs("div", {
    className: \"space-y-8 pt-10\",
    children: [
      _jsx(\"div\", {
        className: \"text-center space-y-4 mb-2\",
        children: [
          _jsx(\"h1\", {
            className: \"text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent\",
            children: \"Paramètres\",
          }),
          _jsx(\"p\", {
            className: \"text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed\",
            children: \"Configurez les paramètres du système et personnalisez votre expérience.\",
          }),
        ],
      }),
      _jsxs(\"div\", {
        className: \"grid grid-cols-1 lg:grid-cols-2 gap-6\",
        children: [
          _jsxs("div", {
            className: "space-y-6",
            children: [
              _jsx(ChartCard, {
                title: "Profil Utilisateur",
                children: _jsxs("div", {
                  className: "space-y-4",
                  children: [
                    _jsxs("div", {
                      className: "flex items-center gap-4 p-4 border border-border rounded-lg",
                      children: [
                        _jsx("div", {
                          className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold",
                          children: "AD",
                        }),
                        _jsxs("div", {
                          children: [
                            _jsx("h3", {
                              className: "font-semibold text-foreground",
                              children: "Admin User",
                            }),
                            _jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "admin@magsiad.tn",
                            }),
                          ],
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "space-y-3",
                      children: [
                        _jsxs("div", {
                          children: [
                            _jsx("label", {
                              className: "block text-sm font-medium text-foreground mb-1",
                              children: "Nom complet",
                            }),
                            _jsx("input", {
                              type: "text",
                              defaultValue: "Admin User",
                              className: "w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                            }),
                          ],
                        }),
                        _jsxs("div", {
                          children: [
                            _jsx("label", {
                              className: "block text-sm font-medium text-foreground mb-1",
                              children: "Email",
                            }),
                            _jsx("input", {
                              type: "email",
                              defaultValue: "admin@magsiad.tn",
                              className: "w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                            }),
                          ],
                        }),
                      ],
                    }),
                    _jsxs("button", {
                      className: "w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
                      children: "Mettre à jour le profil",
                    }),
                  ],
                }),
              }),
              _jsx(ChartCard, {
                title: "Préférences",
                children: _jsxs("div", {
                  className: "space-y-4",
                  children: [
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Bell, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Notifications",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Recevoir des alertes et notifications",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("input", {
                          type: "checkbox",
                          defaultChecked: true,
                          className: "w-4 h-4 text-primary border-border rounded focus:ring-primary",
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Palette, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Mode sombre",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Utiliser le thème sombre",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("input", {
                          type: "checkbox",
                          className: "w-4 h-4 text-primary border-border rounded focus:ring-primary",
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Globe, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Langue",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Choisir la langue de l'interface",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("select", {
                          className: "px-3 py-1 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                          children: [
                            _jsx("option", { value: "fr", children: "Français" }),
                            _jsx("option", { value: "en", children: "English" }),
                            _jsx("option", { value: "ar", children: "Arabe" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          _jsxs("div", {
            className: "space-y-6",
            children: [
              _jsx(ChartCard, {
                title: "Sécurité",
                children: _jsxs("div", {
                  className: "space-y-4",
                  children: [
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Lock, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Mot de passe",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Dernier changement: il y a 30 jours",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsxs("button", {
                          className: "px-3 py-1 text-sm border border-border rounded-lg hover:bg-accent transition-colors",
                          children: "Changer",
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Shield, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Authentification à deux facteurs",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Ajouter une couche de sécurité supplémentaire",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("input", {
                          type: "checkbox",
                          className: "w-4 h-4 text-primary border-border rounded focus:ring-primary",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              _jsx(ChartCard, {
                title: "Système",
                children: _jsxs("div", {
                  className: "space-y-4",
                  children: [
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Database, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Sauvegarde automatique",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Tous les jours à 02:00",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("input", {
                          type: "checkbox",
                          defaultChecked: true,
                          className: "w-4 h-4 text-primary border-border rounded focus:ring-primary",
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "flex items-center justify-between p-3 border border-border rounded-lg",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx(Settings, { className: "text-primary", size: 18 }),
                            _jsxs("div", {
                              children: [
                                _jsx("h4", {
                                  className: "font-medium text-foreground",
                                  children: "Maintenance mode",
                                }),
                                _jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Désactiver l'accès utilisateur",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _jsx("input", {
                          type: "checkbox",
                          className: "w-4 h-4 text-primary border-border rounded focus:ring-primary",
                        }),
                      ],
                    }),
                    _jsxs("button", {
                      className: "w-full px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors",
                      children: "Exporter les données",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      _jsxs("div", {
        className: "flex justify-end gap-3",
        children: [
          _jsx("button", {
            className: "px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors",
            children: "Annuler",
          }),
          _jsx("button", {
            className: "px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
            children: "Enregistrer les modifications",
          }),
        ],
      }),
    ],
  });
}
