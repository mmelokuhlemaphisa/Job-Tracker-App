import { Link } from "react-router";
import { Navbar } from "../components/ui";

export default function Landing() {
  return (
    <div className="landing-container">
      {/* Header */}
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">🚀 Your Career Journey Starts Here</span>
              <h1 className="hero-title">
                Track Your Dream Job
                <span className="gradient-text"> Applications</span>
              </h1>
              <p className="hero-description">
                Take control of your job search with our intelligent tracking system. 
                Organize applications, monitor progress, and land your dream job faster 
                than ever before.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/register" className="btn-primary">
                  Get Started Free
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/login" className="btn-secondary">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img
                  className="hero-img"
                  src="/src/assets/heroPic.jpg"
                  alt="Job Application Dashboard"
                />
                <div className="floating-card card-1">
                  <div className="card-header">
                    <div className="card-icon">💼</div>
                    <span>New Application</span>
                  </div>
                  <p>Google • Software Engineer</p>
                </div>
                <div className="floating-card card-2">
                  <div className="card-header">
                    <div className="card-icon">✅</div>
                    <span>Interview Scheduled</span>
                  </div>
                  <p>Meta • Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose JobTracker?</h2>
            <p className="section-description">
              Everything you need to manage your job applications in one powerful platform
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3>Smart Analytics</h3>
              <p>Track your application success rate and get insights to improve your job search strategy.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19l5-5 5 5-5-5zm0 0h11" />
                </svg>
              </div>
              <h3>Easy Organization</h3>
              <p>Keep all your applications organized with our intuitive interface and powerful filtering options.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Never Miss Deadlines</h3>
              <p>Set reminders and get notifications so you never miss an important application deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Land Your Dream Job?</h2>
            <p className="cta-description">
              Join thousands of job seekers who have successfully organized their job search with JobTracker.
            </p>
            <Link to="/register" className="btn-primary large">
              Start Your Journey Today
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}