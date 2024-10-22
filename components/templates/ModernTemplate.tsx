import React from 'react';
import { ResumeData } from '../../types/resume';
import { GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Code, Database, Server, Monitor } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface ModernTemplateProps {
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

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} flex justify-center`}>
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-200 dark:bg-gray-700">
        {/* Hero Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h1 className="text-5xl font-bold mb-2">{data.name}</h1>
          <p className="text-2xl mb-4 text-gray-600 dark:text-gray-400">{data.title}</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <Mail className="mr-2" size={18} />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={18} />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2" size={18} />
              <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">{data.about}</p>
        </section>

        {/* Experience Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 dark:bg-gray-700">
            {data.experience.map((exp, index) => (
              <div key={index} className={`p-6 ${bgColor}`}>
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.start} - {exp.end || 'Present'}</p>
                <h4 className="text-xl font-medium mb-2">{exp.position}</h4>
                <p className="mb-4">{exp.description}</p>
                <h5 className="text-lg font-semibold mb-2">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 dark:bg-gray-700">
            {skillCategories.map((category, index) => (
              <div key={index} className={`p-6 ${bgColor}`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-semibold ml-3">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skillName) => {
                    const skill = data.skills?.find(s => s.name === skillName);
                    return skill ? (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="w-full h-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 dark:bg-gray-700">
            {data.projects?.map((project, index) => (
              <div key={index} className={`p-6 ${bgColor}`}>
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 dark:bg-gray-700">
            {data.education?.map((edu, index) => (
              <div key={index} className={`p-6 ${bgColor}`}>
                <h3 className="text-2xl font-semibold">{edu.school}</h3>
                <p className="text-xl">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        {data.languages && data.languages.length > 0 && (
          <section className={`col-span-3 p-8 ${bgColor}`}>
            <h2 className="text-3xl font-bold mb-6">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-200 dark:bg-gray-700">
              {data.languages?.map((lang, index) => (
                <div key={index} className={`p-4 ${bgColor} flex justify-between items-center`}>
                  <span className="font-semibold">{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Awards Section */}
        {data.awards && data.awards.length > 0 && (
          <section className={`col-span-3 p-8 ${bgColor}`}>
            <h2 className="text-3xl font-bold mb-6">Awards & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 dark:bg-gray-700">
              {data.awards?.map((award, index) => (
                <div key={index} className={`p-6 ${bgColor}`}>
                  <h3 className="text-2xl font-semibold">{award.name}</h3>
                  <p>{award.issuer} | {award.year}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className={`col-span-3 p-8 ${bgColor}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${data.email}`} className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium border ${borderColor} transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}>
              <Mail className="mr-2" size={20} />
              Email Me
            </Link>
            <Link href={`https://github.com/${data.github}`} className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium border ${borderColor} transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}>
              <GithubIcon className="mr-2" size={20} />
              GitHub
            </Link>
            <Link href={data.linkedin} className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium border ${borderColor} transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}>
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModernTemplate;
