'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ResumeData } from '../types/resume';
import { templates, TemplateKey } from './templates';
import { Sun, Moon, Printer, FileDown } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface JSONResumeViewProps {
  resumeData: ResumeData;
}

export default function JSONResumeView({ resumeData }: JSONResumeViewProps) {
  const searchParams = useSearchParams();
  const initialTemplate = searchParams.get('template') as TemplateKey | null;

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>(
    initialTemplate && templates[initialTemplate] ? initialTemplate : (resumeData.template as TemplateKey)
  );
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

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value as TemplateKey);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="w-full">
        <div className="container mx-auto flex justify-between items-center space-x-4 mb-4 p-4">
          <Select onValueChange={handleTemplateChange} defaultValue={selectedTemplate}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(templates).map((key) => (
                <SelectItem key={key} value={key}>{key.charAt(0).toUpperCase() + key.slice(1)} Template</SelectItem>
              ))}
            </SelectContent>
          </Select>
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
