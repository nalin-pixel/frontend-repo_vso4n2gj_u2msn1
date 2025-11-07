const CATEGORIES = [
  { key: 'all', label: 'Semua' },
  { key: 'puzzle', label: 'Puzzle' },
  { key: 'arcade', label: 'Arcade' },
  { key: 'idle', label: 'Santai' },
  { key: 'card', label: 'Kartu' },
];

export default function CategoryTabs({ active, onChange }) {
  return (
    <div id="categories" className="w-full overflow-x-auto">
      <div className="flex items-center gap-2 min-w-max">
        {CATEGORIES.map((c) => {
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              onClick={() => onChange?.(c.key)}
              className={
                `px-4 py-2 rounded-full text-sm border transition-colors ` +
                (isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300')
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
