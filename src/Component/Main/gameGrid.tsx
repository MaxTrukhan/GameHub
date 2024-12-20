import {SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { UseGame } from '../../hooks/useGame'
import GameCardScaleton from './GameCardSkeleton'
import GameCardConteiner from './GameCardConteiner'
import { gameQuery } from '../../App'

interface Prop {
  gameQuery: gameQuery
}

function GameGrid({gameQuery}: Prop) {
  const skeletons = [1, 2, 3, 4, 5, 6]
  const {data, error, loading} = UseGame(gameQuery)

if(error) return error

  return (

    <SimpleGrid m={7} columns={{sm: 1, md: 2, lg: 3}} spacing={4}>
    {loading && 
      skeletons.map(skeleton => (
        <GameCardConteiner key={skeleton}>
          <GameCardScaleton />
        </GameCardConteiner>
        
      ))  
    }
        {data.map(game => (             
            <GameCardConteiner key={game.id}>
              <GameCard game={game}/>
            </GameCardConteiner>         
        )
        )}
    </SimpleGrid>
  )
}

export default GameGrid
