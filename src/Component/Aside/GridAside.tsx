import React from 'react'
import { GenresList, genresList } from '../../hooks/useGanres'
import {Image, HStack, List, ListItem, Spinner, Button } from '@chakra-ui/react'

import GetCroppedImgUrl from '../../service/optimizedImgs'

interface Prop {
  onSelectGenres: (genre: genresList) => void
}

function GridAside({onSelectGenres}: Prop) {
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
            <Button onClick={() => onSelectGenres(genre)} variant='link' fontSize='lg' letterSpacing={'1px'}>{genre.name}</Button>
          </HStack>
        </ListItem> 
      </>
           
        )}
         </List>
    </>
    
  )
}

export default GridAside
