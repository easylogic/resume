import React from 'react';
import { ResumeData } from '../../types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`classic-template ${bgColor} p-8 max-w-4xl mx-auto`}>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
        <p className="text-xl">{data.title}</p>
        <p>{data.email} | {data.phone}</p>
        <p>{data.location}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 border-b">About Me</h2>
        <p>{data.about}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 border-b">Work Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p>{job.company} | {job.period}</p>
            <p>{job.description}</p>
            <ul className="list-disc pl-5">
              {job.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 border-b">Education</h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.period}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 border-b">Skills</h2>
        <ul className="list-disc pl-5">
          {data.skills?.map((skill, index) => (
            <li key={index}>{skill.name} - {skill.level}%</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ClassicTemplate;
