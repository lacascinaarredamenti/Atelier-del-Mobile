import React, { useState } from "react"
import { products } from "../data/products"

import SeoHead from "../components/seohead"
import SeoText from "../components/seotext"
import DiscoverContent from "../components/discovercontent"
import SeoCitiesContent from "../components/seoCitiesContent"
import Reviews from "../components/reviews"
import ProductGrid from "../components/productgrid"
import Footer from "../components/footer"
import HowItWorks from "../components/howitworks"

import {
  MessageCircle,
  Check,
  Phone,
  Clock,
} from "lucide-react"

const categories = [
  "Tutti",
  "Armadi",
  "Divani",
  "Tavoli",
  "Set Tavoli/Sedie",
  "Credenze",
  "Comò",
  "Consolle",
  "Sedie",
  "Poltrone",
  "Scrittoio",
  "Librerie",
  "Vetrinette",
  "Cassapanche",
  "Lampade",
]

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Tutti")

  const filteredProducts =
    activeCategory === "Tutti"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <SeoHead category={activeCategory} />

      <div className="min-h-screen bg-black text-white flex relative">

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto pr-48">

          {/* HERO */}
          <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero.webp)" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />

            <div className="relative z-10 w-full max-w-6xl px-6 text-center">
              <img
                src="/images/logo.webp"
                alt="Atelier del Mobile"
                className="mx-auto mb-12 w-36 md:w-48 drop-shadow-[0_0_16px_rgba(255,200,80,0.45)]"
              />

              <h1 className="text-3xl md:text-4xl lg:text-5xl italic font-medium mb-6 text-neutral-200">
                Mobili classici in legno massello,
                <br className="hidden sm:block" />
                selezionati con cura
              </h1>

              <p className="max-w-3xl mx-auto text-neutral-300 mb-10">
                Arredi eleganti scelti attentamente per stile, qualità e autenticità.
                Pezzi unici pronti per essere spediti in tutta Italia.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="#catalogo"
                  className="
                    bg-orange-500/20 backdrop-blur
                    border border-orange-400/40
                    text-orange-100 font-semibold
                    px-8 py-4
                    transition hover:bg-orange-500/30
                  "
                >
                  Scopri il Catalogo
                </a>

                <a
                  href="https://wa.me/393489550024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-emerald-500/20 backdrop-blur
                    border border-emerald-400/40
                    text-emerald-100 font-semibold
                    px-8 py-4
                    transition hover:bg-emerald-500/30
                  "
                >
                  Chiedi info su WhatsApp
                </a>
              </div>
            </div>

            {/* BADGE + CONTATTI */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-[95%] z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-6 mb-8">
                {[
                  "Legno massello selezionato",
                  "Pezzi unici o in tiratura limitata",
                  "Stile classico e lavorazioni artigianali",
                  "Spedizione sicura in tutta Italia",
                ].map((text) => (
                  <div
                    key={text}
                    className="bg-neutral-900 border border-neutral-800 px-4 py-4 flex items-center gap-2"
                  >
                    <Check size={16} className="text-yellow-400" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-8 text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-400" />
                  <strong>348 955 0024</strong>
                </div>

                <div className="w-px h-6 bg-neutral-600" />

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-yellow-400" />
                  <span>Lun – Sab: 8:00 – 18:00</span>
                </div>
              </div>
            </div>
          </section>

          {/* SPAZIO DI TRANSIZIONE (SCELTO DA TE) */}
          <section className="bg-black h-18" />

          {/* ================= CATALOGO ================= */}
          <section
  id="catalogo"
  className="
    bg-black pt-28 mt-28
    animate-[fadeUp_0.8s_ease-out_both]
  "
>
            {/* Divider */}
            <div className="max-w-5xl mx-auto mb-10 px-6">
              <div className="h-px w-full bg-neutral-800" />
            </div>

            {/* Titolo */}
            <h2 className="text-center text-3xl md:text-4xl font-medium mb-16">
              Catalogo
            </h2>

            <ProductGrid products={filteredProducts} />
          </section>

          {/* CONTENUTI */}
          <DiscoverContent category={activeCategory} />
          <HowItWorks />
          <Reviews />
          <SeoCitiesContent />
          <SeoText category={activeCategory} />
          <Footer />

        </main>

        {/* SIDEBAR */}
        <aside className="hidden lg:flex fixed right-0 top-0 w-48 h-screen bg-neutral-900 border-l border-neutral-800">
          <div className="p-6 flex flex-col w-full">
            <h2 className="text-yellow-400 text-lg font-semibold mb-6 text-center">
              Categorie
            </h2>

            <ul className="flex-1 flex flex-col justify-evenly text-sm text-center">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer transition ${
                    activeCategory === cat
                      ? "text-yellow-400 font-semibold"
                      : "text-neutral-300 hover:text-yellow-400"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/393489550024"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed bottom-6 right-[13rem]
            bg-green-600 hover:bg-green-700
            w-14 h-14 rounded-full
            flex items-center justify-center
            shadow-2xl
          "
        >
          <MessageCircle size={26} />
        </a>

      </div>

      {/* ANIMAZIONE */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}
