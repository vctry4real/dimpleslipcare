import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Providers from './components/Providers'
import ScrollAnimator from './components/ScrollAnimator'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const lyla = localFont({
  src: './fonts/LoveYaLikeASister-Regular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dimpleslipcare.com'),
  title: {
    default: 'Dimples Lipcare — Hand-poured lipcare from Lagos',
    template: '%s | Dimples Lipcare',
  },
  description: 'A hand-poured lipcare ritual — scrubs, balms, glosses, oils, and a pink-lips treatment that actually works. From one tiny pink studio in Lagos.',
  keywords: ['lip care', 'lip scrub', 'lip balm', 'lip gloss', 'pink lips treatment', 'Lagos', 'Nigeria', 'hand-poured', 'natural skincare'],
  authors: [{ name: 'Dimples Lipcare', url: 'https://dimpleslipcare.com' }],
  creator: 'Dimples Lipcare',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Dimples Lipcare',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.className} ${jost.className} ${lyla.className}`}>
      <body><Providers>{children}</Providers><ScrollAnimator /></body>
    </html>
  )
}
