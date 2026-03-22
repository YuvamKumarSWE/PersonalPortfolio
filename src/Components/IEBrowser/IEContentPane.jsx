import { useRef, useEffect } from 'react';
import AboutTab from '../tabs/AboutTab';
import ProjectsTab from '../tabs/ProjectsTab';
import ExperienceTab from '../tabs/ExperienceTab';
import SkillsTab from '../tabs/SkillsTab';
import ContactTab from '../tabs/ContactTab';

export default function IEContentPane({ activeTab, contentRef, refreshNonce = 0 }) {
  return (
    <div className="ie-content-pane" ref={contentRef} key={`${activeTab}-${refreshNonce}`}>
      {activeTab === 'about'      && <AboutTab />}
      {activeTab === 'projects'   && <ProjectsTab />}
      {activeTab === 'experience' && <ExperienceTab />}
      {activeTab === 'skills'     && <SkillsTab />}
      {activeTab === 'contact'    && <ContactTab />}
    </div>
  );
}
