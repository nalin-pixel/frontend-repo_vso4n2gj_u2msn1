import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import GameGrid from './components/GameGrid';

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (q) => setQuery(q.trim().toLowerCase());

  // We filter on the client for demo purposes (category only for now)
  const filteredCategory = category;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/40 text-slate-900">
      <Navbar onSearch={handleSearch} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Kategori</h2>
          <CategoryTabs active={category} onChange={setCategory} />
        </section>

        <GameGrid filter={filteredCategory} title={category === 'all' ? 'Game Unggulan' : `Kategori: ${category}`} />

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NgopiGame — Hiburan cepat langsung di browser
        </footer>
      </main>
    </div>
  );
}
