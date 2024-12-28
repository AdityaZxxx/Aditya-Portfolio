import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <DotPattern
          className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
