import React from 'react'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { gameProp } from '../../hooks/useDate'
import Icons from './Icons'
import Raiting from './Raiting'
import GetCroppedImgUrl from '../../service/optimizedImgs'

export const cardSize = '400px'
interface Prop {
    game: gameProp
}

function GameCard({game}: Prop) {
  return (
    <div>
        <Card >
      <Image src={GetCroppedImgUrl(game.background_image)}/>
      <CardBody marginY={3}>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack m={1} w={'100%'} justifyContent={'space-between'}>
            <Icons platform={game.parent_platforms.map(p => p.platform)}/>
            <Raiting ShowRating={game.metacritic}/>
        </HStack>
        
      </CardBody>
    </Card>
    </div>
  )
}

export default GameCard
