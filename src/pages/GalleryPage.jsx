import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

/**
 * Before/after image pairs for the full gallery page.
 * Each entry has a "before" image, an "after" image, and a label.
 * Replace the Unsplash URLs with your own real project photos.
 */
const galleryPairs = [
  {
    before:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80',
    label: 'Full Exterior Detail',
  },
  {
    before:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80',
    label: 'Interior Deep Clean',
  },
  {
    before:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80',
    label: 'Paint Correction & Polish',
  },
  {
    before:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
    label: 'Engine Bay Cleaning',
  },
  {
    before:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
    label: 'Ceramic Coating Application',
  },
  {
    before:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80',
    after:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    label: 'Full Detail Package',
  },
];

/**
 * Dedicated gallery page showing before/after comparisons in a responsive grid.
 * Each card displays a side-by-side "BEFORE" and "AFTER" image with a label.
 * Includes a back-to-home link and a WhatsApp CTA at the bottom.
 *
 * Customization:
 * - Edit the galleryPairs array above to add your own transformation photos.
 * - Update the WhatsApp number in the CTA button href.
 */
export default function GalleryPage() {
  // Scroll to top when navigating to this page, since React Router
  // preserves scroll position by default.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-20 bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-100 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-4">
            Before & After <span className="text-yellow-500">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real transformations, real results. See what professional detailing can do for your vehicle.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryPairs.map((pair, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={pair.before}
                    alt={`Before - ${pair.label}`}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={pair.after}
                    alt={`After - ${pair.label}`}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 right-2 bg-green-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-100">{pair.label}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want results like these for your car?
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.1 1.511 5.828L.057 23.604a.5.5 0 00.61.61l5.776-1.454A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.762-.55-5.304-1.5l-.38-.227-3.432.864.88-3.375-.25-.395A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Book Your Detail Now
          </a>
        </div>
      </div>
    </main>
  );
}
