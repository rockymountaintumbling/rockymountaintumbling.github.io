import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDeepLink() {
  const location = useLocation();

  useEffect(() => {
    try {
      // Handle hash fragments for deep linking
      if (location.hash) {
        const elementId = location.hash.substring(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        
        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    } catch (error) {
      console.warn('Deep link navigation error:', error);
    }
  }, [location.pathname, location.hash]);
}