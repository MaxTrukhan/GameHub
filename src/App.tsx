import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/Nav/NavBar"
import GameGrid from "./Component/Main/gameGrid"
import GridAside from "./Component/Aside/GridAside"
import { useState } from "react"
import {genresList } from "./hooks/useGanres"
import PlatformFilterList from "./Component/FilteringPlatform/PlatformFilterList"
import { Platform } from "./hooks/usePlatform"
import SortSelector from "./Component/Sort/SortSelector"
import Header from "./Component/Header/Header"


export interface gameQuery {
  genresList: genresList | null,
  Platform: Platform | null
  selectore: string
  searchText: string
}

function App() {

// Crate useState where all our date will be safed
const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery)

  return <Grid
   templateAreas={
    {
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }
  } 
  templateColumns={
    {
      base: '1fr',
      lg: '250px 1fr'
    }
  }
  overflowX={'hidden'}>
    <GridItem  area='nav'>
     <NavBar onSearch={(onSearch) => setGameQuery({...gameQuery, searchText: onSearch})}/>
    </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <Box ml={3} marginTop={7}>
           <GridAside  selectedGenre={gameQuery.genresList} onSelectGenre={(genre) => setGameQuery({...gameQuery, genresList: genre})}/> {/**we pulled up our genre to father component and now we gonna move it gmaeGrid connection */}
          </Box>
        
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      <Box paddingLeft={7}>
        <Header gameQuery={gameQuery}/>
        <Flex >
          <Box marginRight={5}>
            <PlatformFilterList onSelectedPlatfrom={(platform) => setGameQuery({...gameQuery , Platform: platform})} selectedPlatform={gameQuery.Platform}/>
          </Box>
          <SortSelector selectore={gameQuery.selectore} onSelectSelector={(selectore) => setGameQuery({...gameQuery, selectore: selectore})}/>
        </Flex> 
      </Box>
      
      

      <GameGrid  gameQuery={gameQuery}/> {/** At this point we show to gameGrid conection what to show on a page */}
    </GridItem>
  </Grid>
}

export default App