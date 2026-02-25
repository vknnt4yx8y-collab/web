import { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import type { DeepDiveContent } from '../types';

interface DeepDiveSectionProps {
  content: DeepDiveContent;
  imageLeft?: boolean;
}

export function DeepDiveSection({ content, imageLeft = false }: DeepDiveSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const ImageBlock = (
    <div className="relative rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:min-h-[360px]">
      {/* Gradient placeholder image */}
      <div
        className="absolute inset-0"
        style={{ background: content.imagePlaceholder }}
        aria-label={content.imageAlt}
        role="img"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Decorative border glow */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{ boxShadow: 'inset 0 0 30px rgba(220,20,60,0.2)' }}
      />
    </div>
  );

  const TextBlock = (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-4">
        {content.title}
      </h2>
      <p className="text-gray-300 text-lg mb-5 leading-relaxed">{content.description}</p>

      {/* Bullet points */}
      <ul className="mb-8 space-y-3">
        {content.bulletPoints.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300">
            <span className="text-ember mt-0.5 flex-shrink-0">💀</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={content.ctaLink}
        className="inline-flex items-center gap-2 self-start px-6 py-3 bg-crimson hover:bg-ember text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 min-h-[44px]"
        style={{ boxShadow: '0 0 15px rgba(220,20,60,0.3)' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 25px rgba(255,69,0,0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 15px rgba(220,20,60,0.3)';
        }}
      >
        {content.ctaText}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #110505 50%, #0A0A0A 100%)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageLeft ? 'lg:grid-flow-col' : ''}`}>
          {imageLeft ? (
            <>
              {ImageBlock}
              {TextBlock}
            </>
          ) : (
            <>
              {TextBlock}
              {ImageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
