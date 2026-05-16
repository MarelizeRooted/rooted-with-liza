import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rooted With Liza | Structured Support for Teens & Parents',
  description: 'A structured resilience and study support system for overwhelmed teens and parents. Study systems, exam preparation, emotional resilience training, and parental guidance.',
  keywords: ['teen study support', 'exam preparation', 'burnout recovery', 'parent guidance', 'resilience training', 'South Africa'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="paper-texture fixed inset-0 z-50" aria-hidden="true" />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
