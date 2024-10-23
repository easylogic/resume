import React, { useEffect, useState, useRef } from 'react';
import { ResumeData, Project, Skill, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap, User, Code, ExternalLink } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

interface TypewriterEffectTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const TypewriterEffectTemplate: React.FC<TypewriterEffectTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-amber-50';
  const textColor = isDarkMode ? 'text-green-400' : 'text-gray-800';
  const accentColor = isDarkMode ? 'text-yellow-300' : 'text-blue-600';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-mono`}>
      <header className="text-center mb-12">
        <TypewriterEffect text={data.name} className="text-4xl md:text-5xl font-bold mb-2" />
        <TypewriterEffect text={data.title} className="text-xl md:text-2xl mb-4" delay={1000} />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <ContactButton href={`mailto:${data.email}`} icon={<Mail size={18} />} text={data.email} />
          <ContactButton href={`tel:${data.phone}`} icon={<Phone size={18} />} text={data.phone} />
          <ContactButton href="#" icon={<MapPin size={18} />} text={data.location} />
          <ContactButton href={`https://${data.website}`} icon={<Globe size={18} />} text="Website" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        <ScrollTriggeredSection title="About Me" icon={<User size={24} />}>
          <TypewriterEffect text={data.about} className="text-lg leading-relaxed" />
        </ScrollTriggeredSection>

        <ScrollTriggeredSection title="Experience" icon={<Briefcase size={24} />}>
          {data.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </ScrollTriggeredSection>

        <ScrollTriggeredSection title="Skills" icon={<Code size={24} />}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.skills?.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </ScrollTriggeredSection>

        <ScrollTriggeredSection title="Projects" icon={<Code size={24} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects?.map((project, index) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </ScrollTriggeredSection>

        <ScrollTriggeredSection title="Education" icon={<GraduationCap size={24} />}>
          {data.education?.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </ScrollTriggeredSection>
      </main>

      <footer className="mt-12 text-center">
        <TypewriterEffect text="Let's Connect" className="text-2xl font-bold mb-4" />
        <div className="flex justify-center space-x-4">
          <SocialButton href={`mailto:${data.email}`} icon={<Mail size={24} />} />
          <SocialButton href={`https://github.com/${data.github}`} icon={<Github size={24} />} />
          <SocialButton href={data.linkedin} icon={<Linkedin size={24} />} />
        </div>
      </footer>
    </div>
  );
};

const TypewriterEffect: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, isVisible]);

  return <div ref={elementRef} className={className}>{displayText}<span className="animate-blink">|</span></div>;
};

const ScrollTriggeredSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {isVisible && children}
    </section>
  );
};

const ContactButton: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <Link href={`${href}`} className="flex items-center hover:underline">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div className="mb-8">
      <TypewriterEffect text={`${experience.position} at ${experience.company}`} className="text-xl font-semibold" />
      <TypewriterEffect text={`${experience.start} - ${experience.end || 'Present'}`} className="text-sm" delay={200} />
      <TypewriterEffect text={experience.description} className="mt-2" delay={400} />
      <div className="mt-4">
        <TypewriterEffect text="Achievements:" className="font-medium" delay={600} />
        <ul className="list-disc list-inside mt-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>
              <TypewriterEffect text={achievement} delay={800 + index * 200} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-2">
    <TypewriterEffect text={skill.name} className="font-medium" />
    <Progress value={skill.level} className="w-full h-2 mt-1" />
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="border p-4 rounded">
    <TypewriterEffect text={project.name} className="text-lg font-semibold mb-2" />
    <TypewriterEffect text={project.description} className="mb-2" delay={200} />
    <Link href={`${project.link}`} className="text-blue-500 hover:underline flex items-center">
      View Project <ExternalLink size={16} className="ml-1" />
    </Link>
  </div>
);

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
  <div className="mb-4">
    <TypewriterEffect text={education.school} className="text-lg font-semibold" />
    <TypewriterEffect text={education.degree} className="text-md" delay={200} />
    <TypewriterEffect text={education.period} className="text-sm" delay={400} />
  </div>
);

const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <Link href={`${href}`} className="text-blue-500 hover:text-blue-600 transition-colors">
    {icon}
  </Link>
);

export default TypewriterEffectTemplate;
