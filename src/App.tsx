import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import { useGame } from "./hooks/useGame"


function App() {

  const {gameList, error, loading} = useGame()

  if(loading) {
    return <p>Loading...</p>
  }

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
          Aside
        </GridItem>
      </Show>
        
    <GridItem area='main' >
      {error && error}   
      <ul >
        {gameList.map(game => 
          <li >
            {game.name}
          </li>
        )}
      </ul>
    </GridItem>
  </Grid>
}

export default App