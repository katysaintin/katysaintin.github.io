# Programmation impérative, procédurale et orientée objet

## 1. Programmation impérative

La programmation impérative consiste à donner au programme une **suite d'instructions à exécuter**.

On décrit principalement **comment faire** quelque chose.

```text
Fais ceci.
Puis fais cela.
Puis fais ceci.
Puis fais cela.
```

### Exemple avec une recette de cuisine

```text
1. Prendre les ingrédients.
2. Couper les légumes.
3. Faire chauffer la poêle.
4. Ajouter les légumes.
5. Cuire pendant 10 minutes.
6. Servir.
```

Le programme suit une succession d'étapes et l'état des variables peut évoluer au cours de l'exécution.

> **Programmation impérative = donner des instructions au programme.**

---

## 2. Programmation procédurale

La programmation procédurale est une manière d'organiser une programmation impérative.

Au lieu d'avoir un très long programme composé uniquement d'instructions successives, on regroupe les instructions dans des **procédures ou fonctions**.

Par exemple :

```text
préparer()
cuire()
servir()
```

Puis :

```text
préparer()
cuire()
servir()
```

La programmation procédurale permet donc notamment de :

- découper un programme en parties plus petites ;
- réutiliser du code ;
- améliorer la lisibilité ;
- faciliter la maintenance.

> **Programmation procédurale = organiser les instructions en procédures ou fonctions.**

La programmation procédurale est donc généralement considérée comme une forme de programmation impérative.

---

## 3. Programmation orientée objet — POO

La programmation orientée objet change davantage la manière de découper le problème.

On ne pense plus uniquement :

> « Quelles sont les étapes à exécuter ? »

On pense également :

> « Quels sont les objets de mon problème ? »

Un objet regroupe généralement :

```text
Objet
 ├── état / données
 └── comportement / méthodes
```

### Exemple : une voiture

```text
Voiture
 ├── couleur
 ├── vitesse
 ├── position
 │
 ├── accélérer()
 ├── freiner()
 └── tourner()
```

La voiture possède donc des **données** et des **comportements** permettant d'agir sur ces données.

---

## 4. Analogie avec une recette de cuisine

### Programmation impérative

Je décris ma recette étape par étape :

```text
1. Prendre les ingrédients.
2. Préparer les ingrédients.
3. Faire chauffer.
4. Cuire.
5. Servir.
```

Le programme suit les instructions dans l'ordre.

### Programmation procédurale

Je regroupe les étapes dans des fonctions :

```text
préparer()
cuire()
servir()
```

Puis mon programme appelle ces fonctions.

### Programmation orientée objet

Je crée un modèle représentant une recette :

```text
Recette
 ├── ingrédients
 ├── préparation()
 ├── cuisson()
 └── servir()
```

Ce modèle peut ensuite servir à créer différentes recettes :

```text
pizza
tarte
gâteau
soupe
```

Chaque recette est une **instance** du modèle `Recette`.

---

## 5. Programmation impérative ≠ programmation orientée objet

Il est important de ne pas opposer directement les deux notions.

La programmation impérative décrit principalement **la manière dont les instructions sont exécutées**.

La programmation orientée objet décrit principalement **la manière dont le programme est organisé autour d'objets**.

Une programmation orientée objet peut donc contenir beaucoup d'instructions impératives.

Par exemple, une méthode Java :

```java
public void accelerate() {
    speed = speed + 10;
    position = position + speed;
}
```

contient des instructions impératives, même si elle appartient à une classe dans un programme orienté objet.

> **POO et programmation impérative ne sont donc pas forcément opposées.**

---

## 6. Et la programmation fonctionnelle ?

La programmation fonctionnelle est encore un autre paradigme.

Elle met notamment l'accent sur :

- les fonctions ;
- la transformation des données ;
- l'immutabilité ;
- la limitation des modifications d'état.

Attention :

> Un programme qui n'utilise pas de classes n'est pas nécessairement un programme fonctionnel.

Par exemple :

```text
Un long script
+ pas de classes
+ instructions exécutées les unes après les autres
```

correspond beaucoup plus probablement à de la **programmation impérative**.

S'il est organisé en fonctions et procédures, on peut parler de **programmation procédurale**.

---

## 7. Tableau de synthèse

| Paradigme / style | Idée principale | Question principale | Exemple avec une recette |
|---|---|---|---|
| Programmation impérative | Une suite d'instructions à exécuter | « Que dois-je faire, et dans quel ordre ? » | Faire ceci, puis cela, puis cela. |
| Programmation procédurale | Organiser les instructions en fonctions/procédures | « Comment découper les étapes du programme ? » | `preparer()`, `cuire()`, `servir()` |
| Programmation orientée objet (POO) | Organiser le programme autour d'objets qui possèdent un état et des comportements | « Quels sont les objets et que savent-ils faire ? » | Une classe `Recette` avec des ingrédients et des méthodes. |
| Programmation fonctionnelle | Construire le programme autour de fonctions et de transformations de données | « Comment transformer ces données ? » | Transformer les ingrédients et les résultats avec des fonctions. |

---

## 8. À retenir

```text
PROGRAMMATION IMPÉRATIVE
→ « Fais ceci, puis cela, puis cela. »

PROGRAMMATION PROCÉDURALE
→ « Organisons les instructions en fonctions. »

PROGRAMMATION ORIENTÉE OBJET
→ « Organisons le programme autour d'objets
   qui possèdent des données et des comportements. »

PROGRAMMATION FONCTIONNELLE
→ « Construisons le programme principalement
   avec des fonctions qui transforment des données. »
```

### Attention au vocabulaire

```text
Impérative ≠ Procédurale ≠ POO ≠ Fonctionnelle
```

Ces termes ne décrivent pas exactement la même chose.

La programmation procédurale est généralement une forme de programmation impérative.

La POO est un autre paradigme d'organisation du programme, mais un programme orienté objet peut parfaitement contenir des instructions impératives.

Enfin, certains langages permettent de mélanger plusieurs paradigmes.

Par exemple, **Python, C++ et Java permettent tous de programmer de manière impérative et orientée objet**, et proposent également certaines possibilités issues de la programmation fonctionnelle.