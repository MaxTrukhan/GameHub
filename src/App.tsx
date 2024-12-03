import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import GameGrid from "./Component/Main/gameGrid"
import GridAside from "./Component/Aside/GridAside"
import { useState } from "react"
import {genresList } from "./hooks/useGanres"
import PlatformFilterList from "./Component/FilteringPlatform/PlatformFilterList"
import { Platform } from "./hooks/usePlatform"

export interface gameQuery {
  genresList: genresList | null,
  Platform: Platform | null
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
      base: `1fr`,
      lf: `"200px" "1rf"`
    }
  }
  overflowX={'hidden'}>
    <GridItem  area='nav'>
     <NavBar/>
    </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GridAside selectedGenre={gameQuery.genresList} onSelectGenre={(genre) => setGameQuery({...gameQuery, genresList: genre})}/> {/**we pulled up our genre to father component and now we gonna move it gmaeGrid connection */}
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      <PlatformFilterList onSelectedPlatfrom={(platform) => setGameQuery({...gameQuery , Platform: platform})} selectedPlatform={gameQuery.Platform}/>
      <GameGrid gameQuery={gameQuery}/> {/** At this point we show to gameGrid conection what to show on a page */}
    </GridItem>
  </Grid>
}

export default App