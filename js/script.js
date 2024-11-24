const books = [
    { title: "The Dragon's Lair", author: "Emma Firescale", genre: "Fantasy", likes: ["dragons"] },
    { title: "Wizard's First Spell", author: "Merlin Jr.", genre: "Magic", likes: ["magic", "wizards"] },
    { title: "Scales and Sorcery", author: "Drake Spellbound", genre: "Fantasy", likes: ["dragons", "magic"] }
];

function getRecommendations() {
    const preferences = [];
    if (document.getElementById("dragons").checked) preferences.push("dragons");
    if (document.getElementById("magic").checked) preferences.push("magic");
    if (document.getElementById("wizards").checked) preferences.push("wizards");

    const recommendations = books.filter(book => 
        preferences.some(pref => book.likes.includes(pref))
    );

    displayRecommendations(recommendations);
}

function displayRecommendations(recommendations) {
    const recDiv = document.getElementById("recommendations");
    recDiv.innerHTML = "<h3>Your Magical Book Recommendations:</h3>";
    recommendations.forEach(book => {
        recDiv.innerHTML += `
            <div class="book">
                <h4>${book.title}</h4>
                <p>By ${book.author}</p>
                <p>Genre: ${book.genre}</p>
            </div>
        `;
    });
}
