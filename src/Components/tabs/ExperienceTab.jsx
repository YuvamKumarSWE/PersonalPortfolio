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
      'Reduced ZIP download time 45% for 1,000+ clients by optimizing file-transfer logic in Java Spring Boot with AWS S3.',
      'Developed an interest statement data API using Spring Boot and MongoDB, enabling retrieval of financial records.',
      'Extended MySQL schema and built a validated REST API supporting 20 new wire-payment fields, enforcing transactional integrity across payment processing.',
      'Built a modular Angular component for payment activity rendering and refactored legacy code to modern standards, resolving platform-wide UI issues and raising test coverage to 90%+.',
    ],
    technologies: ['Java', 'Spring Boot', 'AWS S3', 'MySQL', 'MongoDB', 'Angular', 'REST APIs'],
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
      'Built an AI video highlight pipeline using Google Gemini and NVIDIA NeMo ASR, reducing content length by 75%.',
      'Cut transcription time by over 60% through parallel audio processing and GPU optimization.',
      'Architected an async video processing API with webhook-based job tracking, supporting up to 10 concurrent jobs.',
      'Shipped a full-stack platform with Python, TypeScript frontend, and cloud video delivery, presenting demos to companies.',
    ],
    technologies: ['Python', 'TypeScript', 'Google Gemini', 'NVIDIA NeMo ASR', 'Async APIs', 'Webhooks'],
  },
  {
    id: 3,
    company: 'Collin College',
    shortName: 'CC',
    position: 'Research Assistant',
    duration: 'Sep 2023 – Apr 2024',
    location: 'Frisco, TX',
    // Collin College brand colours
    brandBg: '#1B3A6E',
    brandAccent: '#C8963E',
    brandText: '#FFFFFF',
    description: [
      'Validated calculus models against 3D-printed simulations, achieving 99% theoretical-to-real accuracy.',
      'Produced AutoCAD simulations adopted as learning tools by 200+ students.',
    ],
    technologies: ['AutoCAD', 'Simulation Software', '3D Printing', 'Research', 'Data Visualization'],
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
        <a href="https://docs.google.com/document/d/1W0OPxAc82DQ6vQ6djhJdS4bhFtV7JbN7/edit?usp=sharing&ouid=116903424471273577317&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
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
