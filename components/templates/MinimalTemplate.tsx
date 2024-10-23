import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface MinimalTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8 max-w-4xl mx-auto`}>
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
        <p className="text-xl mb-4">{data.title}</p>
        <div className="flex justify-center space-x-4">
          <Mail className={accentColor} size={18} />
          <Phone className={accentColor} size={18} />
          <MapPin className={accentColor} size={18} />
          <Globe className={accentColor} size={18} />
        </div>
      </header>

      {/* About */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${accentColor}`}>About</h2>
        <p>{data.about}</p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${accentColor}`}>Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-lg">{exp.position}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.start} - {exp.end || 'Present'}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${accentColor}`}>Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {data.skills?.map((skill) => (
            <div key={skill.name}>
              <p className="font-medium">{skill.name}</p>
              <Progress value={skill.level} className="w-full h-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${accentColor}`}>Education</h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p>{edu.degree}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className={`text-2xl font-semibold mb-4 ${accentColor}`}>Contact</h2>
        <div className="flex justify-center space-x-4">
          <Link href={`mailto:${data.email}`} className={`${accentColor} hover:underline`}>
            <Mail size={24} />
          </Link>
          <Link href={`https://github.com/${data.github}`} className={`${accentColor} hover:underline`}>
            <Github size={24} />
          </Link>
          <Link href={data.linkedin} className={`${accentColor} hover:underline`}>
            <Linkedin size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MinimalTemplate;
