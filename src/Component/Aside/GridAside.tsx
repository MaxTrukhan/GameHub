import React from 'react'
import { genresList, UseData } from '../../hooks/useDate'
import { ListItem, UnorderedList } from '@chakra-ui/react'
function GridAside() {
    const {data, error} = UseData<genresList>('/genres')
  return (
    <>
    {error && error}
        <UnorderedList>
        {data.map(ganre => 
            <ListItem>{ganre.name}</ListItem>
        )}
        </UnorderedList>
    </>
    
  )
}

export default GridAside
