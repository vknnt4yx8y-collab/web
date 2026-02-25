import { useNews } from '../hooks/useNews';
import { NewsCard } from './NewsCard';
import { Newspaper } from 'lucide-react';

export function NewsSection() {
  const { news, loading, error } = useNews(3);

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-obsidian-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-ember" style={{ filter: 'drop-shadow(0 0 8px #FF4500)' }} />
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider text-white">
              LATEST{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #DC143C, #FF4500)' }}
              >
                NEWS
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto" />
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-obsidian border border-crimson/10 rounded-xl p-6 animate-pulse">
                <div className="h-3 bg-gray-700 rounded w-1/3 mb-4" />
                <div className="h-5 bg-gray-700 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-700 rounded w-full mb-2" />
                <div className="h-3 bg-gray-700 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">Unable to load news. Please try again later.</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No news available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
