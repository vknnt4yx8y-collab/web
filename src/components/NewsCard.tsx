import { Calendar, Tag, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group bg-obsidian border border-crimson/20 rounded-xl p-6 hover:border-ember/50 transition-all duration-300 flex flex-col"
      style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(220,20,60,0.15)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Meta */}
      <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {formatDate(news.date)}
        </span>
        <span className="flex items-center gap-1.5 text-ember-light bg-crimson-dark/30 px-2 py-0.5 rounded-full border border-crimson/20">
          <Tag className="w-3 h-3" />
          {news.patch_version}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-black uppercase tracking-wide text-white mb-3 group-hover:text-ember-light transition-colors duration-300">
        {news.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {truncateText(news.excerpt, 150)}
      </p>

      {/* Read More */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-ember hover:text-ember-bright text-sm font-semibold uppercase tracking-wide transition-colors duration-200 group/link"
      >
        Read More
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
      </a>

      {/* Bottom accent */}
      <div className="mt-4 h-px bg-gradient-to-r from-crimson/40 to-transparent" />
    </article>
  );
}
