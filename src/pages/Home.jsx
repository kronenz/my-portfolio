import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Contact from '../components/Contact'
import { fetchProjects } from '../services/api'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      setLoading(true)
      const data = await fetchProjects()
      setProjects(data)
      setError(null)
    } catch (err) {
      setError('프로젝트를 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadProjects}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            다시 시도
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Hero />
      <section id="projects" className="container mx-auto px-6">
        {projects.map((project, index) => (
          <Project key={`${project.id}-${index}`} {...project} index={index} />
        ))}
      </section>
      <Contact />
    </>
  )
}
