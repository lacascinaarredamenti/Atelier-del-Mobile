import React from "react"
import { Helmet } from "react-helmet-async"

type Props = {
  city: string
}

const SITE_URL = "https://www.atelierdelmobile.com"

export default function CityLanding({ city }: Props) {
  const title = `Mobili classici artigianali in legno massello a ${city} | Atelier del Mobile`

  const description = `Vendita mobili classici artigianali in legno massello a ${city}. Armadi, tavoli, credenze e arredi selezionati da Atelier del Mobile con consegna sicura in tutta Italia.`

  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Atelier del Mobile",
    areaServed: city,
    url: SITE_URL,
    telephone: "+39 348 9550024",
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-semibold mb-8">
            Mobili classici artigianali a {city}
          </h1>

          <p className="text-neutral-300 mb-6">
            Atelier del Mobile seleziona mobili classici artigianali in legno
            massello destinati ai clienti di {city}. Proponiamo arredi eleganti,
            solidi e realizzati con materiali autentici.
          </p>

          <p className="text-neutral-400 mb-6">
            I nostri mobili classici vengono scelti per qualità costruttiva,
            valore estetico e durata nel tempo. Spediamo regolarmente mobili
            classici verso {city} con trasporti specializzati.
          </p>

          <a
            href="/#catalogo"
            className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg mt-6"
          >
            Scopri i mobili disponibili
          </a>

        </div>
      </section>
    </>
  )
}
