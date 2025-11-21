# Cogninode Technologies - Official Website

A modern, responsive website for Cogninode Technologies built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Client-side routing for seamless navigation

## 📋 Pages

1. **Home** - Hero section with company overview and key statistics
2. **About Us** - Company mission, values, and team information
3. **Services** - Detailed information about Cybersecurity and AI solutions
4. **Contact** - Contact form with Google Maps integration

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Routing
- **Framer Motion** - Animation library

## 📦 Installation

### Prerequisites

Make sure you have Node.js (v16 or higher) and npm installed on your system.

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd cogninode-tech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
cogninode-tech/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Color Theme

- **Primary Blue**: `#0070f3` (with variations)
- **Black**: `#000000` to `#1a1a1a`
- **White**: `#ffffff`
- **Gray Scale**: For text and backgrounds

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📝 Customization

### Update Company Information

1. **Contact Details**: Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`
2. **Services**: Modify `src/pages/Services.jsx` to add/remove services
3. **About Content**: Update `src/pages/About.jsx` with your company information

### Change Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📧 Contact

**Cogninode Technologies**
- Address: R-Cube Co-working Space, Ayyappa Society, Madhapur, Hyderabad
- Email: info@cogninode.tech
- Phone: +91 XXX XXX XXXX

## 📄 License

© 2025 Cogninode Technologies. All rights reserved.

## 🤝 Support

For support, email info@cogninode.tech or visit our office during business hours.

---

**Built with ❤️ by Cogninode Technologies**
