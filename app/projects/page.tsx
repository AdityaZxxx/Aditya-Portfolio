// app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard'
import { projects } from '../../data/projects'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen mt-28  py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Projects.</h1>
          <p className="text-neutral-600 dark:text-neutral-200">
            A collection of projects I&apos;ve worked on. Each project represents unique challenges
            and learning experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer seeMoreText="Let's Go To My Resume." seeMoreLink="/resume" />
    </div>
  )
}
