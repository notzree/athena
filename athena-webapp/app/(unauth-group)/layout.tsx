
import '../globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import LandingNavBar from '@/components/LandingNavbar'
import LandingFooter from '@/components/LandingFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <LandingNavBar/>
        </nav>
        {children}
        <LandingFooter/>
        </body>
        
    </html>
    </ClerkProvider>
  )
}

