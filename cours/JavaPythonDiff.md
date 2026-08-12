# Java → Python — Mémo des différences

## 1. Différences fondamentales

Java et Python sont tous deux des langages généralistes, orientés objet et largement utilisés pour le développement logiciel, mais leur modèle d'exécution et leur philosophie diffèrent sensiblement.

### Java

Java est un langage **statiquement et fortement typé**. Le code source Java est compilé en bytecode, puis exécuté par la **JVM (Java Virtual Machine)**.

```text
Code source Java
       ↓
   Compilateur
       ↓
     Bytecode
       ↓
      JVM
       ↓
  Exécution
```

Le typage est principalement vérifié à la compilation :

```java
String name = "Katy";
int age = 42;
```

Le compilateur détecte de nombreuses erreurs avant l'exécution.

### Python

Python est un langage **dynamiquement typé**. Le code est généralement exécuté par un interpréteur/runtime Python, sans étape de compilation explicite comparable au modèle Java.

```text
Code source Python
       ↓
 Python runtime
       ↓
  Exécution
```

Les types sont associés aux objets et non imposés aux variables :

```python
name = "Katy"
age = 42

name = 42       # légal en Python
```

Python permet néanmoins d'utiliser des **type hints** :

```python
name: str = "Katy"
age: int = 42
```

Ces annotations améliorent la lisibilité et peuvent être exploitées par les IDE et des outils de vérification statique comme les type checkers.

> **Point important :** « interprété » ne signifie pas que Python n'effectue aucune compilation interne. Les implémentations Python peuvent notamment produire du bytecode. La différence porte surtout sur le modèle d'exécution et sur le fait que le typage n'est pas vérifié de la même manière qu'en Java.

---

# 2. Écosystème — repères Java → Python

L'objectif de ce tableau est de retrouver les équivalents fonctionnels dans l'écosystème Python, sans supposer qu'ils sont techniquement identiques.

| Domaine / besoin | Java | Python | Commentaire / warning |
|---|---|---|---|
| IDE | Eclipse, IntelliJ IDEA | VS Code, PyCharm, autres | VS Code peut fournir un environnement Python très complet avec extensions et outils adaptés. |
| Build / gestion de projet | Maven, Gradle | `pyproject.toml`, outils comme `uv`, Poetry, etc. | Pas d'équivalent unique dominant correspondant exactement à Maven. |
| Gestion des dépendances | Maven / Gradle | `uv`, Poetry, pip, etc. | Le choix de l'outil fait partie de l'écosystème Python. |
| Tests unitaires | JUnit | pytest, unittest | `pytest` est très utilisé dans les projets Python modernes. |
| Mock / tests | Mockito, JUnit | `unittest.mock`, pytest + plugins | Philosophie et API différentes. |
| Qualité / analyse statique | SonarQube, Checkstyle, SpotBugs | Ruff, mypy, Pyright, SonarQube, etc. | Les outils Python peuvent combiner linting, formatage et analyse statique. |
| Formatage | Google Java Format, Spotless, etc. | Black, Ruff | Le formatage automatique est très courant. |
| Logging | SLF4J / Logback / Log4j | `logging` | Module standard Python. |
| Documentation API | Javadoc | Sphinx, MkDocs, pdoc, etc. | Plusieurs approches possibles. |
| Packaging / artefact | JAR, WAR, Maven repository | wheel (`.whl`), sdist, package Python | Les artefacts et conventions de distribution sont différents. |
| Repository de packages | Maven Central | PyPI | PyPI est le dépôt public principal de packages Python. |
| CI/CD | Jenkins, GitLab CI, GitHub Actions, Maven/Gradle | GitLab CI, GitHub Actions, Jenkins, etc. | Les outils CI restent largement indépendants du langage. |
| Librairies graphiques / plotting | JFreeChart, JavaFX Charts | Matplotlib, Plotly, etc. | Matplotlib est particulièrement répandu dans l'écosystème scientifique. |
| Plotting externe | GnuPlot | Matplotlib, Seaborn, Plotly, Gnuplot via wrappers/outils externes | Python dispose d'un écosystème scientifique graphique très riche. |
| GUI | Swing, JavaFX, SWT | Tkinter, PySide/PyQt, wxPython, etc. | Tkinter fait partie de la distribution Python standard dans de nombreuses installations. |
| HTTP / REST client | Java HTTP Client, Apache HttpClient, OkHttp | `requests`, `httpx` | `requests` est très répandu ; `httpx` apporte notamment le support async. |
| Serveur / API REST | Spring Boot, Jakarta REST | FastAPI, Flask, Django, etc. | Aucun équivalent unique à Spring dans Python. |
| JSON | Jackson, Gson | `json` | Module standard Python pour JSON. |
| Data science | bibliothèques Java diverses | NumPy, Pandas, SciPy | L'écosystème Python est particulièrement riche dans ce domaine. |
| Machine Learning | Weka, DL4J, bibliothèques diverses | scikit-learn, PyTorch, TensorFlow, etc. | Python est devenu un langage majeur de l'écosystème ML/IA. |
| Environnement isolé | Maven/Gradle + JVM / modules selon contexte | `venv`, `uv`, Poetry, etc. | L'environnement virtuel Python isole notamment les dépendances du projet. |
| Gestion de configuration | propriétés, YAML, Spring Config, etc. | `.env`, YAML, TOML, JSON, Pydantic Settings, etc. | Plusieurs approches selon le projet. |
| Concurrence | `Thread`, `ExecutorService`, CompletableFuture, etc. | `threading`, `multiprocessing`, `asyncio`, concurrent.futures | Modèle très différent ; sujet à approfondir. |

---

# 3. Différences de langage observées

| Notion / concept | Java | Python | Commentaire / warning |
|---|---|---|---|
| Affichage console | `System.out.println(value);` | `print(value)` | Syntaxe beaucoup plus légère. |
| Fin d'instruction | `statement;` | `statement` | Pas de `;` obligatoire. |
| Booléens | `boolean` avec `true` / `false` | `bool` avec `True` / `False` | Python utilise des valeurs booléennes avec majuscule. |
| Booléen → entier | `active ? 1 : 0` | `int(active)` | `True → 1`, `False → 0`. Pratique pour les interfaces PLC/protocoles. |
| Opérateur logique NOT | `!active` | `not active` | Python utilise `not` plutôt que `!`. |
| Opérateurs logiques AND / OR | `&&`, `||` | `and`, `or` | Python utilise des mots-clés. |
| Typage des variables | `String name = "Katy";` | `name: str = "Katy"` | L'annotation Python est optionnelle et n'impose pas le typage à l'exécution. |
| Réaffectation d'un autre type | `name = 42` → erreur de compilation | `name = 42` → autorisé | Python est dynamiquement typé. |
| Variable / valeur | `name` désigne la variable ; `"name"` est une chaîne | Même distinction | `print(name)` affiche la valeur ; `print("name")` affiche le texte `name`. |

---

## 4. À compléter au fil de l'apprentissage

Cette section sert de journal des différences découvertes au fur et à mesure de la pratique.

| Concept | Java | Python | À retenir |
|---|---|---|---|
| Trace d’exécution en cas d’erreur | **Stack Trace** | **Traceback** | Décrit la chaîne d’appels ayant conduit à l’erreur et indique notamment le fichier, la ligne et le type d’exception. |
| Chaîne formatée F-String | Natif toString() | `f"{2} new messages"` | Préfixer la chaîne par `f` et placer les valeurs numériques ou expressions entre `{}`. En Java, la concaténation permet plus simplement `message = 2 + " new message";` puis `System.out.println(message);`. |
| Afficher le type / la classe d'une variable | `variable.getClass().getName()` | `type(variable)` | Python est beaucoup plus direct. `type(variable)` retourne l'objet `type` représentant le type réel de la valeur. |
