# Procédure d'installation — Muscade Incident Assistant (Action GPT + Make)

Durée estimée : **20 à 30 minutes**. Ordre à respecter : Make d'abord
(pour obtenir l'URL du webhook), puis le GPT.

---

## Étape 1 — Créer le scénario Make (10 min)

1. Va sur [make.com](https://www.make.com) et crée un compte si besoin
   (le plan gratuit suffit pour ce PoC).
2. **Create a new scenario** → cherche le module **Webhooks** → choisis
   **Custom webhook** → **Add** → nomme-le `muscade-incident` → **Save**.
3. Make affiche l'URL du webhook. **Copie-la intégralement**, tu en as
   besoin pour l'étape 3.
4. Ajoute le module **Gmail > Send an Email** à la suite, connecte ton
   compte Google (fenêtre OAuth standard).
5. Configure `To`, `Subject` et `Content` comme décrit dans
   `email_template.md`. Laisse les champs vides pour l'instant si les
   variables ne sont pas encore proposées (elles apparaissent après le
   premier test, étape suivante).
6. Envoie une requête de test avec le `curl` fourni dans
   `make_scenario_guide.md` (remplace `VOTRE_WEBHOOK_ID` par ton URL réelle).
7. Retourne dans le module Webhook, clique **Redetermine data structure**,
   relance le test si besoin : les champs `incidentId`, `manipulation`,
   etc. apparaissent maintenant comme variables cliquables.
8. Termine de configurer le module Gmail avec les vraies variables.
9. **Active le scénario** (toggle en haut à droite, passe sur ON).

Checkpoint : tu dois avoir reçu un e-mail de test sur
`katy.saintin@gmail.com` avant de continuer.

---

## Étape 2 — Adapter le fichier openapi.yaml (2 min)

1. Ouvre `openapi.yaml`.
2. Dans `servers[0].variables.webhookId.default`, remplace
   `REMPLACER_PAR_VOTRE_ID_WEBHOOK` par l'identifiant copié à l'étape 1
   (la partie de l'URL après `hook.eu2.make.com/`).
3. Enregistre le fichier.

---

## Étape 3 — Créer / éditer le GPT (10 min)

1. Sur [chatgpt.com](https://chatgpt.com), va dans **Mes GPTs** → ouvre
   ton GPT **Muscade Incident Assistant** existant (celui avec tes 3
   amorces et tes 3 documents joints) → **Configurer**.
2. Dans le champ **Instructions**, ajoute à la suite de tes instructions
   actuelles le contenu de `gpt_instructions.md`.
3. Descends jusqu'à **Actions** → **Créer une nouvelle action**.
4. Clique sur **Importer depuis une URL** (si tu héberges le fichier) ou
   colle directement le contenu de `openapi.yaml` dans l'éditeur de
   schéma (bouton "Modifier" en mode texte brut).
5. ChatGPT détecte automatiquement l'opération `envoyerIncidentMuscade`.
6. **Authentification** : laisse sur **Aucune** (le webhook Make est
   protégé par le simple fait que l'URL est secrète — suffisant pour un PoC).
7. Clique sur **Format** pour valider que le schéma est correctement
   interprété (aucune erreur ne doit apparaître).
8. **Enregistre / Mettre à jour** le GPT.

---

## Étape 4 — Test de bout en bout (5 min)

1. Ouvre une conversation avec ton GPT, clique sur l'amorce
   **« Signaler un incident »**.
2. Réponds aux 10 questions posées une par une.
3. Vérifie que le ticket Markdown généré est cohérent.
4. Confirme l'envoi quand le GPT te le demande.
5. Vérifie dans **ChatGPT** que l'appel d'action s'est bien exécuté (icône
   "a utilisé envoyerIncidentMuscade", sans erreur).
6. Vérifie la réception de l'e-mail sur `katy.saintin@gmail.com`, avec le
   bon sujet `[MUSCADE] Incident - <manipulation>` et le ticket complet
   dans le corps.
7. Dans Make, onglet **History** du scénario, vérifie que l'exécution
   apparaît en vert (succès), ce qui te sert de preuve pour la soutenance.

---

## Pour la soutenance RS7424

Ce PoC illustre concrètement :
- la sélection d'un cas d'usage IA à faible valeur ajoutée (qualification
  d'incident avant déclaration manuelle) ;
- une automatisation de bout en bout sans développement (Low Code) ;
- une architecture claire et documentée (schéma en en-tête de ce dossier) ;
- un protocole de vérification (test manuel curl avant branchement au GPT,
  historique Make consultable comme preuve d'exécution).

Pense à garder une capture d'écran de l'historique Make (exécution
réussie) et de l'e-mail reçu : ce sont tes preuves de fonctionnement pour
le dossier écrit et l'oral.
