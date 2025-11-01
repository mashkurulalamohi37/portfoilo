# Quick Start Guide - Get Your Portfolio Online in 2 Minutes! ⚡

## 🎯 FASTEST METHOD: Netlify Drag & Drop

### Step 1: Build Your Portfolio
Open terminal in this folder and run:
```bash
npm install
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login (it's free!)
3. Drag the `dist` folder from your project onto the Netlify page
4. **DONE!** You'll instantly get a URL like `your-site.netlify.app`

That's it! Your portfolio is live! 🎉

---

## 🔄 Alternative: Deploy from GitHub (Recommended for Updates)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### Step 2: Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
2. Connect GitHub and select your repository
3. Netlify auto-detects the settings (they're in `netlify.toml`)
4. Click "Deploy"
5. **Done!** Every time you push to GitHub, it auto-deploys!

---

## 🌐 Need a Custom Domain?

All platforms support free custom domains:
- **Netlify:** Settings → Domain management → Add custom domain
- **Vercel:** Project Settings → Domains → Add

---

## 📚 More Options?

See `DEPLOYMENT.md` for detailed instructions on:
- Vercel deployment
- GitHub Pages
- Cloudflare Pages
- And more!

---

## 🆘 Having Issues?

**Problem:** "npm command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

**Problem:** Build errors
**Solution:** Make sure you ran `npm install` first

**Problem:** Site shows blank page
**Solution:** Check the browser console for errors

---

**Need help?** Check the full `DEPLOYMENT.md` file for more detailed instructions!

