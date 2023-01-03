import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar />
      <Head>
        <title>Simple Blog</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
