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

