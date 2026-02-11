import React from "react"
import {
  Search,
  MessageCircle,
  FileText,
  Truck,
  Phone,
} from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* TAG */}
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">
          Come funziona
        </p>

        {/* TITOLO */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Dal primo contatto alla consegna, in 4 passaggi
        </h2>

        {/* SOTTOTITOLO */}
        <p className="text-neutral-400 max-w-3xl mx-auto mb-20">
          Ti seguiamo passo dopo passo: informazioni chiare, foto reali e
          supporto diretto. Spedizione su richiesta in tutta Italia.
        </p>

        {/* CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* 1 */}
          <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 px-6 py-8 text-left">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 border border-yellow-400/30 mb-6">
              <Search className="text-yellow-400" size={22} />
            </div>
            <h3 className="font-semibold mb-2">Scopri il mobile</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Sfoglia il catalogo, guarda foto reali e descrizioni dettagliate.
              Apri la scheda del prodotto che ti interessa.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 px-6 py-8 text-left">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 border border-yellow-400/30 mb-6">
              <MessageCircle className="text-yellow-400" size={22} />
            </div>
            <h3 className="font-semibold mb-2">Contattaci</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Scrivici su WhatsApp o chiamaci: ti inviamo foto aggiuntive,
              misure, dettagli e confermiamo la disponibilità.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 px-6 py-8 text-left">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 border border-yellow-400/30 mb-6">
              <FileText className="text-yellow-400" size={22} />
            </div>
            <h3 className="font-semibold mb-2">Preventivo e conferma</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Ti forniamo il prezzo finale e, se serve, il preventivo di
              spedizione. Confermi quando sei tranquillo.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 px-6 py-8 text-left">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 border border-yellow-400/30 mb-6">
              <Truck className="text-yellow-400" size={22} />
            </div>
            <h3 className="font-semibold mb-2">Consegna sicura</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Imballaggi professionali e spedizione in tutta Italia. In
              alternativa puoi ritirare di persona a Mondovì.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/393489550024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2
                       bg-yellow-500 hover:bg-yellow-400
                       text-black font-semibold
                       px-6 py-3 transition"
          >
            <MessageCircle size={18} />
            Scrivici su WhatsApp
          </a>

          <a
            href="tel:+393489550024"
            className="inline-flex items-center justify-center gap-2
                       bg-neutral-800 hover:bg-neutral-700
                       border border-neutral-700
                       text-white font-semibold
                       px-6 py-3 transition"
          >
            <Phone size={18} />
            Chiama: 348 955 0024
          </a>
        </div>

      </div>
    </section>
  )
}
