# TP – Découverte des outils d'automatisation appliqués au projet MUSCADE

**Certification : RS7424**
**Durée estimée : 1 journée**
**Niveau : Débutant**
**Objectif : Découvrir quatre plateformes d'automatisation à travers un même cas d'usage.**

---

# Objectifs pédagogiques

À l'issue de ce TP, je serai capable de :

- Identifier un processus automatisable.
- Construire un workflow simple.
- Comparer plusieurs plateformes d'automatisation.
- Générer automatiquement un rapport.
- Produire une présentation.
- Diffuser automatiquement le résultat.

---

# Contexte

Le projet MUSCADE comporte un grand nombre d'issues GitLab.

Un export PDF est disponible.

L'objectif est d'automatiser la génération d'un rapport de synthèse sans développer d'API GitLab.

---

# Workflow cible

```text
Export PDF GitLab
        │
        ▼
Extraction des données
        │
        ▼
JSON / CSV
        │
        ▼
Analyse IA
        │
        ▼
Rapport Markdown
        │
        ▼
Présentation Gamma
        │
        ▼
Envoi automatique par mail
```

---

# Partie 1 — Préparation

## Données

Fichier utilisé :

GitLabMuscadeIssues.pdf

Objectif :

Comprendre la structure du document.

À observer :

- titre des issues
- labels
- état
- auteur
- date
- nombre d'issues

Temps estimé :

15 minutes

---

# Partie 2 — Test Genspark

Objectif :

Découvrir l'orchestration IA.

Mission :

Importer le PDF.

Demander :

> Analyse ce document.
> Extrait les tickets.
> Génère un JSON.
> Classe les tickets.
> Fais une synthèse.

Livrables :

□ JSON

□ Rapport Markdown

□ Présentation

Temps :

45 minutes

---

# Partie 3 — Test Zapier

Objectif :

Découvrir une automatisation simple.

Mission :

Créer un Zap :

PDF
↓

Analyse IA

↓

Mail Gmail

Questions :

- difficulté ?
- nombre d'étapes ?
- limites ?

Temps :

45 minutes

---

# Partie 4 — Test Make

Objectif :

Construire un vrai workflow.

Mission :

Créer un scénario :

PDF

↓

Extraction

↓

IA

↓

Markdown

↓

Mail

Bonus :

Ajouter Gamma.

Temps :

1h30

---

# Partie 5 — Test n8n

Objectif :

Comparer avec Make.

Mission :

Reproduire exactement le même scénario.

Observer :

- simplicité
- souplesse
- ergonomie
- possibilités

Temps :

1h30

---

# Partie 6 — Génération de la présentation

À partir du Markdown précédent.

Créer une présentation :

- contexte
- statistiques
- principaux thèmes
- recommandations

Outil :

Gamma

Temps :

20 minutes

---

# Partie 7 — Diffusion

Envoyer automatiquement :

- le rapport Markdown
- la présentation

Destinataire :

helpmuscade@cea.fr

ou

une adresse Gmail personnelle

Temps :

15 minutes

---

# Tableau comparatif

| Critère | Genspark | Zapier | Make | n8n |
|----------|----------|---------|------|-----|
| Installation | | | | |
| Simplicité | | | | |
| IA intégrée | | | | |
| Génération documents | | | | |
| Présentations | | | | |
| Mail | | | | |
| Courbe d'apprentissage | | | | |
| Adapté à MUSCADE | | | | |

---

# Bilan

## Ce qui fonctionne

...

## Difficultés rencontrées

...

## Temps passé

...

## Ce que je réutiliserai

...

## Ce que je ne retiendrai pas

...

---

# Conclusion RS7424

Cette expérimentation démontre qu'un processus métier peut être automatisé sans développement spécifique.

Les quatre plateformes permettent d'orchestrer un workflow combinant :

- transformation documentaire ;
- intelligence artificielle générative ;
- production documentaire ;
- diffusion automatique.

Le choix de l'outil dépend principalement du niveau de personnalisation attendu et des compétences techniques disponibles dans l'organisation.
