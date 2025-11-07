import { Rocket, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 text-lg select-none">NgopiGame</span>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Cari game cepat..."
              className="pl-9 pr-3 py-2 w-72 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Cari
          </button>
        </form>
      </div>
    </header>
  );
}
