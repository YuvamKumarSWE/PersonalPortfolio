import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill, logo }) => {
  return (
    <div className="skill-box flex flex-row items-center gap-2 bg-transparent p-2 rounded-lg pl-3 pr-3 backdrop-blur-3xl hover:backdrop-blur-none">
      <img src={logo} alt={`${skill} logo`} className="h-7" />
      <p className="skill-name text-sm">{skill}</p>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Skill;