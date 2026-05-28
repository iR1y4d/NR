import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Stethoscope, 
  Truck, 
  Shield, 
  Award, 
  Globe, 
  Clock,
  Heart,
  Syringe,
  Package,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronUp,
  HeartPulse,
  Microscope,
  Pill,
  Warehouse
} from 'lucide-react';
// Translation object
type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  // Navigation
  nav_home: { en: 'Home', ar: 'الرئيسية' },
  nav_about: { en: 'About Us', ar: 'من نحن' },
  nav_services: { en: 'Services', ar: 'خدماتنا' },
  nav_products: { en: 'Products', ar: 'المنتجات' },
  nav_partners: { en: 'Partners', ar: 'شركاؤنا' },
  nav_contact: { en: 'Contact Us', ar: 'اتصل بنا' },
  
  // Hero Section
  hero_title: { 
    en: 'Your Trusted Partner in Veterinary Equipment & Medicines', 
    ar: 'شريكك الموثوق في معدات وأدوية البيطرية' 
  },
  hero_subtitle: { 
    en: 'We specialize in importing high-quality veterinary products for clinics, hospitals, and farms across the region.', 
    ar: 'نحن متخصصون في استيراد منتجات بيطرية عالية الجودة للعيادات والمستشفيات والمزارع في جميع أنحاء المنطقة.' 
  },
  hero_cta_contact: { en: 'Contact Us', ar: 'تواصل معنا' },
  hero_cta_services: { en: 'Our Services', ar: 'خدماتنا' },
  
  // About Section
  about_title: { en: 'About Us', ar: 'من نحن' },
  about_subtitle: { 
    en: 'Excellence in Veterinary Supply Chain', 
    ar: 'التميز في سلسلة التوريد البيطرية' 
  },
  about_description: { 
    en: 'We are a leading veterinary equipment and medicines importing company dedicated to providing exceptional quality products and services. With years of experience in the industry, we have established ourselves as a trusted partner for veterinary clinics, animal hospitals, and agricultural operations across the region.', 
    ar: 'نحن شركة رائدة في استيراد معدات وأدوية البيطرية مكرسة لتقديم منتجات وخدمات استثنائية ذات جودة عالية. مع سنوات من الخبرة في الصناعة، أقمنا أنفسنا كشريك موثوق للعيادات البيطرية والمستشفيات الحيوانية والعمليات الزراعية في جميع أنحاء المنطقة.' 
  },
  mission_title: { en: 'Our Mission', ar: 'مهمتنا' },
  mission_text: { 
    en: 'To deliver premium veterinary products that enhance animal health and support veterinary professionals in providing the best care possible.', 
    ar: 'تقديم منتجات بيطرية متميزة تعزز صحة الحيوانات وتدعم المحترفين البيطريين في تقديم أفضل رعاية ممكنة.' 
  },
  vision_title: { en: 'Our Vision', ar: 'رؤيتنا' },
  vision_text: { 
    en: 'To be the most reliable and innovative veterinary supply partner in the region, contributing to better animal welfare and healthcare standards.', 
    ar: 'أن نكون الشريك الأكثر موثوقية وابتكاراً في مجال التوريدات البيطرية في المنطقة، مساهمين في رفع مستوى رعاية الحيوانات ومعايير الرعاية الصحية.' 
  },
  why_choose_title: { en: 'Why Choose Us?', ar: 'لماذا تختارنا؟' },
  
  // Services Section
  services_title: { en: 'Our Services', ar: 'خدماتنا' },
  services_subtitle: { 
    en: 'Comprehensive Solutions for Your Veterinary Needs', 
    ar: 'حلول شاملة لاحتياجاتك البيطرية' 
  },
  
  service_medicines_title: { en: 'Importing Veterinary Medicines', ar: 'استيراد الأدوية البيطرية' },
  service_medicines_desc: { 
    en: 'We source and import a wide range of veterinary medications from trusted international manufacturers, ensuring quality and compliance with regional regulations.', 
    ar: 'نقوم بتوريد واستيراد مجموعة واسعة من الأدوية البيطرية من الشركات المصنعة الدولية الموثوقة، مع ضمان الجودة والامتثال للوائح الإقليمية.' 
  },
  
  service_equipment_title: { en: 'Importing Veterinary Equipment', ar: 'استيراد المعدات البيطرية' },
  service_equipment_desc: { 
    en: 'From diagnostic devices to surgical instruments, we provide state-of-the-art veterinary equipment that meets international standards.', 
    ar: 'من أجهزة التشخيص إلى الأدوات الجراحية، نقدم معدات بيطرية متطورة تلبي المعايير الدولية.' 
  },
  
  service_supply_title: { en: 'Supplying Clinics & Hospitals', ar: 'توريد العيادات والمستشفيات' },
  service_supply_desc: { 
    en: 'We maintain a reliable supply chain to ensure veterinary clinics and hospitals have continuous access to essential products.', 
    ar: 'نحافظ على سلسلة توريد موثوقة لضمان وصول العيادات البيطرية والمستشفيات إلى المنتجات الأساسية بشكل مستمر.' 
  },
  
  service_logistics_title: { en: 'Distribution & Logistics', ar: 'التوزيع واللوجستيات' },
  service_logistics_desc: { 
    en: 'Our efficient distribution network ensures timely delivery of products across the region with proper handling and storage protocols.', 
    ar: 'تضمن شبكة التوزيع الفعالة لدينا التسليم في الوقت المناسب للمنتجات في جميع أنحاء المنطقة مع بروتوكولات المناولة والتخزين المناسبة.' 
  },
  
  service_regulatory_title: { en: 'Regulatory & Compliance Support', ar: 'دعم الامتثال التنظيمي' },
  service_regulatory_desc: { 
    en: 'We assist with regulatory requirements, documentation, and compliance to ensure all imported products meet local standards.', 
    ar: 'نساعد في متطلبات الامتثال التنظيمي والتوثيق لضمان تلبية جميع المنتجات المستوردة للمعايير المحلية.' 
  },
  
  // Products Section
  products_title: { en: 'Product Categories', ar: 'فئات المنتجات' },
  products_subtitle: { 
    en: 'Quality Products for Every Veterinary Need', 
    ar: 'منتجات عالية الجودة لكل احتياج بيطري' 
  },
  
  product_vaccines: { en: 'Vaccines', ar: 'لقاحات' },
  product_surgical: { en: 'Surgical Equipment', ar: 'معدات جراحية' },
  product_diagnostic: { en: 'Diagnostic Devices', ar: 'أجهزة تشخيصية' },
  product_supplements: { en: 'Supplements', ar: 'مكملات غذائية' },
  product_farm: { en: 'Farm Animal Products', ar: 'منتجات حيوانات المزرعة' },
  
  // Partners Section
  partners_title: { en: 'Our Partners', ar: 'شركاؤنا' },
  partners_subtitle: { 
    en: 'We Collaborate with Trusted International Manufacturers', 
    ar: 'نتعاون مع مصنعين دوليين موثوقين' 
  },
  partners_description: { 
    en: 'We partner with leading pharmaceutical companies and equipment manufacturers worldwide to bring you the best veterinary products available.', 
    ar: 'نتعاون مع شركات الأدوية الرائدة ومصنعي المعدات في جميع أنحاء العالم لتقديم أفضل المنتجات البيطرية المتاحة.' 
  },
  
  // Contact Section
  contact_title: { en: 'Contact Us', ar: 'اتصل بنا' },
  contact_subtitle: { 
    en: 'Get in Touch with Our Team', 
    ar: 'تواصل مع فريقنا' 
  },
  contact_form_title: { en: 'Send Us a Message', ar: 'أرسل لنا رسالة' },
  contact_info_title: { en: 'Contact Information', ar: 'معلومات الاتصال' },
  
  form_name: { en: 'Full Name', ar: 'الاسم الكامل' },
  form_phone: { en: 'Phone Number', ar: 'رقم الهاتف' },
  form_email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
  form_message: { en: 'Message', ar: 'الرسالة' },
  form_submit: { en: 'Send Message', ar: 'إرسال الرسالة' },
  form_sending: { en: 'Sending...', ar: 'جاري الإرسال...' },
  form_success: { 
    en: 'Thank you! Your message has been sent successfully.', 
    ar: 'شكراً لك! تم إرسال رسالتك بنجاح.' 
  },
  
  phone_label: { en: 'Phone', ar: 'الهاتف' },
  email_label: { en: 'Email', ar: 'البريد الإلكتروني' },
  address_label: { en: 'Address', ar: 'العنوان' },
  whatsapp_label: { en: 'WhatsApp', ar: 'واتساب' },
  
  address_value: { 
    en: '123 Veterinary District, Medical City, Country', 
    ar: '١٢٣ حي البيطري، المدينة الطبية، الدولة' 
  },
  
  // CTA Section
  cta_title: { en: 'Ready to Partner with Us?', ar: 'مستعد للشراكة معنا؟' },
  cta_subtitle: { 
    en: 'Contact us today to discuss your veterinary supply needs and discover how we can help your business grow.', 
    ar: 'تواصل معنا اليوم لمناقشة احتياجاتك من التوريدات البيطرية واكتشف كيف يمكننا مساعدة عملك على النمو.' 
  },
  cta_button: { en: 'Get Started Now', ar: 'ابدأ الآن' },
  
  // Footer
  footer_quick_links: { en: 'Quick Links', ar: 'روابط سريعة' },
  footer_contact: { en: 'Contact', ar: 'تواصل معنا' },
  footer_follow_us: { en: 'Follow Us', ar: 'تابعنا' },
  footer_copyright: { en: '© 2026 VetMed Imports. All rights reserved.', ar: '© ٢٠٢٦ فيتمد إمبورتس. جميع الحقوق محفوظة.' },
  
  // Why Choose Us Points
  why_certified: { en: 'Certified & Quality Assured Products', ar: 'منتجات معتمدة ومضمونة الجودة' },
  why_international: { en: 'International Suppliers', ar: 'موردون دوليون' },
  why_delivery: { en: 'Fast & Reliable Delivery', ar: 'توصيل سريع وموثوق' },
  why_pricing: { en: 'Competitive Pricing', ar: 'أسعار تنافسية' },
  why_support: { en: '24/7 Customer Support', ar: 'دعم العملاء على مدار الساعة' },
  why_expertise: { en: 'Industry Expertise', ar: 'خبرة في الصناعة' },
  
  // Language switch
  language_en: { en: 'English', ar: 'English' },
  language_ar: { en: 'العربية', ar: 'العربية' },
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

// Services data
const services = [
  {
    icon: Pill,
    title: 'service_medicines_title',
    description: 'service_medicines_desc'
  },
  {
    icon: Stethoscope,
    title: 'service_equipment_title',
    description: 'service_equipment_desc'
  },
  {
    icon: Building2,
    title: 'service_supply_title',
    description: 'service_supply_desc'
  },
  {
    icon: Truck,
    title: 'service_logistics_title',
    description: 'service_logistics_desc'
  },
  {
    icon: Shield,
    title: 'service_regulatory_title',
    description: 'service_regulatory_desc'
  }
];

// Products data
const products = [
  {
    icon: Syringe,
    title: 'product_vaccines',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',
    description: { 
      en: 'Essential vaccines for disease prevention in animals', 
      ar: 'لقاحات أساسية للوقاية من الأمراض في الحيوانات' 
    }
  },
  {
    icon: HeartPulse,
    title: 'product_surgical',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
    description: { 
      en: 'High-quality surgical instruments and equipment', 
      ar: 'أدوات ومعدات جراحية عالية الجودة' 
    }
  },
  {
    icon: Microscope,
    title: 'product_diagnostic',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    description: { 
      en: 'Advanced diagnostic devices for accurate testing', 
      ar: 'أجهزة تشخيصية متقدمة للاختبارات الدقيقة' 
    }
  },
  {
    icon: Package,
    title: 'product_supplements',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
    description: { 
      en: 'Nutritional supplements for optimal animal health', 
      ar: 'مكملات غذائية لصحة الحيوانات المثلى' 
    }
  },
  {
    icon: Warehouse,
    title: 'product_farm',
    image: `${import.meta.env.VITE_IMAGE_PATH}/cow.jpg`,
    description: { 
      en: 'Specialized products for farm animals and livestock', 
      ar: 'منتجات متخصصة لحيوانات المزرعة والماشية' 
    }
  }
];

// Partners data
const partners = [
  { name: 'Zoetis', logo: 'Z' },
  { name: 'MSD Animal Health', logo: 'M' },
  { name: 'Boehringer Ingelheim', logo: 'B' },
  { name: 'Elanco', logo: 'E' },
  { name: 'Bayer Animal Health', logo: 'Ba' },
  { name: 'Virbac', logo: 'V' },
  { name: 'Ceva', logo: 'C' },
  { name: 'Vetoquinol', logo: 'Ve' }
];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  // Translation helper
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                VetMed
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {['nav_home', 'nav_about', 'nav_services', 'nav_products', 'nav_partners', 'nav_contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.replace('nav_', '')}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {t(item)}
                </a>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled 
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? t('language_ar') : t('language_en')}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
                  {['nav_home', 'nav_about', 'nav_services', 'nav_products', 'nav_partners', 'nav_contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.replace('nav_', '')}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium"
                    >
                      {t(item)}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'en' ? t('language_ar') : t('language_en')}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7cc9c2496e07?w=1920&h=1080&fit=crop"
            
            alt="Veterinary clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-6 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                {language === 'en' ? 'Welcome to VetMed Imports' : 'مرحباً بكم في فيتمد إمبورتس'}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              {t('hero_title')}
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              {t('hero_subtitle')}
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>{t('hero_cta_contact')}</span>
              </a>
              
              <a
                href="#services"
                className="group flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm"
              >
                <span>{t('hero_cta_services')}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">{language === 'en' ? 'Scroll Down' : 'انتقل للأسفل'}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image Side */}
            <motion.div variants={scaleIn} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  // src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=1000&fit=crop"
                  src={`${import.meta.env.VITE_IMAGE_PATH}/sheep.jpg`}
                  alt="Veterinary professional"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              
              {/* Stats Card */}
              <motion.div 
                variants={fadeInUp}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-800">10+</p>
                    <p className="text-slate-600 text-sm">{language === 'en' ? 'Years Experience' : 'سنوات الخبرة'}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeInUp}>
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  {t('about_title')}
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mt-3 leading-tight">
                  {t('about_subtitle')}
                </h2>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                {t('about_description')}
              </motion.p>

              {/* Mission & Vision */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t('mission_title')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{t('mission_text')}</p>
                </div>
                
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t('vision_title')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{t('vision_text')}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800">{t('why_choose_title')}</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, key: 'why_certified', color: 'blue' },
                { icon: Globe, key: 'why_international', color: 'emerald' },
                { icon: Truck, key: 'why_delivery', color: 'blue' },
                { icon: Award, key: 'why_pricing', color: 'emerald' },
                { icon: Clock, key: 'why_support', color: 'blue' },
                { icon: Users, key: 'why_expertise', color: 'emerald' }
              ].map((item) => (
                <motion.div
                  key={item.key}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-start space-x-4 rtl:space-x-reverse bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{t(item.key)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              {t('services_title')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-800 mt-3">
              {t('services_subtitle')}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {t(service.title)}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {t(service.description)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              {t('products_title')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-800 mt-3">
              {t('products_subtitle')}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={t(product.title)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {t(product.title)}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              {t('partners_title')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-800 mt-3">
              {t('partners_subtitle')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
              {t('partners_description')}
            </motion.p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
                    <span className="text-3xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {partner.logo}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                    {partner.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-white">
              {t('cta_title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed">
              {t('cta_subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                <span>{t('cta_button')}</span>
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              {t('contact_title')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-slate-800 mt-3">
              {t('contact_subtitle')}
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <div className="bg-slate-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact_form_title')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_name')}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_phone')}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_email')}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_message')}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('form_sending')}</span>
                      </>
                    ) : (
                      <span>{t('form_submit')}</span>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t('form_success')}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('contact_info_title')}</h3>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                {[
                  { 
                    icon: Phone, 
                    label: 'phone_label', 
                    value: '+1 234 567 8900',
                    href: 'tel:+12345678900' 
                  },
                  { 
                    icon: Mail, 
                    label: 'email_label', 
                    value: 'info@vetmedimports.com',
                    href: 'mailto:info@vetmedimports.com' 
                  },
                  { 
                    icon: MapPin, 
                    label: 'address_label', 
                    value: t('address_value'),
                    href: 'https://maps.google.com/?q=Veterinary+District+Medical+City' 
                  },
                  { 
                    icon: MessageCircle, 
                    label: 'whatsapp_label', 
                    value: '+1 234 567 8900',
                    href: 'https://wa.me/12345678900' 
                  }
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-6 group p-2 -m-2 rounded-2xl hover:bg-slate-50 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{t(item.label)}</p>
                      <p className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Map */}
              <motion.div variants={fadeInUp} className="mt-8">
                <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-600 font-medium">
                      {language === 'en' ? 'Google Maps Integration' : 'تكامل خرائط Google'}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {language === 'en' ? 'Embed your map here' : 'ضع خريطتك هنا'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="flex gap-4 pt-4 flex-wrap">
                {[
                  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-slate-100 hover:bg-blue-500 rounded-xl flex items-center justify-center text-slate-600 hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">VetMed</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Your trusted partner in veterinary equipment and medicines. Quality products for better animal health.'
                  : 'شريكك الموثوق في معدات وأدوية البيطرية. منتجات عالية الجودة لصحة الحيوانات الأفضل.'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer_quick_links')}</h4>
              <ul className="space-y-2">
                {['nav_home', 'nav_about', 'nav_services', 'nav_products', 'nav_partners', 'nav_contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.replace('nav_', '')}`}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>
                  <a href="tel:+12345678900" className="hover:text-white transition-colors block">
                    +1 234 567 8900
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vetmedimports.com" className="hover:text-white transition-colors block">
                    info@vetmedimports.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.google.com/?q=Veterinary+District+Medical+City" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors block"
                  >
                    {t('address_value')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer_follow_us')}</h4>
              <div className="flex gap-4 flex-wrap">
                {[
                  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">{t('footer_copyright')}</p>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? t('language_ar') : t('language_en')}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/12345678900"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-colors"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;