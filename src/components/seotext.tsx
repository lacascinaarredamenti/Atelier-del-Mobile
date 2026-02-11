import React, { useState } from "react"

type Props = {
  category?: string
}

type SeoBlock = {
  title: string
  text: string
}

type SeoData = {
  title: string
  intro: string
  blocks: SeoBlock[]
}

const SEO_CONTENT: Record<string, SeoData> = {
  Tutti: {
    title: "Arredamento classico artigianale in legno massello",
    intro:
      "Atelier del Mobile seleziona mobili classici artigianali di alta qualità, realizzati in legno massello e pensati per ambienti eleganti, raffinati e senza tempo.",
    blocks: [
      {
        title: "Arredamento classico artigianale a San Michele Mondovì (CN)",
        text:
          "Atelier del Mobile opera a San Michele Mondovì, in provincia di Cuneo, ed è un punto di riferimento per l’arredamento classico artigianale in Piemonte. Offriamo consulenza personalizzata e seguiamo direttamente i clienti delle zone limitrofe.",
      },
      {
        title: "Mobili classici artigianali in Piemonte e Nord Italia",
        text:
          "Serviamo clienti in tutto il Piemonte, oltre a Liguria e Lombardia, selezionando mobili classici per qualità costruttiva, materiali pregiati ed equilibrio delle proporzioni.",
      },
      {
        title: "Spedizione di mobili classici in tutta Italia",
        text:
          "Spediamo mobili classici artigianali in tutta Italia tramite corrieri specializzati. Nelle zone vicine a Mondovì, la consegna può essere effettuata direttamente da noi.",
      },
    ],
  },

  Armadi: {
    title: "Armadi classici artigianali in legno massello",
    intro:
      "Gli armadi classici artigianali in legno massello rappresentano una scelta di eleganza, solidità e funzionalità per ambienti raffinati.",
    blocks: [
      {
        title: "Armadi classici artigianali a Mondovì e in provincia di Cuneo",
        text:
          "Proponiamo armadi classici artigianali selezionati a Mondovì e in tutta la provincia di Cuneo, curati nei dettagli e progettati per durare nel tempo.",
      },
      {
        title: "Spedizione armadi classici in tutta Italia",
        text:
          "Gli armadi classici vengono spediti in tutta Italia con imballaggi professionali e trasporti dedicati, ideali anche per lunghe distanze.",
      },
    ],
  },

  Divani: {
    title: "Divani classici artigianali per ambienti eleganti",
    intro:
      "I divani classici artigianali uniscono comfort, qualità costruttiva e stile senza tempo per salotti raffinati.",
    blocks: [
      {
        title: "Divani classici artigianali in Piemonte",
        text:
          "Selezioniamo divani classici artigianali per clienti in Piemonte, ideali per arredare salotti eleganti con materiali di qualità e finiture curate.",
      },
      {
        title: "Spedizione divani classici in tutta Italia",
        text:
          "I divani vengono spediti in tutta Italia con trasporti specializzati per garantire protezione e integrità.",
      },
    ],
  },

  Tavoli: {
    title: "Tavoli classici artigianali in legno massello",
    intro:
      "I tavoli classici artigianali sono il cuore della zona giorno, unendo solidità, proporzioni armoniose e stile senza tempo.",
    blocks: [
      {
        title: "Tavoli classici per sale da pranzo eleganti",
        text:
          "Proponiamo tavoli classici in legno massello ideali per sale da pranzo e ambienti conviviali, selezionati per qualità e lavorazioni artigianali.",
      },
      {
        title: "Spedizione tavoli classici in tutta Italia",
        text:
          "I tavoli classici vengono spediti in tutta Italia con trasporti dedicati e imballaggi professionali.",
      },
    ],
  },

  "Set Tavoli/Sedie": {
    title: "Set tavoli e sedie classici artigianali coordinati",
    intro:
      "I set tavoli e sedie classici artigianali garantiscono armonia estetica e funzionalità negli ambienti conviviali.",
    blocks: [
      {
        title: "Set classici per sale da pranzo eleganti",
        text:
          "Selezioniamo set tavolo e sedie coordinati per sale da pranzo classiche, curando proporzioni, materiali e comfort.",
      },
      {
        title: "Spedizione set tavolo e sedie in tutta Italia",
        text:
          "I set vengono spediti in tutta Italia con imballaggi protettivi e trasporti specializzati.",
      },
    ],
  },

  Credenze: {
    title: "Credenze classiche artigianali in legno massello",
    intro:
      "Le credenze classiche artigianali uniscono funzionalità ed estetica, valorizzando soggiorni e sale da pranzo.",
    blocks: [
      {
        title: "Credenze classiche per soggiorni eleganti",
        text:
          "Proponiamo credenze classiche in legno massello per ambienti raffinati e arredamenti di gusto tradizionale.",
      },
      {
        title: "Spedizione credenze classiche in tutta Italia",
        text:
          "Le credenze vengono spedite in tutta Italia con imballaggi professionali per garantirne la sicurezza.",
      },
    ],
  },

  Comò: {
    title: "Comò classici artigianali in legno massello",
    intro:
      "I comò classici artigianali sono ideali per camere eleganti, combinando capienza, solidità e stile.",
    blocks: [
      {
        title: "Comò classici per camere da letto",
        text:
          "Selezioniamo comò classici artigianali in legno massello per camere raffinate e arredamenti tradizionali.",
      },
      {
        title: "Spedizione comò classici in tutta Italia",
        text:
          "I comò vengono spediti in tutta Italia con trasporti protetti e imballaggi su misura.",
      },
    ],
  },

  Consolle: {
    title: "Consolle classiche artigianali per ingressi eleganti",
    intro:
      "Le consolle classiche artigianali arredano ingressi e corridoi con equilibrio e raffinatezza.",
    blocks: [
      {
        title: "Consolle classiche per ambienti di rappresentanza",
        text:
          "Proponiamo consolle classiche in legno massello per ingressi e spazi di rappresentanza.",
      },
      {
        title: "Spedizione consolle classiche in tutta Italia",
        text:
          "Le consolle vengono spedite in tutta Italia con imballaggi protettivi e trasporti dedicati.",
      },
    ],
  },

  Sedie: {
    title: "Sedie classiche artigianali per ambienti raffinati",
    intro:
      "Le sedie classiche artigianali completano l’arredo con equilibrio, comfort e materiali di qualità.",
    blocks: [
      {
        title: "Sedie classiche abbinate a tavoli eleganti",
        text:
          "Selezioniamo sedie classiche in legno massello abbinate a tavoli e sale da pranzo eleganti.",
      },
      {
        title: "Spedizione sedie classiche in tutta Italia",
        text:
          "Le sedie vengono spedite in tutta Italia con imballaggi protettivi.",
      },
    ],
  },

  Poltrone: {
    title: "Poltrone classiche artigianali per salotti eleganti",
    intro:
      "Le poltrone classiche artigianali offrono comfort e stile per salotti e zone living di pregio.",
    blocks: [
      {
        title: "Poltrone classiche per ambienti raffinati",
        text:
          "Proponiamo poltrone classiche selezionate per qualità dei materiali e comodità della seduta.",
      },
      {
        title: "Spedizione poltrone classiche in tutta Italia",
        text:
          "Le poltrone vengono spedite in tutta Italia con trasporti dedicati.",
      },
    ],
  },

  Scrittoio: {
    title: "Scrittoi classici artigianali per studi eleganti",
    intro:
      "Gli scrittoi classici artigianali arredano studi e ambienti professionali con carattere e funzionalità.",
    blocks: [
      {
        title: "Scrittoi classici in legno massello",
        text:
          "Selezioniamo scrittoi classici artigianali per studi raffinati e ambienti di lavoro eleganti.",
      },
      {
        title: "Spedizione scrittoi classici in tutta Italia",
        text:
          "Gli scrittoi vengono spediti in tutta Italia con imballaggi protettivi.",
      },
    ],
  },

  Librerie: {
    title: "Librerie classiche artigianali in legno massello",
    intro:
      "Le librerie classiche artigianali arredano studi, salotti e ambienti di rappresentanza.",
    blocks: [
      {
        title: "Librerie classiche per studi e soggiorni",
        text:
          "Proponiamo librerie classiche in legno massello per ambienti eleganti e collezioni di pregio.",
      },
      {
        title: "Spedizione librerie classiche in tutta Italia",
        text:
          "Le librerie vengono spedite in tutta Italia con trasporti specializzati.",
      },
    ],
  },

  Vetrinette: {
    title: "Vetrinette classiche artigianali in legno e vetro",
    intro:
      "Le vetrinette classiche artigianali valorizzano oggetti e collezioni in ambienti eleganti.",
    blocks: [
      {
        title: "Vetrinette classiche per soggiorni raffinati",
        text:
          "Selezioniamo vetrinette classiche in legno massello e vetro per ambienti di pregio.",
      },
      {
        title: "Spedizione vetrinette classiche in tutta Italia",
        text:
          "Le vetrinette vengono spedite in tutta Italia con imballaggi su misura.",
      },
    ],
  },

  Cassapanche: {
    title: "Cassapanche classiche artigianali in legno massello",
    intro:
      "Le cassapanche classiche artigianali uniscono capienza, solidità e stile tradizionale.",
    blocks: [
      {
        title: "Cassapanche classiche per camere e ingressi",
        text:
          "Proponiamo cassapanche classiche in legno massello per ambienti eleganti e funzionali.",
      },
      {
        title: "Spedizione cassapanche classiche in tutta Italia",
        text:
          "Le cassapanche vengono spedite in tutta Italia con imballaggi protettivi.",
      },
    ],
  },

  Lampade: {
    title: "Lampade classiche e illuminazione decorativa",
    intro:
      "Le lampade classiche valorizzano gli ambienti con luce calda, materiali ricercati e design elegante.",
    blocks: [
      {
        title: "Illuminazione classica per ambienti raffinati",
        text:
          "Selezioniamo lampade classiche da tavolo, da parete e da terra per ambienti eleganti.",
      },
      {
        title: "Spedizione lampade classiche in tutta Italia",
        text:
          "Le lampade vengono spedite in tutta Italia con imballaggi sicuri.",
      },
    ],
  },
}

export default function SeoText({ category = "Tutti" }: Props) {
  const [open, setOpen] = useState(false)
  const data = SEO_CONTENT[category] || SEO_CONTENT.Tutti

  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-200 mb-4">
            {data.title}
          </h2>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            {data.intro}
          </p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition mb-10"
        >
          {open ? "Chiudi approfondimento" : "Approfondisci"}
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            open ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-10 space-y-8 text-neutral-300">
            {data.blocks.map((block, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-neutral-200 mb-2">
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed">{block.text}</p>
              </div>
            ))}

            <p className="text-xs text-neutral-500 pt-6">
              Atelier del Mobile — Via del Podio 3, San Michele Mondovì (CN) ·
              Servizi attivi in Piemonte, Liguria, Lombardia e tutta Italia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
