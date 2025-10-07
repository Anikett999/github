# Interactive Portfolio Website

This is an interactive web version of the PDF portfolio, where each PDF page becomes a separate section of the website.

## Features

### 🎯 Page-Based Navigation
- **Page 1**: Homepage with hero section and floating cards
- **Page 2**: About section with background and statistics
- **Page 3**: Featured projects with interactive cards
- **Page 4**: Professional experience timeline
- **Page 5**: Technical skills with animated progress bars
- **Page 6**: Contact information and social links

### 🎨 Interactive Elements
- **Smooth page transitions** with fade effects
- **Floating animations** on the homepage
- **Hover effects** on all interactive elements
- **Animated statistics** counters
- **Progress bars** for skills
- **Timeline animations** for experience
- **PDF overlay** viewer

### ⌨️ Navigation Controls
- **Click navigation** via header menu
- **Keyboard navigation** with arrow keys (← →)
- **PDF viewer** accessible via "View PDF" button
- **Smooth scrolling** between sections

### 📱 Responsive Design
- Mobile-friendly layout
- Adaptive grid systems
- Touch-friendly interactions
- Optimized for all screen sizes

## How to Use

1. **Open the website**: Navigate to `index.html` in your browser
2. **Navigate pages**: 
   - Click menu items in the header
   - Use left/right arrow keys
   - Click "About Me" or "View Work" buttons on homepage
3. **View PDF**: Click "View PDF" button to open the original PDF in an overlay
4. **Interactive elements**: Hover over cards, buttons, and links for animations

## File Structure

```
interactive-portfolio/
├── index.html          # Main HTML file with all pages
├── styles.css          # Custom CSS with animations
├── app.js              # JavaScript for interactivity
└── README.md           # This file
```

## Customization

### Adding Content
- Replace placeholder text in each section with actual content from the PDF
- Update contact information in the contact section
- Modify project details in the projects section
- Adjust skills and percentages in the skills section

### Styling
- Modify colors in `styles.css` (search for color values)
- Adjust animations by changing timing in CSS keyframes
- Update fonts by changing the Google Fonts import

### Functionality
- Add more pages by duplicating page sections and updating navigation
- Modify animations in `app.js` functions
- Add new interactive elements following existing patterns

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Next Steps

1. **Extract actual content** from the PDF to replace placeholders
2. **Add real project images** and links
3. **Update contact information** with actual details
4. **Customize colors** and branding to match personal style
5. **Add more interactive features** like contact forms or project filters

## Technical Notes

- Built with vanilla HTML, CSS, and JavaScript
- Uses Tailwind CSS via CDN for utility classes
- No build process required - just open `index.html`
- PDF viewer uses browser's built-in PDF rendering
- All animations use CSS transitions and transforms for smooth performance
