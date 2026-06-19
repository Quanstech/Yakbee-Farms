export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-farm-green to-green-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">🐄 Yakbee Farm</h1>
        <p className="text-xl md:text-2xl mb-6 text-green-100">
          Premium Livestock & Animal Farming
        </p>
        <p className="text-lg text-green-100 mb-8">
          Located in Dansoman Tunga • Quality Animals • Sustainable Farming
        </p>
        <a
          href="#contact"
          className="inline-block bg-farm-accent hover:bg-yellow-600 text-farm-green font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
