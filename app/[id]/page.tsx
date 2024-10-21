import React from 'react'
import { ArrowRight, GithubIcon, Linkedin, Mail, MapPin, Phone, User, Globe, Book, Award, Code, Database, Server, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { NavigationBar } from '@/components/NavigationBar'
import { loadUserData, getAllUserIds } from '@/utils/loadUserData'
import Link from 'next/link'
import { ResumeData } from '@/types/resume'

// 기본 사용자 데이터
const defaultUserData: ResumeData = {
  // 여기에 현재 파일에 있는 userData 객체의 내용을 그대로 붙여넣으세요.
  id: 'easylogic',
  template: 'default',
  name: '이지로직',
  title: '시니어 프론트엔드 개발자',
  email: 'easylogic@gmail.com',
  phone: '+82 10-1234-5678',
  location: '서울, 대한민국',
  website: 'https://easylogic.studio',
  github: 'easylogic',
  linkedin: 'https://www.linkedin.com/in/easylogic',
  about: '20년 이상의 웹 개발 경력을 가진 열정적인 프론트엔드 개발자입니다. 사용자 중심의 인터페이스 설계와 최신 웹 기술 활용에 전문성을 가지고 있습니다. 오픈소스 프로젝트에 적극적으로 기여하며, 개발자 커뮤니티에서 활발히 활동하고 있습니다.',
  experience: [
    { 
      company: 'NHN Dooray!',
      position: 'Senior Frontend Developer',
      period: '2022.01 - Present',
      start: '2022.01',
      end: 'Present',
      description: 'NHN Dooray! 프로젝트 관리 도구 개발',
      achievements: [
        '프로젝트 관리 도구의 프론트엔드 개발',
        'React, TypeScript, WebGL을 활용한 사용자 인터페이스 구현',
        '성능 최적화 및 사용자 경험 개선'
      ]
    },
    {
      company: 'Naver',
      position: 'Frontend Developer',
      period: '2019.10 - 2021.12',
      start: '2019.10',
      end: '2021.12',
      description: 'Naver 서비스의 프론트엔드 개발',
      achievements: [
        'Naver 메인 페이지 및 다양한 서비스의 프론트엔드 개발',
        'React와 Vue.js를 활용한 웹 애플리케이션 구축',
        '크로스 브라우저 호환성 및 반응형 디자인 구현'
      ]
    },
    {
      company: 'Kakao',
      position: 'Web Developer',
      period: '2015.04 - 2019.09',
      start: '2015.04',
      end: '2019.09',
      description: 'Kakao 서비스의 웹 개발',
      achievements: [
        'Kakao Talk 웹 버전 개발',
        'JavaScript와 HTML5를 활용한 웹 애플리케이션 구축',
        '실시간 채팅 기능 및 사용자 인터페이스 개발'
      ]
    },
    {
      company: 'NC Soft',
      position: 'Game Client Developer',
      period: '2010.03 - 2015.03',
      start: '2010.03',
      end: '2015.03',
      description: '온라인 게임 클라이언트 개발',
      achievements: [
        'C++을 이용한 게임 클라이언트 개발',
        '게임 UI 및 그래픽 렌더링 시스템 구현',
        '게임 성능 최적화 및 버그 수정'
      ]
    }
  ],
  skills: [
    { 
      name: 'JavaScript', 
      level: 95,
      description: '10년 이상의 경험으로 ES6+, 비동기 프로그래밍, 함수형 프로그래밍에 능숙합니다. Node.js 환경에서의 서버 사이드 개발 경험도 풍부합니다. 복잡한 애플리케이션의 성능 최적화와 메모리 관리에 전문성을 가지고 있습니다.',
      improvement: '최신 ECMAScript 제안 사항들을 지속적으로 학습하고 적용할 계획입니다.'
    },
    { 
      name: 'TypeScript', 
      level: 90,
      description: '정적 타입 시스템을 활용한 대규모 애플리케이션 개발에 전문성을 가지고 있으며, 복잡한 타입 정의와 제네릭 프로그래밍에 능숙합니다. 타입 안정성을 통해 런타임 오류를 크게 줄이고 개발 생산성을 향상시킨 경험이 있습니다.',
      improvement: '고급 타입 기능과 컴파일러 API에 대해 더 깊이 학습할 예정입니다.'
    },
    { 
      name: 'React', 
      level: 95,
      description: 'Redux, Context API, Hooks를 활용한 상태 관리, 성능 최적화, 컴포넌트 설계 패턴에 대한 깊은 이해를 가지고 있습니다. 대규모 SPA 개발 경험과 함께 React Native를 이용한 모바일 앱 개발 경험도 보유하고 있습니다.',
      improvement: 'Server Components와 Concurrent Mode에 대한 실무 적용 경험을 쌓을 계획입니다.'
    },
    { 
      name: 'Vue.js', 
      level: 85,
      description: 'Vue 2와 3 모두에 경험이 있으며, Vuex를 이용한 상태 관리와 컴포지션 API를 활용한 개발에 능숙합니다. 대규모 프로젝트에서 Vue.js를 사용한 경험이 있으며, 성능 최적화 기법에 대한 깊은 이해를 가지고 있습니다.',
      improvement: 'Vue 3의 새로운 기능들과 Pinia 상태 관리 라이브러리에 대해 더 학습할 예정입니다.'
    },
    { 
      name: 'Node.js', 
      level: 80,
      description: 'Express, Koa 프레임워크를 이용한 RESTful API 개발, 데이터베이스 연동, 인증 시스템 구현 경험이 있습니다. 비동기 프로그래밍과 이벤트 루프에 대한 깊은 이해를 바탕으로 고성능 서버 애플리케이션을 개발한 경험이 있습니다.',
      improvement: 'Microservices 아키텍처와 serverless 개발에 대한 실무 경험을 확장할 계획입니다.'
    },
    { 
      name: 'GraphQL', 
      level: 75,
      description: 'Apollo Server/Client를 이용한 GraphQL API 설계 및 구현, 스키마 설계, 쿼리 최적화 경험이 있습니다. RESTful API와 비교하여 GraphQL의 장단점을 이해하고 있으며, 대규모 프로젝트에서의 적용 경험이 있습니다.',
      improvement: 'GraphQL 기반의 실시간 애플리케이션 개발과 성능 최적화 기법을 더 연구할 예정입니다.'
    },
    { 
      name: 'WebGL', 
      level: 70,
      description: 'Three.js를 활용한 3D 그래픽 렌더링, 셰이더 프로그래밍, 성능 최적화 기술을 보유하고 있습니다. 복잡한 3D 시각화 프로젝트 경험이 있으며, WebGL의 저수준 API 활용 능력도 갖추고 있습니다.',
      improvement: 'GLSL 셰이더 프로그래밍 스킬을 향상시키고, WebGPU에 대한 학습을 시작할 계획입니다.'
    },
    { 
      name: 'Three.js', 
      level: 65,
      description: '3D 모델링, 라이팅, 애니메이션 구현 경험이 있으며, WebGL 기반의 인터랙티브 웹 경험 제작에 활용할 수 있습니다. 대규모 3D 시각화 프로젝트에서 Three.js를 활용한 경험이 있으며, 성능 최적화 기법에 대한 이해도가 높습니다.',
      improvement: '고급 3D 물리 시뮬레이션과 AR/VR 기술 통합에 대해 학습할 예정입니다.'
    },
    { 
      name: 'MongoDB', 
      level: 80,
      description: 'NoSQL 데이터베이스인 MongoDB를 활용한 대규모 데이터 처리 경험이 있습니다. 복잡한 쿼리 최적화, 인덱싱 전략 수립, 그리고 MongoDB Atlas를 이용한 클라우드 환경에서의 운영 경험을 보유하고 있습니다.',
      improvement: 'MongoDB의 최신 기능과 고급 집계 파이프라인 사용법에 대해 더 깊이 학습할 계획입니다.'
    },
    { 
      name: 'MySQL', 
      level: 75,
      description: '관계형 데이터베이스 설계, 복잡한 JOIN 쿼리 작성, 그리고 성능 최적화 경험이 있습니다. 트랜잭션 관리와 데이터 무결성 유지에 대한 깊은 이해를 가지고 있습니다.',
      improvement: '대규모 분산 환경에서의 MySQL 클러스터 운영과 샤딩 전략에 대해 학습할 예정입니다.'
    },
    { 
      name: 'Redis', 
      level: 70,
      description: '인메모리 데이터 구조 저장소인 Redis를 활용한 캐싱 시스템 구축 경험이 있습니다. 세션 관리, 실시간 랭킹 시스템 구현, 그리고 작업 큐 관리에 Redis를 효과으로 활용할 수 있습니다.',
      improvement: 'Redis의 고급 데이터 구조와 Lua 스크립팅을 활용한 복잡한 연산 처리 기법을 학습할 계획입니다.'
    },
  ],
  projects: [
    {
      name: 'ColorPicker',
      description: '웹 기반 고급 색상 선택 도구. WebGL을 활용한 실시간 렌더링과 다양한 색상 모델 지원.',
      link: 'https://github.com/easylogic/colorpicker'
    },
    {
      name: 'Editor',
      description: '브라우저에서 동작하는 강력한 SVG 편집기. React와 WebGL을 사용하여 고성능 렌더링 구현.',
      link: 'https://github.com/easylogic/editor'
    },
    {
      name: 'CanvasKit',
      description: 'HTML5 Canvas API를 쉽게 사용할 수 있는 라이브러리. 애니메이션과 인터랙티브 그래픽 구현에 최적화.',
      link: 'https://github.com/easylogic/CanvasKit'
    }
  ],
  education: [
    {
      school: '서울대학교',
      degree: '컴퓨터 공학 학사',
      period: '2006 - 2010'
    }
  ],
  languages: [
    { name: '한국어', level: '원어민' },
    { name: '영어', level: '비즈니스 레벨' },
    { name: '일본어', level: '중급' }
  ],
  awards: [
    {
      name: '올해의 개발자 상',
      issuer: 'Korea Developer Conference',
      year: 2022
    },
    {
      name: '최우수 오픈소스 기여상',
      issuer: 'Open Source Korea',
      year: 2020
    }
  ]
}

const skillCategories = [
  { name: 'Frontend', icon: <Monitor className="w-6 h-6" />, skills: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Svelte', 'Solid.js', 'Astro.js', 'SvelteKit'] },
  { name: 'Backend', icon: <Server className="w-6 h-6" />, skills: ['Node.js', 'Express', 'Koa', 'Nest.js', 'Django', 'Flask', 'FastAPI', 'Laravel', 'Ruby on Rails'] },
  { name: 'Database', icon: <Database className="w-6 h-6" />, skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL', 'SQLite', 'MariaDB', 'Oracle', 'SQL Server'] },
  { name: 'Other', icon: <Code className="w-6 h-6" />, skills: ['GraphQL', 'WebGL', 'Three.js', 'WebGPU', 'WebAssembly', 'WebRTC', 'Web Audio API', 'Web Workers'] },
]

export async function generateStaticParams() {
  const ids = await getAllUserIds();
  return ids.map(id => ({ id }));
}

export default async function UserProfile({ params }: { params: { id: string } }) {
  const userData = await loadUserData(params.id) || defaultUserData;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
              <p className="text-xl mb-4">{userData.title}</p>
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={18} />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2" size={18} />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2" size={18} />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2" size={18} />
                <a href={userData.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{userData.website}</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <User size={150} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg">{userData.about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          {userData.experience.map((exp, index) => (
            <div key={index} className="mb-16 bg-gray-50 rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-2xl font-semibold text-blue-600">{exp.company}</h3>
                <span className="text-gray-600 mt-2 md:mt-0">
                  {exp.start} - {exp.end || 'Present'}
                </span>
              </div>
              <h4 className="text-xl font-medium mb-4">{exp.position}</h4>
              <p className="text-gray-700 mb-6">{exp.description}</p>
              <h5 className="text-lg font-semibold mb-3">주요 업무:</h5>
              <ul className="list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skillName) => {
                    const skill = userData.skills?.find(s => s.name === skillName);
                    return skill ? (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="w-full h-2" />
                        <p className="text-sm text-gray-600">{skill.description}</p>
                        <p className="text-xs text-gray-400 italic">{skill.improvement}</p>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userData.projects?.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          {userData.education?.map((edu, index) => (
            <div key={index} className="mb-6"><h3 className="text-xl font-semibold">{edu.school}</h3> <p className="inline">{edu.degree}</p> <p className="inline text-gray-600">| {edu.period}</p></div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      {userData.languages && userData.languages.length > 0 && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.languages?.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-semibold">{lang.name}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
          </div>
        </section>
      )}

      {/* Awards Section */}
      {userData.awards && userData.awards.length > 0 && (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Awards & Achievements</h2>
          {userData.awards?.map((award, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{award.name}</h3>
              <p>{award.issuer} | {award.year}</p>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${userData.email}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <Mail className="mr-2" size={18} />
              Email Me
            </Link>
            <Link href={`https://github.com/${userData.github}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <GithubIcon className="mr-2" size={18} />
              GitHub
            </Link>
            <Link href={`https://www.linkedin.com/in/${userData.linkedin}`} className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-md">
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
