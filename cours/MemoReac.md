# React — afficher un composant

## 1. Principe général

React permet de construire une interface à partir de **composants**.

Pour afficher un composant React dans une page HTML, plusieurs éléments interviennent :

1. disposer d'un élément HTML servant de **root** ;
2. charger le fichier JavaScript comme **module** ;
3. importer React et les fonctions nécessaires ;
4. définir le composant ;
5. récupérer l'élément `root` dans le DOM ;
6. créer une racine React avec `createRoot()` ;
7. demander à React de rendre le composant avec `render()`.

---

## 2. Préparer le point d'entrée HTML

La page HTML contient un élément qui servira de conteneur à l'application React.

~~~html
<body>
    <div id="root">Loading...</div>
</body>
~~~

Le `div` n'est pas le composant React lui-même.

Il constitue le **point d'ancrage dans le DOM** dans lequel React va afficher l'application.

---

## 3. Charger le JavaScript comme module

Le script est chargé avec :

~~~html
<script type="module" src="./index.js"></script>
~~~

`type="module"` indique au navigateur que le fichier utilise le système de modules JavaScript et notamment :

~~~javascript
import ...
export ...
~~~

---

## 4. Importer React

Dans l'exemple étudié :

~~~javascript
import React from "react";
~~~

React est alors disponible dans le fichier JavaScript.

> Note : les versions modernes de React utilisent généralement le nouveau système JSX qui peut éviter l'import explicite de `React` dans certains fichiers. Le principe du module reste néanmoins identique.

---

## 5. Importer `createRoot`

La fonction `createRoot` est fournie par `react-dom/client`.

~~~javascript
import { createRoot } from "react-dom/client";
~~~

Elle permet de créer la **racine React** qui va gérer le rendu de l'application dans le DOM.

---

## 6. Définir un composant

Un composant React peut être défini comme une fonction.

L'exemple utilise une fonction arrow :

~~~javascript
const MyComponent = () => {
    return <h1>Hello, React</h1>;
};
~~~

Le composant retourne du **JSX**.

Le JSX ressemble à du HTML, mais il est intégré au code JavaScript et sera transformé par l'outillage React.

---

## 7. Récupérer l'élément `root`

On récupère ensuite l'élément HTML précédemment créé :

~~~javascript
const rootElement = document.getElementById("root");
~~~

On obtient ainsi une référence vers :

~~~html
<div id="root"></div>
~~~

---

## 8. Créer la racine React

On passe cet élément à `createRoot()` :

~~~javascript
const root = createRoot(rootElement);
~~~

`root` représente alors la racine React associée à cet élément du DOM.

---

## 9. Afficher le composant

Enfin, on demande à React de rendre le composant :

~~~javascript
root.render(<MyComponent />);
~~~

La notation :

~~~jsx
<MyComponent />
~~~

désigne ici le composant React que l'on souhaite afficher.

---

# Exemple complet

## `index.html`

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="module" src="./index.js"></script>
</head>

<body>
    <div id="root">Loading...</div>
</body>
</html>
~~~

## `index.js`

~~~javascript
import React from "react";
import { createRoot } from "react-dom/client";

const MyComponent = () => {
    return <h1>Hello, React</h1>;
};

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<MyComponent />);
~~~

---

# La chaîne complète

~~~text
HTML
 │
 └── <div id="root">
          │
          ▼
document.getElementById("root")
          │
          ▼
     createRoot(...)
          │
          ▼
        root
          │
          ▼
root.render(<MyComponent />)
          │
          ▼
      React rend le composant
          │
          ▼
   <h1>Hello, React</h1>
~~~

---

# À retenir

| Élément | Rôle |
|---|---|
| `<div id="root">` | Point d'ancrage dans le DOM |
| `type="module"` | Active le système de modules JavaScript |
| `import` | Importe du code depuis un module/package |
| `MyComponent` | Composant React |
| JSX | Syntaxe permettant de décrire l'interface |
| `getElementById()` | Récupère le point d'ancrage HTML |
| `createRoot()` | Crée la racine React |
| `root.render()` | Demande à React d'afficher le composant |
| `<MyComponent />` | Utilisation du composant |

## Vue conceptuelle

React ajoute donc une couche entre le DOM et le code applicatif :

~~~text
                 Application React
                        │
                  Components
                        │
                       JSX
                        │
                   React Root
                        │
                        ▼
                       DOM
~~~

L'idée importante n'est donc pas seulement de « remplacer du HTML par du JSX ».

**Le DOM fournit un point d'entrée, React prend ensuite en charge le rendu et la gestion de l'interface à partir des composants.**