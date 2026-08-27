# Projet — Nouvelle page "Technical Skills"

## Objectif

Créer une nouvelle page `skills.html` intégrée au site existant.

L'objectif n'est PAS de faire une simple liste de technologies, mais de présenter une vision réaliste et contextualisée de mes compétences techniques :

> Technologies maîtrisées + niveau d'autonomie + profondeur d'expérience + preuves concrètes issues de ma carrière.

La page doit permettre à un recruteur de comprendre rapidement :
- ce que je sais utiliser ;
- mon niveau réel d'autonomie ;
- dans quels contextes j'ai utilisé ces technologies ;
- et surtout quelles réalisations concrètes démontrent ces compétences.

L'architecture actuelle du site est déjà solide :
- les pages HTML existantes servent de structure ;
- les contenus sont alimentés par JSON ;
- la page d'accueil, le menu et le CV utilisent déjà cette architecture.

=> Ne pas refondre l'architecture existante.
=> Ajouter uniquement `skills.html` et les données nécessaires dans le JSON existant.
=> Réutiliser au maximum les composants, styles, navigation et mécanismes existants.

---

# 1. Ajouter "Technical Skills" au menu

Ajouter une entrée :

**Technical Skills**

dans le menu burger existant.

Elle doit permettre d'accéder directement à :

`skills.html`

Cette page doit être facilement accessible à un recruteur qui cherche rapidement les compétences techniques.

---

# 2. Philosophie de la page

Ne pas présenter les compétences sous la forme classique :

Python ★★★☆☆
Java ★★★★★
C++ ★★★★☆
...

sans explication.

Le principe est :

> Le niveau représente la capacité réelle à utiliser une technologie dans un contexte professionnel, et pas simplement le nombre d'années depuis sa première utilisation.

Un senior peut avoir une expertise très forte en ingénierie logicielle tout en ayant un niveau moins élevé dans certaines technologies particulières.

La capacité importante à mettre en évidence est également :

**autonomie + polyvalence + capacité d'appropriation rapide + capacité à appliquer les bonnes pratiques d'ingénierie.**

---

# 3. Légende des niveaux

Créer une légende visuelle claire.

Proposition :

| Niveau | Signification |
|---|---|
| ★★★★★ | Expert — conception, architecture, leadership technique, transmission |
| ★★★★☆ | Advanced — utilisation autonome sur des projets complexes |
| ★★★☆☆ | Proficient — utilisation pratique et autonome |
| ★★☆☆☆ | Working knowledge — pratique ponctuelle / prototypage |
| ★☆☆☆☆ | Familiar — connaissances / formation |

Important :

Les étoiles sont une indication synthétique.
Elles ne doivent jamais être interprétées comme une certification officielle.

Ajouter une phrase explicative :

> **The rating reflects practical experience, autonomy and depth of use — not simply familiarity with a technology.**

Éventuellement :

> **A lower rating does not mean inability to use a technology. It indicates a more limited professional track record with that specific technology.**

---

# 4. Organiser les compétences par catégories

Ne pas mettre toutes les technologies dans une seule liste.

Créer plusieurs catégories.

## Languages

Exemple :

- Java ★★★★★
- C++ ★★★★★
- Python ★★★☆☆
- JavaScript ★★★☆☆
- HTML ★★★★☆
- CSS ★★★☆☆
- SQL ★★★☆☆
- Fortran ★★★☆☆

Les niveaux devront être validés avec les données réelles du CV.

---

## Frameworks & Technologies

Exemples :

- EPICS ★★★★★
- TANGO ★★★★★
- MUSCADE ★★★★★
- Phoebus ★★★★☆
- JavaFX ★★★★☆
- Eclipse RCP ★★★★☆
- PyTANGO ★★★☆☆
- PyEPICS ★★★☆☆

---

## Software Engineering

Cette catégorie est particulièrement importante car elle représente mieux le cœur de mon profil que les seuls langages.

Exemples :

- Software Architecture ★★★★★
- Object-Oriented Design ★★★★★
- Design Patterns ★★★★★
- GUI / HMI Architecture ★★★★★
- System Integration ★★★★★
- Code Review ★★★★★
- Technical Mentoring ★★★★★
- Reusable Components ★★★★★
- Maintainable Software Design ★★★★★

---

## Project & Technical Leadership

Exemples :

- Technical Leadership ★★★★★
- Technical Strategy ★★★★★
- Architecture Decisions ★★★★★
- Multi-team Coordination ★★★★★
- Knowledge Transfer ★★★★★
- Technical Mentoring ★★★★★
- Federation of multidisciplinary teams ★★★★★

Cette catégorie est essentielle.

Le site ne doit pas donner l'impression que mon profil se résume à :

> "Java developer"

Mon positionnement est davantage :

> **Senior Software Engineer / Technical Leader / Systems Engineer**

avec une très forte capacité à passer d'une technologie à une autre et à fédérer des personnes autour d'une architecture et de bonnes pratiques.

---

# 5. Chaque compétence doit pouvoir être détaillée

Le niveau visuel ne doit être que le résumé.

Idéalement, chaque compétence est présentée sous forme de carte cliquable ou expandable.

Exemple :

┌─────────────────────────────────┐
│ Python                    ★★★☆☆ │
│                                 │
│ Scientific software ·           │
│ Prototyping · Control systems   │
│                                 │
│       View experience →         │
└─────────────────────────────────┘

Au clic, afficher les éléments de preuve.

---

# 6. Exemple détaillé : Python

Python doit être présenté de manière honnête mais sans le sous-évaluer.

Niveau proposé :

**Python ★★★☆☆**

Description :

> Practical experience in scientific software, prototyping and technical mentoring.

Evidence :

- PyTANGO
- PyEPICS
- Tkinter
- Scientific software prototyping
- Code review
- Technical mentoring
- Review of apprentice development work

Context :

- Scientific software
- Control systems
- HMI
- EPICS / TANGO ecosystem

Important :

Ne pas présenter Python comme une expertise de 20 ans.
Mais ne pas non plus le présenter comme une simple connaissance théorique.

Le niveau doit refléter une capacité pratique et autonome dans un contexte d'ingénierie logicielle.

---

# 7. Exemple : Java

Java doit au contraire refléter l'expertise historique.

Exemple :

**Java ★★★★★**

Evidence :

- Long-term professional development
- Object-oriented design
- Rich client applications
- Software architecture
- Scientific software
- Technical leadership
- Reusable components
- Complex GUI/HMI systems
- Code review / mentoring

La profondeur de l'expérience doit être visible.

---

# 8. Exemple : EPICS / TANGO

Ces technologies peuvent avoir un niveau très élevé car elles correspondent à une partie importante de l'expérience professionnelle.

Exemple :

**EPICS ★★★★★**

Evidence possibles :

- MUSCADE
- Phoebus
- EPICS integrations
- PlcParserTool
- International EPICS collaboration
- Technical presentations
- Open-source contribution

Même principe pour TANGO.

---

# 9. Mettre en avant les "preuves"

Le point essentiel de la page est :

**Skill → Level → Context → Evidence**

Exemple :

```text
Python ★★★☆☆

Practical experience

Technologies:
PyTANGO · PyEPICS · Tkinter

Context:
Scientific control systems

Evidence:
• Scientific software prototyping
• Code review
• Apprentice mentoring