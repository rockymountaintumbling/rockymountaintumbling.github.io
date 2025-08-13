import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    try {
      // Handle GitHub Pages SPA routing
      const search = window.location.search;
      if (search.includes('?/')) {
        // Extract the route from GitHub Pages redirect format
        const searchParams = new URLSearchParams(search);
        const redirectPath = Array.from(searchParams.keys()).find(key => key.startsWith('/'));
        
        if (redirectPath) {
          // Clean up the URL and navigate
          const cleanPath = redirectPath.replace(/~and~/g, '&');
          const hash = window.location.hash;
          
          // Replace the current URL with the clean route
          window.history.replaceState(null, '', cleanPath + hash);
          
          // If there's a hash, scroll to it after a delay
          if (hash) {
            setTimeout(() => {
              const elementId = hash.substring(1);
              const element = document.getElementById(elementId);
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }, 300);
            return; // Don't scroll to top if we have a hash
          }
        }
      }
      
      // Only scroll to top if we're not returning from a sub-page
      if (!window.history.state?.from) {
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = 'auto';
      } else {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    } catch (error) {
      console.warn('Scroll behavior error:', error);
    }
  }, [location]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)