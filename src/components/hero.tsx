import React from "react"
{/* HERO */}
<section
  className="relative min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url(/images/hero.webp)" }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* sfumatura inferiore */}
  <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent z-0" />

  {/* CONTENUTO */}
  <div className="relative z-10 w-full max-w-6xl px-6 pt-24 text-center mx-auto">

    {/* LOGO */}
    <div className="flex justify-center mb-12">
      <img
        src="/images/logo.webp"
        alt="Atelier del Mobile"
        className="w-36 md:w-48 drop-shadow-[0_0_14px_rgba(255,200,80,0.35)]"
      />
    </div>

    {/* TITOLO */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
      Mobili classici in legno massello,
      <br className="hidden sm:block" />
      selezionati con cura
    </h1>

    {/* SOTTOTITOLO */}
    <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed">
      Arredi eleganti scelti attentamente per stile, qualità e autenticità.
      <br className="hidden sm:block" />
      Pezzi unici pronti per essere spediti in tutta Italia.
    </p>

    {/* BADGE COME NEL VECCHIO SITO */}
    <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs md:text-sm">

      {[
        "Legno massello selezionato",
        "Pezzi unici o in tiratura limitata",
        "Stile classico e lavorazioni artigianali",
        "Spedizione sicura in tutta Italia",
      ].map((text) => (
        <div
          key={text}
          className="flex items-center gap-2 px-5 py-3
                     bg-black/60 backdrop-blur-md
                     border border-white/20
                     rounded-full text-white shadow-lg"
        >
          ✓ {text}
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 pb-24">
      <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition rounded-md text-white">
        Scopri il Catalogo
      </button>
      <a
        href="https://wa.me/393489550024"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-green-600 hover:bg-green-700 transition rounded-md text-white"
      >
        Chiedi info su WhatsApp
      </a>
    </div>

  </div>
</section>
