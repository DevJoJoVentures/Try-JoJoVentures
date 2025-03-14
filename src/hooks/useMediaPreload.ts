import { useEffect, useState } from 'react';

interface PreloadOptions {
  type: 'image' | 'video';
  onProgress?: (progress: number) => void;
}

export function useMediaPreload(src: string, options: PreloadOptions) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) return;

    const preload = async () => {
      try {
        if (options.type === 'image') {
          const img = new Image();
          img.src = src;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        } else if (options.type === 'video') {
          const video = document.createElement('video');
          video.preload = 'auto';
          
          await new Promise((resolve, reject) => {
            video.onloadeddata = resolve;
            video.onerror = reject;
            
            // Track loading progress
            video.addEventListener('progress', () => {
              if (video.buffered.length > 0) {
                const progress = (video.buffered.end(0) / video.duration) * 100;
                setProgress(progress);
                options.onProgress?.(progress);
              }
            });
            
            video.src = src;
          });
        }
        
        setIsLoaded(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load media'));
      }
    };

    preload();
  }, [src, options]);

  return { isLoaded, progress, error };
}

export default useMediaPreload;