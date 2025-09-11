// src/pages/_app.jsx
import '@/sytles/globals.css'
import Navbar from '@/shared/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
