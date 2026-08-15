# Les bonnes pratiques de programmation

> **Cours transversal — Java, Python, C++, JavaScript et autres langages**

L'objectif de ce cours n'est pas d'apprendre un langage supplémentaire, mais d'apprendre à **bien programmer**, quel que soit le langage utilisé.

Un langage permet de faire fonctionner un programme.  
Le génie logiciel permet de construire un programme que l'on peut **comprendre, tester, debugger, maintenir et faire évoluer**.

## Introduction

Python est facile à prendre en main.
Mais écrire rapidement du code qui fonctionne n'est pas la même chose
qu'écrire du logiciel maintenable.

Plus le langage laisse de liberté au développeur,
plus les conventions, la lisibilité, le typage explicite,
les tests et l'architecture deviennent importants.

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
---

# 1. Philosophie du cours

## Idée centrale

> **Le compilateur/interpréteur doit comprendre notre code.  
> Mais surtout, un autre développeur doit pouvoir le comprendre.**

Un code peut compiler, s'exécuter correctement et produire le bon résultat... et pourtant être **mauvais**.

Les bonnes pratiques servent notamment à améliorer :

- la lisibilité ;
- la maintenabilité ;
- le débogage ;
- la testabilité ;
- la réutilisabilité ;
- l'évolutivité ;
- la collaboration entre développeurs.

### Une règle importante

> **Une bonne pratique doit toujours être accompagnée de son « pourquoi ».**

Éviter de présenter les règles comme des interdictions arbitraires.

---
## Complément — Initialisation et taille des listes / tableaux

### Python : une liste contient réellement ses éléments

```python
values = [70]
```

crée une liste contenant **un seul élément**, dont la valeur est `70`.

```python
len(values)
# 1
```

Pour créer une liste contenant 70 éléments initialisés à `0` :

```python
values = [0] * 70
```

Pour créer 70 éléments sans valeur métier définie :

```python
values = [None] * 70
```

`None` représente l'absence de valeur.

La liste Python reste cependant **dynamique** :

```python
values.append(42)
```

La liste contient maintenant 71 éléments.

---

### Java : un tableau possède une taille fixe

```java
int[] values = new int[70];
```

crée un tableau de **70 éléments**.

Pour un tableau de type primitif, chaque élément reçoit automatiquement sa valeur par défaut :

```text
int     → 0
double  → 0.0
float   → 0.0f
long    → 0L
boolean → false
char    → '\u0000'
```

Exemple :

```java
int[] values = new int[70];

System.out.println(values[0]);
// 0
```

Pour un tableau contenant des objets :

```java
String[] values = new String[70];
```

les 70 références sont initialisées à `null`.

```java
System.out.println(values[0]);
// null
```

Il n'y a donc pas encore d'objet `String` dans la case.

---

### Différence importante

```java
int[] values = new int[70];
```

→ 70 cases existent immédiatement et chacune contient `0`.

```python
values = [0] * 70
```

→ 70 éléments existent immédiatement et chacun contient `0`.

Ces deux structures sont cependant différentes :

| | Python `list` | Java `array` |
|---|---|---|
| Taille initiale | définie par le nombre d'éléments | définie à la création |
| Taille modifiable | Oui | Non |
| Ajouter un élément | `append()` | Impossible directement |
| Valeur par défaut d'un entier | aucune création implicite | `0` |
| Absence de valeur | `None` | `null` pour les références |
| Taille | `len(list)` | `array.length` |

> **Attention :** une liste Python n'a pas une taille fixe.  
> `values = [None] * 70` crée bien 70 éléments, mais `append()` peut ensuite agrandir la liste.

---

### Liste Python ≠ tableau Java

Il est tentant de traduire :

```java
int[] values = new int[70];
```

par :

```python
values = [0] * 70
```

mais les deux structures n'ont pas exactement le même rôle.

En Python, `list` est une collection dynamique et peut contenir des objets de types différents :

```python
values = [10, "hello", 3.14, True]
```

En Java, un tableau est fortement typé :

```java
int[] values = {10, 20, 30};
```

Pour des données numériques homogènes et volumineuses en Python, des structures spécialisées comme `numpy.ndarray` sont souvent plus adaptées :

```python
import numpy as np

values = np.zeros(70, dtype=int)
```

> **La bonne structure de données dépend du besoin : collection dynamique, tableau typé, file, ensemble, structure numérique, etc.**
---
## Choisir entre types primitifs, wrappers et génériques

Une abstraction plus générique n'est pas toujours la meilleure solution.

En Java, utiliser des wrappers (`Integer`, `Double`, `Long`, `Number`, etc.) peut simplifier considérablement le développement lorsqu'un composant doit manipuler plusieurs types de données.

Par exemple :

~~~java
Number value = ...;

double doubleValue = value.doubleValue();
int intValue = value.intValue();
String stringValue = value.toString();
~~~

Cette approche est pratique et peut rendre le code plus générique.

Mais elle peut avoir un **coût mémoire important** lorsque le logiciel manipule de très grandes quantités de données.

### Exemple

Une structure basée sur des objets :

~~~java
List<Double> values = new ArrayList<>();
~~~

ne possède pas la même représentation mémoire qu'un tableau de primitifs :

~~~java
double[] values = new double[size];
~~~

Dans le premier cas, les éléments sont des objets `Double` accessibles via des références.

Dans le second cas, les valeurs `double` sont stockées directement dans le tableau.

Pour des volumes importants de données — par exemple des données scientifiques issues de longs scans — cette différence peut devenir considérable.

Elle peut avoir des conséquences sur :

- la consommation mémoire ;
- le nombre d'allocations ;
- la pression exercée sur le Garbage Collector ;
- les performances ;
- la fluidité d'une IHM de visualisation ;
- le risque d'`OutOfMemoryError`.

### Ne pas optimiser sans mesurer

Il ne faut cependant pas remplacer systématiquement les objets par des primitifs.

Le bon réflexe est :

> **Choisir d'abord une représentation claire et adaptée au besoin, puis mesurer les performances et la consommation mémoire lorsque les volumes ou les contraintes l'exigent.**

Le profiling permet d'identifier les véritables problèmes.

Avec Java VisualVM, on peut notamment observer :

- la consommation mémoire ;
- l'évolution du heap ;
- l'activité du Garbage Collector ;
- les allocations ;
- les objets conservés en mémoire ;
- l'évolution de l'utilisation mémoire pendant l'exécution.

~~~text
Architecture claire
       ↓
Choix des structures de données
       ↓
Mesure / profiling
       ↓
Identification du goulot d'étranglement
       ↓
Optimisation ciblée
       ↓
Nouvelle mesure
~~~

### À retenir

> **La généricité est un outil, pas une fin en soi.**

> **La simplicité d'utilisation d'un wrapper ou d'une abstraction doit être mise en balance avec son coût réel lorsque les volumes de données deviennent importants.**

> **Ne pas optimiser prématurément, mais ne pas ignorer non plus les caractéristiques mémoire des structures de données.**

Dans certains cas, passer d'une représentation générique basée sur des objets à une représentation basée sur des types primitifs peut transformer radicalement les performances d'une application.

**Mesurer avec un profiler avant et après l'optimisation permet de vérifier que l'amélioration est réelle.**
---

# 2. Écrire du code lisible

## 2.1 Une instruction par ligne

### À éviter

~~~java
int result = Integer.parseInt(getVariable()) + getIncrement() / magicNumber.doubleValue();
~~~

Le code peut fonctionner, mais plusieurs opérations sont mélangées.

### Préférer

~~~java
double variable = getVariable();
int increment = getIncrement();
double magicValue = magicNumber.doubleValue();

int value = Integer.parseInt(variable);
int result = value + increment;
~~~

### Pourquoi ?

Une instruction par ligne permet :

- de lire le code étape par étape ;
- de poser un breakpoint ;
- d'inspecter les variables ;
- d'identifier précisément l'instruction qui échoue ;
- de comprendre plus facilement une stacktrace.

> **Le compilateur comprend une grosse ligne.  
> Le développeur qui doit la debugger vous remerciera si vous l'avez découpée.**

---

# 3. Faciliter le debugging

Si une exception indique :

~~~text
NullPointerException
MyClass.java:40
~~~

et que la ligne 40 contient dix opérations imbriquées, il faut déterminer quelle opération est responsable.

Avec des variables intermédiaires :

~~~java
String value = getValue();
int increment = getIncrement();
double result = calculate(value, increment);
~~~

chaque étape peut être inspectée.

> **Une stacktrace vous donne une ligne.  
> Donnez-lui une chance de vous donner une information utile.**

---

# 4. Éviter les chaînes d'appels inutiles

### À éviter

~~~java
result = calculate(getValue().trim().toLowerCase().replace(...));
~~~

Plusieurs opérations sont cachées dans une seule expression.

### Préférer

~~~java
String value = getValue();
String trimmedValue = value.trim();
String normalizedValue = trimmedValue.toLowerCase();

result = calculate(normalizedValue);
~~~

Cela augmente légèrement le nombre de lignes, mais améliore fortement la compréhension et le debugging.

---

# 5. Donner des noms explicites aux variables

### À éviter

~~~java
int x;
int n;
int v;
~~~

### Préférer

~~~java
int numberOfAttempts;
int numberOfUsers;
int currentValue;
~~~

Le nom d'une variable doit permettre de comprendre **ce qu'elle représente sans devoir lire tout le code autour**.

> `x` est rapide à écrire.  
> `numberOfAttempts` est rapide à comprendre.

---

# 6. Respecter les conventions de nommage du langage

Chaque langage possède ses conventions.

### Java

~~~java
class UserManager

private int numberOfUsers;

public void calculateStatus()
~~~

### Python

~~~python
class UserManager:

    number_of_users = 0

    def calculate_status():
        ...
~~~

### À retenir

Utiliser les conventions de l'écosystème :

- `camelCase`
- `PascalCase`
- `snake_case`
- constantes ;
- attributs ;
- variables locales ;
- méthodes ;
- classes.

> **Le code doit avoir le dialecte du langage dans lequel il est écrit.**

---

# 7. Utiliser l'anglais dans le code

Privilégier l'anglais pour :

- noms de classes ;
- méthodes ;
- variables ;
- constantes ;
- commentaires techniques ;
- documentation du code.

### À éviter

~~~java
int nombreDeTentatives;
~~~

### Préférer

~~~java
int numberOfAttempts;
~~~

Éviter également les accents dans les identifiants.

Le code est souvent partagé entre des personnes de nationalités différentes et avec des outils, frameworks et bibliothèques utilisant majoritairement l'anglais.

> **Le code parle anglais. Les explications peuvent parler français.**

---

# 8. Une fonction = une responsabilité

Une fonction ou méthode devrait avoir une responsabilité clairement identifiable.

### À éviter

~~~java
testIfOkAndDestroy();
~~~

Le nom révèle déjà un problème : la méthode semble faire au moins deux choses.

### Préférer

~~~java
boolean isValid();
destroy();
~~~

Une méthode doit idéalement pouvoir être décrite simplement :

> « Cette méthode fait X. »

et non :

> « Cette méthode vérifie X, modifie Y, sauvegarde Z et détruit W. »

---

# 9. Éviter les fonctions trop longues

Une fonction longue est souvent un signal qu'elle contient plusieurs responsabilités.

Découper permet :

- de mieux lire ;
- de mieux tester ;
- de réutiliser certaines parties ;
- de localiser les erreurs ;
- de faire évoluer une partie sans modifier tout le reste.

---

# 10. Réutiliser une valeur calculée

### À éviter

~~~java
while (calculateStatus()) {
    ...
}
~~~

La méthode `calculateStatus()` est appelée à chaque itération.

Cela peut être parfaitement volontaire, mais il faut se poser la question :

> **La valeur doit-elle réellement être recalculée à chaque tour ?**

Si elle est réutilisée :

~~~java
boolean status = calculateStatus();

while (status) {
    ...
}
~~~

On gagne également en lisibilité et en possibilité d'inspection.

---

# 11. Éviter les valeurs magiques

### À éviter

~~~java
if (temperature > 75) {
    ...
}
~~~

Que représente `75` ?

### Préférer

~~~java
final double MAX_TEMPERATURE = 75;

if (temperature > MAX_TEMPERATURE) {
    ...
}
~~~

Le nom donne immédiatement du sens à la valeur.

Même principe pour :

- seuils ;
- durées ;
- tailles ;
- codes ;
- états ;
- nombres utilisés plusieurs fois.

> **Un nombre sans nom est souvent une information sans contexte.**

---

# 12. Décomposer les conditions complexes

### À éviter

~~~java
if (value > 10 && status == ACTIVE && user != null && user.isAuthorized()) {
    ...
}
~~~

### Préférer lorsque cela améliore la compréhension

~~~java
boolean validValue = value > 10;
boolean active = status == ACTIVE;
boolean validUser = user != null;
boolean authorized = user.isAuthorized();

if (validValue && active && validUser && authorized) {
    ...
}
~~~

Les variables intermédiaires permettent :

- de comprendre chaque condition ;
- de debugger ;
- de tester chaque élément séparément.

---

# 13. Ne pas mettre une instruction énorme dans un `if`

> **Une condition doit être lisible avant d'être compacte.**

Si une condition nécessite plusieurs secondes pour être comprise, elle mérite probablement d'être décomposée.

---

# 14. `if` : privilégier la simplicité

### Java

~~~java
if (isActive) {
    ...
}
~~~

### Python

~~~python
if is_active:
    ...
~~~

Éviter :

~~~java
if (isActive == true) {
    ...
}
~~~

ou :

~~~python
if is_active == True:
    ...
~~~

Lorsque la variable est déjà un booléen, la comparaison à `true` est redondante.

---

# 15. Choisir la bonne structure de contrôle

Une longue succession de conditions n'est pas toujours la meilleure solution.

### Plusieurs égalités sur une même valeur

Préférer une structure de sélection lorsque le langage en fournit une :

~~~java
switch (value) {
    case 1:
    case 2:
    case 3:
        doSomething();
        break;

    case 4:
        doSomethingElse();
        break;
}
~~~

Plutôt que :

~~~java
if (value == 1 || value == 2 || value == 3) {
    doSomething();
} else if (value == 4) {
    doSomethingElse();
}
~~~

En Python moderne :

~~~python
match value:
    case 1 | 2 | 3:
        do_something()
    case 4:
        do_something_else()
~~~

> **Choisir la structure qui exprime le mieux l'intention.**

---

# 16. Attention aux `return`

## Convention pédagogique proposée

Privilégier une sortie clairement identifiable en fin de méthode lorsque cela améliore la lisibilité et la stratégie de test.

### Exemple

~~~java
boolean calculateStatus() {

    boolean status = statusInt == 0;

    return status;
}
~~~

Plutôt que de multiplier les sorties :

~~~java
boolean calculateStatus() {

    if (statusInt == 0) {
        return true;
    }

    return false;
}
~~~

Et surtout :

~~~java
boolean calculateStatus() {

    if (statusInt == 0) {
        return true;
    } else {
        return false;
    }
}
~~~

est inutilement verbeux.

### Attention

Ce principe est une **convention de style**, pas une loi universelle du développement logiciel.

Dans certains contextes, un retour anticipé peut améliorer considérablement la lisibilité :

~~~java
if (value == null) {
    return;
}
~~~

Le cours devra apprendre à comprendre **le compromis**, plutôt qu'à appliquer mécaniquement une règle.

---

# 17. Éviter la duplication

Si le même code apparaît plusieurs fois, se demander :

> **Pourquoi cette logique existe-t-elle à plusieurs endroits ?**

La duplication augmente le risque d'incohérence.

Si une règle métier change, il faudra modifier plusieurs endroits.

Chercher à centraliser les comportements communs.

---

# 18. Commentaires : expliquer le pourquoi

Un commentaire ne doit pas simplement répéter le code.

### Peu utile

~~~java
// Increment i
i++;
~~~

Le code est déjà explicite.

### Plus utile

~~~java
// Retry three times because the PLC may need a few milliseconds
// to update its state after the command.
retryCount++;
~~~

Le commentaire explique **pourquoi** le code fait quelque chose de particulier.

---

# 19. Commenter les algorithmes complexes

Pour un algorithme difficile à comprendre :

- expliquer le principe ;
- expliquer les hypothèses ;
- expliquer les choix particuliers ;
- éventuellement donner une référence.

Privilégier l'anglais dans les commentaires techniques.

---

# 20. Le code doit être testable

Une bonne architecture facilite les tests.

Se demander :

- Puis-je tester cette méthode indépendamment ?
- La méthode fait-elle trop de choses ?
- Puis-je contrôler ses entrées ?
- Puis-je vérifier sa sortie ?
- Puis-je reproduire facilement un cas d'erreur ?

> **Si une fonction est difficile à tester, elle est parfois difficile à comprendre parce qu'elle fait trop de choses.**

---

# 21. Le code doit être maintenable

Le vrai test d'un programme n'est pas seulement :

> « Est-ce qu'il fonctionne aujourd'hui ? »

Mais aussi :

> « Est-ce qu'une autre personne pourra le modifier dans six mois sans avoir peur de casser quelque chose ? »

---

# 22. Penser au développeur de demain

Quand on écrit du code, trois personnes peuvent avoir besoin de le comprendre :

1. celui qui l'écrit ;
2. celui qui le maintient ;
3. celui qui devra le debugger à 17h30 un vendredi soir.

La troisième personne est souvent celle qu'il faut garder en tête.

---

# 23. Les bonnes pratiques sont indépendantes du langage

Les syntaxes changent :

~~~java
if (condition) {
}
~~~

~~~python
if condition:
~~~

Mais les principes restent :

- lisibilité ;
- découpage ;
- responsabilité unique ;
- nommage ;
- testabilité ;
- maintenabilité ;
- gestion des erreurs ;
- réduction de la duplication ;
- documentation ;
- architecture.

> **Changer de langage ne signifie pas repartir de zéro en génie logiciel.**

---

# 24. Une bonne pratique doit avoir une raison

Ne pas apprendre :

> « Il faut faire comme ça parce que c'est la règle. »

Apprendre :

> « Voici le problème que cette pratique permet d'éviter. »

Exemple :

~~~text
Règle
  ↓
Une instruction par ligne
  ↓
Pourquoi ?
  ↓
Debug + breakpoint + stacktrace + lisibilité
  ↓
Compréhension
~~~

---

# 25. Philosophie générale

> **Le code est écrit une fois, mais il est lu et maintenu beaucoup plus souvent.**

> **Écrire du code compréhensible est une compétence technique.**

> **La qualité d'un programme ne se mesure pas uniquement à son résultat, mais aussi à la facilité avec laquelle il peut être compris, testé, corrigé et faire évoluer.**

---

# 26. Exemples à ajouter progressivement

Cette section servira de boîte à outils pour les futures règles :

- variables intermédiaires ;
- nommage ;
- constantes ;
- fonctions courtes ;
- responsabilité unique ;
- duplication ;
- conditions complexes ;
- boucles ;
- gestion des exceptions ;
- stacktraces ;
- logs ;
- assertions ;
- tests unitaires ;
- tests d'intégration ;
- design patterns ;
- interfaces ;
- encapsulation ;
- immutabilité ;
- dépendances ;
- injection de dépendances ;
- architecture ;
- séparation des responsabilités ;
- configuration vs code ;
- gestion des ressources ;
- concurrence et threads ;
- sécurité ;
- performances ;
- documentation ;
- Git et travail collaboratif.

---

# 27. Version anglaise

Le cours sera également disponible en anglais.

Principe :

> **Learn the rule → Understand the problem → Understand the solution → Apply it in any language.**

L'objectif est de produire un cours accessible aux débutants mais suffisamment rigoureux pour constituer une introduction au **génie logiciel**, et pas simplement une liste de recettes de syntaxe.

---

# Notes de conception du cours

- Cours transversal, indépendant d'un langage particulier.
- Exemples principalement en Java et Python, avec possibilité d'ajouter C++, JavaScript, etc.
- Approche progressive.
- Vulgarisation par analogies et exemples concrets.
- Toujours expliquer le **pourquoi** derrière une bonne pratique.
- Distinguer les principes fondamentaux des conventions de style.
- Éviter les règles dogmatiques lorsqu'il existe des cas où leur application peut être discutable.
- Prévoir une version française et une version anglaise.
- Moderniser la présentation avec la gamme graphique des nouveaux cours.
- Intégrer progressivement ce cours au catalogue de cours gratuits en ligne.
- Prévoir une version HTML interactive et une version PDF.
- Utiliser des exemples courts et facilement exécutables.
- Ajouter progressivement des exemples « mauvais code → problème → amélioration → pourquoi ».

---

# Phrase directrice

> **Bien programmer, ce n'est pas seulement apprendre à faire fonctionner une machine.  
> C'est apprendre à écrire du code que des humains peuvent comprendre, maintenir et faire évoluer.**
---
# Programmer contre une abstraction, pas contre une implémentation

## Le principe

En programmation orientée objet, lorsque plusieurs classes implémentent le même contrat, il est généralement préférable de **déclarer les variables avec le type le plus générique adapté au besoin**.

L'idée est simple :

> **Le code métier doit dépendre de ce dont il a besoin, pas de ce qu'il n'a pas besoin de connaître.**

### Exemple

Plutôt que :

~~~java
ArrayList<MyObject> list = new ArrayList<>();
~~~

préférer :

~~~java
List<MyObject> list = new ArrayList<>();
~~~

Le reste du code utilise alors l'interface `List` :

~~~java
list.add(value);
list.clear();

for (MyObject value : list) {
    ...
}
~~~

Le code ne dépend pas inutilement de `ArrayList`.

L'implémentation peut être remplacée :

~~~java
List<MyObject> list = new LinkedList<>();
~~~

sans modifier le code qui manipule la liste.

---

## Pourquoi ?

Supposons qu'un logiciel utilise partout :

~~~java
ArrayList<MyObject> list = new ArrayList<>();
~~~

Si l'architecture impose plus tard une autre implémentation, il faudra rechercher et modifier toutes les dépendances à `ArrayList`.

Avec :

~~~java
List<MyObject> list = new ArrayList<>();
~~~

le choix de l'implémentation est localisé à l'instanciation.

> **Plus une dépendance à une implémentation est localisée, plus le logiciel est facile à faire évoluer.**

---

## Attention aux casts

Le polymorphisme fonctionne correctement uniquement si l'on reste sur l'abstraction dont on a réellement besoin.

À éviter :

~~~java
List<Object> list = new LinkedList<>();

Object item = ((LinkedList<Object>) list).poll();
~~~

Le cast réintroduit une dépendance à `LinkedList`.

Si le code nécessite `poll()`, le problème est probablement que `List` n'est pas la bonne abstraction.

On peut alors utiliser directement une interface adaptée au besoin :

~~~java
Deque<Object> list = new LinkedList<>();

Object item = list.pollFirst();
~~~

Et l'implémentation peut ensuite changer :

~~~java
Deque<Object> list = new ArrayDeque<>();
~~~

Le code métier reste basé sur `Deque`.

> **Si vous devez caster systématiquement vers une implémentation concrète, demandez-vous si vous n'avez pas choisi la mauvaise abstraction.**

---

# Choisir l'interface correspondant au besoin

L'objectif n'est pas de choisir systématiquement « l'interface la plus générique possible ».

Il faut choisir **l'abstraction la plus générique qui exprime réellement les opérations nécessaires**.

Par exemple :

~~~text
Collection
    │
    ├── List
    │     ├── ArrayList
    │     └── LinkedList
    │
    ├── Set
    │
    └── Queue / Deque
          └── ...
~~~

Si le code a uniquement besoin de :

- ajouter ;
- supprimer ;
- accéder à un élément ;
- parcourir ;

`List` peut être suffisante.

Si le code a besoin d'opérations de file :

- `pollFirst()`
- `pollLast()`
- `addFirst()`
- `addLast()`

alors `Deque` peut être une abstraction plus adaptée.

---

# Factory : centraliser le choix de l'implémentation

On peut aller plus loin et isoler complètement la création des objets.

~~~java
public static List<MyObject> createList() {
    return new ArrayList<>();
}
~~~

Le code métier utilise alors :

~~~java
List<MyObject> list = createList();
~~~

Si l'implémentation doit évoluer, le changement est centralisé dans la factory.

> **La factory permet de séparer la décision « quelle implémentation créer ? » de la décision « comment utiliser l'objet ? ».**

---

# Pourquoi cette pratique facilite la maintenance ?

Imaginez un logiciel qui possède plusieurs points d'extension :

~~~text
                    Architecture
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       Driver          Format         Service
          │              │              │
          ▼              ▼              ▼
      Interface       Interface      Interface
          │              │
       ┌──┴──┐        ┌──┴──┐
       │     │        │     │
    DriverA DriverB FormatA FormatB
~~~

Le code métier dépend des interfaces.

Lorsqu'un nouveau besoin apparaît :

> « Il faut ajouter un nouveau driver. »

on peut créer une nouvelle implémentation de l'interface existante sans réécrire toute l'architecture.

Même principe pour un nouveau format de fichier.

---

# Concevoir avant de coder

Une architecture bien pensée peut demander davantage de travail au début.

Mais ce travail peut réduire considérablement le coût des évolutions futures.

~~~text
Conception / architecture
          ↓
     Abstractions
          ↓
       Découplage
          ↓
   Points d'extension
          ↓
Nouvelles fonctionnalités
          ↓
Modification localisée
~~~

Une mauvaise architecture peut produire l'effet inverse :

~~~text
Nouvelle fonctionnalité
          ↓
Modification du code existant
          ↓
Régression
          ↓
Modification d'autres composants
          ↓
Nouveaux tests
          ↓
Nouveaux effets de bord
          ↓
Coût croissant
~~~

> **Le temps passé à concevoir une architecture n'est pas nécessairement du temps perdu avant de coder. Il peut être un investissement qui réduit le coût de maintenance futur.**

---

# Une analogie

Construire une maison avec des murs porteurs bien positionnés demande davantage de réflexion au départ.

Mais si l'on veut déplacer une cloison plus tard, on peut le faire sans reconstruire toute la maison.

Une architecture logicielle bien conçue fonctionne de la même manière :

> **Prévoir les points d'extension permet de modifier une partie du système sans devoir reconstruire tout le système.**

---

# Principe à retenir

> **Programmer contre une abstraction permet de changer une implémentation sans modifier tout le code qui l'utilise.**

Et surtout :

> **Ne choisissez pas l'abstraction la plus générique possible. Choisissez l'abstraction la plus générique qui exprime correctement le besoin.**

---

## À retenir

- Dépendre d'une interface plutôt que d'une implémentation lorsque c'est pertinent.
- Déclarer les variables avec le type abstrait adapté.
- Réserver le choix de l'implémentation à l'instanciation.
- Éviter les casts vers des classes concrètes.
- Si un cast est nécessaire, vérifier si l'abstraction utilisée est réellement la bonne.
- Utiliser une factory lorsque la création doit être centralisée.
- Concevoir des points d'extension lorsque le logiciel est amené à évoluer.
- Penser à la maintenance dès la conception.

> **Une bonne architecture ne cherche pas seulement à faire fonctionner le logiciel aujourd'hui. Elle prépare le logiciel à changer demain.**