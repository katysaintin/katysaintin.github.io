# Guide de bonnes pratiques
## Concevoir une documentation compatible avec l'IA

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