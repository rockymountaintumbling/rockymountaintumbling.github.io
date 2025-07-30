import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    // Only scroll to top if we're not returning from a sub-page
    if (!window.history.state?.from) {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'auto';
    } else {
      document.documentElement.style.scrollBehavior = 'smooth';
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