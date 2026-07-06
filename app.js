/**
 * MoodStream Application Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    allMovies: [],
    selectedMood: 'happy',
    selectedDuration: 90, // default is 90 mins
    searchQuery: ''
  };

  // DOM Elements
  const moodSelector = document.getElementById('mood-selector');
  const timeCapsules = document.getElementById('time-capsules');
  const generateBtn = document.getElementById('generate-btn');
  const searchInput = document.getElementById('search-input');
  
  const carouselRecommendations = document.getElementById('carousel-recommendations');
  const carouselAll = document.getElementById('carousel-all');
  
  const recommendationsTitle = document.getElementById('recommendations-title');
  const allMoviesTitle = document.querySelector('#all-movies-section .feed-title');
  
  // Modal Elements
  const movieModal = document.getElementById('movie-modal');
  const modalClose = document.getElementById('modal-close');
  const modalVideo = document.getElementById('modal-video');
  const modalMovieTitle = document.getElementById('modal-movie-title');
  const modalMovieRating = document.getElementById('modal-movie-rating');
  const modalMovieYear = document.getElementById('modal-movie-year');
  const modalMovieDuration = document.getElementById('modal-movie-duration');
  const modalMovieGenre = document.getElementById('modal-movie-genre');
  const modalMovieMood = document.getElementById('modal-movie-mood');
  const modalMovieDesc = document.getElementById('modal-movie-desc');
  const heroWatchBtn = document.getElementById('hero-watch-btn');

  // Carousel Arrow Controls
  const arrowPrevRec = document.getElementById('arrow-prev-rec');
  const arrowNextRec = document.getElementById('arrow-next-rec');
  const arrowPrevAll = document.getElementById('arrow-prev-all');
  const arrowNextAll = document.getElementById('arrow-next-all');

  // Initialize the App
  async function init() {
    setupEventListeners();
    await loadMoviesData();
  }

  // Set up Event Handlers
  function setupEventListeners() {
    // Mood Buttons Selection
    moodSelector.addEventListener('click', (e) => {
      const button = e.target.closest('.mood-btn');
      if (!button) return;

      // Toggle active states
      document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      state.selectedMood = button.dataset.mood;
    });

    // Time Capsule Selection
    timeCapsules.addEventListener('click', (e) => {
      const capsule = e.target.closest('.time-capsule');
      if (!capsule) return;

      // Toggle active states
      document.querySelectorAll('.time-capsule').forEach(cap => cap.classList.remove('active'));
      capsule.classList.add('active');
      
      state.selectedDuration = parseInt(capsule.dataset.minutes, 10);
    });

    // Generate Recommendations Trigger
    generateBtn.addEventListener('click', () => {
      generateRecommendations();
      // Smooth scroll down to recommendation section
      document.getElementById('recommendations-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Search Bar Input
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      filterAllMoviesFeed();
    });

    // Modal Close Triggers
    modalClose.addEventListener('click', closeMovieModal);
    movieModal.addEventListener('click', (e) => {
      if (e.target === movieModal) {
        closeMovieModal();
      }
    });

    // Hero Blockbuster Watch Button
    heroWatchBtn.addEventListener('click', () => {
      // Hero movie is Hyperdrive 2099 (id 12 in mock list)
      const heroMovie = state.allMovies.find(m => m.id === 12);
      if (heroMovie) {
        openMovieModal(heroMovie);
      } else if (state.allMovies.length > 0) {
        // Fallback to first movie
        openMovieModal(state.allMovies[0]);
      }
    });

    // Carousel Navigation Arrows
    setupCarouselScroll(arrowPrevRec, arrowNextRec, carouselRecommendations);
    setupCarouselScroll(arrowPrevAll, arrowNextAll, carouselAll);

    // Escape Key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && movieModal.classList.contains('active')) {
        closeMovieModal();
      }
    });
  }

  // Setup Carousel horizontal scroll offsets
  function setupCarouselScroll(prevBtn, nextBtn, carouselElement) {
    prevBtn.addEventListener('click', () => {
      const scrollAmount = carouselElement.clientWidth * 0.75;
      carouselElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const scrollAmount = carouselElement.clientWidth * 0.75;
      carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Load movies from configuration layer
  async function loadMoviesData() {
    renderLoadingStates();
    
    try {
      if (window.MoodStreamConfig && window.MoodStreamConfig.fetchMovies) {
        state.allMovies = await window.MoodStreamConfig.fetchMovies();
      } else {
        console.error("Config layer not loaded!");
      }
    } catch (error) {
      console.error("Error loading movie catalog:", error);
    }

    renderAllMoviesFeed();
    generateRecommendations();
  }

  // Render Spinner states while loading
  function renderLoadingStates() {
    const spinnerHTML = `
      <div class="loading-container">
        <div class="spinner"></div>
        <p>Loading premium blockbusters...</p>
      </div>
    `;
    carouselRecommendations.innerHTML = spinnerHTML;
    carouselAll.innerHTML = spinnerHTML;
  }

  // Render "All Blockbusters" grid carousel
  function renderAllMoviesFeed() {
    if (state.allMovies.length === 0) {
      carouselAll.innerHTML = '<div class="no-results">No movies found in the library.</div>';
      return;
    }
    renderMoviesList(state.allMovies, carouselAll);
  }

  // Search filter implementation
  function filterAllMoviesFeed() {
    if (!state.searchQuery) {
      allMoviesTitle.textContent = "All Blockbusters";
      renderAllMoviesFeed();
      return;
    }

    const filtered = state.allMovies.filter(movie => {
      return movie.title.toLowerCase().includes(state.searchQuery) ||
             movie.genre.toLowerCase().includes(state.searchQuery) ||
             movie.mood.toLowerCase().includes(state.searchQuery) ||
             movie.year.toString().includes(state.searchQuery);
    });

    allMoviesTitle.innerHTML = `Search Results for "<span>${escapeHTML(state.searchQuery)}</span>"`;
    
    if (filtered.length === 0) {
      carouselAll.innerHTML = '<div class="no-results">No titles match your search criteria. Try another keyword.</div>';
    } else {
      renderMoviesList(filtered, carouselAll);
    }
  }

  // Personalized recommendation builder
  function generateRecommendations() {
    const mood = state.selectedMood;
    const durationLimit = state.selectedDuration;

    // Filter by mood first, then check watch time matches
    const filtered = state.allMovies.filter(movie => {
      // Mood match
      if (movie.mood !== mood) return false;

      // Duration category matching:
      // 30 mins -> movies <= 30 mins
      // 60 mins -> movies > 30 and <= 60 mins
      // 90 mins -> movies > 60 and <= 95 mins
      // 120+ mins -> movies > 95 mins
      if (durationLimit === 30) {
        return movie.duration <= 30;
      } else if (durationLimit === 60) {
        return movie.duration > 30 && movie.duration <= 60;
      } else if (durationLimit === 90) {
        return movie.duration > 60 && movie.duration <= 95;
      } else if (durationLimit === 120) {
        return movie.duration > 95;
      }
      return true;
    });

    // Update section header to state choices
    const moodEmojiMap = {
      happy: '😊',
      stressed: '😢',
      adventurous: '🔥',
      thoughtful: '🧠'
    };
    recommendationsTitle.innerHTML = `Recommendations for you: ${moodEmojiMap[mood] || ''} ${mood.charAt(0).toUpperCase() + mood.slice(1)} &bull; ${durationLimit}${durationLimit === 120 ? '+' : ''} mins`;

    if (filtered.length === 0) {
      // Fallback to general mood movies if no specific duration meets the criteria
      const generalMoodBackup = state.allMovies.filter(movie => movie.mood === mood);
      if (generalMoodBackup.length > 0) {
        recommendationsTitle.innerHTML += ` <span style="font-size: 12px; color: var(--accent-cyan); font-weight: normal;">(Alternative Matches)</span>`;
        renderMoviesList(generalMoodBackup, carouselRecommendations);
      } else {
        carouselRecommendations.innerHTML = '<div class="no-results">No matches. Change filters and try again!</div>';
      }
    } else {
      renderMoviesList(filtered, carouselRecommendations);
    }
  }

  // Render a list of movies into a specific carousel container
  function renderMoviesList(movies, container) {
    container.innerHTML = '';
    
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img class="card-img" src="${movie.thumbnailUrl}" alt="${escapeHTML(movie.title)} poster" loading="lazy">
          <div class="card-overlay"></div>
          <div class="card-badges">
            <span class="card-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              ${movie.rating}
            </span>
            <span class="card-duration">${movie.duration}m</span>
          </div>
        </div>
        <div class="card-details">
          <h4 class="card-title">${escapeHTML(movie.title)}</h4>
          <div class="card-meta">
            <span class="card-genre">${movie.genre}</span>
            <span>${movie.year}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openMovieModal(movie));
      container.appendChild(card);
    });
  }

  // Open details modal and play video trailer
  function openMovieModal(movie) {
    modalMovieTitle.textContent = movie.title;
    modalMovieRating.textContent = movie.rating;
    modalMovieYear.textContent = movie.year;
    modalMovieDuration.textContent = `${movie.duration} mins`;
    modalMovieGenre.textContent = movie.genre;
    modalMovieMood.textContent = `Mood: ${movie.mood}`;
    modalMovieDesc.textContent = movie.description;

    // Load and play the sample trailer URL
    modalVideo.src = movie.videoUrl;
    modalVideo.load();
    
    // Play with fallback handling
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Auto-play was blocked or failed to load. Waiting for user interaction.", error);
      });
    }

    // Toggle CSS classes to display modal
    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background page scroll
  }

  // Close details modal and reset video stream
  function closeMovieModal() {
    movieModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Crucial: Clear video source to completely stop video buffering & sound playback
    modalVideo.pause();
    modalVideo.src = '';
  }

  // Helper function to safely escape HTML characters
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Start initialization
  init();
});
