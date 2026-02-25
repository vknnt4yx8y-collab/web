import { useState, useCallback } from 'react';
import { Copy, Flame } from 'lucide-react';
import { useServerStats } from '../hooks/useServerStats';
import { copyToClipboard } from '../utils/clipboard';
import type { ToastMessage } from '../types';

const SERVER_IP = 'play.inferno.net';

interface HeroProps {
  onToast: (toast: Omit<ToastMessage, 'id'>) => void;
}

export function Hero({ onToast }: HeroProps) {
  const { stats, loading } = useServerStats();
  const [copying, setCopying] = useState(false);

  const handleCopy = useCallback(async () => {
    setCopying(true);
    const success = await copyToClipboard(SERVER_IP);
    onToast({
      message: success ? 'IP Kopyalandı!' : 'Kopyalama başarısız!',
      type: success ? 'success' : 'error',
    });
    setTimeout(() => setCopying(false), 1000);
  }, [onToast]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0A0A0A 0%, #1A0505 40%, #0A0A0A 100%)',
        }}
      />

      {/* Lava glow effects */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4500, transparent)' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #DC143C, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Flame
            className="w-20 h-20 text-ember animate-pulse"
            style={{ filter: 'drop-shadow(0 0 20px #FF4500)' }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 text-white"
          style={{ textShadow: '0 0 30px rgba(220, 20, 60, 0.5)' }}>
          WELCOME TO{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #DC143C, #FF4500, #FFA500)',
            }}
          >
            INFERNO
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-medium tracking-wide">
          Forge Your Legend in the Flames
        </p>

        {/* IP Copy Box */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div
            className="flex items-center gap-3 bg-obsidian border border-crimson/50 rounded-lg px-6 py-4 cursor-pointer group hover:border-ember transition-colors duration-300"
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
            aria-label={`Copy server IP: ${SERVER_IP}`}
            style={{ minWidth: '280px' }}
          >
            <span className="font-mono text-lg text-ember-light font-semibold tracking-wider">
              {SERVER_IP}
            </span>
            <Copy
              className={`w-5 h-5 ml-auto transition-all duration-300 ${
                copying ? 'text-green-400 scale-125' : 'text-gray-400 group-hover:text-ember'
              }`}
            />
          </div>

          <button
            onClick={handleCopy}
            className="px-6 py-4 bg-crimson hover:bg-ember text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300 hover:shadow-lg min-w-[44px] min-h-[44px]"
            style={{
              boxShadow: copying ? '0 0 20px #FF4500' : '0 0 10px rgba(220,20,60,0.3)',
            }}
          >
            {copying ? 'Kopyalandı!' : 'IP Kopyala'}
          </button>
        </div>

        {/* Player Count */}
        <div className="flex items-center justify-center gap-3">
          {loading ? (
            <div className="flex items-center gap-2 bg-obsidian/50 border border-obsidian-light rounded-full px-5 py-2.5">
              <div className="w-4 h-4 rounded-full bg-gray-600 animate-pulse" />
              <span className="text-gray-400 text-sm font-medium">Checking server...</span>
            </div>
          ) : stats ? (
            <div
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 border ${
                stats.server_status === 'online'
                  ? 'bg-obsidian/50 border-ember/30'
                  : 'bg-obsidian/50 border-gray-600'
              }`}
              style={
                stats.server_status === 'online'
                  ? { boxShadow: '0 0 15px rgba(255,69,0,0.2)' }
                  : undefined
              }
            >
              <span className="text-xl">🔥</span>
              <span className={`font-bold text-lg ${stats.server_status === 'online' ? 'text-ember-light' : 'text-gray-400'}`}>
                {stats.player_count.toLocaleString()}
              </span>
              <span className="text-gray-300 text-sm">Players Online</span>
              <span
                className={`w-2 h-2 rounded-full ml-1 ${
                  stats.server_status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-500'
                }`}
              />
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Server status unavailable</div>
          )}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 animate-bounce">
          <div className="w-0.5 h-12 bg-gradient-to-b from-ember to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
