import React from 'react';
import { ResumeData } from '../../types/resume';
import { GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Code, Database, Server, Monitor } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface Sidebar1TemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const Sidebar1Template: React.FC<Sidebar1TemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = 'bg-white';
  const textColor = 'text-black';
  const sidebarBgColor = 'bg-gray-100';
  const accentColor = 'text-blue-600';
  const borderColor = 'border-gray-200';
  const headingColor = 'text-black';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} flex flex-col md:flex-row`}>
      {/* Sidebar */}
      <aside className={`w-full md:w-1/3 ${sidebarBgColor} p-8 border-r ${borderColor}`}>
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${headingColor}`}>{data.name}</h1>
          <p className={`text-xl mb-4 ${accentColor} uppercase tracking-wide`}>{data.title}</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className={`mr-2 ${accentColor}`} size={18} />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className={`mr-2 ${accentColor}`} size={18} />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className={`mr-2 ${accentColor}`} size={18} />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center">
            <Globe className={`mr-2 ${accentColor}`} size={18} />
            <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
          </div>
        </div>
        <div className="mt-8">
          <h2 className={`text-2xl font-bold mb-4 ${headingColor} uppercase`}>Skills</h2>
          {data.skills?.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="w-full h-1" />
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`w-full md:w-2/3 p-8 ${bgColor}`}>
        <section className={`mb-12 p-6 border-l-4 ${accentColor}`}>
          <h2 className={`text-2xl font-bold mb-4 ${headingColor} uppercase`}>About Me</h2>
          <p className="leading-relaxed">{data.about}</p>
        </section>

        <section className={`mb-12 p-6 border-l-4 ${accentColor}`}>
          <h2 className={`text-2xl font-bold mb-4 ${headingColor} uppercase`}>Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className={`mb-6 pb-6 ${index !== data.experience.length - 1 ? `border-b ${borderColor}` : ''}`}>
              <h3 className={`text-xl font-semibold ${accentColor}`}>{exp.company}</h3>
              <p className={`text-gray-600 mb-1`}>{exp.start} - {exp.end || 'Present'}</p>
              <p className="font-medium mb-2 uppercase">{exp.position}</p>
              <p className="mt-2 mb-2">{exp.description}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={`mb-12 p-6 border-l-4 ${accentColor}`}>
          <h2 className={`text-2xl font-bold mb-4 ${headingColor} uppercase`}>Projects</h2>
          {data.projects?.map((project, index) => (
            <div key={index} className={`mb-6 pb-6 ${index !== data.projects?.length - 1 ? `border-b ${borderColor}` : ''}`}>
              <h3 className={`text-xl font-semibold ${accentColor}`}>{project.name}</h3>
              <p className="mt-2 mb-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline uppercase text-sm font-bold`}>View Project</a>
            </div>
          ))}
        </section>

        <section className={`mb-12 p-6 border-l-4 ${accentColor}`}>
          <h2 className={`text-2xl font-bold mb-4 ${headingColor} uppercase`}>Education</h2>
          {data.education?.map((edu, index) => (
            <div key={index} className={`mb-4 ${index !== data.education?.length - 1 ? `pb-4 border-b ${borderColor}` : ''}`}>
              <h3 className={`text-xl font-semibold ${accentColor}`}>{edu.school}</h3>
              <p className="uppercase">{edu.degree}</p>
              <p className={`text-gray-600 text-sm`}>{edu.period}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Sidebar1Template;
