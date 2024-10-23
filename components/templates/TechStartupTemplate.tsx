import React from 'react';
import { ResumeData, Project, Skill, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink, Award, Code, Briefcase, GraduationCap, User, Zap, BarChart, Cpu, ChevronRight } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface TechStartupTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const TechStartupTemplate: React.FC<TechStartupTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
  const accentColor = 'text-blue-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-sans`}>
      {/* Header */}
      <header className="text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.name}</h1>
        <p className="text-xl md:text-2xl mb-6">{data.title}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <ContactButton href={`mailto:${data.email}`} icon={<Mail size={18} />} text={data.email} />
          <ContactButton href={`tel:${data.phone}`} icon={<Phone size={18} />} text={data.phone} />
          <ContactButton href="#" icon={<MapPin size={18} />} text={data.location} />
          <ContactButton href={`https://${data.website}`} icon={<Globe size={18} />} text="Website" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        {/* About */}
        <section className="mb-16">
          <SectionTitle title="About Me" icon={<User size={24} />} />
          <p className="text-lg leading-relaxed">{data.about}</p>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <SectionTitle title="Tech Stack" icon={<Cpu size={24} />} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.skills?.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <SectionTitle title="Key Projects" icon={<Zap size={24} />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects?.map((project, index) => (
              <ProjectCard key={index} project={project} cardBgColor={cardBgColor} accentColor={accentColor} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <SectionTitle title="Work Experience" icon={<Briefcase size={24} />} />
          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} cardBgColor={cardBgColor} accentColor={accentColor} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <SectionTitle title="Education" icon={<GraduationCap size={24} />} />
          <div className="space-y-6">
            {data.education?.map((edu, index) => (
              <EducationCard key={index} education={edu} cardBgColor={cardBgColor} accentColor={accentColor} />
            ))}
          </div>
        </section>
      </div>

      {/* Contact */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">Let's Innovate Together</h2>
        <div className="flex justify-center space-x-6">
          <SocialButton href={`mailto:${data.email}`} icon={<Mail size={32} />} />
          <SocialButton href={`https://github.com/${data.github}`} icon={<Github size={32} />} />
          <SocialButton href={`https://www.linkedin.com/in/${data.linkedin}`} icon={<Linkedin size={32} />} />
        </div>
      </section>
    </div>
  );
};

const SectionTitle: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <h2 className="text-2xl font-semibold mb-6 flex items-center text-blue-600 border-b-2 border-blue-600 pb-2">
    {icon}
    <span className="ml-2">{title}</span>
  </h2>
);

const ContactButton: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <Link href={href} className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full transition-transform transform hover:scale-105 shadow-md">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow">
    <p className="font-medium text-lg">{skill.name}</p>
    <Progress value={skill.level} className="w-full h-2 mt-2 bg-blue-200" indicatorColor="bg-blue-600" />
  </div>
);

const ProjectCard: React.FC<{ project: Project; cardBgColor: string; accentColor: string }> = ({ project, cardBgColor, accentColor }) => (
  <div className={`${cardBgColor} rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105`}>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
      <p className="text-base mb-4">{project.description}</p>
      {project.highlights && (
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="text-sm">{highlight}</li>
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center">
        <Link href={`${project.link}`} className={`${accentColor} hover:underline flex items-center`}>
          View Project <ChevronRight size={18} className="ml-1" />
        </Link>
        <div className="flex items-center">
          <BarChart size={18} className="mr-2 text-blue-500" />
          <span className="font-semibold">Impact: +{Math.floor(Math.random() * 100)}%</span>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceCard: React.FC<{ experience: Experience; cardBgColor: string; accentColor: string }> = ({ experience, cardBgColor, accentColor }) => (
  <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105`}>
    <h3 className="text-2xl font-semibold mb-2">{experience.company}</h3>
    <p className={`${accentColor} text-xl mb-3`}>{experience.position}</p>
    <p className="text-sm mb-4">{experience.start} - {experience.end || 'Present'}</p>
    <p className="mb-4 text-lg">{experience.description}</p>
    <ul className="list-disc pl-5 space-y-2">
      {experience.achievements.map((achievement, idx) => (
        <li key={idx} className="text-base">{achievement}</li>
      ))}
    </ul>
  </div>
);

const EducationCard: React.FC<{ education: Education; cardBgColor: string; accentColor: string }> = ({ education, cardBgColor, accentColor }) => (
  <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105`}>
    <h3 className="text-2xl font-semibold mb-2">{education.school}</h3>
    <p className={`${accentColor} text-xl mb-2`}>{education.degree}</p>
    <p className="text-base">{education.period}</p>
  </div>
);

const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link href={href} className="bg-white text-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
    {icon}
  </Link>
);

export default TechStartupTemplate;
