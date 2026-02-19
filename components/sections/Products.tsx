"use client";

import { useState } from "react";

const categories = ["Tout", "Colliers", "Bracelets", "Bagues"];
const products = [
  { id: 1, name: "Fibule d'Anti-Atlas", price: 245, category: "Colliers", image: "bg-gradient-to-br from-amber-200 to-orange-200" },
  { id: 2, name: "Bracelet Khmissa", price: 89, category: "Bracelets", image: "bg-gradient-to-br from-gray-200 to-gray-300" },
  { id: 3, name: "Bague Amazigh", price: 445, category: "Bagues", image: "bg-gradient-to-br from-yellow-200 to-amber-200" },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const filtered = activeCategory === "Tout" ? products : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">Nos Collections</h2>
        <div className="flex justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full font-medium ${activeCategory === cat ? 'bg-gray-900 text-white' : 'border-2 border-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-64 ${p.image} rounded-xl mb-4`} />
              <h3 className="font-serif text-xl font-bold">{p.name}</h3>
              <p className="text-amber-700 font-bold text-lg">{p.price} €</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
