'use client';

import React from 'react';
import { templates, TemplateKey } from '@/components/templates/index';
import { NavigationBar } from '@/components/NavigationBar'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FileText, Layers, Newspaper, PenTool, Contrast, Book, BarChart2, Film, Minimize2, Clock, Briefcase, Cpu, Mail, Type, Award, Users } from 'lucide-react';
import Image from 'next/image';

const getTemplateIcon = (key: TemplateKey) => {
  switch (key) {
    case 'default': return <FileText className="w-5 h-5" />;
    case 'modern': return <Layers className="w-5 h-5" />;
    case 'sidebar1': return <Newspaper className="w-5 h-5" />;
    case 'contrast': return <Contrast className="w-5 h-5" />;
    case 'magazine': return <Book className="w-5 h-5" />;
    case 'retro': return <Type className="w-5 h-5" />;
    case 'infographic': return <BarChart2 className="w-5 h-5" />;
    case 'storytelling': return <Film className="w-5 h-5" />;
    case 'minimal': return <Minimize2 className="w-5 h-5" />;
    case 'timeline': return <Clock className="w-5 h-5" />;
    case 'portfolio': return <Briefcase className="w-5 h-5" />;
    case 'creative': return <PenTool className="w-5 h-5" />;
    case 'techStartup': return <Cpu className="w-5 h-5" />;
    case 'newsletter': return <Mail className="w-5 h-5" />;
    case 'typewriter': return <Type className="w-5 h-5" />;
    case 'classic': return <Award className="w-5 h-5" />;
    case 'professional': return <Users className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
};

function TemplatePreview({ name, templateKey }: { name: string; templateKey: TemplateKey }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 relative">
        <Image 
          src={`/templates/${templateKey}.svg`} 
          alt={name} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          {getTemplateIcon(templateKey)}
          <span className="ml-2">{name}</span>
        </h3>
        <Link href={`/resume?template=${templateKey}`}>
          <Button variant="outline" className="mt-2">미리보기</Button>
        </Link>
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />    
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FileText className="mr-2" />
          Resume Templates
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(templates).map(([key, Template]) => (
            <TemplatePreview 
              key={key}
              name={key.charAt(0).toUpperCase() + key.slice(1)}
              templateKey={key as TemplateKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
