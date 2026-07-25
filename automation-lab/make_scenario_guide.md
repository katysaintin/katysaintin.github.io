# Scénario Make — Muscade Incident Assistant

Architecture : **Webhook custom → Parse JSON (intégré) → Gmail : Envoyer un email**

3 modules, aucun code, connexion Gmail native.

---

## Module 1 — Webhooks : Custom webhook

1. Sur [make.com](https://www.make.com), crée un nouveau scénario.
2. Ajoute le module **Webhooks > Custom webhook**.
3. Clique sur **Add**, donne-lui un nom (ex: `muscade-incident`), pas de
   connexion nécessaire.
4. Make génère une URL du type :
   `https://hook.eu2.make.com/3x7k9dfabc123...`
5. Copie cette URL. La partie après `hook.eu2.make.com/` est ton
   `webhookId` : c'est la seule valeur à coller dans `openapi.yaml`
   (section `servers.variables.webhookId.default`).
6. **Détermine la structure des données** : clique sur "Redetermine data
   structure", lance un appel de test (voir plus bas, section "Test"), Make
   détecte automatiquement les champs `incidentId`, `manipulation`,
   `systeme`, `ip`, `date`, `symptomes`, `messageErreur`, `stackTrace`,
   `reproduction`, `contexte`, `ticketMarkdown`.

> Aucun module "Parse JSON" séparé n'est nécessaire : le module Webhook de
> Make parse le JSON automatiquement dès que la structure est déterminée.
> Chaque champ devient directement disponible comme variable insérable
> dans les modules suivants (bulle bleue).

---

## Module 2 — Gmail : Envoyer un e-mail (Send an Email)

1. Ajoute le module **Gmail > Send an Email**.
2. Connecte ton compte Gmail (OAuth Google standard, aucune clé API à gérer).
3. Configure les champs :

| Champ | Valeur |
|---|---|
| **To** | `katy.saintin@gmail.com` |
| **Subject** | `[MUSCADE] Incident - {{manipulation}}` (insère la variable via la bulle) |
| **Content Type** | Text ou HTML, au choix |
| **Content** | Voir le template dans `email_template.md` — insère `{{ticketMarkdown}}` comme corps principal |

4. Pour insérer une variable, clique dans le champ puis sélectionne le
   champ correspondant dans la liste des données du Module 1 (`Webhook`),
   par exemple `1. manipulation`, `1. incidentId`, `1. ticketMarkdown`.

---

## Module 3 (optionnel) — Webhooks : Webhook response

Si tu veux que le GPT reçoive une confirmation explicite plutôt qu'une
réponse par défaut :

1. Ajoute **Webhooks > Webhook response** à la fin du scénario.
2. Status : `200`
3. Body : `{"status":"ok","incidentId":"{{2.incidentId}}"}`
4. Content-Type : `application/json`

Sans ce module, Make répond automatiquement `Accepted` (HTTP 200), ce qui
suffit pour un PoC.

---

## Activation

1. En haut à droite du scénario, bascule le toggle **ON**.
2. Dans les paramètres du scénario (icône engrenage), vérifie que
   **"Immediately as data arrives"** est sélectionné comme mode de
   déclenchement (webhook = temps réel).

---

## Test manuel avant branchement au GPT

Depuis un terminal ou un outil comme Postman/curl :

```bash
curl -X POST https://hook.eu2.make.com/gaqi2si49qb2hw3ozj4j8z26avm5elww@hook.eu1.make.com \
  -H "Content-Type: application/json" \
  -d '{
    "incidentId": "MUSCADE-2026-0001",
    "manipulation": "ISEULT",
    "systeme": "Serveur Cryogénie Principal",
    "ip": "10.2.139.25",
    "date": "24/07/2026 22h40",
    "symptomes": "Alarme supervision, serveur inaccessible",
    "messageErreur": "Connection timeout",
    "stackTrace": "Aucune stack trace disponible",
    "reproduction": "Redémarrage du service à 22h35 puis perte de connexion",
    "contexte": "Intervention réseau 5 minutes avant l'incident",
    "ticketMarkdown": "### [MUSCADE-2026-0001] [ISEULT] Serveur Cryo inaccessible\n\n**Système concerné :** Serveur Cryogénie Principal\n..."
  }'
```

Vérifie que l'e-mail arrive bien sur `katy.saintin@gmail.com`, puis
seulement ensuite active l'Action côté GPT.
