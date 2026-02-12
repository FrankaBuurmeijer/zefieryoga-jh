import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Serenity Yoga | Aerial Restorative & Meditation Classes',
  description:
    'Find your balance with aerial restorative yoga and guided meditation classes. Restore your body, calm your mind, and elevate your practice.',
}

export const viewport = {
  themeColor: '#e8e0d6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
