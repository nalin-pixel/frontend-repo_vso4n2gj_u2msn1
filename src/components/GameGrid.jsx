const GAMES = [
  {
    id: 'puzzle-1',
    title: 'Block Merge',
    category: 'puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1615493504816-2e3b3c86d98a?q=80&w=900&auto=format&fit=crop',
    description: 'Satukan blok angka untuk raih skor tertinggi.'
  },
  {
    id: 'arcade-1',
    title: 'Neon Dash',
    category: 'arcade',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop',
    description: 'Hindari rintangan dalam kecepatan tinggi.'
  },
  {
    id: 'idle-1',
    title: 'Coffee Tycoon',
    category: 'idle',
    thumbnail: 'https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=900&auto=format&fit=crop',
    description: 'Bangun empire kedai kopi santaimu.'
  },
  {
    id: 'card-1',
    title: 'Solo Cards',
    category: 'card',
    thumbnail: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=900&auto=format&fit=crop',
    description: 'Klasik kartu solo yang menenangkan.'
  },
  {
    id: 'puzzle-2',
    title: 'Color Link',
    category: 'puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1539316878477-5a5b6666b6a3?q=80&w=900&auto=format&fit=crop',
    description: 'Hubungkan warna tanpa saling bertabrakan.'
  },
  {
    id: 'arcade-2',
    title: 'Sky Rider',
    category: 'arcade',
    thumbnail: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=900&auto=format&fit=crop',
    description: 'Terbang melintasi langit cyber penuh bahaya.'
  }
];

export default function GameGrid({ filter = 'all', title = 'Game Unggulan' }) {
  const list = GAMES.filter((g) => (filter === 'all' ? true : g.category === filter));

  return (
    <section id="featured" className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Lihat semua</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((g) => (
          <article key={g.id} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img src={g.thumbnail} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-900">{g.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 capitalize">{g.category}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">{g.description}</p>
              <div className="mt-3">
                <a href="#" className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors">
                  Mainkan
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
