import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface Scroll3DAssemblyProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scatter';
  stagger?: boolean;
}

export const Scroll3DAssembly: React.FC<Scroll3DAssemblyProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  stagger = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            // When scrolled back above, un-arrange so it re-assembles on next scroll
            setIsVisible(false);
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.6],
        rootMargin: '0px 0px -60px 0px'
      }
    );

    observer.observe(el);

    // Subtle scroll parallax tracking
    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine initial unarranged 3D transform based on direction
  const getUnarrangedTransform = () => {
    switch (direction) {
      case 'scatter':
        return 'perspective(1400px) rotateX(24deg) rotateY(-14deg) rotateZ(3deg) translateY(70px) scale(0.92)';
      case 'left':
        return 'perspective(1400px) rotateX(15deg) rotateY(18deg) translateX(-60px) translateY(40px) scale(0.94)';
      case 'right':
        return 'perspective(1400px) rotateX(15deg) rotateY(-18deg) translateX(60px) translateY(40px) scale(0.94)';
      case 'up':
      default:
        return 'perspective(1400px) rotateX(22deg) rotateY(0deg) translateY(60px) scale(0.93)';
    }
  };

  const currentTransform = isVisible
    ? 'perspective(1400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) scale(1)'
    : getUnarrangedTransform();

  return (
    <div
      ref={ref}
      style={{
        transform: currentTransform,
        opacity: isVisible ? 1 : 0.15,
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.75s ease-out ${delay}ms, filter 0.75s ease-out ${delay}ms`,
        willChange: 'transform, opacity, filter',
        transformStyle: 'preserve-3d'
      }}
      className={`scroll-3d-node ${className}`}
    >
      {children}
    </div>
  );
};
