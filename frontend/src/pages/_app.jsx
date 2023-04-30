import { useRouter } from 'next/router.js'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps, router }) {
  let isHomePage = useRouter().pathname === '/'

  return (
    <>
      <div className="relative">
        {isHomePage && <Header />}

        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
