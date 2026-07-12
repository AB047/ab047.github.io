'use client'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import ParticlesBackground from './components/shared/particles-background'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <ParticlesBackground />
          {/* ---------------------Header Starts-----------------  */}
          <Header />
          {/* ---------------------Header Ends-------------------  */}
          {children}
          {/* ---------------------Footer Starts-----------------  */}
          <Footer />
          {/* ---------------------Footer Ends-----------------  */}
          <ScrollToTop />
        </ThemeProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-215618519-1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-215618519-1');
          `}
        </Script>
      </body>
    </html>
  )
}
