import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";

import { BsSearch } from "react-icons/bs";
interface Prop {
    onSearch: (search: string) => void
}

function SearchGames({onSearch}: Prop) {

    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>

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
                    
                    ref={ref}
                />   
        </InputGroup>  

    </form>
        
  )
}

export default SearchGames
