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
  },

  // ----------------------------------------------------
  // TAMIL MOVIES DATABASE
  // ----------------------------------------------------

  // 😊 Happy Tamil Movies
  {
    id: 17,
    title: "Kadhal Short Kadhai",
    genre: "Tamil Romance / Comedy",
    mood: "happy",
    duration: 25,
    thumbnailUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: "7.9",
    description: "A breezy and hilarious Tamil short film capturing the comedic misunderstandings of a young couple on their first dating anniversary in Chennai.",
    year: 2024
  },
  {
    id: 18,
    title: "Chennai Laughter Therapy",
    genre: "Tamil Comedy / Documentary",
    mood: "happy",
    duration: 52,
    thumbnailUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    rating: "8.1",
    description: "An lighthearted Tamil mockumentary following a group of eccentric stand-up comedians trying to set up Chennai's first laughter yoga club.",
    year: 2023
  },
  {
    id: 19,
    title: "KD Engira Karuppudurai",
    genre: "Tamil Comedy / Drama",
    mood: "happy",
    duration: 95,
    thumbnailUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: "8.4",
    description: "An 80-year-old man escapes his family who are planning a mercy killing (Thalaikoothal) and forms an unlikely, joyful friendship with a smart orphan boy.",
    year: 2019
  },
  {
    id: 20,
    title: "Thiruchitrambalam",
    genre: "Tamil Rom-Com / Drama",
    mood: "happy",
    duration: 130,
    thumbnailUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.2",
    description: "Follows Pazham, a delivery driver who navigates his complex relationships with his strict father and grandfather, finding solace in his childhood best friend Shobana.",
    year: 2022
  },

  // 😢 Stressed Tamil Movies (Soothing / Nostalgic / Comfort)
  {
    id: 21,
    title: "Soothing Nilgiri Rain",
    genre: "Tamil Ambient / Travel",
    mood: "stressed",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.0",
    description: "Escape stress with slow-motion footage of monsoons sweeping across Ooty tea estates, set to a therapeutic classical acoustic guitar track.",
    year: 2024
  },
  {
    id: 22,
    title: "Marina Sunset Walk",
    genre: "Tamil Slow Cinema",
    mood: "stressed",
    duration: 58,
    thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "7.7",
    description: "A calming documentary capturing a late evening walk along Marina Beach, observing the waves, street food stalls, and soothing sea breeze.",
    year: 2023
  },
  {
    id: 23,
    title: "Mudhal Kanave",
    genre: "Tamil Romance / Comfort",
    mood: "stressed",
    duration: 94,
    thumbnailUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "7.9",
    description: "A cozy romantic drama set in a rainy hill station, featuring soothing acoustic melodies and quiet, comforting dialogue.",
    year: 2024
  },
  {
    id: 24,
    title: "96",
    genre: "Tamil Romance / Nostalgia",
    mood: "stressed",
    duration: 158,
    thumbnailUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.6",
    description: "Two high school sweethearts meet after 22 years at a school reunion, spending a quiet night together walking through Chennai talking about their past.",
    year: 2018
  },

  // 🔥 Adventurous Tamil Movies
  {
    id: 25,
    title: "The Chase: Chennai Chronicles",
    genre: "Tamil Action / Short",
    mood: "adventurous",
    duration: 24,
    thumbnailUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: "7.6",
    description: "A high-octane short film tracking an undercover detective through the crowded streets and shipping docks of Chennai in search of a container heist.",
    year: 2024
  },
  {
    id: 26,
    title: "Vortex: The First Hunt",
    genre: "Tamil Crime Thriller",
    mood: "adventurous",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.0",
    description: "An investigative officer traces a mysterious pattern of crimes occurring in the rural forests of Tamil Nadu, starting a dangerous game of survival.",
    year: 2023
  },
  {
    id: 27,
    title: "Anya: The Cyber-Hacker",
    genre: "Tamil Techno Thriller",
    mood: "adventurous",
    duration: 90,
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    rating: "8.1",
    description: "A rogue computer genius hacks into the grid to expose a massive financial scam, leading to a high-tech manhunt across the city.",
    year: 2025
  },
  {
    id: 28,
    title: "Vikram",
    genre: "Tamil Action / Thriller",
    mood: "adventurous",
    duration: 175,
    thumbnailUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.4",
    description: "A special black-ops squad is assigned to investigate a series of masked vigilante killings, uncovering a drug cartel empire and a legendary ghost agent.",
    year: 2022
  },

  // 🧠 Thoughtful Tamil Movies
  {
    id: 29,
    title: "Nirantharam",
    genre: "Tamil Philosophical Short",
    mood: "thoughtful",
    duration: 26,
    thumbnailUrl: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.2",
    description: "A deep philosophical dialogue between a grandfather and his grandchild about life, the flow of time, and legacy, set in a traditional courtyard home.",
    year: 2024
  },
  {
    id: 30,
    title: "Kani",
    genre: "Tamil Nature / Philosophy",
    mood: "thoughtful",
    duration: 53,
    thumbnailUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.3",
    description: "A visually striking eco-philosophy piece that explores the relationship between the indigenous Kani tribe and the Western Ghats forests.",
    year: 2023
  },
  {
    id: 31,
    title: "Kuthiraivaal",
    genre: "Tamil Magical Realism",
    mood: "thoughtful",
    duration: 92,
    thumbnailUrl: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "7.8",
    description: "A man wakes up one morning to find that he has grown a horse's tail. His search for the truth of this anomaly leads him into dreams and memories.",
    year: 2021
  },
  {
    id: 32,
    title: "Jai Bhim",
    genre: "Tamil Legal / Courtroom Drama",
    mood: "thoughtful",
    duration: 164,
    thumbnailUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ToyStoryTribute.mp4",
    rating: "8.9",
    description: "A righteous activist-lawyer fights in the Madras High Court to secure justice for a tribal woman whose husband went missing from police custody.",
    year: 2021
  },

  // ----------------------------------------------------
  // MORE TAMIL BLOCKBUSTERS & GLOBAL TITLES
  // ----------------------------------------------------

  // 😊 Happy — Tamil
  {
    id: 33,
    title: "Master",
    genre: "Tamil Action / Comedy",
    mood: "happy",
    duration: 179,
    thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: "7.8",
    description: "An alcoholic professor is transferred to a juvenile school where he clashes with a ruthless gangster who uses the children for criminal activities. Packed with mass entertainment.",
    year: 2021
  },
  {
    id: 34,
    title: "Naanum Rowdy Dhaan",
    genre: "Tamil Romantic Comedy",
    mood: "happy",
    duration: 150,
    thumbnailUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    rating: "7.6",
    description: "A wannabe rowdy accidentally falls in love with a hearing-impaired girl while helping her track down the man who destroyed her family. Hilarious and heartwarming.",
    year: 2015
  },
  {
    id: 35,
    title: "Comali",
    genre: "Tamil Comedy / Satire",
    mood: "happy",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: "7.2",
    description: "A man wakes up from a coma after 16 years and struggles to understand the dramatic changes in society, technology, and culture in modern Chennai.",
    year: 2019
  },
  {
    id: 36,
    title: "Vaayai Moodi Pesavum",
    genre: "Tamil Comedy / Romance",
    mood: "happy",
    duration: 90,
    thumbnailUrl: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: "7.5",
    description: "A mysterious virus hits a city and takes away everyone's ability to speak. A young couple must navigate their budding romance using only gestures and expressions.",
    year: 2014
  },
  {
    id: 37,
    title: "Meendum Oru Kadhal Kadhai",
    genre: "Tamil Romance / Feel-Good",
    mood: "happy",
    duration: 25,
    thumbnailUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    rating: "7.4",
    description: "A sweet Tamil short film about two strangers who bond over shared playlists during a late-night train journey from Coimbatore to Chennai.",
    year: 2024
  },

  // 😢 Stressed — Tamil (Soothing / Comfort / Healing)
  {
    id: 38,
    title: "Oh My Kadavule",
    genre: "Tamil Fantasy / Drama",
    mood: "stressed",
    duration: 130,
    thumbnailUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "7.9",
    description: "After a painful divorce, a man gets a second chance from God to relive the last 5 years and fix his mistakes. A comforting story about love and acceptance.",
    year: 2020
  },
  {
    id: 39,
    title: "Alaipayuthey Revisited",
    genre: "Tamil Nostalgia / Romance",
    mood: "stressed",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.3",
    description: "A calming montage short revisiting the soothing A.R. Rahman melodies and rain-soaked visuals of the Tamil classic Alaipayuthey.",
    year: 2024
  },
  {
    id: 40,
    title: "Sillu Karupatti",
    genre: "Tamil Anthology / Romance",
    mood: "stressed",
    duration: 90,
    thumbnailUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.1",
    description: "Four gentle short stories about different shades of love — between an elderly couple, app-matched strangers, hearing-impaired lovers, and old college friends.",
    year: 2019
  },
  {
    id: 41,
    title: "Munnar Mist Diaries",
    genre: "Tamil Travel / Ambient",
    mood: "stressed",
    duration: 52,
    thumbnailUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "7.8",
    description: "A slow-paced Tamil travel film capturing the misty morning tea plantations, waterfalls, and quiet village roads of Munnar. Purely therapeutic viewing.",
    year: 2023
  },

  // 🔥 Adventurous — Tamil
  {
    id: 42,
    title: "Soorarai Pottru",
    genre: "Tamil Drama / Biopic",
    mood: "adventurous",
    duration: 153,
    thumbnailUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.7",
    description: "Inspired by Captain Gopinath, a retired army captain battles corrupt bureaucrats and wealthy rivals to launch India's first affordable airline for common people.",
    year: 2020
  },
  {
    id: 43,
    title: "Karnan",
    genre: "Tamil Action / Social Drama",
    mood: "adventurous",
    duration: 163,
    thumbnailUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    rating: "8.3",
    description: "A fiery young man from an oppressed village fights against systemic injustice when the authorities deny his people even basic transportation to their own land.",
    year: 2021
  },
  {
    id: 44,
    title: "Asuran",
    genre: "Tamil Action / Revenge Drama",
    mood: "adventurous",
    duration: 141,
    thumbnailUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.5",
    description: "A pacifist farmer is forced to go on the run with his son after the boy attacks a powerful landlord. His buried violent past resurfaces to protect his family.",
    year: 2019
  },
  {
    id: 45,
    title: "Kaithi",
    genre: "Tamil Action / Thriller",
    mood: "adventurous",
    duration: 145,
    thumbnailUrl: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: "8.5",
    description: "An ex-convict freshly released from prison must rescue a truck full of poisoned cops and fight an entire drug syndicate in one relentless, high-octane night.",
    year: 2019
  },
  {
    id: 46,
    title: "Jallikattu Stampede",
    genre: "Tamil Action / Short",
    mood: "adventurous",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: "7.9",
    description: "A breathtaking short documentary capturing the raw adrenaline and ancient tradition of Jallikattu bull-taming in rural Madurai during Pongal.",
    year: 2024
  },

  // 🧠 Thoughtful — Tamil
  {
    id: 47,
    title: "Super Deluxe",
    genre: "Tamil Black Comedy / Drama",
    mood: "thoughtful",
    duration: 176,
    thumbnailUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ToyStoryTribute.mp4",
    rating: "8.4",
    description: "Four bizarre, interconnected stories unravel across one chaotic day in Chennai — involving a dead body, a transgender parent, a priest, and a teen obsessed with adult films.",
    year: 2019
  },
  {
    id: 48,
    title: "Pariyerum Perumal",
    genre: "Tamil Social Drama",
    mood: "thoughtful",
    duration: 150,
    thumbnailUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.6",
    description: "A Dalit law student befriends a privileged girl in college. Their unlikely bond is tested by deeply entrenched caste discrimination and societal violence.",
    year: 2018
  },
  {
    id: 49,
    title: "Mandela",
    genre: "Tamil Political Satire",
    mood: "thoughtful",
    duration: 95,
    thumbnailUrl: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.0",
    description: "A barber in a small village becomes the deciding vote in a tied local election. Both political parties desperately try to win his favour in hilarious ways.",
    year: 2021
  },
  {
    id: 50,
    title: "Visaranai",
    genre: "Tamil Crime / Drama",
    mood: "thoughtful",
    duration: 105,
    thumbnailUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    rating: "8.5",
    description: "Four innocent migrant workers are picked up by police and tortured into confessing a crime they didn't commit, exposing the brutal underbelly of custodial violence.",
    year: 2015
  },
  {
    id: 51,
    title: "Iraivi",
    genre: "Tamil Drama / Philosophy",
    mood: "thoughtful",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "7.9",
    description: "A meditative tale exploring the lives of four men whose selfish pursuits profoundly affect the women around them, questioning ego and masculine entitlement.",
    year: 2016
  },

  // ----------------------------------------------------
  // MORE GLOBAL / INTERNATIONAL MOVIES
  // ----------------------------------------------------

  // 😊 Happy — Global
  {
    id: 52,
    title: "Pixel Parade",
    genre: "Animation / Family",
    mood: "happy",
    duration: 88,
    thumbnailUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    rating: "8.4",
    description: "In a world where video game characters come alive at night, a glitchy side character goes on a hilarious quest to prove he deserves to be the hero.",
    year: 2025
  },
  {
    id: 53,
    title: "Midnight Ramen",
    genre: "Japanese Slice-of-Life",
    mood: "happy",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    rating: "7.9",
    description: "A charming short about a Tokyo ramen shop that only opens after midnight, where lonely strangers find warmth, humor, and unexpected friendship over steaming bowls.",
    year: 2024
  },

  // 😢 Stressed — Global
  {
    id: 54,
    title: "Northern Lights Lullaby",
    genre: "Nordic Ambient / Nature",
    mood: "stressed",
    duration: 30,
    thumbnailUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    rating: "8.2",
    description: "Breathtaking time-lapse footage of the Aurora Borealis dancing across Scandinavian skies, paired with a deeply soothing ambient piano score.",
    year: 2024
  },
  {
    id: 55,
    title: "The Lighthouse Keeper's Calm",
    genre: "Drama / Meditative",
    mood: "stressed",
    duration: 92,
    thumbnailUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.0",
    description: "A retired sailor tends to a remote lighthouse on the Irish coast, finding peace in solitude, crashing waves, and slow-cooked meals by the fire.",
    year: 2023
  },

  // 🔥 Adventurous — Global
  {
    id: 56,
    title: "Shadow Protocol",
    genre: "Spy Thriller",
    mood: "adventurous",
    duration: 128,
    thumbnailUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    rating: "8.3",
    description: "A double agent embedded in a rogue intelligence cell must execute a daring heist in Berlin while evading both allies and enemies who want him dead.",
    year: 2025
  },
  {
    id: 57,
    title: "K2: The Final Ridge",
    genre: "Mountaineering / Documentary",
    mood: "adventurous",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    rating: "8.7",
    description: "Follow an elite climbing team on their harrowing attempt to summit K2 via the treacherous bottleneck in winter conditions never before documented on camera.",
    year: 2024
  },

  // 🧠 Thoughtful — Global
  {
    id: 58,
    title: "The Last Librarian",
    genre: "Dystopian Drama",
    mood: "thoughtful",
    duration: 130,
    thumbnailUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ToyStoryTribute.mp4",
    rating: "8.6",
    description: "In 2089, where all books are banned and knowledge is digitally controlled, one elderly librarian secretly preserves the world's last physical library underground.",
    year: 2025
  },
  {
    id: 59,
    title: "Paper Boats",
    genre: "Japanese Drama / Philosophy",
    mood: "thoughtful",
    duration: 28,
    thumbnailUrl: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    rating: "8.1",
    description: "A poetic Japanese short about a retired origami artist who folds one paper boat each day and places it in the river, carrying a written memory downstream.",
    year: 2024
  },
  {
    id: 60,
    title: "The Equation of Everything",
    genre: "Sci-Fi / Philosophy",
    mood: "thoughtful",
    duration: 55,
    thumbnailUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    rating: "8.4",
    description: "A mathematician on her deathbed believes she has finally solved a unified theory of physics, but her proof requires confronting a deeply personal paradox.",
    year: 2023
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
