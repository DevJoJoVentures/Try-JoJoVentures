import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailsRef = useRef<HTMLDivElement[]>([]);
  const trailCount = 5;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      // Update main cursor
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }

        // Update trails with delay
        cursorTrailsRef.current.forEach((trail, index) => {
          setTimeout(() => {
            if (trail) {
              trail.style.left = `${e.clientX}px`;
              trail.style.top = `${e.clientY}px`;
            }
          }, (index + 1) * 50);
        });
      });
    };

    // Handle cursor visibility
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorTrailsRef.current.forEach(trail => {
        if (trail) trail.style.opacity = '1';
      });
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorTrailsRef.current.forEach(trail => {
        if (trail) trail.style.opacity = '0';
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Handle hover states
    const handleElementHover = () => {
      if (cursor) cursor.classList.add('cursor-hover');
    };

    const handleElementLeave = () => {
      if (cursor) cursor.classList.remove('cursor-hover');
    };

    const elements = document.querySelectorAll('a, button');
    elements.forEach(element => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      elements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      {Array.from({ length: trailCount }).map((_, index) => (
        <div
          key={index}
          ref={el => {
            if (el) cursorTrailsRef.current[index] = el;
          }}
          className="cursor-trail"
          style={{
            opacity: 1 - (index / trailCount),
            transition: `all ${80 + index * 20}ms cubic-bezier(0.17, 0.67, 0.83, 0.67)`
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;