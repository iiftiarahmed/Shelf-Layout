Shelf Layout Manager Design System
Overview
The Shelf Layout Manager's design system prioritizes a modern, user-centric interface with clean aesthetics, intuitive interactions, and accessibility. Built with HTML, CSS, and JavaScript, the UI uses a minimalist color palette, smooth animations, and a responsive layout to enhance usability across devices.
Design Principles

Modern Aesthetics: Clean lines, rounded corners, gradients, and subtle shadows for a professional 2025 look.
User-Centricity: Large click targets, clear feedback (e.g., alerts, hover effects), and intuitive navigation.
Accessibility: High contrast, ARIA labels, and keyboard navigation support.
Consistency: Uniform typography, spacing, and component styles across the app.
Responsiveness: Seamless experience on desktop and mobile with a toggleable sidebar.

Typography

Font Family: Inter (Google Fonts, weights: 400, 500, 600, 700)
Clean, sans-serif font for readability and professionalism.


Sizes:
Headings: 20px (.cabinet-title), 16px (.modal-content header h3)
Body: 16px (body), 15px (.sku-item h4), 14px (labels, .row-header), 13px (buttons, .sku-item p), 12px (.lane-number, .quantity)


Line Height: 1.5 for body text, ensuring readability.
Weights: 400 (body), 500 (labels, buttons), 600 (headings), 700 (active language).

Color Palette

Background: #f8fafc (off-white, --bg, --sidebar) for a clean canvas and sidebar.
Text: #1e293b (neutral gray, --text) for primary text; #64748b (muted gray) for secondary text.
Primary: #2563eb to #1e40af (gradient, --primary to --primary-dark) for buttons and accents.
Danger: #dc2626 (red, --danger) for destructive actions (e.g., "Remove").
Success: #16a34a (green, --success) for success alerts.
Border: #e2e8f0 (light gray, --border) for outlines and dividers.
Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05) (--shadow) for depth.

Components
Buttons

Styles:
Primary: Gradient (#2563eb to #1e40af), white text, 6px 12px padding, 13px font, rounded (6px).
Outline: Transparent background, #e2e8f0 border, #1e293b text.
Danger: Solid #dc2626, white text.


Interactions: Scale (1.05) on hover, blue outline on focus, 0.2s transitions.
Placement:
Right-aligned in .cabinet-controls (12px gap) and .row-controls (8px gap).
Order: "Remove" then "Add Row"/"Add Lane" for intuitive workflow.



Sidebar

Background: #f8fafc with subtle shadow.
Width: 280px (desktop), toggleable on mobile (<1024px) via hamburger menu (#menuToggle).
Content: Logo (max-width: 180px), search input, SKU list (.sku-item with 48x48px images).
Animation: Slides in/out (0.3s) on mobile.

Modals

Appearance: Glassmorphism (rgba(255, 255, 255, 0.95), blur 10px), 520px wide (95% on mobile), rounded (12px).
Form: 2-column grid (1-column on mobile), 16px gap, 14px labels, 10px input padding.
Animation: Fade-in (0.3s) for overlay, slide-up (0.3s) for content.
Buttons: Right-aligned, 12px gap, "Save" (primary), "Close" (outline).

Alerts

Position: Top-right (20px from edges), 16px 24px padding, rounded (8px).
Styles: Red (#dc2626) for errors, green (#16a34a) for success.
Animation: Slide-in (0.3s), auto-dismiss after 3s.

Shelves

Cabinet: White background, #e2e8f0 border, 12px radius, 20px padding, shadow.
Rows: #e2e8f0 border, 8px radius, 16px padding, 24px gap.
Lanes: Dashed #e2e8f0 border, 6px radius, 12px padding, 90x90px min-size, hover effect (blue border, light background).
Gaps: 12px between lanes, 24px between rows, 32px between cabinets.

Detail Panel

Position: Fixed, right-aligned (400px wide, full-width on mobile), slides in (0.3s).
Content: 220x220px image, 2-column grid for details, 12px gap.

Spacing

Gaps:
Cabinets: 32px (.shelf).
Rows: 24px (.rows).
Lanes: 12px (.lanes).
Controls: 12px (.cabinet-controls), 8px (.row-controls).
Modal form: 16px (.form).


Padding:
Main: 32px.
Sidebar: 24px.
Cabinet: 20px.
Row: 16px.
Lane: 12px.
Buttons: 6px 12px.


Margins:
Headers: 24px bottom (main), 20px bottom (modal).
Controls: margin-left: auto for right-alignment.



Animations

FadeIn: 0.3s for modal overlay (opacity: 0 to 1).
SlideUp: 0.3s for modal content (translateY(20px) to 0).
SlideIn: 0.3s for alerts (translateX(20px) to 0) and sidebar (left: -280px to 0).
Hover: 0.2s for buttons (scale 1.05) and lanes (border, background, translateY(-2px)).

Accessibility

ARIA Labels: Added to #menuToggle (Toggle sidebar), inputs, and buttons.
Contrast: High contrast ratios (e.g., #1e293b on #f8fafc, white on #2563eb).
Focus States: 2px blue outline (#2563eb) for buttons and inputs.
Keyboard Navigation: Tab order supports all interactive elements.

Responsive Design

Desktop (>1024px): Sidebar fixed (280px), 2-column modal form, right-aligned controls.
Mobile (≤1024px):
Sidebar hidden, toggled via hamburger menu.
Modal form single-column.
Detail panel full-width.
Buttons remain right-aligned with same gaps.



Future Enhancements

Add dark mode support with a theme toggle.
Introduce tooltips for buttons and inputs.
Enhance animations for lane drag-and-drop interactions.
Support additional languages beyond English and Japanese.
