import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '5 Jazykov Lásky - Test',
  description: 'Zisti, aký je tvoj hlavný jazyk lásky',
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
