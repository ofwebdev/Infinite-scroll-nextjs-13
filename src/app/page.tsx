'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './header';
import SearchForm from '@/components/SearchForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <ChakraProvider>
      <main>
        <section className="search-section">
          <Header />
          <SearchForm />
          <h1>Hi next js</h1>

        </section>
      </main>
    </ChakraProvider>
  )
}
