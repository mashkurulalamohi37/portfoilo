# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcase your projects, skills, experience, and connect with visitors through a beautiful, personal website.

## Features

- 🏠 **Home Section** - Eye-catching introduction with tagline
- 📖 **About Section** - Personal story, education, and interests
- 💼 **Projects Section** - Showcase 6 best projects with images and tech stack
- 🛠️ **Skills Section** - Interactive skill bars organized by category
- 🎯 **Experience Section** - Timeline of work, presentations, and achievements
- 📝 **Blog Section** - Blog posts with categories and read time
- 📧 **Contact Section** - Contact form and social media links
- 🎨 **Modern Design** - Beautiful gradients, animations, and responsive layout
- 📱 **Fully Responsive** - Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Home Section** (`src/components/Home.jsx`):
   - Update name and tagline
   - Change profile image/avatar
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Update your story and background
   - Modify education details
   - Change interests and skills

3. **Projects** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your own
   - Update images, descriptions, and links
   - Modify tech stack tags

4. **Skills** (`src/components/Skills.jsx`):
   - Update skill categories
   - Adjust skill levels (percentage)
   - Add or remove skills

5. **Experience** (`src/components/Experience.jsx`):
   - Add your work experience
   - Include presentations and talks
   - List achievements and awards

6. **Blog** (`src/components/Blog.jsx`):
   - Replace with your actual blog posts
   - Update images and content
   - Link to your blog if external

7. **Contact** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social media links
   - Connect form to backend (email service)

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles inline or via Tailwind classes

### Images

Replace placeholder images in:
- `src/components/Projects.jsx` - Project screenshots
- `src/components/Blog.jsx` - Blog post images
- Add your profile image in `src/components/Home.jsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Icons

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

