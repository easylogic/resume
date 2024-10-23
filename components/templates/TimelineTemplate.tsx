import React from 'react';
import { ResumeData, Experience, Education } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface TimelineTemplateProps {
  data: ResumeData;
  expandedSections: { [key: string]: boolean };
  toggleSection: (section: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  isDarkMode: boolean;
}

const TimelineTemplate: React.FC<TimelineTemplateProps> = ({ data, expandedSections, toggleSection, selectedSkills, toggleSkill, isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkMode ? '#60a5fa' : '#2563eb';
  const cardBgColor = isDarkMode ? '#1f2937' : '#ffffff';

  const timelineItems = [...data.experience].sort((a, b) => 
    new Date(b.start).getTime() - new Date(a.start).getTime()
  );

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8`}>
      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.name}</h1>
        <p className="text-lg md:text-xl mb-4">{data.title}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Mail className="text-blue-500" size={18} />
          <Phone className="text-blue-500" size={18} />
          <MapPin className="text-blue-500" size={18} />
          <Globe className="text-blue-500" size={18} />
        </div>
      </header>

      {/* About */}
      <section className="mb-8 md:mb-12 max-w-2xl mx-auto">
        <h2 className={`text-xl md:text-2xl font-semibold mb-4 text-blue-500`}>About Me</h2>
        <p className="text-sm md:text-base">{data.about}</p>
      </section>

      {/* Timeline */}
      <VerticalTimeline animate={false} lineColor={accentColor}>
        {timelineItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: cardBgColor, color: textColor }}
            contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
            date={`${item.start} - ${item.end || 'Present'}`}
            iconStyle={{ background: accentColor, color: '#fff' }}
            icon={isExperience(item) ? <Briefcase /> : <GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              {isExperience(item) ? item.company : (item as Education).school}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-blue-500">
              {isExperience(item) ? item.position : (item as Education).degree}
            </h4>
            {isExperience(item) && (
              <>
                <p>{item.description}</p>
                <ul className="list-disc pl-5 mt-2">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Skills */}
      <section className="mb-8 md:mb-12 max-w-2xl mx-auto">
        <h2 className={`text-xl md:text-2xl font-semibold mb-4 text-blue-500`}>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.skills?.map((skill) => (
            <div key={skill.name}>
              <p className="font-medium text-sm md:text-base">{skill.name}</p>
              <Progress value={skill.level} className="w-full h-1" />
              <p className="text-xs mt-1">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className={`text-xl md:text-2xl font-semibold mb-4 text-blue-500`}>Contact</h2>
        <div className="flex justify-center space-x-4">
          <Link href={`mailto:${data.email}`} className="text-blue-500 hover:underline">
            <Mail size={24} />
          </Link>
          <Link href={`https://github.com/${data.github}`} className="text-blue-500 hover:underline">
            <Github size={24} />
          </Link>
          <Link href={data.linkedin} className="text-blue-500 hover:underline">
            <Linkedin size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

function isExperience(item: Experience | Education): item is Experience {
  return 'company' in item;
}

export default TimelineTemplate;
