import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { useGame } from '../../hooks/useGame'
import React from 'react'



function GameGrid() {
const {gameList, error, loading} = useGame()
if(loading) {
    return <p>Loading...</p>
}
  return (
    <>
     {error && error}
    <SimpleGrid borderRadius={10} columns={{sm: 1, md: 2, lg: 3}} spacing={10} m={5}>
        {gameList.map(game => (
            <GameCard key={game.id} game={game}/>
        )
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
