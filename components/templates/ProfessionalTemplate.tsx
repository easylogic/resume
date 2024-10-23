import React from 'react';
import { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Award, Book, Briefcase, User, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress";

interface ProfessionalTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({
  data,
  expandedSections,
  toggleSection,
  selectedSkills,
  toggleSkill,
  isDarkMode,
}) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const accentColor = isDarkMode ? 'bg-blue-600' : 'bg-blue-500';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <header className={`p-8 ${accentColor} text-white`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
            <p className="text-2xl mb-4">{data.title}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <User className="mr-2" size={24} />
                Professional Summary
              </h2>
              <p className="text-lg leading-relaxed">{data.about}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2" size={24} />
                Professional Experience
              </h2>
              {data.experience.map((exp, index) => (
                <div key={index} className={`mb-8 p-6 rounded-lg ${cardBg} shadow-md`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold">{exp.position}</h3>
                    <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded">{exp.period}</span>
                  </div>
                  <p className="text-xl mb-2 text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="mb-4">{exp.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-none space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-blue-500" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {data.projects && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Award className="mr-2" size={24} />
                  Notable Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.projects.map((project, index) => (
                    <div key={index} className={`p-6 rounded-lg ${cardBg} shadow-md`}>
                      <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                      <p className="mb-4">{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-block px-4 py-2 rounded ${accentColor} text-white hover:opacity-90`}>View Project</a>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Award className="mr-2" size={24} />
                Skills & Expertise
              </h2>
              <div className="space-y-4">
                {data.skills?.map((skill, index) => (
                  <div key={index} className={`p-4 rounded-lg ${cardBg} shadow-md`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="w-full h-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Book className="mr-2" size={24} />
                Education
              </h2>
              {data.education?.map((edu, index) => (
                <div key={index} className={`mb-6 p-6 rounded-lg ${cardBg} shadow-md`}>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-lg">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center mt-2">
                    <Calendar className="mr-2" size={16} />
                    {edu.period}
                  </p>
                </div>
              ))}
            </section>

            {data.languages && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Globe className="mr-2" size={24} />
                  Languages
                </h2>
                <div className={`p-6 rounded-lg ${cardBg} shadow-md`}>
                  {data.languages.map((lang, index) => (
                    <div key={index} className="mb-2 flex justify-between">
                      <span>{lang.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <footer className={`p-8 ${accentColor} text-white`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <Link href={`mailto:${data.email}`} className="flex items-center hover:underline">
              <Mail className="mr-2" size={20} />
              Email
            </Link>
            <Link href={data.linkedin} className="flex items-center hover:underline">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Link>
            <Link href={`https://github.com/${data.github}`} className="flex items-center hover:underline">
              <Github className="mr-2" size={20} />
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalTemplate;
