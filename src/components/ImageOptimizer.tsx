import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  aboveFold?: boolean;
}

function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjY2NjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  aboveFold
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || aboveFold);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is within first 1000px of the page
  useEffect(() => {
    if (!aboveFold && imgRef.current && !priority) {
      const rect = imgRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      if (elementTop <= 1000) {
        setIsInView(true);
      }
    }
  }, [aboveFold, priority]);
  // For priority images, start loading immediately
  useEffect(() => {
    if ((priority || aboveFold) && src !== placeholder) {
      setCurrentSrc(src);
      setIsLoaded(true);
    }
  }, [priority, aboveFold, src, placeholder]);

  useEffect(() => {
    if (!priority && !aboveFold && imgRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '150px' }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [priority, aboveFold]);

  useEffect(() => {
    if (isInView && src !== placeholder) {
      const img = new Image();
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, placeholder]);

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-75'
      }`}
      width={width}
      height={height}
      loading={priority || aboveFold ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export default OptimizedImage;