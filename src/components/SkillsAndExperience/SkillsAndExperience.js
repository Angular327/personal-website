import { SKILLS, JOBS } from './Constants';
import './SkillsAndExperience.css'
import UpArrow from '../Arrows/UpArrow';
import DownArrow from '../Arrows/DownArrow';

const SkillsAndExperience = ({ setActiveMovement, loading = false }) => {

  const upClick = {
    location: 0,
    movement: 2,
    isActive: true
  }

  const handleArrowClick = () => {
    setActiveMovement(upClick);
  };


  return (
    <div className={`skills-and-experience ${loading ? "dom2image" : ""}`}>
      <UpArrow handleArrowClick={handleArrowClick} />
      <br />
      <div className="columns">
        <div className="experiences">
          <h1>Past Experiences:</h1>
          <div className='jobs-container'>
            {JOBS.map((job, index) => (
              <div className="job-title" key={`job-${index}`}>
                <a href={job.href}>
                  <img src={job.logo.src} alt={job.logo.alt} />
                </a>
                <div className={'job-text'}>
                  <h2>{job.companyName}</h2>
                  <h3>{`${job.title},`}</h3>
                  <h3>{`${job.duration},`}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h1>Skills:</h1>
          <div className="skills-container">
            {SKILLS.map((skillCategory, index) => (
              <div className="category" key={`skill-category-${index}`}>
                <h2>{skillCategory.category}</h2>
                <div className="skills-list">
                  {skillCategory.skills.map((skill, i) => (
                    <div className="skill-card" key={`skill-${index}-${i}`}>
                      <h3>{skill}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <DownArrow />
    </div>
  );
};

export default SkillsAndExperience;