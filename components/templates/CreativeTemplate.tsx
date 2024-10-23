import React from 'react';
import { ResumeData, Project, Skill, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink, Award, Code, Briefcase, GraduationCap, User, Palette, Zap, Music, Headphones } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface CreativeTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = 'bg-light-punk-background';
  const textColor = 'text-light-punk-text';
  const accentColor1 = 'text-light-punk-accent1';
  const accentColor2 = 'text-light-punk-accent2';
  const accentColor3 = 'text-light-punk-accent3';
  const cardBgColor = 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-sans`}>
      {/* Header */}
      <header className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-light-punk-accent2 opacity-20 animate-pulse"></div>
        <div className="relative z-10 py-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${accentColor1} glitch`} data-text={data.name}>{data.name}</h1>
          <p className={`text-2xl md:text-3xl mb-6 ${accentColor2} typewriter`}>{data.title}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactButton href={`mailto:${data.email}`} icon={<Mail size={18} />} text={data.email} />
            <ContactButton href={`tel:${data.phone}`} icon={<Phone size={18} />} text={data.phone} />
            <ContactButton href="#" icon={<MapPin size={18} />} text={data.location} />
            <ContactButton href={`https://${data.website}`} icon={<Globe size={18} />} text="Website" />
          </div>
        </div>
      </header>

      {/* About */}
      <section className="mb-16 max-w-3xl mx-auto">
        <SectionTitle title="About Me" icon={<Headphones size={24} />} />
        <p className="text-xl leading-relaxed">{data.about}</p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <SectionTitle title="Punk Projects" icon={<Music size={24} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects?.map((project, index) => (
            <ProjectCard key={index} project={project} cardBgColor={cardBgColor} accentColor={accentColor1} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="Rebel Skills" icon={<Zap size={24} />} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.skills?.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} accentColor={accentColor2} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="Gig History" icon={<Briefcase size={24} />} />
        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} cardBgColor={cardBgColor} accentColor={accentColor3} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-16 max-w-4xl mx-auto">
        <SectionTitle title="School of Rock" icon={<GraduationCap size={24} />} />
        <div className="space-y-6">
          {data.education?.map((edu, index) => (
            <EducationCard key={index} education={edu} cardBgColor={cardBgColor} accentColor={accentColor1} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center bg-light-punk-accent2 bg-opacity-20 py-12 rounded-lg shadow-lg">
        <h2 className={`text-3xl font-semibold mb-8 ${accentColor1}`}>Let's Rock Together</h2>
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
  <h2 className="text-3xl font-semibold mb-8 flex items-center text-light-punk-accent1">
    {icon}
    <span className="ml-2">{title}</span>
  </h2>
);

const ContactButton: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <Link href={href} className="hover:underline flex items-center bg-light-punk-accent1 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105 shadow-md">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const ProjectCard: React.FC<{ project: Project; cardBgColor: string; accentColor: string }> = ({ project, cardBgColor, accentColor }) => (
  <div className={`${cardBgColor} rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
    {project.image && (
      <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
    )}
    <div className="p-6">
      <h3 className={`text-2xl font-semibold mb-3 ${accentColor}`}>{project.name}</h3>
      <p className="text-base mb-4 text-light-punk-text">{project.description}</p>
      <Link href={`${project.link}`} className={`${accentColor} hover:underline flex items-center justify-center bg-light-punk-accent2 bg-opacity-20 p-3 rounded-lg transition-colors`}>
        View Project <ExternalLink size={18} className="ml-2" />
      </Link>
    </div>
  </div>
);

const SkillBadge: React.FC<{ skill: Skill; accentColor: string }> = ({ skill, accentColor }) => (
  <div className={`p-4 rounded-full ${accentColor} bg-opacity-20 text-center transition-all duration-300 transform hover:scale-110 hover:bg-opacity-30`}>
    <p className="font-medium text-lg">{skill.name}</p>
  </div>
);

const ExperienceCard: React.FC<{ experience: Experience; cardBgColor: string; accentColor: string }> = ({ experience, cardBgColor, accentColor }) => (
  <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
    <h3 className={`text-2xl font-semibold mb-2 ${accentColor}`}>{experience.company}</h3>
    <p className="text-xl mb-3 text-light-punk-accent1">{experience.position}</p>
    <p className="text-sm mb-4 text-light-punk-text">{experience.start} - {experience.end || 'Present'}</p>
    <p className="mb-4 text-lg text-light-punk-text">{experience.description}</p>
  </div>
);

const EducationCard: React.FC<{ education: Education; cardBgColor: string; accentColor: string }> = ({ education, cardBgColor, accentColor }) => (
  <div className={`p-6 rounded-lg ${cardBgColor} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
    <h3 className={`text-2xl font-semibold mb-2 ${accentColor}`}>{education.school}</h3>
    <p className="text-xl mb-2 text-light-punk-accent2">{education.degree}</p>
    <p className="text-base text-light-punk-text">{education.period}</p>
  </div>
);

const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link href={href} className="hover:underline bg-light-punk-accent1 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
    {icon}
  </Link>
);

export default CreativeTemplate;
