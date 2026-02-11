import React, { useEffect, useState } from "react"

const reviews = [
  {
    text: "Abitiamo a pochi chilometri da San Michele Mondovì e la consegna è stata fatta direttamente da loro. Puntuali, gentili e molto attenti durante il posizionamento. Il mobile è stupendo, dal vivo rende ancora di più.",
    author: "Paolo B.",
    location: "Carrù (CN)",
  },
  {
    text: "Vivendo in Puglia ero un po’ titubante, invece la spedizione con corriere è stata perfetta. Imballaggio professionale e mobile arrivato senza il minimo segno. Qualità davvero alta.",
    author: "Maria L.",
    location: "Monopoli (BA)",
  },
  {
    text: "Consegna diretta da parte loro visto che siamo vicini. Si vede la cura artigianale sia nel mobile che nel servizio. Esperienza molto positiva.",
    author: "Gianni R.",
    location: "San Michele Mondovì (CN)",
  },
  {
    text: "Ho acquistato da Milano: comunicazione sempre chiara, foto reali e spedizione tramite corriere organizzata benissimo. Il mobile è arrivato esattamente come descritto.",
    author: "Laura M.",
    location: "Milano",
  },
  {
    text: "Siamo in zona e la consegna è stata effettuata direttamente. Puntualità e grande attenzione ai dettagli. Il legno è di una qualità che oggi si vede raramente.",
    author: "Davide C.",
    location: "Dogliani (CN)",
  },
  {
    text: "Spedizione fino in Sicilia gestita da corriere selezionato. Mobile imballato in modo impeccabile, arrivato perfetto. Dal vivo è ancora più bello.",
    author: "Giuseppe T.",
    location: "Ragusa",
  },
  {
    text: "Dalla prima richiesta di informazioni alla consegna tutto è stato seguito con professionalità. Spedizione tramite corriere senza problemi.",
    author: "Elena F.",
    location: "Verona",
  },
  {
    text: "Abitando a pochi minuti da San Michele Mondovì, la consegna è stata fatta direttamente. Servizio molto umano e mobile di grande valore.",
    author: "Marco P.",
    location: "Vicoforte (CN)",
  },
  {
    text: "Spedizione verso il Friuli gestita in modo impeccabile. Ottima comunicazione e imballo a prova di trasporto.",
    author: "Andrea S.",
    location: "Udine (UD)",
  },
  {
    text: "Il mobile è arrivato in Sardegna tramite corriere in condizioni perfette. Materiali autentici e finiture curate nei minimi dettagli.",
    author: "Francesca M.",
    location: "Olbia (SS)",
  },
  {
    text: "Consegna diretta perché siamo in provincia di Cuneo. Puntuali, precisi e molto attenti. Esperienza davvero eccellente.",
    author: "Luca D.",
    location: "Fossano (CN)",
  },
  {
    text: "Spedizione verso Roma organizzata molto bene. Ho apprezzato la trasparenza e la disponibilità nel fornire tutte le informazioni.",
    author: "Alessandro G.",
    location: "Roma",
  },
  {
    text: "Mobile arrivato in Toscana tramite corriere senza alcun problema. Qualità superiore alle aspettative.",
    author: "Sara L.",
    location: "Arezzo (AR)",
  },
  {
    text: "Siamo vicini e la consegna è stata effettuata direttamente. Si vede la passione per il lavoro e la cura per il cliente.",
    author: "Federico B.",
    location: "Farigliano (CN)",
  },
  {
    text: "Spedizione in Campania gestita in modo impeccabile. Imballaggio professionale e comunicazione sempre presente.",
    author: "Antonio R.",
    location: "Avellino (AV)",
  },
  {
    text: "Il mobile è arrivato in Veneto tramite corriere selezionato. Servizio serio, puntuale e molto professionale.",
    author: "Chiara V.",
    location: "Bassano del Grappa (VI)",
  },
  {
    text: "Consegna diretta vista la vicinanza. Puntualità assoluta e grande attenzione anche durante il posizionamento.",
    author: "Roberto S.",
    location: "Clavesana (CN)",
  },
  {
    text: "Spedizione verso la Liguria senza problemi. Mobile perfettamente imballato e qualità artigianale evidente.",
    author: "Silvia N.",
    location: "Rapallo (GE)",
  },
  {
    text: "Dalla prima chiamata alla consegna finale tutto è stato gestito in modo impeccabile. Spedizione tramite corriere senza alcuna criticità.",
    author: "Michele A.",
    location: "Lecce (LE)",
  },
  {
    text: "Mobile arrivato in Emilia-Romagna tramite corriere selezionato. Qualità dei materiali davvero notevole.",
    author: "Giovanna P.",
    location: "Modena",
  },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length)
        setVisible(true)
      }, 350)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-orange-600 text-xs tracking-widest uppercase font-semibold">
          Recensioni dei clienti
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Cosa dicono di noi
        </h2>

        <p className="mt-4 text-neutral-400 text-sm max-w-3xl mx-auto">
          Esperienze reali di clienti in tutta Italia, dalla consegna diretta
          alla spedizione con corrieri selezionati.
        </p>

        <div className="mt-20">
          <div
            className={`bg-neutral-900 border border-neutral-800 rounded-2xl px-10 py-12 max-w-3xl mx-auto shadow-lg
              transition-all duration-500 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <div className="flex justify-center mb-6">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-orange-500 text-lg">★</span>
              ))}
            </div>

            <p className="text-neutral-100 italic text-lg leading-relaxed">
              "{reviews[index].text}"
            </p>

            <p className="mt-6 text-sm text-neutral-400">
              <span className="font-semibold text-white">
                {reviews[index].author}
              </span>{" "}
              — {reviews[index].location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
