import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
interface Prop {
    children: ReactNode
}

function GameCardConteiner({children}: Prop) {
  return (
    <Box
      style={{
        transition: 'all 0.3s ease-in-out 0.1s',
      }}
      _hover={{      
          transform: 'scale(1.01)'
      }} cursor={'pointer'} borderRadius={10}  minH={'400px'}  overflow={'hidden'} >
        {children}
    </Box>
  )
}

export default GameCardConteiner
