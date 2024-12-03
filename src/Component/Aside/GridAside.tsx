import React from 'react'
import { genresList, GenresList } from '../../hooks/useGanres'
import {Image, HStack, List, ListItem, Spinner, Button } from '@chakra-ui/react'

import GetCroppedImgUrl from '../../service/optimizedImgs'


interface Prop {
  onSelectGenre: (genre: genresList | null) => void // we acces our genre to all items in GL as "id ,name, slug" and other
  selectedGenre: genresList | null
}

function GridAside({onSelectGenre, selectedGenre}: Prop) {
  // Our missin here to import value of genre , we can do this by interface Prop
    const {data, error, loading} = GenresList()

    if(loading) {
      return <Spinner/>
    } 
  return (
    <>
    {error && error}
    <List>
      {data.map(genre => 
      <>
        <ListItem _hover={{
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out 0s',
          boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.16)',
          borderRadius: '10px'
        }}
        padding={'3px'}
        cursor={'pointer'}
        p={3}
        >
          <HStack
          >
            <Image  boxSize={'37px'}  src={GetCroppedImgUrl(genre.image_background)} borderRadius={'10px'}/>
            <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'ligth'} onClick={() => onSelectGenre(genre)} _focus={{transform: 'scale(1.15)'}} variant='link' fontSize='lg' letterSpacing={'1px'}>{genre.name}</Button>
          </HStack>
        </ListItem> 
      </>
           
        )}
         </List>
    </>
    
  )
}

export default GridAside
