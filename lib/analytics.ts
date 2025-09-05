// Analytics utility functions for Google Analytics 4
// Provides type-safe event tracking across the application

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Event categories for consistent tracking
export const ANALYTICS_CATEGORIES = {
  PAGE_VIEW: 'page_view',
  COMPONENT_VIEW: 'component_view',
  USER_INTERACTION: 'user_interaction',
  CONVERSION: 'conversion',
  NAVIGATION: 'navigation',
  THEME: 'theme',
  DOWNLOAD: 'download',
  EXTERNAL_LINK: 'external_link',
} as const;

// Event actions for consistent tracking
export const ANALYTICS_ACTIONS = {
  VIEW: 'view',
  CLICK: 'click',
  HOVER: 'hover',
  SCROLL: 'scroll',
  DOWNLOAD: 'download',
  OPEN: 'open',
  CLOSE: 'close',
  TOGGLE: 'toggle',
  SUBMIT: 'submit',
  COPY: 'copy',
} as const;

// Component names for tracking
export const ANALYTICS_COMPONENTS = {
  HERO: 'hero',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'personal_projects',
  CONTACT: 'contact',
  THEME_TOGGLE: 'theme_toggle',
  NAVIGATION: 'navigation',
  FOOTER: 'footer',
} as const;

// Analytics event interface
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  component?: string;
  section?: string;
  custom_parameters?: Record<string, any>;
}

// Check if gtag is available
export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page view
export const trackPageView = (pageName: string, pagePath?: string) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', 'page_view', {
    page_title: pageName,
    page_location: pagePath || window.location.href,
    page_path: pagePath || window.location.pathname,
  });
};

// Track component view
export const trackComponentView = (
  component: string,
  section?: string,
  customParameters?: Record<string, any>
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.VIEW, {
    event_category: ANALYTICS_CATEGORIES.COMPONENT_VIEW,
    event_label: component,
    component_name: component,
    section_name: section,
    ...customParameters,
  });
};

// Track user interaction
export const trackUserInteraction = (
  action: string,
  component: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', action, {
    event_category: ANALYTICS_CATEGORIES.USER_INTERACTION,
    event_label: label || component,
    component_name: component,
    action_type: action,
    value: value,
    ...customParameters,
  });
};

// Track conversion events
export const trackConversion = (
  conversionType: string,
  component: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', 'conversion', {
    event_category: ANALYTICS_CATEGORIES.CONVERSION,
    event_label: label || conversionType,
    conversion_type: conversionType,
    component_name: component,
    value: value,
    ...customParameters,
  });
};

// Track external link clicks
export const trackExternalLink = (
  url: string,
  component: string,
  linkText?: string
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.CLICK, {
    event_category: ANALYTICS_CATEGORIES.EXTERNAL_LINK,
    event_label: linkText || url,
    component_name: component,
    link_url: url,
    link_text: linkText,
  });
};

// Track downloads
export const trackDownload = (
  fileName: string,
  component: string,
  fileType?: string
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.DOWNLOAD, {
    event_category: ANALYTICS_CATEGORIES.DOWNLOAD,
    event_label: fileName,
    component_name: component,
    file_name: fileName,
    file_type: fileType,
  });
};

// Track theme changes
export const trackThemeChange = (theme: string, component: string) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.TOGGLE, {
    event_category: ANALYTICS_CATEGORIES.THEME,
    event_label: theme,
    component_name: component,
    theme_name: theme,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number, component: string) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.SCROLL, {
    event_category: ANALYTICS_CATEGORIES.USER_INTERACTION,
    event_label: `${depth}%`,
    component_name: component,
    scroll_depth: depth,
  });
};

// Track hover events
export const trackHover = (component: string, element: string) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.HOVER, {
    event_category: ANALYTICS_CATEGORIES.USER_INTERACTION,
    event_label: element,
    component_name: component,
    hover_element: element,
  });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  component: string,
  success: boolean = true
) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', ANALYTICS_ACTIONS.SUBMIT, {
    event_category: ANALYTICS_CATEGORIES.CONVERSION,
    event_label: formName,
    component_name: component,
    form_name: formName,
    submission_success: success,
  });
};

// Track custom events
export const trackCustomEvent = (event: AnalyticsEvent) => {
  if (!isGtagAvailable()) return;

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    component_name: event.component,
    section_name: event.section,
    value: event.value,
    ...event.custom_parameters,
  });
};

// Utility to debounce analytics events
export const debounceAnalytics = <T extends (...args: any[]) => void>(
  func: T,
  delay: number = 300
): T => {
  let timeoutId: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }) as T;
};

// Track component visibility using Intersection Observer
export const trackComponentVisibility = (
  component: string,
  section?: string,
  threshold: number = 0.5
) => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackComponentView(component, section, {
            visibility_ratio: entry.intersectionRatio,
            bounding_rect: {
              top: entry.boundingClientRect.top,
              bottom: entry.boundingClientRect.bottom,
              left: entry.boundingClientRect.left,
              right: entry.boundingClientRect.right,
            },
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  return observer;
};
