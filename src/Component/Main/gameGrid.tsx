import {SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import { gameProp, UseData } from '../../hooks/useDate'
import GameCardScaleton from './GameCardSkeleton'
import GameCardConteiner from './GameCardConteiner'


function GameGrid() {
  const skeletons = [1, 2, 3, 4, 5, 6]
const {data, error, loading} = UseData<gameProp>('/games')
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
        {data.map(game => (
               
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
