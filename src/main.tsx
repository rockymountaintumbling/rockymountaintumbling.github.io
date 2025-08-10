import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// GitHub Pages SPA support
function handleGitHubPagesSPA() {
  const search = window.location.search;
  if (search) {
    const query = new URLSearchParams(search);
    const redirect = query.get('redirect') || query.get('/');
    if (redirect) {
      const newUrl = redirect.replace(/~and~/g, '&');
      window.history.replaceState(null, '', newUrl);
    }
  }
}

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

// Handle GitHub Pages SPA routing before React renders
handleGitHubPagesSPA();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)