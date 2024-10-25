async function searchBooks() {
    const query = document.getElementById("search-input").value.trim();
    if (!query) {
        alert("Veuillez entrer un terme de recherche");
        return;
    }

    const loader = document.getElementById("loader");
    loader.style.display = "block"; // Affiche le loader
    const container = document.getElementById("data-container");
    container.innerHTML = ""; // Vide les résultats précédents

    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(
                query
            )}&limit=40`
        );

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        displayBooks(data.docs);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    } finally {
        loader.style.display = "none"; // Cache le loader
    }
}

function displayBooks(books) {
    const container = document.getElementById("data-container");
    const template = document.getElementById("book-template").content;

    books.forEach((book) => {
        const bookClone = template.cloneNode(true);

        const coverId = book.cover_i;
        bookClone.querySelector(".book-image").src = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : "https://via.placeholder.com/128x180?text=Pas+d'image";
        bookClone.querySelector(".book-title").textContent =
            book.title || "Titre non disponible";
        bookClone.querySelector(".book-description").textContent =
            book.first_publish_year
                ? `Première publication : ${book.first_publish_year}`
                : "Date de publication non disponible";
        bookClone.querySelector(".book-author").textContent = book.author_name
            ? `Auteur(s): ${book.author_name.join(", ")}`
            : "Auteur inconnu";

        container.appendChild(bookClone);
    });
}
