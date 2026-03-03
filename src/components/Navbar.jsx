import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * Navigation links configuration.
 * Each entry maps a label to an anchor section on the homepage.
 * To add a new section, add an entry here and create the matching
 * section component with a corresponding id attribute.
 */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Responsive navigation bar with scroll-aware styling.
 *
 * Behavior:
 * - Transparent when at the top of the page, becomes solid on scroll.
 * - On the homepage, links smooth-scroll to anchor sections.
 * - On other pages (e.g. /gallery), links navigate back to the homepage.
 * - Mobile menu toggles open/closed with a hamburger icon.
 *
 * Customization:
 * - Update the brand name in the <Link> element below.
 * - Change the WhatsApp number in the "Book Now" button href.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);       // Mobile menu open/closed state
  const [scrolled, setScrolled] = useState(false); // Whether user has scrolled past the top
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Listen for scroll events to toggle the navbar background style.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On the homepage, intercept anchor clicks to smooth-scroll instead of jumping.
  // On other pages, let the default navigation happen (back to homepage with anchor).
  const handleClick = (e, href) => {
    setOpen(false);
    if (!isHome) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-xl md:text-2xl font-extrabold tracking-tight text-white"
          >
            Hero <span className="text-yellow-400">Car Detailing</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-gray-100 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-sm font-medium text-gray-100 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-5 py-2 rounded-full transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-950/95 backdrop-blur-sm`}
      >
        <div className="px-4 pb-4 space-y-2">
          {navLinks.map((link) =>
            isHome ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block py-2 text-gray-100 hover:text-yellow-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-100 hover:text-yellow-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors mt-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
