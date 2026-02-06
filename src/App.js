import './App.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const experiences = [
  {
    company: 'Decilog',
    period: 'Aug 2023 – Present',
    title: 'Software Engineer',
    bullets: [
      'Modernized legacy ADA systems into Spring Boot microservices for mission-critical defense platforms, improving maintainability and long-term sustainability.',
      'Built OpenAPI-driven REST endpoints and automated stub generation using custom Gradle Kotlin DSL tasks.',
      'Integrated Spring Data JPA-backed SQL workflows plus Redis memoization to reduce redundant database and compute load.',
      'Engineered a JNI translation layer to ensure safe memory ownership, thread safety, and reliable JVM-native interoperability.',
      'Implemented GitLab CI/CD pipelines for build, test, native packaging, and merge-triggered deployment validation.',
      'Authored JUnit/Mockito unit, integration, and stress tests with standardized error and logging conventions for observability.',
    ],
  },
  {
    company: 'Meta',
    period: 'Jul 2022 – Jan 2023',
    title: 'Software Engineer',
    bullets: [
      'Delivered full-stack tooling for employees to explore role-based career expectations across levels and organizations.',
      'Developed PHP backend services with SQL integration and optimized schemas for faster role/skills retrieval.',
      'Applied server-side caching to reduce API latency and lower database pressure at scale.',
      'Built responsive React dashboards that translated backend career data into actionable, user-friendly insights.',
      'Wrote automated tests to validate API correctness, data integrity, and performance baselines.',
    ],
  },
  {
    company: 'Walmart Global Technology',
    period: 'Jun 2021 – Aug 2021',
    title: 'Software Engineer Intern',
    bullets: [
      'Developed Spring Boot REST APIs supporting shipment analytics tools for store operations stakeholders.',
      'Designed PostgreSQL schemas and tuned query patterns to increase reporting speed and reliability.',
      'Implemented secure, scalable Java service logic for high-volume analytical data access.',
      'Partnered with cross-functional teams on API testing and rollout quality to improve operational efficiency.',
    ],
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="top-nav">
          <p className="brand">Miles Rosenberg</p>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-content" id="about">
          <p className="eyebrow">Software Engineer · Backend & Systems</p>
          <h1>Building performant backend systems that scale with confidence.</h1>
          <p className="summary">
            Results-driven engineer specializing in Java/Spring Boot services, REST APIs, caching,
            and distributed-system integrations. Strong systems foundation across C/C++, SQL,
            and performance tuning with a focus on secure, maintainable delivery.
          </p>
          <div className="cta-row">
            <a href="#experience" className="button-primary">
              View Experience
            </a>
            <a href="#contact" className="button-secondary">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="content-grid">
        <section id="skills" className="panel">
          <h2>Technical Stack</h2>
          <div className="skill-groups">
            <article>
              <h3>Languages</h3>
              <p>Java, C++, C, Python, Node.js, PHP, JavaScript, TypeScript, HTML, CSS</p>
            </article>
            <article>
              <h3>Frameworks & Tools</h3>
              <p>
                Spring Boot, Gradle (Kotlin DSL), JPA/Hibernate, JUnit, Mockito, CI/CD,
                OpenAPI, React, Next.js
              </p>
            </article>
            <article>
              <h3>Data</h3>
              <p>PostgreSQL, MySQL, MongoDB, Redis</p>
            </article>
          </div>
        </section>

        <section id="experience" className="panel">
          <h2>Professional Experience</h2>
          {experiences.map((experience) => (
            <article key={experience.company} className="timeline-item">
              <div className="timeline-head">
                <h3>{experience.company}</h3>
                <p>{experience.period}</p>
              </div>
              <p className="role">{experience.title}</p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="education" className="panel">
          <h2>Education</h2>
          <article className="education-card">
            <h3>Stevens Institute of Technology</h3>
            <p>Bachelor of Science (B.S.) in Computer Science</p>
            <p>Hoboken, NJ · Sep 2018 – May 2022</p>
          </article>
        </section>

        <section id="contact" className="panel contact-panel">
          <h2>Let&apos;s Build Something Reliable</h2>
          <p>
            I&apos;m currently open to software engineering opportunities focused on backend systems,
            platform engineering, and high-performance services.
          </p>
          <div className="contact-list">
            <a href="mailto:milesrosenberg@gmail.com">milesrosenberg@gmail.com</a>
            <a href="tel:+15164485845">(516) 448-5845</a>
            <a href="https://www.linkedin.com/in/miles-rosenberg-036992180/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Angular327" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <p>Jericho, New York</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
