'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Membership', href: '/membership' },
  { name: 'Shop', href: '/shop' },
  { name: 'Bootcamps', href: '/bootcamps' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Resources', href: '/blog' },
  { name: 'About', href: '/about' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <nav className="container-main flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-semibold text-olive">Rooted</span>
          <span className="text-2xl font-accent text-warm-gray">with Liza</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-charcoal hover:text-olive transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" size="sm">Get Started</Button>
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
          'lg:hidden border-t border-sand',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="container-main py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-charcoal hover:text-olive transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-sand space-y-3">
            <Link href="/login" className="block">
              <Button variant="outline" className="w-full">Log In</Button>
            </Link>
            <Link href="/signup" className="block">
              <Button variant="primary" className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
