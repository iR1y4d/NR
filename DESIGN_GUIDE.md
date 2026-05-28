# VetMed Website Design Guide

## 🎨 Color Palette Reference

### Primary Colors
```css
--color-primary: #3B82F6;        /* Blue - Main brand color */
--color-primary-dark: #1E40AF;   /* Dark Blue - Hover states */
--color-primary-light: #93C5FD;  /* Light Blue - Backgrounds */
```

### Secondary Colors
```css
--color-emerald: #10B981;        /* Green - Success, WhatsApp */
--color-emerald-dark: #059669;   /* Dark Green - Hover */
--color-emerald-light: #6EE7B7;  /* Light Green - Backgrounds */
```

### Neutral Colors
```css
--color-slate-50: #F8FAFC;       /* Lightest gray - Backgrounds */
--color-slate-100: #F1F5F9;      /* Light gray - Sections */
--color-slate-200: #E2E8F0;      /* Border gray */
--color-slate-600: #475569;      /* Medium gray - Text */
--color-slate-800: #1E293B;      /* Dark gray - Footer */
--color-slate-900: #0F172A;      /* Darkest - Hero overlay */
```

### Text Colors
```css
--text-primary: #1E293B;         /* Main text */
--text-secondary: #64748B;       /* Secondary text */
--text-white: #FFFFFF;           /* White text */
--text-blue: #3B82F6;            /* Link text */
```

## 📝 Typography Scale

### Font Families
- **English**: `'Poppins', sans-serif`
- **Arabic**: `'Cairo', sans-serif`

### Font Sizes
| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Small labels, captions |
| `text-sm` | 14px | Body text, descriptions |
| `text-base` | 16px | Regular body text |
| `text-lg` | 18px | Large body text |
| `text-xl` | 20px | Subheadings |
| `text-2xl` | 24px | Section titles |
| `text-3xl` | 30px | Large headings |
| `text-4xl` | 36px | Hero text |
| `text-5xl` | 48px | Large hero text |
| `text-6xl` | 60px | Extra large (desktop) |
| `text-7xl` | 72px | Maximum size |

### Font Weights
| Class | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Regular text |
| `font-medium` | 500 | Emphasized text |
| `font-semibold` | 600 | Subheadings |
| `font-bold` | 700 | Headings, buttons |

## 🎯 Spacing System

### Section Padding
```css
/* Desktop */
py-24 (96px top/bottom)

/* Tablet */
py-16 (64px top/bottom)

/* Mobile */
py-12 (48px top/bottom)
```

### Container Widths
```css
max-w-7xl (1280px) - Main container
max-w-4xl (896px) - Narrow content
max-w-3xl (768px) - Text content
```

### Common Spacing
- `gap-4` (16px) - Small gaps
- `gap-6` (24px) - Medium gaps
- `gap-8` (32px) - Large gaps
- `gap-12` (48px) - Extra large gaps

## 🎭 Component Styles

### Buttons

#### Primary Button
```tsx
className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
```

#### Secondary Button (Outline)
```tsx
className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
```

#### WhatsApp Button
```tsx
className="bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg"
```

### Cards

#### Service Card
```tsx
className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
```

#### Product Card
```tsx
className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
```

### Navigation

#### Sticky Header
```tsx
className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass shadow-lg py-3"
```

#### Mobile Menu
```tsx
className="bg-white rounded-2xl shadow-xl p-4 space-y-2"
```

## 🎬 Animation Guidelines

### Timing
- **Fast**: 200-300ms (hover effects, buttons)
- **Normal**: 400-600ms (content reveals)
- **Slow**: 800-1000ms (hero animations)

### Easing Functions
```css
ease-out: cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
custom: cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Animation Variants
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
```

## 📱 Responsive Design

### Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Responsive Patterns

#### Grid Columns
```tsx
// 3 columns on desktop, 2 on tablet, 1 on mobile
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

#### Text Sizes
```tsx
// Large on desktop, medium on mobile
className="text-3xl sm:text-4xl md:text-5xl"
```

#### Padding
```tsx
// Less padding on mobile
className="px-4 sm:px-6 lg:px-8"
```

## 🎨 Custom Classes

### Glass Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

### Gradient Backgrounds
```css
/* Hero gradient */
background: linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.7));

/* CTA gradient */
background: linear-gradient(to bottom right, #3B82F6, #1E40AF, #1E293B);
```

## 🔧 Quick Customization Tips

### Change Primary Color
1. Replace all `bg-blue-500` with your color (e.g., `bg-emerald-500`)
2. Replace all `text-blue-600` with your color
3. Update hover states: `hover:bg-blue-600` → `hover:bg-emerald-600`

### Change Hero Image
```tsx
// In Hero Section
<img 
  src="YOUR_IMAGE_URL"
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### Add New Section
1. Create new section tag with id
2. Add to navigation array
3. Add translations for bilingual support
4. Use animation variants for consistency

### Update Contact Info
```typescript
// In translations object
phone_label: { en: 'Phone', ar: 'الهاتف' },
// Update actual values in Contact section
```

## ✅ Best Practices

1. **Always use responsive classes** - Mobile-first approach
2. **Maintain consistent spacing** - Use Tailwind spacing scale
3. **Use semantic HTML** - Proper heading hierarchy
4. **Add alt text to images** - Accessibility
5. **Test RTL layout** - Check Arabic version thoroughly
6. **Optimize images** - Use appropriate sizes and formats
7. **Keep animations subtle** - Professional, not distracting
8. **Test on real devices** - Not just browser resizing

## 🚀 Performance Tips

1. Use `loading="lazy"` for below-fold images
2. Optimize image file sizes
3. Use CSS animations over JavaScript when possible
4. Minimize custom CSS, leverage Tailwind
5. Test with Lighthouse for performance metrics

---

**Last Updated**: 2026
**Version**: 1.0