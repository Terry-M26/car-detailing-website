import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

/**
 * Root application component.
 * Defines the global page layout — Navbar and Footer persist across all routes,
 * while the content between them changes based on the current route.
 * The floating WhatsApp button is visible on every page.
 *
 * Routes:
 *   /         -> HomePage  (landing page with all sections)
 *   /gallery  -> GalleryPage (dedicated before/after gallery)
 *
 * To add a new page, create a component in /pages and add a <Route> below.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
