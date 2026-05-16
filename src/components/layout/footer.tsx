import Link from 'next/link'

const footerLinks = {
  support: [
    { name: 'Membership', href: '/membership' },
    { name: 'Shop', href: '/shop' },
    { name: 'Bootcamps', href: '/bootcamps' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Free Resources', href: '/blog' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refunds' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-sand mt-auto">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold text-olive">Rooted</span>
              <span className="text-2xl font-accent text-warm-gray">with Liza</span>
            </Link>
            <p className="text-warm-gray text-sm mb-4">
              Structured support for overwhelmed teens and parents. Practical systems, not just motivation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-olive transition-colors text-sm font-medium"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-olive transition-colors text-sm font-medium"
              >
                IG
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-olive transition-colors text-sm font-medium"
              >
                YT
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-serif font-semibold text-charcoal mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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

          {/* Company Links */}
          <div>
            <h3 className="font-serif font-semibold text-charcoal mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-charcoal mb-4">Get Support</h3>
            <p className="text-warm-gray text-sm mb-4">
              Download our free Overwhelmed Teen Starter Kit.
            </p>
            <Link
              href="/lead-magnet"
              className="inline-flex items-center text-olive hover:text-olive-dark font-medium text-sm transition-colors"
            >
              Download Free Kit →
            </Link>
          </div>
        </div>

        <div className="border-t border-beige mt-8 pt-8 text-center text-warm-gray text-sm">
          <p>© {new Date().getFullYear()} Rooted With Liza. All rights reserved.</p>
          <p className="mt-2">Built with care for teens and parents in South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
