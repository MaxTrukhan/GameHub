import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../hooks/usePlatform';
interface Prop {
  onSelectedPlatfrom: (platform: Platform | null) => void
  selectedPlatform: Platform | null
}

function PlatformFilterList({onSelectedPlatfrom, selectedPlatform}: Prop) {

  const [clicked ,setClicked] = useState(false)
  const {data, error} = usePlatform()
  if(error) {
    return null
  }
  return (
    <Menu>
      <MenuButton as={Button} onClick={() => setClicked(!clicked)} rightIcon={clicked ? <BsChevronUp/> : <BsChevronDown />}>
      {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>     
          {data.map(platform => 
           <MenuItem onClick={() => {onSelectedPlatfrom(platform)}}> 
            {platform.name}  
            </MenuItem>   
          )} 
          <MenuItem onClick={() => onSelectedPlatfrom(null)}>All</MenuItem>
      </MenuList>
     
    </Menu>
  )
}

export default PlatformFilterList
