import React from "react"

export default function ContactSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Contattaci via WhatsApp
        </h2>

        <p className="text-neutral-400 text-sm mb-16">
          Per un preventivo gratuito e una consulenza personalizzata
        </p>

        <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-left">
          {/* NOME */}
          <div className="mb-4">
            <label className="block text-sm text-neutral-300 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Il tuo nome"
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm text-neutral-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="tuo.email@example.com"
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* TELEFONO */}
          <div className="mb-4">
            <label className="block text-sm text-neutral-300 mb-2">
              Telefono
            </label>
            <input
              type="tel"
              placeholder="+39 348 955 0024"
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* MESSAGGIO */}
          <div className="mb-8">
            <label className="block text-sm text-neutral-300 mb-2">
              Messaggio
            </label>
            <textarea
              rows={4}
              placeholder="Descrivi i tuoi desideri e il tuo stile di arredamento..."
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 resize-none"
            />
          </div>

          {/* BOTTONE */}
          <a
            href="https://wa.me/393489550024"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded"
          >
            Invia Messaggio WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
