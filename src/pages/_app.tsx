import React, { ComponentType } from 'react'
import '../styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

interface AppProps {
  Component: ComponentType<any>; // Especifica el tipo de Component
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter()

  return (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel='icon' href='/favicon.ico'/>
    </Head>
    <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
      <NavBar></NavBar>
      <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer></Footer>
    </main>
  </>
  )
}

export default App
