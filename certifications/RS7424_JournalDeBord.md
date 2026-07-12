# Journal de bord -- Certification RS7424

## Prompt de sauvega

Chaque entrée :

``` md
Génère moi dans un bloc md à copier.
Toutes les notes, observations, idées en rapport avec la certification RS7424 
Tu ne modifies jamais mes idées.
Tu les reformules uniquement pour améliorer leur lisibilité.
Le style doit rester factuel, synthétique et facilement exploitable lors de la rédaction de mon rapport de certification

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

---

# Contexte

Cette prise de notes servira à :

- préparer mon rapport RS7424 ;
- suivre mes réflexions pendant la formation ;
- conserver les idées de projets ;
- documenter les liens entre les modules de formation et le projet Muscade ;
- conserver les idées de développement logiciel liées à l'IA.

Ne produire que les entrées Markdown.


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
