# Rapport RS7424
## Gérer et transformer les processus de travail des équipes avec l'aide de l'IA

**Version :** V0.3 (accent managérial + clarification du niveau d'avancement)

---

# Historique

| Version | Date | Auteur | Description |
|----------|------|---------|-------------|
|0.1|2026-07-27|Katy Saintin|Création de la structure|
|0.2|2026-07-27|Katy Saintin|Rédaction consolidée à partir des livrables intermédiaires (diagnostic, cartographies, charte IA, dispositif de suivi, journal de bord)|
|0.3|2026-07-27|Katy Saintin|Mise en avant de l'angle managérial (coordination/autonomisation de l'équipe et des utilisateurs), suppression des références EPICS/départs en retraite, clarification du statut réel (POC) des KPI, ajout d'emplacements réservés pour visuels et captures d'écran|

---

# Résumé exécutif

Experte Senior en génie logiciel au CEA Irfu/DIS/LDISC et Cheffe de produit MUSCADE depuis octobre 2025, j'assure depuis plus de vingt-cinq ans la conception, le développement et la coordination d'un système de supervision (SCADA) utilisé sur 32 installations scientifiques en France et à l'international. Au-delà de l'expertise technique, ma mission de Cheffe de produit est avant tout une **mission managériale de coordination d'équipe** : organiser, structurer et faire monter en compétence une équipe support (ingénieurs logiciel, automaticiens, automaticien partenaire) aujourd'hui encore trop dépendante d'une expertise individuelle concentrée sur une seule personne.

Une part importante de l'activité de support — qualification des incidents, production d'indicateurs, rédaction de comptes rendus et de procédures — repose encore sur des traitements manuels, chronophages et peu capitalisés. Ce dossier RS7424 présente la transformation de ce processus grâce à l'intelligence artificielle générative, avec un objectif managérial explicite : **autonomiser les utilisateurs et l'équipe support**, afin de sortir d'un fonctionnement centré sur une expertise unique et de me permettre, en tant que cheffe de produit, de me recentrer sur l'architecture, le développement et la correction durable des anomalies plutôt que sur le support de premier niveau.

La démarche s'appuie sur : un diagnostic du processus existant, une reconfiguration intégrant un assistant IA dédié (« Muscade Incident Assistant ») capable d'apporter des réponses de premier niveau via une FAQ (à terme synchronisée avec GitLab), un workflow d'automatisation (Make), une charte d'usage responsable de l'IA propre au projet, plusieurs livrables concrets (assistant, FAQ, guides, supports de présentation) et un dispositif de suivi et de veille.

Conformément au positionnement de cette certification — destinée aux managers, qui délèguent la mise en œuvre technique concrète à des experts IA ou informatiques — ce rapport présente la stratégie de transformation prévue et sa gouvernance, et non un déploiement déjà généralisé : à ce stade, seul un **POC (Proof of Concept)** a été réalisé sur la gestion des incidents MUSCADE (qualification assistée + envoi automatique de ticket par e-mail via Make). Mon profil d'experte technique me permet toutefois d'aller au-delà du seul exercice managérial et de présenter, en soutenance, une implémentation déjà fonctionnelle testée en parallèle sur plusieurs outils.

Ce projet s'inscrit enfin dans une ambition plus large : contribuer à faire émerger, au CEA, un véritable pôle de compétence sur les systèmes de contrôle-commande (SCADA, IHM) et l'IA appliquée à ces domaines, ambition que je porte déjà à travers un podcast de vulgarisation scientifique, *Katy In Control*, dédié aux SCADA (EPICS, TANGO) et à l'IA.

*CV complet : [katysaintin.github.io/cv.html](https://katysaintin.github.io/cv.html)*

---

# 1. Présentation du contexte

## 1.1 Présentation du laboratoire

Mon activité s'inscrit dans le domaine de la recherche fondamentale, au sein de l'Institut de Recherche sur les Lois Fondamentales de l'Univers (IRFU) du CEA. L'IRFU mène des travaux de recherche en astrophysique, physique nucléaire, physique des particules et instrumentation scientifique, et conçoit à ce titre des équipements de très haute technologie (accélérateurs de particules, détecteurs, systèmes expérimentaux).

Je suis rattachée au Laboratoire de Développement et d'Intégration de Systèmes de Contrôle (LDISC), spécialisé dans le développement de logiciels de contrôle-commande et de supervision destinés aux grands instruments scientifiques. Le laboratoire développe et maintient notamment le framework **MUSCADE** (Micro SCADA Embedded), un système de supervision compact conçu pour répondre aux besoins de contrôle-commande d'installations scientifiques et industrielles.

Le projet MUSCADE est aujourd'hui installé sur **32 projets** (20 sur le site de Saclay, dont l'Orme des Merisiers et Neurospin, et 12 installations hors site : GANIL, CERN, États-Unis, Japon...), soit environ **80 machines**, répartis sur les 7 départements de l'IRFU. Cette dimension multi-sites et multi-serveurs confère au projet un caractère international. Le projet concerne :

- le support utilisateurs ;
- les développements logiciels ;
- la maintenance et l'industrialisation progressive de la solution.

### Objectifs du projet

L'organisation actuelle du projet présente une **criticité forte sur l'expertise technique** : la responsabilité de l'ensemble de la solution MUSCADE (architecture, développement, support) repose aujourd'hui sur une seule ressource experte au laboratoire, moi-même. Cette situation, bien qu'elle ait permis d'assurer la continuité du projet, n'est pas soutenable à moyen terme et constitue le point de départ de la démarche managériale présentée dans ce dossier. Les objectifs du projet MUSCADE sont donc :

- garantir la continuité de service et la fiabilité de la solution sur l'ensemble des installations existantes ;
- réduire la dette technique en remplaçant progressivement des développements spécifiques historiques par des solutions standardisées et pérennes ;
- **répartir les compétences au sein de l'équipe support** et réduire la dépendance à une expertise unique, notamment en autonomisant l'équipe et les utilisateurs grâce à l'IA ;
- explorer, dans le cadre de cette certification, l'apport de l'IA générative pour fiabiliser et accélérer les activités de suivi opérationnel, d'analyse d'incidents et de pilotage, afin de dégager du temps pour le développement, la correction durable des anomalies et la formation des collègues.

---

## 1.2 Mon rôle

Depuis le 1er octobre 2025, je suis **Cheffe de produit MUSCADE** pour une durée de quatre ans, en plus de mon rôle d'Experte Senior en génie logiciel (nommée Experte DRF en janvier 2025 puis Experte Senior en septembre 2025, soit une promotion en 8 mois) et de référente sur les développements Java du département. Si mon expertise technique reste un pilier de ce rôle, la mission de Cheffe de produit est avant tout une **mission de management et de coordination d'équipe** : je suis responsable de l'organisation du support, de la répartition des activités entre les membres de l'équipe (ingénieur logiciel, ingénieur automaticien, automaticien partenaire du DACM) et de la montée en compétence collective sur MUSCADE. Mes missions couvrent :

- le pilotage de l'architecture et du développement du produit MUSCADE ;
- la **coordination managériale de l'équipe support** : organisation, répartition des rôles, suivi de l'activité ;
- le déploiement d'un assistant IA dédié au support MUSCADE, objet central de ce dossier, conçu comme un levier d'autonomisation de l'équipe et des utilisateurs plutôt que comme un simple outil technique ;
- le suivi GitLab des tickets et de la feuille de route ;
- l'amélioration continue des processus, de la documentation et des pratiques de l'équipe ;
- à moyen terme, l'animation d'un centre de compétence et d'une offre de formation interne sur MUSCADE.

Cette responsabilité de produit, associée à mon rôle d'experte Java référente pour le laboratoire, a par ailleurs mis en évidence un périmètre d'activité en forte expansion, documenté factuellement par une cartographie des tickets GitLab qui me sont assignés (227 tickets ouverts, toutes familles de projets confondues). C'est précisément ce constat qui motive, dans le cadre de cette certification, un **projet de réorganisation du support et de l'équipe** : ma feuille de route MUSCADE et son volet « compétences RH » associé identifient déjà le manque d'autonomie des utilisateurs finaux et la faible redondance des compétences comme des risques majeurs pour la pérennité du projet. L'intégration de l'IA présentée dans ce dossier constitue un des leviers concrets de cette réorganisation : elle vise à transférer une partie du support de premier niveau vers un assistant IA et à redistribuer les compétences expertes au sein de l'équipe, afin que je ne reste plus un point de passage obligé sur l'ensemble des sujets MUSCADE.

*[Emplacement réservé : organigramme actuel de l'équipe support MUSCADE / capture d'écran de la cartographie des tickets GitLab]*

---

# 2. Problématique

## Situation initiale

Le support et le suivi opérationnel de MUSCADE reposent aujourd'hui largement sur des traitements manuels :

- **qualification manuelle des incidents** : chaque signalement est lu, analysé et catégorisé à la main par l'équipe support, sans aide à la recherche d'incidents similaires ni à la structuration du ticket ;
- **hétérogénéité des tickets** : les informations transmises par les utilisateurs sont de qualité inégale (contexte incomplet, absence de captures ou de journaux), ce qui allonge le diagnostic ;
- **capitalisation limitée** : les résolutions ne sont pas systématiquement transformées en procédures ou en entrées de FAQ, ce qui conduit à retraiter plusieurs fois des incidents similaires ;
- **temps consacré au reporting** : la production des indicateurs d'activité (KPI GitLab) et des comptes rendus de feuille de route est réalisée manuellement, ce qui limite la fréquence et la réactivité du pilotage ;
- **dépendance aux experts** : la quasi-totalité de l'expertise technique (Java, architecture MUSCADE) repose sur une seule personne, ce qui constitue un risque pour la continuité du support ;
- **autonomie des utilisateurs finaux quasi inexistante** sans la sollicitation directe de l'équipe support : les utilisateurs n'ont aujourd'hui pas de moyen de trouver seuls une réponse à une question courante ou une procédure, ce qui génère un flux constant de sollicitations de premier niveau vers l'équipe, et in fine vers moi-même en tant qu'unique experte.

Cette double dépendance — support concentré sur une expertise rare, et utilisateurs peu autonomes — constitue le cœur de la problématique managériale traitée dans ce dossier : il ne s'agit pas seulement d'outiller le support avec de l'IA, mais de m'en servir comme **levier de réorganisation** pour redistribuer les compétences dans l'équipe et redonner de l'autonomie aux utilisateurs.

### Difficultés identifiées

Le diagnostic du processus (cf. § 4) a permis de mettre en évidence que les activités « Exploiter les incidents » et « Piloter l'activité » concentrent le plus grand volume et le plus fort potentiel d'automatisation, alors que le processus « Déployer l'IA de manière responsable » reste, à ce stade, peu mature et doit être structuré en priorité par une gouvernance claire (charte d'usage) avant tout élargissement des automatisations.

---

# 3. Objectifs

## Objectifs métier

- **autonomiser les utilisateurs de MUSCADE** en leur donnant un premier niveau de réponse disponible en continu (FAQ assistée par IA), sans solliciter systématiquement l'équipe support ;
- **autonomiser et responsabiliser l'équipe support** en répartissant les compétences aujourd'hui concentrées sur une seule experte, afin de réduire le point de dépendance critique que je représente pour le laboratoire ;
- me permettre, en tant que cheffe de produit, de **réallouer mon temps** vers l'architecture, le développement et la correction durable des anomalies plutôt que vers le traitement au quotidien du support de premier niveau ;
- améliorer la qualité des tickets d'incidents transmis par les utilisateurs ;
- réduire le temps consacré à la qualification et au reporting ;
- homogénéiser les pratiques de traitement des incidents au sein de l'équipe support ;
- faciliter la transmission des connaissances vers de nouveaux contributeurs (automaticiens, stagiaires, apprentis), notamment via la création d'un portail central MUSCADE regroupant documentation, assistant et supports de formation.

## Objectifs IA

- qualification assistée des incidents par un assistant IA dédié ;
- génération automatisée de synthèses et de rapports d'incidents ;
- assistance documentaire (FAQ, procédures, guides utilisateurs) ;
- amélioration continue des pratiques par une veille active et un dispositif de suivi structuré.

---

# 4. Analyse du processus existant (C1)

## Cartographie AS IS

Le processus de support MUSCADE se décompose en quatre grandes activités, cartographiées à partir des tickets GitLab, des retours de l'équipe support et de la feuille de route du projet :

```
Réception d'un incident (Utilisateur)
        ↓
Qualification manuelle (lecture, vérification, catégorisation)
        ↓
Diagnostic (recherche d'incidents similaires, documentation, journaux)
        ↓
Traitement (correction, test, documentation de la résolution)
        ↓
Clôture (information utilisateur, mise à jour documentaire)
```

Ce même schéma s'applique, en parallèle, à l'activité « Capitaliser les connaissances » (rédaction et mise à jour de procédures) et à l'activité « Piloter l'activité » (collecte des KPI GitLab, tableaux de bord, communication des résultats).

*[Emplacement réservé : schéma AS IS (diagramme visuel du processus actuel, à insérer dans la version DOCX finale)]*

| Processus | Volume | Temps passé | Irritants identifiés | Risques (erreur/conformité) | Potentiel d'automatisation | Priorité |
| --- | --- | --- | --- | --- | --- | --- |
| Exploiter les incidents | Important | Important | Recherche et synthèse manuelles des tickets GitLab | Erreurs de qualification, perte d'information | Très fort | ⭐⭐⭐ |
| Piloter l'activité | Important | Moyen | Extraction et consolidation manuelles des KPI | Indicateurs incomplets ou retardés | Fort | ⭐⭐ |
| Capitaliser les connaissances | Moyen | Moyen | Rédaction documentaire chronophage | Documentation obsolète | Fort | ⭐ |
| Déployer l'IA de manière responsable | Faible | Faible | Processus encore peu mature | Risque de non-conformité si absence de cadre | Moyen | ⭐ |

**Processus prioritaire n°1 : Exploiter les incidents.** Le volume de tickets est important, les données GitLab sont déjà structurées, et l'IA peut accélérer la qualification, la recherche d'incidents similaires, la synthèse et la génération de comptes rendus, tout en conservant une validation humaine.

**Processus prioritaire n°2 : Piloter l'activité.** Les KPI GitLab peuvent être extraits et synthétisés automatiquement afin d'identifier des tendances et des besoins en ressources — les indicateurs restant strictement agrégés par projet et jamais utilisés pour évaluer individuellement un collaborateur.

Le processus « Déployer l'IA de manière responsable » est identifié mais volontairement non prioritaire en termes d'automatisation à ce stade : le laboratoire n'ayant pas encore une maturité suffisante sur ces pratiques, une charte d'usage constitue la première étape indispensable avant tout élargissement.

### Forces

- Les données d'incidents sont déjà centralisées et structurées dans GitLab (labels, projets, historique), ce qui facilite tout traitement automatisé ou assisté par IA.
- L'équipe support dispose d'une organisation claire par fonctions (cheffe de projet, ingénieur logiciel, ingénieur automaticien, automaticien partenaire), transposable directement dans la conception de l'assistant.
- Une première expérience de rédaction de documentation « IA Ready » (variables documentaires) facilite d'ores et déjà l'anonymisation et la réutilisation des contenus.

### Faiblesses

- Forte dépendance à une expertise individuelle (Java, architecture MUSCADE), sans redondance suffisante.
- Processus de qualification non standardisé : la qualité d'un ticket dépend fortement de l'utilisateur qui le rédige.
- Capitalisation des résolutions en FAQ ou procédures peu systématique, ce qui génère de la réinvention.
- Gouvernance de l'usage de l'IA encore informelle au démarrage du projet (aucun cadre écrit avant la présente certification).

### Opportunités

- L'IA générative permet d'assister la qualification, la synthèse et la rédaction sans remettre en cause la responsabilité experte finale.
- Un assistant dédié, disponible en continu, peut réduire les sollicitations répétitives du support de premier niveau et améliorer l'autonomie des utilisateurs.
- L'automatisation du reporting (KPI, comptes rendus) libère du temps expert pour l'analyse et la décision.

### Risques

- Risque de divulgation de données sensibles (adresses IP, noms de serveurs, certificats, données personnelles) si l'anonymisation n'est pas systématique avant transmission à une IA externe.
- Risque de décision automatisée non maîtrisée sur un système en production si le périmètre d'usage de l'IA n'est pas clairement délimité.
- Risque d'usage des indicateurs GitLab à des fins d'évaluation individuelle si la gouvernance ne l'interdit pas explicitement.

---

# 5. Gouvernance IA

## Confidentialité

La gouvernance de l'usage de l'IA sur le projet MUSCADE s'appuie sur trois piliers complémentaires, correspondant à des questions distinctes :

| Pilier | Question | Application au projet MUSCADE |
| --- | --- | --- |
| AI Act | Ai-je le droit d'utiliser une IA pour cette tâche ? | Trois niveaux d'usage définis : autorisé, autorisé sous validation humaine, interdit (cf. charte). |
| RGPD | Puis-je transmettre ces données à une IA ? | Anonymisation systématique avant transmission (noms, e-mails, IP, noms de serveurs, certificats, secrets). |
| Obligations légales | Comment utiliser l'IA vis-à-vis des collaborateurs ? | Les KPI GitLab ne servent jamais à l'évaluation individuelle ; ils restent agrégés par projet, composant ou période. |

Le périmètre d'usage retenu pour le projet distingue trois niveaux :

- 🟢 **IA autorisée** : synthèse d'activité, rédaction de procédures, préparation des formations, aide à la rédaction documentaire, synthèse de réunions, génération de FAQ, préparation de communications utilisateurs.
- 🟡 **IA assistée avec validation humaine** : analyse des tickets GitLab, diagnostic de premier niveau, propositions de répartition des tâches, analyse de KPI, propositions d'actions correctives.
- 🔴 **IA interdite ou hors périmètre** : affectation automatique de tâches à un collaborateur, décision de priorité impactant une expérience, fermeture automatique d'un ticket sans validation humaine, interruption d'un système en production, décision d'exclusion d'un utilisateur ou d'arrêt de service.

Concrètement, la minimisation des données se traduit par :

- l'anonymisation des tickets GitLab, comptes rendus et e-mails avant toute utilisation avec une IA ;
- l'extraction des données GitLab via un script Python local (API GitLab), permettant de filtrer et d'agréger les informations avant tout envoi à une IA ;
- l'exclusion explicite des solutions non conformes au cadre CEA ou à l'AI Act pour des données sensibles (par exemple DeepSeek ou Grok) ;
- l'usage d'une **table de variables documentaires** placée en tête de document (principe « IA Ready », détaillé en annexe), qui permet de centraliser en un seul endroit les informations sensibles ([PROJECT], [PROJECT_MANAGER], [SERVER], [SERVER_IP]...) et de vérifier en un point unique qu'aucune donnée confidentielle ne subsiste avant transmission à une IA.

## Charte IA

Un livrable central de cette certification est la **Charte d'utilisation responsable de l'IA — Projet MUSCADE** (CEA Irfu/DIS/LDISC), qui formalise l'ensemble de ces principes pour l'équipe projet. Elle s'articule autour de cinq principes fondamentaux — responsabilité, protection des données, esprit critique, transparence et sobriété — et définit :

- les règles d'utilisation par catégorie d'usage (autorisé, sous validation, interdit) ;
- les règles d'usage des indicateurs GitLab (jamais nominatifs, toujours agrégés) ;
- le principe documentaire « IA Ready » (table de variables) ;
- une checklist de bonnes pratiques avant toute utilisation d'un outil d'IA ;
- l'engagement individuel de chaque membre de l'équipe.

Cette charte n'est pas une charte officielle du CEA : il s'agit d'une application concrète, au niveau du projet MUSCADE, des principes travaillés pendant la certification RS7424, conçue pour être évolutive au fil des retours d'expérience et des évolutions réglementaires (RGPD, AI Act).

*(Voir annexe : Charte_IA_MUSCADE.docx)*

---

# 6. Reconfiguration du processus (C2)

## Cartographie TO BE

*[Emplacement réservé : schéma TO BE (diagramme visuel du processus cible, à insérer dans la version DOCX finale)]*

Workflow cible :

```
Utilisateur
   ↓
Assistant IA (Muscade Incident Assistant)
   ↓
Qualification assistée (questions guidées, collecte des informations)
   ↓
Génération du ticket structuré (Markdown)
   ↓
GitLab
   ↓
Expert (diagnostic, résolution)
   ↓
Résolution
   ↓
FAQ / Base documentaire (capitalisation)
```

Ce même schéma cible s'applique de façon transverse aux quatre processus identifiés dans le diagnostic (exploiter les incidents, piloter l'activité, capitaliser les connaissances, déployer l'IA de manière responsable), chacun étant reconfiguré selon le même principe : une étape d'assistance IA suivie d'une validation humaine systématique avant toute diffusion ou décision.

Un point clé de cette reconfiguration concerne la **FAQ de l'assistant**, qui apporte les réponses de premier niveau aux questions courantes des utilisateurs. À terme, cette FAQ ne sera plus maintenue manuellement : elle sera **directement connectée à GitLab**, de sorte que toute mise à jour des documents de référence du projet (procédures, wiki, résolutions capitalisées) soit automatiquement répercutée dans les réponses de l'assistant, sans double saisie ni risque de désynchronisation entre la documentation « officielle » et celle utilisée par l'IA.

## Nouveaux rôles

La reconfiguration du processus fait émerger, sans créer de nouveaux postes, une évolution des responsabilités existantes, dont l'objectif managérial est de sortir d'une organisation centrée sur une expertise unique :

- **Cheffe de produit** : pilote la configuration et l'amélioration continue de l'assistant IA, valide les contenus générés avant diffusion, et supervise l'usage conforme à la charte. Sa charge de support de premier niveau diminue progressivement, ce qui lui permet de réallouer du temps à l'architecture, au développement, à la correction durable des anomalies, à la création d'un portail central MUSCADE (documentation, assistant, ressources) et à la formation des collègues.
- **Équipe support (ingénieurs, automaticiens)** : passe d'un rôle de qualification manuelle à un rôle de validation et d'expertise sur les cas remontés par l'assistant, avec une répartition plus explicite des compétences entre ses membres et davantage de temps disponible pour le développement et la formation — réduisant ainsi la dépendance du laboratoire à une seule ressource experte.
- **Utilisateurs finaux** : gagnent en autonomie grâce à un assistant disponible en continu pour les questions courantes (FAQ), la recherche de procédures et la déclaration guidée d'un incident, réduisant d'autant les sollicitations directes de l'équipe support.

## Comparaison avant / après

|Avant|Après|
|------|------|
|Qualification manuelle|Qualification assistée par l'IA, avec validation humaine|
|Reporting manuel|Synthèse et KPI générés semi-automatiquement (script Python + IA)|
|FAQ peu alimentée|Capitalisation automatique des résolutions vers la FAQ|
|Sollicitations fréquentes du support N1|Autonomie accrue des utilisateurs via l'assistant, disponible 24/7|
|Charge concentrée sur l'expert unique|Temps expert réalloué au développement, à l'architecture et à la formation|

---

# 7. Choix des outils (C3)

## Outils étudiés

| Outil | Usage | Pourquoi |
| --- | --- | --- |
| ChatGPT (Custom GPT) | Assistant « Muscade Incident Assistant » | Polyvalence, RAG simple via fichiers, GPT Actions pour déclencher un workflow externe |
| Claude | Rédaction, scripts Python, gouvernance | Excellence en structuration documentaire, grande fenêtre de contexte, qualité rédactionnelle pour la charte IA et les documents de fond |
| Gamma | Présentations | Génération rapide de supports visuels (organigrammes, tableaux, schémas) à partir d'un contenu texte/Markdown |
| Make | Automatisation / orchestration | Réception des données de l'assistant (webhook), envoi automatique du ticket au support par e-mail |
| GitLab | Suivi des incidents | Source de vérité des tickets et des KPI, API riche pour l'extraction |
| Google Forms | Évaluation de la satisfaction | Questionnaires avant déploiement et à 3 mois |

Un tableau comparatif plus large des IA génératives et de leurs assistants personnalisés a été établi pendant la formation (ChatGPT/Custom GPT, Claude/Projects, Gemini/Gems, Microsoft Copilot/Copilot Studio, Genspark/Super Agents), chacun présentant des forces et limites propres (souveraineté des données, intégration à l'écosystème existant, richesse du RAG).

## Pourquoi plusieurs IA ?

Le choix ne s'est pas porté sur un outil unique mais sur une **combinaison raisonnée**, chaque IA étant utilisée pour ce qu'elle fait le mieux, afin de limiter la multiplication des abonnements payants et le coût cognitif du changement d'outil :

- **Claude** constitue le cœur du dispositif pour tout ce qui touche à la rédaction de fond, la structuration documentaire (JSON, Markdown), l'écriture de scripts Python (extraction GitLab) et la rédaction des documents de gouvernance (charte IA), grâce à sa capacité à traiter des documents longs et à produire un rendu propre.
- **ChatGPT** porte l'assistant conversationnel proprement dit (Muscade Incident Assistant), grâce aux Custom GPTs et aux GPT Actions permettant de déclencher un scénario Make.
- **Gamma** est utilisé exclusivement pour la restitution visuelle (présentations, supports de formation), où sa rapidité et son esthétique sont supérieures à une rédaction manuelle.
- **Make** assure l'orchestration technique (réception du ticket qualifié, envoi automatique au support), complémentaire de l'IA générative : là où l'IA produit du contenu, l'automatisation assure la circulation fiable des données entre applications.

Cette complémentarité entre IA conversationnelle et outil de workflow ouvre la perspective d'un processus MUSCADE largement automatisé de bout en bout, depuis l'extraction des incidents jusqu'à la production des livrables — tout en conservant la gouvernance définie dans la charte (exclusion des outils non conformes à l'AI Act pour les données sensibles, par exemple DeepSeek ou Grok).

---

# 8. Conception des prompts

## Méthodologie

La conception des prompts a suivi une démarche itérative :

- première version du prompt testée sur un cas d'usage réel (ex. génération d'un support de formation à l'assistant MUSCADE) ;
- analyse du résultat (points forts, limites) ;
- simplification ou enrichissement du prompt pour obtenir un résultat directement exploitable en une seule génération (« One-Shot ») plutôt qu'au terme de plusieurs allers-retours ;
- capitalisation des prompts validés dans une bibliothèque réutilisable (documentation du projet, GitLab).

## Prompt principal

Le prompt de configuration de l'assistant **Muscade Incident Assistant** (utilisé pour créer le Custom GPT) définit :

- **Rôle** : *« Tu es un assistant Support Niveau 1 spécialisé dans la supervision MUSCADE des installations scientifiques. Tu accompagnes les exploitants, développeurs et chefs de projet dans la qualification d'un incident avant sa déclaration. [...] Tu guides l'utilisateur étape par étape en posant uniquement les questions pertinentes. Tu ne tires jamais de conclusion sans éléments suffisants. »*
- **Missions** : qualifier précisément un incident, identifier les informations manquantes, produire un ticket GitLab structuré et directement exploitable, proposer une première analyse des causes possibles sans jamais affirmer un diagnostic définitif.
- **Informations collectées avant rédaction du ticket** : identification (manip, système, IP/hôte, équipement), chronologie (date, heure, caractère permanent ou intermittent), symptômes, éléments de diagnostic (messages d'erreur, logs, captures), scénario de reproduction, contexte (intervention récente, mise à jour, maintenance...).
- **Sortie attendue** : titre d'incident, description structurée, liste des pièces jointes attendues, labels GitLab proposés, niveau de priorité justifié (Critique / Haute / Normale / Faible).
- **Cadre et limites** : ton technique, factuel et neutre ; interdiction absolue de divulguer mots de passe ou données sensibles ; interdiction d'inventer une information manquante, de conclure sans preuve ou de modifier les journaux fournis.

Le prompt utilisé pour la génération du support de présentation Gamma illustre la même logique de contraintes explicites (anonymisation des noms de collaborateurs, usage exclusif des fonctions, nombre de diapositives, style visuel imposé), garantissant un résultat directement exploitable et conforme à la charte.

## Difficultés rencontrées

- Trouver le bon niveau de granularité des questions posées par l'assistant : trop peu de questions produit un ticket incomplet, trop de questions décourage l'utilisateur.
- Garantir que l'assistant ne « conclue » jamais à une cause sans preuve, ce qui a nécessité d'expliciter clairement cette interdiction dans le prompt.
- Anonymiser en amont les documents de référence (feuille de route contenant des noms de collaborateurs) avant de les transmettre à l'IA pour la génération de supports, ce qui a demandé une reformulation manuelle préalable plutôt qu'un simple copier-coller.

---

# 9. Réalisations (C4)

## GPT MUSCADE

Le **Muscade Incident Assistant** est un Custom GPT (ChatGPT) qui consulte la documentation MUSCADE, guide la qualification d'un incident par une série de questions, génère un ticket au format Markdown, puis — après validation explicite de l'utilisateur — déclenche une GPT Action appelant un scénario Make qui envoie automatiquement un e-mail de notification au support. Trois amorces de conversation sont proposées (signaler un incident, poser une question, consulter la FAQ), s'appuyant sur les documents de référence du projet.

*[Emplacement réservé : capture d'écran de l'interface du Muscade Incident Assistant]*

## Workflow Make

Le scénario Make reçoit, via un webhook, les données qualifiées transmises par l'assistant et orchestre l'envoi automatique du ticket d'incident (par e-mail) vers l'équipe support, démontrant une automatisation de bout en bout en Low Code, du signalement initial jusqu'à la notification.

*[Emplacement réservé : capture d'écran du scénario Make et de l'e-mail généré]*

## Production n°1

**Support utilisateur** : un mini-site d'aide (help-muscade.md) présentant le déroulement d'un signalement (« vous décrivez le problème → l'assistant pose quelques questions → il vérifie les informations → vous validez → le support reçoit un ticket complet »), des exemples de prompts par catégorie (incidents, questions, procédures) et une FAQ destinée aux utilisateurs non experts en IA ni en MUSCADE.

*[Emplacement réservé : capture d'écran du site d'aide]*

## Production n°2

**Présentation Gamma** : support de présentation de l'organisation du support MUSCADE (missions, organisation de l'équipe, répartition des responsabilités, processus de traitement d'un incident, rôle de l'assistant IA, bénéfices attendus), destiné aux nouveaux collaborateurs.

*[Emplacement réservé : captures d'écran des diapositives clés de la présentation Gamma]*

## Autres productions

- **FAQ** MUSCADE (exemples d'incidents, questions et procédures types) ;
- **Guide rapide** d'utilisation de l'assistant MUSCADE ;
- **KPI** et dispositif de suivi (cf. § 10) ;
- **Charte IA MUSCADE** (cf. § 5).

---

# 10. Évaluation (C5)

## Précision sur le niveau d'avancement

Cette certification s'adresse à des managers, dont le rôle est de définir la stratégie d'intégration de l'IA et la gouvernance associée, en déléguant le plus souvent la mise en œuvre technique concrète à des experts IA ou informatiques. Ce chapitre présente donc **le dispositif d'évaluation tel qu'il est prévu d'être déployé**, et non les résultats d'un déploiement déjà généralisé.

À ce jour, le projet MUSCADE n'a pas encore intégré l'assistant IA en production : j'ai développé un **POC (Proof of Concept)** fonctionnel sur le processus de gestion des incidents (qualification assistée par le Muscade Incident Assistant + envoi automatique d'un ticket par e-mail via Make), qui démontre la faisabilité technique et sert de base à la généralisation prévue. Les indicateurs et objectifs chiffrés ci-dessous sont donc des **cibles prévisionnelles**, cohérentes avec l'analyse comparative avec/sans IA (§7-8), qui seront mesurées une fois le déploiement engagé. Étant moi-même experte technique, j'ai pu, en parallèle de cet exercice managérial, tester plusieurs outils et configurations qui iront au-delà du strict périmètre attendu pour la certification, et qui seront présentés en soutenance.

## KPI

| Indicateur | Objectif |
| --- | --- |
| Temps de qualification des incidents | -30 % |
| Temps de reporting / rédaction | -40 à -50 % |
| Satisfaction des utilisateurs | > 80 % |

Ces objectifs prévisionnels s'appuient sur l'analyse comparative du processus avec et sans IA : au-delà du gain de temps, les effets attendus concernent l'amélioration de la qualité des tickets (formulaire guidé plutôt qu'informations incomplètes), la réduction des sollicitations répétitives grâce à l'autonomie apportée par l'assistant (disponible 24/7), et une meilleure capitalisation des connaissances dans la base documentaire.

Point de vigilance assumé dans l'analyse : l'IA ne remplace pas l'expertise humaine — les réponses doivent être validées pour les situations critiques —, la base documentaire doit être maintenue à jour, et les données sensibles doivent rester protégées à chaque étape.

## Dispositif de suivi

| KPI | Collecte | Fréquence | Objectif |
| --- | --- | --- | --- |
| Satisfaction des utilisateurs | Google Forms | Avant déploiement / 3 mois | > 80 % d'adhésion |
| Autonomie des utilisateurs | Google Forms | Avant déploiement / 3 mois | Augmenter l'autonomie |
| Utilisation du GPT MUSCADE | Google Forms + statistiques GPT | Mensuel | Suivre l'adoption |
| Temps de qualification des incidents | GitLab | Mensuel | -30 % |
| Temps moyen de résolution | GitLab | Mensuel | Réduction continue |
| Nombre de tickets clôturés | GitLab | Mensuel | Augmentation |
| Temps consacré aux questions répétitives | Retours équipe support | Mensuel | Réduction |
| Temps consacré au développement et aux formations | Retours équipe support | Mensuel | Augmentation |
| Qualité des tickets (complétude) | GitLab + revue support | Mensuel | Amélioration continue |

Ce dispositif combine mesures avant/après déploiement (questionnaires), suivi continu (extraction GitLab mensuelle) et retours qualitatifs de l'équipe support, afin de mesurer objectivement l'impact du déploiement de l'assistant, son adoption par les utilisateurs et les axes d'amélioration à prioriser.

## Veille IA

La veille technologique combine une veille automatisée et une veille par expérimentation :

- **Sources** : brief hebdomadaire automatique « IA & Science » (planification ChatGPT) ; expérimentation régulière des nouveaux outils (ChatGPT, Gemini, Claude, Gamma, Make, Genspark) sur des cas d'usage réels du projet ; blogs et annonces officielles des éditeurs (OpenAI, Google, Anthropic) ; retours des utilisateurs et de l'équipe support.
- **Fréquence** : suivi hebdomadaire via le brief automatisé, complété par une veille active lors de la sortie de nouvelles fonctionnalités.
- **Organisation / journal** : les informations utiles sont centralisées dans le journal de bord du projet (Markdown), les GPT spécialisés (RS7424, MUSCADE) et la documentation du projet, ce qui conserve un historique des expérimentations.
- **Exploitation** : chaque nouveauté pertinente fait l'objet d'une preuve de concept (POC) avant intégration progressive au projet — c'est ainsi qu'ont été introduits le GPT spécialisé MUSCADE, le workflow Make de qualification, la génération automatique de rapports d'incidents, l'usage de Gamma pour les présentations et celui de Gemini pour la création rapide du questionnaire Google Forms.

---

# 11. Analyse critique

## Ce qui a fonctionné

- La démarche de diagnostic préalable (cartographie AS IS, priorisation par volume/temps/potentiel d'automatisation) a permis de concentrer l'effort sur les deux processus à plus forte valeur ajoutée (exploiter les incidents, piloter l'activité) plutôt que de disperser les développements.
- La combinaison IA générative + outil de workflow (Make) s'est révélée pertinente : l'IA produit et structure le contenu, l'automatisation assure la circulation fiable des données entre GitLab, l'assistant et l'équipe support.
- Le principe documentaire « IA Ready » (table de variables) a simplifié concrètement l'anonymisation et la réutilisation des documents, sans nécessiter d'outil d'anonymisation dédié.
- La rédaction progressive du rapport à partir de livrables intermédiaires produits à chaque module a évité une rédaction finale de zéro et a favorisé une consolidation continue des connaissances.

## Difficultés rencontrées

- L'anonymisation préalable de documents internes (feuille de route contenant des noms de collaborateurs) avant transmission à une IA a demandé un travail de reformulation manuelle non négligeable.
- Le calibrage du niveau de questionnement de l'assistant (ni trop, ni trop peu) a nécessité plusieurs itérations de prompt.
- Le passage de la théorie (identification d'un cas d'usage) à la mise en œuvre opérationnelle concrète (script Python, intégration API, agent IA) a confirmé la nécessité d'une expertise technique, au-delà des seules compétences managériales visées par le référentiel — expertise que je possède, ce qui m'a permis de pousser l'expérimentation au-delà du strict exercice demandé.
- La criticité de l'expertise unique, déjà identifiée dans ma feuille de route MUSCADE, rappelle que la réussite de cette transformation dépend autant de la réorganisation managériale de l'équipe que des outils IA eux-mêmes.

## Limites

- Le dispositif présenté n'est à ce stade qu'un **POC** (gestion des incidents + notification par e-mail via Make) : le déploiement généralisé de l'assistant auprès de l'ensemble des utilisateurs et de l'équipe support n'a pas encore eu lieu, et les KPI restent donc des cibles prévisionnelles plutôt que des résultats mesurés.
- L'assistant reste dépendant de la qualité et de la mise à jour de la documentation MUSCADE qui l'alimente ; la connexion directe de la FAQ à GitLab, prévue pour garantir la synchronisation des contenus, n'est pas encore réalisée.
- La gouvernance IA reste, pour l'instant, un document de travail propre au projet MUSCADE et non une charte officielle validée au niveau du CEA.
- La réorganisation de l'équipe et la redistribution des compétences restent, à ce stade, à l'état de projet ; leur mise en œuvre effective dépendra également d'arbitrages managériaux avec ma hiérarchie, indépendants de la seule dimension technique de ce dossier.

## Perspectives

- Extraction GitLab via API, de façon industrialisée (au-delà du script Python ponctuel actuel) ;
- mise en place d'un pipeline CI/CD pour automatiser la production régulière des KPI et des rapports ;
- RAG documentaire complet, alimenté par l'ensemble de la documentation MUSCADE et des procédures capitalisées ;
- évolution vers un agent IA plus autonome, capable de proposer des recherches d'incidents similaires directement dans GitLab, tout en conservant la validation humaine systématique définie dans la charte.

---

# 12. Retour d'expérience personnel

## Ce que cette formation m'a apporté

Cette certification m'a permis de structurer une démarche que j'expérimentais déjà de manière empirique dans mon activité quotidienne (utilisation ponctuelle de l'IA pour la rédaction ou l'analyse), en lui donnant un cadre méthodologique complet : diagnostic, reconfiguration, choix d'outils, réalisation et amélioration continue. Elle m'a également conduite à formaliser, pour la première fois, une gouvernance explicite de l'usage de l'IA sur le projet MUSCADE, alors que ces pratiques restaient jusque-là informelles.

Un des apports les plus marquants a été la prise de conscience que la valeur d'un assistant IA ne réside pas uniquement dans la qualité de ses réponses, mais dans sa capacité à s'intégrer dans un dispositif complet — GPT, workflow d'automatisation, GitLab, documentation, tableau de bord — produisant des données réellement exploitables pour le pilotage du projet.

## Points forts

- Une méthode pédagogique fondée sur des livrables intermédiaires réguliers, qui a permis une rédaction progressive du rapport plutôt qu'une rédaction finale de zéro, réduisant la charge cognitive et facilitant la consolidation des connaissances au fil des modules.
- Un accompagnement individualisé compatible avec une reprise d'activité nécessitant un rythme mesuré.
- Une application directe et concrète des principes étudiés à un projet réel (MUSCADE), qui donne au dossier une valeur qui dépasse le seul exercice de certification.

Cette certification s'inscrit plus largement dans une trajectoire personnelle de vulgarisation et de structuration d'une expertise : nommée Experte du CEA en génie logiciel puis Experte Senior en IHM et SCADA, je porte l'ambition de contribuer à faire émerger un véritable pôle de compétence au CEA sur ces thématiques. J'ai amorcé cette démarche à travers *Katy In Control*, un podcast de vulgarisation scientifique consacré aux SCADA (EPICS, TANGO) et, de plus en plus, à l'IA appliquée à ces domaines — la présente certification RS7424 en constituant un prolongement naturel, tant sur le fond (gouvernance de l'IA appliquée à un cas réel) que sur la forme (une nouvelle occasion de rendre accessibles des sujets techniques à un public plus large).

## Points à améliorer

- Le format du modèle de rapport fourni (PowerPoint) est utile pour donner une trame commune, mais un format DOCX ou Markdown, plus adapté à la rédaction longue, aux relectures et au suivi des versions, aurait facilité davantage le travail collaboratif et itératif.
- Le positionnement, dès le début du parcours, du questionnaire d'évaluation « à chaud » (qui ne devrait être rempli qu'en fin de formation) a pu créer une ambiguïté pour les nouveaux participants.
- Le prérequis d'expérience en management de proximité gagnerait à être élargi explicitement aux chefs de projet, coordinateurs et experts techniques pilotant des processus de travail sans exercer nécessairement un management hiérarchique — profil pourtant pleinement bénéficiaire des compétences travaillées durant la certification.

---

# Conclusion

Cette certification m'a permis de transformer un projet réel de support informatique en un véritable projet d'intégration de l'IA générative. Au-delà des outils utilisés, elle m'a conduit à structurer une démarche complète de transformation des processus intégrant gouvernance, sécurité, automatisation, amélioration continue et accompagnement des utilisateurs.

Le projet MUSCADE constitue désormais une base concrète pouvant être poursuivie indépendamment de la certification.

---

# Annexes

- Diagnostic (Diagnostic_processus_Muscade_RS7424.docx)
- Cartographie (Cartographie_detaillee_processus_Muscade_RS7424.docx, Schematisationde2processusduprojetMuscade.pdf)
- Charte IA (Charte_IA_MUSCADE.docx)
- Comparatif avec/sans IA (RS7424_Comparatif_Avec_Sans_IA_MUSCADE.docx)
- Dispositif de suivi / KPI (RS7424_Dispositif_Suivi_MUSCADE.docx)
- Configuration de l'agent IA (Configuration_Agent_IA_MuscadeIncidentAssistant.docx)
- Guide rapide utilisateur (Guide_rapide_Utiliser_Assistant_MUSCADE.docx)
- Exercice d'intégration IA au processus (RS7424_Exercice_Integration_IA_Processus_MUSCADE.docx)
- Documents professionnels produits avec l'IA (Exercice_RS7424_MUSCADE_DocumentsPro_IA.docx)
- Veille IA (Mettre_en_place_votre_veille_IA_RS7424.docx)
- Captures GitLab (GitLabMuscadeIssues.pdf, Cartographie_Technique_KatySaintin_GitLabIssues.pdf)
- GPT MUSCADE (Muscade Incident Assistant)
- Guides utilisateurs (help-muscade.md)
- Questionnaire Google Forms
- Prompts
- Journal de bord (RS7424_JournalDeBord.md)
- CV (katysaintin.github.io/cv.html)
