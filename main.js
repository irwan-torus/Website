// Movie data with genres
const movieData = [
  { 
    id: "john-wick-4",
    title: "John Wick 4", 
    year: 2023, 
    rating: 8.2, 
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    trailer: "https://www.youtube.com/embed/qEVUtrk8_B4",
    synopsis: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    duration: "2h 49m",
    genres: ["Action", "Thriller"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Donnie Yen, Bill Skarsgård",
    isNew: true,
    isSeries: false,
    isTopRated: true
  },
  { 
    id: "mission-impossible",
    title: "Mission: Impossible", 
    year: 2023, 
    rating: 8.0, 
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    trailer: "https://www.youtube.com/embed/fsQgc9pCyDU?si=OAaBp4XMyE9J7VJd",
    synopsis: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins.",
    duration: "2h 43m",
    genres: ["Action", "Adventure"],
    director: "Christopher McQuarrie",
    cast: "Tom Cruise, Hayley Atwell, Ving Rhames",
    isNew: true,
    isSeries: false,
    isTopRated: true
  },
  { 
    id: "the-batman",
    title: "The Batman", 
    year: 2022, 
    rating: 7.9, 
    poster: "https://image.tmdb.org/t/p/w500/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
    genres: ["Action", "Crime", "Drama"],
    isNew: false,
    isSeries: false,
    isTopRated: true
  },
  { 
    id: "dune",
    title: "Dune", 
    year: 2021, 
    rating: 8.0, 
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
    genres: ["Sci-Fi", "Adventure"],
    isNew: false,
    isSeries: false,
    isTopRated: true
  },
  { 
    id: "no-time-to-die",
    title: "No Time to Die", 
    year: 2021, 
    rating: 7.3, 
    poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    trailer: "https://www.youtube.com/embed/BIhNsAtPbPI",
    genres: ["Action", "Thriller"],
    isNew: false,
    isSeries: false,
    isTopRated: false
  },
  { 
    id: "stranger-things",
    title: "Stranger Things", 
    year: 2016, 
    rating: 8.7, 
    poster: "https://i5.walmartimages.com/seo/Netflix-Stranger-Things-Three-Seasons-One-Sheet-Wall-Poster-14-725-x-22-375_a5922d22-99c4-4fcc-8680-12f0e60a8735.369c0117f826a908ab8505a97c931f0e.jpeg",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
    genres: ["Sci-Fi", "Horror", "Drama"],
    isNew: false,
    isSeries: true,
    isTopRated: true
  },
  { 
    id: "the-mandalorian",
    title: "The Mandalorian", 
    year: 2019, 
    rating: 8.5, 
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    trailer: "https://www.youtube.com/embed/aOC8E8z_ifw",
    genres: ["Sci-Fi", "Action", "Adventure"],
    isNew: true,
    isSeries: true,
    isTopRated: true
  },
  { 
    id: "oppenheimer",
    title: "Oppenheimer", 
    year: 2023, 
    rating: 8.5, 
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
    genres: ["Drama", "History"],
    isNew: true,
    isSeries: false,
    isTopRated: true
  },
  { 
    id: "peaky-blinders",
    title: "Peaky Blinders", 
    year: 2013, 
    rating: 8.8, 
    poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    genres: ["Crime", "Drama"],
    isNew: false,
    isSeries: true,
    isTopRated: true
  },
  { 
    id: "avatar-2",
    title: "Avatar: The Way of Water", 
    year: 2022, 
    rating: 7.6, 
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
    genres: ["Sci-Fi", "Adventure"],
    isNew: true,
    isSeries: false,
    isTopRated: false
  }
];

// Franchise data
const franchiseData = [
  {
    id: "john-wick",
    title: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    movieCount: "4 Movies",
    since: "Since 2014"
  },
  {
    id: "mission-impossible",
    title: "Mission: Impossible",
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    movieCount: "7 Movies",
    since: "Since 1996"
  },
  {
    id: "marvel-cinematic-universe",
    title: "Marvel Cinematic Universe",
    poster: "https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    movieCount: "32 Movies",
    since: "Since 2008"
  },
  {
    id: "fast-and-furious",
    title: "Fast & Furious",
    poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    movieCount: "10 Movies",
    since: "Since 2001"
  },
  {
    id: "james-bond",
    title: "James Bond",
    poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    movieCount: "25 Movies",
    since: "Since 1962"
  },
  {
    id: "harry-potter",
    title: "Harry Potter",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    movieCount: "8 Movies",
    since: "Since 2001"
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight Trilogy",
    poster: "https://image.tmdb.org/t/p/w500/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg",
    movieCount: "3 Movies",
    since: "2005-2012"
  },
  {
    id: "star-wars",
    title: "Star Wars",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    movieCount: "12 Movies",
    since: "Since 1977"
  }
];

// Extract all unique genres
const allGenres = [...new Set(movieData.flatMap(movie => movie.genres))];

// Current page state
let currentPage = 'home';
let currentMovieId = null;

// Load all content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadGenres();
  loadPage('home');
  setupSearch();
  setupNavigation();
});

// Setup navigation links
function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      loadPage(page);
      
      // Update active state
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

// Load genres into dropdown
function loadGenres() {
  const genreDropdown = document.getElementById('genreDropdown');
  genreDropdown.innerHTML = '';
  
  // Add "All Genres" option
  const allGenresLink = document.createElement('a');
  allGenresLink.href = '#';
  allGenresLink.textContent = 'All Genres';
  allGenresLink.onclick = function(e) {
    e.preventDefault();
    filterByGenre('all');
  };
  genreDropdown.appendChild(allGenresLink);
  
  // Add each genre as an option
  allGenres.forEach(genre => {
    const genreLink = document.createElement('a');
    genreLink.href = '#';
    genreLink.textContent = genre;
    genreLink.onclick = function(e) {
      e.preventDefault();
      filterByGenre(genre);
    };
    genreDropdown.appendChild(genreLink);
  });
}

// Load a specific page
function loadPage(page) {
  currentPage = page;
  const appContent = document.getElementById('app-content');
  
  switch(page) {
    case 'home':
      loadHomePage();
      break;
    case 'movies':
      loadMoviesPage();
      break;
    case 'tvshows':
      loadTVShowsPage();
      break;
    case 'franchise':
      loadFranchisePage();
      break;
    case 'movie-detail':
      loadMovieDetailPage(currentMovieId);
      break;
    default:
      loadHomePage();
  }
}

// Load home page
function loadHomePage() {
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = `
    <section class="explosive-hero" style="--hero-image: url('https://keyart.firstfocusinternational.com/wp-content/uploads/2020/12/13175693244f18772338d9b6.24182523.jpg')">
      <div class="hero-content">
        <h1>EXPERIENCE THE ACTION</h1>
        <p class="subtitle">4K • Dolby • Heroic Legacy &copy;</p>
        <div class="hero-buttons">
          <a href="#" class="play-button" onclick="playMovie()">▶ Play Now</a>
          <a href="#" class="trailer-button">🎬 Trailer</a>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- New Releases -->
    <section class="movie-section">
      <h2 class="section-title">🎬 New Releases</h2>
      <div class="movie-grid" id="new-releases"></div>
    </section>

    <!-- Top Series -->
    <section class="movie-section dark-section">
      <h2 class="section-title">📺 Top Series</h2>
      <div class="movie-grid" id="top-series"></div>
    </section>

    <!-- Best Rated Films -->
    <section class="movie-section">
      <h2 class="section-title">⭐ Best Rated Films</h2>
      <div class="movie-grid" id="best-rated"></div>
    </section>

    <!-- Review Form -->
    <section class="movie-section dark-section">
      <h2 class="section-title">💬 Leave a Review</h2>
      <form onsubmit="return submitReview()">
        <input type="text" placeholder="Your Name" required />
        <textarea placeholder="Your Review" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  `;

  loadSection('new-releases', movieData.filter(movie => movie.isNew));
  loadSection('top-series', movieData.filter(movie => movie.isSeries));
  loadSection('best-rated', movieData.filter(movie => movie.isTopRated).sort((a, b) => b.rating - a.rating));
  
  // Setup movie card click events
  setupMovieCardEvents();
}

// Load movies page
function loadMoviesPage() {
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = `
    <section class="explosive-hero" style="--hero-image: url('https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg')">
      <div class="hero-content">
        <h1>EXPLORE OUR MOVIE COLLECTION</h1>
        <p class="subtitle">4K • Dolby • Unlimited Entertainment</p>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <section class="movie-section">
      <h2 class="section-title">🎬 All Movies</h2>
      <div class="movie-grid" id="all-movies"></div>
    </section>
  `;

  loadSection('all-movies', movieData.filter(movie => !movie.isSeries));
  
  // Setup movie card click events
  setupMovieCardEvents();
}

// Load TV shows page
function loadTVShowsPage() {
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = `
    <section class="explosive-hero" style="--hero-image: url('https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg')">
      <div class="hero-content">
        <h1>BINGE-WORTHY TV SHOWS</h1>
        <p class="subtitle">HD • Dolby • Unlimited Episodes</p>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <section class="movie-section">
      <h2 class="section-title">📺 Popular TV Shows</h2>
      <div class="movie-grid" id="tv-shows"></div>
    </section>
  `;

  loadSection('tv-shows', movieData.filter(movie => movie.isSeries));
  
  // Setup movie card click events
  setupMovieCardEvents();
}

// Load franchise page
function loadFranchisePage() {
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = `
    <section class="explosive-hero" style="--hero-image: url('https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg')">
      <div class="hero-content">
        <h1>ICONIC MOVIE FRANCHISES</h1>
        <p class="subtitle">Collections • Sagas • Universes</p>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <section class="movie-section">
      <h2 class="section-title">🎬 Popular Franchises</h2>
      <div class="movie-grid" id="franchises"></div>
    </section>
  `;

  loadFranchises();
}

// Load franchises
function loadFranchises() {
  const franchisesGrid = document.getElementById('franchises');
  if (!franchisesGrid) return;
  
  franchisesGrid.innerHTML = '';
  
  franchiseData.forEach(franchise => {
    franchisesGrid.innerHTML += `
      <a href="#" class="movie-card" data-franchise="${franchise.id}">
        <img src="${franchise.poster}" alt="${franchise.title}" class="movie-poster" />
        <div class="movie-info">
          <h3>${franchise.title}</h3>
          <div class="movie-meta">
            <span>${franchise.movieCount}</span>
            <span>${franchise.since}</span>
          </div>
        </div>
      </a>
    `;
  });
}

// Load movie detail page
function loadMovieDetailPage(movieId) {
  const movie = movieData.find(m => m.id === movieId);
  if (!movie) return loadPage('home');
  
  const appContent = document.getElementById('app-content');
  appContent.innerHTML = `
    <section class="explosive-hero" style="--hero-image: url('${movie.poster}')">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="movie-header">
          <h1>${movie.title.toUpperCase()}</h1>
          <div class="movie-meta-large">
            <span>${movie.year}</span>
            <span class="movie-rating-large">★ ${movie.rating}/10</span>
            <span>${movie.duration || 'N/A'}</span>
            <span class="age-rating">R</span>
          </div>
        </div>
        <div class="hero-buttons">
          <a href="#" class="play-button" onclick="playMovie()">
            <i class="fas fa-play"></i> Play Now
          </a>
          <a href="#trailer" class="trailer-button">
            <i class="fas fa-film"></i> Trailer
          </a>
        </div>
      </div>
    </section>

    <section class="movie-section">
      <div class="movie-detail-container">
        <div class="movie-poster-container">
          <img src="${movie.poster}" alt="${movie.title}" class="movie-poster-large" />
        </div>
        <div class="movie-detail-info">
          <h2 class="synopsis-title">SYNOPSIS</h2>
          <p class="movie-synopsis">
            ${movie.synopsis || 'No synopsis available.'}
          </p>
          
          <div class="movie-details-grid">
            <div class="detail-item">
              <span class="detail-label">Genre:</span>
              <span>${movie.genres.join(', ')}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Director:</span>
              <span>${movie.director || 'N/A'}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Cast:</span>
              <span>${movie.cast || 'N/A'}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Release Date:</span>
              <span>${movie.releaseDate || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="trailer-section" id="trailer">
        <h2 class="section-title">
          <i class="fas fa-play-circle"></i> OFFICIAL TRAILER
        </h2>
        <div class="video-container">
          <iframe src="${movie.trailer}" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
        </div>
      </div>
      
      <div class="reviews-section">
        <h2 class="section-title">
          <i class="fas fa-comments"></i> USER REVIEWS
        </h2>
        <form class="review-form" onsubmit="return submitReview()">
          <div class="form-group">
            <label for="reviewer-name">Your Name:</label>
            <input type="text" id="reviewer-name" placeholder="Enter your name" required />
          </div>
          <div class="form-group">
            <label for="review-text">Your Review:</label>
            <textarea id="review-text" placeholder="Write your review here..." required></textarea>
          </div>
          <button type="submit" class="submit-review-btn">
            <i class="fas fa-paper-plane"></i> Submit Review
          </button>
        </form>
      </div>
    </section>
  `;
}

// Load a specific section
function loadSection(sectionId, movies) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  section.innerHTML = '';
  
  movies.forEach(movie => {
    section.innerHTML += createMovieCard(movie);
  });
}

// Create movie card HTML
function createMovieCard(movie) {
  const badges = [];
  if (movie.isNew) badges.push('<span class="badge">New</span>');
  if (movie.isTopRated) badges.push('<span class="badge" style="background-color: #f5c518;">Top Rated</span>');
  
  return `
    <a href="#" class="movie-card" data-movie="${movie.id}">
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span class="movie-rating">★ ${movie.rating}</span>
        </div>
        ${badges.length > 0 ? `<div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">${badges.join('')}</div>` : ''}
      </div>
    </a>
  `;
}

// Setup movie card click events
function setupMovieCardEvents() {
  document.querySelectorAll('.movie-card[data-movie]').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const movieId = this.getAttribute('data-movie');
      currentMovieId = movieId;
      loadPage('movie-detail');
    });
  });
}

// Filter by genre
function filterByGenre(genre) {
  if (genre === 'all') {
    loadPage(currentPage);
    return;
  }
  
  const filteredMovies = movieData.filter(movie => movie.genres.includes(genre));
  
  switch(currentPage) {
    case 'home':
      loadSection('new-releases', filteredMovies.filter(movie => movie.isNew));
      loadSection('top-series', filteredMovies.filter(movie => movie.isSeries));
      loadSection('best-rated', filteredMovies.filter(movie => movie.isTopRated).sort((a, b) => b.rating - a.rating));
      break;
    case 'movies':
      loadSection('all-movies', filteredMovies.filter(movie => !movie.isSeries));
      break;
    case 'tvshows':
      loadSection('tv-shows', filteredMovies.filter(movie => movie.isSeries));
      break;
  }
  
  // Re-setup movie card events after filtering
  setupMovieCardEvents();
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length < 1) {
      loadPage(currentPage);
      return;
    }
    
    const filteredMovies = movieData.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm)
    );
    
    switch(currentPage) {
      case 'home':
        loadSection('new-releases', filteredMovies.filter(movie => movie.isNew));
        loadSection('top-series', filteredMovies.filter(movie => movie.isSeries));
        loadSection('best-rated', filteredMovies.filter(movie => movie.isTopRated).sort((a, b) => b.rating - a.rating));
        break;
      case 'movies':
        loadSection('all-movies', filteredMovies.filter(movie => !movie.isSeries));
        break;
      case 'tvshows':
        loadSection('tv-shows', filteredMovies.filter(movie => movie.isSeries));
        break;
    }
    
    // Re-setup movie card events after searching
    setupMovieCardEvents();
  });
}

// Alert saat klik play
function playMovie() {
  alert("Film dimulai... Nikmati aksi!");
}

// Confirm saat kirim review
function submitReview() {
  const confirmSend = confirm("Yakin ingin mengirim review?");
  if (confirmSend) {
    const name = prompt("Siapa nama Anda?");
    alert("Terima kasih atas review-nya, " + (name || "Anonymous") + "!");
    return false;
  }
  return false;
}