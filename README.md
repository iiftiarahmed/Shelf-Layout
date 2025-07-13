Shelf Layout Manager
Overview
Shelf Layout Manager is a web application for managing product placements on shelves, designed for warehouse or retail inventory management. It allows users to add, edit, and remove SKUs, organize them into cabinets, rows, and lanes, and switch between English and Japanese languages. The UI is modern, user-centric, and responsive, featuring a clean design with gradient buttons, glassmorphism modals, and smooth animations.
Features

SKU Management: Add, edit, or remove SKUs with details (JAN code, name, size, shape, dimensions, image URL).
Shelf Organization: Manage cabinets, rows, and lanes with dynamic add/remove functionality.
Language Switching: Toggle between English and Japanese with real-time UI updates.
Responsive Design: Sidebar toggles on mobile (<1024px) via hamburger menu; modals adapt to single-column.
User-Centric UI: Gradient buttons, glassmorphism modals, slide-in alerts, and hover animations.
Accessibility: ARIA labels, high contrast, and keyboard navigation support.
Validation: Checks for duplicate JAN codes, lane capacity, and required fields.

Setup
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Safari).
A local server (e.g., Python's http.server or VS Code's Live Server) to avoid CORS issues.
Internet access for Google Fonts (Inter) and SKU image URLs.

File Structure
shelf-layout-manager/
├── assets/
│   └── images/
│       └── logo.png
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
├── DESIGN_SYSTEM.md
└── README.md


logo.png: Sidebar logo (replace with a valid image or URL).
index.html: Main HTML structure.
css/styles.css: Modern styles with Inter font, gradients, and animations.
js/script.js: Logic for SKU/shelf management and language switching.
DESIGN_SYSTEM.md: Design guidelines for UI consistency.
README.md: This file.

Installation

Clone or download the repository.
Ensure logo.png exists in assets/images/ or update index.html with a placeholder URL (e.g., https://via.placeholder.com/180).
Run a local server:python -m http.server 8000


Open http://localhost:8000 in a browser.
Clear browser cache or use incognito mode to ensure new files load.

Usage

Sidebar:
Search SKUs using the input field.
Click an SKU to select it for placement or view details (click again to deselect).
Toggle sidebar on mobile via the hamburger menu (top-left).


Main Content:
Add cabinets via "Add Cabinet" (top-right).
Add rows/lanes via "Add Row"/"Add Lane" (rightmost in headers).
Remove cabinets/rows via "Remove" buttons (minimum one required).
Click a lane to assign a selected SKU or view its details.


SKU Management:
Click "Add SKU" or "Edit" (on an SKU item) to open the modal.
Fill in JAN code, name, size, shape, dimensions, image URL, and shelf location.
Save to update the shelf; alerts confirm actions or show errors.


Language Switching:
Click "English" or "日本語" (top-right) to toggle languages.
UI text updates dynamically (e.g., "Add SKU" → "SKU追加").


Detail Panel:
Click a populated lane to view SKU details, adjust quantity, or remove.
Closes via the "×" button or save/remove actions.



Testing

Visuals:
Verify sidebar (#f8fafc), gradient buttons (#2563eb to #1e40af), and glassmorphism modals.
Check right-aligned "Add Row"/"Add Lane" buttons after "Remove" (12px/8px gaps).
Confirm animations (modal slide-up, alert slide-in, sidebar toggle).


Functionality:
Test SKU add/edit/remove, cabinet/row/lane management, and language switching.
Ensure alerts (success/error) appear top-right and auto-dismiss (3s).
Validate constraints (e.g., duplicate JAN codes, lane capacity).


Responsive:
Resize to <1024px; confirm sidebar toggles and modal form becomes single-column.


Accessibility:
Test keyboard navigation (Tab key) and focus states (blue outline).
Verify ARIA labels (e.g., Toggle sidebar on hamburger menu).


Console:
Open DevTools (F12); check for no errors (e.g., 404 for css/styles.css, js/script.js, images).
Confirm language switch logs (e.g., Switching to language: ja).



Development

Tech Stack: HTML, CSS (with CSS custom properties), JavaScript (vanilla).
Design System: See DESIGN_SYSTEM.md for typography, colors, and component details.
Extending:
Add new languages by updating translations in js/script.js.
Enhance styles in css/styles.css (e.g., add dark mode).
Implement drag-and-drop for lanes (update renderShelves).



Known Issues

Image URLs may fail if external links are broken; fallback to placeholders (https://via.placeholder.com).
Mobile sidebar toggle may overlap content if not closed; ensure z-index is correct.

Contributing

Submit issues or pull requests via the repository.
Follow the design system (DESIGN_SYSTEM.md) for UI changes.
Test thoroughly across browsers and devices.

License
MIT License. Free to use, modify, and distribute with attribution.