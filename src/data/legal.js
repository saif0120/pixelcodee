// Honest, freelancer-appropriate legal content. Plain-English, India-based independent developer.
const updated = 'August 2026';

export const legalPages = {
  privacy: {
    title: 'Privacy Policy',
    updated,
    intro: 'This Privacy Policy explains how information is handled when you use this website or contact me for services. I am an independent web developer based in New Delhi, India.',
    sections: [
      { h: 'Information I Collect', p: 'When you submit the contact form, I collect the details you provide — such as your name, email, phone number, project type, budget range, and message. This is used only to respond to your enquiry and discuss your project.' },
      { h: 'How I Use Your Information', p: 'Your information is used solely to reply to you, prepare quotes, and deliver services you request. I do not sell, rent, or share your personal information with third parties for marketing.' },
      { h: 'Third-Party Services', p: 'This site may use services like EmailJS (to deliver form submissions), analytics tools, and hosting providers. These services process data according to their own privacy policies.' },
      { h: 'Data Retention', p: 'I keep enquiry details only as long as needed to respond and, where relevant, to deliver a project. You can request deletion of your data at any time.' },
      { h: 'Your Rights', p: 'You may request access to, correction of, or deletion of your personal data by emailing me at saifali0atif@gmail.com.' },
      { h: 'Contact', p: 'For any privacy questions, contact saifali0atif@gmail.com.' },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated,
    intro: 'These Terms govern the use of this website and any web development services provided by Saif Ali (independent developer, New Delhi, India).',
    sections: [
      { h: 'Services', p: 'I provide web development services including website design, development, WordPress sites, redesigns, maintenance, deployment, and related work as agreed per project.' },
      { h: 'Quotes & Scope', p: 'All prices shown on this website are starting points, not fixed quotes. Final pricing is confirmed in a written quote based on your specific requirements, functionality, and timeline before any work begins.' },
      { h: 'Project Process', p: 'Work begins after scope and quote are agreed. Revisions are provided as specified in the agreed proposal. Additional work beyond the agreed scope may be quoted separately.' },
      { h: 'Client Responsibilities', p: 'You agree to provide required content, access, and timely feedback. Delays in providing these may affect timelines.' },
      { h: 'Ownership', p: 'On full payment, you own the final delivered website and content you provided. I may showcase the work in my portfolio unless agreed otherwise.' },
      { h: 'Limitation of Liability', p: 'Services are provided in good faith and to professional standards. I am not liable for indirect losses. Third-party services (hosting, plugins, gateways) are governed by their own terms.' },
      { h: 'Contact', p: 'Questions about these Terms: saifali0atif@gmail.com.' },
    ],
  },
  refund: {
    title: 'Refund Policy',
    updated,
    intro: 'This policy explains how refunds work for web development services. Because work is custom and time-based, please read carefully.',
    sections: [
      { h: 'Advance Payments', p: 'Projects typically begin after an advance payment. This advance reserves time and covers initial work, and is generally non-refundable once work has started.' },
      { h: 'Before Work Begins', p: 'If you cancel before any work has started, the advance may be refunded minus any costs already incurred (e.g. third-party purchases).' },
      { h: 'After Work Begins', p: 'Once development has started, refunds are calculated based on the stage of completion. Completed and delivered work is non-refundable.' },
      { h: 'Not Covered', p: 'Refunds are not provided for change of mind after delivery, issues caused by third-party services, or content/access delays on the client side.' },
      { h: 'Requesting a Refund', p: 'To discuss a refund, email saifali0atif@gmail.com with your project details. I aim to handle every request fairly and transparently.' },
    ],
  },
  cancellation: {
    title: 'Cancellation Policy',
    updated,
    intro: 'This policy explains how project cancellations are handled.',
    sections: [
      { h: 'Client Cancellation', p: 'You may cancel a project at any time by written notice (email/WhatsApp). Payment is due for all work completed up to the cancellation date.' },
      { h: 'Developer Cancellation', p: 'In rare cases where I cannot continue a project, I will notify you promptly and refund payments for any undelivered work.' },
      { h: 'Inactive Projects', p: 'If a project is paused by the client for an extended period without communication, it may be treated as cancelled, with completed work billed accordingly.' },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    updated,
    intro: 'The information on this website is provided in good faith for general information about my services.',
    sections: [
      { h: 'Professional Positioning', p: 'I am an independent full stack web developer. I represent my skills and experience honestly and do not claim to be an agency or enterprise company.' },
      { h: 'Current Learning', p: 'Technologies listed under "Currently Learning" are being actively studied and are not represented as professional expertise. I only take on paid work in areas I can confidently deliver.' },
      { h: 'Pricing', p: 'All prices are starting points and launch offers, subject to change. Final quotes depend on project scope, functionality, and timeline.' },
      { h: 'External Links', p: 'This site may link to external websites. I am not responsible for the content or practices of third-party sites.' },
      { h: 'No Guarantees', p: 'While I follow current best practices for performance and SEO, specific outcomes (such as search rankings) depend on many external factors and cannot be guaranteed.' },
    ],
  },
};

export const legalIndex = [
  { slug: 'privacy', label: 'Privacy Policy' },
  { slug: 'terms', label: 'Terms & Conditions' },
  { slug: 'refund', label: 'Refund Policy' },
  { slug: 'cancellation', label: 'Cancellation Policy' },
  { slug: 'disclaimer', label: 'Disclaimer' },
];
