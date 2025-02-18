import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

export default function Project({ id, title, description, image, tech = [], period, role, index }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 py-20 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
    >
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-sm text-gray-600 mb-2">
          <span className="mr-4">{period}</span>
          <span>{role}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <Link 
          to={`/project/${id}`}
          className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
        >
          프로젝트 상세보기 →
        </Link>
      </div>
      <div className="flex-1 group">
        <Link to={`/project/${id}`} className="block">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={title} 
              className="w-full transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
