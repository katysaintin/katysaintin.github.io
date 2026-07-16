# Guide de bonnes pratiques
## Concevoir une documentation compatible avec l'IA

Guide de conception documentaire compatible IA
Documentation IA-Ready
Version : 0.1

---

# Objectif

Ce document présente des règles simples permettant de produire une documentation :

- facilement anonymisable ;
- facilement maintenable ;
- réutilisable dans différents contextes ;
- compatible avec l'utilisation d'outils d'intelligence artificielle.

---

# Principe général

Les informations sensibles ne doivent apparaître qu'une seule fois dans le document.

Le reste du document utilise uniquement des variables.

---

# Table des variables

| Variable | Valeur |
|----------|--------|
| [PROJECT] | Projet Muscade |
| [PROJECT_MANAGER] | Katy Saintin |
| [SERVER] | muscade.cea.fr |
| [SERVER_IP] | 10.0.xxx.xxx |
| [CLIENT] | CEA |
| [EMAIL] | xxx@cea.fr |

---

# Exemple

Au lieu d'écrire :

> Le serveur muscade.cea.fr est administré par Katy Saintin.

Écrire :

> Le serveur **[SERVER]** est administré par **[PROJECT_MANAGER]**.

---

# Avantages

## Anonymisation

Une version publique du document peut être obtenue simplement en remplaçant les valeurs de la table des variables.

Exemple :

| Variable | Version publique |
|----------|------------------|
| [PROJECT_MANAGER] | Chef de projet |
| [SERVER] | serveur.exemple.fr |
| [SERVER_IP] | xxx.xxx.xxx.xxx |

---

## Maintenance

Les changements de :

- chef de projet ;
- nom de serveur ;
- adresse IP ;
- client ;

s'effectuent dans une seule table.

Le reste du document ne nécessite aucune modification.

---

## Compatibilité IA

Avant d'utiliser un document avec une IA :

- remplacer les variables sensibles si nécessaire ;
- vérifier que les données confidentielles ne figurent pas ailleurs dans le document.

Cette approche réduit fortement le risque de divulgation d'informations sensibles.

---

# Cas d'utilisation

Cette méthode est particulièrement adaptée pour :

- procédures techniques ;
- guides utilisateurs ;
- rapports d'incidents ;
- documents projets ;
- comptes-rendus techniques ;
- supports de formation.

---

# Limites

Cette méthode ne remplace pas :

- une revue humaine ;
- une politique de classification des données ;
- un outil d'anonymisation lorsque les données sont nombreuses et dispersées.

Elle constitue une bonne pratique documentaire permettant de faciliter l'utilisation responsable de l'IA.

# Charte d'utilisation responsable de l'Intelligence Artificielle
## Projet MUSCADE

**Version :** 0.1 (Document de travail)

---

# 1. Objet

Cette charte définit les règles d'utilisation de l'intelligence artificielle dans le cadre du projet **Muscade**.

Elle a pour objectif de :

- accompagner l'intégration de l'IA dans les activités du projet ;
- améliorer la qualité des livrables et des processus ;
- protéger les données du CEA ;
- garantir une utilisation responsable et éthique de l'IA ;
- conserver la responsabilité humaine dans les décisions.

Cette charte s'inscrit dans une démarche d'amélioration continue et pourra évoluer en fonction des retours d'expérience, des évolutions réglementaires et des outils disponibles.

---

# 2. Les cinq principes de la charte

## 2.1 Responsabilité

L'IA est un outil d'assistance.

Chaque membre de l'équipe reste responsable des décisions, analyses, développements et documents produits.

Aucune décision importante ne peut être prise uniquement sur la base d'une réponse générée par une IA.

---

## 2.2 Protection des données

Toute utilisation de l'IA doit respecter :

- le RGPD ;
- les règles de sécurité du CEA ;
- les exigences de confidentialité des projets.

Le principe de **minimisation des données** s'applique systématiquement.

Seules les informations strictement nécessaires sont transmises à l'IA.

---

## 2.3 Esprit critique

Les réponses générées par l'IA doivent être :

- vérifiées ;
- confrontées à l'expertise métier ;
- adaptées au contexte du projet.

Une réponse IA ne constitue jamais une preuve.

---

## 2.4 Transparence

L'utilisation de l'IA doit pouvoir être identifiée lorsque cela apporte une valeur ajoutée à la compréhension du document ou de la décision.

Les prompts importants et les décisions prises avec l'aide de l'IA peuvent être conservés afin de faciliter la traçabilité.

---

## 2.5 Sobriété

L'IA est utilisée lorsqu'elle apporte un bénéfice réel.

Les requêtes inutiles sont évitées afin de limiter :

- la consommation énergétique ;
- le temps de traitement ;
- le coût des services IA.

---

# 3. Usages autorisés

L'IA peut être utilisée pour :

- rédiger une documentation technique ;
- reformuler un document ;
- préparer une formation ;
- produire une FAQ ;
- synthétiser des tickets GitLab anonymisés ;
- proposer une architecture logicielle ;
- assister le développement logiciel ;
- générer des scripts ;
- préparer une communication utilisateurs ;
- analyser des indicateurs d'activité anonymisés.

---

# 4. Usages autorisés sous validation humaine

Une validation humaine est obligatoire pour :

- un diagnostic d'incident ;
- une proposition de priorisation ;
- une proposition de répartition des tâches ;
- une analyse des KPI ;
- une communication officielle ;
- une documentation diffusée aux utilisateurs.

---

# 5. Usages interdits

Il est interdit d'utiliser l'IA pour :

- transmettre des données personnelles non anonymisées ;
- transmettre des informations classifiées ou confidentielles ;
- prendre automatiquement une décision ayant un impact sur un collaborateur ;
- évaluer individuellement un collaborateur à partir des tickets GitLab ;
- classer les collaborateurs selon leur nombre de tickets résolus ;
- mesurer la performance individuelle à partir d'indicateurs produits automatiquement ;
- décider seul d'une intervention sur une installation.

L'IA ne doit jamais être utilisée comme outil d'évaluation des personnes.

---

# 6. Utilisation des KPI

Les indicateurs issus de GitLab ont pour objectif :

- d'améliorer le fonctionnement du projet ;
- d'identifier les goulots d'étranglement ;
- de mesurer l'évolution de la charge ;
- d'identifier les besoins en ressources humaines ;
- de suivre les projets.

Ils ne doivent pas être utilisés pour établir un classement individuel.

Les analyses privilégient :

- les projets ;
- les composants logiciels ;
- les catégories d'incidents ;
- les délais moyens ;
- les tendances.

Les noms des auteurs ou des personnes assignées ne sont pas nécessaires à cette analyse.

Lorsque cela est possible, les données sont anonymisées ou agrégées.

---

# 7. Principe « IA Ready »

Les documents produits dans le cadre du projet sont conçus pour faciliter leur utilisation responsable avec une IA.

## Objectifs

- faciliter l'anonymisation ;
- faciliter la maintenance documentaire ;
- favoriser la réutilisation des documents ;
- limiter les risques de divulgation.

## Recommandations

Les informations sensibles sont regroupées dans une table de variables située au début du document.

Exemple :

| Variable | Valeur |
|----------|--------|
| [PROJECT] | Muscade |
| [PROJECT_MANAGER] | Katy Saintin |
| [SERVER] | muscade.cea.fr |
| [SERVER_IP] | 10.0.xxx.xxx |
| [CLIENT] | CEA |

Le corps du document utilise uniquement les variables.

Exemple :

> Le serveur **[SERVER]** héberge le projet **[PROJECT]**.

Cette approche facilite :

- l'anonymisation automatique ;
- les changements de contexte ;
- la maintenance documentaire ;
- la génération de documents.

---

# 8. Bonnes pratiques

Avant d'utiliser une IA :

- vérifier que l'outil est autorisé ;
- supprimer les données inutiles ;
- anonymiser les informations personnelles ;
- vérifier que les informations sensibles ont été retirées ;
- transmettre uniquement les informations nécessaires ;
- prévoir une validation humaine.

---

# 9. Capitalisation

Les bonnes pratiques sont progressivement capitalisées dans :

- le Wiki GitLab ;
- la documentation du projet ;
- les guides internes ;
- une bibliothèque de prompts validés.

---

# 10. Engagement

Chaque membre de l'équipe s'engage à :

- utiliser l'IA de manière responsable ;
- respecter la confidentialité des données ;
- exercer son esprit critique ;
- conserver la responsabilité de ses décisions ;
- partager les bonnes pratiques afin d'améliorer collectivement les usages de l'IA.

---

# Documents associés

- Guide d'anonymisation
- Guide documentaire « IA Ready »
- Checklist avant utilisation d'une IA
- Catalogue des cas d'usage IA
- Bibliothèque de prompts
- Guide des KPI du projet Muscade

---
## Exercice IA Charte

# Objectif
 1️⃣ Identifiez au minimum deux références légales applicables à l’utilisation de l’IA dans votre activité
(ex : RGPD, Code du travail, non-discrimination, propriété intellectuelle, secret des affaires, AI Act…)

2️⃣ Pour chacune d’elles, expliquez :
 ⚫︎ Pourquoi cette réglementation s’applique à vos usages de l’IA
 ⚫︎ Quels risques elle vise à encadrer
 ⚫︎ Quelles obligations elle impose à votre organisation

3️⃣ Concluez
Expliquez comment ces éléments juridiques devront être pris en compte dans la définition future de votre périmètre d’utilisation de l’IA (ce qui sera autorisé, encadré ou interdit).


# 1. Secret des affaires / Sécurité des systèmes d’information

Cette réglementation s’applique au projet Muscade car les outils d’IA pourraient être utilisés pour analyser de la documentation technique, des tickets GitLab ou des procédures internes contenant des informations sensibles.

Exemples :

* adresses IP ;
* noms des serveurs ;
* ports sécurisés ;
* architecture réseau ;
* configurations système ;
* informations sur les infrastructures du CEA.

La divulgation de ces informations pourrait faciliter une attaque informatique ou révéler des éléments stratégiques sur l’infrastructure.

L’utilisation de l’IA doit donc respecter le principe de confidentialité. Les informations techniques sensibles doivent être supprimées, anonymisées ou remplacées par des variables avant toute transmission à un outil d’IA.

⸻

# 2. Code du travail / AI Act

L’utilisation de l’IA pour analyser les données GitLab peut être utile afin d’améliorer le fonctionnement du projet.

En revanche, ces analyses ne doivent jamais servir à évaluer individuellement les collaborateurs.

Par exemple, il serait inapproprié de :

* classer les collaborateurs selon le nombre de tickets résolus ;
* comparer automatiquement les performances individuelles ;
* utiliser ces indicateurs pour justifier une sanction ou une évaluation.

L’objectif des KPI est d’améliorer le projet et non d’évaluer les personnes.

Les analyses doivent permettre :

* d’identifier les incidents récurrents ;
* de détecter les goulots d’étranglement ;
* de mettre en évidence des besoins en ressources humaines ;
* d’améliorer les processus ;
* d’aider à la planification du projet.

Lorsque cela est possible, les rapports doivent être agrégés par :

* projet ;
* composant logiciel ;
* catégorie d’incident ;
* période.

Les noms des auteurs des tickets ou des personnes assignées ne sont pas nécessaires pour atteindre ces objectifs et ne doivent pas apparaître dans les analyses destinées à l’IA.

⸻

# Conclusion

Dans le projet Muscade, l’intégration de l’IA devra s’appuyer sur un cadre d’utilisation clairement défini.

Ce cadre devra garantir :

* la protection des informations sensibles du CEA ;
* le respect de la confidentialité des données ;
* une utilisation des KPI orientée vers l’amélioration des processus plutôt que vers l’évaluation individuelle des collaborateurs ;
* le maintien d’une validation humaine pour toute décision ayant un impact sur les personnes ou sur le fonctionnement du proje


