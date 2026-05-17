import Link from 'next/link'

const footerLinks = {
  programme: [
    { name: 'ROOTED Circle', href: '/rooted-circle' },
    { name: 'Free Starter Kit', href: '/free-starter-kit' },
    { name: 'Apply', href: '/apply' },
  ],
  about: [
    { name: 'About Liza', href: '/about' },
    { name: 'Login', href: '/login' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-sand/50 mt-auto">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-semibold text-olive">Rooted</span>
              <span className="text-2xl font-accent text-warm-gray">with Liza</span>
            </Link>
            <p className="text-warm-gray mb-6 leading-relaxed max-w-md">
              A faith-grounded mentorship community helping teens build unshakeable inner foundations. 
              We walk alongside families, bringing calm to chaos and hope to overwhelm.
            </p>
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-olive transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-olive transition-colors text-sm font-medium"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Programme Links */}
          <div>
            <h3 className="font-serif font-semibold text-charcoal mb-4">Programme</h3>
            <ul className="space-y-3">
              {footerLinks.programme.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-olive transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-serif font-semibold text-charcoal mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-olive transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/50 mt-12 pt-8 text-center text-warm-gray text-sm">
          <p>© {new Date().getFullYear()} Rooted with Liza. All rights reserved.</p>
          <p className="mt-2 text-xs">Rooted with care in South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
