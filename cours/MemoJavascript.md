# JavaScript — Mémo

## 1. Ce que je connais déjà
- Variables : let, const
- Types et conversions
- Conditions / boucles
- Fonctions
- Arrays / objets
- Méthodes usuelles
- DOM
- Événements
- JSON
- Manipulation HTML/CSS
- etc.

## 2. Points à surveiller pendant Mimo
Noter uniquement les notions réellement nouvelles ou oubliées.

### Nouveautés
- ...

### À revoir
- ...

### Particularités JavaScript
- ...
- ...

## 3. JavaScript moderne à retenir
- let / const plutôt que var
- fonctions fléchées
- destructuring
- spread / rest
- template literals
- optional chaining `?.`
- nullish coalescing `??`
- modules
- Promises
- async / await
- etc.

## 4. DOM et navigateur
- querySelector()
- addEventListener()
- manipulation des éléments
- classes CSS
- formulaires
- événements
- ...

## 5. JavaScript vs Java

| Concept | JavaScript | Java |
|---|---|---|
| Typage | dynamique | statique |
| Classes | prototype-based historiquement, classes modernes | classes / objets |
| Héritage | prototype chain | héritage de classes/interfaces |
| Fonction | objet de première classe | méthode / lambda |
| `this` | contexte d'appel | instance courante |
| Null | `null` + `undefined` | `null` |
| Collections | Array / Object / Map / Set | List / Map / Set... |
| Asynchrone | central dans le langage/environnement | mécanismes différents |
| Exécution | moteur JS | JVM |
| Modules | ES Modules | packages / modules Java |

## 6. Ce que je sais réellement faire
Ne pas confondre :
- connaissance syntaxique
- capacité à lire du code
- capacité à modifier/dépanner
- capacité à développer
- expertise

### Niveau actuel
⭐⭐⭐☆☆

### Expérience concrète
- Lecture et modification de JavaScript
- Dépannage
- Intégration HTML/CSS
- ...

# JavaScript — Opérateurs

## 1. Affectation

| Opérateur | Signification | Exemple |
|---|---|---|
| `=` | affectation | `x = 10` |
| `+=` | addition + affectation | `x += 5` |
| `-=` | soustraction + affectation | `x -= 5` |
| `*=` | multiplication + affectation | `x *= 5` |
| `/=` | division + affectation | `x /= 5` |
| `%=` | modulo + affectation | `x %= 5` |
| `**=` | puissance + affectation | `x **= 2` |

---

## 2. Comparaison

| Opérateur | Signification | Exemple |
|---|---|---|
| `===` | strictement égal | `5 === 5` → `true` |
| `!==` | strictement différent | `5 !== 3` → `true` |
| `==` | égalité avec conversion de type | `5 == "5"` → `true` |
| `!=` | différent avec conversion de type | `5 != "3"` → `true` |
| `>` | supérieur à | `5 > 3` |
| `<` | inférieur à | `5 < 3` |
| `>=` | supérieur ou égal | `5 >= 5` |
| `<=` | inférieur ou égal | `5 <= 5` |

### À retenir

~~~javascript
5 === "5"   // false
5 == "5"    // true
~~~
# JavaScript — JSON : conversion et parsing

JavaScript fournit l'objet natif `JSON` pour convertir des objets JavaScript en chaînes JSON et inversement.

## 1. Objet JavaScript → chaîne JSON

Utiliser :

`JSON.stringify()`

~~~javascript
const concert = {
    band: "Super Carrots",
    music: "Indie"
};

const jsonString = JSON.stringify(concert);

console.log(jsonString);
~~~

Résultat :

~~~text
{"band":"Super Carrots","music":"Indie"}
~~~

⚠️ `JSON.stringify()` produit une **chaîne de caractères** contenant du JSON.

C'est notamment utile pour :
- envoyer des données via une API ;
- stocker des données ;
- sérialiser un objet JavaScript.

---

## 2. Chaîne JSON → objet JavaScript

Utiliser :

`JSON.parse()`

~~~javascript
const dog = '{"name":"Rocko","age":3}';

const dogObject = JSON.parse(dog);

console.log(dogObject);
~~~

On obtient alors un **objet JavaScript** que l'on peut manipuler normalement :

~~~javascript
console.log(dogObject.name);
console.log(dogObject.age);
~~~

---

## À retenir

| Conversion | Méthode | Résultat |
|---|---|---|
| Objet JS → JSON | `JSON.stringify(obj)` | chaîne JSON |
| JSON → Objet JS | `JSON.parse(json)` | objet JavaScript |

### Mémo

**stringify = transformer en string**

~~~text
JS Object
   ↓
JSON.stringify()
   ↓
JSON string
~~~

**parse = interpréter/analyser**

~~~text
JSON string
   ↓
JSON.parse()
   ↓
JS Object
~~~

### Point important

JSON n'est pas exactement un objet JavaScript : c'est un **format texte d'échange de données**.

Par exemple :

~~~javascript
const obj = { name: "Rocko", age: 3 };   // objet JS

const json = JSON.stringify(obj);        // chaîne JSON

const obj2 = JSON.parse(json);            // objet JS
~~~

Le cycle complet est donc :

**Objet JS → `stringify()` → JSON → `parse()` → Objet JS**

# Arrow functions en JavaScript

Les **arrow functions** (`=>`) ont été introduites avec **ES6**.

Elles permettent d'écrire des fonctions de manière plus concise et sont
particulièrement utilisées lorsqu'une petite fonction est passée en paramètre
à une autre fonction.

Elles ressemblent beaucoup aux **expressions lambda de Java**.

---

## 1. Syntaxe classique

Une fonction classique :

~~~javascript
function getGreeting() {
    return "Hello";
}
~~~

Peut être écrite sous forme d'arrow function :

~~~javascript
const getGreeting = () => "Hello";
~~~

On peut la lire comme :

~~~
getGreeting
    ↓
une fonction
    ↓
aucun paramètre
    ↓
retourne "Hello"
~~~

---

## 2. Avec un paramètre

Fonction classique :

~~~javascript
function double(x) {
    return x * 2;
}
~~~

Arrow function :

~~~javascript
const double = (x) => x * 2;
~~~

Avec **un seul paramètre**, les parenthèses sont facultatives :

~~~javascript
const double = x => x * 2;
~~~

Pour la lisibilité, conserver les parenthèses peut néanmoins être préférable
selon le contexte et les conventions du projet.

---

## 3. Avec plusieurs paramètres

~~~javascript
const add = (a, b) => a + b;
~~~

Les parenthèses sont obligatoires avec plusieurs paramètres.

---

## 4. Avec plusieurs instructions

Lorsque le corps contient plusieurs instructions, on utilise des accolades.

~~~javascript
const calculate = (a, b) => {
    const result = a + b;
    return result;
};
~~~

Dans ce cas, le `return` est nécessaire.

### Attention

Il existe donc deux syntaxes :

~~~javascript
// Retour implicite
const double = x => x * 2;
~~~

~~~javascript
// Retour explicite
const double = x => {
    return x * 2;
};
~~~

Avec un corps sans accolades, l'expression est **retournée implicitement**.

---

## 5. Pourquoi les utilise-t-on souvent ?

Les arrow functions sont particulièrement pratiques lorsqu'une petite fonction
est utilisée localement, par exemple avec :

- `map()`
- `filter()`
- `reduce()`
- `forEach()`
- `sort()`

Exemple :

~~~javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(x => x * 2);
~~~

Ici :

~~~javascript
x => x * 2
~~~

est une petite fonction passée à `map()`.

Dans ce contexte, l'écriture compacte est particulièrement adaptée.

---

## 6. Ce n'est pas uniquement une question de nombre de lignes

Il serait réducteur de considérer une arrow function comme simplement une
fonction « écrite plus court ».

Elle possède également une particularité importante concernant `this`.

Une arrow function **ne possède pas son propre `this`**.
Elle utilise le `this` du contexte dans lequel elle a été créée.

C'est notamment utile dans certains callbacks et dans les méthodes de classes.

---

## 7. Arrow function et performance

Il ne faut pas choisir une arrow function dans le but d'obtenir un code
plus performant.

Le principal intérêt est :

- une syntaxe concise ;
- une expression naturelle pour les petites fonctions ;
- un comportement particulier de `this`.

Le choix entre `function` et `=>` est donc principalement une question de
**sémantique, de contexte et de lisibilité**, pas d'optimisation des
performances.

---

## 8. Analogie avec Java

Pour un développeur Java, on peut faire le rapprochement avec une lambda.

Java :

~~~java
x -> x * 2
~~~

JavaScript :

~~~javascript
x => x * 2
~~~

L'idée est similaire : représenter un petit comportement que l'on peut
notamment transmettre à une autre fonction.

---

## 9. Ne pas utiliser une arrow function partout

Une arrow function n'est pas systématiquement plus lisible.

Pour une fonction métier importante ou complexe, une fonction classique peut
être beaucoup plus explicite :

~~~javascript
function calculateDifference(startDate, endDate) {
    // plusieurs traitements métier...
    const result = ...;
    return result;
}
~~~

Plutôt que de chercher systématiquement à réduire le nombre de lignes,
il faut conserver comme objectif principal :

> **Le code doit rester facile à comprendre et à maintenir.**

Les arrow functions sont particulièrement intéressantes pour les fonctions
courtes et locales.

---

## À retenir

| Écriture | Usage typique |
|---|---|
| `function name() { ... }` | Fonction nommée, logique métier, fonction complexe |
| `const f = () => ...` | Fonction stockée dans une variable |
| `x => x * 2` | Petite fonction / callback |
| `(a, b) => a + b` | Petite fonction avec plusieurs paramètres |

### Idée essentielle

**Arrow function ≈ lambda Java**, avec une syntaxe propre à JavaScript et
un comportement particulier de `this`.

Ce n'est donc pas simplement :

> « une fonction classique en moins de lignes ».

Et si une écriture plus courte rend le code moins lisible, **la version
plus explicite reste parfaitement légitime**.


