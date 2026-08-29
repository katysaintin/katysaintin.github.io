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

```js
5 === "5"   // false
5 == "5"    // true

