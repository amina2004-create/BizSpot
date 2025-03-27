// Suggestions Data
const suggestionsData = [
    "Top Startups", "Best Rated", "Business Services", "Tech Giants",
    "Events & Fun", "Explore Local Gems", "Consultants", "Restaurants",
    "Shops", "Freelancers", "Health & Wellness", "Fitness Centers"
];

// Function to Show Suggestions
function showSuggestions() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

    if (input) {
        const filteredSuggestions = suggestionsData.filter(item =>
            item.toLowerCase().includes(input)
        );

        if (filteredSuggestions.length) {
            suggestionsBox.style.display = 'block';
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = suggestion;
                suggestionItem.onclick = () => {
                    document.getElementById('searchBar').value = suggestion;
                    suggestionsBox.style.display = 'none';
                    showCategoryDetails(suggestion.toLowerCase());  // Category details ko call bhi kiya yahan
                };
                suggestionsBox.appendChild(suggestionItem);
            });
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
}

// Hide Suggestions on Outside Click
document.addEventListener('click', (e) => {
    if (!document.getElementById('searchContainer').contains(e.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});

// Toggle Dark/Light Mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const modeToggle = document.getElementById('modeToggle');

    // Change icon 🌙 or ☀
    modeToggle.textContent = body.classList.contains('dark-mode') ? '☀' : '🌙';
}

// Show Category Details (pehle wala feature bhi add kar diya!)
function showCategoryDetails(category) {
    const categoryInfo = document.getElementById('category-info');
    const categoryDetails = document.getElementById('category-details');

    let content = `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                   <p>Explore the best ${category} options around.</p>`;

    // Custom details for specific categories
    if (category === 'restaurants') {
        content = `<h3>Top Restaurants</h3>
                   <p>Explore the best restaurants in your area.</p>`;
    } else if (category === 'shops') {
        content = `<h3>Best Shops</h3>
                   <p>Find the best shopping spots around.</p>`;
    } else if (category === 'hotels') {
        content = `<h3>Hotels for Stay</h3>
                   <p>Find the perfect hotel for your stay.</p>`;
    }

    categoryInfo.innerHTML = content;
    categoryDetails.classList.add('active');
}