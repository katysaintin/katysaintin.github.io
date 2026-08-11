# SCRIPT COMPLET — SOUTENANCE RS7424 (v4 — aligné sur Gamma à jour)

## Slide 1 — Titre (~1 min)
Bonjour à toutes et à tous. Je suis Katy Saintin, ingénieure chercheuse en génie logiciel et Experte Senior au CEA. Je suis cheffe de produit MUSCADE, notre système de supervision SCADA déployé sur une trentaine d'installations scientifiques à l'IRFU. Je vous présente aujourd'hui mon dossier de certification RS7424, "Gérer et transformer les processus de travail des équipes avec l'aide de l'IA".

## Slide 2 — Mon parcours et ma légitimité (~2 min)
J'ai 25 ans d'expérience en contrôle-commande scientifique, dont 13 ans à SOLEIL et 9 ans au CEA. Je suis cheffe de produit MUSCADE et leader technique d'une équipe de 5 personnes. À l'origine, je cherchais une formation générique — gestion du stress, organisation du travail. Cette certification RS7424 m'a semblé plus intéressante pour trois raisons : elle est reconnue par France Compétences, elle me fait monter en compétences sur l'IA, et surtout, elle me permet de valoriser mon rôle de cheffe de projet et de leader technique, pas seulement mon expertise technique. J'ai obtenu le RS6776 un mois avant celle-ci, avec 96 % à l'écrit — le RS7424 est un prolongement naturel, avec la cartographie de processus, la reconfiguration d'équipe et le pilotage par indicateurs en plus.

## Slide 3 — Ma méthodologie de certification (~2,5 min)
Ce dossier n'a pas été rédigé en une fois à la fin du parcours. J'ai tenu un journal de bord versionné tout au long de la certification, avec une méthode agile en cycle V appliquée à la rédaction, et des livrables intermédiaires consolidés progressivement. J'ai aussi configuré deux IA génératives, Claude et ChatGPT, en tuteurs certification. Concrètement, ça a produit une charte d'usage IA pour le laboratoire, un rapport d'incident et un manuel utilisateur, un audit continu de mes livrables, et enfin le rapport écrit final avec Claude et le support de soutenance avec Gamma.

## Slide 4 — Périmètre d'utilisation de l'IA et identification des risques (~2,5 min)
J'ai défini précisément où l'IA intervient : un assistant conversationnel pour qualifier les demandes, la génération de comptes rendus et de supports de présentation, et la génération de procédures à partir d'un incident résolu. En face, j'ai identifié quatre types de risques : juridique — le respect de l'AI Act et du RGPD ; éthique — ne jamais utiliser les indicateurs d'activité pour évaluer individuellement un collaborateur ; sécuritaire — le risque de fuite de données vers un outil externe ; et écologique — l'usage disproportionné de l'IA pour des tâches simples, ce qui m'a amenée à construire une librairie de prompts réutilisables et un document IA Ready. Tout ça a débouché sur une charte d'utilisation responsable de l'IA pour le projet MUSCADE, générée avec Claude.

## Slide 5 — Cartographie et identification des processus (~2 min)
Mon diagnostic s'appuie sur trois sources : les tickets GitLab, les retours de l'équipe support, et ma propre feuille de route MUSCADE, qui porte la stratégie du laboratoire. C'est ce diagnostic, généré avec ChatGPT, qui m'a permis d'identifier les processus candidats à la transformation.

## Slide 6 — Choix de 2 processus selon 5 dimensions (~2 min)
Je n'ai pas choisi au hasard. J'ai retenu Exploiter les incidents : le volume est fort, les données déjà structurées, un POC était réalisable — un vrai quick win. Et Capitaliser les connaissances, qui répond directement à ma problématique d'experte unique, en prévision d'un départ. Piloter l'activité reste important, mais j'ai fait le choix conscient de ne pas le traiter, pour rester concentrée sur mes deux processus retenus. Et déployer l'IA de manière responsable manque encore de maturité au CEA — la charte IA doit d'abord être validée.

## Slide 7 — Le processus retenu et sa reconfiguration (~2 min)
L'objectif est de produire un bilan hebdomadaire des incidents, pour suivre l'activité du support, identifier les tendances, prioriser les actions, et préparer le point hebdomadaire MUSCADE. [Montrer le schéma généré avec Gamma] Avant, chaque incident remonte jusqu'à moi. Après, l'assistant qualifie et structure le ticket en amont, et je n'interviens que sur les cas qui nécessitent une expertise réelle.

## Slide 8 — Ce que j'ai concrètement construit (~2 min)
J'ai construit deux livrables concrets : un assistant conversationnel, le GPT Muscade, dédié à mon périmètre, et un workflow d'automatisation via Make, en POC fonctionnel. Pourquoi un POC réel plutôt qu'une simple maquette ? Parce que je n'intègre un concept qu'en le pratiquant. Ce travail a donné lieu à un document d'intégration de l'IA sur le processus de gestion des incidents, généré avec ChatGPT.

## Slide 9 — Preuve d'usage (~2 min)
Voici un incident réel traité pas à pas par l'assistant. La qualification est guidée, question par question. À la fin de l'échange, un ticket structuré est généré automatiquement, et j'ai livré un guide d'utilisation aux utilisateurs. La configuration de cet agent IA pour la gestion des incidents MUSCADE a été générée avec Claude.

## Slide 10 — Dispositif de suivi et résultats attendus (~2,5 min)
Le dispositif s'organise autour de trois familles d'indicateurs : Performance — temps de qualification et temps de rédaction ; Satisfaction — retours utilisateurs et sondage équipe ; et RSE — conformité à la charte d'anonymisation. J'insiste sur un point important : le comparatif avant-après que vous voyez ici est un résultat **prévisionnel**, généré avec ChatGPT — le POC est fonctionnel, mais pas encore déployé à l'ensemble de l'équipe. Le dispositif de collecte et de suivi lui-même a également été construit avec ChatGPT.

## Slide 11 — Preuves par compétence (~2,5 min)
Je récapitule ici, compétence par compétence, où se trouvent mes preuves dans le dossier : C1, le diagnostic des processus, la charte IA, l'AI Act cité ; C2, la cartographie avant-après et la nouvelle organisation du support ; C3, le prompt documenté et le GPT paramétré ; C4, le guide d'utilisation et la présentation livrés ; et C5, le dispositif de suivi structuré en trois familles d'indicateurs, avec la mise en place d'une veille IA continue.

## Slide 12 — Hors MUSCADE : les mêmes compétences, ailleurs (~2,5 min)
Ces compétences ne se limitent pas à MUSCADE. Sur C1 : l'IA reste un tuteur, jamais un substitut, aussi bien en certification que sur mes POC en local. Sur C3 : j'ai constitué une bibliothèque de prompts réutilisables, avec des outils choisis selon l'usage — ChatGPT, Claude, Gamma, Make, mais aussi Gemini, HeyGen, Copilot, DALL-E, Suno. Il me reste à tester n8n, AirTable, Zapier et Genspark. Sur C4 : trois sites web, un podcast YouTube, des guides PDF — mon podcast Katy In Control, mon portfolio professionnel, un site d'orientation Parcoursup. Sur C5 : un suivi réel par Google Analytics et HubSpot — 152 vues sur mon CV, 394 vues sur le premier épisode de mon podcast. J'ai formalisé tout ça dans une note complémentaire sur les compétences RS7424 appliquées hors MUSCADE.

## Slide 13 — Auto-évaluation et limites assumées (~2 min)
J'ai soumis mon dossier à une estimation croisée par deux IA génératives — un diagnostic de préparation, pas une évaluation officielle. Ce qui m'intéresse le plus, ce sont les limites qu'il a mises en évidence : la validation hiérarchique de la charte est encore en cours, les vérifications d'accessibilité restent à finaliser, et le déploiement reste volontairement incrémental, pas encore complet.

## Slide 14 — Perspectives (~1 min)
Je vais réécrire ma feuille de route MUSCADE, grâce aux indicateurs et au lexique que cette certification m'a donnés. J'ai des candidatures déjà engagées, au CEA List et à SOLEIL, sur des rôles transverses IA. J'ai l'ambition de rejoindre le groupe MAIA du CEA. L'IA au service de l'inclusion du handicap reste un axe prioritaire pour moi. Et bien sûr, le déploiement progressif de l'assistant à l'ensemble de mon équipe, dans une logique d'amélioration continue.

## Slide 15 — Sources
Voilà mes sources : mon expérience terrain en entreprise, le SCADA de contrôle, et ma méthodologie. Je reste disponible pour vos questions.
