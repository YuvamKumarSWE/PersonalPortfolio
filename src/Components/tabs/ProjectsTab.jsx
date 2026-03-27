const projects = [
  {
    id: 1,
    img: '/images/studyforge.png',
    title: 'StudyForge (Hackathon Winner)',
    description: 'Engineered a multi-agent LangGraph orchestration pipeline with 6 specialized agents processing 4 input types in parallel. Reduced LLM API costs by consolidating study guide synthesis into a single Gemini call with 3-tier adaptive prompting. Won a $2,100 hackathon prize delivering a full-stack app with FastAPI, and hybrid PostgreSQL/MongoDB storage.',
    github: 'https://github.com/YuvamKumarSWE/StudyForgeAI',
    deployed: 'https://devpost.com/software/csgh5',
    deployLabel: 'Devpost',
    technologies: ['Python', 'Spring Boot', 'LangGraph', 'Docker', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Google Gemini'],
    status: 'Completed',
    lastModified: '2025-12-15',
  },
  {
    id: 2,
    img: '/images/f1.png',
    title: 'AI F1 Fantasy League',
    description: 'Built a full-stack F1 fantasy platform with JWT auth, budget-constrained drafting, and captain 2x scoring using F1 data. Automated race-result processing via a cron pipeline calculating points with position/DNF modifiers across 20+ races. Integrated a context-aware AI chatbot, injecting race data, driver costs, standings, and teams with 83–100% test coverage.',
    github: 'https://github.com/YuvamKumarSWE/F1FantasyLeague',
    deployed: 'https://ykf1-fantasy.vercel.app/',
    deployLabel: 'Live Demo',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Google Gemini', 'MongoDB', 'Redis'],
    status: 'Live',
    lastModified: '2025-10-01',
  },
  {
    id: 3,
    img: '/images/HireSignal.png',
    title: 'HireSignal',
    description: 'Built a real-time AI interview simulator using Gemini for role-tailored questions; deployed via Docker on AWS EC2 behind Nginx. Designed a multimodal voice pipeline integrating ElevenLabs, converting audio to transcribed answers over WebSockets. Automated CI/CD and monitored container health, latency, and uptime using Prometheus and Grafana dashboards.',
    github: 'https://github.com/yeyeyeen/HireSignal',
    deployed: 'https://devpost.com/software/hiresignal',
    deployLabel: 'Devpost',
    technologies: ['React', 'Express', 'Firebase', 'AWS EC2', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'GitHub Actions'],
    status: 'Completed',
    lastModified: '2025-11-01',
  },
  {
    id: 4,
    img: '/images/note.png',
    title: 'NOTEDLY AI',
    description: 'AI-powered note-taking application with MERN stack and Python FastAPI, featuring smart categorization and content suggestions.',
    github: 'https://github.com/YuvamKumarSWE/NOTEDLYAI',
    deployed: '',
    deployLabel: '',
    technologies: ['React', 'Node.js', 'Python', 'FastAPI', 'MongoDB'],
    status: 'Completed',
    lastModified: '2025-09-01',
  },
  {
    id: 5,
    img: '/images/spacify.png',
    title: 'Spacify',
    description: 'Space research data platform with Node.js, Express, and Oracle DB. Aggregates space data from multiple sources with complex SQL queries and a responsive GUI.',
    github: 'https://github.com/YuvamKumarSWE/Spacify',
    deployed: '',
    deployLabel: '',
    technologies: ['Node.js', 'Express', 'Oracle DB', 'JavaScript', 'HTML/CSS'],
    status: 'Completed',
    lastModified: '2025-04-01',
  },
  {
    id: 6,
    img: '/images/clockedin.png',
    title: 'Clocked In',
    description: 'Group habit tracker where friends check in daily with photos, maintain streaks, and receive notifications. Built with React.js and Firebase.',
    github: 'https://github.com/YuvamKumarSWE/Group-Habit-Tracker',
    deployed: 'https://groupclockedin.netlify.app/',
    deployLabel: 'Live Demo',
    technologies: ['React', 'Firebase', 'TailwindCSS', 'JavaScript'],
    status: 'Live',
    lastModified: '2024-12-01',
  },
  {
    id: 7,
    img: '/images/stock.png',
    title: 'AI Stock Predictor',
    description: 'Intelligent stock prediction tool using AI algorithms to analyze market trends and provide investment insights with real-time data analysis.',
    github: 'https://github.com/YuvamKumarSWE/StockPredictor',
    deployed: '',
    deployLabel: '',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'APIs'],
    status: 'Completed',
    lastModified: '2024-08-01',
  },
  {
    id: 8,
    img: '/images/anime.png',
    title: 'Anime AI Recommendation System',
    description: 'Personalized anime recommendation platform using ML algorithms and content-based filtering. Built with the MERN stack.',
    github: 'https://github.com/YuvamKumarSWE/MERN-Anime-Website',
    deployed: '',
    deployLabel: '',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Machine Learning'],
    status: 'Completed',
    lastModified: '2024-06-01',
  },
];

export default function ProjectsTab() {
  return (
    <div style={{
      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
      fontSize: 13,
      padding: '12px 16px',
      minHeight: '100%',
      background: '#FFFFFF',
    }}>

      {/* Apache-style heading */}
      <h2 style={{
        fontFamily: 'Tahoma, sans-serif',
        fontSize: 16,
        color: '#000000',
        borderBottom: '1px solid #AAAAAA',
        paddingBottom: 6,
        marginBottom: 4,
      }}>
        Index of /projects/
      </h2>
      <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF', margin: '4px 0 12px 0' }} />

      {/* Project cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {projects.map(p => (
          <div key={p.id} style={{
            border: '2px solid #808080',
            borderTop: '2px solid #FFFFFF',
            borderLeft: '2px solid #FFFFFF',
          }}>
            {/* Card header */}
            <div style={{
              background: '#000080',
              color: '#FFFFFF',
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}>
              <span style={{ fontWeight: 'bold', fontSize: 13 }}>📄 {p.title}</span>
              <span style={{
                fontSize: 11,
                fontWeight: 'normal',
                color: p.status === 'Live' ? '#88FF88' : '#CCCCCC',
              }}>
                {p.status === 'Live' ? '● Live' : '○ Completed'} · {p.lastModified}
              </span>
            </div>

            {/* Card body */}
            <div className="ie-project-body" style={{ display: 'flex', background: '#FFFFFF', gap: 0 }}>
              {/* Project image */}
              <div className="ie-project-img-wrap" style={{
                flexShrink: 0,
                width: 540,
                background: '#E8E8E8',
                borderRight: '1px solid #C0C0C0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
                  onError={e => {
                    e.target.parentNode.style.background = '#D4D0C8';
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              {/* Text content */}
              <div style={{ padding: '8px 10px', flex: 1, minWidth: 0 }}>
                <p style={{ marginBottom: 6, lineHeight: 1.5, fontSize: 13 }}>
                  {p.description}
                </p>
                <p style={{ fontSize: 12, color: '#444', marginBottom: 8 }}>
                  <strong style={{ color: '#000080' }}>Technologies:</strong>{' '}
                  {p.technologies.join(', ')}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <button className="ie-button" style={{ fontSize: 11 }}>🔗 GitHub</button>
                  </a>
                  {p.deployed && (
                    <a href={p.deployed} target="_blank" rel="noopener noreferrer">
                      <button className="ie-button" style={{ fontSize: 11 }}>🌐 {p.deployLabel}</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr style={{ margin: '16px 0 4px 0', borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF' }} />
      <address style={{ fontSize: 11, color: '#666', fontStyle: 'normal' }}>
        Yuvam Kumar Portfolio Server at www.yuvamkumar.com Port 80
      </address>
    </div>
  );
}
