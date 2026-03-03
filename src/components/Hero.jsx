import { ChevronDown } from 'lucide-react';

/**
 * Full-screen hero section displayed at the top of the homepage.
 * Features a background image with a dark gradient overlay, headline text,
 * two call-to-action buttons, and an animated scroll-down indicator.
 *
 * Customization:
 * - Replace the backgroundImage URL with your own hero photo.
 * - Update the headline, tagline, and city name.
 * - Change the WhatsApp link to your own number.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Hero <span className="text-yellow-400">Car Detailing</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Professional car detailing in <span className="text-yellow-400 font-semibold">Your City</span>. We bring the shine to your ride.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/1234567890?text=Hi%20I%20would%20like%20to%20book%20a%20car%20detailing%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105"
          >
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="border-2 border-white/60 hover:border-yellow-400 text-white hover:text-yellow-400 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-yellow-400 animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
