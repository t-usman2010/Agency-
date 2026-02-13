import Link from 'next/link';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { AGENCY_NAME, AGENCY_EMAIL, AGENCY_PHONE, AGENCY_ADDRESS, NAV_LINKS, SERVICES } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-dark-300">
      {/* CTA Section */}
      <div className="border-b border-dark-800/60">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Ready to build something remarkable?
          </h2>
          <p className="text-dark-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your project and create a digital experience your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-4"
            >
              Start a Project
              <HiArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-dark-700 text-white font-semibold transition-all duration-200 hover:border-brand-500 hover:bg-brand-600/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo2.png"
                alt="Webentis Logo"
                width={140}
                height={52}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Code. Create. Connect. — Building high-performance digital experiences for ambitious brands.
            </p>
            <p className="text-dark-500 text-xs">{AGENCY_ADDRESS}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-dark-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="text-sm text-dark-400 hover:text-white transition-colors"
                >
                  {AGENCY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s/g, '')}`}
                  className="text-sm text-dark-400 hover:text-white transition-colors"
                >
                  {AGENCY_PHONE}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-brand-600 hover:text-white transition-all duration-300 text-xs font-medium"
                      aria-label={social}
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800/60">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} {AGENCY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
