import React from "react"
import { Helmet } from "react-helmet-async"

type Props = {
  category?: string
}

const SITE_URL = "https://www.atelierdelmobile.com"

type DiscoverData = {
  title: string
  intro: string
  text1: string
  text2: string
}

const DISCOVER_DATA: Record<string, DiscoverData> = {
  Tutti: {
    title: "Come scegliere mobili classici in legno massello di qualità",
    intro:
      "Scegliere mobili classici artigianali significa investire in materiali autentici, lavorazioni reali e durata nel tempo.",
    text1:
      "Il legno massello rappresenta ancora oggi uno dei materiali più apprezzati nell’arredamento classico. A differenza dei materiali industriali mantiene stabilità, profondità estetica e possibilità di restauro nel tempo.",
    text2:
      "Atelier del Mobile seleziona arredi classici artigianali in Piemonte con spedizione in tutta Italia, scegliendo mobili destinati a mantenere valore estetico e strutturale per decenni.",
  },

  Armadi: {
    title: "Come scegliere un armadio classico in legno massello",
    intro:
      "Gli armadi classici artigianali sono tra i mobili più importanti della casa.",
    text1:
      "Un armadio classico in legno massello garantisce stabilità, durata e qualità estetica superiore rispetto ai mobili industriali.",
    text2:
      "Gli armadi artigianali selezionati da Atelier del Mobile sono scelti per qualità costruttiva, materiali e lavorazioni manuali.",
  },

  Tavoli: {
    title: "Tavoli classici in legno massello: eleganza e durata",
    intro:
      "Il tavolo classico è il cuore della zona giorno e deve essere solido e armonioso.",
    text1:
      "I tavoli classici artigianali vengono scelti valutando essenza del legno, incastri strutturali e lavorazioni manuali.",
    text2:
      "Un tavolo in legno massello mantiene valore estetico e funzionale nel tempo.",
  },

  Sedie: {
    title: "Sedie classiche artigianali: comfort ed eleganza",
    intro:
      "Le sedie classiche completano la sala da pranzo con equilibrio e qualità costruttiva.",
    text1:
      "Le sedie artigianali in legno massello garantiscono stabilità, durata e qualità estetica.",
    text2:
      "Sono ideali per sale da pranzo classiche e ambienti eleganti.",
  },

  Credenze: {
    title: "Credenze classiche artigianali per soggiorni eleganti",
    intro:
      "Le credenze classiche sono mobili simbolo dell’arredo tradizionale italiano.",
    text1:
      "Le credenze in legno massello uniscono funzionalità ed estetica.",
    text2:
      "Una credenza artigianale aumenta valore estetico e funzionale dell’ambiente.",
  },

  Lampade: {
    title: "Lampade classiche decorative per ambienti eleganti",
    intro:
      "L’illuminazione classica valorizza mobili e architettura degli ambienti.",
    text1:
      "Le lampade classiche decorative creano atmosfera e profondità visiva.",
    text2:
      "Sono elementi fondamentali nell’arredamento classico di pregio.",
  },
}

export default function DiscoverContent({ category = "Tutti" }: Props) {
  const data = DISCOVER_DATA[category] ?? DISCOVER_DATA.Tutti

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.intro,
    author: {
      "@type": "Organization",
      name: "Atelier del Mobile",
    },
    publisher: {
      "@type": "Organization",
      name: "Atelier del Mobile",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
      },
    },
  }

  return (
    <section className="bg-black py-32 px-6 border-t border-neutral-800">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">
            Approfondimento
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-100">
            {data.title}
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed">
          <p>{data.text1}</p>
          <p>{data.text2}</p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#catalogo"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition"
          >
            Scopri i mobili disponibili
          </a>
        </div>

      </div>
    </section>
  )
}
