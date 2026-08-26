# HTML5 — Notes

## 1. Types d'`input`

HTML5 propose de nombreux types d'`input` permettant d'adapter le contrôle affiché et la saisie attendue.

| Type | Exemple | Usage |
|---|---|---|
| `text` | `<input type="text">` | Texte libre |
| `password` | `<input type="password">` | Mot de passe |
| `email` | `<input type="email">` | Adresse e-mail |
| `number` | `<input type="number">` | Nombre |
| `tel` | `<input type="tel">` | Numéro de téléphone |
| `url` | `<input type="url">` | URL |
| `date` | `<input type="date">` | Date |
| `time` | `<input type="time">` | Heure |
| `datetime-local` | `<input type="datetime-local">` | Date et heure |
| `month` | `<input type="month">` | Mois |
| `week` | `<input type="week">` | Semaine |
| `color` | `<input type="color">` | Sélection d'une couleur |
| `range` | `<input type="range">` | Curseur permettant de choisir une valeur dans une plage |
| `checkbox` | `<input type="checkbox">` | Case à cocher |
| `radio` | `<input type="radio">` | Choix unique parmi plusieurs options |
| `file` | `<input type="file">` | Sélection d'un fichier |
| `hidden` | `<input type="hidden">` | Valeur non affichée à l'utilisateur |
| `submit` | `<input type="submit">` | Bouton d'envoi du formulaire |
| `reset` | `<input type="reset">` | Réinitialisation du formulaire |
| `button` | `<input type="button">` | Bouton générique |

### Exemple

~~~html
<input type="text">
<input type="email">
<input type="date">
<input type="color">
<input type="range">
<input type="checkbox">
~~~

---

## 2. `placeholder`

L'attribut `placeholder` permet d'afficher un texte indicatif **à l'intérieur d'un champ**, avant que l'utilisateur ne saisisse une valeur.

~~~html
<input type="text" placeholder="Entrez votre nom">
~~~

Le texte disparaît lorsque l'utilisateur commence à saisir une valeur.

### Exemple avec plusieurs champs

~~~html
<input type="text" placeholder="Nom">
<input type="email" placeholder="Adresse e-mail">
<input type="password" placeholder="Mot de passe">
~~~

> `placeholder` est une indication destinée à guider l'utilisateur. Ce n'est pas une valeur saisie dans le champ.

---

## 3. `<div>` — conteneur / layout

`<div>` est un élément générique permettant de **regrouper des éléments HTML**.

Il est très utilisé pour structurer une page et créer des blocs de contenu.

~~~html
<div>
    <h1>Mon titre</h1>
    <p>Mon paragraphe.</p>
</div>
~~~

On peut imbriquer plusieurs `<div>` :

~~~html
<div>
    <div>
        <h1>Section 1</h1>
    </div>

    <div>
        <h1>Section 2</h1>
    </div>
</div>
~~~

Le `<div>` n'apporte pas de signification particulière au contenu : c'est essentiellement un **conteneur générique**.

Le positionnement et la mise en page des `<div>` sont ensuite généralement gérés avec CSS.

---

## 4. Listes avec `<ul>` et `<ol>`

HTML permet de créer deux principaux types de listes.

### Liste non ordonnée : `<ul>`

`<ul>` signifie **unordered list**.

Les éléments sont généralement affichés avec des puces.

Chaque élément de la liste est placé dans un `<li>`.

~~~html
<ul>
    <li>Python</li>
    <li>Java</li>
    <li>C++</li>
</ul>
~~~

Résultat conceptuel :

- Python
- Java
- C++

---

### Liste ordonnée : `<ol>`

`<ol>` signifie **ordered list**.

Les éléments sont numérotés.

~~~html
<ol>
    <li>Installer Python</li>
    <li>Créer le projet</li>
    <li>Écrire le code</li>
    <li>Exécuter le programme</li>
</ol>
~~~

Résultat conceptuel :

1. Installer Python
2. Créer le projet
3. Écrire le code
4. Exécuter le programme

---

## 5. `<li>` — élément de liste

`<li>` signifie **list item**.

Il est utilisé à l'intérieur de `<ul>` ou de `<ol>`.

~~~html
<ul>
    <li>Premier élément</li>
    <li>Deuxième élément</li>
</ul>
~~~

ou :

~~~html
<ol>
    <li>Première étape</li>
    <li>Deuxième étape</li>
</ol>
~~~

---

## 6. Résumé

| Élément | Rôle |
|---|---|
| `<input>` | Champ de saisie ou contrôle de formulaire |
| `type="..."` | Définit le type de contrôle |
| `placeholder` | Affiche une indication dans un champ vide |
| `<div>` | Conteneur générique pour regrouper des éléments |
| `<ul>` | Liste non ordonnée |
| `<ol>` | Liste ordonnée |
| `<li>` | Élément d'une liste |

### Exemple combiné

~~~html
<div>
    <h1>Inscription</h1>

    <input type="text" placeholder="Nom">
    <input type="email" placeholder="Adresse e-mail">
    <input type="date">

    <h2>Langages connus</h2>

    <ul>
        <li>Python</li>
        <li>Java</li>
        <li>SQL</li>
    </ul>

    <h2>Étapes</h2>

    <ol>
        <li>Créer un compte</li>
        <li>Valider l'adresse e-mail</li>
        <li>Se connecter</li>
    </ol>
</div>
~~~
# HTML5 — Sémantique des éléments

Cette note complète les éléments HTML5 vus précédemment.  
L'objectif est de comprendre le **rôle sémantique** des balises, plutôt que de les utiliser uniquement comme conteneurs visuels.

---

## 1. `<header>` — En-tête

`<header>` représente la partie introductive d'une page ou d'une section.

Il peut contenir par exemple :

- un titre ;
- un logo ;
- une description ;
- des éléments de navigation ;
- des informations introductives.

### Exemple

~~~html
<header>
    <h1>Mon site</h1>
    <p>Bienvenue sur mon site personnel.</p>
</header>
~~~

Un `<header>` peut également être utilisé à l'intérieur d'un `<article>` ou d'une `<section>`.

~~~html
<article>
    <header>
        <h2>Mon article</h2>
        <p>Publié le 23 août 2026</p>
    </header>

    <p>Contenu de l'article...</p>
</article>
~~~

### À retenir

`header` = **contenu introductif d'une page ou d'une section**.

Il ne faut pas le confondre avec `<head>`, qui contient les métadonnées du document HTML.

---

# 2. `<address>` — Informations de contact

`<address>` sert à représenter des **informations de contact** relatives à la page ou à l'article qui le contient.

Par exemple :

~~~html
<address>
    Contact :
    <a href="mailto:contact@example.com">
        contact@example.com
    </a>
</address>
~~~

Il peut également contenir une adresse postale, un lien vers un profil, etc.

~~~html
<address>
    Jean Dupont<br>
    10 rue de Paris<br>
    75000 Paris<br>
    <a href="mailto:jean@example.com">jean@example.com</a>
</address>
~~~

### À retenir

`address` = **informations permettant de contacter l'auteur ou le responsable du contenu**.

Ce n'est donc pas simplement une balise générique pour écrire une adresse postale.

---

# 3. `<time>` — Date ou heure

`<time>` permet de représenter une **date, une heure ou une durée** de manière sémantique.

### Exemple simple

~~~html
<p>
    La réunion aura lieu le <time>23 août 2026</time>.
</p>
~~~

On peut également utiliser l'attribut `datetime` pour fournir une représentation standardisée de la date.

~~~html
<p>
    La réunion aura lieu le
    <time datetime="2026-08-23">23 août 2026</time>.
</p>
~~~

La valeur visible par l'utilisateur peut donc être différente de la valeur machine-readable de `datetime`.

### Date + heure

~~~html
<time datetime="2026-08-23T14:30">
    23 août 2026 à 14h30
</time>
~~~

### Durée

~~~html
<time datetime="PT2H30M">
    2 heures 30 minutes
</time>
~~~

### À retenir

`time` = **date, heure ou durée exprimée sémantiquement**.

L'attribut `datetime` permet notamment de fournir une valeur exploitable par les machines.

---

# 4. `<figure>` — Contenu autonome illustratif

`<figure>` permet de regrouper un contenu autonome qui accompagne le contenu principal.

Typiquement :

- une image ;
- une illustration ;
- un graphique ;
- un diagramme ;
- éventuellement du code ou un autre contenu référencé.

### Exemple

~~~html
<figure>
    <img
        src="scream.png"
        width="220"
        height="277"
        alt="Le Cri d'Edvard Munch"
    >
</figure>
~~~

L'intérêt est que l'ensemble forme une **unité sémantique indépendante**.

---

# 5. `<figcaption>` — Légende d'une figure

`<figcaption>` permet d'associer une légende au contenu d'un `<figure>`.

### Exemple

~~~html
<figure>
    <img
        src="scream.png"
        width="220"
        height="277"
        alt="Le Cri d'Edvard Munch"
    >

    <figcaption>Le Cri</figcaption>
</figure>
~~~

La structure devient donc :

~~~text
<figure>
    contenu
    +
    <figcaption>
        légende
    </figcaption>
</figure>
~~~

### À retenir

`figure` = **contenu autonome**

`figcaption` = **légende associée à ce contenu**

---

# 6. Exemple complet

On peut combiner plusieurs éléments sémantiques :

~~~html
<!DOCTYPE html>
<html>

<body>

    <header>
        <h1>Mon site culturel</h1>

        <p>
            Découvrez quelques œuvres célèbres.
        </p>
    </header>

    <main>

        <section>
            <h2>Le Cri</h2>

            <figure>
                <img
                    src="scream.png"
                    width="220"
                    height="277"
                    alt="Le Cri d'Edvard Munch"
                >

                <figcaption>
                    Le Cri — Edvard Munch
                </figcaption>
            </figure>

            <p>
                Cette œuvre a été réalisée en
                <time datetime="1893">1893</time>.
            </p>
        </section>

    </main>

    <footer>
        <address>
            Contact :
            <a href="mailto:contact@example.com">
                contact@example.com
            </a>
        </address>
    </footer>

</body>

</html>
~~~

---

# 7. Vue d'ensemble

| Élément | Rôle sémantique | Exemple d'utilisation |
|---|---|---|
| `<header>` | Contenu introductif | Titre, introduction, navigation |
| `<main>` | Contenu principal de la page | Contenu spécifique à la page |
| `<section>` | Regroupement thématique | Une partie d'une page |
| `<nav>` | Groupe de liens de navigation | Menu, liens sociaux |
| `<footer>` | Pied de page ou de section | Copyright, contacts, liens |
| `<address>` | Informations de contact | Email, adresse, contact auteur |
| `<time>` | Date, heure ou durée | Date de publication, horaire |
| `<figure>` | Contenu autonome illustratif | Image, graphique, diagramme |
| `<figcaption>` | Légende d'une figure | Description d'une image |
| `<details>` | Contenu masqué/affichable | Informations complémentaires |
| `<summary>` | Titre visible de `<details>` | Résumé permettant d'ouvrir les détails |

---

# 8. L'idée importante : HTML5 décrit le sens

Avec HTML5, on cherche progressivement à remplacer les conteneurs génériques lorsque l'on dispose d'un élément qui décrit mieux le rôle du contenu.

Par exemple, plutôt que :

~~~html
<div>
    <h2>Contact</h2>
    <p>contact@example.com</p>
</div>
~~~

on peut utiliser un élément sémantique approprié lorsque son rôle correspond réellement au contenu :

~~~html
<address>
    <h2>Contact</h2>
    <p>
        <a href="mailto:contact@example.com">
            contact@example.com
        </a>
    </p>
</address>
~~~

De même :

~~~html
<div>
    <img src="graph.png" alt="Résultats">
    <p>Résultats expérimentaux</p>
</div>
~~~

peut devenir :

~~~html
<figure>
    <img src="graph.png" alt="Résultats expérimentaux">

    <figcaption>
        Résultats expérimentaux
    </figcaption>
</figure>
~~~

L'objectif n'est donc pas simplement de « faire joli » ou de modifier l'affichage : **la structure HTML fournit des informations sur le rôle et le sens du contenu**.

---

# 9. Mémo rapide

~~~text
<header>      → introduction / en-tête
<main>        → contenu principal
<section>     → groupe thématique
<nav>         → navigation
<footer>      → pied de page / section
<address>     → contact
<time>        → date / heure / durée
<figure>      → contenu autonome
<figcaption>  → légende
<details>     → contenu repliable
<summary>     → titre/résumé de details
~~~

> **HTML sémantique = décrire ce qu'est le contenu, pas seulement comment il doit être affiché.**
# HTML5 — Accessibilité, ARIA et `role`

## 1. Pourquoi l'accessibilité en HTML ?

Une page HTML n'est pas seulement destinée à être affichée visuellement.

Elle peut être interprétée par :

- le navigateur ;
- les moteurs de recherche ;
- les lecteurs d'écran ;
- les technologies d'assistance ;
- les outils de navigation au clavier.

Un lecteur d'écran ne « voit » pas la page comme un utilisateur voyant. Il s'appuie notamment sur la structure et la sémantique du HTML.

L'objectif du HTML sémantique est donc de donner du **sens** au contenu.

---

## 2. Privilégier le HTML natif

Lorsqu'un élément HTML sémantique existe, il faut généralement l'utiliser plutôt que de reproduire son comportement avec un `div`.

### Préférer

~~~html
<button>Envoyer</button>
~~~

à :

~~~html
<div role="button">Envoyer</div>
~~~

Le `<button>` fournit nativement :

- la bonne sémantique ;
- le comportement attendu ;
- la gestion appropriée du focus ;
- le comportement clavier.

À l'inverse, `role="button"` indique seulement aux technologies d'assistance que le `div` doit être considéré comme un bouton.

Il faut encore implémenter correctement son comportement.

> **Règle pratique : utiliser l'élément HTML natif lorsqu'il existe.**

---

# 3. Qu'est-ce que ARIA ?

**ARIA** signifie :

> Accessible Rich Internet Applications

ARIA permet de fournir des informations supplémentaires aux technologies d'assistance lorsque le HTML natif ne suffit pas.

On rencontre notamment :

- `role`
- `aria-hidden`
- `aria-expanded`
- `aria-label`
- `aria-describedby`
- etc.

ARIA concerne principalement la représentation de l'interface dans **l'arbre d'accessibilité**.

---

# 4. `role`

L'attribut `role` indique la nature ou la fonction d'un élément pour les technologies d'assistance.

Exemple :

~~~html
<div role="button">Envoyer</div>
~~~

Cela indique :

> « Considère cet élément comme ayant le rôle de bouton. »

Mais `role` ne transforme pas réellement le `div` en bouton.

Il ne fournit pas automatiquement tout le comportement d'un `<button>`.

---

## Exemple avec `role="alert"`

~~~html
<div role="alert">
    Votre session va expirer dans 60 secondes.
</div>
~~~

Ce rôle est utile lorsqu'une information importante apparaît dynamiquement.

Exemple typique :

~~~text
Utilisateur
    ↓
clique sur "Enregistrer"
    ↓
requête HTTP
    ↓
serveur
    ↓
message d'erreur affiché dynamiquement
    ↓
technologie d'assistance informée
~~~

`role="alert"` permet notamment d'indiquer aux technologies d'assistance qu'une information importante vient d'apparaître.

---

# 5. `aria-hidden`

`aria-hidden="true"` indique qu'un élément ne doit pas être présenté aux technologies d'assistance.

Exemple :

~~~html
<div aria-hidden="true">
    ★ ★ ★
</div>
~~~

Le contenu reste visible à l'écran.

Mais il est masqué de l'arbre d'accessibilité.

### Important

`aria-hidden="true"` ne signifie **pas** :

> « cacher l'élément à l'utilisateur »

Il signifie plutôt :

> « ne pas présenter cet élément aux technologies d'assistance ».

---

## Exemple : contenu décoratif

Pour une décoration purement visuelle :

~~~html
<div aria-hidden="true">
    ★ ★ ★
</div>
~~~

L'utilisateur voyant voit :

~~~text
★ ★ ★
~~~

Mais un lecteur d'écran n'a pas nécessairement besoin d'annoncer ces étoiles.

---

# 6. Attention à ne pas cacher une information utile

`aria-hidden` doit être utilisé avec discernement.

Si une information est importante pour comprendre ou utiliser un formulaire, la cacher au lecteur d'écran peut créer un problème d'accessibilité.

Par exemple :

~~~html
<div aria-hidden="true">
    Votre prénom intermédiaire est facultatif.
</div>
~~~

Si cette information est réellement nécessaire pour comprendre le formulaire, il serait préférable qu'elle soit accessible à tous les utilisateurs.

> **ARIA doit améliorer l'accessibilité, pas supprimer des informations importantes.**

---

# 7. ARIA et HTML sémantique

On peut voir la progression ainsi :

~~~text
HTML générique
    ↓
HTML sémantique
    ↓
accessibilité native
    ↓
ARIA lorsque nécessaire
~~~

### Exemple

Plutôt que :

~~~html
<div role="navigation">
    ...
</div>
~~~

on préférera généralement :

~~~html
<nav>
    ...
</nav>
~~~

Plutôt que :

~~~html
<div role="button">
    Envoyer
</div>
~~~

on préférera :

~~~html
<button>
    Envoyer
</button>
~~~

Le HTML sémantique fournit déjà beaucoup d'informations aux technologies d'assistance.

---

# 8. ARIA n'est pas un commentaire

Il est possible de faire une analogie avec les commentaires de code, mais il faut distinguer leurs destinataires.

| Mécanisme | Destinataire | Objectif |
|---|---|---|
| `<!-- commentaire -->` | Développeur | Expliquer le code |
| HTML sémantique | Navigateur + technologies d'assistance | Donner du sens au contenu |
| `role` | Technologies d'assistance | Décrire le rôle d'un élément |
| `aria-*` | Technologies d'assistance | Décrire état, propriété ou comportement |

### Commentaire

~~~html
<!-- Ce bouton sauvegarde le formulaire -->
<button>Enregistrer</button>
~~~

Le commentaire transmet une information au développeur.

### ARIA

~~~html
<button aria-expanded="false">
    Options
</button>
~~~

L'attribut transmet une information sur l'état du composant aux technologies d'assistance.

---

# 9. Pourquoi ARIA est intéressant pour le debugging ?

Lorsqu'on découvre un existant, les attributs ARIA peuvent fournir des informations précieuses sur l'intention et le fonctionnement d'un composant.

Par exemple :

~~~html
<div role="button" aria-expanded="false">
    Menu
</div>
~~~

En inspectant cet élément, on peut comprendre qu'il s'agit probablement :

- d'un composant interactif ;
- d'un composant personnalisé ;
- d'un élément dont l'état peut changer ;
- d'un composant probablement piloté par JavaScript.

On peut ensuite rechercher dans le code :

- quel JavaScript modifie `aria-expanded` ;
- quand sa valeur passe à `true` ;
- quel élément est affiché ou masqué ;
- comment le focus est géré ;
- comment le clavier est pris en charge.

ARIA devient donc une **métadonnée utile pour comprendre un existant**.

---

# 10. Modèle mental pour lire une application web

On peut retenir cette représentation :

~~~text
                HTML
                 │
       ┌─────────┴─────────┐
       │                   │
   structure           sémantique
       │                   │
       └─────────┬─────────┘
                 ↓
             navigateur
                 │
       ┌─────────┴─────────┐
       │                   │
    affichage       arbre d'accessibilité
                           │
                           ↓
                 technologies d'assistance
~~~

ARIA intervient principalement pour enrichir ou préciser les informations destinées à l'arbre d'accessibilité.

---

# 11. À retenir

### HTML sémantique

Donner directement du sens au contenu :

~~~html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<ul>
<li>
~~~

### `role`

Décrire le rôle d'un élément pour les technologies d'assistance :

~~~html
<div role="button">...</div>
~~~

Mais si un élément natif existe, il est généralement préférable de l'utiliser.

### `aria-hidden`

Retirer un élément de l'arbre d'accessibilité sans nécessairement le cacher visuellement :

~~~html
<div aria-hidden="true">...</div>
~~~

### `role="alert"`

Signaler une information importante apparaissant dynamiquement :

~~~html
<div role="alert">
    Une erreur est survenue.
</div>
~~~

---

# 12. La règle essentielle

> **ARIA ne sert pas à rendre un mauvais HTML bon.**

Il sert principalement à communiquer correctement la sémantique, l'état ou certaines propriétés d'une interface aux technologies d'assistance lorsque le HTML natif ne suffit pas.

Pour un développeur qui découvre un existant :

~~~text
HTML sémantique
    ↓
Je comprends la structure
    ↓
ARIA / role
    ↓
Je comprends aussi l'intention d'accessibilité
    ↓
JavaScript
    ↓
Je peux suivre le comportement dynamique
~~~

Ainsi, ARIA n'est pas seulement une notion d'accessibilité à apprendre : **dans un existant web, c'est également une information utile pour comprendre et debugger les composants d'interface.**

# Mémo HTML5 — Formulaires : fieldset, textarea et types d’input

## 1. `<fieldset>` : regrouper des champs

`<fieldset>` permet de regrouper plusieurs champs liés à l’intérieur d’un formulaire.

~~~html
<form>
  <fieldset>
    <legend>Personal Info</legend>
    Name: <input type="text"><br>
    Email: <input type="email"><br>
    Phone: <input type="tel"><br>
  </fieldset>

  <fieldset>
    <legend>Login Info</legend>
    Username: <input type="text"><br>
    Password: <input type="password"><br>
  </fieldset>

  <button>Register</button>
</form>
~~~

- `<fieldset>` = groupe logique de champs
- `<legend>` = titre / légende du groupe
- Cette structuration améliore la lisibilité et l’accessibilité du formulaire.

## 2. `<legend>` : donner un titre au groupe

`<legend>` fournit le titre associé à un `<fieldset>`.

~~~html
<fieldset>
  <legend>Personal Info</legend>
  ...
</fieldset>
~~~

## 3. `<textarea>` : saisir du texte long

`<textarea>` permet une saisie **multiligne**, contrairement à un `<input>` classique.

~~~html
<textarea
  placeholder="What's on your mind?"
  rows="3"
  cols="18">
</textarea>
~~~

| Attribut | Rôle |
|---|---|
| `placeholder` | Texte indicatif affiché lorsque la zone est vide |
| `rows` | Nombre de lignes visibles |
| `cols` | Largeur approximative de la zone |

## 4. Les types d’`<input>`

L’attribut `type` précise le type de donnée attendu.

### `text`

~~~html
<input type="text">
~~~

Texte court : nom, prénom, identifiant, etc.

### `email`

~~~html
<input type="email">
~~~

Destiné à une adresse e-mail. Le navigateur peut adapter son comportement et effectuer certaines vérifications de format.

### `tel`

~~~html
<input type="tel">
~~~

Destiné à un numéro de téléphone.

### `password`

~~~html
<input type="password">
~~~

Destiné à un mot de passe ; la saisie est généralement masquée à l’écran.

## 5. `<label>` et `for` / `id`

Un `<label>` fournit le libellé d’un champ.

~~~html
<label for="name">Name:</label>
<input id="name" type="text">
~~~

La valeur de `for` doit correspondre à la valeur de `id` du champ.

~~~html
<label for="email">Email:</label>
<input id="email" type="email">
~~~

**Réflexe :** dans un formulaire, penser à relier les `<label>` aux champs avec `for` ↔ `id`.

## 6. `placeholder` ≠ `label`

Un `placeholder` donne une indication temporaire **dans le champ** :

~~~html
<textarea placeholder="What's on your mind?"></textarea>
~~~

Un `<label>` identifie réellement le champ :

~~~html
<label for="email">Email:</label>
<input id="email" type="email">
~~~

Le placeholder ne remplace donc pas le label.

## 7. Exemple complet

~~~html
<form>
  <h3>Register Account</h3>

  <fieldset>
    <legend>Personal Info</legend>

    <label for="name">Name:</label>
    <input id="name" type="text"><br>

    <label for="email">Email:</label>
    <input id="email" type="email"><br>

    <label for="phone">Phone:</label>
    <input id="phone" type="tel"><br>
  </fieldset>

  <fieldset>
    <legend>Login Info</legend>

    <label for="username">Username:</label>
    <input id="username" type="text"><br>

    <label for="password">Password:</label>
    <input id="password" type="password"><br>
  </fieldset>

  <button>Register</button>
</form>
~~~

## 8. Les nouveaux éléments à retenir

~~~text
<form>       → formulaire
<fieldset>   → groupe de champs liés
<legend>     → titre du groupe
<label>      → libellé d’un champ
<input>      → champ de saisie
<textarea>   → saisie de texte multiligne
~~~

Types d’`input` rencontrés :

~~~text
text       → texte
email      → adresse e-mail
tel        → téléphone
password   → mot de passe
~~~

## 9. Structure mentale

~~~text
<form>
  ├── <fieldset>
  │     ├── <legend>
  │     ├── <label> + <input>
  │     ├── <label> + <input>
  │     └── <label> + <input>
  │
  ├── <fieldset>
  │     ├── <legend>
  │     ├── <label> + <input>
  │     └── <label> + <input>
  │
  └── <button>
</form>
~~~

Le but est de construire des formulaires structurés, lisibles et accessibles.

## 10. Mini-réflexe de développeuse

Quand tu rencontres un formulaire, demande-toi :

1. Quels sont les **groupes logiques** de champs ? → `<fieldset>`
2. Comment s’appelle chaque groupe ? → `<legend>`
3. Quel est le **libellé** de chaque champ ? → `<label>`
4. Quel type de donnée est attendu ? → `type="text"`, `email`, `tel`, `password`, etc.
5. S’agit-il d’une saisie courte ou longue ? → `<input>` ou `<textarea>`
6. Le `<label>` est-il correctement relié à l’`input` ? → `for` ↔ `id`

# Mémo CSS — Sélecteurs

## 1. Sélectionner une classe

En HTML, une classe est déclarée avec `class` :

~~~html
<p class="first">First</p>
<p class="second">Second</p>
<p class="third">Third</p>
<p class="fourth">Fourth</p>
~~~

En CSS, une classe est sélectionnée avec `.` :

~~~css
.first {
    color: coral;
}
~~~

### Plusieurs classes : grouping selector

Pour appliquer la même règle à plusieurs classes, on les sépare par des virgules :

~~~css
.first, .second, .fourth {
    color: coral;
}
~~~

Ici, `.third` n'est pas sélectionné.

---

## 2. Sélectionner un ID

En HTML, un élément peut avoir un `id` :

~~~html
<input id="email" placeholder="email">
<input id="password" placeholder="password">
~~~

En CSS, un ID est sélectionné avec `#` :

~~~css
#email {
    border: 2px solid violet;
}
~~~

---

## 3. Regrouper plusieurs IDs

Si plusieurs éléments doivent recevoir exactement la même règle CSS, on peut utiliser un **grouping selector** :

~~~css
#email, #password {
    border: 2px solid violet;
}
~~~

Cela signifie :

> appliquer cette règle à `#email` ET à `#password`.

---

## 4. Les trois réflexes à retenir

| HTML | Sélecteur CSS | Signification |
|---|---|---|
| `<p>` | `p` | tous les éléments `<p>` |
| `class="first"` | `.first` | tous les éléments de cette classe |
| `id="email"` | `#email` | l'élément portant cet ID |

### Mémo rapide

~~~text
HTML                     CSS

class="nom"       →      .nom
id="nom"          →      #nom
plusieurs         →      , 
~~~

Exemple :

~~~css
.first, .second {
    color: coral;
}

#email, #password {
    border: 2px solid violet;
}
~~~

---

## 5. Différence importante entre `class` et `id`

### `class`

Une même classe peut être utilisée sur plusieurs éléments :

~~~html
<p class="important">Texte 1</p>
<p class="important">Texte 2</p>
~~~

On la sélectionne avec :

~~~css
.important {
    color: red;
}
~~~

### `id`

Un `id` est destiné à identifier un élément particulier dans la page :

~~~html
<input id="email">
~~~

On le sélectionne avec :

~~~css
#email {
    border: 2px solid violet;
}
~~~

---

## 6. Réflexe de résolution d'un exercice CSS

Avant d'écrire le CSS :

1. **Regarder le HTML.**
2. Identifier comment les éléments sont désignés :
   - balise → `p`, `input`, `h1`, etc.
   - classe → `.nom`
   - ID → `#nom`
3. Vérifier si plusieurs éléments doivent recevoir la même règle.
4. Si oui, les regrouper avec une virgule `,`.

### Exemple

Énoncé :

> Make elements of class `first`, `second`, and `fourth` have their color set to `coral`.

HTML :

~~~html
<p class="first">First</p>
<p class="second">Second</p>
<p class="third">Third</p>
<p class="fourth">Fourth</p>
~~~

CSS :

~~~css
.first, .second, .fourth {
    color: coral;
}
~~~

---

Énoncé :

> Add a grouping selector for `email` and `password` IDs so that they have a border.

HTML :

~~~html
<input id="email">
<input id="password">
~~~

CSS :

~~~css
#email, #password {
    border: 2px solid violet;
}
~~~

---

## À retenir

> **HTML indique l'identité de l'élément ; CSS utilise cette identité pour le sélectionner.**

~~~text
class="xxx"  →  .xxx
id="xxx"     →  #xxx
A + B        →  A, B
~~~

Le point `.` et le `#` sont donc essentiels : sans eux, CSS interprète `first` ou `email` comme un autre type de sélecteur.

# Mémo CSS — Mise en page et positionnement

## 1. `display`

| Valeur | Comportement | À retenir |
|---|---|---|
| `block` | Occupe toute la largeur disponible et commence sur une nouvelle ligne | Bloc |
| `inline` | Reste dans le flux du texte, largeur/hauteur difficiles à imposer | Ligne |
| `inline-block` | Reste en ligne mais accepte `width`, `height`, `margin`, `padding` | Entre les deux |
| `none` | L'élément n'est pas affiché et ne prend plus de place | Masqué |
| `flex` | Active une mise en page Flexbox | Disposition en ligne/colonne |
| `inline-flex` | Comme `flex`, mais le conteneur reste inline | Flex dans une ligne |
| `grid` | Active CSS Grid | Grille |
| `inline-grid` | Comme `grid`, mais le conteneur reste inline | Grille inline |

### Exemple

~~~css
div {
    display: block;
}

span {
    display: inline;
}

button {
    display: inline-block;
}
~~~

---

# 2. `float`

`float` permet de faire « flotter » un élément vers la gauche ou la droite.

| Valeur | Effet |
|---|---|
| `left` | Flotte à gauche |
| `right` | Flotte à droite |
| `none` | Pas de flottement |
| `inherit` | Hérite de la valeur du parent |

### Exemple

~~~css
img {
    float: left;
}
~~~

Le texte peut alors s'écouler autour de l'image.

### `clear`

`clear` permet d'empêcher un élément de se placer à côté d'un élément flottant.

| Valeur | Effet |
|---|---|
| `none` | Comportement normal |
| `left` | Ne peut pas être à côté d'un float gauche |
| `right` | Ne peut pas être à côté d'un float droit |
| `both` | Ne peut être à côté d'aucun float |

~~~css
footer {
    clear: both;
}
~~~

> `float` est historique et reste utile pour certains cas, notamment l'habillage du texte autour d'une image. Pour les mises en page modernes, `flex` et `grid` sont généralement préférables.

---

# 3. `position`

`position` détermine comment un élément est positionné dans la page.

| Valeur | Comportement | À retenir |
|---|---|---|
| `static` | Positionnement normal du document | Valeur par défaut |
| `relative` | Reste dans le flux mais peut être décalé | Point de référence |
| `absolute` | Retiré du flux normal | Positionné par rapport à un ancêtre positionné |
| `fixed` | Retiré du flux et attaché à la fenêtre | Reste visible pendant le scroll |
| `sticky` | Se comporte normalement puis « colle » lors du scroll | Entre `relative` et `fixed` |

---

## `static`

Valeur par défaut.

~~~css
.element {
    position: static;
}
~~~

Les propriétés `top`, `right`, `bottom` et `left` n'ont pas d'effet sur un élément `static`.

---

## `relative`

L'élément conserve sa place dans le flux.

~~~css
.element {
    position: relative;
    top: 10px;
    left: 20px;
}
~~~

Il est visuellement déplacé, mais son emplacement initial reste réservé.

### Utilisation importante

`relative` sert souvent de **référence pour un enfant en `absolute`**.

~~~css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
~~~

---

## `absolute`

L'élément est retiré du flux normal.

~~~css
.child {
    position: absolute;
    top: 10px;
    right: 20px;
}
~~~

Il est généralement positionné par rapport à son ancêtre le plus proche dont `position` n'est pas `static`.

---

## `fixed`

L'élément est positionné par rapport à la fenêtre.

~~~css
.menu {
    position: fixed;
    top: 0;
    right: 0;
}
~~~

Il reste à cette position lorsque la page défile.

Utilisations fréquentes :

- barre de navigation fixe
- bouton « retour en haut »
- élément flottant
- menu toujours visible

---

## `sticky`

L'élément commence dans le flux normal puis reste « collé » lorsque le seuil défini est atteint.

~~~css
header {
    position: sticky;
    top: 0;
}
~~~

Très utilisé pour les en-têtes qui restent visibles pendant le défilement.

---

# 4. `top`, `right`, `bottom`, `left`

Ces propriétés permettent de définir le décalage d'un élément positionné.

| Propriété | Déplacement |
|---|---|
| `top` | Depuis le haut |
| `right` | Depuis la droite |
| `bottom` | Depuis le bas |
| `left` | Depuis la gauche |

Exemple :

~~~css
.element {
    position: absolute;
    top: 20px;
    left: 30px;
}
~~~

> Ces propriétés sont principalement utilisées avec `relative`, `absolute`, `fixed` et `sticky`.

---

# 5. `z-index`

Contrôle l'ordre d'empilement des éléments.

~~~css
.menu {
    position: fixed;
    z-index: 100;
}
~~~

Plus le `z-index` est élevé, plus l'élément est placé au-dessus des autres dans le même contexte d'empilement.

| Valeur | Exemple |
|---|---|
| entier positif | `z-index: 10` |
| `0` | `z-index: 0` |
| entier négatif | `z-index: -1` |
| `auto` | Valeur par défaut |

---

# 6. `overflow`

Détermine ce qui arrive lorsque le contenu dépasse les dimensions de son conteneur.

| Valeur | Comportement |
|---|---|
| `visible` | Le contenu dépasse du conteneur |
| `hidden` | Le contenu qui dépasse est masqué |
| `scroll` | Affiche des barres de défilement |
| `auto` | Ajoute des barres de défilement si nécessaire |

~~~css
.box {
    width: 200px;
    height: 100px;
    overflow: auto;
}
~~~

---

# 7. `width` et `height`

| Propriété | Fonction |
|---|---|
| `width` | Largeur |
| `height` | Hauteur |
| `min-width` | Largeur minimale |
| `max-width` | Largeur maximale |
| `min-height` | Hauteur minimale |
| `max-height` | Hauteur maximale |

Exemple :

~~~css
.box {
    width: 80%;
    max-width: 1000px;
    min-height: 200px;
}
~~~

---

# 8. `margin` et `padding`

Le modèle de boîte CSS :

~~~text
┌───────────────────────────────┐
│            margin             │
│  ┌─────────────────────────┐  │
│  │         border          │  │
│  │  ┌───────────────────┐  │  │
│  │  │      padding      │  │  │
│  │  │  ┌─────────────┐  │  │  │
│  │  │  │   contenu   │  │  │  │
│  │  │  └─────────────┘  │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
~~~

| Propriété | Position |
|---|---|
| `margin` | extérieur |
| `border` | bordure |
| `padding` | intérieur |
| contenu | texte/image/etc. |

### Raccourci

~~~css
margin: 10px;
~~~

→ 10 px sur les quatre côtés.

~~~css
margin: 10px 20px;
~~~

→ 10 px verticalement, 20 px horizontalement.

~~~css
margin: 10px 20px 30px 40px;
~~~

→ ordre : **haut → droite → bas → gauche**

Même logique pour `padding`.

---

# 9. `box-sizing`

Détermine comment `width` et `height` prennent en compte le contenu, le padding et la bordure.

| Valeur | Signification |
|---|---|
| `content-box` | largeur/hauteur concernent le contenu uniquement |
| `border-box` | largeur/hauteur incluent contenu + padding + bordure |

Très courant :

~~~css
* {
    box-sizing: border-box;
}
~~~

Avec `border-box`, si on écrit :

~~~css
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
}
~~~

la largeur totale reste **200 px**.

---

# 10. Flexbox — `display: flex`

Pour les mises en page modernes en une dimension :

~~~css
.container {
    display: flex;
}
~~~

### `flex-direction`

| Valeur | Direction |
|---|---|
| `row` | horizontal, gauche → droite |
| `row-reverse` | horizontal, droite → gauche |
| `column` | vertical |
| `column-reverse` | vertical inversé |

~~~css
.container {
    display: flex;
    flex-direction: row;
}
~~~

### `justify-content`

Aligne les éléments sur l'axe principal.

| Valeur | Effet |
|---|---|
| `flex-start` | début |
| `flex-end` | fin |
| `center` | centre |
| `space-between` | espace entre les éléments |
| `space-around` | espace autour |
| `space-evenly` | espaces égaux |

### `align-items`

Aligne les éléments sur l'axe secondaire.

| Valeur | Effet |
|---|---|
| `stretch` | étire |
| `flex-start` | début |
| `flex-end` | fin |
| `center` | centre |
| `baseline` | ligne de base du texte |

### `gap`

Définit l'espace entre les éléments.

~~~css
.container {
    display: flex;
    gap: 20px;
}
~~~

---

# 11. Grid — `display: grid`

Pour les mises en page en deux dimensions :

~~~css
.container {
    display: grid;
}
~~~

### Colonnes

~~~css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
~~~

→ trois colonnes de même largeur.

### Espacement

~~~css
.container {
    display: grid;
    gap: 20px;
}
~~~

---

# Tableau récapitulatif

| Propriété | Valeurs importantes | Rôle |
|---|---|---|
| `display` | `block`, `inline`, `inline-block`, `none`, `flex`, `grid` | Type d'affichage |
| `float` | `left`, `right`, `none` | Faire flotter un élément |
| `clear` | `left`, `right`, `both`, `none` | Stopper l'effet des floats |
| `position` | `static`, `relative`, `absolute`, `fixed`, `sticky` | Positionnement |
| `top/right/bottom/left` | longueurs, `%`, `auto` | Décalage |
| `z-index` | entier, `auto` | Empilement |
| `overflow` | `visible`, `hidden`, `scroll`, `auto` | Débordement |
| `width` | longueur, `%`, `auto` | Largeur |
| `height` | longueur, `%`, `auto` | Hauteur |
| `margin` | longueurs, `%`, `auto` | Espace extérieur |
| `padding` | longueurs, `%` | Espace intérieur |
| `box-sizing` | `content-box`, `border-box` | Calcul des dimensions |
| `flex-direction` | `row`, `column`, etc. | Direction Flexbox |
| `justify-content` | `center`, `space-between`, etc. | Alignement principal |
| `align-items` | `center`, `stretch`, etc. | Alignement secondaire |
| `gap` | longueur | Espacement |
| `grid-template-columns` | `px`, `%`, `fr`, etc. | Définition des colonnes |

---

# Mémo mental

~~~text
DISPLAY
│
├── block        → bloc / nouvelle ligne
├── inline       → dans la ligne
├── inline-block → ligne + dimensions
├── flex         → disposition flexible
├── grid         → grille
└── none         → caché

POSITION
│
├── static       → normal
├── relative     → normal + déplacement
├── absolute     → retiré du flux
├── fixed        → attaché à la fenêtre
└── sticky       → normal puis "collant"

BOX MODEL
│
├── margin        → dehors
├── border        → bordure
├── padding       → dedans
└── content       → contenu

LAYOUT
│
├── float         → ancien système de flottement
├── flex          → 1 dimension
└── grid          → 2 dimensions
~~~

> **À retenir en priorité pour débuter :**
>
> `display` → comment l'élément se comporte  
> `position` → où l'élément est positionné  
> `margin` → espace extérieur  
> `padding` → espace intérieur  
> `flex` → organiser des éléments sur un axe  
> `grid` → organiser des éléments en lignes et colonnes

# CSS — Flexbox — Mémo

Flexbox permet de disposer des éléments dans un conteneur selon un axe principal et un axe secondaire.

La plupart des propriétés Flexbox se placent sur le **conteneur parent**.

---

## 1. Activer Flexbox

~~~css
.container {
    display: flex;
}
~~~

Les éléments enfants directs deviennent des **flex items**.

---

# 2. Les deux axes

Tout dépend de `flex-direction`.

| `flex-direction` | Axe principal | Axe secondaire |
|---|---|---|
| `row` | horizontal → | vertical ↓ |
| `row-reverse` | horizontal ← | vertical ↓ |
| `column` | vertical ↓ | horizontal → |
| `column-reverse` | vertical ↑ | horizontal → |

### Schéma

~~~text
flex-direction: row

main axis
──────────────────────→
[ A ] [ B ] [ C ]

cross axis
      ↓
~~~

~~~text
flex-direction: column

cross axis
    →
    →
main axis
    ↓
[ A ]
[ B ]
[ C ]
~~~

> **Important :** `justify-content` agit sur l'axe principal.  
> `align-items` agit sur l'axe secondaire.

---

# 3. `flex-direction`

Détermine la direction de l'axe principal.

~~~css
.container {
    display: flex;
    flex-direction: row;
}
~~~

| Valeur | Effet |
|---|---|
| `row` | gauche → droite |
| `row-reverse` | droite → gauche |
| `column` | haut → bas |
| `column-reverse` | bas → haut |

---

# 4. `flex-wrap`

Détermine si les éléments doivent rester sur une seule ligne ou passer sur plusieurs lignes/colonnes lorsqu'ils ne tiennent plus.

~~~css
.container {
    display: flex;
    flex-wrap: wrap;
}
~~~

| Valeur | Effet |
|---|---|
| `nowrap` | une seule ligne/colonne |
| `wrap` | retour à la ligne/colonne |
| `wrap-reverse` | retour avec inversion de l'axe secondaire |

### Exemple

~~~css
.container {
    display: flex;
    flex-wrap: wrap;
}
~~~

Sans `wrap` :

~~~text
[A] [B] [C] [D] [E] [F] ...
─────────────────────────────
        dépassement
~~~

Avec `wrap` :

~~~text
[A] [B] [C]
[D] [E] [F]
~~~

---

# 5. `flex-flow`

Raccourci pour :

- `flex-direction`
- `flex-wrap`

~~~css
.container {
    flex-flow: row wrap;
}
~~~

Équivaut à :

~~~css
.container {
    flex-direction: row;
    flex-wrap: wrap;
}
~~~

### Exemples

~~~css
flex-flow: row nowrap;
flex-flow: row wrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap;
~~~

---

# 6. `justify-content`

Répartit les éléments **sur l'axe principal**.

~~~css
.container {
    display: flex;
    justify-content: center;
}
~~~

## Valeurs principales

| Valeur | Effet |
|---|---|
| `flex-start` | éléments au début |
| `flex-end` | éléments à la fin |
| `center` | éléments centrés |
| `space-between` | espace entre les éléments |
| `space-around` | espace autour des éléments |
| `space-evenly` | espaces parfaitement égaux |

---

## `flex-start`

~~~css
justify-content: flex-start;
~~~

~~~text
[A][B][C]────────────
^
début
~~~

---

## `flex-end`

~~~css
justify-content: flex-end;
~~~

~~~text
────────────[A][B][C]
             ^
            fin
~~~

---

## `center`

~~~css
justify-content: center;
~~~

~~~text
──────[A][B][C]──────
~~~

---

## `space-between`

~~~css
justify-content: space-between;
~~~

~~~text
[A]────────[B]────────[C]
^                       ^
début                   fin
~~~

Pas d'espace supplémentaire aux extrémités.

---

## `space-around`

~~~css
justify-content: space-around;
~~~

~~~text
──[A]────[B]────[C]──
  ↑       ↑       ↑
 espace autour
~~~

Chaque élément possède un espace autour de lui.

L'espace entre deux éléments est donc **deux fois l'espace situé au bord**.

---

## `space-evenly`

~~~css
justify-content: space-evenly;
~~~

~~~text
───[A]───[B]───[C]───
   ↑     ↑     ↑
 espaces identiques
~~~

Les espaces sont identiques :

- avant le premier ;
- entre les éléments ;
- après le dernier.

---

# 7. `align-items`

Aligne les éléments **sur l'axe secondaire**.

~~~css
.container {
    align-items: center;
}
~~~

| Valeur | Effet |
|---|---|
| `stretch` | étire les éléments |
| `flex-start` | début de l'axe secondaire |
| `flex-end` | fin de l'axe secondaire |
| `center` | centre |
| `baseline` | aligne les lignes de base du texte |

### Exemple avec `row`

~~~text
cross axis
    ↓

┌─────────────────────────┐
│                         │
│    [A] [B] [C]          │ ← center
│                         │
└─────────────────────────┘
```

Avec :

~~~css
align-items: flex-start;
~~~

les éléments vont en haut.

Avec :

~~~css
align-items: flex-end;
~~~

ils vont en bas.

---

# 8. `align-content`

`align-content` concerne **l'ensemble des lignes/colonnes générées par `flex-wrap`**.

C'est une distinction importante :

- `align-items` → position des **items à l'intérieur d'une ligne**
- `align-content` → position des **lignes/colonnes elles-mêmes**

`align-content` n'a généralement d'effet que lorsqu'il y a plusieurs lignes/colonnes.

---

## Valeurs

| Valeur | Effet |
|---|---|
| `stretch` | étire les lignes/colonnes |
| `flex-start` | regroupe au début |
| `flex-end` | regroupe à la fin |
| `center` | centre le groupe |
| `space-between` | espace entre les lignes |
| `space-around` | espace autour des lignes |
| `space-evenly` | espaces égaux |

---

# 9. L'exercice Mimo

Énoncé :

> Make the flex items that don't fit go to the top of the container instead of the bottom.

Dans ton exercice :

~~~css
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
~~~

Comme la direction est `column`, les éléments se remplissent **verticalement**.

Lorsqu'ils ne tiennent plus, `wrap` crée une nouvelle colonne.

Pour demander que ces nouvelles colonnes soient regroupées **en haut** :

~~~css
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
}
~~~

### Pourquoi `align-content` ?

Parce que `wrap` crée plusieurs colonnes.

On ne cherche donc pas à déplacer individuellement les éléments :

~~~text
colonne 1       colonne 2

[A]             [D]
[B]             [E]
[C]             [F]
```

On cherche à positionner **les colonnes résultantes** dans le conteneur.

Avec :

~~~css
align-content: flex-start;
~~~

elles sont regroupées au début de l'axe secondaire.

Dans ce cas, cela correspond au **haut** du conteneur.

---

# 10. `align-self`

Permet de modifier l'alignement d'un **seul flex item**.

~~~css
.item {
    align-self: center;
}
~~~

Valeurs principales :

| Valeur | Effet |
|---|---|
| `auto` | utilise `align-items` du parent |
| `stretch` | étire |
| `flex-start` | début |
| `flex-end` | fin |
| `center` | centre |
| `baseline` | ligne de base |

Exemple :

~~~css
.container {
    display: flex;
    align-items: flex-start;
}

.special {
    align-self: flex-end;
}
~~~

Tous les éléments sont en haut sauf `.special`.

---

# 11. `gap`

Permet de définir un espace entre les flex items.

~~~css
.container {
    display: flex;
    gap: 20px;
}
~~~

### Horizontal et vertical identiques

~~~css
gap: 20px;
~~~

### Valeurs différentes

~~~css
gap: 10px 20px;
~~~

Signifie :

~~~text
10px → espace entre les lignes
20px → espace entre les colonnes
~~~

On peut aussi utiliser :

~~~css
row-gap: 10px;
column-gap: 20px;
~~~

---

# 12. `order`

Permet de modifier l'ordre visuel des flex items.

~~~css
.item1 {
    order: 3;
}

.item2 {
    order: 1;
}

.item3 {
    order: 2;
}
~~~

Résultat :

~~~text
item2 → item3 → item1
~~~

Par défaut :

~~~css
order: 0;
~~~

> `order` modifie l'ordre visuel, pas nécessairement l'ordre logique du document HTML. Il faut donc l'utiliser avec précaution pour l'accessibilité.

---

# 13. Propriétés des flex items

Les propriétés suivantes s'appliquent aux **enfants** du conteneur Flexbox :

| Propriété | Rôle |
|---|---|
| `order` | ordre visuel |
| `flex-grow` | capacité à grandir |
| `flex-shrink` | capacité à rétrécir |
| `flex-basis` | taille de base |
| `flex` | raccourci des trois précédentes |
| `align-self` | alignement individuel |

---

# 14. `flex-grow`

Détermine la capacité d'un élément à prendre l'espace disponible.

~~~css
.item {
    flex-grow: 1;
}
~~~

Exemple :

~~~css
.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 2;
}
~~~

`item2` recevra deux fois plus d'espace supplémentaire que `item1`.

---

# 15. `flex-shrink`

Détermine la capacité d'un élément à rétrécir lorsque l'espace manque.

~~~css
.item {
    flex-shrink: 1;
}
~~~

Valeur par défaut :

~~~css
flex-shrink: 1;
~~~

Pour empêcher un élément de rétrécir :

~~~css
flex-shrink: 0;
~~~

---

# 16. `flex-basis`

Définit la taille de base d'un flex item avant la distribution de l'espace disponible.

~~~css
.item {
    flex-basis: 200px;
}
~~~

Avec `flex-direction: row`, cela correspond généralement à une largeur de base.

Avec `flex-direction: column`, cela correspond généralement à une hauteur de base.

---

# 17. `flex`

Raccourci pour :

~~~text
flex-grow
flex-shrink
flex-basis
~~~

Exemple :

~~~css
.item {
    flex: 1 1 200px;
}
~~~

Signifie :

~~~text
grow   = 1
shrink = 1
basis  = 200px
~~~

Cas très fréquent :

~~~css
.item {
    flex: 1;
}
~~~

Les éléments peuvent alors se partager l'espace disponible.

---

# 18. Mémo `justify-content` vs `align-items`

C'est probablement la distinction la plus importante à retenir.

~~~text
                 AXE SECONDAIRE
                       ↓
             align-items
                       ↓

        ┌───────────────────────────┐
        │                           │
        │      [A] [B] [C]          │
        │                           │
        └───────────────────────────┘
          ─────────────────────────→
                 AXE PRINCIPAL
                 justify-content
~~~

Avec :

~~~css
flex-direction: row;
~~~

~~~text
justify-content → horizontal
align-items     → vertical
~~~

Avec :

~~~css
flex-direction: column;
~~~

~~~text
justify-content → vertical
align-items     → horizontal
~~~

> **Ne pas mémoriser "justify = horizontal".**
>
> Il faut mémoriser :
>
> **`justify-content` = axe principal**  
> **`align-items` = axe secondaire**

---

# 19. Mémo `align-items` vs `align-content`

| Propriété | Agit sur |
|---|---|
| `align-items` | les éléments dans une ligne/colonne |
| `align-self` | un élément particulier |
| `align-content` | les lignes/colonnes lorsqu'il y en a plusieurs |

`align-content` devient particulièrement important avec :

~~~css
flex-wrap: wrap;
~~~

---

# 20. Mémo général du conteneur Flexbox

~~~css
.container {

    /* Activation */
    display: flex;

    /* Axe principal */
    flex-direction: row;

    /* Retour à la ligne/colonne */
    flex-wrap: nowrap;

    /* Raccourci direction + wrap */
    flex-flow: row nowrap;

    /* Répartition sur l'axe principal */
    justify-content: flex-start;

    /* Alignement sur l'axe secondaire */
    align-items: stretch;

    /* Alignement des lignes/colonnes */
    align-content: stretch;

    /* Espacement */
    gap: 20px;
}
~~~

---

# 21. Tableau récapitulatif

| Propriété | S'applique à | Fonction | Valeurs importantes |
|---|---|---|---|
| `display` | parent | active Flexbox | `flex` |
| `flex-direction` | parent | définit l'axe principal | `row`, `column`, `row-reverse`, `column-reverse` |
| `flex-wrap` | parent | autorise plusieurs lignes/colonnes | `nowrap`, `wrap`, `wrap-reverse` |
| `flex-flow` | parent | raccourci | direction + wrap |
| `justify-content` | parent | répartit sur l'axe principal | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | parent | aligne les items sur l'axe secondaire | `stretch`, `flex-start`, `center`, `flex-end`, `baseline` |
| `align-content` | parent | positionne les lignes/colonnes | `stretch`, `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `gap` | parent | espace entre les items | longueur |
| `align-self` | enfant | surcharge `align-items` | `auto`, `stretch`, `flex-start`, `center`, `flex-end`, `baseline` |
| `order` | enfant | change l'ordre visuel | entier |
| `flex-grow` | enfant | permet de grandir | nombre |
| `flex-shrink` | enfant | permet de rétrécir | nombre |
| `flex-basis` | enfant | taille de base | longueur, `auto` |
| `flex` | enfant | raccourci grow/shrink/basis | ex. `1 1 200px` |

---

# 22. Les trois propriétés à retenir en priorité

Si tu dois retenir seulement trois propriétés pour commencer :

~~~css
.container {
    display: flex;

    justify-content: center;

    align-items: center;
}
~~~

Cela permet déjà de faire énormément de mises en page.

Et dès que plusieurs lignes/colonnes apparaissent :

~~~css
.container {
    flex-wrap: wrap;
    align-content: flex-start;
}
~~~

---

# 23. Mini-mémo mental

~~~text
DISPLAY
  ↓
  flex
  │
  ├── flex-direction → direction de l'axe principal
  │
  ├── flex-wrap → autoriser plusieurs lignes/colonnes
  │
  ├── justify-content → répartir sur l'axe principal
  │
  ├── align-items → aligner les items sur l'axe secondaire
  │
  ├── align-content → aligner les lignes/colonnes
  │
  └── gap → espace entre les items


ENFANT
  │
  ├── order
  ├── flex-grow
  ├── flex-shrink
  ├── flex-basis
  ├── flex
  └── align-self
~~~

> **La clé de Flexbox : toujours commencer par identifier l'axe principal.**
>
> `flex-direction` → détermine l'axe  
> `justify-content` → travaille sur cet axe  
> `align-items` → travaille sur l'autre axe

# Mémo CSS — Grid

CSS Grid sert à créer des mises en page **en lignes et colonnes**.

---

## 1. Activer Grid

```css
.container {
    display: grid;
}
```

Une fois `display: grid` activé, on peut définir les colonnes et les lignes.

---

## 2. `grid-template-columns`

Définit les **colonnes** de la grille.

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px;
}
```

→ 2 colonnes de `200px`.

### Avec différentes tailles

```css
grid-template-columns: 200px 1fr 2fr;
```

→ 3 colonnes :

| Colonne | Taille |
|---|---:|
| 1 | 200px |
| 2 | 1 fraction |
| 3 | 2 fractions |

`fr` signifie **fraction de l'espace disponible**.

---

# 3. L'unité `fr`

`fr` = fraction de l'espace disponible.

```css
grid-template-columns: 1fr 1fr;
```

→ deux colonnes de même largeur.

```css
grid-template-columns: 1fr 2fr;
```

→ la deuxième colonne fait deux fois la largeur de la première.

```css
grid-template-columns: 1fr 1fr 1fr;
```

→ trois colonnes identiques.

---

# 4. La fonction `repeat()`

`repeat()` permet de répéter une définition.

### Exemple

```css
grid-template-columns: repeat(2, 2fr);
```

Signifie :

```css
grid-template-columns: 2fr 2fr;
```

Donc :

> `repeat(nombre, valeur)`

| Syntaxe | Équivalent |
|---|---|
| `repeat(2, 1fr)` | `1fr 1fr` |
| `repeat(3, 1fr)` | `1fr 1fr 1fr` |
| `repeat(4, 100px)` | `100px 100px 100px 100px` |
| `repeat(2, 2fr)` | `2fr 2fr` |

### Exemple courant

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

→ grille de **3 colonnes égales**.

---

# 5. `repeat()` peut contenir plusieurs valeurs

```css
grid-template-columns: repeat(2, 100px 1fr);
```

équivaut à :

```css
grid-template-columns:
    100px 1fr
    100px 1fr;
```

Donc `repeat()` ne répète pas forcément une seule valeur.

---

# 6. `grid-template-rows`

Définit les **lignes**.

```css
.container {
    display: grid;
    grid-template-rows: 100px 200px;
}
```

→ première ligne : `100px`

→ deuxième ligne : `200px`

On peut également utiliser `fr` :

```css
grid-template-rows: 1fr 2fr;
```

---

# 7. Colonnes + lignes

```css
.container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
}
```

On obtient :

```text
┌────────┬────────┬────────┐
│        │        │        │ 100px
├────────┼────────┼────────┤
│        │        │        │ 100px
└────────┴────────┴────────┘
```

→ 3 colonnes × 2 lignes.

---

# 8. `gap`

Permet de créer un espace entre les éléments.

```css
.container {
    display: grid;
    gap: 10px;
}
```

Même espace entre :

- les colonnes
- les lignes

### `column-gap`

```css
column-gap: 20px;
```

Espace entre les colonnes.

### `row-gap`

```css
row-gap: 10px;
```

Espace entre les lignes.

### Les deux

```css
gap: 10px 20px;
```

Signifie :

```text
ligne :    10px
colonne :  20px
```

---

# 9. `grid-auto-columns` et `grid-auto-rows`

Permettent de définir la taille des lignes/colonnes **créées automatiquement**.

```css
grid-auto-rows: 100px;
```

Toutes les lignes automatiques font `100px`.

---

# 10. `grid-auto-flow`

Définit comment les éléments sont placés automatiquement.

```css
grid-auto-flow: row;
```

Placement ligne par ligne.

```css
grid-auto-flow: column;
```

Placement colonne par colonne.

```css
grid-auto-flow: dense;
```

Le navigateur essaie de combler les espaces disponibles.

---

# 11. Positionner un élément dans la grille

On peut indiquer les lignes de début et de fin.

```css
.item {
    grid-column: 1 / 3;
}
```

L'élément occupe les colonnes 1 et 2.

```css
.item {
    grid-row: 1 / 3;
}
```

L'élément occupe les lignes 1 et 2.

---

# 12. `span`

Permet de dire combien de colonnes/lignes un élément doit occuper.

```css
.item {
    grid-column: span 2;
}
```

→ occupe 2 colonnes.

```css
.item {
    grid-row: span 3;
}
```

→ occupe 3 lignes.

Très pratique pour les layouts complexes.

---

# 13. `grid-template-areas`

Permet de nommer les zones de la grille.

```css
.container {
    display: grid;

    grid-template-areas:
        "header header"
        "menu   main"
        "footer footer";
}
```

Puis :

```css
.header {
    grid-area: header;
}

.menu {
    grid-area: menu;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
```

Cela permet de construire une structure très lisible.

---

# 14. Alignement des éléments

## `justify-items`

Alignement **horizontal** des éléments dans leurs cellules.

```css
justify-items: start;
justify-items: center;
justify-items: end;
justify-items: stretch;
```

| Valeur | Effet |
|---|---|
| `start` | début |
| `center` | centre |
| `end` | fin |
| `stretch` | étire l'élément |

---

## `align-items`

Alignement **vertical** des éléments dans leurs cellules.

```css
align-items: start;
align-items: center;
align-items: end;
align-items: stretch;
```

---

## `place-items`

Raccourci pour les deux :

```css
place-items: center;
```

équivaut à :

```css
align-items: center;
justify-items: center;
```

---

# 15. Alignement de toute la grille

## `justify-content`

Positionne **l'ensemble de la grille** horizontalement dans son conteneur.

```css
justify-content: start;
justify-content: center;
justify-content: end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

## `align-content`

Même principe verticalement.

```css
align-content: start;
align-content: center;
align-content: end;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

### À retenir

```text
justify-items  → contenu des cellules horizontalement
align-items    → contenu des cellules verticalement

justify-content → grille entière horizontalement
align-content   → grille entière verticalement
```

---

# 16. `place-content`

Raccourci :

```css
place-content: center;
```

équivaut à :

```css
align-content: center;
justify-content: center;
```

---

# 17. `minmax()`

Permet de définir une taille minimale et maximale.

```css
grid-template-columns: repeat(3, minmax(100px, 1fr));
```

Chaque colonne :

- minimum : `100px`
- maximum : `1fr`

Très utile pour créer des grilles adaptatives.

---

# 18. `auto-fit` et `auto-fill`

Très utiles pour les layouts responsives.

### `auto-fit`

```css
grid-template-columns:
    repeat(auto-fit, minmax(200px, 1fr));
```

Le navigateur crée automatiquement autant de colonnes que possible.

Exemple :

```text
Grand écran

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│      │ │      │ │      │ │      │
└──────┘ └──────┘ └──────┘ └──────┘


Petit écran

┌──────┐ ┌──────┐
│      │ │      │
└──────┘ └──────┘
```

Très pratique pour éviter de gérer manuellement plusieurs tailles d'écran.

---

# 19. `auto-fill` vs `auto-fit`

```css
repeat(auto-fill, minmax(200px, 1fr))
```

et

```css
repeat(auto-fit, minmax(200px, 1fr))
```

sont proches.

La différence concerne principalement la façon dont les **colonnes vides** sont gérées lorsque l'espace disponible permettrait d'en créer davantage.

Dans la majorité des layouts classiques :

```css
auto-fit
```

est souvent le choix intuitif pour obtenir une grille responsive.

---

# 20. Exemple complet

```css
.container {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    grid-template-rows:
        repeat(2, 150px);

    gap: 20px;

    justify-items: center;
    align-items: center;
}
```

Cela signifie :

```text
display: grid
        ↓
3 colonnes égales
        ↓
2 lignes de 150px
        ↓
20px entre les cellules
        ↓
éléments centrés dans leurs cellules
```

---

# 21. Le mémo mental

Pour une grille, penser dans cet ordre :

```text
1. display
      ↓
   display: grid

2. STRUCTURE
      ↓
   grid-template-columns
   grid-template-rows

3. RÉPÉTITION
      ↓
   repeat()

4. ESPACEMENT
      ↓
   gap
   row-gap
   column-gap

5. ALIGNEMENT DES ÉLÉMENTS
      ↓
   justify-items
   align-items

6. ALIGNEMENT DE LA GRILLE
      ↓
   justify-content
   align-content

7. POSITIONNEMENT
      ↓
   grid-column
   grid-row
   span

8. RESPONSIVE
      ↓
   minmax()
   auto-fit
   auto-fill
```

---

# 22. Les valeurs à connaître en priorité

| Propriété | Valeurs importantes |
|---|---|
| `display` | `grid` |
| `grid-template-columns` | `px`, `%`, `fr`, `auto`, `repeat()` |
| `grid-template-rows` | `px`, `%`, `fr`, `auto`, `repeat()` |
| `gap` | longueur |
| `justify-items` | `start`, `center`, `end`, `stretch` |
| `align-items` | `start`, `center`, `end`, `stretch` |
| `justify-content` | `start`, `center`, `end`, `space-between`, `space-around`, `space-evenly` |
| `align-content` | `start`, `center`, `end`, `space-between`, `space-around`, `space-evenly` |
| `grid-column` | lignes / `span` |
| `grid-row` | lignes / `span` |
| `grid-auto-flow` | `row`, `column`, `dense` |
| `minmax()` | minimum + maximum |
| `repeat()` | nombre + motif |
| `auto-fit` | grille responsive |
| `auto-fill` | grille responsive |

---

## ⭐ À retenir absolument

```css
grid-template-columns: repeat(3, 1fr);
```

= **3 colonnes de même largeur**

```css
grid-template-columns: repeat(2, 2fr);
```

= **2 colonnes de 2 fractions**

```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
```

= **3 colonnes, minimum 200px, pouvant grandir**

```css
grid-template-columns:
    repeat(auto-fit, minmax(200px, 1fr));
```

= **grille responsive automatique**

Et surtout :

> `repeat()` ne fait rien de magique : il évite simplement d'écrire plusieurs fois la même définition de colonne ou de ligne.
