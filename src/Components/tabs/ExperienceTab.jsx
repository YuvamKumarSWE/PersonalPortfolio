const experiences = [
  {
    id: 1,
    company: 'Royal Bank of Canada',
    shortName: 'RBC',
    position: 'Software Developer Intern',
    duration: 'Sept 2025 – Dec 2025',
    location: 'Toronto, ON',
    // RBC brand colours
    brandBg: '#003168',
    brandAccent: '#FFCC00',
    brandText: '#FFFFFF',
    description: [
      'Engineered secure file download Spring Boot features using AWS S3 for 1000+ clients with role-based permission validation and optimizing retrieval logic to reduce average zip download time by 45%.',
      'Expanded the Spring Boot backend and MySQL database to support 20 new wire-payment fields and built a MongoDB module for customer interest data with REST endpoints, ensuring system stability.',
      'Refactored old presentation logic and introduced new UI components to improve payment activity rendering, resulting in cleaner architecture and improved maintainability.',
    ],
    technologies: ['Spring Boot', 'AWS S3', 'MySQL', 'MongoDB', 'REST APIs', 'Java'],
  },
  {
    id: 2,
    company: 'UBC Applied Machine Learning & Arts',
    shortName: 'UBC',
    position: 'Software Developer',
    duration: 'Jan 2025 – Aug 2025',
    location: 'Vancouver, BC',
    // UBC brand colours
    brandBg: '#002145',
    brandAccent: '#F5AA1C',
    brandText: '#FFFFFF',
    description: [
      'Designed and deployed a full-stack Python video platform that automated strategic video trimming and reduced content duration by 75%, while significantly optimizing flicker between clips to improve video quality.',
      'Improved Nvidia ASR transcription by adding multi-threading, applying an efficient chunking strategy, and reducing model spin-up time, cutting transcription time by 30%.',
      'Contributed to setting up multiple microservices and deployed ML services on Hugging Face Spaces with Gradio, enabling efficient real-time access for users.',
    ],
    technologies: ['Python', 'Nvidia ASR', 'Multi-threading', 'Gradio', 'Hugging Face Spaces', 'Microservices'],
  },
  {
    id: 3,
    company: 'Collin College',
    shortName: 'CC',
    position: 'Math Research Assistant',
    duration: 'Sept 2023 – May 2024',
    location: 'Frisco, TX',
    // Collin College brand colours
    brandBg: '#1B3A6E',
    brandAccent: '#C8963E',
    brandText: '#FFFFFF',
    description: [
      'Achieved 99% accuracy in calculus simulation model validation using computational methods, with resulting visual tools adopted by 200+ students.',
      'Produced high-accuracy models using AutoCAD and simulation software, and presented research findings at an academic conference to advance adoption of technological teaching aids.',
    ],
    technologies: ['Computational Methods', 'AutoCAD', 'Simulation Software', 'Research', 'Data Visualization'],
  },
];

export default function ExperienceTab() {
  return (
    <div style={{
      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
      fontSize: 13,
      padding: '16px 24px',
      width: '100%',
      maxWidth: 1280,
      margin: '0 auto',
      background: '#FFFFFF',
      minHeight: '100%',
      boxSizing: 'border-box',
    }}>

      <div style={{ marginBottom: 16 }}>
        <a href="https://drive.google.com/file/d/1TTAAmm-GkSXFrVPD64hHAJRL4WwiOIHE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="ie-button" style={{ fontSize: 11 }}>📄 Download Resume (PDF)</button>
        </a>
      </div>

      <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF', margin: '8px 0 16px' }} />

      {/* ── SECTION HEADER ── */}
      <div style={{
        background: '#000080', color: '#FFFFFF',
        padding: '4px 8px', fontWeight: 'bold', fontSize: 13, marginBottom: 16,
      }}>
        PROFESSIONAL EXPERIENCE
      </div>

      {/* ── EXPERIENCE CARDS ── */}
      {experiences.map((exp) => (
        <div key={exp.id} style={{
          marginBottom: 20,
          border: '1px solid #C0C0C0',
          borderTop: `3px solid ${exp.brandAccent}`,
        }}>

          {/* Branded company header */}
          <div style={{
            background: exp.brandBg,
            color: exp.brandText,
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Brand monogram badge */}
              <div style={{
                background: exp.brandAccent,
                color: exp.brandBg,
                fontWeight: 'bold',
                fontSize: 13,
                padding: '2px 8px',
                fontFamily: 'Tahoma, sans-serif',
                letterSpacing: 1,
                flexShrink: 0,
              }}>
                {exp.shortName}
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 14 }}>{exp.company}</div>
                <div style={{ fontSize: 11, opacity: 0.85, marginTop: 1 }}>
                  {exp.position} · {exp.location}
                </div>
              </div>
            </div>
            <div style={{
              fontSize: 11,
              opacity: 0.85,
              background: 'rgba(255,255,255,0.12)',
              padding: '2px 8px',
              whiteSpace: 'nowrap',
              borderLeft: `2px solid ${exp.brandAccent}`,
            }}>
              {exp.duration}
            </div>
          </div>

          {/* Achievements + tech */}
          <div style={{ padding: '10px 14px', background: '#FAFAFA' }}>
            <ul style={{ margin: '0 0 8px 0', padding: 0, fontSize: 12, lineHeight: 1.75, listStyle: 'none' }}>
              {exp.description.map((item, j) => (
                <li key={j} style={{ marginBottom: 3, color: '#222', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: '#666666',
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{
              fontSize: 11,
              color: '#444',
              borderTop: `1px solid ${exp.brandAccent}`,
              paddingTop: 6,
              marginTop: 4,
            }}>
              <strong style={{ color: exp.brandBg }}>Technologies:</strong>{' '}
              {exp.technologies.map((tech, k) => (
                <span key={k} style={{
                  display: 'inline-block',
                  background: '#EEEEEE',
                  border: '1px solid #C0C0C0',
                  padding: '0 5px',
                  margin: '1px 2px',
                  fontSize: 10,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
