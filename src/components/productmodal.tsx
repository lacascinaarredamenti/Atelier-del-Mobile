import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Product } from "../data/products"

type Props = {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image]

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-4xl w-full mx-4 overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* SINISTRA – SLIDER */}
          <div className="bg-black p-4">

            <div className="relative">

              <img
                src={images[currentIndex]}
                alt={product.name}
                className="w-full max-h-[420px] object-contain rounded-lg"
              />

              {/* FRECCE */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* DOTS */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full ${
                          i === currentIndex
                            ? "bg-yellow-400"
                            : "bg-neutral-600"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* MINIATURE SOTTO */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center flex-wrap">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition ${
                      i === currentIndex
                        ? "border-yellow-400"
                        : "border-neutral-700"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* DESTRA – TESTO */}
          <div className="flex flex-col p-5 overflow-y-auto max-h-[520px]">

            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {product.price && (
              <p className="text-yellow-400 text-xl font-semibold mb-4">
                {product.price}
              </p>
            )}

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

            <a
              href="https://wa.me/393489550024"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
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
