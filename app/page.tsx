const programs = [
  {
    title: "Scholars Program",
    description:
      "Advanced, interdisciplinary courses for highly motivated students who are eager to define the future."
  },
  {
    title: "Global Leadership",
    description:
      "Immersive experiences and diplomacy labs that empower students to lead with compassion across cultures."
  },
  {
    title: "Innovation Studio",
    description:
      "A design-forward track blending engineering, art, and entrepreneurship in our state-of-the-art makerspaces."
  }
];

const pillars = [
  {
    title: "Curiosity",
    description:
      "Inquiry-first classrooms animated by passionate faculty who spark wonder in every lesson."
  },
  {
    title: "Character",
    description:
      "Signature advisory program and service learning experiences that nurture integrity and empathy."
  },
  {
    title: "Community",
    description:
      "A vibrant campus culture where every voice is welcomed, celebrated, and challenged to grow."
  }
];

const admissionsJourney = [
  {
    title: "Discover Elysian",
    detail:
      "Join an on-campus tour or virtual open house to experience our studios, conservatory, and commons."
  },
  {
    title: "Apply & Reflect",
    detail:
      "Submit your application, portfolio, and personal reflection so we can understand your unique story."
  },
  {
    title: "Shadow Day",
    detail:
      "Spend a day alongside current students, explore classes, and connect with future mentors."
  },
  {
    title: "Welcome Weekend",
    detail:
      "Celebrate your acceptance with curated workshops, student panels, and family receptions."
  }
];

const testimonials = [
  {
    quote:
      "Elysian teaches us to view the world with both rigor and wonder. Every project is an invitation to think boldly.",
    name: "Amelia Rhodes",
    role: "Class of 2025 · Innovation Studio Scholar"
  },
  {
    quote:
      "Our daughter found her voice here. Faculty, coaches, and classmates partnered with her every step of the way.",
    name: "Celeste & Daniel Monroe",
    role: "Upper School Parents"
  }
];

const news = [
  {
    date: "June 12, 2024",
    title: "Debut of the Aurora Performing Arts Center",
    description:
      "A luminous 600-seat venue equipped with immersive sound and adaptive staging for drama, dance, and orchestral productions."
  },
  {
    date: "May 30, 2024",
    title: "Elysian Robotics Wins International Symposium",
    description:
      "Team Lumina captured the Global Innovation Prize for their sustainable oceanic research drone prototype."
  },
  {
    date: "May 15, 2024",
    title: "Faculty Spotlight: Dr. Priya Sen",
    description:
      "Our Director of Scientific Inquiry is awarded the Orion Fellowship for her work on student-led climate research."
  }
];

export default function Home() {
  return (
    <>
      <header>
        <div className="brand">
          <div className="crest">EA</div>
          Elysian Academy
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#campus-life">Campus Life</a>
          <a href="#news">News</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <span className="badge">Where brilliance becomes tradition</span>
          <h1>Illuminate Every Possibility</h1>
          <p>
            Elysian Academy is a modern preparatory school where artistry, STEM,
            and global citizenship converge. Here, students are mentored to
            create, collaborate, and lead with uncommon grace.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#admissions">
              Begin Your Journey
            </a>
            <a className="btn btn-secondary" href="#visit">
              Schedule a Visit
            </a>
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">The Elysian Distinction</h2>
          <p className="section-subtitle">
            A sanctuary for limitless imagination, Elysian Academy blends
            time-honored scholarship with future-ready experiences that awaken
            purpose.
          </p>
          <div className="grid grid-3" style={{ marginTop: "36px" }}>
            {pillars.map((pillar) => (
              <article className="card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="academics">
          <div className="two-column">
            <div>
              <h2 className="section-title">Academics Reimagined</h2>
              <p className="section-subtitle">
                From our atelier-inspired Lower School to immersive laboratories
                in the Upper School, students pursue passions with mentorship
                from renowned faculty.
              </p>
              <ul className="list">
                <li>
                  <strong>Lower School Atelier</strong>
                  <span className="muted">
                    Reggio Emilia inspired studios where curiosity guides
                    foundational learning.
                  </span>
                </li>
                <li>
                  <strong>Middle School Compass</strong>
                  <span className="muted">
                    Inquiry-based seminars, design thinking labs, and global
                    language immersion.
                  </span>
                </li>
                <li>
                  <strong>Upper School Signature Paths</strong>
                  <span className="muted">
                    Concentrations across ethics, data science, fine arts, and
                    environmental leadership.
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass">
              <span className="badge">Flagship Programs</span>
              <div className="grid grid-3" style={{ gridTemplateColumns: "1fr" }}>
                {programs.map((program) => (
                  <article className="card" key={program.title}>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="admissions">
          <h2 className="section-title">Admissions Journey</h2>
          <p className="section-subtitle">
            We welcome inquisitive minds and compassionate hearts. Our holistic
            admissions process is intentionally personal from first hello to
            enrollment celebration.
          </p>
          <div className="timeline">
            {admissionsJourney.map((step) => (
              <div className="timeline-item" key={step.title}>
                <span className="timeline-marker" />
                <h3>{step.title}</h3>
                <p className="muted">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: "42px" }}>
            <a className="btn btn-primary" href="#visit">
              Plan a Campus Visit
            </a>
            <a className="btn btn-secondary" href="mailto:admissions@elysianacademy.org">
              Connect with Admissions
            </a>
          </div>
        </section>

        <section id="campus-life">
          <div className="two-column">
            <div>
              <h2 className="section-title">Life at Elysian</h2>
              <p className="section-subtitle">
                Our lakeside campus features botanical courtyards, a culinary
                conservatory, innovation labs, and calming sanctuaries designed
                to renew the spirit.
              </p>
              <ul className="list">
                <li>
                  <strong>Arts Conservatory</strong>
                  <span className="muted">
                    Dance, orchestra, visual arts, and stagecraft under one
                    luminous roof.
                  </span>
                </li>
                <li>
                  <strong>Athletics & Wellness</strong>
                  <span className="muted">
                    24 athletic offerings, mindfulness studios, and a restorative
                    wellness spa.
                  </span>
                </li>
                <li>
                  <strong>Global Commons</strong>
                  <span className="muted">
                    Cultural festivals, model diplomacy, and sister-school
                    exchanges on six continents.
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-2">
              {testimonials.map((testimonial) => (
                <article className="card testimonial-card" key={testimonial.name}>
                  <p>“{testimonial.quote}”</p>
                  <cite>
                    {testimonial.name}
                    <br />
                    <span className="muted">{testimonial.role}</span>
                  </cite>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news">
          <h2 className="section-title">Illuminated Moments</h2>
          <p className="section-subtitle">
            Stories from a community thriving in innovation, artistry, and
            service.
          </p>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <span>{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="visit">
          <div className="two-column">
            <div>
              <h2 className="section-title">Plan Your Visit</h2>
              <p className="section-subtitle">
                Experience Elysian in person. Guided tours are offered Tuesday
                through Saturday with twilight tours available seasonally.
              </p>
              <div className="hero-actions" style={{ marginTop: "32px" }}>
                <a className="btn btn-primary" href="https://cal.com">
                  Reserve Tour
                </a>
                <a className="btn btn-secondary" href="tel:+14082281234">
                  Call Admissions
                </a>
              </div>
            </div>
            <div className="glass">
              <h3 style={{ marginTop: 0 }}>Campus Hours</h3>
              <ul className="list">
                <li>
                  <strong>Weekday Tours</strong>
                  <span className="muted">9:00 AM · 11:00 AM · 2:00 PM</span>
                </li>
                <li>
                  <strong>Twilight Tours</strong>
                  <span className="muted">Thursdays · 6:30 PM</span>
                </li>
                <li>
                  <strong>Saturday Showcase</strong>
                  <span className="muted">First Saturday · 10:00 AM</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand">
          <div className="crest">EA</div>
          Elysian Academy
        </div>
        <div className="footer-grid">
          <div>
            <h4>Visit Us</h4>
            <p>
              88 Horizon Lane
              <br />
              Aurora Harbor, CA 94118
            </p>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>admissions@elysianacademy.org</li>
              <li>(408) 228-1234</li>
              <li>@elysianacademy</li>
            </ul>
          </div>
          <div>
            <h4>Fast Links</h4>
            <ul>
              <li>Campus Map</li>
              <li>Faculty Directory</li>
              <li>Guild of Alumni</li>
              <li>Support Elysian</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elysian Academy. All rights reserved.</span>
          <nav>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Non-Discrimination</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
