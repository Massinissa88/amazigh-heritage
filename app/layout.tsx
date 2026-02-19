import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amazigh Heritage - Bijoux Berbères',
  description: 'Bijoux berbères authentiques avec conseiller IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
