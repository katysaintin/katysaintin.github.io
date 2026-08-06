# Compréhension de l'architecture logicielle de CIVA
*Notes personnelles de préparation à l'entretien*

> Version : Brouillon
>
> Les éléments ci-dessous sont issus :
>
> - de l'offre d'emploi CEA LIST (Architecte Python et industrialisation IA)
> - de la documentation publique CIVA
> - des présentations disponibles sur Extende
> - de mes propres déductions d'architecte logiciel (indiquées comme telles)

---

# 1. Mission globale de CIVA

CIVA est une plateforme de simulation dédiée au Contrôle Non Destructif (CND).

L'objectif est de permettre aux industriels et chercheurs de :

- modéliser une pièce
- modéliser un capteur
- simuler différents phénomènes physiques
- prédire le résultat d'un contrôle
- analyser les résultats
- optimiser les paramètres avant les essais réels

Le logiciel couvre plusieurs domaines physiques :

- Ultrasons
- Ondes guidées
- Radiographie / Tomographie
- Courants de Foucault
- SHM (Structural Health Monitoring)
- Thermographie
- ...

Il s'agit d'une plateforme logicielle unique composée de plusieurs modules spécialisés.

---

# 2. Vision d'ensemble (déduction)

```
                          Utilisateur

                               │
                               ▼

                    +----------------------+
                    |      IHM CIVA        |
                    |      (Java ?)        |
                    +----------+-----------+

                               │

                    Gestion des projets
                    Paramétrage
                    Visualisation
                    Licences
                    Workflow

                               │

             +-----------------+-----------------+

             │                                   │

             ▼                                   ▼

     Modules physiques                  Modules Python

     Ultrasons                           CIVA Script
     Ondes guidées                       CIVA Data Science
     Tomographie
     SHM
     ...

             │                                   │

             └───────────────┬───────────────────┘

                             ▼

                  Moteur de calcul CIVA

                             │

                             ▼

                  Résultats / Données

                             │

              +--------------+--------------+

              │                             │

              ▼                             ▼

       Visualisation                 Traitements Python
        Java                         IA
                                     NumPy
                                     SciPy
                                     PyTorch
                                     Scikit-Learn
```

---

# 3. Ce qui semble être développé en Java

(d'après la documentation et les captures)

Le cœur de CIVA semble être en Java.

Probablement :

- IHM
- gestion des projets
- gestion des licences
- moteur principal
- architecture plugins
- visualisation
- persistance
- intégration des différents modules

Hypothèse :
Java représente la plateforme.

---

# 4. Ce qui semble être développé en Python

L'offre d'emploi apporte un élément très important.

Elle parle de :

- socle Python
- industrialisation Python
- intégration des algorithmes IA
- frameworks Python

Cela laisse penser que Python intervient pour :

## CIVA Script

Automatisation

- lancer des campagnes de simulation
- paramétrer automatiquement des simulations
- récupérer les résultats
- traitements batch

---

## CIVA Data Science

Exploitation des résultats

- Machine Learning

- IA

- traitement statistique

- notebooks

- post-traitement scientifique

---

## Recherche

Les chercheurs développent probablement :

- nouveaux algorithmes
- prototypes
- traitements innovants

Le poste consiste probablement à transformer ces prototypes en composants logiciels robustes.

---

# 5. Ce que pourrait être le rôle de l'Architecte Python

Je comprends aujourd'hui le poste comme suit :

Le cœur Java existe déjà.

Le problème concerne probablement :

- la multiplication des scripts Python
- les prototypes de recherche
- les développements des laboratoires

L'objectif serait de construire un véritable écosystème Python.

Exemple :

```
Avant

script_final.py

script_final2.py

script_ok.py

script_version_ok2.py
```

↓

```
Après

src/

tests/

docs/

examples/

pyproject.toml

CI/CD

Release

Documentation

Versionning
```

Autrement dit :

Industrialiser la recherche.

---

# 6. Compétences Python probablement attendues

## Packaging

- pyproject.toml

- uv

- poetry

- pip

---

## Qualité

- pytest

- coverage

- ruff

- mypy

---

## Documentation

- MkDocs

- Sphinx

---

## CI/CD

GitLab CI

GitHub Actions

Publication automatique

Versionning

---

## Architecture

- API

- modularité

- dépendances

- plugins

---

## Intégration IA

NumPy

SciPy

Scikit-learn

PyTorch

TensorFlow (?)

---

# 7. Questions pour le responsable technique

## Architecture

Aujourd'hui, où se situe la frontière entre le cœur Java de CIVA et l'écosystème Python ?

---

Les modules Python sont-ils intégrés comme des plugins, des API ou des processus externes ?

---

Les chercheurs développent-ils directement dans le dépôt principal de CIVA ?

Ou bien dans des dépôts séparés ?

---

Existe-t-il aujourd'hui plusieurs frameworks Python développés indépendamment par les laboratoires ?

---

Quel est aujourd'hui le principal défi d'architecture autour de Python ?

---

Le poste consiste-t-il davantage à développer en Python ou à structurer l'écosystème Python du département ?

---

Quels sont aujourd'hui les outils utilisés pour :

- les tests

- le packaging

- les releases

- la documentation

---

Le pipeline CI/CD est-il déjà en place ou fait-il partie des missions ?

---

Quels sont les indicateurs de qualité suivis aujourd'hui ?

- couverture

- dette technique

- duplication

- qualité

- temps de build

---

Comment sont intégrés aujourd'hui les modèles IA dans CIVA ?

---

# 8. La question que je préfère

> Si j'intègre l'équipe, quel serait selon vous le premier problème d'architecture que vous aimeriez me voir résoudre dans les six premiers mois ?

Cette question permet probablement de comprendre le véritable besoin du laboratoire.

---

# 9. Ce que je souhaite approfondir avant l'entretien

□ Architecture de CIVA

□ CIVA Script

□ CIVA Data Science

□ pyproject.toml

□ uv

□ pytest

□ ruff

□ mypy

□ Packaging Python

□ Publication automatique

□ Intégration Java ↔ Python

□ Comment CIVA charge les modules Python ?

□ Existe-t-il une API publique ?

□ Comment sont distribués les modules ?
