# Percepty

A progression-based interactive notes platform for computational topics including Mathematics, Programming, and Linguistics.

## Project Structure

src/
├── components/          # Reusable UI components
│   ├── common/          # Generic components (headings, cards)
│   ├── content/         # Content-rendering components (LaTeX, code, video)
│   └── layout/          # Layout components (navigation, footer)
├── modules/             # Learning module pages grouped by subject
│   ├── linguistics/
│   ├── mathematics/
│   └── programming/
├── pages/               # Top-level pages (splash, 404, overviews)
│   └── overviews/
├── styles/              # All CSS files, split by domain
└── utils/               # Constants, module metadata


## Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

For Manim animations (optional):

- **Python** ≥ 3.8
- Install Python dependencies: `pip install -r manim_anim/requirements.txt`

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

Open http://localhost:3000 in your browser.
Adding a New Learning Module

    Create the module file in src/modules/<subject>/YourModule.js.
    Register its metadata in src/utils/moduleData.js (title, description, route, preview LaTeX).
    Add a route in src/App.js.
    Add a nav link in src/components/layout/Navigation.js.

The overview page for that subject will automatically render a card for the new module from moduleData.js.
Available Scripts

Command	Description
npm start	Run development server on port 3000
npm test	Run tests in watch mode
npm run build	Production build to build/

Rendering Manim Animations

bash
cd manim_anim
pip install -r requirements.txt
manim -pqh basicOperationsAnimations.py AddThirdCircle

Place output .mp4 files in public/media/videos/ for the app to reference.