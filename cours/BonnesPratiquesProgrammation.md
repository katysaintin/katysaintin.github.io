# Les bonnes pratiques de programmation

> **Cours transversal — Java, Python, C++, JavaScript et autres langages**

L'objectif de ce cours n'est pas d'apprendre un langage supplémentaire, mais d'apprendre à **bien programmer**, quel que soit le langage utilisé.

Un langage permet de faire fonctionner un programme.  
Le génie logiciel permet de construire un programme que l'on peut **comprendre, tester, debugger, maintenir et faire évoluer**.

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