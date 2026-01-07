import type { Metadata } from 'next'
import { Young_Serif, Pinyon_Script, Libre_Baskerville, Arvo, Quicksand, Playfair_Display, Courier_Prime, Cinzel, Bebas_Neue, Roboto_Slab } from 'next/font/google'
import './globals.css'

// Heirloom Theme Fonts
const youngSerif = Young_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-young-serif',
  display: 'swap',
})

const pinyonScript = Pinyon_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pinyon-script',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

// Meadow Theme Fonts
const arvo = Arvo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-arvo',
  display: 'swap',
})

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

// Copper Theme Fonts
const playfair = Playfair_Display({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier-prime',
  display: 'swap',
})

// Vintage Forge Theme Fonts
const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

// Rustic Edge Theme Fonts
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const robotoSlab = Roboto_Slab({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cake Vibe Prototype',
  description: 'Three distinct branding directions for a rural Kentucky cake business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${youngSerif.variable} ${pinyonScript.variable} ${libreBaskerville.variable} ${arvo.variable} ${quicksand.variable} ${playfair.variable} ${courierPrime.variable} ${cinzel.variable} ${bebasNeue.variable} ${robotoSlab.variable}`}>
        {children}
      </body>
    </html>
  )
}

