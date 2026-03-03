# Car Detailing Website Template

A professional, modern car detailing service website built with React and Vite. This template provides a complete foundation for automotive service businesses looking to establish an online presence.

## Features

- Modern, responsive design optimized for all devices
- Smooth scrolling navigation with mobile-friendly menu
- Service showcase section with detailed offerings
- Image gallery for before/after work samples
- Contact section with WhatsApp integration
- Professional hero section with call-to-action buttons
- Clean, maintainable code structure

## Technology Stack

- **Frontend**: React 19 with modern hooks
- **Build Tool**: Vite 7 for fast development and optimized builds
- **Styling**: TailwindCSS 4 for utility-first styling
- **Routing**: React Router DOM with HashRouter for GitHub Pages compatibility
- **Icons**: Lucide React for consistent iconography
- **Deployment**: GitHub Actions for automated deployment to GitHub Pages

## Live Demo

View the live implementation: [https://terry-m26.github.io/car-detailing-website/](https://terry-m26.github.io/car-detailing-website/)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Terry-M26/car-detailing-website.git
   cd car-detailing-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Customization

### Branding

- Update company name in `src/components/Navbar.jsx` and `src/components/Hero.jsx`
- Replace contact information in `src/components/Contact.jsx`
- Update WhatsApp number in `src/components/WhatsAppButton.jsx`

### Content

- Modify service descriptions in `src/components/Services.jsx`
- Update about section content in `src/components/About.jsx`
- Add your own images to the gallery in `src/components/GalleryPreview.jsx`

### Styling

- Colors and fonts are configured in `src/index.css`
- Component-specific styles use TailwindCSS utility classes
- Customize the color scheme by modifying TailwindCSS configuration

## Template Placeholders

This template ships with placeholder values that you should replace with your own before going live:

| Placeholder | Location | Replace With |
|---|---|---|
| `1234567890` | Hero, Navbar, Services, Contact, WhatsAppButton, Footer, GalleryPage | Your WhatsApp number (international format) |
| `hello@herodetailing.com` | Contact, Footer | Your business email |
| `@herocardetailing` | Contact, Footer | Your Instagram handle |
| `Your City` | Hero, About, Footer | Your actual service area |
| `Hero Car Detailing` | Navbar, Hero, Footer, index.html | Your business name |
| Google Maps embed URL | Contact | Your own Google Maps embed link |
| Unsplash image URLs | Hero, About, GalleryPreview, GalleryPage | Your own photos |

## Deployment

This template is configured for automatic deployment to GitHub Pages:

1. Fork this repository
2. Update the `base` property in `vite.config.js` to match your repository name
3. Enable GitHub Pages in your repository settings
4. Set the source to "GitHub Actions"
5. Push changes to trigger automatic deployment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Main hero section
│   ├── Navbar.jsx      # Navigation component
│   ├── Services.jsx    # Services showcase
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact information
│   ├── Footer.jsx      # Site footer
│   └── WhatsAppButton.jsx # WhatsApp integration
├── pages/              # Page components
│   ├── HomePage.jsx   # Home page layout
│   └── GalleryPage.jsx # Gallery page
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles
```


## Support

For questions or support regarding this template, please open an issue in the GitHub repository.
