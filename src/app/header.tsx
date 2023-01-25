import React from 'react'
import {Heading, Box, Center} from '@chakra-ui/react'

function header() {
  return (
    <Box w="90%" m="0 auto">
      <Center>
        <Heading py="5" fontSize='4xl'>Pixels</Heading>
      </Center>
    </Box>
  )
}

export default header