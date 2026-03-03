import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import GalleryPreview from '../components/GalleryPreview';
import Contact from '../components/Contact';

/**
 * Homepage — the main landing page.
 * Composes all homepage sections in order from top to bottom.
 * Each section has an id attribute that matches the navbar anchor links,
 * enabling smooth-scroll navigation.
 *
 * To reorder sections, rearrange the components below.
 * To add a new section, create it in /components and include it here.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <GalleryPreview />
      <Contact />
    </main>
  );
}
