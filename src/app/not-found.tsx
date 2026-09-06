 
 import Image from "next/image";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center relative py-12 px-4">
      {/* Container to restrict image size */}
      <div className="relative w-full max-w-xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/image/Error.png"
          alt="404 Page Not Found"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />

        <div className="overlay absolute inset-0 bg-black/40" />

        <div className="top-label absolute top-4 left-4 text-xs tracking-widest text-white/80">
          CAMBODIA <span>•</span> 404
        </div>

        <section className="content absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <div className="ornament text-yellow-400" aria-hidden="true">
            ✦
          </div>

          <h1 className="text-6xl font-black my-2">៤០៤</h1>

          <p className="khmer-text text-xl font-medium">ទំព័ររកមិនឃើញ</p>

          <p className="english-text text-xs tracking-widest opacity-80 mt-1">PAGE NOT FOUND</p>

          <a href="/" className="home-button mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition">
            <span>ត្រឡប់ទៅទំព័រដើម</span>
            <span className="arrow">→</span>
          </a>
        </section>

        <div className="bottom-label absolute bottom-4 right-4 text-xs tracking-widest text-white/80">ANGKOR WAT</div>
      </div>
    </main>
  );
}