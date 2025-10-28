# CogniCare: A Holistic Approach to Early Dementia Detection and Cognitive Wellness

A comprehensive, user-friendly mobile and web application that serves as a proactive partner in the journey of cognitive health.

## Project Structure

```
CogniCare/
├── backend/          # Node.js + Express API
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── .env          # Environment variables
│
└── frontend/         # React + Vite application
    ├── src/
    │   ├── App.jsx   # Main App component
    │   ├── App.css   # App styles (light theme)
    │   ├── main.jsx  # Entry point
    │   └── index.css # Global styles
    ├── index.html
    ├── vite.config.js
    └── package.json  # Frontend dependencies
```

## Core Pillars

### 1. Cognitive Diagnosis 🧠
Multi-modal assessment engine for early dementia detection:
- **Memory & Logic Quizzes**: Interactive tests for memory recall and problem-solving
- **Voice Pattern Analysis**: AI-powered speech analysis for vocal biomarkers
- **Facial Expression Recognition**: Emotion detection and analysis
- **Reaction & Coordination Tests**: Psychomotor speed and coordination assessment

### 2. Brain Stimulation 🎮
Mental gymnasium to slow cognitive decline:
- **Puzzles**: Logic puzzles, crosswords, sudoku
- **Memory Games**: Pattern matching and sequence recall
- **Problem Solving**: Strategic challenges and critical thinking
- **Language**: Word games and vocabulary builders

### 3. Support & Guidance 🤝
Clear roadmap for action:
- **Find a Specialist**: Location-aware directory of healthcare providers
- **Reviews & Ratings**: Community-based review system
- **Your Dementia Roadmap**: Personalized guidance and resources
- **Weekly Progress Tracker**: Track engagement and improvement

## Technical Features

- ✅ **Backend**: Node.js with Express.js
- ✅ **Frontend**: React 18 with Vite
- ✅ **Light Theme**: Modern, accessible UI design
- ✅ **AI-Driven Analysis**: Comprehensive cognitive profiling
- ✅ **Real-time Progress Tracking**: Performance analytics and insights

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server** (in the `backend` directory)
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend** (in the `frontend` directory, in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3039`

3. **Access the Application**
   Open your browser and navigate to `http://localhost:3039`

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (production)
For production builds the frontend reads Vite variables from `.env.production` during the build step.

Create or update `frontend/.env.production` with:
```
VITE_API_URL=https://cognicare-back.vercel.app
```

When you build/deploy the frontend (for example to Vercel), Vite will embed the value above and the running frontend will send API requests to the specified backend.

### Optional: test against remote backend during local dev
If you want your local dev server to proxy API calls to the deployed backend (instead of your local backend), set the `DEV_PROXY` environment variable before starting Vite:

```bash
# Example: use the deployed backend during development
export DEV_PROXY=https://cognicare-back.vercel.app
npm run dev
```

The dev server will use `DEV_PROXY` (or `VITE_API_URL`) as the proxy target. If neither is set it will default to `http://localhost:5050`.


## Tech Stack

### Backend
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- dotenv - Environment variable management

### Frontend
- React 18 - UI library
- Vite - Build tool and dev server
- Axios - HTTP client

## Development

- Backend runs on port **5000**
- Frontend runs on port **3039**
- API calls from frontend are proxied to backend automatically

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## License

ISC

---

Built with ❤️ for CogniCare
