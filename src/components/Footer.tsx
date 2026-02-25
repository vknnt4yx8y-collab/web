import { Flame, Youtube, Twitter, MessageCircle, FileText, HelpCircle, Users, Activity } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Rules', href: '#rules' },
  { label: 'Support / Tickets', href: '#support' },
  { label: 'Staff Team', href: '#staff' },
  { label: 'Server Status', href: '#status' },
];

const SOCIAL_LINKS = [
  { label: 'Discord', href: '#discord', icon: MessageCircle, highlight: true },
  { label: 'YouTube', href: '#youtube', icon: Youtube, highlight: false },
  { label: 'Twitter', href: '#twitter', icon: Twitter, highlight: false },
];

export function Footer() {
  return (
    <footer className="bg-obsidian-dark border-t border-crimson/20 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame
                className="w-7 h-7 text-ember"
                style={{ filter: 'drop-shadow(0 0 8px #FF4500)' }}
              />
              <span className="text-lg font-black uppercase tracking-wider text-white">
                INFERNO
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              The ultimate Minecraft server experience with OSRS-style gameplay, custom quests, and intense PvP.
            </p>
            <p className="text-gray-600 text-xs">
              © 2026 Inferno Server. All rights reserved.
            </p>
            <a
              href="#terms"
              className="text-gray-500 text-xs hover:text-ember transition-colors duration-200 mt-1 inline-block"
            >
              Terms of Service
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-ember mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-ember-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.label === 'Rules' && <FileText className="w-3.5 h-3.5 group-hover:text-ember transition-colors" />}
                    {link.label === 'Support / Tickets' && <HelpCircle className="w-3.5 h-3.5 group-hover:text-ember transition-colors" />}
                    {link.label === 'Staff Team' && <Users className="w-3.5 h-3.5 group-hover:text-ember transition-colors" />}
                    {link.label === 'Server Status' && <Activity className="w-3.5 h-3.5 group-hover:text-ember transition-colors" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-ember mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, highlight }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`flex items-center gap-3 text-sm font-medium transition-all duration-200 group ${
                      highlight
                        ? 'text-white hover:text-ember-bright'
                        : 'text-gray-400 hover:text-ember-light'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 ${
                        highlight
                          ? 'bg-crimson/20 border-crimson/40 group-hover:border-ember group-hover:bg-ember/10'
                          : 'bg-obsidian-light border-obsidian-light group-hover:border-ember/30 group-hover:bg-ember/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    {label}
                    {highlight && (
                      <span className="ml-auto text-xs font-bold text-crimson bg-crimson/10 border border-crimson/30 px-2 py-0.5 rounded-full">
                        JOIN
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-obsidian-light pt-6">
          <div className="w-32 h-px bg-gradient-to-r from-crimson to-transparent mx-auto" />
        </div>
      </div>
    </footer>
  );
}
