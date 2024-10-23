import React from 'react';
import { ResumeData, Project, Skill, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink, Award, Code, Briefcase, GraduationCap, User } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface PortfolioTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8`}>
      {/* Header */}
      <header className="text-center mb-12 bg-blue-600 text-white py-16 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-blue-500 transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-blue-700 transform skew-y-12"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">{data.name}</h1>
          <p className="text-2xl md:text-3xl mb-6 animate-fade-in-up">{data.title}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <ContactButton href={`mailto:${data.email}`} icon={<Mail size={18} />} text={data.email} />
            <ContactButton href={`tel:${data.phone}`} icon={<Phone size={18} />} text={data.phone} />
            <ContactButton href="#" icon={<MapPin size={18} />} text={data.location} />
            <ContactButton href={`https://${data.website}`} icon={<Globe size={18} />} text="Website" />
          </div>
        </div>
      </header>

      {/* About */}
      <section className="mb-16 max-w-3xl mx-auto">
        <SectionTitle title="About Me" icon={<User size={24} />} />
        <p className="text-xl leading-relaxed">{data.about}</p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <SectionTitle title="Featured Projects" icon={<Code size={24} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects?.map((project, index) => (
            <ProjectCard key={index} project={project} cardBgColor={cardBgColor} accentColor={accentColor} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="Skills" icon={<Award size={24} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills?.map((skill) => (
            <SkillCard key={skill.name} skill={skill} cardBgColor={cardBgColor} accentColor={accentColor} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="Work Experience" icon={<Briefcase size={24} />} />
        {data.experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} cardBgColor={cardBgColor} accentColor={accentColor} />
        ))}
      </section>

      {/* Education */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="Education" icon={<GraduationCap size={24} />} />
        {data.education?.map((edu, index) => (
          <EducationCard key={index} education={edu} cardBgColor={cardBgColor} accentColor={accentColor} />
        ))}
      </section>

      {/* Contact */}
      <section className="text-center bg-blue-600 text-white py-12 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-blue-500 transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-blue-700 transform skew-y-12"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white pb-2 inline-block">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <SocialButton href={`mailto:${data.email}`} icon={<Mail size={32} />} />
            <SocialButton href={`https://github.com/${data.github}`} icon={<Github size={32} />} />
            <SocialButton href={`https://www.linkedin.com/in/${data.linkedin}`} icon={<Linkedin size={32} />} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionTitle: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <h2 className="text-3xl font-semibold mb-8 flex items-center justify-center">
    {icon}
    <span className="ml-2">{title}</span>
  </h2>
);

const ContactButton: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <Link href={href} className="hover:underline flex items-center bg-white text-blue-600 px-4 py-2 rounded-full transition-transform transform hover:scale-105 shadow-md">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const ProjectCard: React.FC<{ project: Project; cardBgColor: string; accentColor: string; isDarkMode: boolean }> = ({ project, cardBgColor, accentColor, isDarkMode }) => (
  <div className={`${cardBgColor} rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
    {project.image && (
      <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
    )}
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
      <Link href={`${project.link}`} className={`${accentColor} hover:underline flex items-center justify-center bg-blue-100 dark:bg-blue-900 p-3 rounded-lg transition-colors`}>
        View Project <ExternalLink size={18} className="ml-2" />
      </Link>
    </div>
  </div>
);

const SkillCard: React.FC<{ skill: Skill; cardBgColor: string; accentColor: string }> = ({ skill, cardBgColor, accentColor }) => (
  <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
    <p className="font-medium text-xl mb-3 flex items-center">
      <Code className={`${accentColor} mr-2`} size={24} />
      {skill.name}
    </p>
    <Progress value={skill.level} className="w-full h-3 mb-3" />
    <p className="text-sm">{skill.description}</p>
  </div>
);

const ExperienceCard: React.FC<{ experience: Experience; cardBgColor: string; accentColor: string }> = ({ experience, cardBgColor, accentColor }) => (
  <div className={`mb-8 p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
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
  <div className={`mb-6 p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
    <h3 className="text-2xl font-semibold mb-2">{education.school}</h3>
    <p className={`${accentColor} text-xl mb-2`}>{education.degree}</p>
    <p className="text-base">{education.period}</p>
  </div>
);

const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link href={href} className="hover:underline bg-white text-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
    {icon}
  </Link>
);

export default PortfolioTemplate;
