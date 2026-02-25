import { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { DeepDiveSection } from './components/DeepDiveSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import type { ToastMessage, DeepDiveContent } from './types';

const INTERACTIVE_WORLD: DeepDiveContent = {
  title: 'The Interactive World',
  description: 'Explore a living, breathing world shaped by your actions and the community around you.',
  bulletPoints: [
    'Faction claims and territory protection',
    'Custom Nether spawn area with unique biomes',
    'Live interactive map updated in real time',
  ],
  ctaText: 'View Live Map',
  ctaLink: '#map',
  imagePlaceholder: 'linear-gradient(135deg, #1A0505 0%, #2A0A0A 30%, #0A1A0A 60%, #1A1A0A 100%)',
  imageAlt: 'Inferno interactive world map',
};

const LORE_AND_QUESTS: DeepDiveContent = {
  title: 'The Lore & Quests',
  description: 'Uncover the ancient history of Inferno through immersive quests and rich storytelling.',
  bulletPoints: [
    'Clue Scroll treasure hunts across the world',
    'Storyline quests with meaningful rewards',
    'Custom achievement system with prestige ranks',
  ],
  ctaText: 'Read the Wiki',
  ctaLink: '#wiki',
  imagePlaceholder: 'linear-gradient(135deg, #1A1505 0%, #2A1A0A 30%, #1A0A1A 60%, #0A0A2A 100%)',
  imageAlt: 'Ancient scrolls and quest lore',
};

function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-dark">
      <Navbar />
      <main>
        <Hero onToast={handleToast} />
        <FeatureGrid />
        <DeepDiveSection content={INTERACTIVE_WORLD} imageLeft={true} />
        <DeepDiveSection content={LORE_AND_QUESTS} imageLeft={false} />
        <NewsSection />
      </main>
      <Footer />
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export default App;
