import {SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useGame } from '../../hooks/useGame'
import React from 'react'
import GameCardScaleton from './GameCardSkeleton'
import GameCardConteiner from './GameCardConteiner'


function GameGrid() {
  const skeletons = [1, 2, 3, 4, 5, 6]
const {gameList, error, loading} = useGame()

  return (
    <>
     {error && error}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={5}>
    {loading && 
      skeletons.map(skeleton => (
        <GameCardConteiner>
          <GameCardScaleton key={skeleton}/>
        </GameCardConteiner>
        
      ))  
    }
        {gameList.map(game => (
               
            <GameCardConteiner>
              <GameCard  key={game.id} game={game}/>
            </GameCardConteiner> 
          
        )
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
