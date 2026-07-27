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

Pour la mise en œuvre technique, deux solutions d'automatisation sans code ont été comparées (Make et un équivalent plus avancé mais plus technique, n8n) ; Make a été retenu pour ce POC en raison de sa simplicité de prise en main et de la rapidité de mise en œuvre, l'option plus technique restant une perspective d'évolution si les besoins d'industrialisation augmentent.

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

### Dépôt n°2 — Production réalisée avec l'IA

| | |
|---|---|
| **Titre du livrable** | Support de présentation de l'organisation du support, pour les nouveaux collaborateurs |
| **Objectif** | Présenter le fonctionnement de l'équipe et le rôle de l'assistant lors de l'arrivée d'un nouveau collaborateur |
| **Outil utilisé** | Gamma (génération de présentations) |
| **Analyse du résultat** | Support rapide à produire et visuellement homogène ; une relecture humaine reste nécessaire avant diffusion |

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

### Partie 2 — Comparatif avant / après (résultats prévisionnels)

| Processus analysé | Avant IA | Après IA (cible) | Écart attendu |
|---|---|---|---|
| Qualification d'un incident | Analyse manuelle, informations parfois incomplètes | Préqualification guidée par l'assistant | -30 % de temps |
| Rédaction du compte rendu | Rédaction manuelle | Rapport généré automatiquement puis relu | -40 à -50 % de temps |
| Recherche documentaire | Recherche dans plusieurs documents dispersés | Interrogation d'une base documentaire unique | -50 % de temps |
| Autonomie des utilisateurs | Dépendante des disponibilités du support | Accès à un assistant en continu | Amélioration |
| Charge de l'équipe support | Forte sollicitation sur les questions répétitives | Temps réalloué au développement et à la formation | Gain qualitatif |

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

**Bilan global.** Ce projet m'a permis de passer d'une réflexion générale sur l'apport de l'IA à un dispositif concret et testé, sur un vrai processus de mon équipe. Il illustre les cinq compétences du référentiel : diagnostic responsable, reconfiguration organisationnelle, configuration d'outils IA justifiée, production de contenus professionnels, et démarche d'amélioration continue — le tout au service d'un objectif managérial clair : sortir d'une organisation centrée sur une expertise unique.

**Prochaines étapes.**
- Déploiement progressif de l'assistant auprès de l'ensemble de l'équipe et des utilisateurs, avec mesure réelle des indicateurs (aujourd'hui prévisionnels).
- Connexion directe de l'assistant à la documentation du projet, pour qu'elle reste à jour automatiquement.
- Formation des collègues à l'utilisation et à l'évolution du dispositif, dans le cadre plus large d'un portail de documentation centralisé pour le projet.
- Approfondissement du processus de pilotage de l'activité (KPI), identifié mais non développé à ce stade faute de temps.
