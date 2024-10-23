import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Award, Book, Briefcase, User } from 'lucide-react';

interface BlackpinkTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const BlackpinkTemplate: React.FC<BlackpinkTemplateProps> = ({
  data,
  expandedSections,
  toggleSection,
  selectedSkills,
  toggleSkill,
  isDarkMode,
}) => {
  const bgColor = 'bg-pink-600';
  const textColor = 'text-white';
  const borderColor = 'border-white';
  const cardStyle = `${bgColor} ${textColor} border-[20px] ${borderColor} rounded-lg p-6 mb-6 relative overflow-hidden`;

  const lightningPattern = `
    linear-gradient(135deg, transparent 0%, transparent 49%, rgba(255,255,255,0.2) 50%, transparent 51%, transparent 100%),
    linear-gradient(45deg, transparent 0%, transparent 49%, rgba(255,255,255,0.2) 50%, transparent 51%, transparent 100%)
  `;

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} font-sans p-8`} style={{
      backgroundImage: lightningPattern,
      backgroundSize: '40px 40px',
    }}>
      <header className={cardStyle}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-2 tracking-wider">{data.name}</h1>
          <p className="text-2xl mb-4 italic">{data.title}</p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="flex items-center"><Mail className="mr-1" size={16} /> {data.email}</span>
            <span className="flex items-center"><Phone className="mr-1" size={16} /> {data.phone}</span>
            <span className="flex items-center"><MapPin className="mr-1" size={16} /> {data.location}</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4 flex items-center relative z-10">
            <User className="mr-2" size={24} />
            About Me
          </h2>
          <p className="text-lg leading-relaxed relative z-10">{data.about}</p>
        </section>

        <section className={`${cardStyle} mb-0`}>
          <h2 className="text-2xl font-bold mb-4 flex items-center relative z-10">
            <Briefcase className="mr-2" size={24} />
            Experience
          </h2>
        </section>
        
        {data.experience.map((exp, index) => (
          <div key={index} className={`${cardStyle} mt-6`}>
            <h3 className="text-xl font-semibold relative z-10">{exp.position}</h3>
            <p className="text-pink-200 relative z-10">{exp.company} | {exp.period}</p>
            <p className="mt-2 relative z-10">{exp.description}</p>
            <ul className="list-disc list-inside mt-2 relative z-10">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className={cardStyle}>
            <h2 className="text-2xl font-bold mb-4 flex items-center relative z-10">
              <Award className="mr-2" size={24} />
              Skills
            </h2>
            <div className="space-y-2 relative z-10">
              {data.skills?.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <div className="w-1/2 bg-pink-300 rounded-full h-2.5">
                    <div className={`bg-white h-2.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={cardStyle}>
            <h2 className="text-2xl font-bold mb-4 flex items-center relative z-10">
              <Book className="mr-2" size={24} />
              Education
            </h2>
            {data.education?.map((edu, index) => (
              <div key={index} className="mb-4 relative z-10">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="text-pink-200">{edu.period}</p>
              </div>
            ))}
          </section>
        </div>

        {data.projects && (
          <section className={cardStyle}>
            <h2 className="text-2xl font-bold mb-4 flex items-center relative z-10">
              <Award className="mr-2" size={24} />
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {data.projects.map((project, index) => (
                <div key={index} className="border border-pink-300 p-4 rounded bg-pink-500">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="mb-2">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white">View Project</a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className={cardStyle}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${data.email}`} className="hover:text-pink-200">
              <Mail size={24} />
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
              <Linkedin size={24} />
            </a>
            <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlackpinkTemplate;
