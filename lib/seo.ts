// SEO utility functions and constants for the portfolio website
// Provides centralized SEO configuration and metadata generation

import { Metadata } from 'next';

// SEO Constants
export const SEO_CONFIG = {
  siteName: 'Atharv Tare - Portfolio',
  siteUrl: 'https://atharv.work',
  defaultTitle: 'Atharv Tare - Full Stack Developer Portfolio',
  defaultDescription: 'Full Stack Developer with 3+ years of experience building scalable applications. Expert in Node.js, React, AWS, and cloud architecture. View my portfolio of projects and professional experience.',
  keywords: [
    'Developer Portfolio',
    'Software Engineer Portfolio', 
    'Full Stack Developer Portfolio',
    'Node.js Developer',
    'React Developer',
    'AWS Developer',
    'Backend Developer',
    'Frontend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'MongoDB Developer',
    'PostgreSQL Developer',
    'Email Automation Developer',
    'Data Extraction Specialist',
    'Custom Email Solutions',
    'LESS Developer',
    'Kubernetes Developer',
    'Docker Developer',
    'Microservices Developer',
    'API Developer',
    'Cloud Developer',
    'DevOps Engineer',
    'Software Development Engineer',
    'Web Developer',
    'Portfolio Website',
    'Developer Resume',
    'Tech Portfolio',
    'Programming Portfolio',
    'Code Portfolio',
    'Software Engineer Resume',
    'Full Stack Engineer',
    'Backend Engineer',
    'Frontend Engineer',
    'Cloud Engineer',
    'DevOps Engineer Portfolio'
  ],
  author: 'Atharv Tare',
  twitterHandle: '@atharvtare',
  linkedinProfile: 'https://linkedin.com/in/atharv-tare',
  githubProfile: 'https://github.com/atharv028',
  email: 'hire.atharv@gmail.com',
  location: 'Delhi, India',
  company: 'Phot.AI',
  jobTitle: 'Software Development Engineer I',
  experience: '3+ years',
  userBase: '5M+ users',
  monthlyActiveUsers: '400K+ MAU',
  uptime: '99.9%'
} as const;

// Generate comprehensive metadata
export function generateMetadata(pageTitle?: string, pageDescription?: string, pagePath?: string): Metadata {
  const title = pageTitle ? `${pageTitle} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.defaultTitle;
  const description = pageDescription || SEO_CONFIG.defaultDescription;
  const url = `${SEO_CONFIG.siteUrl}${pagePath || ''}`;
  const imageUrl = `${SEO_CONFIG.siteUrl}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: SEO_CONFIG.keywords.join(', '),
    authors: [{ name: SEO_CONFIG.author, url: SEO_CONFIG.linkedinProfile }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SEO_CONFIG.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SEO_CONFIG.author} - ${SEO_CONFIG.jobTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
    },
    category: 'technology',
    classification: 'Portfolio Website',
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': SEO_CONFIG.siteName,
      'application-name': SEO_CONFIG.siteName,
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/browserconfig.xml',
      'theme-color': '#000000',
    },
  };
}

// Generate structured data (JSON-LD)
export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEO_CONFIG.author,
    jobTitle: SEO_CONFIG.jobTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    image: `${SEO_CONFIG.siteUrl}/me.webp`,
    sameAs: [
      SEO_CONFIG.linkedinProfile,
      SEO_CONFIG.githubProfile,
    ],
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_CONFIG.location,
      addressCountry: 'IN',
    },
    worksFor: {
      '@type': 'Organization',
      name: SEO_CONFIG.company,
      url: 'https://phot.ai',
    },
    knowsAbout: [
      'Node.js',
      'React',
      'TypeScript',
      'JavaScript',
      'AWS',
      'MongoDB',
      'PostgreSQL',
      'Kubernetes',
      'Docker',
      'Microservices',
      'API Development',
      'Cloud Architecture',
      'DevOps',
      'Full Stack Development',
      'Backend Development',
      'Frontend Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Development Engineer',
      description: 'Full Stack Developer specializing in scalable web applications and cloud infrastructure',
      skills: [
        'Node.js',
        'React',
        'TypeScript',
        'AWS',
        'MongoDB',
        'Kubernetes',
        'Docker',
        'Microservices',
        'API Development',
        'Cloud Architecture',
      ],
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      description: 'B.Tech in Computer Science',
    },
  };
}

// Generate sitemap data
export function generateSitemapData() {
  return [
    {
      url: SEO_CONFIG.siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SEO_CONFIG.siteUrl}/admin`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}

// Generate robots.txt content
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SEO_CONFIG.siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block admin areas from indexing
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/

# Allow important files
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /me.webp
Allow: /atharv_gen.pdf
`;
}

// SEO-optimized content helpers
export const SEO_CONTENT = {
  hero: {
    title: 'Full Stack Developer Portfolio',
    subtitle: 'Building Scalable Applications with Modern Technologies',
    description: 'Experienced Full Stack Developer with 3+ years of expertise in Node.js, React, AWS, and cloud architecture. Delivering high-performance applications for 5M+ users with 99.9% uptime.',
  },
  experience: {
    title: 'Professional Experience',
    description: 'Proven track record in full-stack development, cloud architecture, and scalable system design.',
  },
  projects: {
    title: 'Personal Projects',
    description: 'Explore my portfolio of full-stack applications, APIs, and cloud-native solutions built with modern technologies.',
  },
  skills: {
    title: 'Technical Skills',
    description: 'Comprehensive expertise in full-stack development, cloud technologies, and DevOps practices.',
  },
  contact: {
    title: 'Get In Touch',
    description: 'Ready to discuss your next project? Let\'s connect and build something amazing together.',
  },
} as const;

// Generate page-specific SEO content
export function getPageSEOContent(page: keyof typeof SEO_CONTENT) {
  return SEO_CONTENT[page];
}

// Validate SEO configuration
export function validateSEOConfig() {
  const required = ['siteName', 'siteUrl', 'defaultTitle', 'defaultDescription', 'author'];
  const missing = required.filter(key => !SEO_CONFIG[key as keyof typeof SEO_CONFIG]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required SEO configuration: ${missing.join(', ')}`);
  }
  
  return true;
}
