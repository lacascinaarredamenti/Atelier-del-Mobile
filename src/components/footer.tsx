import React from "react"
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-neutral-300"
      style={{ backgroundImage: "url(/images/footer.webp)" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* contenuto */}
      <div className="relative z-10 max-w-7xl mx-auto pt-32 pb-16 px-6">

        {/* GRID PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <img
              src="/images/logo.webp"
              alt="Atelier del Mobile"
              className="w-36 mb-6"
            />
            <p className="text-sm leading-relaxed text-neutral-400">
              Arredamento artigianale di qualità. Ogni mobile racconta una storia
              di passione, esperienza e maestria italiana.
            </p>
          </div>

          {/* CONTATTI */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Contatti
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                <div>
                  <div className="text-white">348 955 0024</div>
                  <div className="text-neutral-400">
                    Lun – Sab: 8:00 – 18:00
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" />
                <div>
                  <div className="text-white">San Michele Mondovì (CN)</div>
                  <div className="text-neutral-400">
                    Su appuntamento
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ORARI */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Orari Boutique
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between max-w-xs">
                <span>Lunedì – Sabato</span>
                <span className="text-white">8:00 – 18:00</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Domenica</span>
                <span className="text-neutral-400">Chiuso</span>
              </li>
            </ul>

            <p className="text-xs text-neutral-500 mt-6">
              Prenota un appuntamento per una consulenza personalizzata.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-14" />

        {/* SOCIAL */}
        <div className="flex justify-center gap-10 mb-10">
          <a
            href="https://www.facebook.com/profile.php?id=61584205950369&locale=it_IT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-orange-500 hover:text-orange-400 transition transform hover:scale-110"
          >
            <Facebook size={34} />
          </a>

          <a
            href="https://www.instagram.com/atelier_del_mobile/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-orange-500 hover:text-orange-400 transition transform hover:scale-110"
          >
            <Instagram size={34} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-neutral-500">
          © 2026 Atelier del Mobile. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}
