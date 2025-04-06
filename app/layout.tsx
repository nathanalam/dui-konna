import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dui Konna - Exquisite Muslin Sarees',
  description: 'Discover unique handcrafted Muslin sarees from Dui Konna. Traditional craftsmanship meets modern design.',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
