export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold mb-4">Rejoignez l'aventure</h2>
        <p className="mb-8">Recevez nos nouveautés par email</p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Votre email" className="flex-1 px-6 py-3 rounded-full text-gray-900" />
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium">S'inscrire</button>
        </div>
      </div>
    </section>
  );
}
