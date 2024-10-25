## Démo

[démo](https://christophe-008.github.io/book-finder/)

# Recherche de Livres

Ce projet permet de rechercher des livres à l'aide de l'API Open Library. L'utilisateur peut entrer un terme de recherche, et le système affichera jusqu'à 40 résultats, y compris le titre, la couverture, la description et les auteurs des livres. Un loader est affiché pendant le chargement des résultats.

## Fonctionnalités

-   Recherche de livres par titre
-   Affichage des résultats avec couverture, titre, description et auteur
-   Gestion d'un loader pendant le chargement des données
-   Sémantique HTML appropriée avec utilisation de la balise `<form>`

## Technologies Utilisées

-   HTML
-   CSS
-   JavaScript (Vanilla)
-   API Open Library

## Installation

Aucune installation spécifique n'est requise. Il suffit de télécharger le fichier HTML et de l'ouvrir dans un navigateur.

1. Téléchargez le fichier HTML.
2. Ouvrez-le dans votre navigateur Web.
3. Entrez un terme de recherche et cliquez sur "Rechercher".

## Utilisation de l'API

Le projet utilise l'API Open Library pour récupérer les données des livres. La requête est effectuée avec un paramètre de recherche et limite le nombre de résultats à 40.

### Exemple d'URL de l'API

[https://openlibrary.org/search.json?q={terme_de_recherche}&limit=40](https://openlibrary.org/search.json?q={terme_de_recherche}&limit=40)

## Sources

-   [Open Library API Documentation](https://openlibrary.org/developers/api)
-   [Documentation de la balise `<template>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/template)
-   [Personnalisez votre loader GIF](https://loading.io/)
