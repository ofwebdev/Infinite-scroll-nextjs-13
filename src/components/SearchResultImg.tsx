import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import Masonry from 'react-masonry-css';


function SearchResultImg({ images }: any) {

    const breakpointColumnsObj = {
        default: 3,
        1500: 2,
        800: 1,
    }

    const columnClassName = 'my-masonry-grid_column'

    const gutterSpace = '30px'

    const masonryStyles:any = {
        ml: `-${gutterSpace}`,
    }

    const selector = `& .${columnClassName}`

    masonryStyles[selector] = {
        pl: gutterSpace,
        backgroundClip: 'padding-box',
    }


    return (
        <Flex columnClassName={columnClassName}
            as={Masonry}
            breakpointCols={breakpointColumnsObj}
            sx={masonryStyles}
            mt='2rem'>
            {images.map((img: string) => (
                <Image borderRadius="2xl" w="100%" key={nanoid()} src={img} mb={gutterSpace} alt="Image" />
            ))}
        </Flex>
    )
}

export default SearchResultImg

