export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <header className="bg-red-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Sabor Peruano</h1>
        <p>Authentic Peruvian Cuisine</p>
      </header>

      {/* Menu */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>🍗 Pollo a la Brasa</li>
          <li>🐟 Ceviche Mixto</li>
          <li>🥩 Lomo Saltado</li>
          <li>🍚 Arroz Chaufa</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <form action="/api/contact" method="POST" className="space-y-4">
          <input name="name" placeholder="Your Name" required className="w-full p-2 border" />
          <input name="email" placeholder="Your Email" required className="w-full p-2 border" />
          <textarea name="message" placeholder="Message or Catering Request" required className="w-full p-2 border"></textarea>
          <button className="bg-red-700 text-white px-4 py-2">Send</button>
        </form>
      </section>

    </main>
  )
}
