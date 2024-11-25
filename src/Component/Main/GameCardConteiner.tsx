import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
interface Prop {
    children: ReactNode
}

function GameCardConteiner({children}: Prop) {
  return (
    <Box _hover={{
        transition: 'all 0.3s ease-in-out 0.1s',
        transform: 'scale(1.05)'
    }} cursor={'pointer'}  m={5} borderRadius={10}  w={'400px'} minH={'400px'}  overflow={'hidden'} >
        {children}
    </Box>
  )
}

export default GameCardConteiner
