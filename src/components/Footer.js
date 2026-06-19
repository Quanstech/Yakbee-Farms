export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-farm-green text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">
          © {currentYear} Yakbee Farm. All rights reserved.
        </p>
        <p className="text-farm-accent text-sm">
          Quality Livestock | Premium Products | Sustainable Farming
        </p>
        <p className="text-sm mt-4">
          Located in Dansoman Tunga
        </p>
      </div>
    </footer>
  )
}
