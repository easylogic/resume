import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, Award, Book, Code, Zap, Target, Users } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface StorytellingTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const StorytellingTemplate: React.FC<StorytellingTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? 'text-yellow-400' : 'text-blue-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
      {/* Prologue */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl font-bold mb-4">{data.name}</h1>
        <p className="text-2xl mb-8">{data.title}</p>
        <div className="flex justify-center space-x-4">
          <Mail className={accentColor} size={24} />
          <Phone className={accentColor} size={24} />
          <MapPin className={accentColor} size={24} />
          <Globe className={accentColor} size={24} />
        </div>
      </section>

      {/* Chapter 1: The Beginning */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Book className={`${accentColor} mr-2`} size={24} />
          Chapter 1: The Beginning
        </h2>
        <p className="text-lg leading-relaxed mb-6">{data.about}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Chapter 2: The Journey of Skills */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Code className={`${accentColor} mr-2`} size={24} />
          Chapter 2: The Journey of Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.skills?.map((skill, index) => (
            <div key={skill.name} className="relative">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <Progress value={skill.level} className="w-full h-2 mb-2" />
              <p className="text-sm">{skill.description}</p>
              <div className="absolute top-0 right-0 text-3xl font-bold opacity-10">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 3: The Professional Odyssey */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Briefcase className={`${accentColor} mr-2`} size={24} />
          Chapter 3: The Professional Odyssey
        </h2>
        <div className="space-y-12">
          {data.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-300">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-gray-300"></div>
              <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
              <p className={`${accentColor} text-xl mb-2`}>{exp.position}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.start} - {exp.end || 'Present'}</p>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 4: The Creative Pursuits */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Code className={`${accentColor} mr-2`} size={24} />
          Chapter 4: The Creative Pursuits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects?.map((project, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:underline flex items-center`}>
                Explore this project
                <Globe className="ml-1" size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 5: The Foundation of Knowledge */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <GraduationCap className={`${accentColor} mr-2`} size={24} />
          Chapter 5: The Foundation of Knowledge
        </h2>
        <div className="space-y-8">
          {data.education?.map((edu, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-2xl font-semibold">{edu.school}</h3>
              <p className={`${accentColor} text-xl`}>{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Epilogue: Achievements and Future */}
      <section className={`mb-20 ${cardBgColor} p-8 rounded-lg shadow-lg`}>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Award className={`${accentColor} mr-2`} size={24} />
          Epilogue: Achievements and Future
        </h2>
        {data.awards && data.awards.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <Award className={accentColor} size={24} />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{award.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.issuer} | {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Looking Ahead</h3>
          <p className="text-lg">As this chapter of my professional story comes to a close, I'm excited for the next adventures that await. I'm always eager to take on new challenges and continue growing in my field.</p>
        </div>
      </section>

      {/* Connect */}
      <section className={`${cardBgColor} p-8 rounded-lg shadow-lg text-center`}>
        <h2 className="text-3xl font-bold mb-6">Let's Write the Next Chapter Together</h2>
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
  );
};

export default StorytellingTemplate;
