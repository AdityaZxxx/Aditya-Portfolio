// app/(home)/layout.tsx
import Navbar from '@/components/Navbar'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundBeamsWithCollision>
      <Navbar />
      {children}
    </BackgroundBeamsWithCollision>
  )
}
