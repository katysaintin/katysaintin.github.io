# Java → Python — Mémo des différences

| Notion / concept | Java | Python | Commentaire / warning |
|---|---|---|---|
| Affichage console | `System.out.println(value);` | `print(value)` | Syntaxe beaucoup plus légère. |
| Fin d'instruction | `statement;` | `statement` | Pas de `;` obligatoire. |
| Booléens | `boolean` avec `true` / `false` | `bool` avec `True` / `False` | Python utilise des valeurs booléennes avec majuscule. |
| Booléen → entier | `active ? 1 : 0` | `int(active)` | `True → 1`, `False → 0`. Pratique pour les interfaces PLC/protocoles. |
| Opérateur logique NOT | `!active` | `not active` | Attention : Python utilise des mots-clés (`not`, `and`, `or`) plutôt que `!`, `&&`, `||`. |
| Typage des variables | `String name = "Katy";` | `name: str = "Katy"` | L'annotation Python est optionnelle et n'impose pas le typage à l'exécution. |
| Réaffectation d'un autre type | `name = 42` → erreur de compilation | `name = 42` → autorisé | Python est dynamiquement typé ; les type hints permettent néanmoins un typage statique avec les outils adaptés. |
| Variable / valeur | `name` désigne la variable ; ` "name" ` est une chaîne | Même distinction | `print(name)` affiche la valeur ; `print("name")` affiche le texte `name`. |