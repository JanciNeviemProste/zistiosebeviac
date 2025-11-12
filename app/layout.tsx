import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zisti o sebe viac - Test osobnosti',
  description: 'Objavte, ako najlepšie vyjadrujete, že vám na niekom záleží',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}
