import React from 'react'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { gameProp } from '../../hooks/useGame'
import Icons from './Platforms'
import Raiting from './Raiting'
import GetCroppedImgUrl from '../../service/optimizedImgs'

import Emoji from './Emoji'

export const cardSize = '400px'
interface Prop {
    game: gameProp
}

 
function GameCard({game}: Prop) {

  return (
    <div>
        <Card >
      <Image  src={GetCroppedImgUrl(game.background_image)}/>
      <CardBody p={3} marginY={3}>  
        <HStack mb={3} w={'100%'} justifyContent={'space-between'}>
            <Icons platform={game.parent_platforms.map(p => p.platform)}/>
            <Raiting ShowRating={game.metacritic}/>
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <Emoji game={game} />
      </CardBody>
    </Card>
    </div>
  )
}

export default GameCard
