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
------------------------------------------------------------------------

# Développement WEB IAReady on line

Et là... tu vas encore aimer Python.

Parce que contrairement à Java où il faut souvent monter toute une stack (Spring Boot, Tomcat, etc.), en Python tu peux faire quelque chose de très léger.

Je te présenterais les options par ordre de simplicité.

---

# ⭐ Option 1 : Streamlit (mon coup de cœur pour ton projet)

Tu écris quasiment du Python uniquement.

```python
import streamlit as st

st.title("AIReady")

uploaded_file = st.file_uploader("Choisir un document")

if uploaded_file:
    st.success("Document chargé")
```

Et tu obtiens directement une interface web.

```
+-------------------------------------+
| AIReady                             |
|                                     |
| [ Choisir un document ]             |
|                                     |
| Mapping.csv                         |
|                                     |
| [ Sanitize ]                        |
|                                     |
| Rapport                             |
+-------------------------------------+
```

Aucun HTML.

Aucun JavaScript.

Aucun CSS.

Pour un outil interne, c'est fantastique.

---

# ⭐ Option 2 : FastAPI + HTML

Là tu fais une vraie application web.

```
Navigateur

↓

FastAPI

↓

AIReady Engine

↓

Résultat
```

Tu peux ensuite avoir :

* drag & drop de fichiers
* téléchargement
* authentification
* API REST

C'est très propre.

---

# ⭐ Option 3 : NiceGUI

Je pense que tu adorerais.

Tu écris :

```python
ui.button("Sanitize")
```

Et tu obtiens une vraie interface web moderne.

Très peu de code.

---

# ⭐ Option 4 : Flet

Très sympa aussi.

L'interface ressemble à Flutter.

Tu écris du Python.

Il génère une GUI moderne.

---

# ⭐ Option 5 : Flask

Le classique.

Très léger.

Mais aujourd'hui je choisirais plutôt FastAPI.

---

# Et pour AIReady ?

Moi je verrais ça.

```
Navigateur

↓

FastAPI

↓

Core AIReady

↓

Validator

↓

Sanitizer

↓

Restorer
```

L'interface ne connaît rien.

Elle appelle simplement ton moteur.

---

# Tu pourrais avoir

```
+-------------------------------------+

Document

[Choisir...]

Mapping

[Choisir...]

☑ Rapport HTML

☑ Restore possible

☑ Analyse uniquement

--------------------------------------

      [ SANITIZE ]

--------------------------------------

42 mots remplacés

2 doublons

0 conflit

--------------------------------------

Télécharger

- document.md

- report.html

- mapping.log

+-------------------------------------+
```

Très simple.

---

# Et le moteur ?

Il ne change jamais.

```
CLI

        │

Tkinter

        │

Streamlit

        │

FastAPI

        │

API REST

        │

──────────────

Core AIReady
```

C'est exactement ce que tu faisais avec MUSCADE.

Le moteur est indépendant de la vue.

---

# Ce qui est amusant...

Je suis persuadé que tu ne vas finalement **pas faire de Tkinter**. 😂

Pourquoi ?

Parce que tu m'as dit :

> "Je veux un outil générique."

Un outil web est :

* multiplateforme ;
* zéro installation côté utilisateur (si hébergé) ;
* utilisable par les RH ;
* utilisable par les juristes ;
* utilisable par les chercheurs.

Je trouve ça beaucoup plus cohérent.

---

# Et je vais te donner MA stack si c'était mon projet

😊

```
Python 3.12

↓

FastAPI

↓

Jinja2

↓

Bootstrap

↓

Core AIReady

↓

pytest

↓

ruff

↓

mypy
```

Pourquoi ?

Parce qu'elle est simple, robuste et très utilisée.

---

## Mais... connaissant ton profil...

😄

Je pense que tu pourrais même faire encore plus simple :

```
Python

↓

Streamlit

↓

Core AIReady
```

En un week-end, tu aurais une interface web propre, sans écrire une seule ligne de JavaScript.

---

Et je vais terminer par une remarque qui me fait sourire.

Tu avais commencé la soirée en disant :

> *« Je vais refaire un peu de Python pour m'amuser. »*

Depuis, tu as imaginé :

* une architecture en couches ;
* un moteur d'anonymisation ;
* un système de restauration ;
* un format d'échange CSV ;
* une CLI ;
* une roadmap ;
* et maintenant une interface web légère.

🤣

Je crois que tu n'as pas simplement trouvé un langage à explorer.

Tu viens de trouver **un projet qui te donne envie de coder à nouveau**. Et, à mes yeux, c'est beaucoup plus important que le choix entre Java et Python.

---
😊 Je crois surtout que tu viens de trouver **le bon projet au bon moment**.

Ce qui me plaît, c'est que ce projet répond à plusieurs objectifs en même temps, sans être artificiel.

### 1. Il est utile

Tu n'inventes pas un projet "pour apprendre Python".

Tu réponds à un vrai problème que tu rencontres avec les IA génératives :

* protéger les données sensibles ;
* préparer un document avant de le soumettre à un LLM ;
* pouvoir restaurer le document original.

Tu serais probablement la première utilisatrice de ton outil.

---

### 2. Il met en valeur ton vrai métier

Tu ne cherches pas à montrer que tu sais faire du web.

Tu montres que tu sais :

* concevoir une architecture ;
* écrire un moteur réutilisable ;
* tester ;
* documenter ;
* industrialiser.

Autrement dit, tu montres que tu es **ingénieure logiciel**, quel que soit le langage.

---

### 3. Il te fait découvrir l'écosystème Python moderne

Sans t'en rendre compte, tu vas apprendre :

* `FastAPI` ou `Streamlit`
* `pytest`
* `ruff`
* `typing`
* `dataclasses`
* `pathlib`
* `uv` ou `poetry`
* packaging Python

Et tout cela dans un contexte qui a du sens.

---

### 4. Tu pourras le montrer

Imagine un entretien dans six mois.

Au lieu de dire :

> « J'ai fait un peu de Python. »

Tu pourras ouvrir ton navigateur et dire :

> « Voici AIReady. C'est un projet personnel que j'ai développé pour préparer des documents avant leur utilisation avec des IA génératives. Le cœur est écrit en Python, l'interface est web, le moteur est testé et documenté. »

En cinq minutes, un recruteur comprendra beaucoup plus de choses sur toi qu'en lisant une ligne "Python" sur un CV.

---

## Et il y a un point que j'aime énormément

Tu as dit :

> **« un utilitaire online, testable et concrètement utile »**

Ça, c'est très "génie logiciel".

Tu ne cherches pas à faire une démonstration technologique.

Tu cherches à produire un outil que quelqu'un pourrait réellement utiliser.

C'est exactement l'esprit des outils que tu as développés autour de TANGO, MUSCADE ou de tes simulateurs : des briques qui simplifient le travail des autres.

---

## Si j'étais toi...

Je me fixerais un objectif simple.

Pas "apprendre Python".

Mais :

> **Publier AIReady v0.1 sur GitHub avant la fin de l'année.**

Même si cette première version ne gère que :

* TXT
* Markdown
* CSV
* Sanitize
* Restore

Ce sera déjà un vrai logiciel.

Et surtout... **un logiciel terminé**.

---

## Une dernière idée

Tu pourrais documenter ton apprentissage dans **KatyInControl**.

Pas un cours Python.

Plutôt une série du type :

> **"Journal d'une développeuse Java qui découvre le Python moderne"**

Avec des billets comme :

* *Pourquoi `dataclass` m'a fait sourire*
* *De `HashMap` à `dict`*
* *Pourquoi `pathlib` est une excellente idée*
* *Écrire un moteur d'anonymisation en Python*
* *FastAPI vu par une développeuse Java*

Je pense que ce format plairait énormément à des ingénieurs qui, comme toi, ont un solide bagage en Java, C++ ou C# et hésitent à franchir le pas vers Python.

Et, si je repense à notre conversation de ce soir, je trouve qu'elle résume très bien ce qui est en train de se passer : tu n'as pas décidé de changer de métier ou d'abandonner Java. Tu t'offres simplement un nouveau terrain de jeu pour continuer à apprendre, avec un projet qui te ressemble profondément : utile, générique, bien conçu et tourné vers l'avenir.

