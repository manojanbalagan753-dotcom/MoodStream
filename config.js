/**
 * MoodStream Configuration and Data Layer
 * 
 * To switch to your live Java Spring Boot production backend:
 * 1. Change `useMock` to `false`
 * 2. Update `apiUrl` to point to your live deployment (e.g., https://moodstream-backend.onrender.com/api)
 * 
 * Your Spring Boot API should expose:
 * GET /api/movies - Returns the list of movies matching the schema
 */
const API_CONFIG = {
  useMock: true,
  apiUrl: 'https://moodstream-backend.onrender.com/api' // Replace with your live Spring Boot URL
};

// High-quality mock movie database
const MOCK_MOVIES = [
  // 😊 Happy Mood Category
  {
    id: 1,
    title: "The Happy Chef",
    genre: "Feel-Good Comedy",
    mood: "happy",
    duration: 25,
    thumbnailUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: "7.8",
    description: "A short, lighthearted comedy about a chef whose culinary disasters accidentally create the most delicious dishes in town.",
    year: 2024
  },
  {
    id: 2,
    title: "Smile Therapy",
    genre: "Comedy / Docu",
    mood: "happy",
    duration: 58,
    thumbnailUrl: "https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    rating: "8.1",
    description: "A documentary-style comedy exploring the weird and wonderful world of laughter clubs and their infectious joy.",
    year: 2023
  },
  {
    id: 3,
    title: "Love & Gelato",
    genre: "Romantic Comedy",
    mood: "happy",
    duration: 92,
    thumbnailUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: "8.3",
    description: "Two rivals in a picturesque Italian town must team up to save an artisanal gelato shop, finding unexpected sweetness along the way.",
    year: 2025
  },
  {
    id: 4,
    title: "The Grand Fiesta",
    genre: "Musical Comedy",
    mood: "happy",
    duration: 135,
    thumbnailUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.5",
    description: "An epic, heartwarming musical celebration following a family planning the biggest block party in Spanish history.",
    year: 2024
  },

  // 😢 Stressed Mood Category
  {
    id: 5,
    title: "Zen Garden",
    genre: "Ambient / Chill",
    mood: "stressed",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "7.9",
    description: "A beautifully filmed visual journey through Japan's most serene rock gardens, set to soothing acoustic sounds.",
    year: 2024
  },
  {
    id: 6,
    title: "Under the Sea",
    genre: "Nature Documentary",
    mood: "stressed",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.4",
    description: "Dive into a mesmerizing world of colorful coral reefs, slow-moving sea turtles, and calming ocean depths.",
    year: 2023
  },
  {
    id: 7,
    title: "The Cozy Cottage",
    genre: "Cozy Drama",
    mood: "stressed",
    duration: 95,
    thumbnailUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.0",
    description: "A stressed city novelist rents a remote cottage in the Scottish Highlands and finds healing through nature and community.",
    year: 2024
  },
  {
    id: 8,
    title: "A Quiet Sanctuary",
    genre: "Slow Cinema",
    mood: "stressed",
    duration: 125,
    thumbnailUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.2",
    description: "An immersive visual masterpiece documenting the slow changing of seasons in a secluded, ancient forest.",
    year: 2025
  },

  // 🔥 Adventurous Mood Category
  {
    id: 9,
    title: "Skyline Freefall",
    genre: "Action Shorts",
    mood: "adventurous",
    duration: 24,
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: "8.2",
    description: "Go behind the scenes with extreme wingsuit flyers as they jump from skyscrapers and navigate narrow mountain canyons.",
    year: 2024
  },
  {
    id: 10,
    title: "Canyon Quest",
    genre: "Adventure / Travel",
    mood: "adventurous",
    duration: 58,
    thumbnailUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.0",
    description: "A team of explorers attempts to map an uncharted slot canyon system deep in the Utah desert, encountering flash floods and dry falls.",
    year: 2023
  },
  {
    id: 11,
    title: "Sintel's Revenge",
    genre: "Fantasy Action",
    mood: "adventurous",
    duration: 90,
    thumbnailUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    rating: "8.6",
    description: "A young warrior named Sintel searches for her pet dragon, fighting through dangerous lands and confronting her past.",
    year: 2025
  },
  {
    id: 12,
    title: "Hyperdrive 2099",
    genre: "Cyberpunk Action",
    mood: "adventurous",
    duration: 140,
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "9.1",
    description: "In a neon-lit dystopian city, a rogue courier is hired to smuggle a highly classified quantum chip across hostile faction borders.",
    year: 2024
  },

  // 🧠 Thoughtful Mood Category
  {
    id: 13,
    title: "Echoes of Silence",
    genre: "Philosophical Short",
    mood: "thoughtful",
    duration: 26,
    thumbnailUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.3",
    description: "A short, poetic exploration of memory, time, and human connection in an increasingly isolated digital age.",
    year: 2024
  },
  {
    id: 14,
    title: "The Mind Loop",
    genre: "Psychological Drama",
    mood: "thoughtful",
    duration: 52,
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.5",
    description: "Two scientists in a simulation discover that their memories are resetting every hour, leading to a race to find the truth.",
    year: 2023
  },
  {
    id: 15,
    title: "Tears of Steel",
    genre: "Sci-Fi / Drama",
    mood: "thoughtful",
    duration: 90,
    thumbnailUrl: "https://images.unsplash.com/photo-1539628390353-30b9988871a1?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.8",
    description: "A group of scientists in Rotterdam reconstructs a past event using hologram technology to prevent a giant robot from destroying the city.",
    year: 2025
  },
  {
    id: 16,
    title: "Infinite Horizons",
    genre: "Sci-Fi / Philosophy",
    mood: "thoughtful",
    duration: 145,
    thumbnailUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ToyStoryTribute.mp4",
    rating: "9.3",
    description: "A crew on a deep-space expedition to the edge of the observable universe faces existential choices that will alter human history.",
    year: 2024
  }
];

// Unified Fetch API Interface
async function fetchMovies() {
  if (API_CONFIG.useMock) {
    // Simulate network latency (400ms) for realistic backend experience
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_MOVIES);
      }, 400);
    });
  } else {
    // Live endpoint fetch
    try {
      const response = await fetch(`${API_CONFIG.apiUrl}/movies`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch movies from live backend. Falling back to mock data.", error);
      return MOCK_MOVIES;
    }
  }
}

// Export config and fetch function
window.MoodStreamConfig = {
  API_CONFIG,
  fetchMovies
};
