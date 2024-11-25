import React from 'react'
import useGanres from '../../hooks/useGanres'
import { ListItem, UnorderedList } from '@chakra-ui/react'
function GridAside() {
    const {genresList, error} = useGanres()
  return (
    <>
    {error && error}
        <UnorderedList>
        {genresList.map(ganre => 
            <ListItem>{ganre.name}</ListItem>
        )}
        </UnorderedList>
    </>
    
  )
}

export default GridAside
