# Kamsy Chemicals & Allied Products Ltd Website

A comprehensive, fully functional website for Kamsy Chemicals & Allied Products Ltd - a leading supplier of chemicals and allied products in Nigeria.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Five Main Pages**:
  - **Home**: Hero carousel with auto-sliding images, featured products showcase, investment portfolio, management team, and more
  - **About Us**: Company history, mission, core values, business services, team, partners, clientele, HSE, and BOP
  - **Products**: Comprehensive product catalog with sidebar navigation (7 products: Ammonia Solution, Acetic Acid, Calcium Carbide, Caustic Soda, Formaldehyde Formalin, Hydrochloric Acid, Hydrogen Peroxide)
  - **Services**: Industrial solutions, reliable services, quality chemicals, and partnership information
  - **Contact**: Contact form, company information, and integrated Google Maps

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid, Animations)
- JavaScript (Vanilla JS - no dependencies)
- Font Awesome Icons (via CDN)
- Google Fonts (Poppins)
- Google Maps API (for contact page)

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
- **Top Bar**: Social media links and contact information (hides on scroll)
- **Hero Section**: Auto-sliding carousel with multiple images, text transitions, and "GET STARTED" CTA
- **About Section**: Company establishment info with "BUILT FOR IMPACT" messaging
- **Investment Portfolio**: Auto-sliding carousel showcasing 5 sectors (Industrial Chemicals, Specialty Chemicals, Agrochemicals, Paints & Coatings, Laboratory Chemicals)
- **Management Section**: Team profiles with social media integration
- **Featured Products**: Auto-sliding carousel with 7 key products
- **Footer**: Multi-column layout with carousel, company info, and social links

### About Us Page
- Company history and leadership (Mr. Francis Ofurum)
- Mission, core values, and business services
- Team section with 6 management profiles
- International partners showcase
- Clientele list
- HSE (Health, Safety, and Environment) information
- Business Operating Principles (BOP)

### Products Page
- Sidebar navigation for easy product browsing
- 7 detailed product pages with:
  - Product images and descriptions
  - Uses and applications
  - End-user information
  - Product galleries

### Services Page
- Four main service categories:
  - Industrial Solutions
  - Reliable Services
  - Reliable Partnership
  - Quality Chemicals

### Contact Page
- Contact information (phone, email, address)
- Contact form with validation
- Google Maps integration showing company location

## JavaScript Functionality

1. **Top Bar Scroll Behavior**: Hides/shows based on scroll position
2. **Hero Carousel**: Auto-sliding image carousel with text transitions (every 4 seconds)
3. **Portfolio Carousel**: Auto-sliding product category carousel (every 2.5 seconds) with infinite loop
4. **Products Showcase Carousel**: Auto-sliding featured products carousel (every 2.5 seconds)
5. **Management Section**: Social media icons appear on hover with share functionality
6. **Footer Top Carousel**: Auto-sliding email addresses carousel
7. **Mobile Menu Toggle**: Responsive hamburger navigation menu
8. **Product Navigation**: Dynamic content loading on products page
9. **Form Validation**: Contact form with email validation
10. **Smooth Scrolling**: Enhanced user experience throughout
11. **Scroll Animations**: Elements fade in and slide up on scroll (Intersection Observer)
12. **Scroll to Top Button**: Appears after scrolling down
13. **Page Header Carousels**: Auto-sliding backgrounds on sub-pages

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --brand-blue: #0066CC;
    --brand-blue-dark: #0052A3;
    --brand-blue-light: #1E88E5;
    --brand-red: #DC2626;
    --brand-red-dark: #B91C1C;
    --brand-red-light: #EF4444;
    --white: #FFFFFF;
    --dark-grey: #2C2C2C;
    --text-grey: #4A4A4A;
    /* ... */
}
```

**Brand Colors**: Blue (#0066CC) and Red (#DC2626) are used throughout the site with gradient combinations.

### Contact Information
Current contact details:
- **Phone**: +234 802 089 1645
- **Email**: info@kamsychemicals.com.ng
- **Address**: 4 - 8 Bestford Avenue, Isolo, Lagos

Update contact details in:
- Top bar (all pages)
- Footer section (all HTML files)
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
- All images are currently using Unsplash placeholders - replace with actual company/product images
- Google Maps is integrated on the contact page showing the company location
- All carousels auto-slide and pause on hover for better user experience
- The website uses Poppins font family throughout for consistent typography

## License

This project is created for Kamsy Chemicals.
