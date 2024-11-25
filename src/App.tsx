import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import GameGrid from "./Component/Main/gameGrid"
import GridAside from "./Component/Aside/GridAside"


function App() {

  return <Grid templateAreas={
    {
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }
  }>
    <GridItem  area='nav'>
     <NavBar/>
    </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GridAside />
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      <GameGrid/>
    </GridItem>
  </Grid>
}

export default App