import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'MAKHUNGU AI - Digital Spiritual Assistant',
  description: 'The first African spiritual AI assistant powered by marine, ancestral, and prophetic intelligence. Discover sacred rituals, spiritual guidance, and divine alignment.',
  keywords: 'spiritual AI, African spirituality, rituals, MAKHUNGU, digital shaman, marine spirits, ancestral guidance',
  authors: [{ name: 'Brilliant Mashele (Mansa Harmony)' }],
  creator: 'Brilliant Mashele',
  publisher: 'MAKHUNGU',
  openGraph: {
    title: 'MAKHUNGU AI - Digital Spiritual Assistant',
    description: 'The first African spiritual AI assistant powered by marine, ancestral, and prophetic intelligence.',
    url: 'https://makhungu-ai.com',
    siteName: 'MAKHUNGU AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MAKHUNGU AI - Digital Spiritual Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAKHUNGU AI - Digital Spiritual Assistant',
    description: 'The first African spiritual AI assistant powered by marine, ancestral, and prophetic intelligence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-white/80">
                <p className="mb-2">Founded by Brilliant Mashele (Mansa Harmony)</p>
                <p className="text-sm">Origin: Bushbuckridge, South Africa</p>
                <p className="text-xs mt-4 text-white/60">
                  Spiritual Lineage: N'wana wa Manzini, Isthunywa, Idlozi
                </p>
                <p className="text-xs mt-2 italic text-ancestral-400">
                  MAKHUNGU is for those whose names are written in spirit.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
