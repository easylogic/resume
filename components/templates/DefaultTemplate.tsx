import React from 'react';
import { ResumeData } from '../../types/resume';
import { GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Code, Database, Server, Monitor } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface DefaultTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const skillCategories = [
  { name: 'Frontend', icon: <Monitor className="w-6 h-6" />, skills: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Svelte', 'Solid.js', 'Astro.js', 'SvelteKit'] },
  { name: 'Backend', icon: <Server className="w-6 h-6" />, skills: ['Node.js', 'Express', 'Koa', 'Nest.js', 'Django', 'Flask', 'FastAPI', 'Laravel', 'Ruby on Rails'] },
  { name: 'Database', icon: <Database className="w-6 h-6" />, skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL', 'SQLite', 'MariaDB', 'Oracle', 'SQL Server'] },
  { name: 'Other', icon: <Code className="w-6 h-6" />, skills: ['GraphQL', 'WebGL', 'Three.js', 'WebGPU', 'WebAssembly', 'WebRTC', 'Web Audio API', 'Web Workers'] },
]

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`${isDarkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
              <p className="text-xl mb-4">{data.title}</p>
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={18} />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2" size={18} />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2" size={18} />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2" size={18} />
                <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <User size={150} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg">{data.about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} print:bg-white`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className={`mb-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md print:shadow-none p-8`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-2xl font-semibold text-blue-600">{exp.company}</h3>
                <span className="text-gray-600 mt-2 md:mt-0">
                  {exp.start} - {exp.end || 'Present'}
                </span>
              </div>
              <h4 className="text-xl font-medium mb-4">{exp.position}</h4>
              <p className="text-gray-700 mb-6">{exp.description}</p>
              <h5 className="text-lg font-semibold mb-3">주요 업무:</h5>
              <ul className="list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg shadow`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skillName) => {
                    const skill = data.skills?.find(s => s.name === skillName);
                    return skill ? (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="w-full h-2" />
                        <p className="text-sm text-gray-600">{skill.description}</p>
                        <p className="text-xs text-gray-400 italic">{skill.improvement}</p>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects?.map((project, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg`}>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          {data.education?.map((edu, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="inline">{edu.degree}</p>
              <p className="inline text-gray-600"> | {edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      {data.languages && data.languages.length > 0 && (
        <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.languages?.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-semibold">{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards Section */}
      {data.awards && data.awards.length > 0 && (
        <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Awards & Achievements</h2>
            {data.awards?.map((award, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold">{award.name}</h3>
                <p>{award.issuer} | {award.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${data.email}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <Mail className="mr-2" size={18} />
              Email Me
            </Link>
            <Link href={`https://github.com/${data.github}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <GithubIcon className="mr-2" size={18} />
              GitHub
            </Link>
            <Link href={data.linkedin} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultTemplate;
