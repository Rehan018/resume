import './Resume.css'

const Resume = () => {
  const contactInfo = [
    {
      icon: <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
      text: '+91-7281988705',
      href: null
    },
    {
      icon: <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
      text: 'rehanalam5090@gmail.com',
      href: 'mailto:rehanalam5090@gmail.com'
    },
    {
      icon: <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rehan018/'
    },
    {
      icon: <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      text: 'GitHub',
      href: 'https://github.com/Rehan018'
    },
    {
      icon: <svg className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      text: 'GeeksforGeeks',
      href: 'https://auth.geeksforgeeks.org/user/rehanalam5090'
    }
  ];
  return (
    <div className="resume-container">
      <div className="resume">
        <header className="header">
          <div className="header-content">
            <div className="name-section">
              <h1 className="name">Rehan Alam</h1>
              <p className="title">Senior Software Engineer • AI/ML Specialist</p>
            </div>
            <div className="contact-grid">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  {contact.icon}
                  {contact.href ? (
                    <a href={contact.href}>{contact.text}</a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="main-content">
          <section className="summary-section">
            <div className="section-header">
              <h2>Professional Summary</h2>
              <div className="section-line"></div>
            </div>
            <div className="summary-content">
              <p className="summary-text">
                Highly motivated <span className="highlight">Software Engineer</span> with <span className="highlight">1.5+ years</span> of experience in building scalable, secure, and high-impact backend systems and applied Generative AI solutions. Proven expertise in designing robust architectures, fine-tuning LLMs for real-world use cases, and deploying customer-focused cloud-native applications on AWS and Docker.
              </p>
            </div>
          </section>

          <section className="skills-section">
            <div className="section-header">
              <h2>Technical Expertise</h2>
              <div className="section-line"></div>
            </div>
            <div className="skills-container">
              <div className="skill-category">
                <h3 className="skill-title">Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag python">Python</span>
                  <span className="skill-tag javascript">JavaScript</span>
                  <span className="skill-tag cpp">C++</span>
                  <span className="skill-tag sql">SQL</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">Backend & APIs</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">RESTful APIs</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">AI/ML & LLMs</h3>
                <div className="skill-tags">
                  <span className="skill-tag ai">Fine-tuning</span>
                  <span className="skill-tag ai">RAG</span>
                  <span className="skill-tag ai">Vector Embeddings</span>
                  <span className="skill-tag ai">RLHF</span>
                  <span className="skill-tag ai">DPO</span>
                  <span className="skill-tag ai">PPO</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">AI Frameworks</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HuggingFace</span>
                  <span className="skill-tag">LangChain</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">BentoML</span>
                  <span className="skill-tag">OpenAI API</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">Vector Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Milvus</span>
                  <span className="skill-tag">Pinecone</span>
                  <span className="skill-tag">Elasticsearch</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-title">Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag cloud">AWS EC2</span>
                  <span className="skill-tag cloud">AWS S3</span>
                  <span className="skill-tag cloud">AWS Lambda</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">GitHub Actions</span>
                </div>
              </div>
            </div>
          </section>

          <section className="experience-section">
            <div className="section-header">
              <h2>Professional Experience</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="experience-timeline">
              <div className="job-card current">
                <div className="job-badge">Current</div>
                <div className="job-header">
                  <div className="job-title-section">
                    <h3 className="job-title">Generative AI Engineer</h3>
                    <h4 className="company-name">Meril Life Sciences</h4>
                    <div className="job-location">Vapi, Gujarat</div>
                  </div>
                  <div className="job-duration">
                    <span className="date-range">June 2024 - Present</span>
                    <span className="duration">8 months</span>
                  </div>
                </div>
                <div className="job-achievements">
                  <div className="achievement-item">
                    <div className="achievement-icon">🚀</div>
                    <div className="achievement-text">
                      <strong>Spearheaded LLM fine-tuning</strong> using SFT, DPO, PPO, and RLHF, improving domain-specific accuracy by <span className="metric">40%</span>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">⚡</div>
                    <div className="achievement-text">
                      <strong>Designed scalable RAG pipelines</strong> with vector embeddings, enabling real-time retrieval across distributed environments
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">🏗️</div>
                    <div className="achievement-text">
                      <strong>Built performant Python (FastAPI) backend services</strong> with <span className="metric">99.9% uptime</span> for enterprise applications
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">📊</div>
                    <div className="achievement-text">
                      <strong>Developed API endpoints for chatbots</strong> using vector databases, reducing response latency by <span className="metric">35%</span>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">🔍</div>
                    <div className="achievement-text">
                      <strong>Architected vector search infrastructure</strong> supporting semantic queries across millions of medical records
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">☁️</div>
                    <div className="achievement-text">
                      <strong>Deployed LLM applications</strong> using Docker and Kubernetes on AWS SageMaker and Google Vertex AI
                    </div>
                  </div>
                </div>
              </div>

              <div className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h3 className="job-title">Full Stack Developer</h3>
                    <h4 className="company-name">Coding Ninja</h4>
                    <div className="job-location">Gurgaon, Haryana</div>
                  </div>
                  <div className="job-duration">
                    <span className="date-range">August 2023 - June 2024</span>
                    <span className="duration">10 months</span>
                  </div>
                </div>
                <div className="job-achievements">
                  <div className="achievement-item">
                    <div className="achievement-icon">🌐</div>
                    <div className="achievement-text">
                      <strong>Engineered distributed web applications</strong> supporting <span className="metric">50,000+ concurrent users</span> with high availability
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">🛡️</div>
                    <div className="achievement-text">
                      <strong>Built monitoring system for transaction anomalies</strong>, reducing fraudulent activities by <span className="metric">60%</span> through ML
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">⚡</div>
                    <div className="achievement-text">
                      <strong>Optimized MySQL and Redis pipelines</strong>, reducing response time by <span className="metric">35%</span> in high-traffic workflows
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">♿</div>
                    <div className="achievement-text">
                      <strong>Designed accessible interfaces</strong> aligned with WCAG guidelines for inclusive user experience
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">👥</div>
                    <div className="achievement-text">
                      <strong>Led Agile sprints and conducted code reviews</strong> for production systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="education-section">
            <div className="section-header">
              <h2>Education</h2>
              <div className="section-line"></div>
            </div>
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-details">
                <h3 className="degree">Bachelor of Technology in Computer Science</h3>
                <h4 className="university">RGPV University, Madhya Pradesh</h4>
                <div className="education-meta">
                  <span className="duration">May 2018 - Jun 2022</span>
                  <span className="gpa">CGPA: 7.9</span>
                </div>
              </div>
            </div>
          </section>

          <section className="achievements-section">
            <div className="section-header">
              <h2>Professional Achievements & Recognition</h2>
              <div className="section-line"></div>
            </div>
            <div className="achievements-grid">
              <div className="achievement-card gold">
                <div className="achievement-rank">3rd</div>
                <div className="achievement-content">
                  <h4>Coding Ninja Codekaze 2023</h4>
                  <p>Global rank among <strong>250,000+</strong> participants</p>
                </div>
              </div>
              <div className="achievement-card silver">
                <div className="achievement-rank">5th</div>
                <div className="achievement-content">
                  <h4>ServiceNow Hire-Thon 2023</h4>
                  <p>System architecture excellence</p>
                </div>
              </div>
              <div className="achievement-card bronze">
                <div className="achievement-rank">2nd</div>
                <div className="achievement-content">
                  <h4>GeeksforGeeks Global Rank</h4>
                  <p>Outperforming <strong>80,000+</strong> developers</p>
                </div>
              </div>
              <div className="achievement-card stats">
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">160+</div>
                    <div className="stat-label">LeetCode</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">700+</div>
                    <div className="stat-label">GeeksforGeeks</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">400+</div>
                    <div className="stat-label">HackerRank</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">60+</div>
                    <div className="stat-label">Contests</div>
                  </div>
                </div>
                <p className="stats-description">Problems solved in DSA, DP, Trees, Graphs, and System Design</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume