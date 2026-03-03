import { Award, Clock, MapPin, ThumbsUp } from 'lucide-react';

/**
 * Business highlights displayed as small icon cards.
 * Each entry represents a key selling point.
 * Edit these to match your own business strengths.
 */
const highlights = [
  { icon: Award, label: 'Premium Products', text: 'Only the best detailing products' },
  { icon: Clock, label: 'Punctual Service', text: 'We value your time' },
  { icon: ThumbsUp, label: '100% Satisfaction', text: 'Your satisfaction guaranteed' },
  { icon: MapPin, label: 'Mobile Service', text: 'We come to you' },
];

/**
 * About section with a two-column layout: image on the left, text on the right.
 * Includes a brief company story, a floating experience badge, and
 * a 2x2 grid of business highlights.
 *
 * Customization:
 * - Replace the image URL with your own photo.
 * - Rewrite the paragraphs to tell your story.
 * - Update the experience badge text and city name.
 */
export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80"
                alt="Car detailing in progress"
                className="w-full h-80 md:h-[28rem] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 font-extrabold text-lg px-6 py-4 rounded-xl shadow-lg hidden md:block">
              5+ Years <br /> Experience
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-6">
              About <span className="text-yellow-500">Us</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hi, I'm the founder of Hero Car Detailing. What started as a passion for keeping my own car spotless turned into a full-time business dedicated to making every vehicle look its absolute best.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              As a solo operator, I take personal pride in every detail — from the first rinse to the final wipe. No shortcuts, no rush. Just meticulous attention to detail and genuine care for your car.
            </p>
            <p className="text-gray-200 font-semibold text-lg mb-8">
              Serving <span className="text-yellow-500">Your City</span> and nearby areas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 p-4 bg-gray-800/70 rounded-xl"
                >
                  <div className="w-10 h-10 bg-yellow-400/15 rounded-lg flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-100 text-sm">{h.label}</p>
                    <p className="text-gray-400 text-xs">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
