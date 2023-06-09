import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/Layout/AppBar'
import Books from '@/web/Books'
import Zodiac from '@/web/Zodiac'
import ModalProvider from '@/context/ModalContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <ModalProvider>
        <Head>
          <title>Love Compatibility Checker</title>
          <meta name="description" content="Check yoour love compatability" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='w-full'>
          <Navigation />

          <Zodiac />
          </main>
    </ModalProvider>
      


      
    </>
  )
}
