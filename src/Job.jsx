import React from 'react';

const Job = ({
  company,
  title,
  location,
  description,
  skills,
  start,
  end
}) => (
  <div className="job">
    <h3 className="job__title">{title}</h3>
    <p className="job__company">{company}</p>
    <p className="job__location">{location}</p>
    <p className="job__dates">{start} - {end}</p>
    {description
      && <p className="job__description">{description}</p>
    }
    {skills
      && (
      <ul className="job__skills">{skills.map(skill => <li className="job__skill">{skill}</li>)}
      </ul>
      )
    }
  </div>
);
export default Job;
