# Points de clarification suite à la réunion de reprise

## 1. Formalisation des décisions et des orientations

Un point de la réunion me reste en question : la préférence exprimée pour privilégier les échanges oraux plutôt que les échanges écrits.

Je comprends l'intérêt de l'échange oral pour faciliter la communication au quotidien. En revanche, je ne suis pas d'accord avec l'idée que les décisions structurantes puissent rester uniquement orales.

Pour mon activité, plusieurs types de décisions ont un impact direct sur mes priorités et sur mes choix techniques :

- orientations stratégiques du laboratoire ;
- choix ou abandon d'une technologie ;
- maintien ou arrêt de Muscade ;
- positionnement de Java ;
- architecture logicielle ;
- choix des outils de développement et de gestion du support ;
- arbitrages entre maintenance, développement et R&D.

Ces éléments nécessitent, à mon sens, d'être explicités et tracés.

Cela est d'autant plus important que des consignes données oralement peuvent parfois être difficiles à interpréter lorsqu'elles évoluent ou semblent contradictoires.

L'écrit ne constitue pas pour moi un substitut à la communication humaine : c'est un outil qui me permet de structurer les décisions, de vérifier que j'ai correctement compris les attentes et d'organiser mon travail en conséquence.

Je souhaite donc continuer à utiliser l'écrit pour formaliser les décisions et arbitrages structurants, tout en maintenant les échanges oraux nécessaires au fonctionnement quotidien.


## 2. Positionnement de Java au sein du laboratoire

Lors de la réunion, j'ai indiqué que je ressentais un isolement concernant le portage de la compétence Java.

Paul a indiqué que je n'étais pas la seule personne à faire du Java au laboratoire.

Je n'ai pas compris précisément ce que cette remarque impliquait concernant mon activité et souhaiterais donc la faire expliciter.

Mon constat est le suivant :

- je suis aujourd'hui la personne qui porte de manière transverse et pérenne la stratégie de développement Java associée à Muscade et à son évolution ;
- j'ai également engagé des travaux autour de Java dans l'écosystème EPICS/Phoebus ;
- je travaille sur les aspects architecture, qualité logicielle, intégration continue, packaging et maintenance ;
- ces activités sont réalisées dans une logique de pérennisation et de standardisation du logiciel.

Il existe par ailleurs d'autres développements Java au laboratoire, mais leur situation est différente.

Un premier développement est maintenu par un collègue qui a fait le choix de conserver son projet hors des pratiques que je cherche à mettre en place : Mavenisation, GitLab DRF, CI, bibliothèques standardisées, architecture logicielle, etc.

J'ai néanmoins effectué un travail important pour proposer une architecture et une démarche de modernisation, qui n'a pas été intégré au projet concerné.

Un autre développement Java est historiquement porté par un automaticien qui ne développe plus aujourd'hui de manière significative.

Je ne suis pas manager de ces personnes et je ne peux donc pas leur imposer une stratégie de développement ou de qualité logicielle.

Par conséquent, le fait qu'il existe d'autres développements Java ne signifie pas, de mon point de vue, qu'il existe plusieurs personnes portant effectivement une stratégie Java commune et pérenne au sein du laboratoire.

Si le laboratoire souhaite réellement maintenir une compétence Java transverse, il me semble nécessaire que cette orientation soit explicitement définie, portée par le management et accompagnée des moyens correspondants.


## 3. Outils de support, tickets et organisation collective

Un autre point à clarifier concerne la gestion du support.

J'ai compris de l'échange que l'utilisation d'outils tels que Jira ou GitLab pour le suivi des demandes ne serait pas imposée à l'ensemble du laboratoire et que chacun pourrait conserver ses propres pratiques.

Dans ce cas, je ne peux pas porter individuellement la responsabilité d'imposer ces pratiques à mes collègues.

Je peux proposer des outils, définir une méthode et expliquer leur intérêt technique.

En revanche, si le laboratoire souhaite mettre en place une organisation commune du support, celle-ci doit être décidée et portée par le management.

La feuille de route Muscade 2024 indique d'ailleurs explicitement une volonté de mettre en place une gestion du support selon une méthode Agile avec un suivi rigoureux des demandes et des incidents.

C'est donc un point qui me semble devoir être arbitré collectivement plutôt que porté individuellement par la personne en charge de Muscade.

Je souhaite également éviter de me retrouver dans une situation où je dois à la fois :

- assurer le support ;
- suivre les demandes ;
- relancer les contributeurs ;
- imposer les outils ;
- contrôler la qualité des développements ;
- assurer l'architecture ;
- et assumer la responsabilité globale du fonctionnement,

sans disposer d'une autorité hiérarchique ou organisationnelle correspondante.


## 4. Lecture de la feuille de route Muscade et du rapport CSTD

C'est probablement le point qui nécessite le plus de clarification.

J'ai relu les documents disponibles à la suite de notre échange.

La feuille de route Muscade indique que :

- Muscade reste une solution proposée par le LDISC ;
- elle est initialement maintenue jusqu'en 2032 ;
- les efforts de développement sont principalement orientés vers l'évolution de la partie cliente ;
- la migration vers EPICS est progressive ;
- la solution Muscade serveur peut être conservée dans certains projets ;
- et, au terme des dix ans, l'activité peut être reconduite s'il existe encore des expériences ayant besoin de cette solution.

Le rapport CSTD 2026 indique par ailleurs que le DIS continue à maintenir Muscade et à promouvoir son intégration sous EPICS.

Il indique également qu'en 2026 :

- Phoebus est retenu pour la partie client lourd ;
- des développements sont en cours pour rendre le serveur Muscade compatible Linux ;
- l'objectif est de réduire la dette technique tout en conservant les fonctionnalités spécifiques utiles ;
- et la tâche d'intégration d'EPICS dans Muscade repose actuellement sur l'expertise de la cheffe de produit Muscade.

Ces éléments me semblent importants car ils ne correspondent pas exactement à l'interprétation simplifiée selon laquelle « Muscade s'arrête en 2032 ».

Je comprends plutôt les documents comme décrivant une trajectoire :

    Muscade serveur
          ↓
    modernisation / Linux
          ↓
    intégration EPICS
          ↓
    remplacement progressif du client historique
          ↓
    Phoebus

Je souhaite donc savoir quelle est aujourd'hui l'orientation effectivement validée par le LDISC et quelle part de cette trajectoire doit être considérée comme un livrable pérenne du laboratoire.


## 5. Java et EPICS

Un autre point important concerne le positionnement de Java dans la stratégie EPICS.

J'ai compris lors de la réunion que les développements Java ne seraient pas retenus pour les IOC EPICS.

Cela nécessite pour moi une clarification, car une partie du travail que j'ai engagé autour de Java, EPICS, Muscade et Phoebus s'inscrit précisément dans une stratégie de convergence entre les technologies existantes et l'écosystème EPICS.

Par ailleurs, le rapport CSTD pose explicitement la question des choix technologiques du DIS, notamment « Java vs autres solutions », et décrit Muscade comme étant développé en Java.

Il décrit également la stratégie 2026 de convergence de Muscade vers EPICS et Phoebus.

Je souhaite donc distinguer clairement :

- Java utilisé dans les IOC EPICS ;
- Java utilisé dans Muscade serveur ;
- Java utilisé dans les composants logiciels autour d'EPICS/Phoebus ;
- Java utilisé dans les autres logiciels du laboratoire.

Ces sujets ne me semblent pas pouvoir être regroupés sous une seule décision « Java oui/non ».


## 6. Java / EPICS / Phoebus et activité transverse

Concernant mes activités autour d'EPICS et de Phoebus, une partie du travail est réalisée dans une logique de R&D et de collaboration avec des partenaires externes, notamment ESS et BNL.

Cette activité est par nature transverse et ne correspond donc pas nécessairement à une activité de développement classique portée uniquement par le laboratoire.

C'est précisément ce caractère transverse qui renforce mon besoin de clarification du positionnement de cette activité dans mon poste :

- R&D ?
- expertise transverse ?
- activité du LDISC ?
- contribution à une communauté externe ?
- livrable du laboratoire ?

Aujourd'hui, je porte seule une grande partie de cette activité.

Je ne peux donc pas considérer comme équivalentes l'existence de quelques développements Java au laboratoire et l'existence d'une véritable équipe ou stratégie Java.


## 7. CI, GitLab et qualité logicielle

Même constat concernant l'intégration continue.

La mise en place d'une CI Java sous GitLab est actuellement essentiellement portée par moi.

Le rapport CSTD indique d'ailleurs qu'un effort conséquent est actuellement engagé autour de l'intégration continue avec GitLab et que cette méthode est appelée à être développée.

Cela confirme que le sujet dépasse mon seul projet Muscade.

En revanche, si certains développeurs ne souhaitent pas utiliser ces outils ou ne souhaitent pas faire évoluer leurs projets vers ces pratiques, je ne peux pas porter seule cette transformation.

Il me semble nécessaire de distinguer :

- la recommandation technique ;
- la décision du laboratoire ;
- et l'obligation de mise en œuvre par les développeurs.

Je peux porter la première.
Le management doit porter la deuxième.
La troisième doit être définie collectivement.


## 8. Ce que j'ai besoin de savoir pour organiser mon travail

Mon objectif n'est pas de remettre en question chaque décision prise.

Au contraire, je souhaite disposer d'un cadre suffisamment clair pour pouvoir exécuter les décisions prises sans avoir à les réinterpréter en permanence.

J'ai besoin de savoir notamment :

1. Quel est le périmètre exact de Muscade dans la stratégie du LDISC ?
2. Quelle est la trajectoire réellement validée entre Muscade, EPICS et Phoebus ?
3. Quelle est la place du serveur Muscade après 2032 ?
4. Quelle est la place de Java dans cette stratégie ?
5. Quels développements Java sont considérés comme faisant partie des livrables du laboratoire ?
6. Quelle est ma responsabilité exacte dans cette stratégie ?
7. Quels outils et méthodes de développement/support sont obligatoires ?
8. Quels sujets relèvent de ma responsabilité individuelle et lesquels relèvent d'un arbitrage collectif du laboratoire ?


## 9. Priorisation immédiate

Enfin, je souhaite éviter de consacrer une part importante de ma reprise à analyser des documents stratégiques sans savoir quelle décision opérationnelle doit en découler.

À court terme, les sujets techniques que j'identifie comme prioritaires sont notamment :

- les actions urgentes liées à DESI ;
- le portage de Muscade serveur sous Linux ;
- la finalisation des développements permettant l'utilisation de Phoebus comme client ;
- la réduction de la dépendance aux composants historiques devenus difficiles à maintenir ;
- et la remise en état progressive du support et de la documentation.

Je souhaite donc que la lecture de la note CSTD et des différentes feuilles de route permette d'aboutir à des décisions concrètes sur ces sujets, plutôt qu'à une nouvelle interprétation individuelle de la stratégie.

Mon objectif est de disposer d'un cadre clair, validé et partagé, afin de pouvoir ensuite me concentrer sur l'exécution technique des priorités qui auront été définies.