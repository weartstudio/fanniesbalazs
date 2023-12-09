import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'


export const metadata = {
  title: 'Fanni és Balázs',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className='font-sans'>
      <Header />
      {children}
      <Footer>
        Ez az oldal digitális archívumként szolgál számunkra, a segítségével egyszerűbb megőrizni a legfontosabb emlékeinket.
      </Footer>
      </body>
    </html>
  )
}
