import { HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import SwitchColor from './SwitchColor'
import SearchGames from './SearchGames'


interface Prop {
  onSearch: (search: string) => void
}

function NavBar({onSearch}: Prop) {
  
  return (
    <div>
      <HStack  p={30} justifyContent={'space-between'} boxSize={40} w={'100%'}>
        <Image w={70} src={logo}/>
        <SearchGames onSearch={onSearch}/>
        <SwitchColor/>
      </HStack>
    </div>
  )
}

export default NavBar
