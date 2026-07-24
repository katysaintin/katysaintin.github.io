# Journal de bord -- Certification RS7424

## Prompt de sauvega

Chaque entrée :

``` md
Génère moi dans un bloc md à copier.
Nos derniers échanges du jour en rapport avec la certification RS7424

# Format attendu

# YYYY-MM-DD HH:MM

Module : Nom du module (si identifiable, sinon "Non précisé")

## Observation ou Note

Résumé fidèle de l'idée, de la réflexion ou de l'observation.

## Idée

Décrire une idée, une amélioration, un outil, une réflexion ou une piste de travail qui est ressortie de la discussion.

## Action

Liste d'actions à réaliser.

Exemple :

- [ ] ...
- [ ] ...

Si aucune action n'est identifiée, écrire :

Aucune.

## Impact sur Muscade

Décrire uniquement les impacts éventuels sur le projet Muscade.

Si aucun lien n'existe, écrire :

Aucun.

---

# Règles

- Utiliser la date et l'heure courante de la conversation lorsqu'elles sont connues.
- Ne jamais inventer un module.
- Ne remplir une section que si elle apporte une information utile.
- Conserver un ton neutre.
- Éviter les longs paragraphes.
- Les actions doivent être concrètes.
- Les idées doivent être séparées des observations.
- Si plusieurs idées indépendantes apparaissent dans la conversation, créer plusieurs entrées de journal.
- Le résultat doit être directement copiable dans un fichier Markdown.
- Si les idées ont été décrites sous forme de tableau, générer le tableau au format md dans la note
- Ne produire que les entrées Markdown.

```

## Journal existant

# 2026-07-12 22:48

Module : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes

## Observation ou Note

Le périmètre d'usage de l'IA constitue un élément de gouvernance à définir avant toute mise en œuvre. Les usages peuvent être classés selon trois niveaux : IA autorisée, IA assistée avec validation humaine et IA interdite.

Le projet Muscade se prête naturellement à cette approche en raison des impacts potentiels sur les utilisateurs et les expériences scientifiques.

## Idée

Définir un tableau de gouvernance des usages de l'IA dans Muscade.

| Niveau | Cas d'usage Muscade |
|--------|----------------------|
| IA autorisée | Synthèse d'activité, rédaction de procédures, préparation des formations, génération de FAQ, préparation de newsletters utilisateurs |
| IA assistée | Analyse des tickets GitLab, diagnostic de premier niveau, communication utilisateurs, analyse des KPI, propositions de répartition des tâches |
| IA interdite | Affectation automatique de tâches sans validation humaine, interruption d'une expérience, fermeture automatique d'un ticket critique, décision impactant un utilisateur sans information préalable |

## Action

- [ ] Intégrer ce tableau dans le rapport (Compétence C2 – Partie 3).
- [ ] Décrire la gouvernance retenue pour les usages de l'IA.

## Impact sur Muscade

Définition d'un cadre de gouvernance permettant de sécuriser l'utilisation de l'IA dans le projet.

---

# 2026-07-12 22:52

Module : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes

## Observation ou Note

Les principes de sécurité, d'éthique et de sobriété peuvent être formalisés sous forme de règles de gouvernance applicables au projet Muscade.

## Idée

Ajouter un encadré "Principes de gouvernance de l'IA".

Propositions :

- Utiliser l'IA uniquement lorsqu'elle apporte une valeur ajoutée.
- Limiter les requêtes répétitives.
- Utiliser les outils IA validés par le CEA.
- Conserver les documents de référence dans GitLab, NetBox et la documentation projet.
- Vérifier systématiquement les contenus générés avant diffusion.
- Maintenir une validation humaine pour toute décision impactant une expérience, une infrastructure ou un utilisateur.

## Action

- [ ] Ajouter cette partie dans le rapport (C2 – Partie 3).

## Impact sur Muscade

Formalisation des règles d'utilisation de l'IA au sein du projet.

---

# 2026-07-13 00:59

Module : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes

## Observation ou Note

Le module introduit la définition d'objectifs SMART appliqués aux projets IA.

Cette approche est directement transposable aux cas d'usage identifiés pour Muscade.

## Idée

Définir un objectif SMART pour chaque cas d'usage IA.

| Cas d'usage | Objectif SMART |
|-------------|----------------|
| Synthèse des activités | Réduire de 50 % le temps de rédaction des synthèses hebdomadaires avec validation humaine pendant une expérimentation de 3 mois. |
| Rédaction de procédures | Réduire de 40 % le temps de rédaction des procédures tout en conservant une validation technique avant publication. |
| Préparation des formations | Réduire de 30 % le temps de préparation des supports et FAQ avec validation du formateur. |
| Analyse des tickets GitLab | Réduire de 30 % le temps de qualification des tickets grâce à une assistance IA, sans automatiser la décision. |
| Communication utilisateurs | Réduire de 50 % le temps de rédaction des newsletters et communications avec validation avant diffusion. |
| Analyse des KPI | Générer automatiquement une synthèse hebdomadaire des indicateurs en moins de 15 minutes, avec validation du coordinateur. |
| Diagnostic de premier niveau | Réduire de 30 % le temps d'analyse initiale en proposant des pistes de diagnostic issues de la documentation. |
| Capitalisation des connaissances (RAG) | Réduire de 50 % le temps de recherche d'information grâce à une base documentaire interrogeable testée sur un groupe pilote. |

## Action

- [ ] Associer un objectif SMART à chaque cas d'usage retenu dans le rapport.

## Impact sur Muscade

Permet de mesurer objectivement les bénéfices attendus de chaque expérimentation.

---

# 2026-07-13 01:05

Module : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes

## Observation ou Note

Une incohérence a été constatée dans le quiz du module.

La proposition « Générer un brouillon de compte rendu de réunion » apparaît deux fois dans les réponses.

Lors de la correction, les catégories « IA autorisée » et « IA assistée » semblent inversées entre :

- Générer un brouillon de compte rendu de réunion ;
- Préparer une synthèse de données d'activité.

## Idée

Signaler cette incohérence à la formatrice afin de vérifier le contenu du quiz et d'améliorer la qualité pédagogique de la formation.

## Action

- [ ] Envoyer un courriel à Mme Roche avec les captures d'écran du quiz.

## Impact sur Muscade

Aucun.

---

# 2026-07-13 01:10

Module : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes

## Observation ou Note

Les cas d'usage étudiés dans le module confirment que l'IA constitue principalement un outil d'assistance à l'analyse, à la préparation des documents et à la capitalisation des connaissances.

La responsabilité des décisions reste humaine.

## Idée

Faire apparaître dans le rapport le principe suivant :

> L'IA assiste l'expertise du projet Muscade mais ne se substitue jamais à la responsabilité de l'expert ou à la validation des utilisateurs concernés.

## Action

- [ ] Intégrer ce principe dans la partie gouvernance du rapport.

## Impact sur Muscade

Clarifie le rôle de l'IA dans le projet et définit un cadre de confiance pour les utilisateurs.

### Observations initiales

Journal de bord -- Certification RS7424

Informations générales Formation : RS7424 -- Gérer et transformer les
processus de travail des équipes avec l'aide de l'IA Projet de
soutenance : Transformation des processus opérationnels du projet
MUSCADE par l'intégration de solutions d'IA générative.

Idées pour l'évaluation à chaud

Observation n°1 : Format du rapport écrit Le modèle de rapport fourni au
format PowerPoint est utile pour guider les apprenants et leur fournir
une trame commune.

Suggestion d'amélioration Pour un rapport d'une vingtaine de pages ou
plus, un format DOCX me semble plus adapté à la rédaction, aux
relectures, au suivi des modifications et au travail collaboratif. Le
modèle PowerPoint pourrait être conservé comme support de présentation
ou comme exemple de structure, tandis qu'une version DOCX pourrait être
proposée en complément.

Bénéfice attendu Faciliter la rédaction progressive du rapport.
Améliorer le suivi des corrections et des versions. Réduire les
difficultés liées à la mise en page pendant la phase de rédaction. Se
concentrer davantage sur le contenu que sur le format.

Observation n°2 : Positionnement du questionnaire à chaud Le
questionnaire d'évaluation à chaud apparaît dès le début de la formation
sur l'extranet, alors qu'il ne doit être complété qu'à l'issue du
parcours. Suggestion d'amélioration Concernant le questionnaire, un
affichage différé ou une indication plus explicite pourrait éviter toute
confusion pour les nouveaux participants. Observation n°3 : Notion
d'accélération des rythmes de travail Dans le module d'introduction,
l'expression « accélération des rythmes de travail » a retenu mon
attention. Suggestion d'amélioration Concernant le contenu pédagogique,
il pourrait être utile de préciser ce que recouvre exactement la notion
d'« accélération des rythmes de travail » : s'agit-il d'un constat sur
l'évolution actuelle des organisations ? ou d'un objectif recherché
grâce à l'IA ? Cette clarification me paraît importante afin d'éviter
une interprétation selon laquelle l'objectif de l'IA serait
principalement de faire travailler les équipes plus vite ou de leur
demander davantage de travail grâce au temps gagné. Bénéfice attendu
Favoriser une réflexion plus large sur l'impact de l'IA sur les
conditions de travail. Clarifier les objectifs recherchés par
l'intégration de l'IA dans les organisations. Encourager une approche
équilibrée entre performance, qualité et soutenabilité du travail.

Question ouverte Comment les managers perçoivent-ils cette accélération
des rythmes de travail dans leurs organisations ? Selon eux, les gains
de productivité apportés par l'IA doivent-ils être utilisés pour
absorber davantage d'activité, pour améliorer la qualité du travail, ou
pour redonner du temps aux collaborateurs sur certaines tâches à faible
valeur ajoutée ? Observation n°4 : Passage de la théorie à la mise en
œuvre opérationnelle Le module explique de manière claire qu'il n'est
pas nécessaire d'être expert en informatique ou en intelligence
artificielle pour comprendre les usages de l'IA dans son activité de
manager. Je partage globalement cette vision : un manager peut tout à
fait identifier des opportunités, comprendre les bénéfices attendus et
piloter une démarche d'intégration de l'IA sans posséder de compétences
techniques approfondies. Question soulevée Je m'interroge toutefois sur
le passage de la théorie à la mise en œuvre concrète. Dans de nombreux
cas d'usage présentés ou envisagés : automatisation de processus ;
collecte et exploitation de données ; création de KPI ; tableaux de bord
; intégration entre plusieurs outils ; agents IA ; bases documentaires
ou RAG ; une expertise technique ou métier semble souvent nécessaire
pour transformer l'idée en solution opérationnelle.

Question proposée sur le forum Il semble tout à fait possible de suivre
cette formation sans être expert informatique ou IA. En revanche,
comment passe-t-on concrètement de l'identification d'un cas d'usage à
sa mise en œuvre effective dans l'organisation ? Pour les sujets
impliquant des automatisations, des KPI, des intégrations de données ou
des agents IA, le manager doit-il généralement s'appuyer sur des profils
plus techniques (expert métier, chef de projet, data analyst,
développeur, data scientist, etc.) ? Les prochains modules abordent-ils
également la manière de traduire une idée ou un besoin métier en cahier
des charges ou en plan de mise en œuvre destiné aux équipes chargées de
réaliser la solution ?

Observation n°5 : Pourquoi cette question me semble importante
L'identification des opportunités constitue une première étape
essentielle. Cependant, la réussite d'un projet IA dépend également de
la capacité à transformer ces opportunités en solutions concrètes,
utilisables et adoptées par les équipes. Observation Le prérequis « une
année d'expérience en tant que manager de proximité » paraît restrictif
au regard des compétences réellement travaillées durant la formation.
Suggestion d'amélioration Élargir explicitement le public cible aux
chefs de projet, coordinateurs d'activité, responsables de processus,
référents métier, experts techniques et acteurs de la transformation
numérique amenés à piloter des processus de travail sans nécessairement
exercer un management hiérarchique. Question aux formateurs Avez-vous
observé que certains profils non managers hiérarchiques (chefs de
projet, coordinateurs, experts métiers) tirent pleinement profit de
cette certification ? Une évolution du prérequis est-elle envisagée ?

------------------------------------------------------------------------

## Nouvelles notes

# 2026-07-12

Module : RGPD -- IA et données sensibles

Observation

-   L'anonymisation manuelle des documents constitue un frein à
    l'utilisation de l'IA.
-   Le coût d'anonymisation peut dépasser le gain apporté par l'IA.
-   Sur Muscade, les données suivantes doivent être considérées comme
    sensibles :
    -   Noms des collaborateurs.
    -   Adresses e-mail.
    -   Noms de projets diffusion restreinte (DAM...).
    -   Adresses IP.
    -   Noms des serveurs.
    -   Certificats, empreintes, CN, SAN.
    -   Clés, secrets, mots de passe.
    -   Architecture détaillée lorsqu'elle révèle des informations
        sensibles.

------------------------------------------------------------------------

# 2026-07-12

Module : RGPD -- Idée de projet

Observation

Développer un outil open source de pseudonymisation réversible.

Principe :

-   dictionnaire CSV :
    -   Original ; Jeton
-   Encodage avant utilisation d'une IA.
-   Décodage après génération de la réponse.
-   Fonctionnement local.
-   Compatible avec ChatGPT, Gamma, Claude, Mistral...

Objectif V0 :

-   fichier texte / markdown
-   CSV
-   encode
-   decode

Évolutions envisagées :

-   validation du dictionnaire
-   support DOCX
-   support PPTX
-   PDF
-   presse-papiers
-   publication GitHub
- 
------------------------------------------------------------------------
# 2026-07-12

MODULE : Module 1 – Comprendre l’IA et ses enjeux pour le management des équipes
Délimiter le périmètre d’usage IA

| Niveau                                 | Cas d'usage MUSCADE                                                                                                                                                                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 IA autorisée                        | Synthèse d'activité, rédaction de procédures, préparation des formations, aide à la rédaction de documentation, synthèse de réunions, génération de FAQ, préparation de newsletters utilisateurs                                                                     |
| 🟡 IA assistée avec validation humaine | Analyse des tickets GitLab, diagnostic de premier niveau, propositions de répartition des tâches, communication utilisateurs, analyse de KPI, propositions d'actions correctives                                                                                     |
| 🔴 IA interdite ou hors périmètre      | Affectation automatique de tâches à un collaborateur, décision de priorité impactant une expérience, fermeture automatique d'un ticket sans validation humaine, interruption d'un système en production, décision d'exclusion d'un utilisateur ou d'arrêt de service |

Afin de garantir la sécurité des expériences scientifiques et de maintenir la confiance des utilisateurs, toute décision ayant un impact sur une expérience, une infrastructure de production ou un utilisateur reste sous responsabilité humaine. L'IA est utilisée comme outil d'assistance à l'analyse, à la synthèse et à la préparation des actions, mais ne se substitue pas à la prise de décision.

Principes de sobriété numérique retenus
Utilisation de l'IA uniquement lorsqu'elle apporte une réelle valeur ajoutée.
Limitation des requêtes répétitives ou redondantes.
Utilisation prioritaire des outils IA validés par le CEA.
Conservation des documents de référence dans les outils existants (GitLab, NetBox, documentation projet) afin d'éviter les duplications inutiles.
Vérification humaine des contenus générés avant diffusion.

Là tu coches d'un coup :

sécurité ;
éthique ;
gouvernance ;
sobriété ;
responsabilité humaine.

Définir pour chaque Tache un objectif SMART
S : Spécifique 
M : Mesurable
A : Atteignable
R : Réaliste 
T : Temporel

| Tâche                                                     | Objectif SMART                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Synthèse des activités hebdomadaires**                  | **S** : Utiliser une IA pour générer une synthèse hebdomadaire des activités MUSCADE.<br>**M** : Réduire de 50 % le temps de rédaction.<br>**A** : Tester sur un stand-up meeting par semaine.<br>**R** : Validation systématique par le coordinateur avant diffusion.<br>**T** : Expérimentation sur 3 mois.                                                           |
| **Rédaction des procédures**                              | **S** : Utiliser l'IA pour produire une première version des procédures d'installation et de dépannage.<br>**M** : Réduire de 40 % le temps de rédaction.<br>**A** : Tester sur les nouvelles procédures créées pendant la période.<br>**R** : Validation technique obligatoire avant publication GitLab.<br>**T** : Déploiement progressif sur 3 mois.                 |
| **Préparation des formations utilisateurs**               | **S** : Générer les supports de formation et FAQ avec l'IA.<br>**M** : Diminuer de 30 % le temps de préparation.<br>**A** : Utiliser pour chaque nouvelle formation MUSCADE.<br>**R** : Relecture par le formateur.<br>**T** : Évaluation après deux sessions de formation.                                                                                             |
| **Analyse des tickets GitLab**                            | **S** : Utiliser l'IA pour classer les tickets et proposer un diagnostic de premier niveau.<br>**M** : Réduire de 30 % le temps de qualification.<br>**A** : Tester sur les nouveaux tickets entrants.<br>**R** : L'expert conserve la décision finale.<br>**T** : Expérimentation pendant 3 mois.                                                                      |
| **Communication utilisateurs (TalkSpirit / Newsletters)** | **S** : Générer des brouillons de newsletters et d'annonces projet.<br>**M** : Réduire de 50 % le temps de rédaction.<br>**A** : Une newsletter par mois et les communications majeures.<br>**R** : Validation avant diffusion.<br>**T** : Bilan après 3 newsletters.                                                                                                   |
| **Analyse des KPI du projet**                             | **S** : Utiliser l'IA pour produire un commentaire automatique des indicateurs GitLab, Grafana et NetBox.<br>**M** : Générer un tableau de bord hebdomadaire en moins de 15 minutes.<br>**A** : Tester sur les indicateurs existants.<br>**R** : Validation par le coordinateur du projet.<br>**T** : Évaluation après 3 mois.                                          |
| **Diagnostic de premier niveau**                          | **S** : Utiliser l'IA pour proposer des pistes de diagnostic à partir des tickets et de la documentation.<br>**M** : Réduire le temps d'analyse initial de 30 %.<br>**A** : Utilisation uniquement pour l'assistance au diagnostic.<br>**R** : Aucune action en production sans validation humaine.<br>**T** : Phase pilote de 3 mois.                                  |
| **Capitalisation des connaissances (RAG)**                | **S** : Construire une base documentaire interrogeable regroupant GitLab, procédures, NetBox et documentation MUSCADE.<br>**M** : Réduire de 50 % le temps de recherche d'information.<br>**A** : Tester avec une dizaine d'utilisateurs pilotes.<br>**R** : Les réponses sont vérifiées avant utilisation en production.<br>**T** : Prototype réalisé dans les 6 mois. |

| Proposition                                               | Catégorie logique                                            |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| Générer un brouillon de compte rendu                      | 🟢 Autorisée                                                 |
| Préparer une synthèse de données d'activité               | 🟢 Autorisée                                                 |
| Structurer un plan d'action pour l'équipe                 | 🟡 Assistée (car cela influence des décisions de management) |
| Décider d'une sanction disciplinaire                      | 🔴 Interdite                                                 |
| Évaluer automatiquement la performance d'un collaborateur | 🔴 Interdite                                                 |

# 2026-07-13 09:45

Module : Module 2 – Confidentialité et anonymisation (nom à confirmer)

## Observation ou Note

L'anonymisation peut représenter une tâche fastidieuse lorsque les données sensibles sont dispersées dans un document.

Selon le type de document, il est souvent plus efficace de concevoir un modèle facilitant l'anonymisation que d'effectuer une recherche exhaustive des données personnelles.

## Idée

Adapter les recommandations d'anonymisation au type de document.

Exemples :

| Type de document | Recommandation |
|------------------|----------------|
| CV | Regrouper les informations nominatives (nom, adresse, téléphone, e-mail) dans un en-tête facilement masquable. |
| Entretien annuel | Séparer les informations d'identification de l'évaluation afin de faciliter l'anonymisation. |
| Mail | Ne copier que le corps du message. Exclure systématiquement l'expéditeur, les destinataires et la signature. |
| Contrat | Utiliser un outil d'anonymisation automatique lorsque les données sensibles sont présentes à de nombreux endroits. |
| Documentation technique | Utiliser un outil d'anonymisation si des noms de projets, clients ou personnes apparaissent de manière répétée. |

Une bonne conception documentaire peut réduire fortement le temps consacré à l'anonymisation.

Autre constat : l'anonymisation est beaucoup plus simple sur un ordinateur que sur un smartphone. Le risque d'oublier des informations personnelles est plus élevé sur mobile.

## Action

- [ ] Ajouter une recommandation sur le choix du support (ordinateur plutôt que smartphone) lors des opérations d'anonymisation.
- [ ] Proposer, dans le rapport, une approche adaptée au type de document plutôt qu'une méthode unique.

## Impact sur Muscade

Les procédures, tickets GitLab et documentations techniques pourraient être structurés dès leur création afin de faciliter leur anonymisation en cas d'utilisation avec une IA.

# 2026-07-13 10:30

Module : Module 2 – Confidentialité et anonymisation (nom à confirmer)

## Observation ou Note

L'utilisation de l'IA nécessite souvent une anonymisation préalable des documents.

Les outils d'anonymisation sont utiles lorsque les données sensibles sont dispersées dans un document (contrats, documents techniques, spécifications...).

En revanche, certains documents peuvent être conçus dès leur rédaction afin de faciliter leur anonymisation.

Cette approche permet également d'améliorer la maintenabilité des documents.

## Idée

Définir une règle documentaire consistant à centraliser toutes les données sensibles dans une table de variables placée au début du document.

Exemple :

| Variable | Valeur |
|----------|--------|
| [PROJECT] | ISEULT |
| [PROJECT_MANAGER] | Katy Saintin |
| [SERVER] | iseult.cea.fr |
| [SERVER_IP] | 10.0.25.18 |

Puis utiliser uniquement les variables dans le corps du document.

Exemple :

Le projet **[PROJECT]** est supervisé par **[PROJECT_MANAGER]**.

Le serveur **[SERVER]** est accessible à l'adresse **[SERVER_IP]**.

Cette approche facilite :

- l'anonymisation ;
- la maintenance documentaire ;
- les changements de contexte (chef de projet, serveur, IP...) ;
- la réutilisation des documents.

## Action

- [ ] Rédiger un guide de bonnes pratiques documentaires pour l'utilisation de l'IA.
- [ ] Intégrer cette recommandation dans le rapport RS7424.
- [ ] Ajouter ce guide dans le dépôt GitHub des livrables.

## Impact sur Muscade

Cette règle pourrait être appliquée à la documentation technique, aux procédures d'installation, aux rapports d'incidents et aux documents de formation afin de faciliter leur anonymisation et leur maintenance.

# 2026-07-13 11:15

Module : Module 2 – Cadre responsable : RGPD, éthique, conformité & relation salarié

## Observation ou Note

Le module présente trois piliers complémentaires de la conformité liés à l'utilisation de l'intelligence artificielle. Ils répondent à des problématiques différentes et ne doivent pas être confondus.

| Pilier | Question à se poser | Exemple appliqué à Muscade |
|---------|---------------------|----------------------------|
| **AI Act** | Ai-je le droit d'utiliser une IA pour cette tâche ? | Utiliser une IA pour analyser les tickets GitLab et proposer une classification des incidents. Ce cas d'usage est une aide à la décision et nécessite une validation humaine. |
| **RGPD** | Puis-je transmettre ces données à une IA ? | Avant d'analyser un ticket GitLab avec une IA, masquer les noms, adresses e-mail, numéros de téléphone ou toute autre donnée permettant d'identifier un utilisateur. |
| **Obligations légales / Code du travail** | Comment utiliser l'IA vis-à-vis des collaborateurs ? | Ne jamais utiliser une IA pour attribuer automatiquement une évaluation annuelle, une sanction disciplinaire ou une prime. Ces décisions relèvent de la responsabilité du manager. |

## Idée

Le rapport pourrait distinguer ces trois axes dans les bonnes pratiques du projet Muscade :

### 1. Protection des données (RGPD)

Objectif :
- protéger les données personnelles.

Bonnes pratiques :
- anonymiser les documents avant utilisation avec une IA ;
- limiter les données transmises ;
- concevoir des documents facilement anonymisables (variables documentaires).

Exemple :

Un ticket GitLab contenant le nom et l'adresse e-mail d'un utilisateur est anonymisé avant d'être transmis à une IA pour analyse.

---

### 2. Gouvernance des usages de l'IA (AI Act)

Objectif :
- définir les cas d'usage autorisés selon leur niveau de risque.

Bonnes pratiques :
- identifier les usages autorisés ;
- conserver une validation humaine pour les usages sensibles ;
- interdire les usages incompatibles avec la politique du projet.

Exemple :

L'IA peut proposer une synthèse des incidents de la semaine, mais ne décide jamais seule des priorités de développement.

---

### 3. Responsabilité et cadre légal

Objectif :
- préserver la responsabilité humaine dans les décisions impactant les collaborateurs et les utilisateurs.

Bonnes pratiques :
- informer lorsque l'IA est utilisée ;
- conserver la décision finale à un responsable humain ;
- garantir la traçabilité des décisions importantes.

Exemple :

L'IA peut proposer une répartition des tâches de l'équipe Muscade, mais la validation finale revient au chef de projet après échange avec les collaborateurs.

## Action

- [ ] Ajouter un chapitre "Cadre responsable de l'utilisation de l'IA" dans le rapport.
- [ ] Structurer ce chapitre selon les trois piliers : AI Act, RGPD et obligations légales.
- [ ] Associer à chaque pilier des exemples concrets issus du projet Muscade.

## Impact sur Muscade

Cette approche permet de définir une gouvernance claire de l'IA :

- protéger les données personnelles des utilisateurs ;
- encadrer les usages autorisés de l'IA ;
- maintenir la responsabilité humaine sur toutes les décisions importantes.

# 2026-07-13 17:50

Module : Module 2 – Cadre responsable : RGPD, éthique, conformité & relation salarié

## Observation ou Note

Lors du module sur le principe de minimisation des données (RGPD), la formulation m'a interpellée.

En tant qu'ingénieure en génie logiciel ayant travaillé sur des problématiques de traitement de données, j'ai spontanément interprété « minimisation des données » comme une opération de réduction ou de transformation des données (agrégation, compression, réduction de dimension, etc.).

Après réflexion, j'ai compris que le RGPD utilise cette expression dans un sens juridique : il s'agit de limiter les **données personnelles collectées, traitées ou transmises** à ce qui est strictement nécessaire à la finalité poursuivie.

Cette différence de vocabulaire entre les domaines juridique et informatique peut être source d'incompréhension pour un public technique.

## Idée

Dans un support de formation destiné à des profils techniques, une formulation plus explicite pourrait être :

> « Ne collecter, utiliser ou transmettre que les données personnelles strictement nécessaires à la réalisation de la tâche. »

Cette formulation met davantage en évidence le périmètre des données concernées et évite l'ambiguïté avec les techniques de réduction de données utilisées en informatique.

## Action

- [ ] Ajouter cette anecdote dans les notes de préparation de la soutenance comme exemple de différence de vocabulaire entre le monde juridique et le monde technique.
- [ ] Être attentive, lors de la lecture des textes réglementaires, au sens juridique de certains termes pouvant différer de leur usage en informatique.

## Impact sur Muscade

Cette réflexion conforte l'idée de 
définir un guide de bonnes pratiques pour l'utilisation de l'IA dans le projet Muscade, avec des recommandations formulées dans un vocabulaire compréhensible par les équipes techniques.

# Gouvernance de l'utilisation de l'IA dans le projet Muscade

> Déclinaison des principes présentés dans le module RS7424 appliquée au projet Muscade.

---

# Synthèse

| Principe du cours | Définition | Application au projet Muscade | Livrable associé |
|-------------------|------------|-------------------------------|------------------|
| **DPO (Data Protection Officer)** | Garantir la conformité au RGPD et la protection des données personnelles. | Définir une procédure d'anonymisation avant toute utilisation d'une IA. Concevoir des documents facilement anonymisables grâce à une table de variables. | Guide d'anonymisation ; Guide de rédaction de documents compatibles IA. |
| **API sécurisées** | Limiter les échanges de données aux interfaces autorisées et sécurisées. | Utiliser uniquement les IA et services validés par le CEA. Vérifier les flux de données entre Muscade, GitLab, TalkSpirit et les outils IA. | Charte d'utilisation des outils IA. |
| **Chiffrement des données** | Garantir la confidentialité des données lors du stockage et des échanges. | Ne transmettre que des documents autorisés. Utiliser les espaces sécurisés du CEA pour stocker les documents de travail et éviter les transferts inutiles vers des services externes. | Procédure de gestion documentaire. |
| **Audit des algorithmes** | Vérifier le fonctionnement et les résultats produits par l'IA. | Conserver les prompts importants, documenter les décisions prises avec l'aide de l'IA et assurer une validation humaine des résultats avant diffusion. | Journal d'utilisation de l'IA ; Historique GitLab. |
| **Gestion des accès** | Limiter l'accès aux données selon les rôles des utilisateurs. | Définir quels documents peuvent être utilisés avec une IA, par qui et dans quel contexte. Respecter les habilitations existantes du projet Muscade. | Politique d'accès aux documents IA. |
| **Formation et sensibilisation** | Former les utilisateurs aux bonnes pratiques de l'IA. | Former les développeurs et utilisateurs Muscade aux règles d'utilisation de l'IA, à l'anonymisation des documents et aux limites des outils génératifs. | Guide de bonnes pratiques ; supports de formation. |

---

# Application concrète au projet Muscade

## Protection des données

- anonymiser les tickets GitLab ;
- anonymiser les comptes rendus ;
- anonymiser les mails avant utilisation avec une IA ;
- utiliser une table de variables afin de faciliter l'anonymisation des documents.

---

## Utilisation des IA

- utiliser uniquement les outils autorisés par le CEA ;
- définir les cas d'usage autorisés, assistés et interdits ;
- appliquer le principe de minimisation des données.

---

## Validation humaine

Toutes les productions générées par une IA restent des propositions.

Une validation humaine est systématiquement réalisée avant :

- diffusion d'une documentation ;
- communication aux utilisateurs ;
- mise en production d'une procédure ;
- prise de décision concernant un collaborateur ou un utilisateur.

---

## Capitalisation

Les prompts, procédures et retours d'expérience validés sont conservés dans :

- GitLab ;
- TalkSpirit ;
- Gamma ;
- documentation du projet.

Cette capitalisation permet d'améliorer progressivement les usages de l'IA au sein du projet Muscade.

# 2026-07-13 18:15

Module : Module 2 – Cadre responsable : RGPD, éthique, conformité & relation salarié

## Observation ou Note

Le module présente la **charte d'usage responsable de l'IA** comme un document de référence permettant de structurer les pratiques au sein d'une équipe. La charte vise à harmoniser les usages, clarifier les pratiques autorisées ou interdites, réduire les risques et instaurer une gouvernance de l'IA. Mettre en place une charte d’usage responsable de l’IA en tant que manager.pdf

En analysant ce module, je constate que plusieurs éléments avaient déjà été identifiés au cours de ma réflexion sur le projet Muscade (classification des usages, anonymisation, validation humaine, outils autorisés, documentation compatible IA). Le module apporte une structure cohérente permettant de les regrouper dans un document unique.

## Idée

Produire comme livrable du projet :

**Charte d'utilisation responsable de l'IA dans le projet Muscade**

Cette charte pourrait regrouper les éléments suivants :

- objectifs et périmètre d'utilisation de l'IA ;
- usages autorisés, assistés et interdits ;
- règles d'anonymisation et de minimisation des données ;
- outils IA autorisés dans le contexte du CEA ;
- principe de validation humaine systématique ;
- principes éthiques (transparence, esprit critique, vigilance face aux biais) ;
- rôles et responsabilités (chef de projet, collaborateurs, fonctions support) ;
- amélioration continue de la charte.

Cette charte servirait de document de référence et s'appuierait sur plusieurs documents complémentaires :

- Guide d'anonymisation ;
- Guide de rédaction de documents compatibles IA ("IA Ready") ;
- Checklist avant utilisation d'une IA ;
- Catalogue des cas d'usage IA du projet Muscade ;
- Base de connaissances des prompts validés.

## Action

- [ ] Intégrer la charte comme livrable dans le rapport RS7424.
- [ ] Détailler chaque chapitre au fur et à mesure de l'avancement de la formation.
- [ ] Déposer la première version sur le dépôt GitHub dédié aux livrables.
- [ ] Vérifier si une charte IA existe déjà au CEA afin de s'en inspirer et d'assurer la cohérence avec les règles internes.

## Impact sur Muscade

La charte constituerait un cadre commun pour l'équipe projet afin de :

- harmoniser les usages de l'IA ;
- sécuriser les échanges avec les outils d'IA ;
- faciliter l'intégration de nouveaux collaborateurs ;
- capitaliser les bonnes pratiques ;
- accompagner l'évolution progressive des usages de l'IA dans le projet Muscade.

# 2026-07-16 11:45

Module : Non précisé

## Observation ou Note

La progression pédagogique de la certification est particulièrement efficace grâce aux livrables intermédiaires demandés tout au long du parcours.

Chaque activité produit un document directement réutilisable dans le rapport final (charte d'usage de l'IA, analyse réglementaire, cartographie, cas d'usage, etc.). Cette approche évite d'avoir à rédiger l'ensemble du rapport en fin de formation et favorise une rédaction progressive.

Le rapport devient un assemblage cohérent de livrables déjà produits, complétés et enrichis au fil des modules.

Cette méthode réduit la charge cognitive et facilite la consolidation des connaissances.

## Idée

Point à valoriser lors de l'évaluation à chaud.

L'approche par livrables intermédiaires est un véritable point fort de la formation. Elle permet :

- d'ancrer les apprentissages dans des réalisations concrètes ;
- de limiter l'effet "rapport à rédiger à la fin" ;
- de construire progressivement un dossier de certification ;
- de maintenir une cohérence entre les enseignements et les attendus de la certification.

Cette organisation favorise également l'utilisation de méthodes de travail modernes (journal de bord, Markdown, IA générative, gestion documentaire) et rend le travail plus itératif.

## Action

- [ ] Mentionner ce point comme un point fort dans l'évaluation à chaud.
- [ ] Le rappeler lors de la soutenance comme élément facilitant la montée en compétences.

## Impact sur Muscade

Cette approche est directement transposable au projet Muscade.

Le principe de produire des livrables intermédiaires validés au fil de l'avancement (charte, procédures, guides, tableaux de bord, documentation technique) permettrait de limiter les gros travaux de documentation réalisés en fin de projet, d'améliorer la qualité documentaire et de faciliter les revues techniques.

---

# 2026-07-21 20:25

# Module 3 - Cartographier et analyser les processus de travail sur Muscade 

4 grands processus sont identifiés dans le projet Muscade :

### 1. Exploiter les incidents

Objectif : assurer le traitement complet des incidents techniques, depuis leur déclaration jusqu'à leur résolution.

- Réception de l'incident
- Diagnostic
- Résolution
- Clôture

---

### 2. Capitaliser les connaissances

Objectif : transformer l'expérience acquise en connaissances réutilisables afin d'améliorer la qualité du support.

- Documentation
- RETEX (Retour d'expérience)
- Procédures
- Formation

---

### 3. Piloter l'activité

Objectif : mesurer l'activité, identifier les tendances et faciliter la prise de décision.

- KPI GitLab
- Tableaux de bord
- Analyse des tendances
- Communication des résultats

---

### 4. Déployer l'IA de manière responsable

Objectif : intégrer l'intelligence artificielle dans les processus de travail tout en garantissant la conformité, la sécurité et l'éthique.

- Anonymisation des données
- Contrôle RGPD / AI Act
- Validation humaine des résultats
- Charte d'usage de l'IA
- Sensibilisation et accompagnement des équipes

| Processus | Activité | Tâches | Acteurs | Outils | Opportunité IA |
|-----------|----------|---------|----------|---------|----------------|
| Gestion des incidents | Réception d'un incident | Lire le ticket, vérifier les informations, qualifier la demande | Utilisateur, Support | GitLab | Synthèse automatique du ticket, proposition de catégorie |
| Gestion des incidents | Diagnostic | Rechercher des incidents similaires, consulter la documentation, analyser les journaux | Support | GitLab, Documentation, Grafana | Recherche sémantique, aide au diagnostic |
| Gestion des incidents | Traitement | Corriger l'incident, tester, documenter la résolution | Support | GitLab | Génération d'un brouillon de procédure ou de compte rendu |
| Gestion des incidents | Clôture | Informer l'utilisateur, fermer le ticket, mettre à jour la documentation | Support | GitLab | Génération du message de clôture et de la documentation |
| Capitalisation des connaissances | Création de documentation | Rédiger une procédure, illustrer avec captures d'écran, publier | Support | Markdown, GitLab Wiki | Aide à la rédaction, reformulation, contrôle qualité |
| Capitalisation des connaissances | Mise à jour documentaire | Vérifier l'obsolescence, corriger les procédures | Support | GitLab Wiki | Détection des documents obsolètes |
| Pilotage de l'activité | Collecte des indicateurs | Extraire les KPI GitLab | Support | GitLab | Extraction et synthèse automatique |
| Pilotage de l'activité | Analyse des indicateurs | Identifier les incidents récurrents, les goulots d'étranglement, les besoins en ressources | Support, Chef de projet | GitLab, Grafana | Détection de tendances, synthèse des anomalies |
| Pilotage de l'activité | Communication | Préparer une synthèse d'activité, présenter les résultats | Chef de projet | PowerPoint, Markdown | Génération de synthèses et graphiques commentés |
| Gestion des changements | Préparation d'une intervention | Définir le périmètre, identifier les risques, préparer la communication | Support | GitLab | Check-list automatique, analyse de risques |
| Gestion des changements | Réalisation | Exécuter les opérations, contrôler les résultats | Support | Scripts, Outils d'administration | Assistance procédurale |
| Gestion des changements | Retour d'expérience | Documenter les difficultés, proposer des améliorations | Support | Markdown | Génération du RETEX |
| Développement Muscade | Conception | Identifier un besoin, rédiger les spécifications | Chef de projet | Markdown | Structuration des idées, rédaction |
| Développement Muscade | Développement | Concevoir l'outil, coder, tester | Développeur | VS Code, GitLab | Assistance au développement |
| Développement Muscade | Validation | Tester, corriger, documenter | Développeur | GitLab CI | Génération de rapports de tests |
| Gouvernance IA | Vérification de conformité | Contrôler l'anonymisation, vérifier la charte IA, appliquer les règles de sécurité | Tous | Charte IA, Guide Muscade | Check-list automatique avant utilisation d'une IA |

### Quelles tâches sont automatisables avec l'IA

## Potentiel d'automatisation des processus du projet Muscade

| Processus | Automatisable | Cas d'usage IA | Validation humaine |
|-----------|---------------|----------------|--------------------|
| Exploiter les incidents | Oui (fort potentiel) | Extraction des tickets GitLab, synthèse des incidents, regroupement des incidents similaires, proposition de diagnostic, génération d'un rapport d'activité | Validation du diagnostic et des actions correctives |
| Capitaliser les connaissances | Oui (fort potentiel) | Génération de procédures à partir d'un modèle, rédaction d'un RETEX, synthèse des commentaires GitLab, création de supports de formation (Gamma, PowerPoint), reformulation documentaire | Relecture technique avant diffusion |
| Piloter l'activité | Oui (fort potentiel) | Extraction automatique des KPI GitLab, génération de tableaux de bord, analyse des tendances, détection d'incidents récurrents, synthèse hebdomadaire ou mensuelle | Validation de l'interprétation des indicateurs et des décisions |
| Déployer l'IA de manière responsable | Oui (potentiel moyen) | Vérification de l'anonymisation, contrôle du respect de la charte IA, check-list de conformité RGPD / AI Act, détection d'informations sensibles avant envoi à une IA | Validation finale par le responsable du projet |

## Observations

Les processus identifiés sont principalement automatisables sur les tâches répétitives à faible valeur ajoutée.

L'IA intervient principalement pour :

- rechercher des informations ;
- synthétiser des données ;
- générer une première version d'un document ;
- produire des indicateurs ;
- assister la prise de décision.

La décision finale, la validation technique et les arbitrages restent sous la responsabilité de l'équipe projet.

Le projet Muscade présente un fort potentiel d'automatisation grâce à l'utilisation d'outils déjà structurés (GitLab, Grafana, documentation Markdown, tableaux de bord). Les données étant déjà organisées, l'IA peut être intégrée progressivement sans modifier profondément les processus existants.
---

# 2026-07-22 — Module 3 : Évaluer la valeur ajoutée réelle de l'IA sur un processus

**Module :** RS7424 – Compétence 2 – Module 3  
**Thème :** Évaluer la valeur ajoutée de l'IA avant d'automatiser un processus.

---

## Synthèse du module

L'objectif du module n'est pas d'identifier ce qui est automatisable, mais ce qui mérite réellement de l'être.

Une automatisation n'a de valeur que si elle résout un problème concret identifié dans le fonctionnement de l'équipe.

Le rôle du manager n'est donc pas d'introduire l'IA pour "faire moderne", mais d'améliorer un processus existant en apportant un bénéfice mesurable.

Le module insiste également sur un point important :

> Automatiser un mauvais processus revient simplement à accélérer un dysfonctionnement existant.

Avant toute automatisation, il est donc indispensable de cartographier, comprendre puis analyser le processus.

---

## Les cinq dimensions d'évaluation

| Dimension | Question à se poser | Application au projet Muscade |
|------------|---------------------|-------------------------------|
| **Gain de temps** | Les tâches sont-elles répétitives et chronophages ? | **Fort** : génération automatique du rapport hebdomadaire d'incidents, statistiques, synthèse des tickets GitLab. |
| **Fiabilité** | L'automatisation réduit-elle les erreurs ou les oublis ? | **Élevée** : suppression des erreurs de comptage, homogénéisation des rapports, réduction des oublis. |
| **Fluidité** | Le processus devient-il plus rapide ou plus lisible ? | **Moyenne** : la préparation est accélérée mais les validations et arbitrages restent humains. |
| **Expérience collaborateur** | Les utilisateurs bénéficient-ils directement de l'automatisation ? | **Faible** : l'amélioration est principalement interne au support ; les utilisateurs en bénéficient indirectement via une meilleure qualité de service. |
| **Alignement organisationnel** | Le processus contribue-t-il aux objectifs du service ? | **Fort** : amélioration du pilotage, aide à la décision, meilleure priorisation des incidents et meilleure allocation des ressources. |

---

## Application au processus "Exploitation des incidents GitLab"

Le processus sélectionné est particulièrement pertinent pour une automatisation par l'IA car il repose principalement sur des données factuelles :

- extraction des tickets GitLab ;
- calcul des indicateurs ;
- détection des tendances ;
- génération d'un rapport hebdomadaire ;
- préparation du point projet Muscade.

L'IA permet d'assister la cheffe de projet dans toutes les tâches répétitives de collecte et de synthèse.

En revanche, plusieurs activités doivent impérativement rester humaines :

- validation des résultats ;
- interprétation du contexte métier ;
- arbitrage des priorités ;
- communication avec les équipes ;
- décision managériale.

L'IA devient ainsi un outil d'aide à la décision et non un outil de décision.

---

## Réflexion personnelle

Ce module confirme une intuition que j'avais déjà en pilotant Muscade.

L'objectif n'est pas de remplacer le travail d'un chef de projet mais de lui retirer la partie la plus répétitive et la moins créatrice de valeur.

Dans mon cas, la production des rapports d'activité représente une charge importante alors qu'elle repose essentiellement sur des données déjà présentes dans GitLab.

L'IA peut automatiser la collecte, les statistiques et la rédaction d'un premier rapport, tandis que l'expertise humaine reste indispensable pour interpréter les résultats et décider des actions à mener.

Cette distinction entre **automatiser une analyse** et **automatiser une décision** constitue, selon moi, l'un des enseignements les plus importants de ce module.

---

## Impact sur le projet Muscade

- Confirmation du choix du processus prioritaire : **Exploitation des incidents GitLab**.
- Validation que ce processus apporte une forte valeur ajoutée lorsqu'il est assisté par l'IA.
- Justification argumentée de l'intégration de ChatGPT, Claude et Gamma dans le futur fonctionnement du support Muscade.
- Renforcement de l'idée que l'IA est un **assistant d'analyse**, tandis que les décisions stratégiques et opérationnelles demeurent sous responsabilité humaine.

---

## Idées à approfondir

- Automatiser l'extraction des tickets GitLab via CI/CD ou API.
- Générer automatiquement un rapport hebdomadaire Markdown.
- Produire une présentation Gamma directement à partir du rapport.
- Générer automatiquement une liste des actions prioritaires à proposer au manager.
- Étudier la possibilité de détecter automatiquement les incidents récurrents ou les signaux faibles à partir de l'historique GitLab.

> **Citation personnelle :**
>
> *« Une bonne IA ne remplace pas le manager. Elle lui évite surtout de perdre son temps à compter, trier et reformuler ce que les données savent déjà dire. »*

# 2026-07-22

Module : RS7424 – Compétence 2 – Module 3 (Évaluation à chaud)

## Observation ou Note

Lors du dépôt du livrable « Cartographier vos processus automatisables », j'ai publié par erreur le modèle vierge au lieu du document complété.

La plateforme ne permet pas de supprimer ou de remplacer une pièce jointe après son dépôt. J'ai donc transmis le bon document directement à Mme Roche par courriel.

Cet incident m'a conduit à réfléchir à l'expérience utilisateur de la plateforme et aux possibilités d'amélioration.

## Idée

Proposer une amélioration ergonomique de la plateforme de formation :

- autoriser la suppression ou le remplacement d'une pièce jointe avant ou après validation du dépôt ;
- afficher un aperçu du document déposé afin de limiter les erreurs ;
- éventuellement ajouter une confirmation avant l'envoi définitif.

Cette fonctionnalité réduirait les erreurs de manipulation et éviterait des échanges complémentaires avec les formateurs.

## Action

- [x] Envoyer le livrable correct à Mme Roche par courriel.
- [x] Lui transmettre une suggestion d'amélioration de la plateforme.
- [ ] Intégrer cette observation dans l'évaluation à chaud de la formation.

## Impact sur Muscade

Cette expérience rappelle l'importance de concevoir des interfaces qui prennent en compte les erreurs humaines.

Pour le projet Muscade, cela conforte l'idée que les outils développés doivent permettre de corriger facilement une action involontaire (annulation, remplacement, validation avant publication), afin d'améliorer l'expérience utilisateur et de limiter les erreurs opérationnelles.

---

# 2026-07-22

Module : RS7424 – Compétence 2 – Module 3 (Cartographie et analyse des processus)

## Observation ou Note

En préparant le livrable de cartographie du processus « Exploitation des incidents GitLab », je me suis aperçue que l'étape d'extraction des données constituait un point faible du processus actuel.

Pour réaliser les statistiques de mon étude, j'ai dû effectuer un comptage manuel à partir de captures d'écran GitLab, la fonctionnalité d'export CSV n'étant pas disponible sur mon instance.

Cette contrainte m'a amenée à réfléchir à une amélioration technique indépendante de l'IA, qui viendrait compléter naturellement le processus.

## Idée

Ajouter une nouvelle étape technique en amont du processus :

**Extraction automatisée des données GitLab via l'API GitLab et un pipeline CI/CD.**

Principe proposé :

1. Déclenchement automatique d'un pipeline GitLab (planifié ou manuel).
2. Appel de l'API REST GitLab.
3. Extraction des Issues, labels, milestones, projets, états, dates et affectations.
4. Génération automatique d'un fichier CSV, JSON ou Markdown.
5. Utilisation de ces données comme entrée des outils d'IA (ChatGPT ou Claude) afin de produire le rapport hebdomadaire.

Cette automatisation permettrait de fiabiliser les données d'entrée avant leur exploitation par l'IA.

## Réflexion

Cette idée est née directement au cours de la réalisation du livrable de certification.

Le travail demandé m'a conduit à analyser mon propre processus de production des rapports d'activité et à identifier une étape répétitive, chronophage et peu fiable.

J'ai ainsi réalisé que l'IA n'était pas le premier levier d'amélioration.

L'automatisation de la collecte des données constitue un prérequis indispensable avant toute génération de rapports par IA.

Cette réflexion illustre la complémentarité entre :

- l'automatisation classique (API, CI/CD, scripts Python) ;
- l'intelligence artificielle générative (analyse, synthèse, rédaction).

## Action

- [ ] Mettre à jour le schéma du processus en ajoutant une étape « Extraction automatisée via API GitLab ».
- [ ] Décrire ce principe dans le rapport RS7424 comme une piste d'amélioration identifiée.
- [ ] Ne pas développer cette automatisation dans le cadre de la certification, mais en présenter l'architecture et les bénéfices attendus.
- [ ] Étudier ultérieurement la faisabilité technique d'un pipeline GitLab CI générant automatiquement les exports destinés aux rapports d'activité.

## Impact sur Muscade

Cette évolution renforcerait la fiabilité du processus de pilotage du support Muscade.

Elle permettrait de produire des indicateurs homogènes, reproductibles et exploitables automatiquement par les outils d'IA, tout en réduisant le temps consacré aux tâches de collecte manuelle.

Cette idée constitue une évolution naturelle du projet Muscade et pourrait faire l'objet d'un futur développement indépendant de la certification.

---

# 2026-07-22

Module : Évaluation à chaud de la plateforme de formation

## Observation ou Note

Au cours de la formation RS7424, plusieurs difficultés d'utilisation de la plateforme ont été identifiées. Elles ne concernent pas le contenu pédagogique, mais l'ergonomie et la navigation entre les différents outils mis à disposition des apprenants.

Ces points ne sont pas bloquants, mais leur amélioration simplifierait l'expérience utilisateur :
- L'url de l'elearning n'est pas évident à retrouver sans le mail d'inscription de Beforma. https://mixlearning.beforma.fr/ ,
il faudrait que les liens vers les différents sites soient référencés sur le site d'accueil de Beforma https://beforma.digiforma.net/ 
- Ainsi que le calendrier de prise de rendez-vous sur Google calendar Enfin sur la page d'accueil,
- il n'y a pas de bouton Aller au menu d'accueil. La seule solution que j'ai pour avoir accès au sommaire de la formation, c'est de reprendre l'URL et de faire F5 ..

