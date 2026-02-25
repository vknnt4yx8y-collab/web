import { Pickaxe, Coins, Swords, Skull } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const FEATURES = [
  {
    icon: Pickaxe,
    title: 'OSRS Skilling & Slayer',
    description: 'Master traditional skills, complete slayer tasks, and earn prestigious capes',
  },
  {
    icon: Coins,
    title: 'The Grand Exchange',
    description: 'Trade freely in our player-driven economy. Buy, sell, flip items for profit',
  },
  {
    icon: Swords,
    title: 'High-Stakes Duels',
    description: 'Challenge players in the arena. Risk gear, earn glory and rewards',
  },
  {
    icon: Skull,
    title: 'Wilderness & Bosses',
    description: 'Brave dangerous zones, defeat powerful bosses, claim legendary loot',
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-obsidian-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wider text-white mb-4">
            WHAT AWAITS{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #DC143C, #FF4500)' }}
            >
              YOU
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
