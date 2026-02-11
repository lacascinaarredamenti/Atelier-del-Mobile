import React from "react"
import { Helmet } from "react-helmet-async"

type Props = {
  category?: string
}

type SeoData = {
  title: string
  description: string
}

const SITE_URL = "https://www.atelierdelmobile.com"
const OG_IMAGE = `${SITE_URL}/images/og-ateliers-del-mobile.webp`

/* ================= SEO BASE ================= */

const SEO_HEAD: Record<string, SeoData> = {
  Tutti: {
    title:
      "Atelier del Mobile | Mobili classici artigianali in legno massello a Mondovì",
    description:
      "Atelier del Mobile seleziona mobili classici artigianali in legno massello. Armadi, tavoli, credenze e arredi di qualità a San Michele Mondovì (CN), con consegna in Piemonte e spedizione in tutta Italia.",
  },

  Armadi: {
    title:
      "Armadi classici artigianali in legno massello | Atelier del Mobile Mondovì",
    description:
      "Armadi classici artigianali in legno massello selezionati a Mondovì (CN). Consegna diretta in Piemonte e spedizione sicura in tutta Italia.",
  },

  Tavoli: {
    title:
      "Tavoli classici artigianali in legno massello | Atelier del Mobile",
    description:
      "Tavoli classici artigianali in legno massello per sale da pranzo eleganti. Qualità artigianale da Mondovì e spedizione nazionale.",
  },

  Sedie: {
    title:
      "Sedie classiche artigianali in legno massello | Atelier del Mobile",
    description:
      "Sedie classiche artigianali in legno massello per ambienti eleganti. Spedizione sicura in tutta Italia.",
  },
}

/* ================= GEO ZONE SERVITE ================= */

const GEO_CITIES = [
  "Torino",
  "Milano",
  "Genova",
  "Cuneo",
  "Savona",
  "Imperia",
  "La Spezia",
  "Alessandria",
  "Asti",
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

export default function SeoHead({ category = "Tutti" }: Props) {
  const seo = SEO_HEAD[category] || SEO_HEAD.Tutti

  const pageUrl =
    category === "Tutti"
      ? SITE_URL
      : `${SITE_URL}/#${encodeURIComponent(category.toLowerCase())}`

  /* ================= SCHEMA LOCAL BUSINESS PRO ================= */

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness"],

    name: "Atelier del Mobile",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    image: OG_IMAGE,
    description: seo.description,
    telephone: "+39 348 955 0024",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Via del Podio 3",
      addressLocality: "San Michele Mondovì",
      postalCode: "12080",
      addressRegion: "CN",
      addressCountry: "IT",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.395,
      longitude: 7.819,
    },

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Piemonte",
      },
      {
        "@type": "AdministrativeArea",
        name: "Liguria",
      },
      {
        "@type": "AdministrativeArea",
        name: "Lombardia",
      },
      {
        "@type": "Country",
        name: "Italia",
      },
    ],

    knowsAbout: [
      "Mobili classici artigianali",
      "Arredamento classico in legno massello",
      "Armadi classici",
      "Tavoli classici artigianali",
      "Credenze classiche artigianali",
      "Librerie classiche artigianali",
    ],

    sameAs: [
      "https://www.facebook.com/profile.php?id=61584205950369",
      "https://www.instagram.com/atelier_del_mobile/",
    ],

    openingHours: "Mo-Sa 08:00-18:00",
  }

  /* ================= SERVICE AREA SEO ================= */

  const schemaServiceArea = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: "Vendita mobili classici artigianali",
    provider: {
      "@type": "LocalBusiness",
      name: "Atelier del Mobile",
    },

    areaServed: GEO_CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
  }

  return (
    <Helmet>
      {/* BASE */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="max-image-preview:large" />
      <link rel="canonical" href={pageUrl} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* SCHEMA LOCAL BUSINESS */}
      <script type="application/ld+json">
        {JSON.stringify(schemaLocalBusiness)}
      </script>

      {/* SCHEMA SERVICE AREA */}
      <script type="application/ld+json">
        {JSON.stringify(schemaServiceArea)}
      </script>
    </Helmet>
  )
}
