import React from 'react';
import Job from './Job';
import Degree from './Degree';
import {
  about,
  education,
  email,
  experience,
  location,
  name,
  phone,
  skills,
  title,
  tools
} from './data/resume.json';

const Resume = () => (
  <div className="resume">
    <h1 className="resume__heading">{name}</h1>
    <p className="resume__name">Resume</p>
    <p className="resume__title">{title}</p>
    <p className="resume__location">{location}</p>
    <p className="resume__phone">{phone}</p>
    <p className="resume__email"><a href={`mailto:${email}`}>{email}</a></p>
    <p className="resume__about">{about}</p>
    <h2 className="resume__sectionHeading">Skills</h2>
    <ul className="skills">{skills.map(skill => <li className="resume__skill">{skill}</li>)}
    </ul>
    <h2 className="resume__sectionHeading">Familiar Tools</h2>
    <ul className="skills">{tools.map(skill => <li className="resume__skill">{skill}</li>)}
    </ul>
    <h2 className="resume__sectionHeading">Work Experience</h2>
    {
      experience.map(job => <Job {...job} key={job.company} />)
    }
    <h2 className="resume__sectionHeading">Education</h2>
    {
      education.map(degree => <Degree {...degree} key={degree.degree} />)
    }
  </div>
);
export default Resume;
