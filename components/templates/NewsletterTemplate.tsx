import React from 'react';
import { ResumeData, Project, Skill, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink, Award, Code, Briefcase, GraduationCap, User, Zap, BarChart, Cpu, ChevronRight, Calendar, Bookmark, TrendingUp, Coffee } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface NewsletterTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const NewsletterTemplate: React.FC<NewsletterTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-serif`}>
      {/* Header */}
      <header className="text-center mb-8 border-b-4 border-black dark:border-white pb-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">{data.name} Chronicle</h1>
        <p className="text-xl md:text-2xl italic">Innovating the Future, One Story at a Time</p>
        <p className="text-sm mt-2">Vol. 1 • Issue 1 • {new Date().toLocaleDateString()}</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <main className="md:col-span-2 space-y-8">
          {/* Lead Story: About */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <TrendingUp className="mr-2" /> Breaking: A Rising Star in Tech
            </h2>
            <p className="text-lg leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">{data.about}</p>
          </section>

          {/* Experience */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <Briefcase className="mr-2" /> Career Chronicles: A Journey Through Tech
            </h2>
            {data.experience.map((exp, index) => (
              <article key={index} className="mb-6 pb-6 border-b border-gray-300 last:border-b-0">
                <h3 className="text-2xl font-semibold">{exp.position} at {exp.company}</h3>
                <p className="text-sm mb-2 italic flex items-center">
                  <Calendar className="inline-block mr-1" size={14} />
                  {exp.start} - {exp.end || 'Present'}
                </p>
                <p className="mb-2">{exp.description}</p>
                <h4 className="font-semibold mt-2 flex items-center">
                  <Award className="mr-2" size={16} /> Key Achievements:
                </h4>
                <ul className="list-disc pl-5">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* Projects */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <Zap className="mr-2" /> Project Spotlight: Innovations Unveiled
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((project, index) => (
                <article key={index} className="border p-4 rounded">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Bookmark className="mr-2" size={18} /> {project.name}
                  </h3>
                  <p className="mb-2">{project.description}</p>
                  <Link href={`${project.link}`} className={`${accentColor} hover:underline flex items-center`}>
                    Read Full Story <ExternalLink className="ml-1" size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Contact Info */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Contact the Editor</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} /> {data.email}
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={18} /> {data.phone}
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={18} /> {data.location}
              </li>
              <li className="flex items-center">
                <Globe className="mr-2" size={18} /> 
                <Link href={`https://${data.website}`} className={`${accentColor} hover:underline`}>
                  {data.website}
                </Link>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <BarChart className="mr-2" size={20} /> Skill Ratings
            </h2>
            {data.skills?.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.level}/100</span>
                </div>
                <Progress value={skill.level} className="w-full h-2" />
              </div>
            ))}
          </section>

          {/* Education */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <GraduationCap className="mr-2" size={20} /> Academic Background
            </h2>
            {data.education?.map((edu, index) => (
              <article key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-lg">{edu.degree}</p>
                <p className="text-sm italic">{edu.period}</p>
              </article>
            ))}
          </section>

          {/* Quick Facts */}
          <section className={`${cardBgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex items-center">
              <Coffee className="mr-2" size={20} /> Quick Facts
            </h2>
            <ul className="space-y-2">
              <li>Years in Tech: {calculateYearsInTech(data.experience)}</li>
              <li>Projects Completed: {data.projects?.length || 0}</li>
              <li>Top Skill: {getTopSkill(data.skills)}</li>
            </ul>
          </section>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center border-t-2 border-gray-300 pt-4">
        <p className="mb-4">Stay Connected with {data.name}:</p>
        <div className="flex justify-center space-x-4">
          <SocialButton href={`mailto:${data.email}`} icon={<Mail size={24} />} />
          <SocialButton href={`https://github.com/${data.github}`} icon={<Github size={24} />} />
          <SocialButton href={data.linkedin} icon={<Linkedin size={24} />} />
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} {data.name} Chronicle. All rights reserved.</p>
      </footer>
    </div>
  );
};

const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link href={`${href}`} className="text-blue-600 hover:text-blue-800 transition-colors">
    {icon}
  </Link>
);

// Helper functions
const calculateYearsInTech = (experience: Experience[]): number => {
  const startDate = new Date(Math.min(...experience.map(exp => new Date(exp.start).getTime())));
  const endDate = new Date();
  return endDate.getFullYear() - startDate.getFullYear();
};

const getTopSkill = (skills: Skill[] | undefined): string => {
  if (!skills || skills.length === 0) return 'N/A';
  return skills.reduce((prev, current) => (prev.level > current.level) ? prev : current).name;
};

export default NewsletterTemplate;
