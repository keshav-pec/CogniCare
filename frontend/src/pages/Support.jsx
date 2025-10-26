import { useState, useEffect } from 'react';
import './Support.css';

function Support() {
  const [specialists, setSpecialists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('find');

  useEffect(() => {
    const mockSpecialists = [
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Neurologist',
        rating: 4.8,
        reviews: 156,
        distance: 2.3,
        address: '123 Medical Plaza, Suite 400',
        phone: '(555) 123-4567',
        accepting: true,
        experience: 15
      },
      {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Geriatrician',
        rating: 4.9,
        reviews: 203,
        distance: 4.1,
        address: '456 Health Center Dr',
        phone: '(555) 234-5678',
        accepting: true,
        experience: 20
      },
      {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Neuropsychologist',
        rating: 4.7,
        reviews: 98,
        distance: 5.8,
        address: '789 Wellness Ave',
        phone: '(555) 345-6789',
        accepting: false,
        experience: 12
      }
    ];
    setSpecialists(mockSpecialists);
  }, []);

  return (
    <div className="support-page">
      <div className="support-header">
        <h1>Support & Guidance 🤝</h1>
        <p className="subtitle">
          Your roadmap to cognitive health support
        </p>
      </div>

      <div className="tab-navigation">
        <button
          className={`tab-btn ${selectedTab === 'find' ? 'active' : ''}`}
          onClick={() => setSelectedTab('find')}
        >
          🔍 Find Specialists
        </button>
        <button
          className={`tab-btn ${selectedTab === 'roadmap' ? 'active' : ''}`}
          onClick={() => setSelectedTab('roadmap')}
        >
          🗺️ Your Roadmap
        </button>
        <button
          className={`tab-btn ${selectedTab === 'resources' ? 'active' : ''}`}
          onClick={() => setSelectedTab('resources')}
        >
          📚 Resources
        </button>
      </div>

      {selectedTab === 'find' && (
        <div className="tab-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by specialty, name, or location..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="specialists-list">
            {specialists.map(specialist => (
              <div key={specialist.id} className="specialist-card">
                <div className="specialist-header">
                  <div className="specialist-avatar">
                    {specialist.name.charAt(0)}
                  </div>
                  <div className="specialist-info">
                    <h3>{specialist.name}</h3>
                    <p className="specialty">{specialist.specialty}</p>
                    <div className="rating">
                      <span className="stars">⭐ {specialist.rating}</span>
                      <span className="review-count">({specialist.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="specialist-status">
                    {specialist.accepting ? (
                      <span className="status-badge accepting">Accepting New Patients</span>
                    ) : (
                      <span className="status-badge not-accepting">Not Accepting</span>
                    )}
                  </div>
                </div>

                <div className="specialist-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{specialist.address}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📞</span>
                    <span>{specialist.phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🚗</span>
                    <span>{specialist.distance} miles away</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👨‍⚕️</span>
                    <span>{specialist.experience} years experience</span>
                  </div>
                </div>

                <div className="specialist-actions">
                  <button className="view-profile-btn">View Profile</button>
                  <button className="book-btn">Book Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'roadmap' && (
        <div className="tab-content">
          <div className="roadmap-section">
            <h2>🗺️ Your Dementia Roadmap</h2>
            <p className="roadmap-intro">
              A step-by-step guide to help you navigate your cognitive health journey.
            </p>

            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Understand Your Assessment Results</h3>
                  <p>
                    Review your cognitive assessment scores and identify areas of concern.
                    Our AI analysis provides insights into your cognitive strengths and
                    areas that may need attention.
                  </p>
                  <button className="step-action">View My Results</button>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Consult with a Healthcare Professional</h3>
                  <p>
                    Schedule an appointment with a neurologist, geriatrician, or
                    neuropsychologist. Bring your CogniCare assessment report to your
                    appointment.
                  </p>
                  <button className="step-action">Find Specialists</button>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Get a Formal Clinical Diagnosis</h3>
                  <p>
                    A professional diagnosis may include physical exams, blood tests,
                    brain imaging (MRI/CT), and comprehensive cognitive assessments.
                  </p>
                  <div className="info-box">
                    <strong>What to expect:</strong> The diagnostic process typically
                    takes 2-4 appointments and includes various tests to rule out other
                    conditions.
                  </div>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Develop a Treatment Plan</h3>
                  <p>
                    Work with your healthcare team to create a personalized plan that may
                    include medications, lifestyle changes, cognitive therapy, and support
                    services.
                  </p>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Build Your Support Network</h3>
                  <p>
                    Connect with support groups, caregivers, and community resources.
                    Inform family members and plan for future care needs.
                  </p>
                  <button className="step-action">Find Support Groups</button>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Stay Engaged with Cognitive Activities</h3>
                  <p>
                    Continue using CogniCare's brain stimulation games, maintain social
                    connections, and engage in activities that challenge your mind.
                  </p>
                  <button className="step-action">Play Brain Games</button>
                </div>
              </div>
            </div>

            <div className="conversation-starters">
              <h3>💬 Talking to Family About Cognitive Concerns</h3>
              <div className="starter-cards">
                <div className="starter-card">
                  <h4>Opening the Conversation</h4>
                  <p>
                    "I've noticed some changes in my memory lately, and I'd like to talk
                    about them with you."
                  </p>
                </div>
                <div className="starter-card">
                  <h4>Asking for Support</h4>
                  <p>
                    "I'm planning to see a doctor about my cognitive health. Would you be
                    willing to come with me?"
                  </p>
                </div>
                <div className="starter-card">
                  <h4>Discussing Plans</h4>
                  <p>
                    "Let's talk about what kind of support I might need in the future and
                    how we can prepare together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'resources' && (
        <div className="tab-content">
          <div className="resources-section">
            <h2>📚 Helpful Resources</h2>

            <div className="resource-categories">
              <div className="resource-category">
                <h3>🏥 Medical Organizations</h3>
                <ul className="resource-list">
                  <li>
                    <a href="#" className="resource-link">
                      Alzheimer's Association
                    </a>
                    <p>Support, education, and research for Alzheimer's disease</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      National Institute on Aging
                    </a>
                    <p>Research and information on aging and cognitive health</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      Dementia Society
                    </a>
                    <p>Support and resources for people living with dementia</p>
                  </li>
                </ul>
              </div>

              <div className="resource-category">
                <h3>📞 Helplines & Support</h3>
                <ul className="resource-list">
                  <li>
                    <strong>24/7 Helpline:</strong> 1-800-272-3900
                    <p>Free, confidential support and information</p>
                  </li>
                  <li>
                    <strong>Caregiver Support:</strong> 1-800-445-8106
                    <p>Assistance for family caregivers</p>
                  </li>
                </ul>
              </div>

              <div className="resource-category">
                <h3>📖 Educational Materials</h3>
                <ul className="resource-list">
                  <li>
                    <a href="#" className="resource-link">
                      Understanding Dementia Guide
                    </a>
                    <p>Comprehensive guide to types, symptoms, and treatments</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      Brain Health Tips
                    </a>
                    <p>Science-backed strategies for maintaining cognitive health</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      Caregiver's Handbook
                    </a>
                    <p>Practical advice for family caregivers</p>
                  </li>
                </ul>
              </div>

              <div className="resource-category">
                <h3>👥 Community Support</h3>
                <ul className="resource-list">
                  <li>
                    <a href="#" className="resource-link">
                      Local Support Groups
                    </a>
                    <p>Connect with others in your area</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      Online Forums
                    </a>
                    <p>Virtual communities for sharing experiences</p>
                  </li>
                  <li>
                    <a href="#" className="resource-link">
                      Educational Workshops
                    </a>
                    <p>Upcoming events and training sessions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
