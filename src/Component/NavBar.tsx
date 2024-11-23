import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import SwitchColor from './SwitchColor'

function NavBar() {
  
  return (
    <div>
      <HStack  p={30} justifyContent={'space-between'} boxSize={40} w={'100%'}>
        <Image w={70} src={logo}/>
        <SwitchColor/>
      </HStack>
    </div>
  )
}

export default NavBar
