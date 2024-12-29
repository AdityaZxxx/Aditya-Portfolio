import { ProjectType } from '@/types/project'

// data/projects.ts
export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    skills: ['React', 'TypeScript', 'Tailwind', 'NextJS'],
  },
  {
    id: 2,
    title: 'Social Media App',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop',
    skills: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'AI Image Generator',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2370&auto=format&fit=crop',
    skills: ['Python', 'TensorFlow', 'FastAPI'],
  },
  {
    id: 4,
    title: 'Weather App',
    image:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2374&auto=format&fit=crop',
    skills: ['React', 'OpenWeather API', 'ChartJS'],
  },
  {
    id: 5,
    title: 'Task Management',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop',
    skills: ['Vue', 'Vuex', 'TailwindCSS'],
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    image:
      'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?w=1200&auto=format&fit=crop',
    skills: ['Next.js', 'CoinGecko API', 'Chart.js'],
  },
]
