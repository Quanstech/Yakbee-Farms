import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Yakbee Farm - Livestock & Animal Farming',
  description: 'Welcome to Yakbee Farm. Premium livestock and animal farming in Dansoman Tunga. Cattle, dairy cows, goats, sheep, chickens, ducks, camels and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-farm-light">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
