import { useRef, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import { observeElement } from '../utils/animations';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    cardRef.current.style.opacity = '0';
    cardRef.current.style.transform = 'translateY(20px)';
    const el = cardRef.current;
    const timer = setTimeout(() => {
      const cleanup = observeElement(el, 'is-visible');
      return cleanup;
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-obsidian border border-crimson/30 rounded-xl p-6 hover:border-ember/70 transition-all duration-300 cursor-default"
      style={{
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(255,69,0,0.3), 0 0 40px rgba(220,20,60,0.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div className="mb-4 inline-flex p-3 rounded-lg bg-crimson-dark/30 border border-crimson/20 group-hover:border-ember/40 transition-colors duration-300">
        <Icon
          className="w-8 h-8 text-ember group-hover:text-ember-bright transition-colors duration-300"
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,69,0,0.5))' }}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-black uppercase tracking-wide text-white mb-2 group-hover:text-ember-light transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
    </div>
  );
}
