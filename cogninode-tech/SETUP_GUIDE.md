# 🚀 Cogninode Technologies - Setup Guide

This guide will help you get the Cogninode Technologies website up and running on your local machine.

## ⚠️ Prerequisites

Before you begin, ensure you have the following installed:

### 1. Node.js and npm

**Check if installed:**
```bash
node --version
npm --version
```

**If not installed:**
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- This will install both Node.js and npm

### 2. Git (Optional, for version control)

**Check if installed:**
```bash
git --version
```

**If not installed:**
- Download from: https://git-scm.com/

## 📥 Installation Steps

### Step 1: Navigate to Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd "c:/Users/DELL/Desktop/organize new folder/cogninode-tech"
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- React and React DOM
- Vite (build tool)
- Tailwind CSS
- React Router DOM
- Framer Motion
- And all other dependencies

**Expected time:** 2-5 minutes depending on your internet speed

### Step 3: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output similar to:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 4: Open in Browser

Open your web browser and visit:
```
http://localhost:5173
```

You should now see the Cogninode Technologies website running!

## 🛠️ Common Issues and Solutions

### Issue 1: "npm is not recognized"

**Solution:** Node.js is not installed or not in your PATH.
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

### Issue 2: Port 5173 is already in use

**Solution:** Another application is using port 5173.
- Stop the other application, or
- Vite will automatically try the next available port (5174, 5175, etc.)

### Issue 3: Installation fails with permission errors

**Solution (Windows):**
- Run your terminal as Administrator
- Try the installation again

**Solution (Mac/Linux):**
```bash
sudo npm install
```

### Issue 4: Tailwind styles not loading

**Solution:**
- Stop the dev server (Ctrl+C)
- Delete `node_modules` folder
- Run `npm install` again
- Run `npm run dev`

## 📦 Building for Production

When you're ready to deploy:

### Step 1: Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Step 2: Preview Production Build

```bash
npm run preview
```

This allows you to test the production build locally.

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop

3. Drag and drop the `dist` folder

### Option 3: Traditional Web Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web server

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR_HERE',
        // Add more shades as needed
      },
    },
  },
}
```

### Updating Contact Information

1. **Footer:** Edit `src/components/Footer.jsx`
2. **Contact Page:** Edit `src/pages/Contact.jsx`

### Adding/Removing Services

Edit `src/pages/Services.jsx` and modify the service arrays.

### Changing Google Maps Location

In `src/pages/Contact.jsx`, update the iframe `src` URL with your location's embed code from Google Maps.

## 📱 Testing Responsiveness

### Desktop
- Open in browser at full width

### Tablet
- Press F12 to open DevTools
- Click the device toggle icon
- Select iPad or similar

### Mobile
- Press F12 to open DevTools
- Click the device toggle icon
- Select iPhone or similar

## 🔄 Development Workflow

1. **Make changes** to files in the `src` folder
2. **Save the file** - Vite will automatically reload the browser
3. **Check the browser** to see your changes
4. **Repeat** as needed

## 📞 Need Help?

If you encounter any issues:

1. Check the console for error messages (F12 in browser)
2. Ensure all dependencies are installed (`npm install`)
3. Try deleting `node_modules` and reinstalling
4. Check that you're using Node.js v16 or higher

## ✅ Verification Checklist

- [ ] Node.js and npm installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Website loads at http://localhost:5173
- [ ] All pages accessible (Home, About, Services, Contact)
- [ ] Navigation working correctly
- [ ] Forms functional
- [ ] Responsive on mobile/tablet/desktop

---

**Congratulations! 🎉** Your Cogninode Technologies website is now ready for development and deployment!
