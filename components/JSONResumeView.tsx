'use client';

import React, { useState, useCallback, Suspense } from 'react';
import { ResumeData } from '../types/resume';
import { templates, TemplateKey } from './templates/index';
import { 
  Sun, Moon, Printer, FileDown, ChevronDown, 
  FileText, Layers, Newspaper, PenTool, 
  Contrast, Book, BarChart2, Film, 
  Minimize2, Clock, Briefcase, Lightbulb,
  Cpu, Mail, Type, Award, Users
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface JSONResumeViewProps {
  resumeData: ResumeData;
}

function JSONResumeViewInner({ resumeData }: JSONResumeViewProps) {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get('template') as TemplateKey | 'default';

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>(
    initialTemplate && templates[initialTemplate] ? initialTemplate : (resumeData.template as TemplateKey)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Template = templates[selectedTemplate] || templates.default;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const printResume = useCallback(() => {
    window.print();
  }, []);

  const downloadPDF = useCallback(() => {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('resume.pdf');
  }, []);

  const toggleSection = useCallback((section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const toggleSkill = useCallback((skill: string) => {
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]);
  }, []);

  const handleTemplateChange = (template: TemplateKey) => {
    setSelectedTemplate(template);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTemplateIcon = (key: TemplateKey) => {
    switch (key) {
      case 'default':
        return <FileText className="w-8 h-8" />;
      case 'modern':
        return <Layers className="w-8 h-8" />;
      case 'sidebar1':
        return <Newspaper className="w-8 h-8" />;
      case 'contrast':
        return <Contrast className="w-8 h-8" />;
      case 'magazine':
        return <Book className="w-8 h-8" />;
      case 'retro':
        return <Type className="w-8 h-8" />;
      case 'infographic':
        return <BarChart2 className="w-8 h-8" />;
      case 'storytelling':
        return <Film className="w-8 h-8" />;
      case 'minimal':
        return <Minimize2 className="w-8 h-8" />;
      case 'timeline':
        return <Clock className="w-8 h-8" />;
      case 'portfolio':
        return <Briefcase className="w-8 h-8" />;
      case 'creative':
        return <PenTool className="w-8 h-8" />;
      case 'techStartup':
        return <Cpu className="w-8 h-8" />;
      case 'newsletter':
        return <Mail className="w-8 h-8" />;
      case 'typewriter':
        return <Type className="w-8 h-8" />;
      case 'classic':
        return <Award className="w-8 h-8" />;
      case 'professional':
        return <Users className="w-8 h-8" />;
      default:
        return <FileText className="w-8 h-8" />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="w-full">
        <div className="container mx-auto flex justify-between items-center space-x-4 mb-4 p-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={toggleMenu}>
                  {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)} Template
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <h3 className="text-lg font-medium mb-4">Select a Template</h3>
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(templates).map(([key, Template]) => (
                        <div 
                          key={key} 
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${selectedTemplate === key ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                          onClick={() => handleTemplateChange(key as TemplateKey)}
                        >
                          <div className="aspect-w-16 aspect-h-9 mb-3 flex items-center justify-center rounded-md">
                            {getTemplateIcon(key as TemplateKey)}
                          </div>
                          <p className="text-center text-sm font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <button onClick={printResume} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Printer />
            </button>
            <button onClick={downloadPDF} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FileDown />
            </button>
          </div>
        </div>
        <div id="resume-content">
          <Template 
            data={resumeData} 
            expandedSections={expandedSections} 
            toggleSection={toggleSection}
            selectedSkills={selectedSkills}
            toggleSkill={toggleSkill}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default function JSONResumeView(props: JSONResumeViewProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JSONResumeViewInner {...props} />
    </Suspense>
  );
}
