import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

function SEOHead({
  title = "Rocky Mountain Tumbling & Cheer | Utah's Premier Gymnastics Facility | Clearfield UT",
  description = "Utah's premier tumbling and cheer facility in Clearfield. Expert coaching, USA Gymnastics certified, recreation & competition classes for all ages. 19,000+ sq ft facility.",
  keywords = "tumbling classes Utah, gymnastics Clearfield, cheer classes Utah, tumbling lessons, gymnastics training, USA Gymnastics certified, competition tumbling, recreation tumbling, private lessons, Clearfield gymnastics, Utah cheer, tumbling facility, power tumbling",
  image = "/hero.jpg",
  url = "https://rockymountaintumbling.com",
  type = "website"
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEOHead;