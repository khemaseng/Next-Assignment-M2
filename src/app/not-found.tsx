import Image from "next/image";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <Image
        src="/image/Angkor.png"
        alt=""
        fill
        priority
        className="background-image"
        sizes="100vw"
      />

      <div className="overlay" />

      <div className="top-label">
        CAMBODIA <span>•</span> 404
      </div>

      <section className="content">
        <div className="ornament" aria-hidden="true">
          ✦
        </div>

        <h1>៤០៤</h1>

        <p className="khmer-text">ទំព័ររកមិនឃើញ</p>

        <p className="english-text">PAGE NOT FOUND</p>

        <a href="/" className="home-button">
          <span>ត្រឡប់ទៅទំព័រដើម</span>
          <span className="arrow">→</span>
        </a>
      </section>

      <div className="bottom-label">ANGKOR WAT</div>
    </main>
  );
}
