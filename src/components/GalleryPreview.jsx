import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const previewImages = [
  {
    src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80',
    alt: 'Detailed car exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80',
    alt: 'Clean car interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80',
    alt: 'Polished car finish',
  },
  {
    src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
    alt: 'Before and after detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
    alt: 'Luxury car detailed',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    alt: 'Sports car after detailing',
  },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-4">
            Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the transformation. Real results from real clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-800 bg-gray-900"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            View Full Before & After Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
