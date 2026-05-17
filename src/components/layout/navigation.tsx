'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'ROOTED Circle', href: '/rooted-circle' },
  { name: 'Free Starter Kit', href: '/free-starter-kit' },
  { name: 'About', href: '/about' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-sand/50">
      <nav className="container-main flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-semibold text-olive">Rooted</span>
          <span className="text-2xl font-accent text-warm-gray">with Liza</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-charcoal hover:text-olive transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm">Log In</Button>
          </Link>
          <Link href="/apply">
            <Button variant="primary" size="sm" className="bg-olive text-cream hover:bg-olive-dark">Apply</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden border-t border-sand/50',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="container-main py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-charcoal hover:text-olive transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-sand/50 space-y-3">
            <Link href="/login" className="block">
              <Button variant="outline" className="w-full">Log In</Button>
            </Link>
            <Link href="/apply" className="block">
              <Button variant="primary" className="w-full bg-olive text-cream hover:bg-olive-dark">Apply to ROOTED Circle</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
