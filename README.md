# VetMed Imports - Veterinary Equipment & Medicines Company Website

A modern, professional, and bilingual (Arabic/English) portfolio website for a veterinary equipment and medicines importing company.

## 🌟 Features

### ✨ Design & UI
- **Modern, Clean Design** - Professional medical-themed appearance
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Bilingual Support** - Complete Arabic (RTL) and English (LTR) support
- **Smooth Animations** - Powered by Framer Motion with fade-in effects and hover animations
- **Glass Morphism Effects** - Modern glass-like UI elements
- **Sticky Navigation** - Navigation bar that stays visible on scroll
- **Scroll-to-Top Button** - Easy navigation back to top

### 🎯 Sections
1. **Hero Section** - Large background image with company introduction
2. **About Us** - Company story, mission, vision, and why choose us
3. **Services** - 5 key services with icons and descriptions
4. **Products Categories** - 5 product categories with image cards
5. **Partners** - Showcase of international supplier partners
6. **Contact** - Contact form with company information and map placeholder
7. **Footer** - Quick links, social media, and copyright

### 🚀 Additional Features
- **Floating WhatsApp Button** - Quick contact option
- **Language Switcher** - Easy toggle between Arabic and English
- **Mobile Menu** - Hamburger menu for mobile devices
- **SEO Optimized** - Proper meta tags and structure
- **Fast Loading** - Optimized for performance

## 🎨 Design Specifications

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#3B82F6` | Buttons, links, accents |
| Dark Blue | `#1E40AF` | Hover states, gradients |
| Emerald Green | `#10B981` | Success states, WhatsApp button |
| Slate 50 | `#F8FAFC` | Light backgrounds |
| Slate 100 | `#F1F5F9` | Section backgrounds |
| Slate 800 | `#1E293B` | Footer background |
| Slate 900 | `#0F172A` | Hero overlay |
| White | `#FFFFFF` | Text on dark backgrounds |

### Typography
- **English Font**: Poppins (Google Fonts)
- **Arabic Font**: Cairo (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Icons
- **Library**: Lucide React
- **Custom Icons**: SVG icons for social media (Facebook, LinkedIn, Twitter, Instagram)

## 📁 Project Structure

```
├── public/
│   └── favicon.svg          # Company favicon
├── src/
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template with fonts
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## 🛠️ Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Cairo)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Content Management

### Translation System
All content is managed through the `translations` object in `App.tsx`:

```typescript
const translations: Translations = {
  nav_home: { en: 'Home', ar: 'الرئيسية' },
  // ... more translations
};
```

To add new translations:
1. Add the key to the `Translations` interface
2. Add English and Arabic versions
3. Use `t('key')` in the component

### Adding New Services
Add to the `services` array:
```typescript
const services = [
  {
    icon: YourIcon,
    title: 'translation_key_title',
    description: 'translation_key_desc'
  }
];
```

### Adding New Products
Add to the `products` array:
```typescript
const products = [
  {
    icon: YourIcon,
    title: 'translation_key',
    image: 'image-url',
    description: { en: '...', ar: '...' }
  }
];
```

## 🎭 Animations

### Available Animations
- **fadeInUp**: Fade in and move up (used for most content)
- **scaleIn**: Scale up animation (used for images)
- **staggerContainer**: Stagger children animations

### Usage
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Content here
</motion.div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors
Update Tailwind classes in components:
```tsx
// Example: Change primary color
className="bg-blue-500" // Change to any color
```

### Changing Fonts
Update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Adding Images
1. Replace image URLs in the `products` array
2. Update hero background image in the Hero section
3. Update about section image

## 📞 Contact Information

Replace in the translations object:
- Phone number
- Email address
- Physical address
- WhatsApp number

## 🔒 SEO Optimization

The website includes:
- Proper meta tags in `index.html`
- Semantic HTML structure
- Alt text for images
- Language attributes for accessibility

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**VetMed Imports** - Your Trusted Partner in Veterinary Equipment & Medicines

© 2026 VetMed Imports. All rights reserved.