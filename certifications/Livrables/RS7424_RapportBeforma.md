# Gérer et transformer les processus de travail des équipes avec l'aide de l'IA

**Rapport écrit — RS7424**
Nom : Saintin — Prénom : Katy
Organisme de formation : BEFORMA — Organisme certificateur : Classe Digitale

---

## Sommaire

- Présentation de mon contexte professionnel
- Périmètre d'utilisation de l'IA dans les processus de l'équipe (C1)
- Reconfigurer un processus de travail avec l'IA (C2)
- Élaborer des requêtes et configurer les outils IA (C3)
- Créer ou améliorer des contenus professionnels avec l'IA (C4)
- Amélioration continue (C5)
- Conclusion et perspectives

---

## Présentation de mon contexte professionnel

**Présentation de l'organisation.** Le CEA est un grand organisme public de recherche, présent sur plusieurs centres en France. Je travaille au sein de l'Irfu, un institut de recherche fondamentale (astrophysique, physique nucléaire et des particules) qui conçoit des équipements scientifiques de très haute technologie. Mon laboratoire développe et maintient MUSCADE, un logiciel de supervision utilisé sur une trentaine d'installations scientifiques, en France et à l'étranger.

**Fonction occupée.** Je suis Experte Senior en génie logiciel et Cheffe de produit MUSCADE depuis octobre 2025. Si mon expertise technique reste un pilier de ce rôle, ma mission de cheffe de produit est avant tout **managériale** : organiser le support aux utilisateurs, répartir les activités au sein de l'équipe, et faire monter cette équipe en compétences plutôt que de rester la seule ressource experte du laboratoire.

**Présentation de l'équipe concernée.** L'équipe support (ingénieurs et automaticiens) traite aujourd'hui les incidents des utilisateurs de façon largement manuelle, avec une forte dépendance à une seule personne experte — moi-même. Cette situation, documentée par ma hiérarchie (feuille de route et cartographie des activités), n'est pas tenable à long terme : elle constitue le point de départ managérial de ce dossier, davantage qu'une simple opportunité technique.

**Un mot sur ma légitimité à traiter ce sujet.** Au-delà de mon rôle professionnel, je suis moi-même porteuse d'un trouble neurodéveloppemental (TDAH) reconnu par une RQTH, et j'ai déjà publié un retour d'expérience public sur l'usage de l'IA comme outil de compensation cognitive. Cette double entrée — managériale et personnelle — explique pourquoi l'inclusion et l'accessibilité (développées en C2 et C4) ne sont pas pour moi des cases réglementaires, mais un sujet que je connais de l'intérieur. J'ai par ailleurs obtenu, un mois avant ce parcours, la certification RS6776 (création de contenus par l'IA générative, 96 % à l'écrit), qui a déjà approfondi plusieurs notions communes aux deux référentiels (prompt engineering, RGPD/anonymisation, accessibilité FALC) : je m'appuie sur ces acquis plutôt que de les redémontrer intégralement dans ce dossier.

**Démarche méthodologique et journal de bord**
Ce rapport n'a pas été rédigé d'un seul tenant en fin de parcours : il est la synthèse d'un travail mené au fil de l'eau, module après module, à partir d'un journal de bord tenu en Markdown versionné sur mon repository GitHub, tout au long de la certification.

**Principe de fonctionnement.** Chaque module ou exercice donnait lieu à un livrable intermédiaire (diagnostic, cartographie, charte, dispositif de suivi…), consigné et daté dans le journal de bord au fur et à mesure de sa production, avant d'être ensuite consolidé dans ce rapport final. Cette méthode a évité une rédaction finale « à blanc » et a permis une amélioration continue traçable du dossier, module après module — visible dans l'historique de versions de ce document (voir tableau en tête de rapport).

**Rôle des IA comme tuteurs de certification.** Pour valider mes acquis et ma compréhension du référentiel au fur et à mesure, j'ai configuré ChatGPT et Claude en « tuteurs certification », en leur fournissant les référentiels RS7424 et RS6776 comme grille de lecture. Cet usage a servi trois objectifs distincts :
- **Vérification de compréhension** : reformuler une notion du référentiel avec mes propres mots, puis la faire challenger par l'IA pour identifier les zones de flou avant de les traiter dans le rapport.
- **Diagnostic croisé** : faire auditer un même livrable par les deux IA séparément, afin de repérer les incohérences ou les angles morts qu'une seule relecture (la mienne ou celle d'une seule IA) aurait pu laisser passer.
- **Auto-positionnement** : évaluer, une fois le rapport rédigé, le niveau atteint par rapport au référentiel (cf. auto-évaluation des compétences ci-après), en gardant à l'esprit que ce diagnostic reste un outil de préparation, non une validation du jury.

**Limite assumée de cette méthode.** Un diagnostic ou un audit produit par une IA reste un point de vue algorithmique, pas une garantie de conformité au référentiel : il a valeur d'aide à la relecture et à la structuration, pas de validation externe. C'est pour cette raison que chaque ajout suggéré par une IA a été marqué **[à confirmer]** dans le journal de bord jusqu'à validation factuelle de ma part (voir historique de versions v0.5 à v0.6) — aucun contenu n'a été intégré tel quel sans repasser par ce filtre.

---

## Périmètre d'utilisation de l'IA dans les processus de l'équipe (C1)

### Partie 1 — Processus de travail pouvant être transformés

| Processus | Acteurs | Description des tâches | Difficultés rencontrées |
|---|---|---|---|
| Traitement des incidents utilisateurs | Utilisateurs, équipe support, moi-même | Réception d'une demande, qualification, diagnostic, résolution | Demandes reçues de façon informelle (téléphone, mail libre), qualité inégale des informations, délai de traitement, forte dépendance à une seule experte |
| Capitalisation des connaissances | Équipe support, moi-même | Transformer un incident résolu en fiche de procédure réutilisable | Rédaction chronophage, souvent repoussée, informations dispersées, savoir-faire non transmis aux nouveaux arrivants |

**Comment l'IA peut améliorer ces processus**

| Processus | Opportunités liées à l'IA |
|---|---|
| Traitement des incidents | Un assistant conversationnel guide l'utilisateur, collecte les informations utiles et prépare une demande déjà structurée pour le support |
| Capitalisation des connaissances | L'IA génère une première version de la procédure à partir d'un ticket résolu, à valider par un humain avant publication |

Le choix de ces deux processus n'est pas arbitraire : il s'appuie sur une grille d'évaluation à cinq dimensions, destinée à vérifier qu'une automatisation apporte une valeur réelle plutôt qu'une modernisation de façade (automatiser un mauvais processus ne fait qu'accélérer un dysfonctionnement existant) :

| Dimension | Question posée | Application au processus « Traitement des incidents » |
|---|---|---|
| Gain de temps | Les tâches sont-elles répétitives et chronophages ? | Fort — génération automatique du rapport hebdomadaire et des statistiques |
| Fiabilité | L'automatisation réduit-elle les erreurs ou les oublis ? | Élevée — homogénéisation des tickets, moins d'oublis |
| Fluidité | Le processus devient-il plus rapide ou plus lisible ? | Moyenne — la préparation est accélérée, la validation reste humaine |
| Expérience collaborateur | Les utilisateurs en bénéficient-ils directement ? | Directe pour la capitalisation (FAQ), indirecte pour le traitement des incidents |
| Alignement organisationnel | Le processus sert-il les objectifs du service ? | Fort — meilleur pilotage et meilleure allocation des ressources |

*[DIAGRAMME 1 — voir prompt Gamma en fin de document]*

**Impacts attendus**

- Sur mon rôle de manager : moins de temps passé sur le support de premier niveau, plus de temps consacré à l'architecture, au développement et à la formation de l'équipe.
- Sur l'organisation de l'équipe : répartition plus claire des compétences, réduction de la dépendance à une seule personne, mise à jour à prévoir des fiches de rôle du support.
- Sur la performance globale : traitement plus rapide et plus homogène des demandes, meilleure autonomie des utilisateurs.

### Partie 2 — Périmètre d'utilisation de l'IA

| Usage de l'IA | Objectif |
|---|---|
| Assistant conversationnel de qualification des demandes | Guider l'utilisateur et fiabiliser l'information transmise |
| Génération de comptes rendus et de supports de présentation | Gain de temps sur la rédaction |
| Génération de procédures à partir d'un incident résolu | Capitaliser les connaissances de l'équipe |

**Les 4 types de risques identifiés**

| Type de risque | Exemple pour notre contexte |
|---|---|
| Juridique | Respect de l'AI Act et du RGPD sur les données transmises à une IA |
| Éthique | Ne jamais utiliser les indicateurs d'activité pour évaluer individuellement un collaborateur ; garantir l'équité de traitement entre collègues |
| Sécuritaire | Fuite de données techniques ou personnelles sensibles vers un outil externe |
| Écologique | Usage disproportionné d'une IA pour des tâches simples |

**Mesures mises en place**

- Anonymisation systématique des données avant transmission à une IA, via une convention documentaire simple (les informations sensibles sont regroupées sur une seule page du document, qu'il suffit de retirer avant transmission).
- Validation humaine obligatoire avant toute décision ou diagnostic issu de l'IA.
- Une charte d'utilisation responsable de l'IA, propre à mon équipe, cohérente avec la doctrine de mon organisme (qui déploie sa propre plateforme d'IA générative souveraine, avec le principe que l'IA reste une assistance et ne remplace jamais l'expertise humaine).
- Un principe de sobriété : l'IA n'est utilisée que lorsqu'elle apporte une réelle valeur, avec réutilisation systématique des requêtes déjà validées plutôt que leur régénération.

### Partie 3 — Objectifs stratégiques d'intégration de l'IA

Chaque cas d'usage a été formalisé selon la méthode SMART (Spécifique, Mesurable, Atteignable, Réaliste, Temporel), afin de fixer des objectifs vérifiables plutôt que des intentions générales :

| Tâche | Objectif SMART |
|---|---|
| Traitement des incidents | **S** : qualifier les incidents avec l'assistant. **M** : -30 % de temps de qualification. **A** : testé sur les nouveaux tickets entrants. **R** : l'expert conserve la décision finale. **T** : expérimentation sur 3 mois. |
| Rédaction de comptes rendus | **S** : générer une synthèse hebdomadaire des activités. **M** : -50 % de temps de rédaction. **A** : testé sur un point d'équipe par semaine. **R** : validation systématique avant diffusion. **T** : expérimentation sur 3 mois. |
| Capitalisation des connaissances | **S** : construire une base documentaire interrogeable à partir des tickets résolus. **M** : -50 % de temps de recherche d'information. **A** : testé avec un groupe pilote d'utilisateurs. **R** : réponses vérifiées avant utilisation. **T** : prototype dans les 6 mois. |

**Cohérence avec le contexte de l'organisation**

Ces objectifs restent volontairement modestes en ressources (un assistant, un outil d'automatisation simple), en cohérence avec un laboratoire aux moyens limités. Ils s'inscrivent dans la démarche plus large de mon organisme, qui déploie sa propre plateforme d'IA générative sécurisée à l'ensemble de ses collaborateurs.

---

## Reconfigurer un processus de travail avec l'IA (C2)

### Partie 1 — Cartographier le processus

| Étape | Processus actuel | Processus avec IA |
|---|---|---|
| Réception de la demande | L'utilisateur contacte le support de façon informelle (téléphone, couloir, e-mail libre) | L'utilisateur échange avec un assistant conversationnel dédié |
| Qualification | Le support pose les questions manquantes | L'assistant collecte les informations nécessaires de façon guidée |
| Transmission au support | Le support reformule et complète la demande | Le support reçoit directement un ticket structuré, transmis automatiquement |
| Capitalisation | Rédaction manuelle d'une procédure, souvent repoussée | L'IA propose une première version de procédure à partir du ticket résolu |

*[IMAGE 1 — schéma AS IS / TO BE déjà réalisé (Gamma), à insérer depuis ta présentation « Schématisation de 2 processus du projet MUSCADE »]*

Pour la mise en œuvre technique, deux solutions d'automatisation sans code ont été comparées (Make et un équivalent plus avancé mais plus technique, n8n) ; Make a été retenu pour ce POC en raison de sa simplicité de prise en main et de la rapidité de mise en œuvre, l'option plus technique restant une perspective d'évolution si les besoins d'industrialisation augmentent.

*[IMAGE 2 — capture d'écran du scénario Make (POC)]*

### Partie 2 — Nouvelle organisation proposée

| Étape | Avant | Après |
|---|---|---|
| Qualification | Manuelle, par le support | Assistée par l'IA, avec validation humaine |
| Rôle du support | Collecte d'informations puis résolution | Uniquement analyse et résolution d'un dossier déjà complet |
| Autonomie des utilisateurs | Faible, dépendante du support | Un point de contact disponible en continu |
| Mon rôle de cheffe de produit | Fortement sollicitée sur le support de premier niveau | Recentrée sur l'architecture, le développement et la formation |

**Ce que cela change concrètement.** Il ne s'agit pas seulement d'ajouter un outil : c'est le point d'entrée de la relation entre l'utilisateur et le support qui change. Le support n'est plus sollicité pour recueillir l'information, seulement pour l'expertise. Cette évolution ne crée pas de nouveaux postes, mais fait évoluer les responsabilités existantes, et se traduira à terme par une mise à jour formelle des fiches de rôle de l'équipe support.

### Partie 3 — Accessibilité, sécurité et sobriété

| Dimension | Mesures mises en place |
|---|---|
| Accessibilité | Documentation rédigée en langage clair et structuré (titres, listes courtes), compatible avec les lecteurs d'écran ; je m'appuie ici sur la méthode FALC (Facile À Lire et à Comprendre) déjà mise en pratique lors de ma certification RS6776, et sur ma propre expérience de personne concernée par un trouble cognitif |
| Sécurité des données | Anonymisation systématique avant transmission à une IA ; chaque outil n'a accès qu'aux informations strictement nécessaires à sa tâche |
| Sobriété numérique | L'IA n'est sollicitée qu'aux étapes où elle apporte un gain réel ; les demandes déjà traitées et validées sont réutilisées plutôt que régénérées |

---

## Élaborer des requêtes et configurer les outils IA (C3)

### Partie 1 — Conception des prompts

Le prompt de l'assistant a été conçu et affiné par itérations successives, en s'appuyant sur plusieurs bonnes pratiques :

- **Définition du rôle** : *« Tu es un assistant Support Niveau 1 spécialisé dans la supervision MUSCADE des installations scientifiques. Tu accompagnes les exploitants et développeurs dans la qualification d'un incident avant sa déclaration. »*
- **Clarté et précision** : consignes explicites sur les informations à collecter (système, date, symptômes, éléments de diagnostic) et sur la sortie attendue (ticket structuré, priorité justifiée).
- **Organisation logique de l'information** : les questions sont posées une par une, dans un ordre défini, plutôt que toutes en même temps.
- **Absence d'ambiguïté** : interdiction explicite pour l'assistant de conclure à une cause sans preuve suffisante, ou d'inventer une information manquante.
- **Tests et amélioration progressive** : chaque version du prompt a été comparée à la précédente selon un critère simple — produit-elle un ticket plus complet dès le premier échange, avec moins de questions de relance ?

*[IMAGE 3 — capture d'écran d'une conversation avec le Muscade Incident Assistant (qualification guidée d'un incident)]*

### Partie 2 — Paramétrage et accessibilité

| Choix | Justification |
|---|---|
| Assistant conversationnel dédié (Custom GPT) plutôt qu'un prompt réutilisé manuellement | Disponibilité continue, stabilité des consignes dans le temps, autonomie des utilisateurs sans dépendre d'un accès technique |
| Outil d'automatisation simple (Make, sans code) pour transmettre la demande au support | Rapidité de mise en œuvre, pas de compétence de développement nécessaire pour l'équipe |

**Fonctionnalité favorisant l'accessibilité** : le prompt demande explicitement une formulation simple et structurée, adaptée à un public non technique — une consigne vérifiée à chaque échange plutôt que laissée au hasard de la génération.

### Partie 3 — Tests, ajustements et conformité

Un exemple concret illustre cette démarche : le calibrage du niveau de questionnement de l'assistant a nécessité plusieurs itérations — trop peu de questions produisait un ticket incomplet, trop de questions décourageait l'utilisateur. Le bon équilibre a été trouvé par test successif, en observant la complétude du ticket obtenu à chaque version.

La démarche garantit :

- **L'efficacité opérationnelle** : chaque évolution est testée avant d'être conservée.
- **L'accessibilité** : formulation claire et structurée, vérifiée avant diffusion.
- **La conformité réglementaire** : anonymisation systématique des données transmises à une IA.
- **Les enjeux RSE et d'inclusion** : aucune décision automatisée n'impacte un collaborateur ; une mesure d'adaptation est prévue pour les personnes en situation de handicap.

---

## Créer ou améliorer des contenus professionnels avec l'IA (C4)

### Dépôt n°1 — Production réalisée avec l'IA

| | |
|---|---|
| **Titre du livrable** | Guide d'utilisation de l'assistant, destiné aux utilisateurs |
| **Objectif** | Expliquer simplement comment signaler un incident via l'assistant, pour des utilisateurs non familiers avec l'IA |
| **Outil utilisé** | ChatGPT (assistant personnalisé) |
| **Analyse du résultat** | Le contenu est directement utilisable, rédigé en langage clair ; il reste à l'enrichir d'exemples supplémentaires au fil des retours utilisateurs |

*[IMAGE 4 — capture d'écran du guide utilisateur (help-muscade.md)]*

### Dépôt n°2 — Production réalisée avec l'IA

| | |
|---|---|
| **Titre du livrable** | Support de présentation de l'organisation du support, pour les nouveaux collaborateurs |
| **Objectif** | Présenter le fonctionnement de l'équipe et le rôle de l'assistant lors de l'arrivée d'un nouveau collaborateur |
| **Outil utilisé** | Gamma (génération de présentations) |
| **Analyse du résultat** | Support rapide à produire et visuellement homogène ; une relecture humaine reste nécessaire avant diffusion |

*[IMAGE 5 — capture d'une diapositive clé de la présentation Gamma]*

### Intégration des enjeux RSE

- Les noms de personnes sont systématiquement remplacés par leur fonction avant toute génération de contenu.
- Aucune donnée sensible n'est transmise dans les contenus destinés à un usage public.

### Accessibilité des contenus

- Les deux contenus sont rédigés en langage clair, avec des phrases courtes et une structure simple (titres, listes) — un principe déjà appliqué dans ce rapport lui-même.
- Le support visuel (Gamma) utilise des contrastes et une taille de police lisibles par défaut, à vérifier formellement avant diffusion large.

---

## Amélioration continue (C5)

### Partie 1 — Dispositif d'évaluation

Le dispositif s'organise autour de trois familles d'indicateurs distinctes :

| Famille | Indicateur | Objectif | Méthode de mesure |
|---|---|---|---|
| 🎯 Performance | Temps moyen de qualification d'un incident | -30 % | Suivi mensuel GitLab |
| 🎯 Performance | Temps de rédaction des rapports | -40 à -50 % | Suivi mensuel |
| 🤝 Satisfaction | Taux de satisfaction des utilisateurs | > 80 % | Enquête avant/après déploiement |
| 🤝 Satisfaction | Autonomie perçue des utilisateurs | Amélioration | Enquête avant/après déploiement |
| 🛡️ RSE | Conformité à la charte (anonymisation avant transmission) | 100 % | Auto-contrôle mensuel |

*[DIAGRAMME 2 — voir prompt Gamma en fin de document]*

### Partie 2 — Comparatif avant / après (résultats prévisionnels)

| Processus analysé | Avant IA | Après IA (cible) | Écart attendu |
|---|---|---|---|
| Qualification d'un incident | Analyse manuelle, informations parfois incomplètes | Préqualification guidée par l'assistant | -30 % de temps |
| Rédaction du compte rendu | Rédaction manuelle | Rapport généré automatiquement puis relu | -40 à -50 % de temps |
| Recherche documentaire | Recherche dans plusieurs documents dispersés | Interrogation d'une base documentaire unique | -50 % de temps |
| Autonomie des utilisateurs | Dépendante des disponibilités du support | Accès à un assistant en continu | Amélioration |
| Charge de l'équipe support | Forte sollicitation sur les questions répétitives | Temps réalloué au développement et à la formation | Gain qualitatif |

*[DIAGRAMME 3 — voir prompt Gamma en fin de document]*

Ce comparatif reste prévisionnel : le dispositif est aujourd'hui au stade d'un test (POC fonctionnel : assistant + automatisation par e-mail), pas encore déployé à l'ensemble de l'équipe. Il conduit néanmoins à des ajustements déjà retenus : un déploiement progressif plutôt qu'immédiat, une validation humaine systématique pour toute situation critique, et une mise à jour continue du contenu de l'assistant à partir des retours obtenus.

### Partie 3 — Veille technologique

**Pourquoi cette veille est nécessaire.** Les outils d'IA évoluent rapidement ; une veille régulière permet d'ajuster nos pratiques plutôt que de rester sur une solution figée.

| Source | Type de veille | Fréquence |
|---|---|---|
| Brief automatisé sur l'actualité de l'IA | Veille technologique | Hebdomadaire |
| Test de nouveaux outils sur des cas réels du projet | Veille par expérimentation | Selon les nouveautés |
| Retours des utilisateurs et de l'équipe support | Veille par usage | Continue |

Chaque nouveauté jugée pertinente fait l'objet d'un petit test avant d'être éventuellement intégrée au dispositif — c'est ainsi qu'ont été introduits l'assistant dédié, l'automatisation Make, et l'usage de Gamma pour les présentations.

---

## Conclusion et perspectives

**Auto-évaluation des compétences RS7424**

Ce qui suit n'est pas une évaluation officielle : c'est un exercice d'auto-positionnement que j'ai voulu mener avant la remise du dossier, pour vérifier moi-même la cohérence entre ce que le référentiel demande et ce que ce rapport démontre réellement, compétence par compétence.

Pour limiter mon propre biais de jugement (il est difficile de s'auto-évaluer objectivement sur son propre travail), j'ai soumis le rapport à deux IA génératives distinctes (Claude et ChatGPT), avec pour seule consigne de noter chaque compétence à partir des preuves effectivement présentes dans le texte — pas de mes intentions ni de mon ressenti. Les deux estimations, obtenues indépendamment, convergent, ce qui rassure sur la cohérence du diagnostic, sans en faire une garantie de validité : seul le jury évalue réellement la certification.

Le tableau ci-dessous reprend ces estimations et, surtout, les points de vigilance qu'elles ont identifiés — c'est cette colonne qui m'intéresse le plus, car elle balise ce qu'il me reste à finaliser avant la remise du dossier.

| Compétence | Description (référentiel) | Niveau atteint | Preuves dans ce rapport | Point de vigilance restant |
| --- | --- | --- | --- | --- |
| **C1** | Élaborer une stratégie d'intégration responsable de l'IA | **Très fort** (~93-94 %) | Diagnostic AS IS (§4), charte IA (§5) ancrée dans la doctrine CEA/Maïa, sobriété numérique, AI Act cité (boucle de correction depuis RS6776, §1.4) | Validation officielle de la charte MUSCADE par la hiérarchie CEA, encore à obtenir |
| **C2** | Reconfigurer l'organisation des activités et processus avec l'IA | **Fort à très fort** (~90 %) | Cartographie TO BE (§6), nouveaux rôles, mesure handicap étayée par un vécu personnel (RQTH, TDAH, RS6776), sobriété numérique désormais reliée au workflow lui-même | Application concrète et déployée du FALC à l'ensemble de la documentation MUSCADE (au-delà du principe posé) |
| **C3** | Élaborer des requêtes et configurations opérationnelles | **Très fort** (~94-95 %) | Prompt principal documenté (§8), méthodologie itérative héritée de RS6776, critère de décision explicite entre versions de prompt, choix d'outils justifié (§7) | Aucune vérification formelle d'accessibilité (lecteur d'écran) réalisée sur le POC à ce stade |
| **C4** | Créer ou améliorer des contenus professionnels avec l'IA | **Fort à très fort** (~92 %) | Deux productions alignées à un objectif (§9), RSE explicité, accessibilité désormais démontrée par la mise en forme même du rapport (preuve, pas seulement intention) | Vérification formelle du contraste Gamma, à finaliser avant diffusion |
| **C5** | Inscrire ses pratiques dans une démarche d'amélioration continue | **Excellent** (~95-96 %) | Dispositif de suivi (§10) structuré en 3 familles d'indicateurs (performance, satisfaction, RSE), comparatif avec/sans IA, veille IA, boucle d'amélioration continue traçable RS6776 → RS7424 | Aucun — c'est la compétence la mieux couverte du dossier |

Estimation globale du niveau atteint : de l'ordre de 92 à 95 %** des attendus du référentiel. Les points de vigilance restants ne portent plus sur la compréhension des notions, mais sur des **finalisations opérationnelles ponctuelles** (déploiement effectif du FALC à l'ensemble des documents, vérifications formelles d'accessibilité, validation hiérarchique de la charte) et sur la cohérence des annexes citées tout au long du rapport (charte, cartographies, prompts, comparatif avec/sans IA, captures du POC) avec le contenu du dossier — un point de vigilance qu'il conviendra de vérifier une dernière fois avant remise, indépendamment du contenu rédactionnel lui-même.

**Bilan global.** Ce projet m'a permis de passer d'une réflexion générale sur l'apport de l'IA à un dispositif concret et testé, sur un vrai processus de mon équipe. Il illustre les cinq compétences du référentiel : diagnostic responsable, reconfiguration organisationnelle, configuration d'outils IA justifiée, production de contenus professionnels, et démarche d'amélioration continue — le tout au service d'un objectif managérial clair : sortir d'une organisation centrée sur une expertise unique.

**Prochaines étapes.**
- Déploiement progressif de l'assistant auprès de l'ensemble de l'équipe et des utilisateurs, avec mesure réelle des indicateurs (aujourd'hui prévisionnels).
- Connexion directe de l'assistant à la documentation du projet, pour qu'elle reste à jour automatiquement.
- Formation des collègues à l'utilisation et à l'évolution du dispositif, dans le cadre plus large d'un portail de documentation centralisé pour le projet.
- Approfondissement du processus de pilotage de l'activité (KPI), identifié mais non développé à ce stade faute de temps.

**Note sur les livrables.** Cette certification donne lieu à trois documents distincts : ce rapport (destiné au jury, selon le format attendu), un rapport complet et plus approfondi que je tiens à disposition du jury si une analyse plus détaillée est souhaitée, et une note interne adaptée à mon organisme, pour valoriser ce travail auprès de ma hiérarchie indépendamment de la certification.

---
## Annexe — Glossaire des sigles

Cette annexe vise à rendre ce rapport lisible par des collègues non familiers du vocabulaire de la certification ou de l'IA générative, dans un objectif de partage et de vulgarisation.

| Sigle | Signification | Explication en une phrase |
| --- | --- | --- |
| IA | Intelligence artificielle | Ensemble des technologies permettant à une machine d'exécuter des tâches associées à l'intelligence humaine. |
| IA générative | — | Famille d'IA capable de produire du texte, des images ou du code à partir d'une consigne (prompt). |
| LLM | Large Language Model (grand modèle de langage) | Modèle d'IA entraîné sur d'énormes volumes de texte, à la base des assistants comme ChatGPT ou Claude. |
| GPT | Generative Pre-trained Transformer | Architecture de modèle de langage ; ici, désigne aussi un assistant spécialisé configuré sur ChatGPT (ex. GPT MUSCADE). |
| RGPD | Règlement Général sur la Protection des Données | Réglementation européenne encadrant l'usage des données personnelles. |
| AI Act | Règlement européen sur l'intelligence artificielle | Cadre légal européen classant les usages de l'IA par niveau de risque. |
| FALC | Facile À Lire et à Comprendre | Méthode de rédaction simplifiée destinée à rendre un contenu accessible à tous les publics, y compris en situation de handicap cognitif. |
| RQTH | Reconnaissance de la Qualité de Travailleur Handicapé | Statut administratif ouvrant droit à des aménagements de poste ou d'examen. |
| TDAH | Trouble Déficitaire de l'Attention avec ou sans Hyperactivité | Trouble neurodéveloppemental affectant l'attention, l'impulsivité et l'organisation. |
| RSE | Responsabilité Sociétale des Entreprises | Prise en compte des enjeux sociaux, environnementaux et éthiques dans les pratiques professionnelles. |
| ROI | Return On Investment (retour sur investissement) | Mesure du bénéfice obtenu (temps, qualité, coût) rapporté à l'effort ou aux ressources investies. |
| POC | Proof Of Concept (preuve de concept) | Version d'essai limitée d'une solution, destinée à valider sa faisabilité avant un déploiement complet. |
| KPI | Key Performance Indicator (indicateur clé de performance) | Indicateur chiffré permettant de mesurer l'atteinte d'un objectif. |
| ITIL | Information Technology Infrastructure Library | Référentiel de bonnes pratiques pour la gestion des services informatiques (dont la gestion des incidents). |
| SCADA | Supervisory Control And Data Acquisition | Système de supervision et de contrôle d'installations industrielles ou scientifiques. |
| IHM | Interface Homme-Machine | Interface permettant à un utilisateur d'interagir avec un système ou une machine. |
| API | Application Programming Interface | Interface permettant à deux logiciels d'échanger des données ou des instructions de façon automatisée. |
| CEA | Commissariat à l'énergie atomique et aux énergies alternatives | Établissement public de recherche français, employeur de la candidate. |
| IRFU | Institut de recherche sur les lois fondamentales de l'Univers | Institut du CEA rattaché à la Direction de la Recherche Fondamentale (DRF), cadre du projet MUSCADE. |

## Visuels à insérer — table de correspondance

| # | Emplacement dans le rapport | Type | Source / Prompt Gamma |
|---|---|---|---|
| IMAGE 1 | C2, Partie 1 | Capture existante | Schéma AS IS / TO BE déjà réalisé (présentation Gamma « Schématisation de 2 processus du projet MUSCADE ») |
| IMAGE 2 | C2, Partie 1 | Capture existante | Capture du scénario Make (POC) |
| IMAGE 3 | C3, Partie 1 | Capture existante | Capture d'une conversation avec le Muscade Incident Assistant |
| IMAGE 4 | C4, Dépôt n°1 | Capture existante | Capture du guide utilisateur (help-muscade.md) |
| IMAGE 5 | C4, Dépôt n°2 | Capture existante | Capture d'une diapositive de la présentation Gamma existante |
| DIAGRAMME 1 | C1, Partie 1 | À générer (Gamma) | Voir prompt ci-dessous |
| DIAGRAMME 2 | C5, Partie 1 | À générer (Gamma) | Voir prompt ci-dessous |
| DIAGRAMME 3 | C5, Partie 2 | À générer (Gamma) | Voir prompt ci-dessous |

### Prompt Gamma — DIAGRAMME 1 : grille d'évaluation à 5 dimensions

```
Crée un visuel de synthèse (infographie) présentant 5 dimensions d'évaluation
d'un processus métier avant automatisation par l'IA. Pour CHAQUE dimension,
utilise UNIQUEMENT un niveau qualitatif (Fort / Moyen / Faible ou équivalent),
jamais de note chiffrée ni d'échelle numérique (pas de "score sur 3", pas de
graphique en barres avec un axe de valeurs) :

- Gain de temps : Fort
- Fiabilité : Élevée
- Fluidité : Moyenne
- Expérience collaborateur : Directe pour la capitalisation, indirecte pour
  le traitement des incidents
- Alignement organisationnel : Fort

Pour chaque dimension, affiche une icône représentative, le niveau écrit en
toutes lettres, ET une pastille de couleur (vert = fort/élevé, orange = moyen,
gris = faible) — la couleur ne doit jamais être le seul moyen de distinguer les
niveaux, le texte doit toujours être présent à côté.

IMPORTANT : n'invente aucune valeur numérique, pourcentage ou score qui
n'est pas fourni ci-dessus. Reste strictement qualitatif.

Titre du visuel : "Pourquoi automatiser le traitement des incidents MUSCADE ?"
Style sobre et professionnel, palette bleu et blanc, sans logo, format
paysage adapté à l'insertion dans un rapport Word.
```

### Prompt Gamma — DIAGRAMME 2 : tableau de bord des indicateurs de suivi

```
Crée un tableau de bord visuel synthétique avec 3 blocs côte à côte, un par
famille d'indicateur :
- 🎯 Performance : temps de qualification -30 %, temps de rédaction -40 à -50 %
- 🤝 Satisfaction : satisfaction utilisateurs > 80 %, autonomie en amélioration
- 🛡️ RSE : conformité à la charte d'anonymisation 100 %

Chaque bloc a une icône, un titre, et les indicateurs listés avec leur objectif
chiffré en gros caractères, façon carte de dashboard. Style moderne et épuré,
fond clair, une couleur distincte par bloc (bleu / vert / violet), format
paysage, sans texte superflu.
```

### Prompt Gamma — DIAGRAMME 3 : comparatif avant/après chiffré

```
Crée un graphique en barres horizontales comparant "avant IA" et "après IA",
UNIQUEMENT pour les 3 processus où un pourcentage chiffré existe réellement :

- Qualification d'un incident : -30 % de temps
- Rédaction du compte rendu : -40 à -50 % de temps
- Recherche documentaire : -50 % de temps

Utilise des barres plus courtes pour "après IA" afin d'illustrer visuellement
le gain de temps, avec le pourcentage exact affiché sur chaque barre (pas de
valeur inventée du type "70" ou "100" sans unité). Légende claire distinguant
les deux barres.

En dessous du graphique, ajoute une zone séparée (texte ou badges, PAS de
barres ni de valeur chiffrée) listant 2 bénéfices supplémentaires, présentés
explicitement comme qualitatifs et non mesurés :
- Autonomie des utilisateurs : amélioration qualitative (non quantifiée)
- Charge de l'équipe support : gain qualitatif (non quantifié)

IMPORTANT : n'attribue aucun pourcentage, score ou valeur numérique à ces
deux derniers points — ils doivent visuellement rester distincts du
graphique chiffré, pour ne pas laisser croire à une mesure qui n'existe pas.

Titre : "Impact attendu de l'IA sur le support MUSCADE (résultats prévisionnels)"
Mention en petit texte, bien visible : "Résultats prévisionnels — POC en cours
de généralisation".
Style sobre et professionnel, couleurs bleu et gris, format paysage.
```
