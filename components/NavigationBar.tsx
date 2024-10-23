import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function NavigationBar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="TechPro" />
              <span className="ml-2 text-xl font-bold text-gray-800">TechPro</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                템플릿
              </Link>
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                커뮤니티
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost">로그인</Button>
            <Button className="ml-3">무료로 시작하기</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
