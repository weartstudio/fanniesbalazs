import './globals.css'

export const metadata = {
  title: 'Fanni és Balázs',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className='font-sans'>{children}</body>
    </html>
  )
}
