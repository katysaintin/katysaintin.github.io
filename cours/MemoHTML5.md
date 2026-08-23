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

