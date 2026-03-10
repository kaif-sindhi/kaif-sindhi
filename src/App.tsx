import './App.css'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import headshot from './assets/headshot.png'
import resume from './assets/Sindhi_Kaif_Resume_3.7.26.pdf'

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
            <p className="eyebrow">Software Engineer | Milwaukee, WI</p>
            <h1>Kaif Sindhi</h1>
            <p className="subtitle">Full-Stack Software Engineer • Java • React • Backend Systems</p>
            <p className="bio">
              Software engineer with 3+ years of professional experience building enterprise and customer-facing applications using Java, React, SQL, and modern web technologies. Experienced delivering production software in Agile teams across full-stack development, backend services, and business-critical systems.
            </p>
            <p className="bio bio-compact">
              • Delivered production-ready systems in finance and insurance domains
              <br/>
              • B.Sc. in Software Engineering from MSOE, May 2023
            </p>
          </div>

          <div className="info-grid">
            <div className="info-block">
              <h2>Skills</h2>
              <div className="tags">
                <span>Java</span>
                <span>React</span>
                <span>SQL</span>
                <span>GraphQL</span>
                <span>MongoDB</span>
                <span>Docker</span>
                <span>Kafka</span>
                <span>Spring</span>
                <span>API Design</span>
              </div>
            </div>

            <div className="info-block">
              <h2>Projects</h2>
              <ul>
                <li>IntelliPro</li>
                <li>Liferay Web Portal</li>
                <li>Upcycle</li>
                <li>Insight Configurator</li>
              </ul>
            </div>
          </div>

          <div className="actions">
            <a href={resume} target="_blank" rel="noreferrer" aria-label="Resume">
              <FileText size={20} />
              <span>Resume</span>
            </a>

            <a href="https://github.com/kaif-sindhi" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a href="https://linkedin.com/in/kaifsindhi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a href="mailto:contact@kaifsindhi.com" aria-label="Email">
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App