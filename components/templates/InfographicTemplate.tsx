import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, Award, Star, Code, Database, Server, Zap, Book, Users, Target } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface InfographicTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const InfographicTemplate: React.FC<InfographicTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? 'text-yellow-400' : 'text-blue-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">{data.name}</h1>
        <p className="text-2xl">{data.title}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Mail className={accentColor} size={24} />
          <Phone className={accentColor} size={24} />
          <MapPin className={accentColor} size={24} />
          <Globe className={accentColor} size={24} />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <section className={`mb-12 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <Star className={`${accentColor} mr-2`} size={24} />
            About Me
          </h2>
          <p className="text-lg leading-relaxed">{data.about}</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Zap className={accentColor} size={32} />
              <span className="mt-2 text-center">Fast Learner</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className={accentColor} size={32} />
              <span className="mt-2 text-center">Team Player</span>
            </div>
            <div className="flex flex-col items-center">
              <Target className={accentColor} size={32} />
              <span className="mt-2 text-center">Goal-Oriented</span>
            </div>
            <div className="flex flex-col items-center">
              <Book className={accentColor} size={32} />
              <span className="mt-2 text-center">Continuous Learner</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`mb-12 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Code className={`${accentColor} mr-2`} size={24} />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills?.map((skill) => (
              <div key={skill.name} className="relative">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {skill.name === 'JavaScript' && <Code className={`${accentColor} mr-2`} size={20} />}
                  {skill.name === 'Python' && <Server className={`${accentColor} mr-2`} size={20} />}
                  {skill.name === 'Database' && <Database className={`${accentColor} mr-2`} size={20} />}
                  {skill.name}
                </h3>
                <Progress value={skill.level} className="w-full h-2 mb-2" />
                <p className="text-sm">{skill.description}</p>
                <div className="absolute top-0 right-0 text-3xl font-bold opacity-10">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`mb-12 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Briefcase className={`${accentColor} mr-2`} size={24} />
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-300">
                <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className={`${accentColor} font-medium`}>{exp.position}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.start} - {exp.end || 'Present'}</p>
                <p className="mt-2">{exp.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects and Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className={`${cardBgColor} p-8 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Code className={`${accentColor} mr-2`} size={24} />
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects?.map((project, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="mb-2">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline flex items-center`}>
                    View Project
                    <Globe className="ml-1" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className={`${cardBgColor} p-8 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <GraduationCap className={`${accentColor} mr-2`} size={24} />
              Education
            </h2>
            <div className="space-y-4">
              {data.education?.map((edu, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className={`${accentColor} font-medium`}>{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Awards Section */}
        {data.awards && data.awards.length > 0 && (
          <section className={`mt-12 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Award className={`${accentColor} mr-2`} size={24} />
              Awards & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <Award className={accentColor} size={24} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{award.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.issuer} | {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Connect Section */}
        <section className={`mt-12 ${cardBgColor} p-8 rounded-lg shadow-lg text-center`}>
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${data.email}`} className={`inline-flex items-center justify-center p-4 ${accentColor} rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300`}>
              <Mail size={24} />
            </Link>
            <Link href={`https://github.com/${data.github}`} className={`inline-flex items-center justify-center p-4 ${accentColor} rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300`}>
              <Github size={24} />
            </Link>
            <Link href={data.linkedin} className={`inline-flex items-center justify-center p-4 ${accentColor} rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300`}>
              <Linkedin size={24} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfographicTemplate;

