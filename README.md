# MoodStream 🎬

MoodStream is a complete, premium next-generation OTT movie streaming platform. It features an interactive **Personalized Recommendation Engine** that selects the perfect titles based on your current **Mood** and **Available Watch Time**, wrapped in a dark-mode user interface inspired by JioHotstar.

## Features

- **Sleek Dark Mode UI**: Deep grays and blacks accented by glowing neon purple and cyan.
- **Widescreen Hero Area**: Prominently highlights trending blockbusters with direct interactive trailer playback.
- **Mood & Time Personalization**:
  - Select from four moods: 😊 Happy, 😢 Stressed, 🔥 Adventurous, 🧠 Thoughtful.
  - Choose your available watch time: 30 mins, 60 mins, 90 mins, or 120+ mins.
  - Custom recommendation builder matches your criteria.
- **Horizontal JioHotstar Tiles**: Scrolling rails showing poster cards, genre details, rating badges, and durations.
- **Cinema Modal & Player**: Opens details and streams sample trailers using HTML5 video playback, resetting completely upon closing.
- **Live Search**: Live-filters titles by title name, release year, genres, or moods.
- **Decoupled Backend Connection**: Simple configuration toggle allows transitioning from local mock data to a Java Spring Boot REST API.

---

## Getting Started

### 1. Run Locally
Since the application runs entirely on HTML5, CSS3, and Vanilla JavaScript, you can open it directly in Google Chrome:
- Double-click **`index.html`** in your file explorer.
- Or open Chrome and paste:
  ```text
  file:///c:/Users/User/OneDrive/Desktop/Manoj%20Movies/index.html
  ```

### 2. File Overview
- `index.html`: The structural markup.
- `styles.css`: The layout styling, variables, gradients, and animations.
- `config.js`: Central configuration and mock movie database.
- `app.js`: Interactive logic, searches, recommendation filters, and modal controls.

---

## Connecting to Java Spring Boot Production Backend

To replace the mock data with your live Spring Boot production API (e.g., hosted on Render or AWS):

1. Open `config.js`.
2. Modify the `API_CONFIG` object:
   ```javascript
   const API_CONFIG = {
     useMock: false, // Set to false to fetch from your backend API
     apiUrl: 'https://your-production-backend.onrender.com/api' // Your Spring Boot endpoint
   };
   ```
3. Your Spring Boot API endpoint `GET /api/movies` should return a JSON array matching this format:
   ```json
   [
     {
       "id": 1,
       "title": "Hyperdrive 2099",
       "genre": "Cyberpunk Action",
       "mood": "adventurous",
       "duration": 140,
       "thumbnailUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e",
       "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
       "rating": "9.1",
       "description": "In a neon-lit dystopian city, a rogue courier is hired...",
       "year": 2024
     }
   ]
   ```
