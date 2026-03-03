/**
 * Application entry point.
 * Mounts the React app into the #root div defined in index.html.
 *
 * HashRouter is used instead of BrowserRouter because GitHub Pages
 * does not support server-side URL rewrites. Hash-based routing
 * (e.g. /#/gallery) ensures all routes work correctly after deployment.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
