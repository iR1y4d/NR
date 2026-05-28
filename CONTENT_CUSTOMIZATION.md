# Content Customization Guide

This guide will help you customize all the content on your veterinary company website.

## 🏢 Company Information

### Company Name & Branding

**Location**: `src/App.tsx` (Navigation and Hero sections)

```tsx
// Logo Text (around line 340)
<span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
  VetMed  {/* Change this to your company name */}
</span>

// Footer (around line 1030)
<span className="text-xl font-bold">VetMed</span>
```

**Favicon**: Replace `public/favicon.svg` with your company logo

## 📝 Text Content

All text content is stored in the `translations` object starting at line 23 in `App.tsx`.

### Hero Section

```typescript
hero_title: { 
  en: 'Your Trusted Partner in Veterinary Equipment & Medicines',  // Change this
  ar: 'شريكك الموثوق في معدات وأدوية البيطرية'  // Arabic version
},
hero_subtitle: { 
  en: 'We specialize in importing high-quality veterinary products...',  // Change this
  ar: 'نحن متخصصون في استيراد منتجات بيطرية عالية الجودة...'  // Arabic version
},
```

### About Section

```typescript
about_description: { 
  en: 'We are a leading veterinary equipment...',  // Change company description
  ar: 'نحن شركة رائدة في استيراد معدات...'  // Arabic version
},
mission_text: { 
  en: 'To deliver premium veterinary products...',  // Change mission
  ar: 'تقديم منتجات بيطرية متميزة...'  // Arabic version
},
vision_text: { 
  en: 'To be the most reliable and innovative...',  // Change vision
  ar: 'أن نكون الشريك الأكثر موثوقية...'  // Arabic version
},
```

## 📞 Contact Information

### Update Contact Details

Find and replace these values in the Contact section (around line 950):

```tsx
// Phone Number
{ icon: Phone, label: 'phone_label', value: '+1 234 567 8900' },  // Change this

// Email Address
{ icon: Mail, label: 'email_label', value: 'info@vetmedimports.com' },  // Change this

// Physical Address
address_value: { 
  en: '123 Veterinary District, Medical City, Country',  // Change this
  ar: '١٢٣ حي البيطري، المدينة الطبية، الدولة'  // Arabic version
},

// WhatsApp Number (also update floating button)
// Line 1070
href="https://wa.me/12345678900"  // Change this
```

### Social Media Links

Update social media URLs in two places:

1. **Contact Section** (around line 1010):
```tsx
{[
  { name: 'Facebook', href: 'https://facebook.com/yourpage', ... },  // Change URLs
  { name: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany', ... },
  { name: 'Twitter', href: 'https://twitter.com/yourhandle', ... },
  { name: 'Instagram', href: 'https://instagram.com/yourhandle', ... }
]}
```

2. **Footer** (around line 1090):
Update the same URLs in the footer section.

## 🖼️ Images

### Hero Background Image

**Location**: Hero section (around line 400)

```tsx
<img 
  src="https://images.unsplash.com/photo-1628009368231-7cc9c2496e07?w=1920&h=1080&fit=crop"  // Change URL
  alt="Veterinary clinic"
  className="w-full h-full object-cover"
/>
```

**Recommended image sources**:
- Unsplash (free): https://unsplash.com
- Search keywords: "veterinary clinic", "veterinary equipment", "animal hospital"

### About Section Image

**Location**: About section (around line 570)

```tsx
<img 
  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=1000&fit=crop"  // Change URL
  alt="Veterinary professional"
  className="w-full h-[500px] object-cover"
/>
```

### Product Images

**Location**: Products array (around line 180)

```typescript
const products = [
  {
    icon: Syringe,
    title: 'product_vaccines',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',  // Change
    description: { 
      en: 'Essential vaccines for disease prevention in animals',  // Change
      ar: 'لقاحات أساسية للوقاية من الأمراض في الحيوانات'  // Change
    }
  },
  // ... other products
];
```

## 🎯 Services

### Update Service Descriptions

**Location**: `services` array (around line 160)

```typescript
const services = [
  {
    icon: Pill,
    title: 'service_medicines_title',  // Translation key
    description: 'service_medicines_desc'  // Translation key
  },
  // ... other services
];
```

Then update the actual text in the translations object:

```typescript
service_medicines_title: { 
  en: 'Importing Veterinary Medicines',  // Change this
  ar: 'استيراد الأدوية البيطرية'  // Arabic version
},
service_medicines_desc: { 
  en: 'We source and import a wide range...',  // Change this
  ar: 'نقوم بتوريد واستيراد مجموعة واسعة...'  // Arabic version
},
```

## 🤝 Partners

### Update Partner Logos

**Location**: `partners` array (around line 210)

```typescript
const partners = [
  { name: 'Zoetis', logo: 'Z' },  // Change name and logo letter
  { name: 'MSD Animal Health', logo: 'M' },
  { name: 'Boehringer Ingelheim', logo: 'B' },
  // Add more or remove
];
```

**For actual logos**: Replace the letter placeholders with actual logo images:

```tsx
// In Partners section (around line 815)
<img 
  src="/path-to-logo.png" 
  alt={partner.name}
  className="h-12 w-auto"
/>
```

## 🎨 Color Scheme

### Change Primary Color

**Current**: Blue (`#3B82F6`)

To change to a different color (e.g., Green):

1. **Update all blue classes**:
   - `bg-blue-500` → `bg-emerald-500`
   - `bg-blue-600` → `bg-emerald-600`
   - `text-blue-600` → `text-emerald-600`
   - `hover:bg-blue-500` → `hover:bg-emerald-500`

2. **Update gradient** (Hero section):
```tsx
// From
className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-900/70"
// To
className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-emerald-900/70"
```

3. **Update theme color** in `index.html`:
```html
<meta name="theme-color" content="#10B981" />  <!-- New color -->
```

## 🌐 Language Customization

### Adding a Third Language

1. **Update TypeScript types**:
```typescript
type Language = 'en' | 'ar' | 'fr';  // Add new language
```

2. **Add translations**:
```typescript
hero_title: { 
  en: 'Your Trusted Partner...', 
  ar: 'شريكك الموثوق...',
  fr: 'Votre Partenaire de Confiance...'  // New
},
```

3. **Update language switcher**:
```tsx
const toggleLanguage = () => {
  setLanguage(prev => {
    if (prev === 'en') return 'ar';
    if (prev === 'ar') return 'fr';
    return 'en';
  });
};
```

## 📊 Stats & Numbers

### Update Experience Years

**Location**: About section (around line 590)

```tsx
<div>
  <p className="text-3xl font-bold text-slate-800">10+</p>  {/* Change number */}
  <p className="text-slate-600 text-sm">
    {language === 'en' ? 'Years Experience' : 'سنوات الخبرة'}
  </p>
</div>
```

## 🔍 SEO Optimization

### Update Meta Tags

**Location**: `index.html`

```html
<title>Your Company Name - Veterinary Equipment & Medicines</title>
<meta name="description" content="Your company description..." />
<meta name="keywords" content="your, keywords, here" />
```

### Update Favicon

Replace `public/favicon.svg` with your company logo.

## 📱 Contact Form

### Configure Form Submission

**Current**: Simulated submission (shows success message)

To connect to a real backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
  
  setTimeout(() => setSubmitSuccess(false), 5000);
};
```

## 🗺️ Google Maps

### Add Real Map

**Location**: Contact section (around line 980)

Replace the placeholder with actual Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

**How to get embed URL**:
1. Go to Google Maps
2. Search your location
3. Click "Share" → "Embed a map"
4. Copy the URL from the iframe

## ✅ Testing Checklist

After making changes, test:

- [ ] All text appears correctly in both languages
- [ ] All images load properly
- [ ] Contact information is accurate
- [ ] Social media links work
- [ ] WhatsApp button opens correct number
- [ ] Form submission works (or shows success message)
- [ ] Mobile responsiveness
- [ ] RTL layout (Arabic) displays correctly
- [ ] All buttons are clickable
- [ ] Navigation scrolls to correct sections

## 🆘 Need Help?

If you need to make customizations not covered here:

1. Check the `DESIGN_GUIDE.md` for styling information
2. Refer to Tailwind CSS documentation: https://tailwindcss.com/docs
3. Check React documentation: https://react.dev
4. Review Framer Motion examples: https://www.framer.com/motion/

---

**Tip**: Always keep a backup of the original files before making major changes!