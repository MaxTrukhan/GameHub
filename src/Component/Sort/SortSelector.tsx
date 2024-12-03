import { MenuButton, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


function SortSelector() {
  return (
    <Menu >
        <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order by : Relevance  </MenuButton>  
        <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Data added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Avarege raiting</MenuItem>
        </MenuList>   
    </Menu>
  )
}

export default SortSelector
