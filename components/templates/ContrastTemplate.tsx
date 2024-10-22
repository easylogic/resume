import React from 'react';
import { ResumeData } from '../../types/resume';
import { GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Code, Database, Server, Monitor } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface ContrastTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const ContrastTemplate: React.FC<ContrastTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const primaryColor = 'bg-indigo-700 text-white';
  const secondaryColor = 'bg-amber-400 text-black';
  const tertiaryColor = 'bg-gray-100 text-black';
  const quaternaryColor = 'bg-rose-600 text-white';

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <header className={`${primaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-2">{data.name}</h1>
              <p className="text-2xl font-light">{data.title}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end">
                <Mail className="mr-2" size={20} />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="mr-2" size={20} />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <MapPin className="mr-2" size={20} />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Globe className="mr-2" size={20} />
                <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className={`${secondaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-center">{data.about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`${tertiaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-12">
            {data.experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-indigo-700">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{exp.company}</h3>
                <p className="text-gray-600 mb-4">{exp.start} - {exp.end || 'Present'}</p>
                <p className="font-medium text-xl mb-4">{exp.position}</p>
                <p className="mb-6 text-gray-700">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`${quaternaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.skills?.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-xl text-black">{skill.name}</span>
                  <span className="text-lg font-light text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full h-2 mb-4" />
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`${primaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects?.map((project, index) => (
              <div key={index} className="bg-white text-black p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="mb-6 text-gray-700">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline font-medium">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`${secondaryColor} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {data.education?.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-xl mb-2">{edu.degree}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className={`${tertiaryColor} py-16`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`mailto:${data.email}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-indigo-700 text-white hover:bg-indigo-800 rounded-full transition duration-300">
              <Mail className="mr-2" size={24} />
              Email Me
            </Link>
            <Link href={`https://github.com/${data.github}`} className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gray-800 text-white hover:bg-gray-900 rounded-full transition duration-300">
              <GithubIcon className="mr-2" size={24} />
              GitHub
            </Link>
            <Link href={data.linkedin} className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-full transition duration-300">
              <Linkedin className="mr-2" size={24} />
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContrastTemplate;
