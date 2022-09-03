import Head from "next/head";
import useDarkMode from '../components/useDarkMode'
import DarkModeButton from "./darkModeButton";
import Navigation from './navigation'
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Maker Badge</title>
        <meta name="description" content="Maker Badge WebApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        {children}

        <DarkModeButton />
      </main>
      <Footer />
    </>
  )
}