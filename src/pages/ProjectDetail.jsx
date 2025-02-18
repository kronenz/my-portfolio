import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProjects } from '../services/api'

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projects = await fetchProjects()
        const foundProject = projects.find(p => p.id === id)
        if (foundProject) {
          setProject(foundProject)
        } else {
          setError('프로젝트를 찾을 수 없습니다.')
        }
      } catch (err) {
        setError('프로젝트 정보를 불러오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{error}</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← 돌아가기
        </Link>
        
        <div className="space-y-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-lg shadow-lg"
          />
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <div className="text-gray-600 mb-4">
                <p className="mb-2"><span className="font-semibold">기간:</span> {project.period}</p>
                <p><span className="font-semibold">역할:</span> {project.role}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">주요 성과</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">기술 상세</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.techDetails.map((detail, index) => (
                  <li key={index} className="text-gray-600">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
