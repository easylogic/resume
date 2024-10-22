import React from 'react';
import { ResumeData } from '../../types/resume';
import { GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Code, Database, Server, Monitor } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface MagazineTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const MagazineTemplate: React.FC<MagazineTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? 'text-yellow-400' : 'text-red-600';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-6xl font-bold mb-2 border-b-4 border-red-600 pb-2 inline-block">{data.name}</h1>
        <p className="text-3xl font-light mt-4">{data.title}</p>
      </header>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <main className="w-full md:w-2/3">
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-red-600 pb-2">About Me</h2>
            <p className="text-xl leading-relaxed">{data.about}</p>
            <blockquote className={`${accentColor} text-2xl font-serif italic my-8 pl-4 border-l-4 border-red-600`}>
              "Passionate about creating innovative solutions and pushing the boundaries of technology."
            </blockquote>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-red-600 pb-2">Work Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
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

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-red-600 pb-2">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects?.map((project, index) => (
                <div key={index} className="border border-gray-300 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline`}>View Project</a>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3">
          {/* Contact Info */}
          <section className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-2">
              <p className="flex items-center"><Mail className="mr-2" size={18} /> {data.email}</p>
              <p className="flex items-center"><Phone className="mr-2" size={18} /> {data.phone}</p>
              <p className="flex items-center"><MapPin className="mr-2" size={18} /> {data.location}</p>
              <p className="flex items-center"><Globe className="mr-2" size={18} /> 
                <a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{data.website}</a>
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            {data.skills?.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full h-2" />
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {data.education?.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="text-sm">{edu.period}</p>
              </div>
            ))}
          </section>

          {/* Connect Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <div className="flex flex-col space-y-2">
              <Link href={`mailto:${data.email}`} className={`flex items-center justify-center py-2 ${accentColor} hover:underline`}>
                <Mail className="mr-2" size={18} />
                Email Me
              </Link>
              <Link href={`https://github.com/${data.github}`} className={`flex items-center justify-center py-2 ${accentColor} hover:underline`}>
                <GithubIcon className="mr-2" size={18} />
                GitHub
              </Link>
              <Link href={data.linkedin} className={`flex items-center justify-center py-2 ${accentColor} hover:underline`}>
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default MagazineTemplate;
