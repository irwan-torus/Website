// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a page with movie grid
    if (document.getElementById('featured-movies')) {
        loadFeaturedMovies();
    }
    if (document.getElementById('all-movies')) {
        loadAllMovies();
    }
    if (document.getElementById('tv-shows')) {
        loadTVShows();
    }
    if (document.getElementById('franchises')) {
        loadFranchises();
    }
});

const moviesData = [
    { 
        id: "john-wick-4",
        title: "John Wick 4", 
        year: 2023, 
        rating: 8.2, 
        poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        trailer: "https://www.youtube.com/embed/qEVUtrk8_B4",
        synopsis: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        duration: "2h 49m",
        genre: "Action, Crime, Thriller",
        director: "Chad Stahelski",
        cast: "Keanu Reeves, Donnie Yen, Bill Skarsgård"
    },
    { 
        id: "mission-impossible",
        title: "Mission: Impossible", 
        year: 2023, 
        rating: 8.0, 
        poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
        synopsis: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins.",
        duration: "2h 43m",
        genre: "Action, Adventure, Thriller",
        director: "Christopher McQuarrie",
        cast: "Tom Cruise, Hayley Atwell, Ving Rhames"
    },
    // Add other movies similarly
];

function loadFeaturedMovies() {
    const featuredGrid = document.getElementById('featured-movies');
    featuredGrid.innerHTML = '';

    moviesData.slice(0, 5).forEach(movie => {
        featuredGrid.innerHTML += createMovieCard(movie);
    });
}

function loadAllMovies() {
    const movieGrid = document.getElementById('all-movies');
    movieGrid.innerHTML = '';

    moviesData.forEach(movie => {
        movieGrid.innerHTML += createMovieCard(movie);
    });
}

function createMovieCard(movie) {
    return `
        <a href="movies/${movie.id}.html" class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">★ ${movie.rating}</span>
                </div>
            </div>
        </a>
    `;
}

function playMovie() {
    alert("Film dimulai... Nikmati aksi!");
}

function submitReview() {
    const confirmSend = confirm("Yakin ingin mengirim review?");
    if (confirmSend) {
        const name = prompt("Siapa nama Anda?");
        alert("Terima kasih atas review-nya, " + (name || "Anonymous") + "!");
        return false;
    }
    return false;
}