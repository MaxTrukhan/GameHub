import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import GameGrid from "./Component/Main/gameGrid"
import GridAside from "./Component/Aside/GridAside"
import { useState } from "react"
import {genresList } from "./hooks/useGanres"


function App() {
// Crate useState where all our date will be safed
  const [selectedGenre, setSelectedGenre] = useState<genresList | null>(null) // we add null just begouse we don't know type of genres 'text' or number
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
          <GridAside selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/> {/**we pulled up our genre to father component and now we gonna move it gmaeGrid connection */}
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      <GameGrid selectedGenre={selectedGenre}/> {/** At this point we show to gameGrid conection what to show on a page */}
    </GridItem>
  </Grid>
}

export default App