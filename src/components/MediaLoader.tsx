import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface MediaLoaderProps {
  src: string;
  type: 'image' | 'video';
  alt?: string;
  className?: string;
  preload?: boolean;
  placeholder?: string;
  onLoad?: () => void;
}

function MediaLoader({
  src,
  type,
  alt = '',
  className = '',
  preload = false,
  placeholder,
  onLoad
}: MediaLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (!preload && !inView) return;

    const loadMedia = async () => {
      try {
        if (type === 'video' && mediaRef.current instanceof HTMLVideoElement) {
          await mediaRef.current.play();
        }
        setIsLoaded(true);
        onLoad?.();
      } catch (err) {
        console.error('Error loading media:', err);
        setError(true);
      }
    };

    loadMedia();
  }, [inView, preload, type, onLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse">
          <img
            src={placeholder}
            alt="Loading placeholder"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      )}

      {type === 'image' ? (
        <img
          ref={mediaRef as React.RefObject<HTMLImageElement>}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          Failed to load media
        </div>
      )}
    </div>
  );
}

export default MediaLoader;