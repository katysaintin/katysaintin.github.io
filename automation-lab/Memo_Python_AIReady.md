# Mémo Python -- AIReady 🚀

## Objectif personnel

Découvrir **Python moderne** en réalisant un vrai projet de génie
logiciel.

> Je n'apprends pas Python pour apprendre un langage. J'apprends Python
> pour construire une brique logicielle utile autour de l'IA.

------------------------------------------------------------------------

# Vision du projet

**AIReady**

Préparer automatiquement un document avant son utilisation avec une IA
générative.

Objectifs :

-   anonymisation réversible
-   protection des données sensibles
-   conformité RGPD
-   IA responsable
-   outil générique
-   open source

------------------------------------------------------------------------

# Pipeline

``` text
Document
    │
    ▼
Validation
    │
    ▼
Anonymisation
    │
    ▼
Document AI Ready
    │
    ▼
LLM
    │
    ▼
Restauration
```

------------------------------------------------------------------------

# Mapping CSV

``` csv
keyword,replace

Katy Saintin,CANDIDATE
CEA,COMPANY
MUSCADE,PROJECT
192.168.0.1,IP_SERVER
```

Le moteur remplace :

    Katy Saintin

par

    [[CANDIDATE]]

Puis peut restaurer le document original.

------------------------------------------------------------------------

# Architecture

``` text
Reader
    │
Validator
    │
Sanitizer
    │
Reporter
    │
Restorer
```

Formats (progressivement) :

-   TXT
-   Markdown
-   DOCX
-   PDF

------------------------------------------------------------------------

# Fonctionnalités V1

-   Lecture CSV
-   Validation
-   Détection des doublons
-   Détection des conflits
-   Comptage des occurrences
-   Tri des mots-clés (plus long -\> plus court)
-   Sanitize
-   Restore
-   Tests

------------------------------------------------------------------------

# Évolutions

-   Regex (email, IP, IBAN...)
-   Rapport HTML
-   GUI Tkinter
-   CLI
-   Plugins

------------------------------------------------------------------------

# Python moderne à découvrir

## IDE

-   VS Code
-   PyCharm

## Extensions

-   Python
-   Pylance
-   Ruff
-   Black
-   pytest

------------------------------------------------------------------------

# Équivalents Eclipse

  Eclipse        Python
  -------------- ------------------
  Ctrl+Space     IntelliSense
  Ctrl+Shift+O   Organize Imports
  Ctrl+Shift+F   Black
  Warnings       Ruff + Pylance
  Rename         Oui
  Debug          Oui
  Tests          pytest

------------------------------------------------------------------------

# Concepts Python

-   dataclass
-   typing
-   pathlib
-   csv
-   re
-   logging
-   Enum
-   ABC
-   Protocol
-   context managers

------------------------------------------------------------------------

# Dataclass

``` python
from dataclasses import dataclass

@dataclass
class Rule:
    keyword: str
    replacement: str
```

------------------------------------------------------------------------

# Structure envisagée

``` text
aiready/

    core/

    readers/

    validator/

    sanitizer/

    reporter/

    restorer/

    ui/

    tests/

    pyproject.toml

    README.md
```

------------------------------------------------------------------------

# Roadmap

## V0.1

-   CSV
-   TXT
-   Markdown
-   Sanitize
-   Restore
-   Tests

➡️ STOP.

## V0.2

-   DOCX

## V0.3

-   PDF

## V0.4

-   Rapport HTML

## V0.5

-   Tkinter

------------------------------------------------------------------------

# Règles personnelles 😊

✅ Faire simple.

✅ Une version qui fonctionne vaut mieux qu'une usine à gaz.

✅ 500 lignes maximum pour la V0.1.

✅ README avant le code.

✅ ROADMAP au lieu de TODO.

✅ Avancer à mon rythme.

------------------------------------------------------------------------

# Pourquoi ce projet ?

Il illustre :

-   Génie logiciel
-   Architecture
-   Python moderne
-   IA responsable
-   RGPD
-   Automatisation
-   Réutilisabilité

Il prolonge naturellement mes certifications :

-   RS6776
-   RS7424

------------------------------------------------------------------------

# Une phrase à retenir

> Je ne développe pas un logiciel métier.
>
> Je construis une brique générique permettant de rendre des documents
> **AI Ready** de manière responsable.

------------------------------------------------------------------------

# Et surtout...

Prendre du plaisir à coder.

Pas de pression.

Pas de deadline.

Simplement retrouver le plaisir de construire un bel outil.
