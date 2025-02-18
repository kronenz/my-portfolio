import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-6">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Frontend Developer</h1>
        <p className="text-xl md:text-2xl mb-8">웹 개발의 모든 것을 담아내는 포트폴리오</p>
        <a 
          href="#projects" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
        >
          프로젝트 보기
        </a>
      </div>
    </section>
  )
}
