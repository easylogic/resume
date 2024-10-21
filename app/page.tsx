import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Star, FileText, Globe, PenTool } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { NavigationBar } from '../components/NavigationBar'  // 수정된 부분

// 가상의 사용자 데이터
const users = [
  { id: 'easylogic', name: '이지로직', title: '시니어 프론트엔드 개발자' },
  { id: 'janesmith', name: '김영희', title: '백엔드 개발자' },
  { id: 'boblee', name: '이철수', title: '풀스택 개발자' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      <NavigationBar />  {/* 추가된 부분 */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              당신의 경력을 빛나게 만들어보세요
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              전문적인 이력서를 쉽고 빠르게 작성하고, 개발자 커뮤니티와 소통하세요.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Button size="lg" className="w-full">
                  무료로 이력서 만들기
                </Button>
                <Button size="lg" variant="outline" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  템플릿 둘러보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              주요 기능
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              개발자를 위한 최고의 이력서 작성 도구
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<PenTool className="h-8 w-8 text-blue-600" />}
              title="손쉬운 작성"
              description="직관적인 인터페이스로 빠르고 쉽게 이력서를 작성하세요."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-green-600" />}
              title="다양한 템플릿"
              description="20+ 전문적인 템플릿으로 당신의 개성을 표현하세요."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-purple-600" />}
              title="개발자 커뮤니티"
              description="다른 개발자들과 경험을 공유하고 조언을 얻으세요."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-red-600" />}
              title="다국어 지원"
              description="글로벌 기업에 지원할 수 있도록 다양한 언어를 지원합니다."
            />
          </div>
        </div>
      </section>

      {/* Template Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              전문적인 템플릿
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              다양한 산업과 경력 수준에 맞는 템플릿을 제공합니다.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TemplatePreview name="모던 심플" image="/templates/modern-simple.svg" />
            <TemplatePreview name="크리에이티브" image="/templates/creative.svg" />
            <TemplatePreview name="전문가" image="/templates/professional.svg" />
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">
              모든 플릿 보기 <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard number="3M+" description="작성된 이력서" />
            <StatCard number="150+" description="국가의 사용자" />
            <StatCard number="50K+" description="채용 성공" />
            <StatCard number="4.8/5" description="사용자 평점" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              어떻게 작동하나요?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              3단계로 쉽게 시작하세요.
            </p>
          </div>
          <div className="mt-20">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                <StepCard number={1} title="템플릿 선택" description="다양한 전문 템플릿 중 선택" />
                <StepCard number={2} title="정보 입력" description="간편한 폼으로 빠르게 작성" />
                <StepCard number={3} title="다운로드 및 공유" description="PDF 다운로드 또는 링크 공유" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            사용자 후기
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="이 플랫폼 덕분에 꿈꾸던 회사에 취업할 수 있었어요. 정말 감사합니다!"
              author="김서연"
              role="프론트엔드 개발자 @ 네이버"
            />
            <TestimonialCard
              quote="개발자 특화 기능이 정말 유용해요. 기술 스택을 효과적으로 표현할 수 있었죠."
              author="이준호"
              role="백엔드 개발자 @ 카카오"
            />
            <TestimonialCard
              quote="커뮤니티를 통해 이력서 피드백을 받았는데, 큰 도움이 되었어요!"
              author="박민지"
              role="풀스택 개발자 @ 토스"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            자주 묻는 질문
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <FAQItem 
              question="무료로 사용할 수 있나요?" 
              answer="네, 기본 기능은 모두 무료로 제공됩니다. 다만 모든 내용은 본인이 직접 PR을 날려주셔야 합니다. 코드 리뷰는 덤으로 해드립니다!"
            />
            <FAQItem 
              question="제 정보는 안전한가요?" 
              answer="물론입니다! 우리는 당신의 정보를 우리 집 금고보다 더 안전게 보관합니다. 심지어 우리도 접근할 수 없을 정도로요. 혹시 비밀번호를 잊어버리셨다고요? 음... 그건 좀 곤란한데요."
            />
            <FAQItem 
              question="이력서를 PDF로 다운로드 할 수 있나요?" 
              answer="네, 물론이죠! PDF, DOCX, TXT, 심지어 양피지에 새겨 넣은 형태로도 제공 가능합니다. 마지막 옵션은 배송비가 좀 나갈 수 있어요."
            />
            <FAQItem 
              question="기술 지원을 받을 수 있나요?" 
              answer="우리는 이미 자고 있습니다. 여러분의 고민도 같이 잠재우세요. 아침에 일어나면 모든 게 해결되어 있을 거예요. 안 되면 그때 연락주세요. 커피 한 잔 하면서 얘기해요!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">준비되셨나요?</span>
            <span className="block text-blue-200">지금 바로 이력서를 작성해보세요.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                무료로 시작하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Profiles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            개발자 프로필
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <Link href={`/${user.id}`} key={user.id}>
                <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600 mt-2">{user.title}</p>
                  <Button variant="link" className="mt-4">
                    프로필 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img className="h-10" src="/logo.svg" alt="TechPro" />
              <p className="text-gray-400 text-base">
                개발자들의 경력을 빛내는 플랫폼
              </p>
              <div className="flex space-x-6">
                {/* Add social media icons here */}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    솔루션
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <FooterLink href="#" text="이력서 작성" />
                    <FooterLink href="#" text="포트폴리오" />
                    <FooterLink href="#" text="커뮤니티" />
                    <FooterLink href="#" text="채용 정보" />
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    지원
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <FooterLink href="#" text="가이드" />
                    <FooterLink href="#" text="API 문서" />
                    <FooterLink href="#" text="요금제" />
                    <FooterLink href="#" text="고객 지원" />
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    회사
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <FooterLink href="#" text="About" />
                    <FooterLink href="#" text="블로그" />
                    <FooterLink href="#" text="채용" />
                    <FooterLink href="#" text="파트너" />
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    법적 고지
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <FooterLink href="#" text="개인정보 처리방침" />
                    <FooterLink href="#" text="이용약관" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 TechPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
      <h3 className="mt-8 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-medium">
          {number}
        </span>
      </div>
      <h3 className="mt-4 text-center text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <a href={href} className="text-base text-gray-300 hover:text-white">
        {text}
      </a>
    </li>
  )
}

function TemplatePreview({ name, image }: { name: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <Button variant="outline" className="mt-2">미리보기</Button>
      </div>
    </div>
  )
}

function StatCard({ number, description }: { number: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold">{number}</div>
      <div className="mt-2 text-xl">{description}</div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  )
}
