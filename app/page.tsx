"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, X, Send, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Salam ! Je suis Yasmin 👋 Je peux t'aider à choisir ton bijou berbère. Tu cherches pour quelle occasion ?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    setTimeout(() => {
      const responses = [
        "Les fibules de Tiznit sont parfaites ! Elles ont cette cornaline qui éclaire le visage. Tu préfères l'argent ou l'or ?",
        "Le bracelet Khmissa est un classique ! Tu veux voir les options de personnalisation ?",
        "Je te propose notre collection 'Atlas' - des pièces délicates pour le quotidien. Tu aimes les motifs géométriques ?",
        "Pour un cadeau, la bague Amazigh avec gravure en tifinagh fait toujours sensation !"
      ];
      setMessages(prev => [...prev, { text: responses[Math.floor(Math.random() * responses.length)], isBot: true }]);
    }, 1000);
    setInput("");
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && <span className="font-medium pr-2">Yasmin IA</span>}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-amber-200"
        >
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white">
            <h4 className="font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Yasmin - Conseillère IA
            </h4>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? '' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.isBot ? 'bg-white rounded-tl-none shadow-sm' : 'bg-amber-600 text-white rounded-tr-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ton message..."
              className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
            <button onClick={sendMessage} className="bg-amber-600 text-white p-2 rounded-full">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-40 glass border-b border-amber-200/30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="font-serif text-xl font-bold">AMAZIGH</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="default">Boutique</Button>
            <Button variant="gradient" size="default" className="gap-2">
              <ShoppingBag className="w-4 h-4" />
              Panier
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
              ✨ Artisanat Authentique du Maghreb
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6">
              L'Élégance <span className="text-gradient">Millénaire</span> Berbère
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Bijoux uniques façonnés par des artisans des Atlas. 
              Découvre nos créations avec Yasmin, notre conseillère IA.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Explorer la Collection</Button>
              <Button variant="outline" size="lg">Personnaliser</Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl mb-3" />
                <h3 className="font-serif font-bold">Fibule d'Anti-Atlas</h3>
                <p className="text-amber-700 font-bold">245 €</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-3" />
                <h3 className="font-serif font-bold">Bracelet Khmissa</h3>
                <p className="text-amber-700 font-bold">89 €</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-6 rounded-2xl text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Nouveau</h3>
                <p className="text-sm mb-4">Collection 2026 inspirée des Aït Yenni</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-700">
                  Découvrir
                </Button>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="h-48 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-xl mb-3" />
                <h3 className="font-serif font-bold">Bague Amazigh</h3>
                <p className="text-amber-700 font-bold">445 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Authentique", desc: "Direct des artisans de l'Atlas, certifié origine" },
              { title: "Conseiller IA", desc: "Yasmin t'aide à choisir selon ton style" },
              { title: "Sur Mesure", desc: "Personnalise tes bijoux : gravure, pierres" }
            ].map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-sand/50">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="font-serif text-2xl font-bold">AMAZIGH</span>
          </div>
          <p className="text-gray-400">© 2026 Amazigh Heritage - Bijoux Berbères Authentiques</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
