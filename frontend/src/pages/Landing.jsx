import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero-landing">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h1 className="hero-title animate-fadeInUp">
              Your Journey to <span className="gradient-text">Cognitive Wellness</span> Starts Here
            </h1>
            <p className="hero-description animate-fadeInUp stagger-1">
              CogniCare combines AI-powered assessments, engaging brain games, and expert support 
              to help you detect early signs of cognitive decline and maintain mental fitness.
            </p>
            <div className="hero-cta animate-fadeInUp stagger-2">
              <Link to="/register" className="btn btn-primary">
                Get Started Free
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
            <p className="hero-note animate-fadeInUp stagger-3">
              ✨ Join 10,000+ users improving their cognitive health
            </p>
          </div>
          
          <div className="hero-visual animate-fadeIn stagger-2">
            <div className="video-container">
              <video 
                className="hero-video"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://cdn.pixabay.com/video/2023/04/15/159049-818026306_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="video-overlay">
                <div className="overlay-content">
                  <div className="overlay-item overlay-item-1">
                    <div className="overlay-icon">🧠</div>
                    <div className="overlay-text">
                      <div className="overlay-title">AI-Powered</div>
                      <div className="overlay-subtitle">Assessments</div>
                    </div>
                  </div>
                  
                  <div className="overlay-item overlay-item-2">
                    <div className="overlay-icon">🎮</div>
                    <div className="overlay-text">
                      <div className="overlay-title">15+</div>
                      <div className="overlay-subtitle">Brain Games</div>
                    </div>
                  </div>
                  
                  <div className="overlay-item overlay-item-3">
                    <div className="overlay-icon">🤝</div>
                    <div className="overlay-text">
                      <div className="overlay-title">Support</div>
                      <div className="overlay-subtitle">Specialists & Guidance</div>
                    </div>
                  </div>

                  <div className="overlay-item overlay-item-4">
                    <div className="overlay-icon">📊</div>
                    <div className="overlay-text">
                      <div className="overlay-title">Real-time</div>
                      <div className="overlay-subtitle">Progress Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">A Holistic Approach to Cognitive Health</h2>
          <p className="section-subtitle">Three powerful pillars working together for your brain wellness</p>
        </div>

        <div className="features-grid">
          <div className="feature-card animate-scaleIn stagger-1">
            <div className="feature-icon-wrapper primary">
              <span className="feature-icon">🧠</span>
            </div>
            <h3 className="feature-title">Cognitive Diagnosis</h3>
            <p className="feature-description">
              Multi-modal AI assessments covering memory, voice analysis, facial recognition, 
              and reaction time to detect early signs of cognitive decline.
            </p>
            <ul className="feature-list">
              <li>✓ Memory & recall tests</li>
              <li>✓ Voice pattern analysis</li>
              <li>✓ Facial emotion recognition</li>
              <li>✓ Comprehensive AI reports</li>
            </ul>
          </div>

          <div className="feature-card animate-scaleIn stagger-2">
            <div className="feature-icon-wrapper secondary">
              <span className="feature-icon">🎮</span>
            </div>
            <h3 className="feature-title">Brain Stimulation Games</h3>
            <p className="feature-description">
              Scientifically designed games that make cognitive training fun and effective. 
              Track your progress and celebrate milestones.
            </p>
            <ul className="feature-list">
              <li>✓ Memory matching challenges</li>
              <li>✓ Pattern recognition puzzles</li>
              <li>✓ Attention & focus exercises</li>
              <li>✓ Weekly leaderboards</li>
            </ul>
          </div>

          <div className="feature-card animate-scaleIn stagger-3">
            <div className="feature-icon-wrapper accent">
              <span className="feature-icon">🤝</span>
            </div>
            <h3 className="feature-title">Support & Guidance</h3>
            <p className="feature-description">
              Connect with verified healthcare specialists, access personalized roadmaps, 
              and find resources for you and your caregivers.
            </p>
            <ul className="feature-list">
              <li>✓ Specialist directory</li>
              <li>✓ Personalized care roadmap</li>
              <li>✓ Caregiver resources</li>
              <li>✓ Community support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item animate-fadeInUp stagger-1">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item animate-fadeInUp stagger-2">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Assessments Completed</div>
          </div>
          <div className="stat-item animate-fadeInUp stagger-3">
            <div className="stat-number">95%</div>
            <div className="stat-label">User Satisfaction</div>
          </div>
          <div className="stat-item animate-fadeInUp stagger-4">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-header">
          <h2 className="section-title">How CogniCare Works</h2>
          <p className="section-subtitle">Your path to better cognitive health in four simple steps</p>
        </div>

        <div className="steps-container">
          <div className="step animate-slideInRight stagger-1">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Create Your Account</h3>
              <p>Sign up in seconds and complete your profile to get personalized recommendations</p>
            </div>
          </div>

          <div className="step animate-slideInRight stagger-2">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Take Your First Assessment</h3>
              <p>Complete our comprehensive AI-powered cognitive assessment in just 15 minutes</p>
            </div>
          </div>

          <div className="step animate-slideInRight stagger-3">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Play Brain Games Daily</h3>
              <p>Keep your mind sharp with fun, scientifically designed games tailored to your needs</p>
            </div>
          </div>

          <div className="step animate-slideInRight stagger-4">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Track Your Progress</h3>
              <p>Monitor improvements, get insights, and connect with specialists when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title animate-fadeInUp">Ready to Take Control of Your Cognitive Health?</h2>
          <p className="cta-description animate-fadeInUp stagger-1">
            Join thousands of users who are proactively managing their brain health with CogniCare
          </p>
          <div className="cta-buttons animate-fadeInUp stagger-2">
            <Link to="/register" className="btn btn-primary btn-large">
              Start Your Free Journey
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          <p className="cta-note animate-fadeInUp stagger-3">
            No credit card required • Free forever • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}

export default Landing;
