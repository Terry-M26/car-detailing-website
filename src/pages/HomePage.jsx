import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import GalleryPreview from '../components/GalleryPreview';
import Contact from '../components/Contact';

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
