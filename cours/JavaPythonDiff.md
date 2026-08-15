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


