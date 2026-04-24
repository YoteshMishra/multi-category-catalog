# NEXUS — Dynamic Multi-Category Product Catalog
 
A responsive React + Vite web application that displays a multi-category product catalog. Built as part of a Frontend Developer Assignment.
 

 ## Live Demo Link
multi-category-catalog.netlify.app


## 📋 Assignment Requirements Met
 
- ✅ Home Screen with all categories (Cars, Bikes, Phones, Computers)
- ✅ Category-wise segregated UI with color coding
- ✅ Item preview cards in each category section
- ✅ Item Detail Page with dynamic rendering
- ✅ Iterates through `itemprops[]` array dynamically — no hardcoded properties
- ✅ Displays item name, category label, and image
- ✅ Fully responsive — Mobile, Tablet, Desktop
- ✅ Built with React + Vite
- ✅ CSS Modules for scoped styling
## 🛠️ Tech Stack
 
- **React 18** — UI components
- **Vite** — Build tool and dev server
- **CSS Modules** — Component-scoped styling
- **Google Fonts** — Syne + DM Sans typography
## 📁 Project Structure
 
```
catalog-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navigation bar
│   │   ├── Navbar.module.css
│   │   ├── HomePage.jsx             # Category overview + search + filters
│   │   ├── HomePage.module.css
│   │   ├── ProductCard.jsx          # Item card with preview props
│   │   ├── ProductCard.module.css
│   │   ├── DetailPage.jsx           # Dynamic spec renderer
│   │   └── DetailPage.module.css
│   ├── data/
│   │   └── catalog.js               # JSON data source
│   ├── styles/
│   │   └── global.css               # Global CSS variables and reset
│   ├── App.jsx                      # Root component with navigation state
│   └── main.jsx                     # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```
 
## ⚙️ Getting Started
 
### Prerequisites
Make sure you have **Node.js** installed on your system.
```bash
node -v   # should show a version number
npm -v    # should show a version number
```
 
### Installation & Running Locally
 
```bash
# Step 1 — Install dependencies
npm install
 
# Step 2 — Start development server
npm run dev
```
 
Then open **http://localhost:5173** in your browser.
 
### Build for Production
```bash
npm run build
```
 
## 📱 Features
 
### Home Screen
- Hero section with live item count per category
- **Live search bar** — searches across item names and all spec values
- **Category filter pills** — filter by All / Cars / Bikes / Phones / Computers
- Items grouped by category with color-coded section headers
- Product cards showing image, category badge, and spec preview
### Item Detail Page
- Full image + info split layout
- **Dynamic spec rendering** — iterates `itemprops[]` generically
- Works for any category without hardcoding property names:
  - Cars → RPM, Engine, Capacity
  - Phones → Lens Type, Screen Size, Battery
  - Bikes → Displacement, Max Power
  - Computers → Processor, RAM, Display
- Responsive spec grid
- Back navigation to catalog
### Responsiveness
| Screen | Layout |
|--------|--------|
| Mobile < 640px | Single column, stacked layout |
| Tablet 640–1024px | 2-column grid |
| Desktop > 1024px | 3–4 column grid, side-by-side detail |
 
## 📦 Data Format
 
The app uses the provided JSON structure:
 
```json
{
  "itemname": "iPhone 16 Pro",
  "category": "Phones",
  "image": "image-url-here",
  "itemprops": [
    { "label": "Lens Type", "value": "Tetraprism Telephoto" },
    { "label": "Screen Size", "value": "6.3-inch" },
    { "label": "Battery", "value": "3577 mAh" }
  ]
}
```
 
To update the data, edit the array in `src/data/catalog.js`.
 
## 👨‍💻 Author
Yotesh Mishra