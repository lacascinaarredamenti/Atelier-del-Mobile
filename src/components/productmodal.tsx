import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import { X, MessageCircle } from "lucide-react"
import { Product } from "../data/products"

type Props = {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/70 backdrop-blur-sm
        flex items-center justify-center
      "
      onClick={onClose}
    >
      {/* MODALE */}
      <div
        className="
          bg-neutral-900 border border-neutral-800
          rounded-xl
          max-w-3xl w-full mx-4
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-neutral-800">
          <h2 className="text-base font-medium">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* SINISTRA – IMMAGINE */}
          <div className="bg-black">
            <img
              src={
                product.gallery && product.gallery.length > 0
                  ? product.gallery[0]
                  : product.image
              }
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DESTRA – TESTO (SENZA SCROLL, SENZA ALTEZZA FISSA) */}
          <div className="flex flex-col p-5">
            {/* DESCRIZIONE */}
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {/* PREZZO */}
            {product.price && (
              <p className="text-yellow-400 text-lg font-semibold mb-4">
                {product.price}
              </p>
            )}

            {/* SPECIFICHE – TUTTE VISIBILI */}
            {product.specifications && (
              <div className="space-y-3 text-sm mb-6">
                {Object.entries(product.specifications).map(
                  ([label, value]) => (
                    <div
                      key={label}
                      className="border-b border-neutral-800 pb-2"
                    >
                      <div className="text-neutral-400 text-xs uppercase tracking-wide">
                        {label}
                      </div>
                      <div className="text-neutral-200 font-medium">
                        {value}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* CTA */}
            <a
              href="https://wa.me/393489550024"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-auto
                inline-flex items-center justify-center gap-2
                bg-green-600 hover:bg-green-700
                text-white text-sm font-semibold
                px-4 py-2 rounded-lg
                transition
              "
            >
              <MessageCircle size={16} />
              Richiedi info su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
