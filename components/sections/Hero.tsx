"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-screen overflow-hidden bg-[#F5F1E8]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Texte gauche */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Artisanat Authentique du Maghreb
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
            L'Élégance <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Millénaire</span> <br />
            Berbère
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Bijoux uniques façonnés par des artisans des Atlas. Découvre nos créations avec Yasmin, notre conseillère IA.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="gap-2">
              Explorer la Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-2">
              Personnaliser
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 border-2 border-white" />
              ))}
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              <span className="text-gray-600 text-sm ml-2">4.9/5 (2,847 avis)</span>
            </div>
          </div>
        </motion.div>

        {/* Images droite */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 mt-8">
            <ProductCard 
              name="Fibule d'Anti-Atlas" 
              price={245} 
              image="/images/fibule.jpg"
            />
            <ProductCard 
              name="Bracelet Khmissa" 
              price={89} 
              image="/images/khmissa.jpg"
              small 
            />
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-6 rounded-2xl text-white shadow-xl">
              <Sparkles className="w-8 h-8 mb-3" />
              <h3 className="font-serif text-2xl font-bold mb-2">Nouveau</h3>
              <p className="text-sm mb-4 opacity-90">Collection 2026 inspirée des Aït Yenni</p>
              <button className="px-4 py-2 bg-white text-amber-700 rounded-full text-sm font-semibold hover:bg-amber-50 transition">
                Découvrir
              </button>
            </div>
            <ProductCard 
              name="Bague Amazigh" 
              price={445} 
              image="/images/bague.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Composant carte produit avec vraie image
function ProductCard({ 
  name, 
  price, 
  image, 
  small = false 
}: { 
  name: string; 
  price: number; 
  image: string;
  small?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer overflow-hidden"
    >
      <div className={`relative overflow-hidden rounded-xl mb-3 ${small ? 'h-32' : 'h-48'}`}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="font-serif font-bold text-gray-900">{name}</h3>
      <p className="text-amber-700 font-bold">{price} €</p>
    </motion.div>
  );
}
