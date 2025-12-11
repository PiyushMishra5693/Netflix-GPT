import { Link } from "react-router-dom";
export default function ErrorPage({ status = 404, title = "Page not found", message = "Sorry — we can't find that page. Try returning home or refreshing the page." }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -left-24 -top-24 opacity-20 w-96 h-96 transform rotate-12" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff0047" />
              <stop offset="100%" stopColor="#ff8a00" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="250" fill="url(#g1)" />
        </svg>
        <svg className="absolute right-0 bottom-0 opacity-10 w-1/2 h-1/2 transform scale-125" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="260" fill="#111827" />
        </svg>
      </div>

      <section className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/6 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-8">

      
          <div className="flex-shrink-0 w-full md:w-1/3 text-center">
            <div className="inline-flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-red-600 to-pink-500 shadow-xl transform transition-transform duration-500 hover:scale-105">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight">{status}</span>
            </div>
          </div>

          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm md:text-base text-gray-300 mb-6">{message}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-600/30 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition"
              >
                {/* Home Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
                </svg>
                <Link to={"/"}>Go to Home</Link>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/6 text-white px-5 py-3 rounded-lg transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v6h6M20 20v-6h-6" />
                </svg>
                Retry
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              <p>If you think this is a bug, please <a href="mailto:support@netflix.com" className="underline">contact support</a> or check <a href="/status" className="underline">status</a> for outages.</p>
            </div>
          </div>

        </div>

        {/* subtle footer */}
        <footer className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Netflix — All rights reserved</footer>
      </section>

    </main>
  );
}
