// components/ProjectCard.tsx
import { ProjectType } from '@/types/project'
import Image from 'next/image'

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Project Image */}
      <div className="aspect-video w-full relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Overlay - Always visible on mobile, visible on hover for desktop */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium bg-sky-600/90 text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
