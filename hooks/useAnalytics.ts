import { useCallback, useEffect, useRef } from 'react';
import {
  trackPageView,
  trackComponentView,
  trackUserInteraction,
  trackConversion,
  trackExternalLink,
  trackDownload,
  trackThemeChange,
  trackScrollDepth,
  trackHover,
  trackFormSubmission,
  trackCustomEvent,
  trackComponentVisibility,
  debounceAnalytics,
  ANALYTICS_CATEGORIES,
  ANALYTICS_ACTIONS,
  ANALYTICS_COMPONENTS,
  type AnalyticsEvent,
} from '@/lib/analytics';

// Hook for component-level analytics tracking
export const useAnalytics = (componentName: string, section?: string) => {
  const componentRef = useRef<HTMLElement>(null);
  const visibilityObserver = useRef<IntersectionObserver | null>(null);

  // Track component view when it becomes visible
  useEffect(() => {
    if (componentRef.current) {
      visibilityObserver.current = trackComponentVisibility(componentName, section);
      visibilityObserver.current.observe(componentRef.current);

      return () => {
        if (visibilityObserver.current) {
          visibilityObserver.current.disconnect();
        }
      };
    }
  }, [componentName, section]);

  // Track user interactions
  const trackClick = useCallback(
    (action: string, label?: string, value?: number, customParameters?: Record<string, any>) => {
      trackUserInteraction(action, componentName, label, value, {
        section_name: section,
        ...customParameters,
      });
    },
    [componentName, section]
  );

  // Track hover events
  const trackHoverEvent = useCallback(
    (element: string) => {
      trackHover(componentName, element);
    },
    [componentName]
  );

  // Track external link clicks
  const trackLinkClick = useCallback(
    (url: string, linkText?: string) => {
      trackExternalLink(url, componentName, linkText);
    },
    [componentName]
  );

  // Track downloads
  const trackDownloadEvent = useCallback(
    (fileName: string, fileType?: string) => {
      trackDownload(fileName, componentName, fileType);
    },
    [componentName]
  );

  // Track conversions
  const trackConversionEvent = useCallback(
    (conversionType: string, label?: string, value?: number, customParameters?: Record<string, any>) => {
      trackConversion(conversionType, componentName, label, value, {
        section_name: section,
        ...customParameters,
      });
    },
    [componentName, section]
  );

  // Track form submissions
  const trackFormSubmit = useCallback(
    (formName: string, success: boolean = true) => {
      trackFormSubmission(formName, componentName, success);
    },
    [componentName]
  );

  // Track custom events
  const trackCustom = useCallback(
    (event: Omit<AnalyticsEvent, 'component'>) => {
      trackCustomEvent({
        ...event,
        component: componentName,
        section,
      });
    },
    [componentName, section]
  );

  // Debounced scroll tracking
  const trackScroll = useCallback(
    debounceAnalytics((depth: number) => {
      trackScrollDepth(depth, componentName);
    }, 100),
    [componentName]
  );

  return {
    componentRef,
    trackClick,
    trackHover: trackHoverEvent,
    trackLink: trackLinkClick,
    trackDownload: trackDownloadEvent,
    trackConversion: trackConversionEvent,
    trackFormSubmit,
    trackCustom,
    trackScroll,
  };
};

// Hook for page-level analytics
export const usePageAnalytics = (pageName: string, pagePath?: string) => {
  // Track page view on mount
  useEffect(() => {
    trackPageView(pageName, pagePath);
  }, [pageName, pagePath]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = debounceAnalytics(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > 0) {
        trackScrollDepth(scrollPercent, 'page');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    trackPageView: () => trackPageView(pageName, pagePath),
  };
};

// Hook for theme analytics
export const useThemeAnalytics = () => {
  const trackThemeToggle = useCallback(
    (theme: string) => {
      trackThemeChange(theme, ANALYTICS_COMPONENTS.THEME_TOGGLE);
    },
    []
  );

  return {
    trackThemeToggle,
  };
};

// Hook for contact form analytics
export const useContactAnalytics = () => {
  const trackEmailClick = useCallback(
    (email: string) => {
      trackUserInteraction(
        ANALYTICS_ACTIONS.CLICK,
        ANALYTICS_COMPONENTS.CONTACT,
        'email_click',
        undefined,
        { email_address: email }
      );
    },
    []
  );

  const trackSocialClick = useCallback(
    (platform: string, url: string) => {
      trackExternalLink(url, ANALYTICS_COMPONENTS.CONTACT, `${platform}_profile`);
    },
    []
  );

  const trackResumeDownload = useCallback(
    (fileName: string) => {
      trackDownload(fileName, ANALYTICS_COMPONENTS.CONTACT, 'pdf');
      trackConversion('resume_download', fileName, 1, {
        file_type: 'pdf',
        download_source: 'contact_section',
      });
    },
    []
  );

  return {
    trackEmailClick,
    trackSocialClick,
    trackResumeDownload,
  };
};

// Hook for project analytics
export const useProjectAnalytics = () => {
  const trackProjectView = useCallback(
    (projectName: string, projectStatus: string) => {
      trackComponentView(ANALYTICS_COMPONENTS.PROJECTS, 'project_card', {
        project_name: projectName,
        project_status: projectStatus,
      });
    },
    []
  );

  const trackProjectClick = useCallback(
    (projectName: string, action: string, url?: string) => {
      trackUserInteraction(action, ANALYTICS_COMPONENTS.PROJECTS, projectName, undefined, {
        project_name: projectName,
        project_url: url,
      });
    },
    []
  );

  const trackTechBadgeHover = useCallback(
    (technology: string, projectName: string) => {
      trackHover(ANALYTICS_COMPONENTS.PROJECTS, `tech_badge_${technology}`, {
        project_name: projectName,
        technology,
      });
    },
    []
  );

  return {
    trackProjectView,
    trackProjectClick,
    trackTechBadgeHover,
  };
};

// Hook for skills analytics
export const useSkillsAnalytics = () => {
  const trackSkillHover = useCallback(
    (skillName: string, category: string) => {
      trackHover(ANALYTICS_COMPONENTS.SKILLS, `skill_${skillName}`, {
        skill_name: skillName,
        skill_category: category,
      });
    },
    []
  );

  const trackCategoryView = useCallback(
    (categoryName: string) => {
      trackComponentView(ANALYTICS_COMPONENTS.SKILLS, 'skill_category', {
        category_name: categoryName,
      });
    },
    []
  );

  return {
    trackSkillHover,
    trackCategoryView,
  };
};

// Hook for experience analytics
export const useExperienceAnalytics = () => {
  const trackAchievementView = useCallback(
    (achievement: string, company: string) => {
      trackComponentView(ANALYTICS_COMPONENTS.EXPERIENCE, 'achievement', {
        achievement_name: achievement,
        company_name: company,
      });
    },
    []
  );

  const trackProjectView = useCallback(
    (projectName: string, company: string) => {
      trackComponentView(ANALYTICS_COMPONENTS.EXPERIENCE, 'work_project', {
        project_name: projectName,
        company_name: company,
      });
    },
    []
  );

  return {
    trackAchievementView,
    trackProjectView,
  };
};
