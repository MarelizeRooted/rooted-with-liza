'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, Users, ShoppingBag, Package, 
  Calendar, FileText, Mail, BarChart3, Settings,
  ChevronRight, LogOut, Menu, X 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const adminNav = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Memberships', href: '/admin/memberships', icon: Package },
  { name: 'Products', href: '/admin/products', icon: ShoppingBag },
  { name: 'Bootcamps', href: '/admin/bootcamps', icon: Calendar },
  { name: 'Workshops', href: '/admin/workshops', icon: Calendar },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'Leads', href: '/admin/leads', icon: Mail },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-charcoal flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-charcoal border-r border-white/10 transform transition-transform lg:translate-x-0 lg:static",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-xl font-serif font-semibold text-cream">Rooted</span>
              <span className="text-xl font-accent text-warm-gray">Admin</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {adminNav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-card text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-olive text-cream" 
                      : "text-warm-gray hover:bg-white/5 hover:text-cream"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-sm text-warm-gray hover:text-cream transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-charcoal text-cream rounded-card"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
