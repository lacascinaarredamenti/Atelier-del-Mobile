import React, { useState } from "react"
import ProductModal from "./productmodal"
import { Product } from "../data/products"

type Props = {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  /* ================= NORMALIZZA PREZZO ================= */
  const normalizePrice = (price?: string) => {
    if (!price) return undefined
    return price.replace(/[^\d,]/g, "").replace(",", ".")
  }

  /* ================= RICH RESULTS — ITEM LIST ================= */
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catalogo mobili classici Atelier del Mobile",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image:
          product.gallery && product.gallery.length > 0
            ? product.gallery
            : [product.image],
        brand: {
          "@type": "Brand",
          name: "Atelier del Mobile",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: normalizePrice(product.price),
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "FurnitureStore",
            name: "Atelier del Mobile",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via del Podio 3",
              addressLocality: "San Michele Mondovì",
              addressRegion: "CN",
              addressCountry: "IT",
            },
          },
        },
      },
    })),
  }

  return (
    <section className="bg-black px-6">

      {/* ================= RICH RESULTS JSON-LD ================= */}
      <script type="application/ld+json">
        {JSON.stringify(itemListJsonLd)}
      </script>

      {/* ================= EMPTY STATE ================= */}
      {products.length === 0 && (
        <p className="text-center text-neutral-500 py-24">
          Nessun prodotto in questa categoria
        </p>
      )}

      {/* ================= GRID ================= */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((product) => {
          const coverImage =
            product.gallery && product.gallery.length > 0
              ? product.gallery[0]
              : product.image

          return (
            <div
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className="
                cursor-pointer
                bg-neutral-900 border border-neutral-800
                rounded-xl overflow-hidden

                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                hover:border-yellow-400/60
              "
            >
              {/* IMAGE */}
              <div className="h-64 bg-black overflow-hidden">
                <img
                  src={coverImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.webp"
                  }}
                />
              </div>

              {/* TEXT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                {product.price && (
                  <p className="text-yellow-400 font-semibold mb-3">
                    {product.price}
                  </p>
                )}

                <span className="text-sm text-green-500">
                  Richiedi info su WhatsApp
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
