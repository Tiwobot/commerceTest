'use client';

export default function AboutPage() {
  return (
    <main className="relative max-w-2xl mx-auto pt-32 pb-32 px-4">
      {/* Giant solid color background YANG text */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-extrabold uppercase opacity-30 text-[3rem] md:text-[48.5rem] text-[#b6e700]"
        style={{
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        YANG
      </span>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-8 text-white text-center">
          About Yangfinity
        </h1>
        <p className="mb-4">
          Yangfinity is dedicated to providing Metin2 players with the fastest, most reliable Yang delivery for a wide range of private servers. Our mission is to empower players by making in-game currency accessible, affordable, and secure.
        </p>
        <p className="mb-4">
          We support popular servers such as Elveron, Alturi, Merlis, Helios, Helios2, Levia, Shiva, Dominus, Lupin, Rubinum, Azyrah, Goodtimes, MT2Classic, Lucerna, Laetus, StoneBreakers, WOM, NEWMT2, Fortis2, and more. Our team is passionate about Metin2 and committed to excellent customer service.
        </p>
        <p>
          Whether you’re a new player or a seasoned veteran, Yangfinity is your trusted partner for all your Yang needs. Join our community and experience the difference!
        </p>
      </div>
    </main>
  );
} 