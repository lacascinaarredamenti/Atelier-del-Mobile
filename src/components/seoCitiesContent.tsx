import React from "react"

const cities = [
  "Torino",
  "Milano",
  "Genova",
  "Savona",
  "Imperia",
  "La Spezia",
  "Cuneo",
  "Asti",
  "Alessandria",
  "Novara",
  "Vercelli",
  "Biella",
  "Verbania",
  "Bergamo",
  "Brescia",
  "Como",
  "Varese",
  "Monza",
  "Pavia",
]

export default function SeoCitiesContent() {
  return (
    <section className="bg-neutral-950 py-28 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-100">
            Mobili classici artigianali in Piemonte, Liguria, Lombardia e Nord Italia
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Atelier del Mobile seleziona mobili classici artigianali in legno massello
            per clienti in tutto il Nord Italia. Operiamo da San Michele Mondovì (CN),
            nel cuore del Piemonte, con consegne dirette nelle zone vicine e spedizioni
            sicure in tutta Italia tramite trasportatori specializzati nel trasporto mobili.
          </p>
        </div>

        {/* TESTO SEO PROFONDO */}
        <div className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed">

          <p>
            I mobili classici artigianali selezionati da Atelier del Mobile rappresentano
            una scelta concreta per chi cerca arredamento classico di qualità superiore.
            Ogni mobile viene valutato per struttura, materiali, essenze di legno massello,
            lavorazioni manuali e qualità costruttiva reale.
          </p>

          <p>
            Selezioniamo armadi classici, tavoli classici in legno massello, credenze
            artigianali, librerie classiche, sedie classiche, poltrone e complementi
            d’arredo destinati a mantenere valore estetico e strutturale nel tempo.
          </p>

          <p>
            Atelier del Mobile serve clienti che cercano mobili classici artigianali
            in Piemonte, Liguria, Lombardia e in tutto il Nord Italia, con particolare
            richiesta nelle principali città del territorio.
          </p>

          {/* GRID CITTA SEO */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-4">
              Zone dove serviamo regolarmente clienti
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-neutral-400">
              {cities.map((city) => (
                <span key={city}>
                  • Mobili classici artigianali {city}
                </span>
              ))}
            </div>
          </div>

          <p>
            Per i clienti in Piemonte possiamo spesso organizzare consegne dirette.
            Per il resto d’Italia utilizziamo trasportatori specializzati nel trasporto
            mobili, con imballaggi professionali progettati per proteggere struttura,
            finiture e parti delicate durante il trasporto.
          </p>

          <p>
            L’arredamento classico artigianale rappresenta un investimento reale nel
            tempo. I mobili in legno massello possono essere restaurati, mantenuti e
            valorizzati anche dopo decenni, mantenendo solidità strutturale e valore estetico.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#catalogo"
            className="
              inline-block
              bg-yellow-500 hover:bg-yellow-400
              text-black
              font-semibold
              px-8 py-3
              rounded-lg
              transition
            "
          >
            Scopri i mobili disponibili ora
          </a>
        </div>

      </div>
    </section>
  )
}
