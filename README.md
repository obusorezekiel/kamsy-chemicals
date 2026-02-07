# Kamsy Chemicals Website

A comprehensive, fully functional website for Kamsy Chemicals - a leading supplier of chemicals and allied products.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Five Main Pages**:
  - Home: Hero section, features, product categories preview
  - About Us: Company information, mission, vision, values
  - Products: Comprehensive product catalog with filtering
  - Services: Detailed service offerings and process
  - Contact: Contact form and company information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- JavaScript (Vanilla JS - no dependencies)
- Font Awesome Icons (via CDN)

## File Structure

```
kamsy_chemicals/
│
├── index.html          # Home page
├── about.html          # About Us page
├── products.html       # Products page
├── services.html       # Services page
├── contact.html        # Contact page
│
├── css/
│   └── style.css      # Main stylesheet
│
├── js/
│   └── script.js      # Main JavaScript file
│
└── README.md          # This file
```

## Features Breakdown

### Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth scrolling

### Home Page
- Hero section with call-to-action buttons
- Features section (Why Choose Us)
- Product categories preview
- Call-to-action section

### About Us Page
- Company introduction
- Mission and Vision cards
- Core Values grid
- Why Choose Us section

### Products Page
- Product filtering by category
- Product cards with specifications
- Request quote functionality
- Categories: Industrial, Specialty, Agrochemicals, Paints & Coatings

### Services Page
- Six main service offerings
- Service process steps
- Detailed service features

### Contact Page
- Contact information display
- Functional contact form with validation
- Map placeholder (ready for integration)
- Social media links

## JavaScript Functionality

1. **Mobile Menu Toggle**: Responsive navigation menu
2. **Product Filtering**: Filter products by category
3. **Form Validation**: Contact form with email validation
4. **Smooth Scrolling**: Enhanced user experience
5. **Scroll Animations**: Elements animate on scroll
6. **Scroll to Top Button**: Appears after scrolling down
7. **Navbar Effects**: Dynamic styling on scroll

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004499;
    --accent-color: #ff6600;
    /* ... */
}
```

### Contact Information
Update contact details in:
- Footer section of all HTML files
- Contact page information
- Contact form (if integrating with backend)

### Content
All content can be easily modified in the respective HTML files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Getting Started

1. Open `index.html` in a web browser
2. No build process or dependencies required
3. All files are ready to use

## Future Enhancements

- Backend integration for contact form
- Google Maps integration
- Image gallery
- Blog section
- Product search functionality
- Multi-language support
- Admin dashboard

## Notes

- The contact form currently shows a success message but doesn't send emails. Integrate with a backend service (like Formspree, EmailJS, or your own server) for actual email functionality.
- Replace placeholder images with actual company images
- Update phone numbers and addresses with real contact information
- Add actual product images to enhance visual appeal

## License

This project is created for Kamsy Chemicals.
