import React from 'react'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { gameProp } from '../../hooks/useGame'
import Icons from './Icons'
import Raiting from './Raiting'
interface Prop {
    game: gameProp
    
}

function GameCard({game}: Prop) {
  return (
    <div>
      <Card  minH={'400px'} overflow={'hidden'}>
      <Image src={game.background_image}/>
      <CardBody marginY={3}>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <Icons platform={game.parent_platforms.map(p => p.platform)}/>
        <Raiting ShowRating={game}/>
      </CardBody>
    </Card>
    </div>
  )
}

export default GameCard
