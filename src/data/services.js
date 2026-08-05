import { FiLayout, FiBriefcase, FiGlobe, FiZap, FiRefreshCw, FiTool } from 'react-icons/fi';

// Pricing disclaimer — shown wherever prices appear (legally safe)
export const pricingDisclaimer =
  'Final quotation depends on project requirements, functionality, and timeline. Prices below are starting points, not fixed quotes.';

// Core services — limited to genuine, confidently-deliverable expertise
export const services = [
  {
    id: 'business-website',
    icon: FiBriefcase,
    title: 'Business Website',
    price: '₹14,999',
    launch: '₹8,999',
    description: 'A professional multi-page website that makes your business look credible and helps customers find and contact you.',
    best: 'Local businesses, consultants, service providers',
    features: ['Up to 5–7 pages', 'Mobile responsive design', 'Contact & enquiry form', 'WhatsApp integration', 'Basic SEO setup', 'Hosting & deployment help'],
    popular: true,
  },
  {
    id: 'landing-page',
    icon: FiZap,
    title: 'Landing Page',
    price: '₹6,999',
    launch: '₹3,999',
    description: 'A single high-converting page for a product, campaign, or lead generation — fast to launch, built to convert.',
    best: 'Product launches, ad campaigns, lead capture',
    features: ['1 focused page', 'Responsive design', 'Lead / enquiry form', 'WhatsApp button', 'Fast loading', 'Deployment included'],
  },
  {
    id: 'wordpress-website',
    icon: FiGlobe,
    title: 'WordPress Website',
    price: '₹12,999',
    launch: '₹7,999',
    description: 'A website you can update yourself, built on WordPress — flexible, familiar, and easy to maintain.',
    best: 'Blogs, small businesses, content-driven sites',
    features: ['WordPress setup', 'Theme customization', 'Responsive layout', 'Contact form + WhatsApp', 'Basic SEO', 'Handover & training'],
  },
  {
    id: 'portfolio-website',
    icon: FiLayout,
    title: 'Portfolio Website',
    price: '₹7,999',
    launch: '₹4,999',
    description: 'A clean, modern personal or company portfolio to showcase your work and build credibility.',
    best: 'Freelancers, creatives, professionals, agencies',
    features: ['Custom design', 'Project / gallery showcase', 'Responsive & fast', 'Contact integration', 'SEO basics', 'Deployment included'],
  },
  {
    id: 'website-redesign',
    icon: FiRefreshCw,
    title: 'Website Redesign',
    price: 'Custom',
    launch: null,
    description: 'Already have a website? I\'ll modernize the design, improve speed, and make it fully responsive.',
    best: 'Outdated or slow existing websites',
    features: ['Design modernization', 'Speed improvements', 'Mobile responsiveness', 'SEO cleanup', 'Content restructure', 'Free assessment first'],
  },
  {
    id: 'maintenance',
    icon: FiTool,
    title: 'Website Maintenance',
    price: 'From ₹1,499/mo',
    launch: null,
    description: 'Keep your website updated, secure, and running smoothly with ongoing support.',
    best: 'Anyone who wants worry-free upkeep',
    features: ['Content updates', 'Bug fixes', 'Security updates', 'Backups', 'Small changes', 'Priority support'],
  },
];

// Add-ons / capabilities (honest scope, no overcommitment)
export const capabilities = [
  'Responsive Website Design', 'Basic SEO Setup', 'WhatsApp Integration',
  'Hosting Assistance', 'Deployment', 'Contact Form Integration',
];

export const process = [
  { step: '01', title: 'Discovery', desc: 'A free call to understand your business, goals, and what you need the website to do.', duration: '30 min' },
  { step: '02', title: 'Planning', desc: 'I map out the pages, structure, and scope — then send a clear proposal and quote.', duration: '1–2 days' },
  { step: '03', title: 'UI Design', desc: 'I design the look and layout so you can see and approve the direction before build.', duration: '2–4 days' },
  { step: '04', title: 'Development', desc: 'I build your website with regular progress updates. Nothing is a black box.', duration: '1–3 weeks' },
  { step: '05', title: 'Testing', desc: 'Every page checked on mobile, tablet, and desktop — plus speed and forms.', duration: '2–3 days' },
  { step: '06', title: 'Deployment', desc: 'I put your site live, connect your domain, and make sure everything works.', duration: '1 day' },
  { step: '07', title: 'Support', desc: 'After launch, I\'m still here for fixes and questions. Maintenance plans available.', duration: 'Ongoing' },
];

export const businessBenefits = [
  'A website that works on every device',
  'Faster loading = more visitors stay',
  'Basic SEO so people can find you on Google',
  'WhatsApp integration for instant enquiries',
  'Clean, modern design that builds trust',
  'Direct communication — no agency middlemen',
  'Transparent pricing with no hidden costs',
  'Support after your website goes live',
];

export const faqs = [
  { q: 'How much does a website cost?', a: 'Starting points: landing pages from ₹3,999 (launch offer), business websites from ₹8,999 (launch offer). Every project is quoted individually — final pricing depends on your requirements, features, and timeline.' },
  { q: 'How long does it take?', a: 'A landing page takes a few days. A business or WordPress website usually takes 1–3 weeks depending on the number of pages and features.' },
  { q: 'Will my website work on mobile?', a: 'Yes — every website I build is fully responsive and tested on mobile, tablet, and desktop. Most of your visitors are on phones, so I design for that first.' },
  { q: 'Do you help with hosting and domain?', a: 'Yes. I help you choose hosting, connect your domain, and deploy the site live. You own everything.' },
  { q: 'Do you provide support after delivery?', a: 'Yes. I provide support after your website goes live for fixes and questions. For ongoing updates, I offer affordable monthly maintenance plans.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. Send me your current site and I\'ll give you a free assessment with honest suggestions before you commit to anything.' },
  { q: 'Is the pricing fixed?', a: 'The prices shown are starting points, not fixed quotes. Final pricing depends on your specific requirements, functionality, and timeline — I\'ll always give you a clear quote before we start.' },
  { q: 'How do we communicate?', a: 'Directly — via WhatsApp, email, or a Google Meet call. You talk to me, the person building your site, not a support desk.' },
];
