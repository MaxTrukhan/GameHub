import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'

function NavBar() {
  return (
    <div>
      <HStack boxSize={40}>
        <Image src={logo}/>
        <Text>GameHub</Text>
      </HStack>
    </div>
  )
}

export default NavBar
