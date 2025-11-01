# Easy Hosting Guide 🚀

Choose the easiest option for you:

## Option 1: Netlify (EASIEST - 2 minutes) ⭐ RECOMMENDED

### Method A: Drag & Drop (No Git Required)
1. Build your project:
   ```bash
   npm install
   npm run build
   ```
2. Go to [netlify.com](https://www.netlify.com) and sign up (free)
3. Drag and drop the `dist` folder onto Netlify
4. Done! You'll get a free URL like `your-portfolio.netlify.app`

### Method B: Deploy from Git
1. Push your code to GitHub
2. Go to [netlify.com](https://www.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy"

---

## Option 2: Vercel (Very Easy - 2 minutes)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up (free)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite! Just click "Deploy"
6. Done! You'll get a free URL like `your-portfolio.vercel.app`

---

## Option 3: GitHub Pages (Free with GitHub account)

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json (Already done! ✅)
The deploy script is already added.

### Step 3: Deploy
```bash
npm run deploy
```

**Important:** Make sure your repository is named `portfolio` OR update `vite.config.js`:
- If your repo is `my-portfolio`, change `base: '/portfolio/'` to `base: '/my-portfolio/'`
- If using a custom domain, change to `base: '/'`

### Step 4: Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from `gh-pages` branch
4. Save

Your site will be at: `https://yourusername.github.io/portfolio/`

---

## Option 4: Cloudflare Pages (Free & Fast)

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up and connect GitHub
4. Select your repository
5. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Deploy!

---

## Option 5: Surge.sh (Super Simple CLI)

```bash
npm install -g surge
npm run build
cd dist
surge
```
Follow the prompts. Free URL like `your-portfolio.surge.sh`

---

## Quick Comparison

| Platform | Difficulty | Setup Time | Free Domain |
|----------|-----------|------------|-------------|
| Netlify (Drag & Drop) | ⭐ Easiest | 2 min | ✅ |
| Vercel | ⭐ Easy | 2 min | ✅ |
| GitHub Pages | ⭐⭐ Medium | 5 min | ✅ |
| Cloudflare Pages | ⭐⭐ Medium | 3 min | ✅ |
| Surge.sh | ⭐⭐ Medium | 5 min | ✅ |

## Need Help?

- **Netlify:** Most beginner-friendly
- **Vercel:** Best for React apps
- **GitHub Pages:** Good if you already use GitHub

## Custom Domain (Optional)

All platforms above support custom domains for free:
- Netlify: Settings → Domain management
- Vercel: Project Settings → Domains
- GitHub Pages: Repository Settings → Pages → Custom domain

---

**Recommendation:** Start with Netlify drag & drop - it's the fastest way to get online!

