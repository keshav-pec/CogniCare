# CogniCare Setup & Installation Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn package manager

### Installation Steps

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

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5050`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on: `http://localhost:3039`

Open your browser and navigate to `http://localhost:3039`

---

## 📁 Project Structure

```
CogniCare/
├── backend/                 # Node.js + Express API
│   ├── routes/
│   │   ├── assessmentRoutes.js    # Cognitive assessment endpoints
│   │   ├── gamesRoutes.js         # Brain games endpoints
│   │   ├── specialistRoutes.js    # Healthcare provider endpoints
│   │   └── userRoutes.js          # User profile & progress endpoints
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env
│
└── frontend/                # React + Vite application
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx          # Navigation component
    │   ├── pages/
    │   │   ├── Dashboard.jsx       # Main dashboard
    │   │   ├── Assessment.jsx      # Cognitive testing
    │   │   ├── Games.jsx           # Brain stimulation games
    │   │   ├── Support.jsx         # Support & guidance
    │   │   └── Progress.jsx        # Progress tracking
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## 🎯 Features Overview

### 1. Cognitive Diagnosis 🧠
Navigate to `/assessment` to access:
- Memory & Logic Tests
- Voice Pattern Analysis UI
- Facial Expression Recognition
- Reaction & Coordination Tests
- Comprehensive AI-driven reports

### 2. Brain Stimulation Games 🎮
Navigate to `/games` to play:
- Memory Match (implemented demo)
- Number Sequence
- Word Builder
- Sudoku
- Pattern Recognition
- Quick Math

### 3. Support & Guidance 🤝
Navigate to `/support` to find:
- **Find Specialists Tab**: Search for healthcare providers
- **Your Roadmap Tab**: 6-step guide for cognitive health journey
- **Resources Tab**: Educational materials and helplines

### 4. Progress Tracking 📊
Navigate to `/progress` to view:
- Weekly statistics
- Daily activity charts
- Cognitive performance breakdown
- Achievements & badges
- Personalized insights

---

## 🔧 API Endpoints

### Assessment Routes (`/api/assessments`)
- `POST /submit` - Submit assessment results
- `GET /history/:userId` - Get assessment history
- `GET /report/:userId` - Get comprehensive report

### Games Routes (`/api/games`)
- `GET /list` - Get available games
- `POST /score` - Submit game score
- `GET /stats/:userId` - Get gaming statistics

### Specialist Routes (`/api/specialists`)
- `GET /nearby?lat=&lon=&radius=` - Find nearby specialists
- `GET /:id` - Get specialist details
- `POST /review` - Submit review
- `GET /:id/reviews` - Get specialist reviews

### User Routes (`/api/users`)
- `GET /profile/:userId` - Get user profile
- `PUT /profile/:userId` - Update profile
- `GET /progress/:userId` - Get weekly progress

---

## 🎨 Theme & Design

The application uses a **light theme** with:
- Primary Color: #4A90E2 (Professional Blue)
- Secondary Color: #50C878 (Success Green)
- Background: #F8F9FA (Light Gray)
- Text: #2C3E50 (Dark Gray)

All components are:
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible with semantic HTML
- ✅ Smooth animations and transitions
- ✅ Consistent spacing and typography

---

## 🔄 Development Workflow

### Backend Development
```bash
cd backend
npm run dev    # Runs with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev    # Runs Vite dev server with HMR
```

### Building for Production

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build     # Creates optimized production build
npm run preview   # Preview production build
```

---

## 🌟 Next Steps for Development

### Phase 1: Core Functionality
- [ ] Integrate real AI/ML models for assessment analysis
- [ ] Add user authentication (JWT/OAuth)
- [ ] Connect to actual database (MongoDB/PostgreSQL)
- [ ] Implement voice recording & analysis
- [ ] Add camera integration for facial recognition

### Phase 2: Enhanced Features
- [ ] Real-time notifications
- [ ] Social features (share progress)
- [ ] Calendar integration for appointments
- [ ] Export reports as PDF
- [ ] Multi-language support

### Phase 3: Advanced Capabilities
- [ ] Machine learning for personalized recommendations
- [ ] Integration with wearables (fitness trackers)
- [ ] Telemedicine video consultations
- [ ] Medication reminders
- [ ] Caregiver portal

---

## 📱 Mobile Considerations

The app is fully responsive, but for native mobile:
- Consider React Native version
- Add push notifications
- Implement offline mode
- Use device sensors (accelerometer for coordination tests)

---

## 🔒 Security & Privacy

Important considerations for production:
- [ ] HIPAA compliance for health data
- [ ] End-to-end encryption
- [ ] Secure authentication
- [ ] Data anonymization
- [ ] Regular security audits
- [ ] Privacy policy & terms of service

---

## 📊 Analytics & Monitoring

Consider integrating:
- Google Analytics for user behavior
- Sentry for error tracking
- LogRocket for session replay
- Performance monitoring

---

## 🤝 Contributing

For team development:
1. Create feature branches
2. Follow naming convention: `feature/your-feature-name`
3. Write descriptive commit messages
4. Test before pushing
5. Create pull requests for review

---

## 📞 Support

For questions or issues:
- Create GitHub issues
- Check documentation
- Contact development team

---

**Built with ❤️ for CogniCare - Making cognitive health accessible to everyone**
