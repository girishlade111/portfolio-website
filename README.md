# portfolio-website

> Modern animated portfolio template — TypeScript + SCSS + Webpack + GSAP + Three.js

A standalone portfolio template project that bundles every source file (HTML, SCSS, TypeScript, Webpack config) as a flat file-set for easy review. Includes glassmorphism navbar, masonry-grid projects page, scroll-spy navigation, GSAP + ScrollMagic animations, and Three.js 3D background effects.

🔗 **Live repo:** <https://github.com/girishlade111/portfolio-website>

## ✨ Features

- Glassmorphism navbar with `backdrop-filter` blur
- Masonry-grid projects page with category filtering
- Scroll-spy navigation + IntersectionObserver-driven animations
- Three.js 3D scene backgrounds
- AJAX-powered contact form validation
- Single-file `Single HTML File.html` preview build

## 🛠️ Tech stack

TypeScript • SCSS (Sass) • Webpack 5 • Three.js • GSAP • ScrollMagic • Glassmorphism CSS

## 🚀 Getting started

```bash
# Install all build tooling in one shot
npm install typescript webpack webpack-cli sass-loader css-loader sass ts-loader three gsap scrollmagic

# Build with the bundled Webpack config
npx webpack --config "Webpack Configuration.js"

# Or open "Single HTML File.html" in a browser for a zero-build preview
```

## 📁 Project structure

```
portfolio-website/
├── dist/                # Bundled output
├── src/
│   ├── ts/main.ts       # Scroll-spy + animations entrypoint
│   ├── scss/styles.scss # Glassmorphism + masonry styles
│   └── assets/          # Images, fonts, icons
├── index.html
└── webpack.config.js
```

## 🤝 Contributing

Bug reports and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

Check the repository for the license file. If none is present, treat as "all rights reserved" by the author.

---

Built by [Girish Lade](https://github.com/girishlade111) · Part of the [LadeStack](https://ladestack.in) open-source collection.
