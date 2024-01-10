import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChethanB Portfolio',
  description: 'A Data scientist and a Full Stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./titleIcon.ico"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
