import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import ProjectData from "@/components/projectData";
import ProjectsBanner from "@/components/projectData/projectBanner";

export const metadata: Metadata = {
  title: "Projects | Nearby You",
  description: "At Nearby You, we specialize in empowering businesses to grow, thrive, and succeed in today’s competitive landscape. As a full-service business growth consultancy, we provide a comprehensive suite of services tailored to your unique needs.",
  keywords: [
    "Website development services", "Professional website development", "Custom website development", "Web development company", "Affordable website development", 
    "Website development agency", "Website development experts", "Web development solutions", "E-commerce website development", "Best web development agency",
    "WordPress development services", "Full-stack website development", "HTML5 website development", "Responsive web development", "Website development for small businesses", 
    "Website design and development", "Web application development", "Front-end web development", "Back-end web development", "PHP website development", "JavaScript web development", 
    "Custom website design and development", "CMS web development", "Shopify web development", "Laravel web development", "Mobile-friendly website development", 
    "Modern website development", "Interactive web development", "SEO-friendly website development", "Website maintenance and development", "Professional web design", 
    "Custom web design", "Web design company", "E-commerce web design", "User experience (UX) design", "UI/UX design services", "Responsive web design", 
    "Modern web design", "User-friendly web design", "Custom web design agency", "Website design and development", "Graphic web design services", 
    "Corporate website design", "Creative web design services", "Mobile-responsive web design", "Web design for small businesses", "SEO web design", "Minimalist web design", 
    "Landing page design", "Website redesign services", "E-commerce web development", "Custom e-commerce development", "Shopify development services", "WooCommerce web development", 
    "Magento e-commerce development", "BigCommerce development", "E-commerce web design", "Online store development", "Payment gateway integration", "Secure e-commerce websites", 
    "E-commerce website design", "Digital store development", "E-commerce platform development", "Professional e-commerce website design", "E-commerce website optimization", 
    "E-commerce website redesign", "Shopping cart integration", "E-commerce website maintenance", "Custom e-commerce solutions", "SEO for e-commerce websites", "Online store optimization", 
    "Mobile e-commerce development", "Mobile-friendly e-commerce websites", "E-commerce site customization", "Online business website development", "E-commerce strategy development", 
    "Web development for online businesses", "Custom e-commerce solutions", "Marketplace development", "B2B e-commerce development", "B2C e-commerce development", "SaaS e-commerce solutions", 
    "Marketplace web development", "Custom product pages", "Inventory management systems", "Order management systems", "E-commerce business automation", "E-commerce website performance", 
    "E-commerce user experience design", "E-commerce store setup", "Shopify store design", "WooCommerce store design", "Magento store development", "Secure shopping experience", 
    "Multi-channel e-commerce", "SEO for online stores", "Product management systems", "Custom checkout solutions", "International e-commerce websites", "Web store development", 
    "Conversion rate optimization for e-commerce", "Search engine optimization for e-commerce", "User interface design for e-commerce", "Web development for e-commerce platforms", 
    "Search engine friendly e-commerce design", "E-commerce digital marketing services", "E-commerce consulting", "E-commerce website features", "Social media integration for e-commerce", 
    "Payment gateway integration services", "SEO services for online stores", "E-commerce analytics services", "Digital payment integration", "E-commerce mobile app development", 
    "Responsive e-commerce design", "E-commerce website security", "Data protection for e-commerce websites", "Secure payment systems", "E-commerce product catalog design", 
    "Website usability for online stores", "Website speed optimization for e-commerce", "Digital store solutions", "Web development for retail businesses", "E-commerce conversion optimization", 
    "Mobile app for online stores", "E-commerce solutions for entrepreneurs", "Shopify customization", "WooCommerce customization", "Magento customization", "Best e-commerce website design", 
    "High-conversion e-commerce websites", "Multi-platform e-commerce development", "Customer retention strategies for e-commerce", "Social proof for e-commerce websites", 
    "Custom e-commerce features", "E-commerce product catalog design", "Website optimization for e-commerce businesses", "E-commerce growth strategies", "E-commerce performance enhancement", 
    "Business website development", "Professional business website", "Custom business website design", "Business website redesign", "Business website development services", 
    "Business site development", "Custom business web design", "Responsive business websites", "SEO-friendly business websites", "Business website optimization", "Business web design services", 
    "Corporate business website design", "Company website development", "Professional business websites", "Corporate web development", "Digital marketing for business websites", 
    "Small business website development", "Enterprise website solutions", "Online presence for businesses", "Web development for corporate websites", "E-commerce website features", 
    "Lead generation website development", "Business landing page development", "Corporate branding through websites", "Business website management", "Custom CMS for businesses", 
    "Custom software development for businesses", "Cloud-based business websites", "Web development for startups", "Business website SEO", "Content management systems for businesses", 
    "Business web optimization", "Marketing website development", "Business lead conversion websites", "Digital solutions for businesses", "Business website customization", "Business website security", 
    "Business website accessibility", "B2B website development", "B2C website development", "Service-based website development", "Web design for professionals", "Freelance web development", 
    "Website development for digital agencies", "Business portal development", "Digital business transformation", "Agency web development", "Corporate portal development", 
    "Custom business website solutions", "Professional SEO web development", "Mobile website development", "Digital marketing website development", "Lead generation through websites", 
    "Consulting website development", "Project management websites", "Consulting web solutions", "Business website analytics", "Real estate website development", "Travel website development", 
    "Educational website development", "Government website development", "Nonprofit organization website development", "Professional landing page development", "Job portal website development", 
    "Portfolio website design", "Web design for personal websites", "Website redesign for businesses", "Custom website for startups", "Healthcare website development", 
    "Financial services website development", "Law firm website development", "Restaurant website development", "Hotel website development", "Blog website development", 
    "Educational web design services", "Healthcare web development", "Real estate web development", "Lawyer web development", "NGO web design", "Nonprofit website solutions", 
    "Church website design", "Medical website development", "Fitness website development", "Restaurant website design", "Hotel website design", "School website development", 
    "University website development", "Online learning website design", "School web development", "Music website development", "Entertainment website development", "Art website development", 
    "Professional portfolio websites", "Event website design", "Wedding website design", "Freelance web development services", "Website maintenance for businesses", "Digital solutions for professionals", 
    "Full-stack website solutions", "Cross-platform web development", "Web accessibility for businesses", "Corporate site redesign", "Website content optimization", "Web optimization for search engines", 
    "Web development for digital marketing", "Marketing website features", "Business site optimization", "Content management systems for enterprises", "Secure business websites", 
    "Best web development for enterprises", "Professional business web portals", "Marketing website design", "Advanced website development solutions", "Tailored website development", 
    "Custom website development for professionals", "User-centric web development", "Business web interface design", "Interactive business websites", "Web development for large companies", 
    "High-performance websites", "Digital transformation for businesses", "Professional e-commerce web solutions", "Full-stack e-commerce development", "Marketing for e-commerce websites", 
    "Conversion optimization for e-commerce sites", "Professional product page development", "Graphic design services", "Professional graphic design", "Custom graphic design", 
    "Graphic design agency", "Affordable graphic design", "Graphic design company", "Creative graphic design", "Logo design services", "Branding design services", "Corporate identity design", 
    "Graphic design experts", "Web graphic design", "Print graphic design", "Graphic design for businesses", "Business logo design", "Marketing materials design", "Custom logo design", 
    "Flyer design services", "Brochure design services", "Poster design services", "Business card design", "Social media graphic design", "Packaging design services", "Infographic design", 
    "Advertisement design", "Banner design", "Product design", "Creative design agency", "Visual design services", "Website graphic design", "Graphic design solutions", "Graphic design for small businesses", 
    "High-quality graphic design", "Graphic design for startups", "Digital graphic design", "Print media design", "Graphic design for branding", "Graphic design for marketing", 
    "Graphic design for advertising", "Custom branding design", "Branding and identity design", "Graphic design for social media", "Advertising design services", "Promotional graphic design", 
    "Graphic design for e-commerce", "Logo redesign services", "Graphic design for print media", "Business branding design", "Graphic design for websites", "Brochure layout design", 
    "Corporate brochure design", "E-commerce graphic design", "Catalog design services", "Graphic design for email marketing", "Web graphics design", "Custom illustrations", "Product packaging design", 
    "Custom typography design", "Graphic design for apps", "Illustration design services", "Print materials design", "T-shirt graphic design", "Event graphic design", "Book cover design", 
    "Magazine design services", "Poster layout design", "Business stationery design", "Event flyer design", "Digital illustration services", "Creative branding design", "Graphic design portfolio", 
    "Graphic design for advertising campaigns", "Graphic design consulting", "Art direction services", "Motion graphics design", "Website design graphics", "Digital media graphic design", 
    "E-commerce branding design", "Vector art design", "Typography design", "Photo manipulation design", "Visual communication design", "UI design", "UX design", "Graphic design for print", 
    "Editorial design", "Visual identity design", "Mobile app graphic design", "3D graphic design services", "Corporate graphic design", "Environmental graphic design", "Retail graphic design", 
    "Print advertising design", "Custom digital graphics", "Custom business graphics", "Social media post design", "Custom visual design", "UI/UX graphic design", "Event poster design", 
    "Custom design agency", "Web banner design", "Graphic design for digital marketing", "Interactive graphic design", "User interface graphics", "Marketing campaign design", 
    "Infographic design services", "Web icon design", "Animated graphics design", "Custom icons design", "Icon design services", "Creative digital design", "Commercial graphic design", 
    "Flyer and poster design", "Business advertising design"]
};

const ContactPage = () => {
  return (
<>
<Breadcrumb pageName="Product Page" />
<ProjectData />
    </>
  );
};

export default ContactPage;
