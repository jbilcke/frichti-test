# Choix techniques

## Gestion du state

Pour ces user stories j'ai décidé de conserver les composants SearchBar et Filters
sur la page proposée, où une gestion de l'état via `useState` est suffisante.

Je réserverais la complexité additionnelle de Redux dans le cas où il faudrait par
exemple mettre le composant de recherche dans un header global à toutes les pages,
car dans ce cas là il vaudrait mieux échanger l'information par des événements de
type action Redux.

## Design

J'ai repris certaines icônes SVG du site Frichti, et repris certaines pratiques tels
que les titres soulignés en jaune ou la désactivation des focus outline, bien que
ça ne soit pas recommandé pour l'accessibilité.

## Imports absolus

J'ai ajouté la config nécessaire pour gérer les imports absolus plutôt que relatifs.
Note : il pourrait aussi être décidé de rajouter un préfixe aux imports tels que @/ ou ~/ afin
de mieux faire comprendre aux différents collaboteurs la localisation des fichiers importés.

## Tests de régression de rendu

J'ai installé Storybook Snapshots pour détecter tout changement
qui modifieraient le rendu HTML/CSS.

## Tests fonctionnels (automatisation du navigateur)

J'ai installé QA Wolf qui est un outil au dessus de Playwright, la librairie
Microsoft pour automatiser les tests fonctionnels dans un navigateur.

Ces tests fonctionnels permettent de tester les critères d'acceptation des User
Stories, en suivant une pratique recommandée pour les tests qui est de ne pas
se baser sur les détails cachés d'implémentation (en comparaison l'approche des
tests avec Enzyme peut nécessiter par exemple de connaitre les props et
parfois d'importer des composants React).

Voir le fichier `./qawolf/frichti.test.js`

Normalement il s'utilise dans un contexte de CI et nécessite un peu d'effort de
config des environnements, mais pour l'exercice on peut :

D'abord lancer le serveur :

```
npm start
```

Puis une fois chargé lancer QA Wolf :

```
npm run test:qawolf
```

### Mise en forme du code

J'ai essayé de ne pas trop toucher au code mis à part une règle
`implicit-arrow-linebreak: 0` pour regagner un peu un lisibilité.
