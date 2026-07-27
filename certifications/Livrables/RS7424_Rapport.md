# Rapport RS7424
## Gérer et transformer les processus de travail des équipes avec l'aide de l'IA

**Version :** V1.4 (Cr1.3 : bénéfice utilisateur explicite en §3 + passé SOLEIL/ITIL en §1.2)

---

# Historique

| Version | Date | Auteur | Description |
|----------|------|---------|-------------|
|0.1|2026-07-27|Katy Saintin|Création de la structure|
|0.2|2026-07-27|Katy Saintin|Rédaction consolidée à partir des livrables intermédiaires (diagnostic, cartographies, charte IA, dispositif de suivi, journal de bord)|
|0.3|2026-07-27|Katy Saintin|Mise en avant de l'angle managérial (coordination/autonomisation de l'équipe et des utilisateurs), suppression des références EPICS/départs en retraite, clarification du statut réel (POC) des KPI, ajout d'emplacements réservés pour visuels et captures d'écran|
|0.4|2026-07-27|Katy Saintin|Ajout du bilan des compétences RS7424 (niveau atteint par compétence, points de vigilance identifiés vs référentiel de certification)|
|0.5|2026-07-27|Katy Saintin|Intégration des compléments issus de deux diagnostics IA croisés (Claude x2) : sobriété numérique (§5), mesure handicap (§6), justification Custom GPT (§7), test de lisibilité (§8), enjeux RSE/accessibilité sur les 2 productions (§9), indicateur RSE au suivi (§10). Plusieurs ajouts marqués **[à confirmer]** en attente de validation factuelle par la candidate.|
|0.6|2026-07-27|Katy Saintin|Levée de tous les **[à confirmer]** : ajout d'une note de transparence (§1.3) sur la RQTH/TDAH et l'identité éditoriale Katy Ho, et d'une section (§1.4) sur la capitalisation de 5 notions déjà validées lors de la certification RS6776 (AI Act, prompt engineering, comparatif des IA, RGPD/anonymisation, FALC/handicap). Enrichissement du cadre CEA avec la plateforme Maïa (CEA/Mistral). Bilan de compétences révisé à ~87-90 %.|
|0.7|2026-07-27|Katy Saintin|Reformulation de §1.4 : retrait de toute tournure évoquant un traitement « synthétique » ou un survol des sujets, remplacée par une formulation en termes de capitalisation sur des compétences déjà démontrées et certifiées.|
|0.8|2026-07-27|Katy Saintin|Intégration de l'audit ChatGPT : sobriété numérique reliée au workflow TO BE (§6, Cr2.3), critère de décision explicite entre versions de prompt (§8, Cr3.3), accessibilité transformée en preuve concrète via la mise en forme du rapport lui-même (§9, Cr4.3), regroupement du dispositif de suivi en 3 familles d'indicateurs Performance/Satisfaction/RSE (§10, Cr5.1). Bilan de compétences révisé à ~92-95 %, convergent avec l'estimation ChatGPT.|
|0.9|2026-07-27|Katy Saintin|Complétion du §4 à partir des livrables Diagnostic et Cartographie détaillée : ajout d'une section « Sélection des deux processus prioritaires » signalant une divergence non résolue entre le Diagnostic (priorité n°2 = Piloter l'activité) et la Schématisation produite (Exploiter + Capitaliser les connaissances) ; ajout de la description détaillée complète du processus « Exploiter les incidents » (déclencheur, étapes, dépendances, points sensibles, comparatif Make/n8n, impacts attendus) ; ajout de la schématisation visuelle des 2 processus retenus (emplacements réservés + déroulé texte).|
|1.0|2026-07-27|Katy Saintin|Arbitrage tranché en §4 : la paire officielle est désormais Exploiter les incidents + Capitaliser les connaissances (Piloter l'activité reclassé en perspective §11, non abandonné). Ajout en §11 d'un retour d'expérience sur la difficulté à limiter le périmètre du dossier (hyperfocus, besoin de concret, comparaison ChatGPT/Claude sur la clôture des tâches).|
|1.1|2026-07-27|Katy Saintin|Enrichissement de §5 avec la genèse du principe « IA Ready » (coût de l'anonymisation manuelle, évolution en deux temps : outil générique de pseudonymisation puis convention documentaire simplifiée). Ajout en §11 du développement de cet outil et du report explicite des POC Zapier/n8n/Genspark après la certification. Ajout d'une référence au second article Hors Kadre sur la traçabilité de l'usage de l'IA, en lien avec le principe de transparence de la charte.|
|1.2|2026-07-27|Katy Saintin|Ajout d'un sommaire avec ancres de navigation en début de document.|
|1.3|2026-07-27|Katy Saintin|Ajout en tête de §6 d'un paragraphe explicitant la reconfiguration du processus métier (Cr2.2) : schémas avant/après du parcours utilisateur↔support, montrant la bascule du rôle du support de la qualification vers l'expertise/résolution.|
|1.4|2026-07-27|Katy Saintin|Traitement de Cr1.3 : ajout en §1.2 d'une phrase sur le passé de support opérationnel à SOLEIL et la formation ITIL ; complétion de §3 Objectifs métier avec le bénéfice utilisateur explicite (point d'entrée unique, guidé, rassurant) et citation de la feuille de route MUSCADE comme preuve que cet objectif préexistait à la certification.|

---

---

# Sommaire

*(Ancres au format GitHub — peuvent varier légèrement selon la visionneuse Markdown utilisée.)*

- [Résumé exécutif](#résumé-exécutif)
- [1. Présentation du contexte](#1-présentation-du-contexte)
  - [1.1 Présentation du laboratoire](#11-présentation-du-laboratoire)
  - [1.2 Mon rôle](#12-mon-rôle)
  - [1.3 Note de transparence — situation personnelle et articulation avec la certification RS6776](#13-note-de-transparence--situation-personnelle-et-articulation-avec-la-certification-rs6776)
  - [1.4 Capitalisation sur les acquis de la certification RS6776](#14-capitalisation-sur-les-acquis-de-la-certification-rs6776)
- [2. Problématique](#2-problématique)
  - [Situation initiale](#situation-initiale)
- [3. Objectifs](#3-objectifs)
  - [Objectifs métier](#objectifs-métier)
  - [Objectifs IA](#objectifs-ia)
- [4. Analyse du processus existant (C1)](#4-analyse-du-processus-existant-c1)
  - [Cartographie AS IS](#cartographie-as-is)
  - [Sélection des deux processus prioritaires](#sélection-des-deux-processus-prioritaires)
  - [Description détaillée du processus n°1 : Exploiter les incidents](#description-détaillée-du-processus-n1--exploiter-les-incidents)
  - [Schématisation visuelle des processus retenus](#schématisation-visuelle-des-processus-retenus)
- [5. Gouvernance IA](#5-gouvernance-ia)
  - [Confidentialité](#confidentialité)
  - [Charte IA](#charte-ia)
- [6. Reconfiguration du processus (C2)](#6-reconfiguration-du-processus-c2)
  - [Cartographie TO BE](#cartographie-to-be)
  - [Nouveaux rôles](#nouveaux-rôles)
  - [Comparaison avant / après](#comparaison-avant--après)
- [7. Choix des outils (C3)](#7-choix-des-outils-c3)
  - [Outils étudiés](#outils-étudiés)
  - [Pourquoi plusieurs IA ?](#pourquoi-plusieurs-ia-)
- [8. Conception des prompts](#8-conception-des-prompts)
  - [Méthodologie](#méthodologie)
  - [Prompt principal](#prompt-principal)
  - [Difficultés rencontrées](#difficultés-rencontrées)
- [9. Réalisations (C4)](#9-réalisations-c4)
  - [GPT MUSCADE](#gpt-muscade)
  - [Workflow Make](#workflow-make)
  - [Production n°1](#production-n1)
  - [Production n°2](#production-n2)
  - [Autres productions](#autres-productions)
- [10. Évaluation (C5)](#10-évaluation-c5)
  - [Précision sur le niveau d'avancement](#précision-sur-le-niveau-davancement)
  - [KPI](#kpi)
  - [Dispositif de suivi](#dispositif-de-suivi)
  - [Veille IA](#veille-ia)
- [11. Analyse critique](#11-analyse-critique)
  - [Ce qui a fonctionné](#ce-qui-a-fonctionné)
  - [Difficultés rencontrées](#difficultés-rencontrées-1)
  - [Limites](#limites)
  - [Perspectives](#perspectives)
- [12. Retour d'expérience personnel](#12-retour-dexpérience-personnel)
  - [Ce que cette formation m'a apporté](#ce-que-cette-formation-ma-apporté)
  - [Points forts](#points-forts)
  - [Points à améliorer](#points-à-améliorer)
- [Bilan des compétences RS7424](#bilan-des-compétences-rs7424)
- [Conclusion](#conclusion)
- [Annexes](#annexes)

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

Cette sensibilité à la structuration du support n'est pas nouvelle : avant de rejoindre le CEA, j'ai occupé un poste de support opérationnel au Synchrotron SOLEIL, où j'assurais notamment la formation du support de niveau 1, et je suis formée à la méthode **ITIL** (qualification et triage des tickets, traçabilité des interventions) — un bagage qui explique directement l'attention portée, dans ce dossier, à la structuration du parcours utilisateur plutôt qu'au seul outillage technique.

Cette responsabilité de produit, associée à mon rôle d'experte Java référente pour le laboratoire, a par ailleurs mis en évidence un périmètre d'activité en forte expansion, documenté factuellement par une cartographie des tickets GitLab qui me sont assignés (227 tickets ouverts, toutes familles de projets confondues). C'est précisément ce constat qui motive, dans le cadre de cette certification, un **projet de réorganisation du support et de l'équipe** : ma feuille de route MUSCADE et son volet « compétences RH » associé identifient déjà le manque d'autonomie des utilisateurs finaux et la faible redondance des compétences comme des risques majeurs pour la pérennité du projet. L'intégration de l'IA présentée dans ce dossier constitue un des leviers concrets de cette réorganisation : elle vise à transférer une partie du support de premier niveau vers un assistant IA et à redistribuer les compétences expertes au sein de l'équipe, afin que je ne reste plus un point de passage obligé sur l'ensemble des sujets MUSCADE.

*[Emplacement réservé : organigramme actuel de l'équipe support MUSCADE / capture d'écran de la cartographie des tickets GitLab]*

---

## 1.3 Note de transparence — situation personnelle et articulation avec la certification RS6776

Par souci de transparence vis-à-vis du jury, et parce que ces éléments éclairent directement plusieurs choix de ce rapport, je précise deux points personnels.

**Situation de handicap.** Je suis porteuse d'un TDAH (trouble déficitaire de l'attention avec hyperactivité), reconnu par une RQTH que j'ai transmise à l'organisme certificateur — j'ai à ce titre bénéficié de 10 minutes supplémentaires pour la soutenance orale. Ce sujet n'est donc pas pour moi une question théorique de conformité réglementaire : j'ai publié, sous mon nom de plume éditorial **Katy Ho** (Hors Kadre, sur Mediapart), un article largement diffusé et bien accueilli sur LinkedIn, *« L'IA ne m'a pas rendu la vie plus facile. Elle m'a rendu la vie possible »*, qui documente, sources neuroscientifiques à l'appui (Barkley, Safren et al.), comment l'IA conversationnelle fonctionne concrètement comme une **prothèse cognitive** pour un cerveau TDAH (externalisation de la mémoire de travail, structuration temporelle, réduction des frictions de démarrage). J'ai par ailleurs sollicité auprès de la Mission Handicap du CEA un abonnement professionnel à Claude et ChatGPT dans le cadre de ma RQTH, et je porte l'ambition de rejoindre le groupe **MAIA** du CEA (intégration de l'IA générative, cf. §1.1 et annexe communiqué CEA/Mistral du 23 juin 2026), en particulier sur le volet inclusion des personnes en situation de handicap — un sujet qui articule directement mon expertise technique (SCADA, IHM) et mon vécu personnel de handicap invisible.

**Certification RS6776, préalable à ce dossier.** J'ai obtenu, en mai 2026, la certification RS6776 *« Création de contenus rédactionnels et visuels par l'usage responsable de l'intelligence artificielle générative »* (96 % à l'écrit, 14/20 à l'oral, mention du jury : *« Très bon dossier, toutes les compétences acquises »*). Cette certification a couvert en profondeur, avec des livrables notés et validés par un jury, plusieurs notions qui recoupent le référentiel RS7424 : le prompt engineering itératif (méthode Agile en cycle V), la comparaison raisonnée de plusieurs IA génératives, la distinction RGPD/secret professionnel et la pseudonymisation, ainsi que l'accessibilité cognitive (méthode FALC). Le paragraphe suivant explique pourquoi, et comment, ce rapport RS7424 s'appuie sur ces acquis plutôt que de les redévelopper depuis zéro.

---

## 1.4 Capitalisation sur les acquis de la certification RS6776

Ce rapport RS7424 mobilise, plutôt que de les redémontrer intégralement, cinq notions déjà étudiées en profondeur, mises en pratique sur des cas réels et validées par un jury externe dans le cadre de la certification RS6776, obtenue un mois avant le début de ce parcours : l'AI Act, la méthodologie de prompt engineering, la comparaison raisonnée des IA génératives, le RGPD/l'anonymisation, et l'inclusion des personnes en situation de handicap via le FALC. Cette capitalisation me permet de concentrer l'effort de rédaction propre à RS7424 sur ce qui est spécifique à ce référentiel : la stratégie managériale de transformation d'une équipe, la reconfiguration organisationnelle et le dispositif d'amélioration continue (C1, C2, C5).

| Sujet mobilisé par capitalisation dans ce rapport | Preuve de la maîtrise préalable (RS6776) | Où le sujet apparaît dans ce rapport |
| --- | --- | --- |
| **AI Act** | Couvert en Module 1 du programme RS6776 (« enjeux éthiques et légaux : droits d'auteur, RGPD, IA Act »). Nuance importante et assumée : le jury RS6776 a lui-même noté, en réserve, que l'AI Act n'était *« pas cité côté éthique »* dans l'exercice 6 de ce dossier — un point d'amélioration que j'ai directement intégré dans la Charte IA MUSCADE (§5), qui cite explicitement l'AI Act comme pilier de gouvernance. C'est une boucle d'amélioration continue traçable entre les deux certifications. | §5 (gouvernance, charte IA) |
| **Méthodologie de prompt engineering** | Exercice 2 RS6776 : construction itérative d'un prompt (rôle, objectif, public, format, ton), explicitement rattachée à une méthode Agile en cycle V incrémental | §8 (méthodologie, prompt principal du Muscade Incident Assistant) |
| **Comparaison des IA génératives** | Boîte à outils notée de 9 IA (Claude, ChatGPT, Gamma, Canva, Copilot, Otter.ai, Trello+Butler, HeyGen, Suno) avec usages différenciés selon la tâche (« on choisit l'outil selon le besoin, pas par habitude ») | §7 (choix des outils, pourquoi plusieurs IA) |
| **RGPD / anonymisation** | Exercice 3 RS6776 : distinction RGPD vs secret professionnel, technique de pseudonymisation par variables — élément explicitement salué par le jury (*« pseudonymisation nommée comme technique dans l'analyse de confidentialité »*) | §5 (minimisation des données, table de variables « IA Ready ») |
| **Inclusion des personnes en situation de handicap (FALC)** | Exercice 4 RS6776 : rédaction d'un contenu en FALC (Facile À Lire et à Comprendre), également salué par le jury (*« référence explicite au FALC avec une mnémotechnique opérationnelle »*) | §6 (mesure d'adaptation handicap dans la reconfiguration organisationnelle), §9 (accessibilité des productions) |

Cette articulation entre les deux certifications n'est pas un raccourci de commodité : elle illustre elle-même, très concrètement, la compétence C5 (amélioration continue) — un point faible identifié par un jury sur un premier dossier a été corrigé et intégré dans le dossier suivant, avec preuve écrite à l'appui.

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
- **remplacer les sollicitations informelles des utilisateurs (téléphone, couloir, e-mail non structuré) par un point d'entrée unique, guidé et rassurant**, qui ne suppose aucune connaissance de l'organisation interne de l'équipe support : l'utilisateur n'a plus besoin de savoir *qui* contacter ni *comment* formuler sa demande, l'assistant s'en charge à sa place ;
- faciliter la transmission des connaissances vers de nouveaux contributeurs (automaticiens, stagiaires, apprentis), notamment via la création d'un portail central MUSCADE regroupant documentation, assistant et supports de formation.

Cet objectif d'autonomisation des utilisateurs n'est pas propre à cette certification : il figure explicitement dans la feuille de route MUSCADE elle-même (*RoadMapMuscade.md*, réunion du 7 octobre 2024), qui fixe comme second objectif stratégique du projet d'*« accroître l'autonomie des utilisateurs finaux de Muscade en distribuant des logiciels ne nécessitant aucune compétence informatique pour l'installation et l'utilisation »*. L'assistant IA présenté dans ce dossier constitue une déclinaison concrète de cet objectif préexistant, appliquée cette fois au parcours de signalement d'un incident plutôt qu'au seul déploiement logiciel.

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

## Sélection des deux processus prioritaires

Le diagnostic initial (tableau ci-dessus) et les livrables produits ensuite convergent sur la sélection de deux processus prioritaires : **Exploiter les incidents** et **Capitaliser les connaissances**.

**Processus prioritaire n°1 : Exploiter les incidents.** Le volume de tickets est important, les données GitLab sont déjà structurées, et l'IA peut accélérer la qualification, la recherche d'incidents similaires, la synthèse et la génération de comptes rendus, tout en conservant une validation humaine. C'est le processus le mieux documenté de ce dossier : cartographie détaillée complète (sous-section suivante), comparatif d'outils d'orchestration (Make vs n8n) et POC fonctionnel (Muscade Incident Assistant, §9).

**Processus prioritaire n°2 : Capitaliser les connaissances.** La transformation d'un ticket résolu en procédure technique répond directement à la problématique de dépendance à une expertise unique (§1.2, §2) : chaque incident capitalisé réduit d'autant le besoin de repasser par moi pour un cas similaire. Ce processus a fait l'objet d'une schématisation visuelle dédiée (sous-section suivante).

Le processus « Piloter l'activité », bien qu'identifié dans le diagnostic initial avec un potentiel d'automatisation réel, n'a pas été approfondi au-delà du diagnostic : à effort et temps constants, la priorité a été donnée à la capitalisation des connaissances, plus directement alignée avec l'objectif managérial d'autonomisation de l'équipe. Le pilotage de l'activité reste une perspective d'évolution du dispositif (§11).

Le processus « Déployer l'IA de manière responsable » est identifié mais volontairement non prioritaire en termes d'automatisation à ce stade : le laboratoire n'ayant pas encore une maturité suffisante sur ces pratiques, une charte d'usage constitue la première étape indispensable avant tout élargissement.

---

## Description détaillée du processus n°1 : Exploiter les incidents

Conformément à l'exercice de cartographie détaillée demandé par le module, le processus « Exploitation des incidents et génération du bilan hebdomadaire » a été décrit pas à pas.

**Déclencheur.** Stand-up meeting hebdomadaire MUSCADE (chaque jeudi) : la cheffe de projet fait le point sur les incidents ouverts, en cours, résolus, et les tendances par projet.

**Résultat attendu.** Production d'un rapport hebdomadaire d'incidents : nombre de tickets ouverts/fermés, répartition par projet, incidents critiques, tendances, propositions de priorisation.

| Étape | Acteur | Action | Outil | Validation | Décision |
| --- | --- | --- | --- | --- | --- |
| 1 | Support | Lancer l'extraction des incidents GitLab (CI/CD ou export) | GitLab CI/CD | Non | Non |
| 2 | Cheffe de projet | Générer le rapport d'incidents, statistiques et tendances | ChatGPT ou Claude | Non | Non |
| 3 | Cheffe de projet | Présenter les résultats et proposer les priorités | Gamma | Manager | Oui |
| 4 | Équipe MUSCADE | Distribuer les actions et issues décidées | GitLab | Oui | Fin du processus |

**Dépendances.** Étape bloquante : l'arbitrage du manager (étape 3) — sans validation, la cheffe de projet risque une surcharge de travail. Délai : le rapport peut être hebdomadaire ou mensuel selon les ressources. Double saisie : mails, appels et échanges informels doivent être retranscrits dans GitLab après détection des doublons. Particularité : le support et la cheffe de projet sont aujourd'hui principalement assurés par une même personne — ce qui rejoint directement la problématique managériale du §2.

**Points sensibles.**
- Étape la plus fragile : l'arbitrage des priorités (étape 3) — les rapports doivent expliciter la criticité métier pour aider la décision.
- Étape la plus longue : la qualification, l'étiquetage des issues, la suppression des doublons et la retranscription des demandes informelles (un formulaire standard de création d'incident a été mis en place pour améliorer la qualité des tickets en amont).
- Étape la plus risquée juridiquement : aucun risque réglementaire majeur identifié ; un risque organisationnel existe en revanche si les priorités sont fixées selon les financements des projets plutôt que selon la criticité technique.
- Étape la plus automatisable : la génération du rapport statistique à partir des données GitLab.
- Étapes devant rester humaines : relecture du rapport, interprétation des résultats, arbitrage des priorités et affectation des actions — ces décisions nécessitent une connaissance du contexte opérationnel qu'une IA ne possède pas.

**Scénario d'automatisation retenu** : PDF GitLab → IA (Claude, extraction des données) → JSON → Airtable (structuration) → génération automatique de tableaux de bord, KPI, graphiques, rapport Markdown et présentation Gamma → envoi automatique par e-mail.

**Choix de l'outil d'orchestration.** Deux solutions ont été comparées pour porter ce workflow :

| Critère | Make | n8n |
| --- | --- | --- |
| Fonctionnalités | Très nombreuses, nombreux connecteurs | Très nombreuses, très personnalisable |
| Facilité d'utilisation | ★★★★★ | ★★★☆☆ |
| Interface | Très intuitive | Plus technique |
| Accessibilité | SaaS immédiatement disponible | SaaS ou auto-hébergement |
| Protection des données | Dépend du cloud utilisé | Possibilité d'hébergement interne |
| Coût | Gratuit pour petits projets puis abonnement | Open source gratuit, coût éventuel d'hébergement |
| Délai de mise en place | Très rapide | Un peu plus long |
| ROI | Très rapide grâce à la simplicité | Excellent pour des projets plus importants |

**Solution retenue : Make.** Ce choix est motivé par l'objectif principal de découvrir les principes de l'orchestration de workflows intégrant une IA générative : Make propose une interface intuitive permettant de construire rapidement un scénario complet sans compétences avancées en développement, et offre de nombreux connecteurs déjà utilisés dans le projet (GitLab, Airtable, Gmail, IA génératives). Une fois les principes maîtrisés, le workflow pourra être porté vers une solution plus technique comme n8n si les besoins d'industrialisation ou de souveraineté des données deviennent plus importants — c'est d'ailleurs très exactement ce qui a été fait dans le POC réel du Muscade Incident Assistant (§9), qui utilise Make.

**Impacts attendus** : réduction importante des tâches manuelles de traitement des rapports GitLab, suppression des ressaisies, amélioration de la fiabilité des informations, génération rapide de tableaux de bord, diffusion plus rapide de l'information aux équipes, meilleure traçabilité, et gain de temps réalloué aux activités à plus forte valeur ajoutée — cohérent avec l'objectif managérial de réallocation de mon temps posé en §1.2 et §3.

---

## Schématisation visuelle des processus retenus

Les deux processus retenus (§4, sélection ci-dessus) ont fait l'objet d'une schématisation visuelle dédiée, réalisée avec Gamma.

*[Emplacement réservé : schéma « Exploitation des incidents GitLab » — objectif, acteurs (support, cheffe de projet, manager, équipe technique), déroulé en 5 étapes (déclencheur → extraction → analyse → rapport → validation), cycle hebdomadaire du jeudi]*

*[Emplacement réservé : schéma « Capitalisation des connaissances » — transformation d'un ticket GitLab résolu en procédure technique]*

Pour ce second processus (Capitaliser les connaissances), le déroulé schématisé est le suivant : un incident résolu et son ticket GitLab clôturé déclenchent la sélection du ticket par la cheffe de projet (GitLab), puis une analyse du contenu par l'IA (ChatGPT ou Claude — problème, investigations, solution, commentaires techniques), la génération automatique d'une procédure selon un modèle Markdown prédéfini, une relecture et validation par la cheffe de projet, puis la publication (documentation GitLab, wiki, base de connaissances, supports de formation Gamma). La répartition entre ce qui est automatisable par l'IA (analyse statistique, comptage, détection de tendances, génération de rapport, proposition de synthèse) et ce qui doit rester humain (validation des résultats, arbitrage des priorités, décision managériale, communication aux équipes, prise en compte du contexte métier) est explicitée pour les deux processus — cohérent avec le principe de responsabilité posé dans la charte IA (§5).

À terme, ces schémas seront intégrés directement dans le corps du rapport plutôt que renvoyés en annexe, l'objectif étant que le rapport soit lisible de façon autonome, sans que la consultation des annexes soit indispensable à sa compréhension.

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

Ce principe « IA Ready » n'est pas parti d'une lecture théorique du RGPD, mais d'un constat pratique et coûteux en temps : anonymiser à la main chaque e-mail ou document avant de le soumettre à une IA (remplacer un nom par « Monsieur A », une IP par une variable...) devenait vite un frein à l'usage lui-même. Ma réflexion a évolué en deux temps :

1. **Un outil générique de pseudonymisation/dépseudonymisation**, envisagé sous forme d'un dictionnaire clé → valeur (à la façon d'une table de hachage simple), capable de remplacer automatiquement les données sensibles d'un document (noms de personnes, adresses IP...) par des identifiants génériques avant transmission à une IA, puis de restituer les données réelles après génération. Conçu pour être suffisamment générique pour s'appliquer à n'importe quel domaine (juridique, RH, informatique...), et non spécifique à MUSCADE. Cet outil n'est, à ce jour, pas encore développé (cf. perspectives, §11).
2. **Le format « IA Ready »**, plus simple et immédiatement applicable sans outil dédié : imposer une règle d'écriture des documents plaçant l'ensemble des données sensibles sur une page ou section isolée en tête de document (table de variables), plutôt que dispersées dans le corps du texte. Il suffit alors de retirer cette seule page avant transmission à une IA, sans traitement automatisé. C'est ce second principe, plus pragmatique, qui est effectivement appliqué sur le projet MUSCADE et formalisé dans la charte (§7 de la charte).

Sur le plan écologique, l'usage de l'IA sur le projet reste volontairement mesuré, selon un principe déjà éprouvé lors de la certification RS6776 : *« on choisit l'outil selon le besoin, pas par habitude »* (cf. §1.4). Concrètement, cela se traduit par des requêtes ciblées plutôt que des générations exploratoires répétées, et par la réutilisation systématique des prompts déjà validés (bibliothèque de prompts, cf. §8) plutôt que la régénération d'un contenu depuis zéro à chaque sollicitation. Cette sobriété d'usage, posée comme principe dans la charte (§4.5), limite la consommation énergétique et le coût des services d'IA associés au projet.

## Charte IA

Un livrable central de cette certification est la **Charte d'utilisation responsable de l'IA — Projet MUSCADE** (CEA Irfu/DIS/LDISC), qui formalise l'ensemble de ces principes pour l'équipe projet. Elle s'articule autour de cinq principes fondamentaux — responsabilité, protection des données, esprit critique, transparence et sobriété — et définit :

- les règles d'utilisation par catégorie d'usage (autorisé, sous validation, interdit) ;
- les règles d'usage des indicateurs GitLab (jamais nominatifs, toujours agrégés) ;
- le principe documentaire « IA Ready » (table de variables) ;
- une checklist de bonnes pratiques avant toute utilisation d'un outil d'IA ;
- l'engagement individuel de chaque membre de l'équipe.

Le principe de transparence (conservation des prompts importants pour assurer la traçabilité, cf. §4.4 de la charte) rejoint une réflexion que je porte également dans mon activité éditoriale : dans un second article Hors Kadre (*« Angle mort : “Fais-le toi-même. Tu as une IA” »*), je défends l'idée qu'un usage actif de l'IA (diriger, apporter son expertise, valider, corriger) se distingue d'un usage passif (copier-coller sans comprendre), et que la meilleure façon de rendre cette distinction vérifiable est d'exiger la trace du processus — prompts et échanges — plutôt que d'interdire l'outil. C'est très exactement le principe appliqué dans ce dossier et dans la charte IA MUSCADE.

Cette charte n'est pas une charte officielle du CEA : il s'agit d'une application concrète, au niveau du projet MUSCADE, des principes travaillés pendant la certification RS7424, conçue pour être évolutive au fil des retours d'expérience et des évolutions réglementaires (RGPD, AI Act).

Ces objectifs et cette gouvernance s'inscrivent, plus largement, dans le cadre normatif du CEA en matière d'IA générative. Le CEA a en effet noué, depuis 2024, un partenariat avec Mistral pour déployer **Maïa**, une plateforme d'IA générative souveraine hébergée sur site, ouverte progressivement à l'ensemble des 22 000 collaborateurs du CEA d'ici fin 2026, et encadrée par une charte d'utilisation ainsi qu'un dispositif de formation (communiqué CEA du 23 juin 2026). La doctrine affichée par le CEA — *« l'IA générative n'a pas vocation à être déployée partout ni à se substituer à l'expertise humaine ; elle doit être mobilisée en assistance, lorsque son apport est pertinent, maîtrisé et sécurisé »* — rejoint très directement le principe de responsabilité posé par la charte IA MUSCADE (§4.1 de la charte). La gouvernance propre au projet MUSCADE présentée dans ce rapport se veut donc cohérente avec, et complémentaire à, ce cadre national du CEA plutôt qu'un dispositif isolé.

*(Voir annexe : Charte_IA_MUSCADE.docx)*

---

# 6. Reconfiguration du processus (C2)

Avant d'entrer dans le détail de la cartographie cible, il convient de préciser la nature de la reconfiguration opérée : il ne s'agit pas d'un simple ajout d'un outil IA en périphérie du processus existant, mais d'une modification du point d'entrée de la relation entre l'utilisateur et le support, c'est-à-dire du processus métier lui-même.

Avant le projet, l'utilisateur adressait un e-mail libre au support, qui devait ensuite reformuler la demande, poser des questions complémentaires pour la qualifier, avant de pouvoir constituer un ticket exploitable :

```
Utilisateur
   ↓
E-mail libre
   ↓
Support
   ↓
Questions complémentaires
   ↓
Ticket exploitable
```

Depuis le POC, ce même parcours est inversé : c'est l'assistant MUSCADE qui conduit la qualification, en amont de toute intervention humaine, et transmet au support un dossier déjà structuré :

```
Utilisateur
   ↓
Assistant MUSCADE
   ↓
Qualification guidée
   ↓
Ticket complet
   ↓
Support
```

Le support n'est donc plus sollicité pour la qualification initiale de l'incident, mais intervient désormais en aval, sur l'analyse et la résolution d'un dossier déjà complet. Cette bascule du rôle du support — d'un rôle de collecte d'informations vers un rôle d'expertise sur des cas déjà qualifiés — est la transformation organisationnelle concrète que la cartographie et le tableau comparatif ci-dessous viennent détailler.

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

La reconfiguration prévoit également une mesure d'adaptation pour les personnels ou utilisateurs en situation de handicap — un sujet que je maîtrise à double titre, professionnel et personnel (cf. §1.3). Étant moi-même porteuse d'un TDAH reconnu par une RQTH, et ayant déjà mis en pratique la méthode **FALC** (Facile À Lire et à Comprendre) lors de la certification RS6776 (§1.4), je prévois d'appliquer ce même principe à la documentation MUSCADE : formulations courtes, un message par phrase, repères visuels, structuration Markdown par titres hiérarchisés (sans information encodée uniquement par la couleur), compatible nativement avec les lecteurs d'écran. Cette mesure ne relève pas d'une simple case à cocher réglementaire : elle s'inscrit dans mon ambition de contribuer, via le groupe **MAIA** du CEA (cf. §1.1, §1.3), à l'inclusion des personnes en situation de handicap dans le déploiement de l'IA générative au CEA.

La nouvelle organisation privilégie également la **sobriété numérique**, directement au niveau du workflow lui-même et non plus seulement au niveau de la gouvernance (§5) : limitation des appels à l'assistant aux seules étapes où ils apportent une réelle valeur (qualification, synthèse), réutilisation systématique des prompts déjà validés plutôt que leur régénération, capitalisation documentaire dans la FAQ pour éviter de retraiter plusieurs fois un même incident, et minimisation du volume de données transmises aux modèles (anonymisation en amont, cf. §5).

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

Un tableau comparatif plus large des IA génératives et de leurs assistants personnalisés a été établi pendant la formation (ChatGPT/Custom GPT, Claude/Projects, Gemini/Gems, Microsoft Copilot/Copilot Studio, Genspark/Super Agents), chacun présentant des forces et limites propres (souveraineté des données, intégration à l'écosystème existant, richesse du RAG). Cette grille de sélection prolonge une méthodologie déjà éprouvée et notée par un jury lors de la certification RS6776, où une « boîte à outils IA » de 9 solutions (Claude, ChatGPT, Gamma, Canva, Copilot, Otter.ai, Trello+Butler, HeyGen, Suno) avait été constituée et appliquée selon le même principe : *on choisit l'outil selon le besoin, pas par habitude* (cf. §1.4).

## Pourquoi plusieurs IA ?

Le choix ne s'est pas porté sur un outil unique mais sur une **combinaison raisonnée**, chaque IA étant utilisée pour ce qu'elle fait le mieux, afin de limiter la multiplication des abonnements payants et le coût cognitif du changement d'outil :

- **Claude** constitue le cœur du dispositif pour tout ce qui touche à la rédaction de fond, la structuration documentaire (JSON, Markdown), l'écriture de scripts Python (extraction GitLab) et la rédaction des documents de gouvernance (charte IA), grâce à sa capacité à traiter des documents longs et à produire un rendu propre.
- **ChatGPT** porte l'assistant conversationnel proprement dit (Muscade Incident Assistant), grâce aux Custom GPTs et aux GPT Actions permettant de déclencher un scénario Make.
- **Gamma** est utilisé exclusivement pour la restitution visuelle (présentations, supports de formation), où sa rapidité et son esthétique sont supérieures à une rédaction manuelle.
- **Make** assure l'orchestration technique (réception du ticket qualifié, envoi automatique au support), complémentaire de l'IA générative : là où l'IA produit du contenu, l'automatisation assure la circulation fiable des données entre applications.

Cette complémentarité entre IA conversationnelle et outil de workflow ouvre la perspective d'un processus MUSCADE largement automatisé de bout en bout, depuis l'extraction des incidents jusqu'à la production des livrables — tout en conservant la gouvernance définie dans la charte (exclusion des outils non conformes à l'AI Act pour les données sensibles, par exemple DeepSeek ou Grok).

Le choix d'un **Custom GPT** plutôt qu'un prompt réutilisé manuellement à chaque échange a été motivé par trois éléments : la **disponibilité continue** de l'assistant (24/7, sans dépendre de ma disponibilité) ; la **stabilité des consignes** dans le temps, qui évite toute dérive de prompt d'une session à l'autre ; et l'**autonomie des utilisateurs**, qui accèdent directement à l'assistant sans passer par un accès API ou par moi-même. Ce choix n'exclut pas d'évolutions futures (ex. agent plus autonome connecté à un RAG documentaire complet, cf. §11), mais correspond au niveau de maturité et aux moyens du POC actuel.

---

# 8. Conception des prompts

## Méthodologie

La conception des prompts a suivi une démarche itérative :

- première version du prompt testée sur un cas d'usage réel (ex. génération d'un support de formation à l'assistant MUSCADE) ;
- analyse du résultat (points forts, limites) ;
- simplification ou enrichissement du prompt pour obtenir un résultat directement exploitable en une seule génération (« One-Shot ») plutôt qu'au terme de plusieurs allers-retours ;
- capitalisation des prompts validés dans une bibliothèque réutilisable (documentation du projet, GitLab).

Le critère de décision entre deux versions d'un même prompt a toujours été le même : une version est retenue quand elle produit un ticket plus complet dès la première génération (moins de questions de relance nécessaires), qu'elle réduit le risque que l'assistant affirme une cause sans preuve suffisante, et que sa formulation reste compréhensible par un utilisateur non technique.

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
- Les tests successifs du prompt ont également porté sur la lisibilité des réponses générées (formulation simple, structuration claire par étapes), bien qu'aucune vérification formelle d'accessibilité (test avec un lecteur d'écran) n'ait encore été réalisée à ce stade du POC — c'est un axe d'amélioration identifié pour la suite du projet.

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

*Enjeu RSE* : ce contenu ne comporte, par construction, aucune donnée sensible ou nominative — il porte uniquement sur le mode d'emploi générique de l'assistant.

*Accessibilité* : rédigé en Markdown structuré (titres hiérarchisés, listes), ce contenu est nativement compatible avec un lecteur d'écran. Les titres hiérarchisés, listes structurées et formulations volontairement courtes utilisées dans ce rapport RS7424 lui-même (help-muscade.md a d'ailleurs été rédigé selon les mêmes principes) constituent déjà une première application concrète des principes d'accessibilité retenus pour les futurs supports MUSCADE — et non une simple intention : je prévois de systématiser cette approche selon la méthode FALC complète (phrases courtes, un message par phrase, repères visuels), déjà mise en pratique et validée par le jury lors de la certification RS6776 (§1.4).

*[Emplacement réservé : capture d'écran du site d'aide]*

## Production n°2

**Présentation Gamma** : support de présentation de l'organisation du support MUSCADE (missions, organisation de l'équipe, répartition des responsabilités, processus de traitement d'un incident, rôle de l'assistant IA, bénéfices attendus), destiné aux nouveaux collaborateurs.

*Enjeu RSE* : anonymisation des noms de collaborateurs, remplacés par leurs fonctions, avant génération (cf. §8) — technique de pseudonymisation directement transposée de la certification RS6776 (§1.4).

*Accessibilité* : Gamma applique par défaut des contrastes et une taille de police lisibles ; ce point reste à vérifier formellement sur le support final avant diffusion large, au même titre que l'application des principes FALC évoqués en §6 et en Production n°1.

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

Conformément aux attentes du référentiel (Cr5.1), le dispositif de suivi s'organise autour de trois familles d'indicateurs distinctes : l'atteinte des objectifs opérationnels (**performance**), les retours d'expérience des utilisateurs et de l'équipe (**satisfaction collaborateurs**), et les enjeux de responsabilité liés à l'usage de l'IA (**RSE**).

**🎯 Performance**

| KPI | Collecte | Fréquence | Objectif |
| --- | --- | --- | --- |
| Temps de qualification des incidents | GitLab | Mensuel | -30 % |
| Temps moyen de résolution | GitLab | Mensuel | Réduction continue |
| Nombre de tickets clôturés | GitLab | Mensuel | Augmentation |
| Qualité des tickets (complétude) | GitLab + revue support | Mensuel | Amélioration continue |
| Utilisation du GPT MUSCADE | Google Forms + statistiques GPT | Mensuel | Suivre l'adoption |

**🤝 Satisfaction collaborateurs**

| KPI | Collecte | Fréquence | Objectif |
| --- | --- | --- | --- |
| Satisfaction des utilisateurs | Google Forms | Avant déploiement / 3 mois | > 80 % d'adhésion |
| Autonomie des utilisateurs | Google Forms | Avant déploiement / 3 mois | Augmenter l'autonomie |
| Temps consacré aux questions répétitives | Retours équipe support | Mensuel | Réduction |
| Temps consacré au développement et aux formations | Retours équipe support | Mensuel | Augmentation |

**🛡️ RSE**

| KPI | Collecte | Fréquence | Objectif |
| --- | --- | --- | --- |
| Conformité à la charte IA (anonymisation avant transmission) | Revue support / auto-contrôle | Mensuel | 100 % de conformité |

Ce dernier indicateur — taux de conformité à la checklist d'anonymisation de la charte (§5) avant toute transmission de données à une IA — traduit concrètement l'enjeu RSE de protection des données dans le dispositif de suivi, et non plus seulement dans la gouvernance déclarative de la charte.

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

- La démarche de diagnostic préalable (cartographie AS IS, priorisation par volume/temps/potentiel d'automatisation) a permis de concentrer l'effort sur les deux processus à plus forte valeur ajoutée (exploiter les incidents, capitaliser les connaissances) plutôt que de disperser les développements.
- La combinaison IA générative + outil de workflow (Make) s'est révélée pertinente : l'IA produit et structure le contenu, l'automatisation assure la circulation fiable des données entre GitLab, l'assistant et l'équipe support.
- Le principe documentaire « IA Ready » (table de variables) a simplifié concrètement l'anonymisation et la réutilisation des documents, sans nécessiter d'outil d'anonymisation dédié.
- La rédaction progressive du rapport à partir de livrables intermédiaires produits à chaque module a évité une rédaction finale de zéro et a favorisé une consolidation continue des connaissances.

## Difficultés rencontrées

- L'anonymisation préalable de documents internes (feuille de route contenant des noms de collaborateurs) avant transmission à une IA a demandé un travail de reformulation manuelle non négligeable.
- Le calibrage du niveau de questionnement de l'assistant (ni trop, ni trop peu) a nécessité plusieurs itérations de prompt.
- Le passage de la théorie (identification d'un cas d'usage) à la mise en œuvre opérationnelle concrète (script Python, intégration API, agent IA) a confirmé la nécessité d'une expertise technique, au-delà des seules compétences managériales visées par le référentiel — expertise que je possède, ce qui m'a permis de pousser l'expérimentation au-delà du strict exercice demandé.
- La criticité de l'expertise unique, déjà identifiée dans ma feuille de route MUSCADE, rappelle que la réussite de cette transformation dépend autant de la réorganisation managériale de l'équipe que des outils IA eux-mêmes.
- La principale difficulté n'a pas été de choisir un processus à améliorer, mais de me limiter à deux. Mon fonctionnement — que je documente par ailleurs dans mon activité éditoriale sur le TDAH (§1.3) — m'aurait naturellement conduite à développer en parallèle un site MUSCADE complet, un assistant enrichi, un questionnaire de satisfaction et un support de formation dès qu'un point restait ambigu ou incomplet dans un module : ma tendance est de comprendre en construisant un POC concret plutôt qu'en restant dans l'abstrait, ce qui peut vite élargir un périmètre au-delà du nécessaire. Le périmètre volontairement contenu de ce dossier est donc lui-même le résultat d'une compétence exercée — poser une limite de réalisation — et non d'un manque de matière ou d'idées.
- Sur le choix des outils IA eux-mêmes, j'ai constaté une différence pratique entre ChatGPT et Claude sur ce point précis : ChatGPT a tendance à proposer systématiquement des améliorations ou extensions supplémentaires à chaque échange, ce qui, combiné à mon propre fonctionnement, peut entretenir une escalade mutuelle de scope. Claude, à l'inverse, referme davantage les tâches une fois traitées. Ce n'est pas un simple confort d'usage : c'est devenu un critère de choix d'outil à part entière, cohérent avec le principe de sobriété numérique posé en §5-§6.

## Limites

- Le dispositif présenté n'est à ce stade qu'un **POC** (gestion des incidents + notification par e-mail via Make) : le déploiement généralisé de l'assistant auprès de l'ensemble des utilisateurs et de l'équipe support n'a pas encore eu lieu, et les KPI restent donc des cibles prévisionnelles plutôt que des résultats mesurés.
- L'assistant reste dépendant de la qualité et de la mise à jour de la documentation MUSCADE qui l'alimente ; la connexion directe de la FAQ à GitLab, prévue pour garantir la synchronisation des contenus, n'est pas encore réalisée.
- La gouvernance IA reste, pour l'instant, un document de travail propre au projet MUSCADE, cohérent avec la doctrine du CEA telle qu'annoncée publiquement autour de la plateforme Maïa (§5), mais non une charte officiellement validée par la hiérarchie du CEA ou de l'IRFU.
- La réorganisation de l'équipe et la redistribution des compétences restent, à ce stade, à l'état de projet ; leur mise en œuvre effective dépendra également d'arbitrages managériaux avec ma hiérarchie, indépendants de la seule dimension technique de ce dossier.

## Perspectives

- Approfondissement du processus « Piloter l'activité », identifié dès le diagnostic (§4) mais volontairement non développé dans ce dossier faute de temps, au profit de la capitalisation des connaissances ;
- Extraction GitLab via API, de façon industrialisée (au-delà du script Python ponctuel actuel) ;
- mise en place d'un pipeline CI/CD pour automatiser la production régulière des KPI et des rapports ;
- RAG documentaire complet, alimenté par l'ensemble de la documentation MUSCADE et des procédures capitalisées ;
- évolution vers un agent IA plus autonome, capable de proposer des recherches d'incidents similaires directement dans GitLab, tout en conservant la validation humaine systématique définie dans la charte ;
- développement de l'outil générique de pseudonymisation/dépseudonymisation évoqué en §5 : dictionnaire clé → valeur (fichier local, ex. CSV), encodage avant soumission à une IA puis décodage à réception de la réponse, conçu pour fonctionner avec plusieurs IA (Claude, ChatGPT, Mistral...) et être réutilisable au-delà du seul contexte MUSCADE ;
- test, après la certification, des outils d'automatisation et d'orchestration non encore évalués par souci de limitation du périmètre pendant cette formation (Zapier, n8n, Genspark, Airtable), dans la continuité du TP de découverte des plateformes d'automatisation déjà amorcé pendant le parcours.

---

# 12. Retour d'expérience personnel

## Ce que cette formation m'a apporté

Cette certification m'a permis de structurer une démarche que j'expérimentais déjà de manière empirique dans mon activité quotidienne (utilisation ponctuelle de l'IA pour la rédaction ou l'analyse), en lui donnant un cadre méthodologique complet : diagnostic, reconfiguration, choix d'outils, réalisation et amélioration continue. Elle m'a également conduite à formaliser, pour la première fois, une gouvernance explicite de l'usage de l'IA sur le projet MUSCADE, alors que ces pratiques restaient jusque-là informelles.

Un des apports les plus marquants a été la prise de conscience que la valeur d'un assistant IA ne réside pas uniquement dans la qualité de ses réponses, mais dans sa capacité à s'intégrer dans un dispositif complet — GPT, workflow d'automatisation, GitLab, documentation, tableau de bord — produisant des données réellement exploitables pour le pilotage du projet.

Ce parcours RS7424 s'inscrit dans la continuité directe de la certification RS6776, obtenue un mois plus tôt (96 % à l'écrit, 14/20 à l'oral) — dont le jury avait notamment salué la maîtrise de la pseudonymisation et de la méthode FALC, tout en pointant l'absence de citation explicite de l'AI Act sur le volet éthique. Cette réserve, plutôt que d'être ignorée, a directement nourri la Charte IA MUSCADE de ce dossier (§5), qui cite l'AI Act comme pilier de gouvernance à part entière : une boucle d'amélioration continue concrète entre deux certifications, qui illustre à mon sens mieux qu'un long discours la compétence C5.

Sur le sujet du handicap en particulier, cette certification a également recoupé un engagement personnel que je porte par ailleurs publiquement : mon article *« L'IA ne m'a pas rendu la vie plus facile. Elle m'a rendu la vie possible »* (Hors Kadre, sous mon nom de plume Katy Ho), consacré à l'usage de l'IA comme outil de compensation cognitive pour les troubles neurodéveloppementaux, a été bien accueilli au-delà du cercle de mes lecteurs habituels. Étant moi-même concernée par un TDAH reconnu par une RQTH, je ne traite pas ce sujet comme une case réglementaire à cocher, mais comme un axe de compétence que je souhaite développer professionnellement — notamment en rejoignant le groupe MAIA du CEA sur le volet inclusion du handicap dans le déploiement de l'IA générative (§1.3).

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

# Bilan des compétences RS7424

Au début de cette formation, j'avais réalisé un glossaire personnel pour traduire le vocabulaire « manager/certification » dans mes propres concepts métier (SCADA, support, IHM), afin de vérifier que mon profil correspondait bien au référentiel. Ce tableau fait le chemin inverse : il évalue, compétence par compétence, le niveau atteint à l'issue de la formation, à partir du contenu réel de ce rapport, des livrables produits et des acquis démontrés lors de la certification RS6776 (§1.4). Il a été recoupé par deux IA distinctes (Claude et ChatGPT), dont les estimations convergent de façon indépendante.

| Compétence | Description (référentiel) | Niveau atteint | Preuves dans ce rapport | Point de vigilance restant |
| --- | --- | --- | --- | --- |
| **C1** | Élaborer une stratégie d'intégration responsable de l'IA | **Très fort** (~93-94 %) | Diagnostic AS IS (§4), charte IA (§5) ancrée dans la doctrine CEA/Maïa, sobriété numérique, AI Act cité (boucle de correction depuis RS6776, §1.4) | Validation officielle de la charte MUSCADE par la hiérarchie CEA, encore à obtenir |
| **C2** | Reconfigurer l'organisation des activités et processus avec l'IA | **Fort à très fort** (~90 %) | Cartographie TO BE (§6), nouveaux rôles, mesure handicap étayée par un vécu personnel (RQTH, TDAH, RS6776), sobriété numérique désormais reliée au workflow lui-même | Application concrète et déployée du FALC à l'ensemble de la documentation MUSCADE (au-delà du principe posé) |
| **C3** | Élaborer des requêtes et configurations opérationnelles | **Très fort** (~94-95 %) | Prompt principal documenté (§8), méthodologie itérative héritée de RS6776, critère de décision explicite entre versions de prompt, choix d'outils justifié (§7) | Aucune vérification formelle d'accessibilité (lecteur d'écran) réalisée sur le POC à ce stade |
| **C4** | Créer ou améliorer des contenus professionnels avec l'IA | **Fort à très fort** (~92 %) | Deux productions alignées à un objectif (§9), RSE explicité, accessibilité désormais démontrée par la mise en forme même du rapport (preuve, pas seulement intention) | Vérification formelle du contraste Gamma, à finaliser avant diffusion |
| **C5** | Inscrire ses pratiques dans une démarche d'amélioration continue | **Excellent** (~95-96 %) | Dispositif de suivi (§10) structuré en 3 familles d'indicateurs (performance, satisfaction, RSE), comparatif avec/sans IA, veille IA, boucle d'amélioration continue traçable RS6776 → RS7424 | Aucun — c'est la compétence la mieux couverte du dossier |

**Estimation globale du niveau atteint : de l'ordre de 92 à 95 %** des attendus du référentiel. Les points de vigilance restants ne portent plus sur la compréhension des notions, mais sur des **finalisations opérationnelles ponctuelles** (déploiement effectif du FALC à l'ensemble des documents, vérifications formelles d'accessibilité, validation hiérarchique de la charte) et sur la cohérence des annexes citées tout au long du rapport (charte, cartographies, prompts, comparatif avec/sans IA, captures du POC) avec le contenu du dossier — un point de vigilance qu'il conviendra de vérifier une dernière fois avant remise, indépendamment du contenu rédactionnel lui-même.

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
- Certification RS6776 (soutenance, notes orales, résultats d'examen, TP écrit InKréa)
- Article Mediapart « L'IA ne m'a pas rendu la vie plus facile. Elle m'a rendu la vie possible. » (Katy Ho, Hors Kadre)
- Communiqué CEA — Renouvellement de l'accord CEA/Mistral, plateforme Maïa (23 juin 2026)
