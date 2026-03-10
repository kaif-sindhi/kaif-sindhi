import './App.css'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import headshot from './assets/headshot.png'

function App() {
  return (
    <main className="app">
      <section className="portfolio-card">
        <div className="photo-section">
          <div className="photo-ring">
            <img src={headshot} alt="Kaif Sindhi headshot" className="headshot" />
          </div>
        </div>

        <div className="content-section">
          <div className="intro">
            <p className="eyebrow">Software Engineer</p>
            <h1>Kaif Sindhi</h1>
            <p className="subtitle">Java • React • SQL • Full-Stack Development</p>
            <p className="bio">
              Software engineer with 3+ years of professional experience building scalable applications using Java and modern web technologies. 
              Experienced in full-stack development, enterprise systems, and delivering production software in collaborative Agile environments.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-block">
              <h2>Skills</h2>
              <div className="tags">
                <span>Java</span>
                <span>React</span>
                <span>SQL</span>
                <span>.NET</span>
                <span>GraphQL</span>
                <span>Appian</span>
                <span>Docker</span>
              </div>
            </div>

            <div className="info-block">
              <h2>Projects</h2>
              <ul>
                <li>Dealership Simulation Game (Unity)</li>
                <li>Bonfire Upcycle Platform</li>
                <li>Enterprise Business Process Solutions</li>
              </ul>
            </div>
          </div>

          <div className="actions">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a href="mailto:kaif.sindhi.ks@outlook.com" aria-label="Email">
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App