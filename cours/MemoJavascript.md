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

# Appels asynchrones en JavaScript

JavaScript permet d'exécuter certaines opérations de manière **asynchrone** :
le programme peut continuer à exécuter du code sans attendre la fin de
l'opération.

C'est particulièrement important pour :

- les appels réseau ;
- les API REST ;
- les opérations longues ;
- les timers ;
- certaines opérations d'entrée/sortie.

---

## 1. Synchrone vs asynchrone

### Code synchrone

Le code suivant est exécuté dans l'ordre :

~~~javascript
console.log("Début");
console.log("Traitement");
console.log("Fin");
~~~

Résultat :

~~~text
Début
Traitement
Fin
~~~

Chaque instruction attend que la précédente soit terminée.

### Code asynchrone

Avec une opération asynchrone, le programme peut continuer avant que
l'opération soit terminée.

~~~javascript
console.log("Début");

setTimeout(() => {
    console.log("Traitement terminé");
}, 2000);

console.log("Fin");
~~~

Résultat :

~~~text
Début
Fin
Traitement terminé
~~~

Le `setTimeout()` programme l'exécution du callback après le délai demandé.

---

## 2. `setTimeout()` : attention au vocabulaire

En JavaScript :

~~~javascript
setTimeout(callback, 2000);
~~~

signifie :

> Programmer l'exécution de `callback` après environ 2000 ms.

Ce n'est **pas un timeout au sens "attendre au maximum 2 secondes une
réponse"**.

Le délai indique quand le callback pourra être exécuté au plus tôt, sous
réserve que l'environnement JavaScript soit disponible pour l'exécuter.

Par exemple :

~~~javascript
setTimeout(() => {
    console.log("Bonjour");
}, 2000);
~~~

Le programme n'est pas bloqué pendant deux secondes.

### Comparaison avec le Java classique

En Java, le terme *timeout* est fréquemment utilisé pour désigner une
**limite de temps d'attente** :

> « Si l'opération ne répond pas avant cette durée, considérer qu'elle a
> échoué. »

Ce concept est différent du `setTimeout()` JavaScript.

En JavaScript, `setTimeout()` est avant tout un **mécanisme de planification
d'une fonction différée**.

---

# 3. Les callbacks

Une première manière de gérer l'asynchronisme consiste à fournir une
fonction qui sera appelée lorsque l'opération est terminée.

~~~javascript
function add(number1, number2, callback) {
    const result = number1 + number2;
    callback(result);
}

function logResult(result) {
    console.log(`The result is: ${result}`);
}

add(2, 3, logResult);
~~~

Ici `logResult` est un **callback**.

Le principe est :

~~~text
lancer une opération
       ↓
opération terminée
       ↓
appeler le callback
~~~

Les callbacks sont également utilisés par de nombreuses méthodes JavaScript
comme `map()` :

~~~javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);
~~~

Dans cet exemple, le callback est :

~~~javascript
number => number * 2
~~~

---

# 4. Les Promises

Les **Promises** proposent une manière structurée de représenter le résultat
futur d'une opération asynchrone.

Une Promise peut être dans différents états :

~~~text
pending
   │
   ├──→ fulfilled
   │
   └──→ rejected
~~~

### `pending`

L'opération est encore en cours.

### `fulfilled`

L'opération s'est terminée avec succès.

### `rejected`

L'opération a échoué.

---

# 5. `Promise` est-elle une classe JavaScript ?

Oui.

`Promise` est un **objet intégré au langage JavaScript** et possède un
constructeur permettant de créer des instances de Promise.

On peut donc écrire :

~~~javascript
const promise = new Promise((resolve, reject) => {
    // opération asynchrone
});
~~~

`Promise` est donc comparable, dans son principe, à une classe existante
comme celles que l'on utilise en Java.

Mais chaque :

~~~javascript
new Promise(...)
~~~

crée une **nouvelle instance** représentant une opération particulière.

On peut donc avoir ses propres Promises sans avoir besoin de créer une
classe `Promise` personnalisée.

---

# 6. `resolve()` et `reject()`

Lorsqu'on crée une Promise, son constructeur reçoit une fonction à laquelle
JavaScript fournit deux fonctions :

~~~javascript
(resolve, reject)
~~~

On utilise :

~~~javascript
resolve(result);
~~~

lorsque l'opération réussit.

Et :

~~~javascript
reject(error);
~~~

lorsqu'elle échoue.

Exemple :

~~~javascript
function orderCake() {
    return new Promise((resolve, reject) => {
        const available = true;

        if (available) {
            resolve("Cake is available.");
        } else {
            reject("Cake is sold out.");
        }
    });
}
~~~

La Promise est d'abord `pending`.

Puis elle devient soit :

~~~text
resolve()
   ↓
fulfilled
~~~

soit :

~~~text
reject()
   ↓
rejected
~~~

---

# 7. `.then()`

`.then()` permet de définir ce qui doit être exécuté lorsque la Promise
est résolue.

~~~javascript
const order = orderCake();

order.then(function(successValue) {
    console.log(successValue);
});
~~~

Avec une arrow function :

~~~javascript
order.then(successValue => {
    console.log(successValue);
});
~~~

Le principe est :

~~~text
Promise
   ↓
fulfilled
   ↓
.then(...)
   ↓
traitement du résultat
~~~

---

# 8. `.catch()`

`.catch()` permet de gérer le rejet d'une Promise.

~~~javascript
const order = orderCake();

order
    .then(handleSuccess)
    .catch(handleFailure);
~~~

On peut définir :

~~~javascript
function handleSuccess(successValue) {
    console.log(successValue);
}

function handleFailure(failureValue) {
    console.log(failureValue);
}
~~~

Le principe devient :

~~~text
                    ┌──→ .then() ──→ succès
Promise ────────────┤
                    └──→ .catch() ─→ erreur
~~~

---

# 9. Chaîner plusieurs `.then()`

Plusieurs opérations asynchrones peuvent dépendre les unes des autres.

On peut donc écrire :

~~~javascript
checkAvailability()
    .then(handleIsAvailable)
    .then(handleCheckPrice)
    .catch(handleFailure);
~~~

Le résultat d'une étape peut servir à l'étape suivante.

Exemple conceptuel :

~~~text
Promise 1
   ↓
.then()
   ↓
résultat 1
   ↓
Promise 2
   ↓
.then()
   ↓
résultat 2
   ↓
.catch()
~~~

C'est ce que l'on appelle le **Promise chaining**.

---

# 10. Pourquoi cette syntaxe peut devenir difficile à lire

Un chaînage important peut devenir visuellement lourd :

~~~javascript
checkAvailability()
    .then(handleIsAvailable)
    .then(handleCheckPrice)
    .then(handlePurchase)
    .then(handleConfirmation)
    .catch(handleFailure);
~~~

Le mécanisme est puissant, mais la lecture peut devenir moins naturelle lorsque
la chaîne contient beaucoup d'étapes.

Les accolades et une structure plus explicite peuvent parfois améliorer la
lisibilité.

La concision syntaxique n'est pas automatiquement synonyme de meilleure
lisibilité.

---

# 11. `async` / `await`

JavaScript propose une autre manière d'écrire du code utilisant des Promises :

~~~javascript
async function processOrder() {
    const result = await orderCake();
    console.log(result);
}
~~~

`await` permet d'écrire le traitement asynchrone avec une syntaxe qui ressemble
davantage à du code séquentiel.

Comparaison :

### Avec `.then()`

~~~javascript
orderCake()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
~~~

### Avec `async` / `await`

~~~javascript
async function processOrder() {
    try {
        const result = await orderCake();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
~~~

Pour une succession de traitements, `async` / `await` peut être plus facile à
lire car la structure ressemble davantage à un programme synchrone.

---

# 12. `try` / `catch` avec `async` / `await`

Avec `async` / `await`, la gestion des erreurs peut être structurée avec
`try` / `catch`.

~~~javascript
async function processOrder() {
    try {
        const result = await orderCake();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
~~~

On retrouve alors une structure familière :

~~~text
try
 └── traitement asynchrone

catch
 └── gestion de l'erreur
~~~

Cette syntaxe peut être particulièrement lisible lorsque plusieurs opérations
asynchrones doivent être réalisées successivement.

---

# 13. Une fonction `async` retourne une Promise

Une fonction déclarée avec `async` retourne toujours une Promise.

~~~javascript
async function getMessage() {
    return "Hello";
}
~~~

Même si le code semble retourner directement une chaîne, l'appel produit une
Promise.

On peut donc écrire :

~~~javascript
getMessage().then(message => {
    console.log(message);
});
~~~

Cela explique pourquoi `async` et `await` sont liés au mécanisme des Promises.

---

# 14. Une Promise n'est pas nécessairement une opération réseau

Une Promise représente le **résultat futur d'une opération**.

Elle peut être utilisée pour :

- un appel HTTP ;
- une opération asynchrone ;
- un timer ;
- une lecture de données ;
- une opération fournie par une API JavaScript.

Exemple avec un timer :

~~~javascript
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Operation finished");
    }, 1500);
});

promise.then(result => {
    console.log(result);
});
~~~

Ici :

~~~text
new Promise()
     ↓
pending
     ↓ 1,5 seconde
resolve()
     ↓
fulfilled
     ↓
.then()
~~~

---

# 15. Point important : `setTimeout()` ne rend pas le code bloquant

Dans :

~~~javascript
setTimeout(() => {
    console.log("Finished");
}, 2000);

console.log("Continue");
~~~

le programme peut afficher :

~~~text
Continue
Finished
~~~

Le timer ne bloque donc pas l'exécution du programme pendant deux secondes.

Le callback est simplement programmé pour être exécuté ultérieurement.

---

# 16. Callback → Promise → async/await

On peut voir l'évolution des styles ainsi :

~~~text
Callbacks
    ↓
Promises
    ↓
async / await
~~~

Il ne s'agit pas de trois mécanismes totalement indépendants.

`async` / `await` repose sur les **Promises**.

Les Promises permettent de structurer les résultats futurs et leur gestion
d'erreur.

`async` / `await` fournit une syntaxe plus séquentielle pour travailler avec
ces Promises.

---

# 17. À retenir

## Promise

Une Promise représente le résultat futur d'une opération.

~~~text
pending
   ↓
fulfilled
   ou
rejected
~~~

## `resolve()`

Signale la réussite de l'opération.

## `reject()`

Signale son échec.

## `.then()`

Traite le résultat d'une Promise résolue.

## `.catch()`

Traite les erreurs / rejets.

## `async`

Déclare une fonction qui retourne une Promise.

## `await`

Attend le résultat d'une Promise dans une fonction `async`, avec une écriture
qui ressemble à du code séquentiel.

## `setTimeout()`

Programme l'exécution différée d'un callback après un délai minimal ; ce n'est
pas, à lui seul, un mécanisme de timeout destiné à interrompre une opération
trop lente.

---

# Bon réflexe de lecture

Lorsqu'on rencontre :

~~~javascript
something()
    .then(...)
    .then(...)
    .catch(...);
~~~

ne pas essayer de lire immédiatement toute la chaîne comme une seule
instruction.

La lire plutôt comme un **enchaînement d'étapes** :

~~~text
lancer l'opération
      ↓
attendre son résultat
      ↓
traiter le résultat
      ↓
lancer / attendre l'étape suivante
      ↓
gérer une éventuelle erreur
~~~

Et lorsque la chaîne devient trop complexe, `async` / `await` avec `try` /
`catch` peut fournir une structure plus explicite et plus proche du raisonnement
séquentiel classique.


