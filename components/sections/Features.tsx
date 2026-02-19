import { Sparkles } from "lucide-react";

const features = [
  { title: "Authentique", desc: "Direct des artisans de l'Atlas" },
  { title: "Conseiller IA", desc: "Yasmin t'aide à choisir" },
  { title: "Sur Mesure", desc: "Personnalise tes bijoux" },
];

export function Features() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-lg">
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
  );
}
