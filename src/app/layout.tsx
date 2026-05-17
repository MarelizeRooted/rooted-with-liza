import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROOTED Circle | Study & Resilience Mentoring for Overwhelmed Teens',
  description: 'Weekly mentoring for overwhelmed teens struggling with procrastination, exam stress, and low confidence. Practical study support, resilience coaching, and faith-grounded encouragement. Apply now.',
  keywords: ['teen mentorship', 'study skills', 'resilience training', 'overwhelmed teens', 'homeschool support', 'South Africa'],
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
