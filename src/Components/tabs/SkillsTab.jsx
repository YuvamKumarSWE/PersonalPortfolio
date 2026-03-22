import { useState } from 'react';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaNode, FaAws, FaLinux, FaBootstrap, FaGithub } from 'react-icons/fa';
import { IoLogoPython, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress, SiMongodb, SiCplusplus, SiPostman,
  SiSpringboot, SiOracle, SiHtml5, SiCss3,
  SiTypescript, SiAngular, SiFastapi, SiSpring,
  SiSpringsecurity, SiLangchain, SiMysql, SiSupabase,
  SiApachemaven, SiJira, SiHuggingface, SiNumpy,
  SiPandas, SiScikitlearn, SiSelenium, SiJunit5,
  SiGithubactions
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbSql } from 'react-icons/tb';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { skill: 'JavaScript', Icon: IoLogoJavascript },
      { skill: 'TypeScript', Icon: SiTypescript },
      { skill: 'Java', Icon: FaJava },
      { skill: 'Python', Icon: IoLogoPython },
      { skill: 'C/C++', Icon: SiCplusplus },
      { skill: 'SQL', Icon: TbSql },
      { skill: 'HTML5', Icon: SiHtml5 },
      { skill: 'CSS3', Icon: SiCss3 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    items: [
      { skill: 'Spring Boot', Icon: SiSpringboot },
      { skill: 'Node.js', Icon: FaNode },
      { skill: 'Express.js', Icon: SiExpress },
      { skill: 'React', Icon: FaReact },
      { skill: 'Angular', Icon: SiAngular },
      { skill: 'FastAPI', Icon: SiFastapi },
      { skill: 'Spring MVC', Icon: SiSpring },
      { skill: 'Spring Security', Icon: SiSpringsecurity },
      { skill: 'Spring Data JPA', Icon: SiSpring },
      { skill: 'LangChain', Icon: SiLangchain },
      { skill: 'LangGraph', Icon: SiLangchain },
      { skill: 'Hugging Face', Icon: SiHuggingface },
      { skill: 'NumPy', Icon: SiNumpy },
      { skill: 'Pandas', Icon: SiPandas },
      { skill: 'Scikit-Learn', Icon: SiScikitlearn },
      { skill: 'Selenium', Icon: SiSelenium },
      { skill: 'JUnit', Icon: SiJunit5 },
      { skill: 'Bootstrap', Icon: FaBootstrap },
      { skill: 'Tailwind', Icon: RiTailwindCssFill },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: [
      { skill: 'MongoDB', Icon: SiMongodb },
      { skill: 'PostgreSQL', Icon: BiLogoPostgresql },
      { skill: 'Oracle', Icon: SiOracle },
      { skill: 'MySQL', Icon: SiMysql },
      { skill: 'Firebase (GCP)', Icon: IoLogoFirebase },
      { skill: 'Supabase', Icon: SiSupabase },
    ],
  },
  {
    id: 'devtools',
    title: 'Developer Tools',
    items: [
      { skill: 'Git', Icon: FaGitAlt },
      { skill: 'GitHub', Icon: FaGithub },
      { skill: 'Actions (CI/CD)', Icon: SiGithubactions },
      { skill: 'Linux', Icon: FaLinux },
      { skill: 'AWS', Icon: FaAws },
      { skill: 'Docker', Icon: FaDocker },
      { skill: 'Maven', Icon: SiApachemaven },
      { skill: 'Postman', Icon: SiPostman },
      { skill: 'VS Code', Icon: VscVscode },
      { skill: 'Jira (Agile)', Icon: SiJira },
    ],
  },
];

const totalSkills = skillCategories.reduce((sum, c) => sum + c.items.length, 0);

function SkillItem({ skill, Icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="ie-skill-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={skill}
    >
      <Icon size={28} color={hovered ? '#FFFFFF' : '#000080'} />
      <span style={{ marginTop: 4, lineHeight: 1.25, wordBreak: 'break-word' }}>{skill}</span>
    </div>
  );
}

export default function SkillsTab() {
  const [activeSubTab, setActiveSubTab] = useState('languages');

  const current = skillCategories.find(c => c.id === activeSubTab);

  return (
    <div style={{
      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
      fontSize: 12,
      padding: 16,
      background: '#D4D0C8',
      minHeight: '100%',
    }}>

      {/* ── DIALOG TITLE BAR ── */}
      <div style={{
        background: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
        color: '#FFFFFF',
        padding: '4px 8px',
        fontWeight: 'bold',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 0,
      }}>
        <span>⚙</span>
        <span>System Properties — Installed Components</span>
      </div>

      {/* ── OUTER DIALOG BOX ── */}
      <div style={{
        background: '#D4D0C8',
        border: '2px inset #808080',
        padding: 12,
      }}>

        <div className="ie-skills-layout">
          {/* Sub-tab strip */}
          <div className="ie-subtabstrip">
            {skillCategories.map(cat => (
              <div
                key={cat.id}
                className={`ie-subtab${activeSubTab === cat.id ? ' ie-subtab-active' : ''}`}
                onClick={() => setActiveSubTab(cat.id)}
              >
                {cat.title}
              </div>
            ))}
          </div>

          {/* Dialog panel */}
          <div className="ie-dialog-content" style={{ minHeight: 280 }}>
            <p style={{ fontSize: 11, color: '#444', marginBottom: 8 }}>
              The following components are installed for <strong>{current?.title}</strong>:
            </p>

            {/* Skill icon grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              padding: 4,
            }}>
              {current?.items.map((item, i) => (
                <SkillItem key={i} skill={item.skill} Icon={item.Icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom status strip */}
        <div style={{
          borderTop: '1px solid #808080',
          marginTop: 8,
          paddingTop: 4,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 11,
          color: '#555',
        }}>
          <span>
            Installed components in <em>{current?.title}</em>: <strong>{current?.items.length}</strong>
            {' '}| Total: <strong>{totalSkills}</strong>
          </span>
        </div>
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 12, fontSize: 11, color: '#666', textAlign: 'center' }}>
        💡 Hover over a component to highlight it.
      </div>
    </div>
  );
}
