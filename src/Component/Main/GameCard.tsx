import React from 'react'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { gameProp } from '../../hooks/useGame'
import Icons from './Icons'
import Raiting from './Raiting'
interface Prop {
    game: gameProp
    
}

function GameCard({game}: Prop) {
  return (
    <div>
        <Card _hover={{
            transition: 'all 0.3s ease-in-out 0.1s',
            transform: 'scale(1.05)'
        }} cursor={'pointer'}  minH={'400px'} overflow={'hidden'}>
      <Image src={game.background_image}/>
      <CardBody marginY={3}>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
            <Icons platform={game.parent_platforms.map(p => p.platform)}/>
            <Raiting ShowRating={game.metacritic}/>
        </HStack>
        
      </CardBody>
    </Card>
    </div>
  )
}

export default GameCard
