# Journal de bord -- Certification RS7424

## Format proposé

Chaque entrée :

``` md
# YYYY-MM-DD HH:MM
Module : ... (optionnel)

Observation

---
```

## Journal existant (à restructurer)

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
