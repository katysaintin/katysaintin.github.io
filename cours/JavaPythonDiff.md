# Java → Python — Mémo des différences

## 0. Introduction
🏸 Python
Prise en main rapide
→ on s'amuse rapidement
→ beaucoup de liberté
→ les contraintes arrivent progressivement

🎾 Java
Plus de technique dès le départ
→ typage
→ compilation
→ POO
→ interfaces
→ exceptions
→ JVM
→ cadre plus contraignant

🏓 C++
On entre directement dans le technique
→ compilation
→ typage fort
→ pointeurs
→ références
→ mémoire
→ POO
→ templates
→ etc.

🏸 Python → badminton
Prise en main rapide, ludique, peu de contraintes au départ.

🎾 Java → tennis
Plus de technique et de règles à intégrer avant d'être à l'aise.

🏓 C++ → ping-pong
Très technique, précis, exigeant dès les premières balles.

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
## Performance : Python vs Java

> **Python n'est pas intrinsèquement plus rapide que Java pour les calculs ou les boucles sur des listes. Pour du code Python pur, c'est généralement Java qui est nettement plus rapide.**

Dans un benchmark de boucle numérique de **10 millions d'itérations**, une étude mesurait environ **5 s avec CPython**, alors que Java se situait dans un ordre de grandeur nettement inférieur. Une autre mesure comparable rapportait environ **0,42 s en Python contre 0,012 s en Java**, soit environ **35 fois plus rapide pour Java** sur ce type de calcul. Ces chiffres sont indicatifs : ils dépendent fortement du matériel, des versions et surtout du code mesuré. [oai_citation:0‡Libstore](https://libstore.ugent.be/fulltxt/RUG01/002/945/718/RUG01-002945718_2021_0001_AC.pdf?utm_source=chatgpt.com)

### Pourquoi Java est-il plus rapide ?

Dans un code Java classique :

~~~java
for (int i = 0; i < 10_000_000; i++) {
    total += i;
}
~~~

le code est compilé en bytecode puis la **JVM HotSpot** identifie les parties exécutées fréquemment et les compile dynamiquement en code machine optimisé grâce au **JIT (Just-In-Time compiler)**.

Elle peut notamment optimiser les boucles, les types et l'utilisation des registres CPU.

Avec CPython, une boucle comme :

~~~python
for i in range(10_000_000):
    total += i
~~~

passe par la machine virtuelle de CPython et son interprétation/exécution des instructions Python. Chaque opération doit gérer le modèle dynamique de Python, notamment les objets et les types à l'exécution. CPython ne transforme pas spontanément cette boucle Python en une boucle machine équivalente à celle optimisée par le JIT de la JVM.

### Et les listes ?

Pour les opérations structurelles courantes, les deux sont comparables en complexité :

| Opération | Python `list` | Java `ArrayList` |
|---|---|---|
| Accès par index | O(1) | O(1) |
| Ajout en fin | O(1) amorti | O(1) amorti |
| Parcours | O(n) | O(n) |
| Recherche linéaire | O(n) | O(n) |

La différence ne vient donc pas principalement de la complexité algorithmique de la liste, mais du **coût d'exécution de chaque opération**.

### Le paradoxe Python scientifique

Python peut néanmoins être extrêmement performant pour les calculs scientifiques.

~~~python
result = numpy_array * 2
~~~

Ici, Python ne réalise pas nécessairement une opération Python pour chaque élément. Le travail est délégué à du code natif optimisé, généralement écrit en C/C++ ou Fortran.

C'est donc une distinction fondamentale :

> **Python pur peut être beaucoup plus lent que Java pour du calcul CPU intensif.  
> Python + bibliothèques natives optimisées peut exploiter des performances très élevées.**

C'est notamment une des raisons du succès de l'écosystème scientifique Python : **Python sert souvent de couche d'orchestration, tandis que le calcul intensif est exécuté par du code compilé.**

### À retenir

> **Python gagne souvent en concision et en productivité.  
> Java gagne généralement en performance pour du code CPU exécuté directement dans le langage.  
> L'écosystème Python permet cependant de déléguer les calculs lourds à du code natif très performant.**

**Donc : non, Python n'est pas « plus rapide que Java parce qu'il manipule mieux les listes ». Pour des boucles Python pures, c'est plutôt l'inverse, parfois avec un facteur de plusieurs dizaines.**
---
## Manipulation des listes

### Accéder à un élément

| Opération | Python | Java |
|---|---|---|
| Accéder à l'élément à l'index donné | `list[index]` | `list.get(index)` |

### Ajouter des éléments

| Opération | Python | Java |
|---|---|---|
| Ajouter à la fin | `list.append(value)` | `list.add(value)` |
| Ajouter à un index donné | `list.insert(index, value)` | `list.add(index, value)` |

### Supprimer un élément

| Opération | Python | Java |
|---|---|---|
| Supprimer et retourner le dernier élément | `list.pop()` | `list.remove(list.size() - 1)` |
| Supprimer et retourner l'élément à un index | `list.pop(index)` | `list.remove(index)` |

> **Attention :** en Java, `List.remove(index)` retourne bien l'élément supprimé (`E`), contrairement à `List.remove(Object)` qui retourne un `boolean` indiquant si l'élément a été supprimé.

### Informations sur la liste

| Opération | Python | Java |
|---|---|---|
| Nombre d'éléments | `len(list)` | `list.size()` |
| Tester si la liste est vide | `len(list) == 0` ou `not list` | `list.isEmpty()` |
| Chercher l'index d'une valeur | `list.index(value)` | `list.indexOf(value)` |
| Vider la liste | `list.clear()` | `list.clear()` |

### Attention à `poll()`

`poll()` n'est **pas une méthode de `List` en Java**.

Elle appartient aux interfaces `Queue` / `Deque`.

Par exemple :

~~~java
Queue<String> queue = new LinkedList<>();

String value = queue.poll();
~~~

`poll()` retire et retourne l'élément en tête de la queue, ou retourne `null` si la queue est vide.

Avec une `Deque`, on trouve notamment :

~~~java
deque.pollFirst();
deque.pollLast();
~~~

Pour une `List`, pour supprimer le dernier élément :

~~~java
list.remove(list.size() - 1);
~~~

### Ajouter / supprimer aux extrémités

En Python :

~~~python
list.append(value)       # ajout à la fin
list.pop()               # suppression du dernier élément
~~~

Avec une `Deque` Python (`collections.deque`) :

~~~python
deque.appendleft(value)  # ajout au début
deque.append(value)      # ajout à la fin
deque.popleft()          # suppression du premier
deque.pop()              # suppression du dernier
~~~

En Java, une `Deque` fournit notamment :

~~~java
deque.addFirst(value);
deque.addLast(value);

deque.pollFirst();
deque.pollLast();
~~~

> **La `List` Python est plus proche conceptuellement de `ArrayList` en Java.**
>
> Les opérations `pollFirst()`, `pollLast()`, `addFirst()` et `addLast()` concernent plutôt les structures `Deque` / `Queue` en Java.
---
# Fonctions courantes de manipulation et d'analyse des collections

Cette comparaison illustre une différence intéressante entre Python et Java : les deux langages proposent les mêmes grandes fonctionnalités, mais Python les rend souvent accessibles avec une syntaxe beaucoup plus directe.

---

## 1. Minimum et maximum

### Python

Aucun import n'est nécessaire :

~~~python
values = [10, 3, 25, 7]

min(values)   # 3
max(values)   # 25
~~~

`min()` et `max()` sont des **fonctions built-in** de Python.

Elles parcourent la collection pour rechercher la valeur minimale ou maximale.

### Java

Java fournit notamment :

~~~java
Collections.min(values);
Collections.max(values);
~~~

Il n'est donc pas nécessaire de trier la collection pour rechercher le minimum ou le maximum.

### À éviter

~~~java
Collections.sort(values);

int min = values.get(0);
int max = values.get(values.size() - 1);
~~~

Cette solution fonctionne, mais elle effectue un tri complet alors que l'on souhaite uniquement rechercher deux valeurs.

Complexité :

~~~text
Recherche min/max → O(n)
Tri               → O(n log n)
~~~

> **Ne pas trier une collection uniquement pour rechercher son minimum ou son maximum.**

---
# Opérateurs et opérations sur les listes

## 1. Concaténation avec `+`

Python permet de concaténer directement deux listes avec l'opérateur `+`.

```python
list1 = [1, 2, 3]
list2 = [4, 5]

result = list1 + list2

# [1, 2, 3, 4, 5]
```

L'opération crée une **nouvelle liste**.

Les listes originales ne sont pas modifiées :

```python
list1 = [1, 2]
list2 = [3, 4]

result = list1 + list2

# list1  → [1, 2]
# list2  → [3, 4]
# result → [1, 2, 3, 4]
```

### `+=`

Avec `+=`, les éléments de la deuxième liste sont ajoutés à la première :

```python
list1 = [1, 2]
list2 = [3, 4]

list1 += list2

# list1 → [1, 2, 3, 4]
```

---

## 2. Répétition avec `*`

Python permet également de répéter une liste avec `*`.

```python
values = [1, 2, 3]

result = values * 3

# [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Cela permet notamment d'initialiser facilement une liste :

```python
values = [0] * 5

# [0, 0, 0, 0, 0]
```

Ou une liste de références initialisées à `None` :

```python
values = [None] * 5

# [None, None, None, None, None]
```

---

## 3. Soustraction `-`

L'opérateur `-` n'est **pas défini pour les listes Python**.

```python
list1 = [1, 2, 3]
list2 = [2, 3]

result = list1 - list2
```

→ `TypeError`

Python ne considère pas automatiquement cette opération comme « retirer les éléments de `list2` de `list1` ».

On peut par exemple utiliser une compréhension de liste :

```python
list1 = [1, 2, 3, 4]
list2 = [2, 4]

result = [x for x in list1 if x not in list2]

# [1, 3]
```

Si le besoin correspond réellement à une opération mathématique sur des ensembles, il peut être plus pertinent d'utiliser un `set`.

---

## 4. Division et autres opérateurs arithmétiques

Les opérateurs suivants ne sont pas définis pour les listes :

```python
list1 / list2
list1 // list2
list1 % list2
list1 - list2
```

Ils provoquent un `TypeError`.

Les opérateurs particulièrement intéressants pour les listes sont donc :

```text
+     concaténation
*     répétition
in    appartenance
not in absence
```

---

## 5. Tester l'appartenance avec `in`

Python fournit une syntaxe très lisible pour vérifier si une valeur appartient à une liste :

```python
values = [10, 20, 30]

20 in values
# True

40 in values
# False
```

Pour tester l'absence :

```python
40 not in values
# True
```

### Équivalent Java

En Java, on utilise généralement :

```java
values.contains(20);
```

ou :

```java
!values.contains(40);
```

Comparaison :

```text
Python                    Java

20 in values              values.contains(20)

40 not in values          !values.contains(40)
```

---

# 6. Équivalents en Java

Java ne permet pas d'utiliser directement `+` ou `*` avec les `List`.

### Concaténer deux listes

Python :

```python
result = list1 + list2
```

Java :

```java
List<Integer> result = new ArrayList<>(list1);
result.addAll(list2);
```

`addAll()` ajoute tous les éléments de `list2` à la fin de `result`.

Une autre possibilité en Java moderne consiste à utiliser les Streams :

```java
List<Integer> result = Stream.concat(
    list1.stream(),
    list2.stream()
).toList();
```

---

## 7. Répéter une liste

Python permet directement :

```python
values = [1, 2, 3]

result = values * 3
```

Java ne possède pas d'opérateur équivalent pour répéter directement une `List`.

Il faut construire explicitement la liste résultante.

Par exemple :

```java
List<Integer> result = new ArrayList<>();

for (int i = 0; i < 3; i++) {
    result.addAll(values);
}
```

---

# 8. Comparaison Python / Java

| Opération | Python | Java |
|---|---|---|
| Concaténer | `list1 + list2` | `addAll()` / Stream |
| Concaténer sur place | `list1 += list2` | `list1.addAll(list2)` |
| Répéter | `list * n` | Pas d'opérateur direct |
| Soustraire | ❌ | ❌ |
| Diviser | ❌ | ❌ |
| Appartenance | `x in list` | `list.contains(x)` |
| Absence | `x not in list` | `!list.contains(x)` |

---

# 9. À retenir

Python offre une syntaxe particulièrement concise pour certaines opérations courantes sur les listes :

```python
list1 + list2      # concaténation
list1 * 3          # répétition
value in list1     # appartenance
value not in list1 # absence
```

Java propose les mêmes fonctionnalités, mais principalement à travers les méthodes de son API :

```java
list1.addAll(list2);
list.contains(value);
```

La différence est donc principalement **syntaxique et idiomatique**.

> **Python utilise davantage les opérateurs pour exprimer certaines opérations sur les collections, tandis que Java s'appuie davantage sur les méthodes de ses classes de collections.**
---

# 2. Somme

### Python

~~~python
values = [10, 20, 30, 40]

sum(values)   # 100
~~~

`sum()` est également une fonction built-in.

Aucun import n'est nécessaire.

---

# 3. Nombre d'éléments

### Python

~~~python
len(values)
~~~

`len()` est une fonction built-in.

### Java

Pour une collection :

~~~java
values.size();
~~~

Pour un tableau :

~~~java
values.length;
~~~

### Correspondance

| Opération | Python | Java |
|---|---|---|
| Nombre d'éléments | `len(values)` | `values.size()` pour une collection |
| Taille d'un tableau | `len(values)` | `values.length` |

---

# 4. Moyenne

Python ne fournit pas `mean()` directement comme fonction built-in.

Il faut importer la fonction depuis le module standard `statistics` :

~~~python
from statistics import mean

values = [10, 20, 30, 40]

mean(values)   # 25
~~~

Le module `statistics` fournit également d'autres fonctions statistiques, notamment :

- `mean()`
- `median()`
- `mode()`
- `stdev()`

---

# 5. Fonctions Python disponibles sans import

Les fonctions suivantes sont directement disponibles :

~~~python
min(values)
max(values)
sum(values)
len(values)
~~~

Elles font partie des **built-in functions** de Python.

En revanche :

~~~python
from statistics import mean

mean(values)
~~~

nécessite un import.

### Mémo

~~~text
Python

min()     → built-in
max()     → built-in
sum()     → built-in
len()     → built-in
mean()    → statistics.mean()
~~~

> **Python met directement à disposition de nombreuses opérations courantes sans nécessiter d'import.**

---

# 6. Statistiques en Java

Java propose une classe particulièrement pratique pour obtenir plusieurs statistiques numériques :

~~~java
IntSummaryStatistics stats = values.stream()
                                   .mapToInt(Integer::intValue)
                                   .summaryStatistics();
~~~

On peut ensuite récupérer :

~~~java
stats.getCount();
stats.getMin();
stats.getMax();
stats.getSum();
stats.getAverage();
~~~

`IntSummaryStatistics` appartient au package :

~~~java
java.util
~~~

Il existe également :

~~~java
LongSummaryStatistics
DoubleSummaryStatistics
~~~

Cette approche permet d'obtenir plusieurs statistiques lors d'un même parcours des données.

---

# 7. Comparaison synthétique

| Opération | Python | Java |
|---|---|---|
| Minimum | `min(values)` | `Collections.min(values)` |
| Maximum | `max(values)` | `Collections.max(values)` |
| Somme | `sum(values)` | Stream `.sum()` |
| Nombre d'éléments | `len(values)` | `values.size()` |
| Moyenne | `statistics.mean(values)` | Stream `.average()` |
| Statistiques groupées | `statistics` | `IntSummaryStatistics` |
| Tri | `sorted(values)` / `values.sort()` | `Collections.sort(values)` |

---

# 8. Attention aux types comparables

`min()` et `max()` fonctionnent lorsque les éléments peuvent être comparés.

### Python : chaînes de caractères

~~~python
values = ["banana", "apple", "cherry"]

min(values)   # "apple"
max(values)   # "cherry"
~~~

La comparaison utilise l'ordre lexicographique des chaînes.

Attention : l'ordre Unicode peut produire des résultats différents de l'ordre alphabétique humain lorsque majuscules et minuscules sont mélangées.

### Types incompatibles

Python ne permet pas arbitrairement de comparer des types sans relation de comparaison :

~~~python
values = [10, "hello", 3.5]

min(values)
~~~

→ `TypeError`

En revanche, des valeurs numériques de types différents peuvent être comparées :

~~~python
values = [10, 3.5, 7]

min(values)   # 3.5
max(values)   # 10
~~~

---

# 9. Principe de bonne pratique

> **Choisir l'opération correspondant réellement au besoin.**

Si l'objectif est :

- trouver le minimum → `min()`
- trouver le maximum → `max()`
- calculer une somme → `sum()`
- compter les éléments → `len()`
- calculer une moyenne → `mean()`

Il est inutile de transformer ou de trier toute une collection lorsque l'opération recherchée peut être réalisée directement.

### Exemple

À éviter :

~~~java
Collections.sort(values);
int max = values.get(values.size() - 1);
~~~

Préférer :

~~~java
int max = Collections.max(values);
~~~

Et en Python :

~~~python
max(values)
~~~

> **Une API bien choisie permet souvent d'écrire un code plus simple, plus lisible et plus performant.**

---

# 10. Observation personnelle

La comparaison Python / Java montre qu'une partie de la complexité que l'on écrit soi-même peut être prise en charge directement par le langage ou sa bibliothèque standard.

Cela ne signifie pas que Java ne possède pas les mêmes fonctionnalités.

Java propose également des outils puissants :

- `Collections`
- Streams
- `IntSummaryStatistics`
- `DoubleSummaryStatistics`
- `LongSummaryStatistics`

Mais Python les rend souvent accessibles avec une syntaxe plus concise.

> **Python n'est pas nécessairement plus puissant : il est souvent plus direct.**

Cette différence de philosophie peut être particulièrement agréable lorsqu'on vient d'un langage fortement structuré comme Java et que l'on connaît déjà les concepts sous-jacents.
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
| Lisibilité / débogage | Décomposer les instructions et conditions complexes ; une instruction par ligne facilite le debug pas à pas. | Même principe, avec une importance accrue car l'indentation définit les blocs syntaxiques. Éviter les conditions longues sur une seule ligne. | Bonne pratique transversale du génie logiciel, indépendante du langage. |

---

## 4. À compléter au fil de l'apprentissage

Cette section sert de journal des différences découvertes au fur et à mesure de la pratique.

| Concept | Java | Python | À retenir |
|---|---|---|---|
| Types numériques primitifs | `byte`, `short`, `int`, `long`, `float`, `double` | `int`, `float`, `complex` | Python ne distingue pas `short`/`int`/`long` et son `int` est de taille arbitraire. `float` correspond généralement à une double précision. Pas de types `unsigned` natifs. Pour les tailles fixes : bibliothèques spécialisées comme NumPy. |
| Trace d’exécution en cas d’erreur | **Stack Trace** | **Traceback** | Décrit la chaîne d’appels ayant conduit à l’erreur et indique notamment le fichier, la ligne et le type d’exception. |
| Chaîne formatée F-String | Natif toString() | `f"{2} new messages"` | Préfixer la chaîne par `f` et placer les valeurs numériques ou expressions entre `{}`. En Java, la concaténation permet plus simplement `message = 2 + " new message";` puis `System.out.println(message);`. |
| Afficher le type / la classe d'une variable | `variable.getClass().getName()` | `type(variable)` | Python est beaucoup plus direct. `type(variable)` retourne l'objet `type` représentant le type réel de la valeur. |
| Conversion d'une chaîne en entier | `Integer.parseInt(stringVariable)` | `int(string_variable)` | En Python, le constructeur `int()` sert directement au parsing/conversion. Attention : `(int)` en Java est un cast, pas l'équivalent de `int()` Python. |
| Conversion en chaîne de caractères | `String.valueOf(variable)` | `str(variable)` | Python utilise directement `str()` pour convertir une valeur en chaîne. En Java, `String.valueOf()` est souvent préférable à `variable.toString()` : fonctionne avec les types primitifs et gère `null` sans lever de NPE. |
| Conversion numérique | `int` ↔ `float` : cast avec `(int) floatValue` ou `(float) intValue` ; wrappers : `floatValue.intValue()` / `intValue.floatValue()` | `int(float_value)` / `float(int_value)` | Python utilise directement les constructeurs de types pour la conversion. En Java, distinction entre cast de primitifs et méthodes des classes wrapper (`Integer`, `Float`, etc.). Attention : `int(float_value)` tronque la partie décimale, comme `(int) floatValue` en Java. |
| Booléen → entier | `booleanValue ? 1 : 0` | `int(boolean_value)` | Python permet directement `True → 1` et `False → 0`. En Java, il faut passer explicitement par une expression conditionnelle (ou une méthode utilitaire). |
| Conversion en booléen | `stringValue.isEmpty()` / `intValue == 0` | `bool(string_value)` / `bool(int_value)` | En Python, `bool()` applique directement les règles de vérité : chaîne vide → `False`, chaîne non vide → `True` ; `0` → `False`, entier non nul → `True`. Java ne propose pas cette conversion générique `String`/numérique → `boolean`. |
| Saisie utilisateur en console | `Scanner sc = new Scanner(System.in);` puis `sc.nextInt()` pour un entier | `answer = input()` puis `answer = int(input())` pour un entier | Python simplifie fortement la saisie console avec `input()`, mais `input()` retourne toujours un `str`. La conversion de type est explicite avec `int()`, `float()`, etc. En Java, `Scanner` propose directement des méthodes typées (`nextInt()`, `nextDouble()`, `nextBoolean()`, etc.). |
| Condition `if` `elsè | `if (condition) {} else {}` | `if condition: else:` | En Python, pas d'accolades : l'indentation définit le bloc de code. Elle est donc syntaxiquement obligatoire et doit être cohérente. |
| Condition multiple | `else if (condition)` | `elif condition:` | Python utilise `elif` à la place de `else if`. Même logique conditionnelle. |
| Sélection de valeurs | `switch/case` pour tester plusieurs valeurs d'une même expression | `match/case` | Pour plusieurs égalités strictes sur une même valeur, préférer une structure de sélection dédiée plutôt qu'une longue chaîne de `if/elif`. Plus lisible et exprime mieux l'intention. |
| Incrémentation / décrémentation | `var += 1` → `var = var + 1` ; `var++` / `var--` | `var += 1` → `var = var + 1` ; pas de `++` / `--` | Java possède les opérateurs d'incrémentation/décrémentation préfixés et postfixés : `++var` incrémente avant l'utilisation de la valeur, `var++` après. Python utilise `+=` et `-=`. |
| Boucles `for` | `for (int i = 0; i < 4; i++) {}` | `for i in range(4):` | Java utilise `;` pour séparer les trois parties de la boucle classique : initialisation, condition, incrément. Python utilise `:` pour introduire le bloc. Pour parcourir directement une collection, Java utilise le `for-each` : `for (int value : list) {}` ; Python utilise `for value in list:`. |
| Parcours d'une liste | `for (item : list) {}` | `for item in list:` | Python utilise `in` et `:` pour introduire le bloc. Java utilise `:` dans le `for-each`. |
| Longueur d'un tableau | `array.length` | `len(list)` | En Java, `length` est un attribut du tableau. En Python, `len()` est une fonction. |
| Taille d'une collection | `list.size()` | `len(list)` | En Java, les collections (`List`, `Set`, etc.) utilisent la méthode `size()`. En Python, `len()` fonctionne sur les objets qui implémentent le protocole de longueur. |
| Affichage d'une liste / d'un tableau | `System.out.println(array)` affiche une représentation du tableau (`[I@...` pour un tableau de `int`) ; utiliser `Arrays.toString(array)` pour afficher son contenu. Les collections ont un `toString()` qui affiche généralement leur contenu. | `print(list)` affiche directement le contenu de la liste, par exemple `[10, 20, 30]`. | Python est plus pratique pour l'affichage direct des listes. En Java, attention à la différence entre tableaux et collections : `Arrays.toString(array)` est nécessaire pour les tableaux. |
| Initialisation d'une liste / d'un tableau | `String[] array = {"item0", "item1"};` | `array = ["item0", "item1"]` | Python utilise une syntaxe beaucoup plus concise. En Java, le type et les accolades sont nécessaires pour un tableau. Attention : une `List<String>` Java est une collection et s'initialise différemment. |
| Liste dynamique | `List<String> items = new ArrayList<>();` puis `items.add(...)`, `items.remove(...)` | `items = ["item0", "item1"]` puis `items.append(...)`, `items.remove(...)` | La `list` Python est une collection dynamique, plus proche conceptuellement de `List` en Java que d'un tableau Java (`String[]`). |
| Collection hétérogène | `Object[]` ou `List<Object>` pour mélanger plusieurs types ; nécessite souvent des vérifications de type/casts | `list` peut naturellement contenir des objets de types différents | Python autorise naturellement les listes hétérogènes. Avec le typage moderne, on peut néanmoins préciser les types attendus (`list[str]`, `list[str | int]`, etc.). |
| Compter les occurrences d'une valeur | `Collections.frequency(list, value)` | `list.count(value)` | Compte le nombre d'occurrences de `value` dans la collection. En Java, méthode utilitaire de `java.util.Collections`. |

---
# Chapitre — Les fonctions / méthodes

Les fonctions constituent une étape importante dans l'apprentissage d'un langage : elles permettent de regrouper une suite d'instructions dans une unité réutilisable.

La syntaxe et surtout la philosophie diffèrent entre Python et Java.

---

## 1. Déclarer une fonction

### Python

En Python, une fonction est déclarée avec le mot-clé `def`.

```python
def my_function():
    print("Hello")
```

L'appel de la fonction se fait simplement avec son nom :

```python
my_function()
```

L'indentation définit le bloc d'instructions appartenant à la fonction.

```python
def my_function():
    print("Instruction 1")
    print("Instruction 2")

print("En dehors de la fonction")
```

Les deux `print()` indentés appartiennent à la fonction.

Il n'y a pas d'accolades `{}` pour délimiter le bloc.

---

### Java

En Java, on parle généralement de **méthode** lorsqu'une fonction appartient à une classe.

```java
private void myFunction() {
    System.out.println("Hello");
}
```

L'appel :

```java
myFunction();
```

Les accolades `{}` délimitent le bloc de la méthode.

---

## 2. Comparaison de la syntaxe

```text
Python :

def my_function():
    instruction
    instruction


Java :

private void myFunction() {
    instruction;
    instruction;
}
```

### Différence importante

Python utilise :

```python
:
    indentation
```

Java utilise :

```java
{
    accolades
}
```

L'indentation reste évidemment importante en Java pour la lisibilité, mais elle ne détermine pas le bloc de code.

En Python, elle fait partie de la syntaxe.

---

# 3. Nommer les fonctions

Python recommande généralement le **snake_case** :

```python
def calculate_value():
    pass

def get_variable():
    pass
```

Java utilise généralement le **camelCase**, avec une première lettre minuscule :

```java
void calculateValue() {
}

void getVariable() {
}
```

La convention de nommage dépend donc du langage.

Il est techniquement possible d'utiliser d'autres conventions dans les deux langages, mais il est préférable de respecter les conventions idiomatiques du langage utilisé.

---

# 4. Type de retour

### Java

Java impose de déclarer le type de retour d'une méthode.

Si la méthode ne retourne aucune valeur :

```java
void myFunction() {
}
```

Si elle retourne un entier :

```java
int calculateValue() {
    return 10;
}
```

Si elle retourne un `String` :

```java
String getName() {
    return "Katy";
}
```

`void` signifie donc que la méthode ne retourne aucune valeur.

---

### Python

Python ne demande pas de déclarer obligatoirement le type de retour :

```python
def calculate_value():
    return 10
```

On peut toutefois utiliser les **type hints** :

```python
def calculate_value() -> int:
    return 10
```

Le `-> int` indique que la fonction est censée retourner un entier.

Contrairement à Java, cette annotation ne constitue pas une contrainte de typage équivalente au type de retour Java à l'exécution.

---

# 5. Encapsulation

C'est une différence importante entre Java et Python.

## Java

Java possède de véritables modificateurs de visibilité :

```java
public
protected
private
```

Exemple :

```java
private void calculateValue() {
}
```

Une méthode `private` n'est accessible que depuis la classe concernée.

Une méthode `public` est accessible depuis l'extérieur de la classe.

Lorsqu'aucun modificateur de visibilité n'est indiqué :

```java
void calculateValue() {
}
```

la méthode est **package-private** : elle est accessible depuis les classes du même package.

> Attention : l'absence de modificateur ne signifie donc pas `private`.

---

## Python

Python ne possède pas de mécanisme `public / protected / private` équivalent à Java.

Par défaut, les attributs et méthodes sont accessibles.

### Public

```python
def calculate_value():
    pass
```

### Convention `_`

```python
def _calculate_value():
    pass
```

Le `_` indique par convention :

> « Cette méthode est destinée à un usage interne. »

Mais Python n'interdit pas son utilisation depuis l'extérieur.

```python
object._calculate_value()
```

reste techniquement possible.

### Double underscore `__`

Python possède également le mécanisme de **name mangling** :

```python
class MyClass:

    def __calculate_value(self):
        pass
```

Le nom est transformé internement, notamment en :

```text
_MyClass__calculate_value
```

Cela rend l'accès moins direct, mais ce n'est pas une confidentialité stricte équivalente au `private` de Java.

### Philosophie

On peut résumer ainsi :

```text
Java
→ le langage impose les règles d'accès.

Python
→ le langage s'appuie davantage sur les conventions
  et la responsabilité du développeur.
```

---

# 6. Méthodes statiques

## Java

Java possède le mot-clé `static`.

```java
public static int add(int a, int b) {
    return a + b;
}
```

La méthode appartient à la classe plutôt qu'à une instance.

```java
int result = MyClass.add(10, 20);
```

---

## Python

Python possède un décorateur `@staticmethod`.

```python
class MyClass:

    @staticmethod
    def add(a, b):
        return a + b
```

Appel :

```python
result = MyClass.add(10, 20)
```

Python possède également `@classmethod`, qui constitue un mécanisme différent :

```python
class MyClass:

    @classmethod
    def create(cls):
        return cls()
```

`@classmethod` reçoit la classe (`cls`) comme premier argument.

---

# 7. `final` et les constantes

## Java

Java possède le mot-clé `final`.

```java
final int MAX_VALUE = 100;
```

Une variable `final` ne peut pas être réassignée après son initialisation.

```java
final int MAX_VALUE = 100;

// MAX_VALUE = 200;  // erreur
```

`final` peut également être utilisé avec des méthodes et des classes, avec des significations différentes.

---

## Python

Python ne possède pas de `final` ayant exactement le même rôle d'interdiction à l'exécution.

On peut utiliser `Final` provenant de `typing` :

```python
from typing import Final

MAX_VALUE: Final = 100
```

Cela indique aux outils de typage et d'analyse statique que la valeur est destinée à ne pas être réassignée.

Python utilise également une convention très répandue pour les constantes :

```python
MAX_VALUE = 100
DEFAULT_TIMEOUT = 30
PI = 3.141592
```

Les constantes sont généralement écrites en **MAJUSCULES**.

> Python privilégie donc ici encore davantage la convention et les outils d'analyse que la contrainte imposée par le langage.

---

# 8. Exceptions

Java permet de déclarer explicitement les exceptions susceptibles d'être propagées :

```java
public void readFile() throws IOException {
    // ...
}
```

On peut donc trouver dans une déclaration :

```java
public static final void myFunction() throws Exception {
}
```

Les différents éléments correspondent alors notamment à :

```text
public   → visibilité
static   → méthode de classe
final    → méthode non redéfinissable
void     → type de retour
myFunction() → nom et paramètres
throws Exception → exceptions déclarées
```

Python utilise également les exceptions, mais ne demande pas de déclarer dans la signature les exceptions susceptibles d'être levées :

```python
def read_file():
    # ...
    raise Exception("Erreur")
```

La fonction peut également gérer les exceptions avec :

```python
try:
    ...
except Exception:
    ...
```

---

# 9. La signature d'une méthode en Java

Une déclaration Java peut contenir de nombreuses informations :

```java
public static final int calculateValue(
    int value,
    int increment
) throws Exception {
    return value + increment;
}
```

On retrouve :

```text
public
static
final
int
calculateValue
(int value, int increment)
throws Exception
```

Cela illustre une caractéristique importante de Java :

> Beaucoup de contraintes et d'informations sont exprimées directement dans la déclaration de la méthode.

Python utilise une syntaxe beaucoup plus légère :

```python
def calculate_value(value: int, increment: int) -> int:
    return value + increment
```

---

# 10. Bonne pratique : une fonction fait une seule chose

Une fonction ou méthode devrait idéalement avoir **une responsabilité claire**.

À éviter :

```java
boolean testIfOKAndDestroy() {
    // vérifie quelque chose
    // modifie quelque chose
    // détruit quelque chose
}
```

Le nom lui-même indique déjà plusieurs responsabilités.

Préférer éventuellement :

```java
boolean isOK() {
    ...
}

void destroy() {
    ...
}
```

Puis orchestrer les deux opérations dans une méthode ayant une responsabilité clairement identifiée.

Cette règle facilite :

- la lecture ;
- le test ;
- le débogage ;
- la maintenance ;
- la réutilisation.

---

# 11. Philosophie générale

Python et Java permettent tous deux de structurer un programme avec des fonctions/méthodes.

Mais leur philosophie est différente.

```text
Java
│
├── typage explicite
├── visibilité explicite
├── static
├── final
├── exceptions déclarées
└── accolades pour délimiter les blocs


Python
│
├── syntaxe plus légère
├── indentation pour les blocs
├── typage dynamique
├── conventions pour la visibilité
├── décorateurs pour certaines fonctionnalités
└── davantage de liberté laissée au développeur
```

> **Python ne fait pas nécessairement moins de choses que Java. Il exprime souvent les mêmes concepts avec moins de contraintes syntaxiques et davantage de conventions.**

---
## Astuce — Refactoring : PyCharm vs Eclipse

Un bon IDE ne sert pas seulement à écrire du code : il permet également de **refactorer le code sans devoir rechercher manuellement toutes les occurrences**.

### Rename / Renommer

#### PyCharm

Pour renommer une variable, une fonction, une classe ou une méthode :

```text
Shift + F6
```

--
# Tableau comparatif — Fonctions / méthodes

| Fonction | Java | Python | Commentaire |
|---|---|---|---|
| Déclarer une fonction/méthode | `void myFunction() {}` | `def my_function():` | Java utilise une méthode dans une classe ; Python utilise `def`. |
| Appeler une fonction/méthode | `myFunction();` | `my_function()` | Syntaxe proche. |
| Type de retour | `int calculate()` | `def calculate() -> int:` | Le type est obligatoire en Java ; le type hint est optionnel en Python. |
| Aucun retour | `void myFunction()` | `def my_function():` | Python n'a pas besoin de `void`. |
| Bloc de code | `{ ... }` | indentation | L'indentation est syntaxiquement significative en Python. |
| Convention de nommage | `getVariable()` | `get_variable()` | Java : camelCase ; Python : snake_case. |
| Public | `public` | pas de mot-clé | Les fonctions/méthodes sont accessibles par défaut en Python. |
| Protected | `protected` | `_name` par convention | `_name` n'interdit pas l'accès en Python. |
| Private | `private` | `__name` | Python utilise le name mangling, mais pas une confidentialité stricte équivalente à Java. |
| Package-private | absence de modificateur | — | Java : accessible dans le même package. |
| Méthode statique | `static` | `@staticmethod` | Python utilise un décorateur. |
| Méthode de classe | `static` / méthodes de classe selon conception | `@classmethod` | `classmethod` reçoit `cls`. |
| Constante | `final` | `Final` + convention MAJUSCULES | Python ne force pas la constance à l'exécution de la même manière. |
| Exception déclarée | `throws Exception` | pas d'équivalent dans la signature | Python ne déclare pas les exceptions dans la signature. |
| Paramètre typé | `int value` | `value: int` | Python utilise les type hints. |
| Plusieurs responsabilités | possible | possible | Bonne pratique : une fonction doit idéalement avoir une responsabilité claire. |

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Variable non initialisée / valeur absente | `null` pour les types objets (`String`, `Integer`, `Double`, etc.) | `None` | En Python, une variable peut référencer `None`, qui représente l'absence de valeur. En Java, `null` ne peut être utilisé qu'avec les types référence. |
| Types primitifs et absence de valeur | Les types primitifs (`int`, `double`, `boolean`, etc.) ne peuvent jamais valoir `null` | Python n'a pas cette distinction entre primitifs et objets de la même manière | Pour représenter l'absence de valeur avec un type objet Java, on utilise un wrapper (`Integer`, `Double`, etc.) plutôt qu'un primitif (`int`, `double`). |
| Valeur numérique spéciale | `Double.NaN` / `Float.NaN` | `float('nan')` ou `math.nan` | `NaN` signifie **Not a Number**. Ce n'est pas `null` : il s'agit d'une valeur spéciale représentant un résultat numérique indéfini ou non représentable. |
| Variable globale | Les variables membres d'une classe sont accessibles par les méthodes de la classe selon leur visibilité | Une variable déclarée hors d'une fonction est globale au niveau du module | En Python, une variable doit avoir été définie avant son utilisation. |
| Variable locale | Les variables déclarées dans une méthode, une boucle, un `if`, un `switch`, etc. sont locales à leur bloc/contexte | Une variable déclarée dans une fonction est locale à cette fonction | Une variable locale n'est pas directement accessible depuis l'extérieur de son contexte. |
| Portée d'une variable | La portée dépend du bloc et du contexte de déclaration. Les variables membres ont une portée liée à l'objet/classe et à leur visibilité | Une variable définie hors d'une fonction appartient au scope global du module ; une variable définie dans une fonction appartient au scope local de la fonction | Attention : Python possède également des règles de portée pour les blocs imbriqués et les fonctions (`local`, `enclosing`, `global`, `built-in`). |
| Regrouper plusieurs valeurs dans une même structure | Pas d'équivalent direct au tuple Python. On peut utiliser un objet/classe, un `record`, un tableau ou une autre structure selon le besoin | `tuple` : `user_data = (name, age, gender)` | Un tuple regroupe plusieurs valeurs dans un ordre défini. Les éléments peuvent être de types différents. |
| Tuple avec une seule valeur | Pas d'équivalent direct | `user_data = (name,)` | La virgule est indispensable : `(name)` correspond simplement à `name` entre parenthèses. |
| Association clé → valeur | `Map` / `HashMap` : `Map<String, Object> data = new HashMap<>();` | `dict` | Une `HashMap` Java est conceptuellement beaucoup plus proche du `dict` Python que du `tuple`. |
| Retourner plusieurs valeurs | Pas d'équivalent direct dans la syntaxe Java | `return val1, val2` | Python peut retourner plusieurs valeurs sous la forme d'un tuple. L'appelant peut les récupérer directement dans plusieurs variables. |
| Récupérer plusieurs valeurs retournées | Il faut généralement utiliser un objet (`class`, `record`, etc.) ou une structure adaptée | `val1, val2 = my_function()` | Python réalise implicitement le déballage (*unpacking*) du tuple. |
| Dictionnaire / association clé → valeur | `HashMap<K, V>` | `dict` : `{key1: value1, key2: value2}` | Associe une clé à une valeur. Les clés doivent être uniques. |
| Type des clés | `HashMap<K, V>` impose un type `K` pour les clés | Les clés peuvent être de types différents | Python est plus permissif : un même dictionnaire peut contenir par exemple une clé `str` et une clé `int`. |
| Types possibles pour une clé | La clé doit être compatible avec le type `K` et respecter les contraintes de `Map` | La clé doit être **hashable** | On peut utiliser notamment des `str`, `int`, `float`, `tuple`, etc. Une `list` ne peut pas être utilisée comme clé car elle est mutable et donc non hashable. |
| Unicité des clés | Une clé est unique dans une `HashMap` | Une clé est unique dans un `dict` | Si une clé est réutilisée, sa valeur est remplacée. |
| Ajouter une entrée dans un dictionnaire | `dictionary.put(key, value)` | `dictionary[key] = value` | En Python, la même syntaxe permet également de modifier la valeur d'une clé existante. En Java, `put()` ajoute la clé si elle n'existe pas ou remplace sa valeur si elle existe déjà. |
| Vérifier si une clé existe dans un dictionnaire | `map.containsKey(key)` | `key in dictionary` | Retourne `True` / `False` en Python. |
| Vérifier si une valeur existe dans une collection | `collection.contains(value)` | `value in collection` | En Python, `in` fonctionne notamment avec les listes, tuples, sets et dictionnaires. Attention : sur un dictionnaire, `in` teste les **clés**, pas les valeurs. |
| Supprimer une entrée par clé | `map.remove(key)` | `dictionary.pop(key)` | Les deux méthodes suppriment l'entrée et retournent la valeur supprimée si la clé existe. |
| Clé inexistante lors d'une suppression | `map.remove(key)` retourne `null` si la clé n'existe pas | `dictionary.pop(key)` lève une `KeyError` | En Python, l'absence de la clé provoque donc une exception par défaut. |
| Suppression sans erreur si la clé peut être absente | `map.remove(key)` | `dictionary.pop(key, None)` | En Python, le second argument permet de fournir une valeur par défaut si la clé n'existe pas. |
| Vérifier avant de supprimer | `map.containsKey(key)` | `key in dictionary` | Utile si l'absence de la clé doit être traitée explicitement. |

### Exemple Python

```python
value = dictionary.pop(key, None)
```
## Suite des notes comparatives

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Ensemble de valeurs uniques | `Set` / `HashSet` | `set` : `{"val1", "val2", "val3"}` | Un `set` est une collection de valeurs uniques. Les doublons sont automatiquement éliminés. |
| Set autonome | `Set<String> set = new HashSet<>();` | `my_set = {"val1", "val2", "val3"}` | Java possède bien une structure `Set` autonome : elle n'est pas limitée aux clés d'une `Map`. |
| Clés uniques d'une Map | `map.keySet()` | `dictionary.keys()` | `keySet()` retourne un `Set` contenant les clés de la `Map`. |
| Ajouter une valeur | `set.add(value)` | `my_set.add(value)` | Si la valeur existe déjà, le set reste inchangé. |
| Vérifier l'existence | `set.contains(value)` | `value in my_set` | Les deux permettent de vérifier si une valeur appartient au set. |
| Ajouter une valeur à un `Set` | `mySet.add(item)` | `my_set.add(item)` | Si la valeur existe déjà, le `Set` reste inchangé. |
| Supprimer une valeur | `mySet.remove(item)` | `my_set.remove(item)` | La valeur est supprimée si elle existe. Attention : le comportement en cas d'absence de l'élément diffère selon le langage. |
| Vérifier la présence d'une valeur | `mySet.contains(item)` | `item in my_set` | Retourne un booléen. |
| Parcourir un `Set` | `for (element : mySet) {}` | `for element in my_set:` | Les deux permettent de parcourir les éléments du `Set`. L'ordre n'est pas garanti par un `HashSet` Java ni par un `set` Python. |
| Convertir une liste en ensemble de valeurs uniques | `new HashSet<>(list)` | `set(a_list)` | Les doublons sont supprimés lors de la création du `Set`. |
| Vérifier si un `Set` est un sous-ensemble d'un autre | `mySet.containsAll(smallerSet)` | `smaller_set.issubset(my_set)` | Vérifie que tous les éléments de `smallerSet` sont présents dans `mySet`. |
| Unir deux `Set` | `set1.addAll(set2)` | `set1.union(set2)` | Produit l'ensemble des valeurs présentes dans l'un ou l'autre des deux `Set`. Les doublons sont automatiquement éliminés. |
| Récupérer les éléments communs entre deux `Set` | `set1.retainAll(set2)` | `set1.intersection(set2)` | Retourne les éléments présents dans les deux `Set`. Attention : en Java, `retainAll()` modifie directement `set1`. |
| Récupérer les éléments présents dans `set1` mais pas dans `set2` | `set1.removeAll(set2)` | `set1.difference(set2)` | En Python, `difference()` retourne un nouveau `set`. En Java, `removeAll()` modifie directement `set1`. Pour conserver `set1`, faire une copie avant l'opération. |

# POO — Classes et organisation du code

## 1. Définition d'une classe

### Python

~~~python
class Car:
    wheels = 4
    doors = 4

    def start_engine(self):
        print("Vroom!")
~~~

### Java

~~~java
public class Car {
    public int wheels = 4;
    public int doors = 4;

    public void startEngine() {
        System.out.println("Vroom!");
    }
}
~~~

---

## 2. Instanciation

### Python

~~~python
my_car = Car()
~~~

### Java

~~~java
Car myCar = new Car();
~~~

Python utilise également des objets et des instances de classes, mais n'utilise pas le mot-clé `new`.

---

## 3. Accès aux membres

Dans les deux langages, l'accès aux membres d'une instance utilise `.` :

### Python

~~~python
my_car.wheels
my_car.start_engine()
~~~

### Java

~~~java
myCar.wheels;
myCar.startEngine();
~~~

---

## 4. Toutes les classes Python héritent-elles de `Object` ?

Oui.

En Python, toutes les classes héritent finalement de `object`.

~~~python
class Car:
    pass
~~~

est conceptuellement équivalent à :

~~~python
class Car(object):
    pass
~~~

`object` est la classe de base de toutes les classes Python.

On retrouve donc une idée similaire à Java :

~~~text
Java

Object
  ↑
 Car
~~~

~~~text
Python

object
  ↑
 Car
~~~

Python permet cependant une syntaxe beaucoup plus concise.

---

## 5. Organisation des classes : un fichier par classe ?

Oui, et c'est même une organisation courante dans les projets Python.

Contrairement à un petit exercice où tout peut être placé dans `main.py`, un projet réel peut être organisé en plusieurs modules :

~~~text
my_project/
│
├── main.py
│
├── car.py
├── engine.py
├── wheel.py
│
└── utils.py
~~~

Par exemple :

### car.py

~~~python
class Car:

    def start_engine(self):
        print("Vroom!")
~~~

### main.py

~~~python
from car import Car

my_car = Car()
my_car.start_engine()
~~~

Le fichier Python joue notamment le rôle de **module**.

Il est donc parfaitement possible de construire une architecture en plusieurs fichiers et plusieurs packages, comme on le ferait en Java.

---

## 6. Pourquoi séparer les classes ?

La séparation permet d'attribuer un rôle clair à chaque module.

Par exemple :

~~~text
Car
 ├── comportement de la voiture

Engine
 ├── gestion du moteur

Wheel
 ├── gestion des roues

utils
 ├── fonctions utilitaires
~~~

Cela améliore :

- la lisibilité ;
- la maintenance ;
- la réutilisation ;
- les tests ;
- la séparation des responsabilités.

Le principe est le même que dans une architecture Java bien structurée.

---

## 7. Classes utilitaires

En Java, on peut créer une classe utilitaire contenant par exemple :

~~~java
public final class MathUtils {

    public static double convert(double value) {
        ...
    }
}
~~~

Puis :

~~~java
MathUtils.convert(value);
~~~

En Python, on peut faire quelque chose de plus simple : créer un module contenant directement les fonctions.

### math_utils.py

~~~python
def convert(value):
    ...
~~~

Puis :

~~~python
import math_utils

math_utils.convert(value)
~~~

Il n'est donc pas toujours nécessaire de créer une classe uniquement pour regrouper des fonctions utilitaires.

### À retenir

> En Python, un module peut déjà jouer le rôle de regroupement fonctionnel qu'une classe utilitaire joue souvent en Java.

Cela permet parfois d'éviter de reproduire mécaniquement une architecture Java en Python.

---

## 8. Comparaison générale

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Classe de base de toutes les classes | `Object` | `object` | Toutes les classes héritent finalement de cette classe de base. |
| Définir une classe | `class Car {}` | `class Car:` | Python utilise l'indentation au lieu des accolades. |
| Instancier | `new Car()` | `Car()` | Python n'utilise pas le mot-clé `new`. |
| Accéder à un membre | `myCar.wheels` | `my_car.wheels` | Même notation avec `.` |
| Appeler une méthode | `myCar.startEngine()` | `my_car.start_engine()` | Même principe ; convention de nommage différente. |
| Organiser le code | Classes dans des fichiers/packages | Classes dans des modules/packages | Python permet également une architecture multi-fichiers. |
| Classe utilitaire | Souvent `static` + classe dédiée | Souvent module + fonctions | Python permet de regrouper directement des fonctions dans un module. |

---

## 9. Attributs de classe et attributs d'instance

### Attention

Dans le code Python :

~~~python
class Car:
    wheels = 4
    doors = 4
~~~

`wheels` et `doors` sont **des attributs de classe**, et non des attributs d'instance.

Si l'on veut que chaque voiture possède ses propres valeurs, on utilise généralement `__init__` :

~~~python
class Car:

    def __init__(self, wheels, doors):
        self.wheels = wheels
        self.doors = doors
~~~

Puis :

~~~python
my_car = Car(4, 4)
~~~

Ici :

~~~python
self.wheels
self.doors
~~~

sont des **attributs de l'instance**.

Ils sont conceptuellement beaucoup plus proches des attributs d'instance que l'on manipule habituellement en Java.

### À retenir

`self` et `__init__` sont deux notions fondamentales pour faire le lien entre le modèle objet Java et celui de Python.

~~~text
Java

class Car {

    private int wheels;

    public Car(int wheels) {
        this.wheels = wheels;
    }
}
~~~

~~~text
Python

class Car:

    def __init__(self, wheels):
        self.wheels = wheels
~~~

Dans les deux cas, chaque instance possède son propre état.

|Notion | Java | Python | Commentaire|
|---|---|---|---|
| Classe | `class Car {}` | `class Car:` | Python utilise l'indentation au lieu des accolades. |
| Classe mère de toutes les classes | `Object` | `object` | Toutes les classes héritent finalement de cette classe de base. |
| Instanciation | `new Car()` | `Car()` | Python n'utilise pas `new`. |
| Constructeur | `public Car() {}` | `def __init__(self):` | `__init__` initialise l'instance. |
| Référence à l'instance courante | `this` | `self` | `self` est explicitement passé comme premier paramètre des méthodes d'instance. |
| Attribut d'instance | `this.wheels` | `self.wheels` | L'état appartient à l'instance. |
| Appel d'une méthode | `myCar.startEngine()` | `my_car.start_engine()` | Même notation avec `.`. |
| Héritage | `class Car extends Vehicle` | `class Car(Vehicle):` | Les deux permettent l'héritage de classes. |
| Organisation du code | Classes réparties dans des fichiers `.java` | Classes réparties dans des modules `.py` | Python permet également une architecture multi-fichiers et packages. |
| Classe utilitaire | Classe avec méthodes `static` | Module contenant directement des fonctions | En Python, une classe utilitaire n'est pas toujours nécessaire. |
| Convention de nommage des méthodes | `startEngine()` | `start_engine()` | Java utilise généralement le camelCase ; Python utilise généralement le snake_case. |
| Accès aux membres | `.` | `.` | Même syntaxe d'accès. |
| Type des attributs | Généralement déclaré explicitement | Pas obligatoire | Python permet d'utiliser des annotations de type. |
| Typage | Statique et fort | Dynamique, avec typage optionnel via annotations et type checkers | Python permet d'ajouter des garde-fous sans imposer le typage statique du langage. |
| Encapsulation | `public`, `protected`, `private` | Pas de véritable `private` comme en Java | Python utilise notamment les conventions `_member` et `__member`. |
| Méthodes statiques | `static` | `@staticmethod` | Les deux permettent une méthode qui ne dépend pas de l'instance. |
| Méthodes de classe | Pas d'équivalent direct | `@classmethod` | Python possède cette notion directement. |
| Constantes | `static final` | Convention `UPPER_CASE` | Python n'impose pas réellement l'immutabilité d'une constante. |
| Interface | `interface` | Protocoles, classes abstraites, duck typing | Python propose plusieurs mécanismes plutôt qu'un équivalent unique de `interface`. |


# Python — IDE, documentation et génération de code

## 1. `help()` et les docstrings

Python possède une documentation intégrée accessible avec `help()`.

Il n'est pas nécessaire de surcharger ou d'implémenter une fonction particulière pour utiliser `help()`.

On documente une fonction avec une **docstring** :

~~~python
def calculate_age(birth_year):
    """Calculate the age from a birth year."""
    return 2026 - birth_year
~~~

Puis :

~~~python
help(calculate_age)
~~~

Pour une classe :

~~~python
class Car:
    """Represent a car."""

    def start_engine(self):
        """Start the car engine."""
        print("Vroom!")
~~~

Puis :

~~~python
help(Car)
~~~

La docstring est stockée dans l'attribut `__doc__`.

### Comparaison avec Java

~~~text
Java
→ Javadoc
→ documentation associée aux classes et méthodes

Python
→ docstrings
→ documentation accessible notamment avec help()
~~~

---

# 2. PyCharm : retrouver les réflexes Eclipse

PyCharm possède de nombreuses fonctionnalités similaires à celles d'Eclipse :

- autocomplétion ;
- documentation ;
- affichage des paramètres ;
- génération de code ;
- refactoring ;
- renommage avec mise à jour des références ;
- quick-fixes ;
- templates de code.

---

## 3. Autocomplétion

### `Ctrl + Space`

Permet d'obtenir la complétion du code.

Par exemple :

~~~python
my_car.
~~~

PyCharm peut proposer les attributs et méthodes disponibles.

La complétion tient également compte du contexte et des informations de type disponibles.

---

## 4. Documentation rapide

### `Ctrl + Q`

Affiche la **Quick Documentation** du symbole courant.

Par exemple :

~~~python
math.sqrt
~~~

Puis `Ctrl + Q`.

PyCharm affiche la documentation disponible.

Cela permet de retrouver une expérience proche de la consultation de la Javadoc dans Eclipse.

---

## 5. Afficher les paramètres d'une fonction

### `Ctrl + P`

Permet d'afficher les paramètres attendus par une fonction.

Exemple :

~~~python
math.pow(
~~~

PyCharm affiche la signature et les paramètres attendus.

---

# 6. Génération et templates de code

PyCharm propose des **Live Templates** pour générer rapidement des structures courantes.

Par exemple :

~~~text
for
if
while
try
~~~

Les templates permettent d'éviter de taper manuellement du code répétitif.

### `Ctrl + J`

Permet d'afficher les Live Templates disponibles.

### `Ctrl + Shift + Enter`

Permet de compléter certaines constructions syntaxiques automatiquement.

---

# 7. Refactoring

PyCharm possède de nombreux outils de refactoring.

## Introduire une variable

### `Ctrl + Alt + V`

**Introduce Variable**

Permet d'extraire une expression dans une variable.

PyCharm peut proposer automatiquement un nom de variable et remplacer les occurrences nécessaires.

---

## Introduire une constante

### `Ctrl + Alt + C`

**Introduce Constant**

Permet d'extraire une valeur dans une constante.

---

## Extraire une fonction

### `Ctrl + Alt + M`

**Extract Function**

Permet de transformer un morceau de code en fonction et de déterminer les paramètres nécessaires.

---

## Renommer

### `Shift + F6`

**Rename**

Permet de renommer un symbole et de mettre à jour les références correspondantes.

---

# 8. Quick-fixes et intentions

### `Alt + Enter`

Ouvre les **Intentions et Quick-Fixes** de PyCharm.

Selon le contexte, PyCharm peut notamment proposer :

~~~text
Import manquant
Créer le symbole manquant
Corriger le code
Simplifier une expression
Transformer le code
Ajouter une documentation
~~~

C'est un raccourci particulièrement utile à connaître.

---

# 9. Comparaison rapide Eclipse / PyCharm

| Besoin | Eclipse / Java | PyCharm / Python |
|---|---|---|
| Autocomplétion | `Ctrl + Space` | `Ctrl + Space` |
| Documentation | Javadoc / informations contextuelles | `Ctrl + Q` |
| Paramètres d'une méthode | Informations contextuelles | `Ctrl + P` |
| Quick-fix | `Ctrl + 1` | `Alt + Enter` |
| Introduire une variable | Refactoring | `Ctrl + Alt + V` |
| Introduire une constante | Refactoring | `Ctrl + Alt + C` |
| Extraire une méthode | Refactoring | `Ctrl + Alt + M` |
| Renommer | `Alt + Shift + R` | `Shift + F6` |
| Générer du code | Generate | `Alt + Insert` |
| Templates | Templates | Live Templates |
| Documentation Python | — | Docstrings + `help()` + Quick Documentation |

---

# 10. Point important : PyCharm vs VS Code

VS Code possède également :

- l'autocomplétion ;
- l'IntelliSense ;
- le refactoring ;
- les diagnostics ;
- la navigation dans le code.

Cependant, dans VS Code, une partie de ces fonctionnalités dépend de la configuration et des extensions Python utilisées.

PyCharm propose davantage de fonctionnalités Python intégrées dans un même environnement.

Pour un développement Python nécessitant beaucoup :

- d'analyse de code ;
- de refactoring ;
- de navigation ;
- de génération de code ;
- de documentation ;
- de détection précoce des erreurs ;

PyCharm est donc particulièrement intéressant.

---

# 11. Mémo personnel

~~~text
Ctrl + Space
→ Autocomplétion

Ctrl + Q
→ Documentation

Ctrl + P
→ Paramètres d'une fonction

Alt + Enter
→ Quick-fix / intention

Ctrl + Alt + V
→ Introduire une variable

Ctrl + Alt + C
→ Introduire une constante

Ctrl + Alt + M
→ Extraire une fonction

Shift + F6
→ Renommer

Ctrl + J
→ Live Templates
~~~

### À retenir

L'objectif n'est pas de mémoriser immédiatement tous les raccourcis.

Le plus important est de retrouver le réflexe :

> **« Est-ce que mon IDE peut le faire à ma place ? »**

Comme avec Eclipse, un bon IDE permet de réduire les erreurs de saisie, faciliter le refactoring et accélérer la navigation dans un projet Python.

# Module Classe
|Notion | Java | Python | Commentaire|
|---|---|---|---|
| Importer le module / package mathématique | `import java.lang.Math;` *(implicite, pas besoin d'import)* | `import math` | Python importe explicitement le module `math`. En Java, `java.lang` est importé implicitement. |
| Racine carrée | `Math.sqrt(value)` | `math.sqrt(value)` | Retourne la racine carrée. |
| Valeur absolue | `Math.abs(value)` | `math.fabs(value)` / `abs(value)` | En Python, `abs()` est une fonction native et est généralement préférée. |
| Puissance | `Math.pow(value, exponent)` | `math.pow(value, exponent)` / `value ** exponent` | En Python, `**` est souvent plus idiomatique. |
| Arrondi inférieur | `Math.floor(value)` | `math.floor(value)` | Retourne le plus grand entier inférieur ou égal à `value`. |
| Arrondi supérieur | `Math.ceil(value)` | `math.ceil(value)` | Retourne le plus petit entier supérieur ou égal à `value`. |
| Arrondi | `Math.round(value)` | `round(value)` | En Python, `round()` est une fonction native. Le comportement d'arrondi peut différer entre les deux langages. |
| Minimum | `Math.min(a, b)` | `min(a, b)` | Python permet également `min(values)` sur une collection. |
| Maximum | `Math.max(a, b)` | `max(a, b)` | Python permet également `max(values)` sur une collection. |
| Exponentielle | `Math.exp(value)` | `math.exp(value)` | Calcule `e` puissance `value`. |
| Logarithme naturel | `Math.log(value)` | `math.log(value)` | Logarithme naturel (base `e`). |
| Logarithme base 10 | `Math.log10(value)` | `math.log10(value)` | Logarithme en base 10. |
| Logarithme base 2 | Pas de méthode `Math.log2()` dans les anciennes versions ; `Math.log(x) / Math.log(2)` | `math.log2(value)` | Python fournit directement cette fonction. |
| Sinus | `Math.sin(value)` | `math.sin(value)` | Angle exprimé en radians. |
| Cosinus | `Math.cos(value)` | `math.cos(value)` | Angle exprimé en radians. |
| Tangente | `Math.tan(value)` | `math.tan(value)` | Angle exprimé en radians. |
| Arc sinus | `Math.asin(value)` | `math.asin(value)` | Retourne un angle en radians. |
| Arc cosinus | `Math.acos(value)` | `math.acos(value)` | Retourne un angle en radians. |
| Arc tangente | `Math.atan(value)` | `math.atan(value)` | Retourne un angle en radians. |
| Conversion degrés → radians | `Math.toRadians(value)` | `math.radians(value)` | Convertit un angle en degrés en radians. |
| Conversion radians → degrés | `Math.toDegrees(value)` | `math.degrees(value)` | Convertit un angle en radians en degrés. |
| Pi | `Math.PI` | `math.pi` | Constante π. |
| Nombre d'Euler | `Math.E` | `math.e` | Constante `e`. |
| Infini positif | `Double.POSITIVE_INFINITY` | `math.inf` | Représente l'infini positif. |
| NaN | `Double.NaN` | `math.nan` | Représente **Not a Number**. |

# Imports ciblés et conflits de noms — Python vs Java

## 1. Importer uniquement ce dont on a besoin

En Python, il est possible d'importer directement une fonction ou une constante depuis un module.

~~~python
from math import pi
from statistics import mean
~~~

On peut ensuite utiliser directement les noms importés :

~~~python
print(pi)
result = mean(values)
~~~

Il n'est plus nécessaire d'écrire :

~~~python
math.pi
statistics.mean(values)
~~~

### En Java

Java permet également les imports ciblés, mais il faut distinguer l'import d'une **classe** de l'import d'un membre `static`.

Par exemple :

~~~java
import java.util.IntSummaryStatistics;
~~~

permet d'utiliser directement la classe :

~~~java
IntSummaryStatistics stats;
~~~

Pour importer directement une constante ou une méthode `static`, Java utilise `import static` :

~~~java
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;
~~~

On peut alors écrire :

~~~java
double value = sqrt(25);
double pi = PI;
~~~

Sans `import static`, on écrit :

~~~java
Math.sqrt(25);
Math.PI;
~~~

---

## 2. Que se passe-t-il si deux modules Python possèdent le même nom ?

C'est un point important.

Par exemple, imaginons deux modules qui possèdent chacun une fonction `calculate()` :

~~~python
from module_a import calculate
from module_b import calculate
~~~

Le deuxième import crée une nouvelle association avec le nom `calculate`.

Le nom importé précédemment est donc masqué :

~~~python
calculate()
~~~

appellera la fonction provenant de `module_b`.

Python ne conserve pas automatiquement les deux fonctions sous le même nom.

---

## 3. Solution : utiliser un alias

Python permet de renommer localement un élément importé avec `as`.

~~~python
from module_a import calculate as calculate_a
from module_b import calculate as calculate_b
~~~

On peut alors utiliser les deux fonctions :

~~~python
calculate_a()
calculate_b()
~~~

C'est particulièrement utile lorsque deux modules possèdent des fonctions ou constantes portant le même nom.

---

## 4. Autre solution : importer les modules eux-mêmes

On peut également conserver le nom du module :

~~~python
import module_a
import module_b
~~~

Puis :

~~~python
module_a.calculate()
module_b.calculate()
~~~

Cette forme évite naturellement les collisions de noms et rend également plus explicite l'origine de la fonction.

---

## 5. Comparaison avec Java

En Java, deux classes provenant de packages différents peuvent avoir le même nom.

Par exemple :

~~~java
import package1.Utils;
import package2.Utils;
~~~

Cette situation crée une ambiguïté : Java ne peut pas utiliser les deux classes avec le même nom simple `Utils`.

Il faut alors utiliser le nom qualifié pour lever l'ambiguïté :

~~~java
package1.Utils.method();
package2.Utils.method();
~~~

### Comparaison

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Importer une classe / module | `import package.ClassName` | `import module` | Python importe généralement un module ; Java importe une classe ou un package selon la syntaxe utilisée. |
| Importer directement un membre | `import static package.Class.CONSTANT` | `from module import constant` | Permet d'utiliser directement le nom importé. |
| Utiliser le membre importé | `Math.PI` ou `PI` avec `import static` | `math.pi` ou `pi` avec `from math import pi` | Python utilise `from ... import ...` pour importer directement un élément. |
| Deux éléments portant le même nom | Utiliser le nom qualifié | Utiliser un alias avec `as` ou le nom du module | Les deux langages permettent de lever les ambiguïtés, mais avec des mécanismes différents. |
| Alias | Pas d'équivalent direct pour les imports de classes | `from module import function as my_function` | Très pratique pour éviter les collisions de noms. |
| Conserver le contexte du module/package | `package.Class.method()` | `module.function()` | Permet notamment de savoir d'où vient la fonction. |

### À retenir

En Python :

~~~python
from statistics import mean
~~~

donne directement accès à :

~~~python
mean(values)
~~~

Mais si plusieurs modules possèdent le même nom, il vaut souvent mieux utiliser :

~~~python
from module_a import calculate as calculate_a
from module_b import calculate as calculate_b
~~~

ou simplement :

~~~python
import module_a
import module_b

module_a.calculate()
module_b.calculate()
~~~

> **Importer directement un nom est pratique, mais conserver le contexte du module peut rendre le code plus clair et éviter les collisions.**

# Lever une exception — Java / Python

## 1. Lever une exception

### Python
raise Exception("error message")

### Java
throw new Exception("error message");

⚠️ En Java :
- `throw` = lève effectivement l'exception
- `throws` = indique dans la signature qu'une méthode peut lever une exception

Exemple :
void maMethode() throws Exception {
    throw new Exception("error message");
}


## 2. Exceptions courantes — équivalences Java / Python

| Situation | Python | Java |
|---|---|---|
| Exception générique | `Exception` | `Exception` |
| Valeur incorrecte | `ValueError` | `IllegalArgumentException` |
| Type incorrect | `TypeError` | `IllegalArgumentException`* |
| Index hors limites | `IndexError` | `IndexOutOfBoundsException` |
| Index de tableau hors limites | `IndexError` | `ArrayIndexOutOfBoundsException` |
| Clé absente d'un dictionnaire/map | `KeyError` | `NoSuchElementException`** |
| Attribut inexistant | `AttributeError` | `NoSuchFieldException`*** |
| Fichier inexistant | `FileNotFoundError` | `FileNotFoundException` |
| Fichier / ressource inaccessible | `OSError` | `IOException` |
| Division par zéro | `ZeroDivisionError` | `ArithmeticException` |
| Conversion impossible | `ValueError` | `NumberFormatException` |
| Valeur `None` / objet null | `AttributeError` | `NullPointerException` |
| Opération non supportée | `NotImplementedError` | `UnsupportedOperationException` |
| Méthode abstraite non implémentée | `NotImplementedError` | `AbstractMethodError` |
| Erreur de mémoire | `MemoryError` | `OutOfMemoryError` |
| Récursion trop profonde | `RecursionError` | `StackOverflowError` |
| Timeout | `TimeoutError` | `TimeoutException` |
| Interruption | `KeyboardInterrupt` | `InterruptedException` |

\* Java ne possède pas une équivalence exacte de `TypeError`.  
`IllegalArgumentException` est souvent utilisée lorsqu'un argument est invalide.

\** Pour une `Map`, l'équivalent dépend de la manière dont on accède à la valeur :
- `get()` → retourne généralement `null` si la clé n'existe pas
- `get()` d'une collection spécialisée → peut lever une exception
- `NoSuchElementException` est notamment utilisée par `Iterator.next()`.

\*** Pas vraiment l'équivalent direct de `AttributeError` :
`NoSuchFieldException` concerne surtout la réflexion Java.


## 3. Hiérarchie à retenir

Python :
~~~text
Exception
├── ValueError
├── TypeError
├── IndexError
├── KeyError
├── FileNotFoundError
└── ...
~~~
Java :
~~~text
Throwable
├── Error
│   ├── OutOfMemoryError
│   └── StackOverflowError
│
└── Exception
    ├── IOException
    │   └── FileNotFoundException
    ├── RuntimeException
    │   ├── IllegalArgumentException
    │   ├── IndexOutOfBoundsException
    │   ├── NullPointerException
    │   ├── ArithmeticException
    │   └── NumberFormatException
    └── ...
~~~

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Faire une requête HTTP | `java.net.http.HttpClient` | bibliothèque `requests` | Java dispose aujourd'hui d'un client HTTP intégré au JDK. |
| Requête GET | `HttpClient` + `HttpRequest` avec `.GET()` | `requests.get(url)` | Permet de récupérer des données. |
| Requête POST | `HttpClient` + `HttpRequest` avec `.POST(...)` | `requests.post(url, ...)` | Permet notamment d'envoyer des données au serveur. |
| Requête DELETE | `HttpClient` + `HttpRequest` avec `.DELETE()` | `requests.delete(url)` | Permet notamment de demander la suppression d'une ressource. |
| Requête synchrone | `client.send(request, ...)` | `requests.get(...)`, `requests.post(...)` | Le programme attend la réponse. |
| Requête asynchrone | `client.sendAsync(...)` → `CompletableFuture` | Possibilité avec des bibliothèques/outils asynchrones | Java fournit directement cette possibilité dans `HttpClient`. |
| HTTPS / TLS | Géré par `HttpClient` avec le contexte SSL/TLS | Géré par `requests` avec HTTPS et les paramètres de vérification TLS | HTTPS ne nécessite pas de programmer soi-même les sockets. |
| Sockets TCP bas niveau | `java.net.Socket` | `socket` | À utiliser lorsqu'on travaille au niveau réseau bas niveau, pas simplement pour consommer une API HTTP. |

## Exemple Python

~~~python
import requests

response = requests.get("https://mimo.org/courses")

data = response.json()
print(data)
~~~

Pour un POST avec des données JSON :

~~~python
import requests

url = "https://mimo.org/users"

data = {
    "username": "test_user",
    "name": "tester"
}

response = requests.post(url, json=data)

print(response.json())
~~~

## Équivalent Java moderne

Depuis Java 11, Java possède une API HTTP standard dans le JDK : `java.net.http`.

Elle fournit notamment :

- `HttpClient`
- `HttpRequest`
- `HttpResponse`

Exemple de GET :

~~~java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://mimo.org/courses"))
        .GET()
        .build();

HttpResponse<String> response =
        client.send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.statusCode());
System.out.println(response.body());
~~~

### À retenir

Avant, on pouvait effectivement rencontrer beaucoup de code Java utilisant directement les `Socket` pour la communication réseau.

Mais pour consommer une **API HTTP**, on n'a normalement pas besoin de programmer directement les sockets.

~~~text
API HTTP
   ↓
Java : java.net.http.HttpClient
Python : requests
   ↓
HTTP / HTTPS
   ↓
Serveur
~~~

Les sockets restent utiles lorsque l'on a besoin d'un niveau de contrôle réseau plus bas.

### Sécurité

`https://` utilise TLS pour sécuriser la communication.

En Java, `HttpClient` s'appuie sur les mécanismes TLS/SSL du JDK et peut être configuré avec un `SSLContext` lorsque des besoins particuliers existent.

> **Java moderne : `HttpClient` est l'équivalent conceptuel le plus proche de `requests` pour effectuer des requêtes HTTP.**

La classe `HttpClient` fait partie du JDK depuis Java 11 et permet notamment les requêtes HTTP/1.1 et HTTP/2 ; les versions récentes du JDK prennent également en charge HTTP/3. [oai_citation:0‡docs.oracle.com](https://docs.oracle.com/en/java/javase/26/docs/api/java.net.http/java/net/http/HttpClient.html?utm_source=chatgpt.com)

# Python `requests` et codes de statut HTTP

## 1. Principales fonctions de `requests`

Le module Python `requests` fournit des fonctions simples correspondant aux principales méthodes HTTP. Elles retournent un objet `Response`. 

| Fonction Python | Méthode HTTP | Usage principal | Exemple |
|---|---|---|---|
| `requests.get(url)` | `GET` | Récupérer une ressource | `response = requests.get(url)` |
| `requests.post(url, ...)` | `POST` | Créer une ressource / envoyer des données | `requests.post(url, json=data)` |
| `requests.put(url, ...)` | `PUT` | Remplacer ou mettre à jour une ressource | `requests.put(url, json=data)` |
| `requests.patch(url, ...)` | `PATCH` | Modifier partiellement une ressource | `requests.patch(url, json=data)` |
| `requests.delete(url)` | `DELETE` | Supprimer une ressource | `requests.delete(url)` |
| `requests.head(url)` | `HEAD` | Récupérer les headers sans le corps de la réponse | `requests.head(url)` |
| `requests.options(url)` | `OPTIONS` | Demander les méthodes / options disponibles pour une ressource | `requests.options(url)` |
| `requests.request(method, url, ...)` | Méthode au choix | Fonction générique permettant de réaliser n'importe laquelle des requêtes ci-dessus | `requests.request("GET", url)` |

### Envoyer des données JSON

Avec `requests`, le paramètre `json` est pratique pour envoyer un objet Python sérialisable en JSON :

~~~python
data = {
    "username": "test_user",
    "name": "tester"
}

response = requests.post(url, json=data)
~~~

À distinguer de :

~~~python
response = requests.post(url, data=data)
~~~

`json=data` indique explicitement que les données doivent être envoyées comme JSON.

---

# 2. L'objet `Response`

Une requête retourne un objet `Response` :

~~~python
response = requests.get(url)
~~~

Cet objet fournit notamment :

| Attribut / méthode | Signification |
|---|---|
| `response.status_code` | Code numérique de statut HTTP |
| `response.reason` | Description textuelle du statut, par exemple `"OK"` ou `"Not Found"` |
| `response.text` | Corps de la réponse sous forme de texte |
| `response.content` | Corps de la réponse sous forme de bytes |
| `response.json()` | Convertit un corps JSON en objet Python (`dict`, `list`, etc.) |
| `response.url` | URL finale de la réponse |
| `response.headers` | Headers HTTP reçus |
| `response.ok` | `True` si le code est inférieur à 400 |
| `response.raise_for_status()` | Déclenche une `HTTPError` si la réponse correspond à une erreur HTTP |

---

# 3. Les codes de statut HTTP

Le code de statut est un entier de trois chiffres :

~~~python
response.status_code
~~~

Les codes sont regroupés en cinq grandes familles :

| Classe | Signification générale |
|---|---|
| `1xx` | Information |
| `2xx` | Succès |
| `3xx` | Redirection |
| `4xx` | Erreur côté client |
| `5xx` | Erreur côté serveur |

Ces catégories sont définies dans le registre officiel IANA des codes HTTP. [oai_citation:0‡IANA](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml?is_listing=false&utm_source=chatgpt.com)

---

## 4. Codes `1xx` — Information

La requête a été reçue et le traitement continue.

| Code | Nom | Signification simplifiée |
|---:|---|---|
| `100` | Continue | Le client peut continuer sa requête |
| `101` | Switching Protocols | Changement de protocole |
| `102` | Processing | Traitement en cours |
| `103` | Early Hints | Informations préliminaires permettant notamment de préparer la réponse |

Dans une utilisation classique d'une API REST, les codes `1xx` sont rarement ceux que l'application traite directement.

---

# 5. Codes `2xx` — Succès

La requête a été correctement reçue, comprise et traitée.

| Code | Nom | Signification simplifiée |
|---:|---|---|
| `200` | OK | Requête réussie |
| `201` | Created | Ressource créée |
| `202` | Accepted | Requête acceptée mais traitement pas nécessairement terminé |
| `203` | Non-Authoritative Information | Réponse provenant d'une source intermédiaire |
| `204` | No Content | Requête réussie, mais aucune donnée à retourner |
| `205` | Reset Content | Requête réussie, le client doit réinitialiser le contenu |
| `206` | Partial Content | Réponse partielle |

### Les trois plus importants à retenir

~~~text
200 → OK / succès général
201 → ressource créée
204 → succès sans contenu
~~~

Par exemple, après un `POST` créant un utilisateur :

~~~text
POST /users
        ↓
201 Created
~~~

---

# 6. Codes `3xx` — Redirection

Le client doit effectuer une action supplémentaire pour obtenir la ressource.

| Code | Nom | Signification simplifiée |
|---:|---|---|
| `300` | Multiple Choices | Plusieurs possibilités |
| `301` | Moved Permanently | Ressource déplacée définitivement |
| `302` | Found | Redirection temporaire |
| `303` | See Other | Voir une autre URL |
| `304` | Not Modified | Ressource inchangée ; le cache peut être utilisé |
| `307` | Temporary Redirect | Redirection temporaire en conservant la méthode HTTP |
| `308` | Permanent Redirect | Redirection permanente en conservant la méthode HTTP |

`requests` suit automatiquement les redirections dans de nombreux cas. Le comportement peut être contrôlé avec `allow_redirects`. [oai_citation:1‡Requests](https://requests.readthedocs.io/en/latest/user/quickstart/?utm_source=chatgpt.com)

---

# 7. Codes `4xx` — Erreur côté client

La requête reçue par le serveur pose un problème du côté du client.

| Code | Nom | Signification simplifiée |
|---:|---|---|
| `400` | Bad Request | Requête invalide |
| `401` | Unauthorized | Authentification nécessaire ou invalide |
| `402` | Payment Required | Réservé / lié à un paiement |
| `403` | Forbidden | Accès refusé |
| `404` | Not Found | Ressource introuvable |
| `405` | Method Not Allowed | Méthode HTTP non autorisée |
| `406` | Not Acceptable | Réponse acceptable non disponible |
| `408` | Request Timeout | Le serveur a attendu trop longtemps la requête |
| `409` | Conflict | Conflit avec l'état actuel de la ressource |
| `410` | Gone | Ressource définitivement supprimée |
| `411` | Length Required | Longueur de contenu requise |
| `412` | Precondition Failed | Précondition non satisfaite |
| `413` | Content Too Large | Contenu trop volumineux |
| `415` | Unsupported Media Type | Type de contenu non supporté |
| `422` | Unprocessable Content | Requête syntaxiquement correcte mais données non traitables |
| `429` | Too Many Requests | Trop de requêtes |

### Les plus importants à retenir

~~~text
400 → ma requête est mauvaise
401 → je dois m'authentifier / authentification invalide
403 → je suis identifié mais je n'ai pas le droit
404 → ce que je cherche n'existe pas
405 → cette méthode HTTP n'est pas autorisée
409 → conflit
429 → trop de requêtes
~~~

---

# 8. Codes `5xx` — Erreur côté serveur

La requête semble valide, mais le serveur n'arrive pas à la traiter correctement.

| Code | Nom | Signification simplifiée |
|---:|---|---|
| `500` | Internal Server Error | Erreur interne du serveur |
| `501` | Not Implemented | Fonctionnalité non implémentée |
| `502` | Bad Gateway | Un serveur intermédiaire reçoit une mauvaise réponse |
| `503` | Service Unavailable | Service momentanément indisponible |
| `504` | Gateway Timeout | Un serveur intermédiaire attend trop longtemps une réponse |
| `505` | HTTP Version Not Supported | Version HTTP non supportée |

### Les plus importants à retenir

~~~text
500 → le serveur a rencontré une erreur
502 → problème entre serveurs / proxy / gateway
503 → service momentanément indisponible
504 → timeout entre serveurs
~~~

---

# 9. `status_code` et `raise_for_status()`

On peut tester explicitement le code :

~~~python
response = requests.get(url)

if response.status_code == 200:
    print("OK")
~~~

Mais `requests` fournit également :

~~~python
response.raise_for_status()
~~~

Cette méthode déclenche une `requests.exceptions.HTTPError` lorsqu'une réponse correspond à une erreur HTTP. [oai_citation:2‡Requests](https://requests.readthedocs.io/en/stable/api/?utm_source=chatgpt.com)

Exemple :

~~~python
try:
    response = requests.get(url)
    response.raise_for_status()

except requests.HTTPError as error:
    print(error)
~~~

Cela permet de traiter les réponses `4xx` et `5xx` comme des exceptions plutôt que de tester chaque code individuellement.

---

# 10. `requests.codes`

`requests` fournit également `requests.codes` pour éviter d'écrire certains nombres en dur :

~~~python
if response.status_code == requests.codes.ok:
    print("OK")
~~~

Par exemple :

~~~python
requests.codes.ok       # 200
requests.codes.created  # 201
requests.codes.not_found # 404
~~~

La documentation de Requests fournit une table de correspondance entre les noms courants et les codes numériques. [oai_citation:3‡Requests](https://requests.readthedocs.io/en/stable/api/?utm_source=chatgpt.com)

---

# 11. À retenir pour les API REST

~~~text
                HTTP
                 │
        ┌────────┴────────┐
        │                 │
      Requête           Réponse
        │                 │
   GET / POST        status_code
   PUT / PATCH       + body JSON
   DELETE            + headers
```

Les codes à connaître en priorité :

~~~text
200  → OK
201  → Created
204  → No Content

301/302 → Redirection

400  → Bad Request
401  → Unauthorized
403  → Forbidden
404  → Not Found
405  → Method Not Allowed
409  → Conflict
429  → Too Many Requests

500  → Internal Server Error
502  → Bad Gateway
503  → Service Unavailable
504  → Gateway Timeout
~~~

> **Point important : `status_code` indique le résultat HTTP de la requête. Il ne signifie pas nécessairement que le programme Python a rencontré une exception.**
>
> Par exemple, une réponse `404` est une réponse HTTP parfaitement reçue par Python. C'est `raise_for_status()` qui peut ensuite transformer cette situation en `HTTPError`. [oai_citation:4‡Requests](https://requests.readthedocs.io/en/stable/api/?utm_source=chatgpt.com)

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Découper une chaîne | `myString.split(",")` | `my_string.split(",")` | Retourne respectivement un tableau Java (`String[]`) ou une liste Python (`list`) |
| Séparateur simple | `myString.split(",")` | `my_string.split(",")` | Pour un séparateur simple comme `,`, la syntaxe est équivalente |
| Séparateur `.` | `myString.split("\\.")` | `my_string.split("\\.")` | En Java, `String.split()` utilise une **expression régulière (regex)** : `.` signifie « n'importe quel caractère », donc il faut l'échapper avec `\\.` |
| Séparateur `.` en Python | — | `my_string.split(".")` | En Python, `str.split()` prend une chaîne littérale comme séparateur : le `.` n'a donc pas besoin d'être échappé |
| Créer une liste transformée | `List<Integer> newList = list.stream().map(value -> value * 2).toList();` *(Java 16+)* | `new_list = [value * 2 for value in my_list]` | Les deux permettent de transformer chaque élément sans écrire explicitement une boucle classique |
| Version compatible Java 8 | `List<Integer> newList = list.stream().map(value -> value * 2).collect(Collectors.toList());` | `new_list = [value * 2 for value in my_list]` | En Java 8, on utilise les **Streams** et `Collectors.toList()` |
| Filtrer + transformer | `list.stream().filter(value -> value > 10).map(value -> value * 2).toList()` | `[value * 2 for value in my_list if value > 10]` | Les deux langages permettent de combiner filtrage et transformation |
| Boucle classique | `for (int value : list) { ... }` | `for value in my_list: ...` | La compréhension de liste Python est une forme compacte d'une boucle avec construction d'une nouvelle liste |

## Exemple Python

~~~python
prices = [10, 38, 40, 58, 62]

halved = [price / 2 for price in prices]
~~~

Ce qui revient conceptuellement à :

~~~python
halved = []

for price in prices:
    half_price = price / 2
    halved.append(half_price)
~~~

## Équivalent Java

### Java 8

~~~java
List<Integer> prices = Arrays.asList(10, 38, 40, 58, 62);

List<Integer> halved = prices.stream()
        .map(price -> price / 2)
        .collect(Collectors.toList());
~~~

### À retenir

La **list comprehension Python** :

~~~python
new_list = [expression for value in old_list]
~~~

a une bonne correspondance conceptuelle avec :

~~~java
oldList.stream()
       .map(value -> expression)
       .collect(Collectors.toList());
~~~

Ce n'est donc pas exactement la même syntaxe, mais **Java possède bien un mécanisme équivalent avec les Streams**.

> **Point important pour ton contexte Java 8 :** `Stream.map()` existe depuis Java 8, mais `Stream.toList()` n'est arrivé que beaucoup plus tard. Pour du code Java 8, il faut utiliser `collect(Collectors.toList())`.

| Notion | Java | Python | Commentaire |
|---|---|---|---|
| Remplacer une chaîne | `string.replace(".", "#")` | `string.replace(".", "#")` | Remplacement littéral : pas de regex |
| Remplacer toutes les occurrences avec une regex | `string.replaceAll("\\.", "#")` | `re.sub(r"\.", "#", string)` | En Java, `replaceAll()` utilise une regex. En Python, on utilise généralement `re.sub()` |
| Remplacer la première occurrence avec une regex | `string.replaceFirst("\\.", "#")` | `re.sub(r"\.", "#", string, count=1)` | Remplace uniquement la première occurrence |
| Échapper `.` avec `replace()` | `string.replace(".", "#")` | `string.replace(".", "#")` | Pas besoin d'échapper `.` car ce n'est pas une regex |
| Échapper `.` avec une regex | `string.replaceAll("\\.", "#")` | `re.sub(r"\.", "#", string)` | `.` signifie « n'importe quel caractère » dans une regex, donc il faut l'échapper |

## Exemple Java

~~~java
String tags = ".code .today";

String result = tags.replace(".", "#");
// "#code #today"
~~~

Avec une expression régulière :

~~~java
String result = tags.replaceAll("\\.", "#");
// "#code #today"
~~~

### À retenir en Java

~~~text
replace()       → remplacement littéral
replaceAll()    → remplacement avec une regex
replaceFirst()  → première occurrence avec une regex
~~~

### Exemple Python

~~~python
tags = ".code .today"

result = tags.replace(".", "#")
# "#code #today"
~~~

Pour utiliser une regex en Python :

~~~python
import re

result = re.sub(r"\.", "#", tags)
# "#code #today"
~~~

> **Piège classique :** en Java, `replace()` et `replaceAll()` ne sont pas équivalents. `replaceAll()` interprète son premier argument comme une expression régulière.
