import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Metadata definitions mapping all targeted SEO keywords to routes
const seoConfig = {
  "/": {
    title: "Tech Trade Consulting | SAP Consulting, IT Services & AI Development Company",
    description: "Leading SAP consulting company & custom software development company in India & UAE. Experts in SAP S/4HANA, IT consulting services, Python, React, Node.js, AI/LLM development, and IT staffing.",
    keywords: "SAP consulting services, SAP implementation services, IT consulting company India, custom software development company, AI development services, LLM development services, Python development company, React development company, Node.js development services, SAP consulting services India, SAP consulting services UAE",
    canonical: "https://techtradeitsolutions.com/",
    schemaType: "Organization",
    schemaName: "Tech Trade Consulting"
  },
  "/sap-services": {
    title: "SAP Consulting Services | SAP S/4HANA, Implementation & Support Services",
    description: "Premier SAP consulting services in India & UAE. End-to-end SAP implementation services, SAP support services, SAP S/4HANA consulting, SAP migration services, application support, and certified functional & technical consultants.",
    keywords: "SAP consulting services, SAP implementation services, SAP support services, SAP S/4HANA consulting, SAP migration services, SAP application support, SAP functional consultant, SAP technical consulting, SAP ERP consulting, SAP training services, SAP consulting company India, SAP consulting services India, SAP consulting services UAE, SAP consulting services Middle East",
    canonical: "https://techtradeitsolutions.com/#/sap-services",
    schemaType: "Service",
    schemaName: "SAP Consulting & Implementation Services"
  },
  "/sap-landing": {
    title: "SAP Enterprise Solutions & S/4HANA Consulting | Tech Trade Consulting",
    description: "Transform your enterprise with certified SAP functional consultants & technical consulting. SAP ERP consulting, S/4HANA migration, and 24/7 SAP application support.",
    keywords: "SAP ERP consulting, SAP S/4HANA consulting, SAP migration services, SAP functional consultant, SAP technical consulting, SAP consulting company India, SAP consulting services UAE",
    canonical: "https://techtradeitsolutions.com/#/sap-landing",
    schemaType: "Service",
    schemaName: "SAP Enterprise Consulting"
  },
  "/it-solutions": {
    title: "IT Consulting Services & Custom Software Development Company | AI, Python, React",
    description: "Top IT consulting company in India offering custom software development, enterprise software development, Python development, Django development services, React, Node.js, and cutting-edge AI & LLM development services.",
    keywords: "IT consulting services, IT consulting company India, custom software development company, Python development company, Django development services, React development company, Node.js development services, AI development services, LLM development services, enterprise software development, software development company India",
    canonical: "https://techtradeitsolutions.com/#/it-solutions",
    schemaType: "Service",
    schemaName: "Custom Software & IT Consulting Services"
  },
  "/resourcing": {
    title: "IT Staffing Services & SAP Consultant Staffing | Resource Augmentation",
    description: "Specialized IT staffing services, SAP consultant staffing, and IT resource augmentation. Hire experienced contract IT developers, SAP functional and technical consultants across India and Middle East.",
    keywords: "IT staffing services, SAP consultant staffing, IT resource augmentation, contract IT developers, SAP functional consultant, SAP technical consulting, IT consulting company India",
    canonical: "https://techtradeitsolutions.com/#/resourcing",
    schemaType: "Service",
    schemaName: "IT Staffing & SAP Resource Augmentation"
  },
  "/opportunities": {
    title: "SAP Training Institute | SAP Consultant Training & Online Certification",
    description: "Recognized SAP training institute offering comprehensive SAP consultant training, online SAP training, and hands-on enterprise project experience for aspiring SAP consultants.",
    keywords: "SAP training institute, SAP consultant training, SAP online training, SAP training services, SAP functional consultant training, SAP ERP training",
    canonical: "https://techtradeitsolutions.com/#/opportunities",
    schemaType: "Course",
    schemaName: "SAP Consultant Professional Training"
  },
  "/digital-transformation": {
    title: "Digital Transformation & Cloud Infrastructure Consulting | Tech Trade",
    description: "Enterprise digital transformation, cloud architecture (AWS, Azure, GCP), intelligent automation, and cybersecurity solutions for global businesses.",
    keywords: "digital transformation, cloud consulting, enterprise modernization, AI integration, IT consulting services",
    canonical: "https://techtradeitsolutions.com/#/digital-transformation",
    schemaType: "Service",
    schemaName: "Digital Transformation Services"
  },
  "/about": {
    title: "About Us | Leading SAP Consulting & IT Solutions Company India & UAE",
    description: "Learn more about Tech Trade Consulting — your trusted partner for SAP ERP consulting, custom software development, IT staffing, and enterprise technology solutions.",
    keywords: "SAP consulting company India, software development company India, IT consulting company India, Tech Trade Consulting",
    canonical: "https://techtradeitsolutions.com/#/about",
    schemaType: "AboutPage",
    schemaName: "About Tech Trade Consulting"
  },
  "/internal-product": {
    title: "Internal Products & Enterprise Platforms | Tech Trade Consulting",
    description: "Explore enterprise software and proprietary tools engineered by Tech Trade Consulting to drive operational excellence and business intelligence.",
    keywords: "enterprise software development, custom software, digital solutions",
    canonical: "https://techtradeitsolutions.com/#/internal-product",
    schemaType: "Service",
    schemaName: "Enterprise Software Solutions"
  },
  "/odoo-services": {
    title: "Odoo ERP Implementation & Consulting Services | Tech Trade",
    description: "Custom Odoo ERP implementation, module customization, integration, and migration services for growing enterprises.",
    keywords: "Odoo ERP consulting, Odoo implementation, ERP consulting India",
    canonical: "https://techtradeitsolutions.com/#/odoo-services",
    schemaType: "Service",
    schemaName: "Odoo ERP Services"
  },
  "/zoho-services": {
    title: "Zoho Consulting & Implementation Services | Tech Trade",
    description: "Comprehensive Zoho CRM and business suite implementation, customization, and workflow automation services.",
    keywords: "Zoho consulting, Zoho implementation services, CRM consulting",
    canonical: "https://techtradeitsolutions.com/#/zoho-services",
    schemaType: "Service",
    schemaName: "Zoho Consulting Services"
  },
  "/focus-services": {
    title: "Focus ERP Implementation & Support Services | Tech Trade",
    description: "Specialized Focus ERP consulting, setup, support, and business process automation services.",
    keywords: "Focus ERP consulting, Focus ERP implementation, ERP services UAE India",
    canonical: "https://techtradeitsolutions.com/#/focus-services",
    schemaType: "Service",
    schemaName: "Focus ERP Services"
  }
};

const updateTag = (selector, attribute, value) => {
  let element = document.querySelector(selector);
  if (!element) {
    if (selector.startsWith('meta[')) {
      element = document.createElement("meta");
      const nameMatch = selector.match(/name="([^"]+)"/);
      const propertyMatch = selector.match(/property="([^"]+)"/);
      if (nameMatch) element.setAttribute("name", nameMatch[1]);
      if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
      document.head.appendChild(element);
    } else if (selector.startsWith('link[')) {
      element = document.createElement("link");
      const relMatch = selector.match(/rel="([^"]+)"/);
      if (relMatch) element.setAttribute("rel", relMatch[1]);
      document.head.appendChild(element);
    }
  }
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = seoConfig[pathname] || seoConfig["/"];

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Standard Meta Tags
    updateTag('meta[name="description"]', 'content', meta.description);
    updateTag('meta[name="keywords"]', 'content', meta.keywords);

    // 3. OpenGraph Tags
    updateTag('meta[property="og:title"]', 'content', meta.title);
    updateTag('meta[property="og:description"]', 'content', meta.description);
    updateTag('meta[property="og:url"]', 'content', meta.canonical);

    // 4. Twitter Tags
    updateTag('meta[name="twitter:title"]', 'content', meta.title);
    updateTag('meta[name="twitter:description"]', 'content', meta.description);
    updateTag('meta[name="twitter:url"]', 'content', meta.canonical);

    // 5. Canonical Link
    updateTag('link[rel="canonical"]', 'href', meta.canonical);

    // 6. Dynamic Route-level Schema Markup (JSON-LD)
    let schemaScript = document.getElementById("seo-route-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "seo-route-schema";
      document.head.appendChild(schemaScript);
    }

    const routeSchema = {
      "@context": "https://schema.org",
      "@type": meta.schemaType || "Service",
      "name": meta.schemaName,
      "description": meta.description,
      "url": meta.canonical,
      "provider": {
        "@type": "Organization",
        "name": "Tech Trade Consulting",
        "url": "https://techtradeitsolutions.com/"
      }
    };

    schemaScript.textContent = JSON.stringify(routeSchema);
  }, [pathname]);

  return null; // Purely background execution, zero UI/layout impact
};

export default SEOManager;
