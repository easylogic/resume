import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface RetroTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const RetroTemplate: React.FC<RetroTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = 'bg-black';
  const textColor = 'text-green-400';
  const accentColor = 'text-yellow-300';
  const sectionBgColor = 'bg-gray-900';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8 font-vt323`}>
      {/* Header Section */}
      <header className="mb-16 text-center border-4 border-green-400 p-6 animate-pulse">
        <h1 className="text-6xl font-bold mb-2 text-yellow-300 pixelated">{data.name}</h1>
        <p className="text-3xl font-light mt-4 text-green-400">{data.title}</p>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">About Me</h2>
          <p className="text-xl leading-relaxed">{data.about}</p>
        </section>

        {/* Experience Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-8 border-b-2 border-green-400 pb-4">
              <h3 className="text-2xl font-bold text-yellow-300">{exp.company}</h3>
              <p className={`${accentColor} text-xl mb-2`}>{exp.position}</p>
              <p className="text-lg mb-2">{exp.start} - {exp.end || 'Present'}</p>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills?.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-yellow-300">{skill.name}</span>
                  <span className="text-sm text-green-400">{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-gray-700 pixelated-border">
                  <div 
                    className="h-full bg-green-400" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects?.map((project, index) => (
              <div key={index} className="border-2 border-green-400 p-4 pixelated-border">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline pixelated`}>View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Education</h2>
          {data.education?.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-2xl font-bold text-yellow-300">{edu.school}</h3>
              <p className="text-green-400">{edu.degree}</p>
              <p className="text-sm">{edu.period}</p>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className={`p-6 ${sectionBgColor} border-2 border-green-400 pixelated-border`}>
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Contact</h2>
          <div className="space-y-2">
            <p className="flex items-center"><Mail className="mr-2 text-yellow-300" size={18} /> {data.email}</p>
            <p className="flex items-center"><Phone className="mr-2 text-yellow-300" size={18} /> {data.phone}</p>
            <p className="flex items-center"><MapPin className="mr-2 text-yellow-300" size={18} /> {data.location}</p>
            <p className="flex items-center"><Globe className="mr-2 text-yellow-300" size={18} /> 
              <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
            </p>
          </div>
        </section>

        {/* Connect Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 pixelated">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${data.email}`} className="px-4 py-2 bg-green-400 text-black hover:bg-green-500 pixelated-border">
              <Mail className="inline-block mr-2" size={18} /> Email
            </Link>
            <Link href={`https://github.com/${data.github}`} className="px-4 py-2 bg-green-400 text-black hover:bg-green-500 pixelated-border">
              <Github className="inline-block mr-2" size={18} /> GitHub
            </Link>
            <Link href={data.linkedin} className="px-4 py-2 bg-green-400 text-black hover:bg-green-500 pixelated-border">
              <Linkedin className="inline-block mr-2" size={18} /> LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetroTemplate;
