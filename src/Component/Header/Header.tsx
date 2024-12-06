import { gameQuery } from '../../App'
import { h1 } from 'framer-motion/client'
import { Heading } from '@chakra-ui/react'


interface Prop {
    gameQuery: gameQuery | null
}



function Header({gameQuery}: Prop) {
    const gamesHeading = `${gameQuery?.Platform?.name || ''} ${gameQuery?.genresList?.name || ''} Games`
  return (
    <Heading marginY={5} as={h1} fontSize={'5xl'}>
        {gamesHeading}
    </Heading>
  )
}

export default Header
