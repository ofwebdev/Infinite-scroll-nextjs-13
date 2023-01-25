'use client';

import { useState } from 'react'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './header';
import SearchForm from '@/components/SearchForm';
import SearchResultImg from '@/components/SearchResultImg';
import { Flex, Spinner } from '@chakra-ui/react';

import InfiniteScroll from 'react-infinite-scroll-component';
const inter = Inter({ subsets: ['latin'] });

import searchImages from '@/utils/searchImages';

export interface ImageState {
  url: string;
}


const Loader = () => (
  <Flex justifyContent='center' py='2rem'>
    <Spinner color='red.500' />
  </Flex>
)




const fetchNextImages = ({ page, setImages, setPage, setHasMore }: any) => async () => {

  const images = await searchImages({
    setPage,
    page,
    setHasMore,
  })

  setImages((prev: any) => prev.concat(images))


}



export default function Home() {

  const [images, setImages] = useState<ImageState[]>([]);

  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const searchFormImgProps = {
    setImages,
    setHasMore,
    setPage,
  }


  return (

    <ChakraProvider>
      <main style={{padding: "16px"}}>
        <section className="search-section">
          <Header />
          <SearchForm {...searchFormImgProps} />

          <InfiniteScroll dataLength={images.length} hasMore={hasMore} next={fetchNextImages({
            page,
            setImages,
            setPage,
            setHasMore,
           })} loader={<Loader />} >

            
            <SearchResultImg images={images} />
          </InfiniteScroll>

        </section>
      </main>
    </ChakraProvider>
  )
}
