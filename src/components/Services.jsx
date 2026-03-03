import { Sparkles, Car, ShieldCheck, Droplets } from 'lucide-react';

/**
 * Service offerings data.
 * Each entry defines a card shown in the services grid.
 * To add or remove a service, edit this array.
 * Icons come from the Lucide React library (https://lucide.dev).
 */
const services = [
  {
    icon: Sparkles,
    name: 'Interior Detailing',
    description:
      'Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Includes vacuuming, steam cleaning, and leather conditioning.',
    price: 'Starting from $99',
    duration: '2-3 hours',
  },
  {
    icon: Droplets,
    name: 'Exterior Wash & Polish',
    description:
      'Hand wash, clay bar treatment, machine polish, and premium wax coating for a mirror-like finish that lasts.',
    price: 'Starting from $79',
    duration: '1.5-2 hours',
  },
  {
    icon: Car,
    name: 'Full Car Detailing',
    description:
      'Complete interior and exterior detailing package. The ultimate refresh for your vehicle inside and out.',
    price: 'Starting from $169',
    duration: '4-5 hours',
  },
  {
    icon: ShieldCheck,
    name: 'Ceramic Coating',
    description:
      'Long-lasting ceramic protection that shields your paint from UV, scratches, and contaminants for years.',
    price: 'Get a Quote',
    duration: 'By appointment',
  },
];

/**
 * Services section displaying available detailing packages in a responsive grid.
 * Each card shows an icon, name, description, price, and estimated duration.
 * A WhatsApp CTA button sits below the grid for quick quote requests.
 *
 * Customization:
 * - Edit the services array above to change offerings, prices, and durations.
 * - Update the WhatsApp number in the CTA button href.
 */
export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a quick exterior refresh to a full interior-exterior detail, we have the right package for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-yellow-400/50 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition-colors">
                <service.icon className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-yellow-400 font-bold text-lg">{service.price}</p>
                {service.duration && (
                  <p className="text-gray-500 text-xs mt-1">{service.duration}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://wa.me/1234567890?text=Hi%20I%20would%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.1 1.511 5.828L.057 23.604a.5.5 0 00.61.61l5.776-1.454A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.762-.55-5.304-1.5l-.38-.227-3.432.864.88-3.375-.25-.395A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
