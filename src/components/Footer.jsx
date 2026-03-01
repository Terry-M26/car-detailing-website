import { Instagram, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-extrabold text-white mb-3">
              Hero <span className="text-yellow-400">Car Detailing</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Professional car detailing services. We bring the shine to your ride, every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Interior Detailing</li>
              <li>Exterior Wash & Polish</li>
              <li>Full Car Detailing</li>
              <li>Ceramic Coating</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" /> +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@herodetailing.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4" /> hello@herodetailing.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/herocardetailing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Instagram className="w-4 h-4" /> @herocardetailing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {year} Hero Car Detailing. All rights reserved.</p>
          <p>Serving Your City and nearby areas</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/herocardetailing" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
