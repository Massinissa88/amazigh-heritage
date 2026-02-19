import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">AMAZIGH</h3>
                <p className="text-xs text-amber-400 tracking-widest uppercase">Heritage</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Préservons et partageons l'artisanat berbère authentique. Chaque achat soutient directement 
              les artisans des villages de l'Atlas.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Collections</h4>
            <ul className="space-y-3 text-gray-400">
              {["Colliers Fibules", "Bracelets Khmissa", "Bagues Amazigh", "Sur Mesure"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Aide</h4>
            <ul className="space-y-3 text-gray-400">
              {["Livraison & Retours", "Guide des Tailles", "Entretien des Bijoux", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Amazigh Heritage. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            {["Confidentialité", "CGV", "Mentions légales"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
