import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";

function SearchGames() {
  return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}/>
                <Input 
                    borderRadius={'2rem'}
                    h={'45px'}
                    letterSpacing={1.5}
                    fontSize={'18px'}
                    placeholder="Search Games"
                    border={'none'}
                    background={'rgba(0, 0, 0, 0.36)'}    
                />   
        </InputGroup>  
  )
}

export default SearchGames
