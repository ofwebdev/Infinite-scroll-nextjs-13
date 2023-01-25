import React from 'react'
import { FormControl, Input, Button, Center } from '@chakra-ui/react'

import { setQuery } from '@/utils/cookies'


function SearchForm() {

    const handleSubmit = () => {    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setQuery(e.currentTarget.value);

    return (
        <div>
            <FormControl onSubmit={handleSubmit} as="form" maxWidth="40rem" mx="auto">
                <Input onChange={handleChange}  isRequired placeholder='Search images' type="text" mb='.5rem' />
                <Center>
                    <Button type='submit'  width="7rem">Search</Button>
                </Center>
            </FormControl>

        </div>
    )
}

export default SearchForm