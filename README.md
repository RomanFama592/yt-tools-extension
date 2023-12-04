<div align="center">

# yt-tools-extension
![Contributions? Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![Maintained? Yes](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)
[![ESLint](https://github.com/RomanFama592/yt-tools-extension/actions/workflows/eslint.yml/badge.svg)](https://github.com/RomanFama592/yt-tools-extension/actions/workflows/eslint.yml)

"This extension allows you to enjoy several tools for the YouTube page."

![use-extension-gif](https://github.com/RomanFama592/yt-tools-extension/blob/main/docs/images/use-extension.gif?raw=true)

</div>

<details>
  <summary>📑 <strong>Contents</strong></summary>

- [🚀 **Project Structure**](#-project-structure)
- [👨‍🏫 **Installation**](#-installation)
- [👋 **Contributions**](#-contributions)
- [👨‍⚖️ **License**](#-license)
- [📬 **Contact me**](#-contact-me)

</details>

<br>

## 🚀 Project Structure

```
/
├── .devcontainer/
│     ├── Dockerfile
│     └── devcontainer.json
├── .github/
│     └── workflows/
│          ├── eslint.yml
│          └── update_readme.yml
├── docs/
│     ├── images/
│     │     └── use-extension.gif
│     └── README.md.template.md
├── public/
│     ├── content_scripts/
│     │     ├── auto-like.js
│     │     ├── auto-skip-ads.js
│     │     ├── functions.js
│     │     └── observer-changes-in-url.js
│     ├── icons/
│     │     ├── icon128.png
│     │     ├── icon16.png
│     │     ├── icon32.png
│     │     └── icon64.png
│     └── manifest.json
├── src/
│     ├── assets/
│     │     ├── css/
│     │     │     ├── App.css
│     │     │     ├── CounterInput.css
│     │     │     ├── Item.css
│     │     │     ├── Modal.css
│     │     │     ├── Switch.css
│     │     │     └── index.css
│     │     └── options.ts
│     ├── components/
│     │     ├── CounterInput.tsx
│     │     ├── Item.tsx
│     │     ├── Modal.tsx
│     │     └── Switch.tsx
│     ├── context/
│     │     └── HandlerModal.tsx
│     ├── hooks/
│     │     └── useSaveInMemoryToExtension.tsx
│     ├── App.tsx
│     ├── main.tsx
│     └── vite-env.d.ts
├── utils/
│     ├── requirements.txt
│     └── resize_icons.py
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── resize_icons.sh
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍🏫 Installation

follow steps to run the project.

1. Clone repository.

2. Install package.json dependencies.

```bash
npm install
```

4. Build the project.
```bash
npm run build
```

5. Go to your browser's extensions settings.
- example: chrome://extensions

6. Tap the "load unpacked" button and enter the path to the `dist` folder that was created after building.

7. And you can start developing and every change you make by executing the command in step 4 is perfect.

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👋 Contributions

If you have a suggestion that would make this better, please fork the repo and create a Pull Request. You can also simply [open an issue](https://github.com/RomanFama592/yt-tools-extension/issues)

Don't forget to **give the project a star ⭐!** Thanks again!

1. Fork the project

2. Clone your fork

```bash
git clone https://github.com/@your_username/yt-tools-extension
```

3. Create your Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

4. Push to the Branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

**Important**: Use [`conventional commits`](https://www.conventionalcommits.org/) and ensure that the code passes the linter test, pull requests are not accepted without this last point.


<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 📬 Contact me

**Famá Román** 
- famaroman@gmail.com
- [Linkedin](https://www.linkedin.com/in/romanfama)

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>
