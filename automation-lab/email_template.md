# Contenu de l'e-mail (module Gmail)

## Champ "Subject" (à coller dans Make, avec la variable insérée via la bulle)

```
[MUSCADE] Incident - {{2.manipulation}}
```

## Champ "Content" (Text simple — recommandé pour un PoC)

```
Nouvel incident MUSCADE signalé via l'assistant GPT.<br>
<br>
Identifiant : {{2.incidentId}} <br>
Manipulation : {{2.manipulation}} <br>
Système : {{2.systeme}} <br>
Adresse IP / hôte : {{2.ip}} <br>
Date d'apparition : {{2.date}} <br>
<br>
--- <br>
<br>
{{2.ticketMarkdown}} <br>
<br>
---<br>

Cet e-mail a été généré automatiquement par le scénario Make
"muscade-incident" à partir d'un signalement effectué via le GPT
Muscade Incident Assistant.
```

Chaque `{{champ}}` correspond à la donnée du module Webhook (Module 1) :
dans l'éditeur Make, tu ne tapes pas `{{...}}` à la main, tu cliques dans
le champ texte puis tu sélectionnes le champ correspondant dans le panneau
de données qui s'ouvre (ex: `1. incidentId`). Make insère alors
automatiquement le bon tag interne.

## Variante HTML (optionnelle)

Si tu préfères un rendu plus lisible, passe le module Gmail en
**Content Type: HTML** et utilise :

```html
<p>Nouvel incident MUSCADE signalé via l'assistant GPT.</p>
<table>
  <tr><td><b>Identifiant</b></td><td>{{incidentId}}</td></tr>
  <tr><td><b>Manipulation</b></td><td>{{manipulation}}</td></tr>
  <tr><td><b>Système</b></td><td>{{systeme}}</td></tr>
  <tr><td><b>IP</b></td><td>{{ip}}</td></tr>
  <tr><td><b>Date</b></td><td>{{date}}</td></tr>
</table>
<pre>{{ticketMarkdown}}</pre>
```
