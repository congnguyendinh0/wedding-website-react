# Cong & Thu Hang - Wedding Website

A modern, elegant, and interactive wedding website built with **React**, **Vite**, and **Tailwind CSS**.

## ✨ Features

- **Interactive Envelope Opener**: A beautiful 3D-style envelope animation that opens to reveal the invitation.
- **Photo Reveal**: A smooth transition from the invitation to a couple photo.
- **Background Audio**: Ambient background music that starts upon interaction, with a floating toggle control.
- **Multi-Language Support**: Fully localized content in **German (DE)**, **English (EN)**, and **Vietnamese (VI)**.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Google Maps Integration**: Embedded maps for the Ceremony and Celebration locations.
- **Image Optimization**: Optimized assets for fast loading times.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Custom CSS
- **Icons**: SVG Icons
- **Fonts**: Custom fonts (DA, Open Sans Condensed)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/congnguyendinh0/wedding-website-react.git
    cd wedding-website-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components (Hero, FAQ, Envelope, etc.)
├── context/         # React Context (LanguageContext)
├── data/            # Translation data (translations.js)
├── App.jsx          # Main application component
├── index.css        # Global styles and Tailwind imports
└── main.jsx         # Entry point
public/              # Public assets (fonts, audio, favicon)
```

## 🎨 Customization

- **Translations**: Update `src/data/translations.js` to modify text for all languages.
- **Images**: Replace images in `src/assets/` and update references in components.
- **Audio**: Replace `public/audio.mp3` with your desired track.

## 📄 License

This project is for personal use.
