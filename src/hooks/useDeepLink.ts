import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDeepLink() {
  const location = useLocation();

  useEffect(() => {
    try {
      // Handle hash fragments for deep linking with longer delay for GitHub Pages
      const timer = setTimeout(() => {
        if (location.hash) {
          const elementId = location.hash.substring(1); // Remove the # symbol
          const element = document.getElementById(elementId);
          
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 500); // Increased delay for GitHub Pages
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.warn('Deep link navigation error:', error);
    }
  }, [location.pathname, location.hash]);
}