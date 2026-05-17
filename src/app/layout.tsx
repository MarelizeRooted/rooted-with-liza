import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rooted With Liza | Faith-Grounded Mentorship for Teens & Families',
  description: 'A mentorship community helping teens build unshakeable inner foundations. Weekly sessions, emotional resilience training, and parent support.',
  keywords: ['teen mentorship', 'resilience training', 'parent support', 'homeschool', 'South Africa'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
