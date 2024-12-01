import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import GameGrid from "./Component/Main/gameGrid"
import GridAside from "./Component/Aside/GridAside"
import { genresList } from "./hooks/useGanres"
import { useState } from "react"


function App() {
const [selectedGanre, setSelectedGanre] = useState<genresList | null>(null)

  
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
          <GridAside onSelectGenres={(genre) => setSelectedGanre(genre)}/>
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      <GameGrid selectGanre={selectedGanre}/>
    </GridItem>
  </Grid>
}

export default App