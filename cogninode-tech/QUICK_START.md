# 🚀 Quick Start Guide - Cogninode Technologies

## ⚡ Fastest Way to Get Started

### 1️⃣ Install Node.js
If you don't have Node.js installed:
- Go to: https://nodejs.org/
- Download and install the **LTS version**
- Restart your computer

### 2️⃣ Open Terminal
**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac/Linux:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

### 3️⃣ Navigate to Project
```bash
cd "c:/Users/DELL/Desktop/organize new folder/cogninode-tech"
```

### 4️⃣ Install Dependencies
```bash
npm install
```
⏱️ This takes 2-5 minutes

### 5️⃣ Start the Website
```bash
npm run dev
```

### 6️⃣ Open in Browser
Go to: **http://localhost:5173**

---

## 🎯 That's It!

Your website is now running locally. You should see:
- ✅ Home page with hero section
- ✅ Navigation menu
- ✅ All pages working
- ✅ Smooth animations

---

## 📝 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🛑 Troubleshooting

**Problem:** "npm is not recognized"
- **Solution:** Install Node.js from nodejs.org

**Problem:** Port already in use
- **Solution:** Vite will use the next available port automatically

**Problem:** Nothing shows up
- **Solution:** Make sure you ran `npm install` first

---

## 📂 Project Files

```
cogninode-tech/
├── src/
│   ├── components/    # Navbar, Footer
│   ├── pages/         # Home, About, Services, Contact
│   ├── App.jsx        # Main app
│   └── index.css      # Styles
├── package.json       # Dependencies
└── README.md          # Full documentation
```

---

## 🌐 Deploy Your Website

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

### Netlify (Also Free)
1. Run: `npm run build`
2. Go to: https://app.netlify.com/drop
3. Drag the `dist` folder

---

## 🎨 Customize

**Change colors:** Edit `tailwind.config.js`
**Update content:** Edit files in `src/pages/`
**Change contact info:** Edit `src/pages/Contact.jsx`

---

## 📞 Need Help?

Check the detailed guides:
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
- `walkthrough.md` - Complete project overview

---

**Made with ❤️ for Cogninode Technologies**
