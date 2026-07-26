# Projet : Site d'aide de l'Assistant MUSCADE

## Objectif

Créer un site Web simple, accessible à tous les utilisateurs MUSCADE, permettant de découvrir rapidement l'assistant métier et d'apprendre à l'utiliser.

Le site ne doit pas être un document technique, mais un guide pratique destiné aux exploitants, automaticiens et utilisateurs de MUSCADE.

Le ton doit être rassurant, pédagogique et illustré.

---

# Public visé

- Utilisateurs MUSCADE
- Exploitants
- Automaticiens
- Développeurs occasionnels
- Nouveaux arrivants

Aucune connaissance de l'IA n'est supposée.

---

# Technologies envisagées

Deux possibilités :

- Site statique GitHub Pages (HTML/CSS/JavaScript)
- Site intranet CEA dédié à MUSCADE

Architecture légère :

```
index.html
style.css
app.js
faq.json
procedures.json
prompts.json
images/
```

Le contenu pourrait être alimenté par quelques fichiers JSON afin de faciliter les mises à jour sans modifier le code HTML.

---

# Objectifs du site

Le site doit répondre à une question simple :

> Comment utiliser efficacement l'assistant MUSCADE ?

L'utilisateur doit comprendre en moins de cinq minutes :

- ce que fait l'assistant
- dans quels cas l'utiliser
- comment dialoguer avec lui
- quels sont les bénéfices

---

# Rubriques proposées

## Accueil

Présentation rapide.

Exemple :

> L'assistant MUSCADE est un assistant spécialisé dans la supervision des installations scientifiques.
>
> Il vous aide à déclarer un incident, retrouver une procédure ou répondre à vos questions sur MUSCADE.

Boutons principaux :

- 🚨 Signaler un incident
- 📚 Poser une question
- 📖 Rechercher une procédure

---

## Découvrir l'assistant

Présentation très simple.

Expliquer que l'assistant fonctionne comme un collègue expérimenté.

Il est possible d'écrire normalement.

Exemples :

- "Le serveur ne répond plus."
- "Je n'arrive plus à lancer Helium Manager."
- "Comment installer MUSCADE ?"

---

## Les trois fonctions principales

### 🚨 Signaler un incident

Description du dialogue.

L'assistant :

- pose les bonnes questions
- collecte les informations
- résume le problème
- prépare un ticket complet

Illustration du workflow.

---

### 📚 Poser une question

Exemples :

- Comment renouveler un certificat ?
- Pourquoi cette alarme apparaît-elle ?
- Comment fonctionne Helium Manager ?
- Où trouver les logs ?

---

### 📖 Rechercher une procédure

Exemples :

- Installer MUSCADE
- Sauvegarder un automate
- Configurer un Westermo
- Déployer un serveur

---

# Exemples de prompts

Créer une galerie de cartes contenant des exemples.

Catégories :

## Incidents

- Le serveur ISEULT ne répond plus.
- Les alarmes ne remontent plus.
- Le JNLP Launcher ne démarre pas.
- Helium Manager affiche "communication time out".
- Les compteurs restent figés.

---

## Questions

- Comment fonctionne MUSCADE ?
- Où sont stockés les logs ?
- Comment redémarrer le serveur ?
- Comment renouveler un certificat ?
- Pourquoi une communication Modbus est-elle en erreur ?

---

## Procédures

- Donne-moi la procédure de sauvegarde.
- Comment installer MUSCADE ?
- Comment ajouter un utilisateur ?
- Comment configurer un VPN ?

---

# Déroulement d'un signalement

Illustration simple.

```
Vous décrivez le problème
        ↓
L'assistant pose quelques questions
        ↓
Il vérifie les informations
        ↓
Vous validez
        ↓
Le support reçoit un ticket complet
```

---

# Bonnes pratiques

Toujours :

✔ Décrire ce que l'on observe.

✔ Copier les messages d'erreur.

✔ Ajouter une capture d'écran si possible.

✔ Répondre aux questions de l'assistant.

Éviter :

✘ Deviner la cause.

✘ Résumer par "ça ne marche plus".

---

# Questions fréquentes

## Dois-je connaître l'IA ?

Non.

L'assistant vous guide naturellement.

---

## Dois-je connaître MUSCADE ?

Non.

Vous pouvez simplement décrire votre problème.

---

## Puis-je lui poser une simple question ?

Oui.

Il est aussi capable d'expliquer le fonctionnement de MUSCADE et de retrouver une procédure.

---

## Est-il connecté à Internet ?

Non.

Il utilise uniquement les connaissances et la documentation mises à disposition par l'équipe MUSCADE.

(À adapter selon l'architecture finale.)

---

# À terme

Le site accompagnera les évolutions du projet.

Fonctionnalités envisagées :

- Création automatique des tickets GitLab
- Consultation des incidents similaires
- Recherche dans la FAQ
- Recherche dans les procédures
- Consultation de la feuille de route
- Accès aux documentations Markdown
- Historique des évolutions
- Nouveautés de chaque version

---

# Évolutions techniques possibles

Le contenu pourrait être entièrement piloté par des fichiers JSON.

Exemples :

- prompts.json
- faq.json
- procedures.json
- news.json

Cela permettrait de faire évoluer le site sans modifier le code HTML.

---

# Philosophie du projet

L'objectif n'est pas de remplacer les experts MUSCADE.

L'assistant facilite le dialogue entre les utilisateurs et l'équipe support.

Il aide les utilisateurs à formuler leur besoin, réduit les oublis et améliore la qualité des informations transmises.

L'objectif est de gagner du temps pour tous :

- moins d'allers-retours par e-mail ;
- des tickets plus homogènes ;
- un diagnostic plus rapide ;
- une meilleure capitalisation des connaissances.

Le site doit refléter cette philosophie : simple, accessible, rassurant et orienté vers l'aide aux utilisateurs.