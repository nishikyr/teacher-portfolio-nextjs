// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layoutComponents/Header'
import Footer from '@/components/layoutComponents/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eloisa | English Teacher Portfolio',
  description: 'Landing page for English teacher services and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
