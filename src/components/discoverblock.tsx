import React from "react"
import { MessageCircle } from "lucide-react"

export default function DiscoverBlock() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TAG DISCOVER */}
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">
          Arredamento classico artigianale
        </p>

        {/* TITOLO EDITORIALE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
          Mobili scelti uno a uno, come si faceva una volta
        </h2>

        {/* TESTO EDITORIALE */}
        <div className="max-w-4xl space-y-6 text-neutral-300 leading-relaxed">
          <p>
            Atelier del Mobile nasce a San Michele Mondovì (CN) con un’idea
            semplice ma sempre più rara: selezionare mobili classici di vero
            valore, realizzati in legno massello e capaci di attraversare il
            tempo senza perdere fascino.
          </p>

          <p>
            Non lavoriamo su grandi numeri né su produzioni industriali.
            Ogni armadio, credenza, tavolo o complemento viene valutato
            singolarmente per qualità costruttiva, proporzioni, finiture
            e stato di conservazione.
          </p>

          <p>
            Questo approccio ci permette di offrire arredi autentici,
            solidi e coerenti con ambienti eleganti, sia per abitazioni
            private che per case di rappresentanza.
          </p>

          <p>
            Per i clienti vicini a Mondovì e in Piemonte, la consegna può
            avvenire direttamente da noi. Per il resto d’Italia collaboriamo
            con trasportatori specializzati nel trasporto di mobili,
            garantendo imballaggi professionali e massima sicurezza.
          </p>
        </div>

        {/* CTA DISCOVER */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <a
            href="https://wa.me/393489550024"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3
              px-8 py-4
              bg-green-600 hover:bg-green-700
              rounded-lg
              font-semibold
              transition
            "
          >
            <MessageCircle size={20} />
            Parla direttamente con noi su WhatsApp
          </a>

          <span className="text-sm text-neutral-400 flex items-center">
            Consulenza reale, senza impegno
          </span>
        </div>

      </div>
    </section>
  )
}
