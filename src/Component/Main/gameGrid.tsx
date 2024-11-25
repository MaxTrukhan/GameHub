import {SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useGame } from '../../hooks/useGame'
import React from 'react'
import GameCardScaleton from './GameCardSkeleton'


function GameGrid() {
  const skeletons = [1, 2, 3, 4, 5, 6]
const {gameList, error, loading} = useGame()

  return (
    <>
     {error && error}
    <SimpleGrid borderRadius={10} columns={{sm: 1, md: 2, lg: 3}} spacing={10} m={5}>
    {loading && 
      skeletons.map(skeleton => (
        <GameCardScaleton key={skeleton}/>
      ))  
    }
        {gameList.map(game => (
            <GameCard  key={game.id} game={game}/>
        )
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
