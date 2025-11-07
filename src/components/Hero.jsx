import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[480px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Game ringan, seru, dan langsung main
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Temukan koleksi game casual yang cepat dimuat dan siap dimainkan di browser — tanpa download.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#featured" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors">
              Jelajahi Game
            </a>
            <a href="#categories" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-900 font-medium hover:bg-white transition-colors">
              Kategori Populer
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
