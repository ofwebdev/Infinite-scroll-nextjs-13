import React, { FormEvent } from 'react'
import { FormControl, Input, Button, Center } from '@chakra-ui/react'

import { setQuery } from '@/utils/cookies'

import searchImages from '@/utils/searchImages';

interface SearchFormProps {
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchForm({setImages, setPage, setHasMore}: SearchFormProps) {

    const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        setPage(1)

        const images = await searchImages({setPage, setHasMore});

        setImages(images);


        console.log(images)

    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => setQuery(e.currentTarget.value);

    return (
        <div>
            <FormControl onSubmit={handleSubmit} as="form" maxWidth="40rem" mx="auto">
                <Input onChange={handleChange} isRequired placeholder='Search images' type="text" mb='.5rem' />
                <Center>
                    <Button type='submit' width="7rem">Search</Button>
                </Center>
            </FormControl>

        </div>
    )
}

export default SearchForm;
