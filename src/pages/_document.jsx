// src/pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        {/* Google Fonts: Manrope */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="CodifyMate - Smart Vibe Coding for React Developers - Build Component by Component"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-gray-900 font-manrope">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
