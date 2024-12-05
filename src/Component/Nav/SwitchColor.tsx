import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

function SwitchColor() {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <div>
        <HStack>
        <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} id='switch'/>
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
        </HStack>
    
    </div>
  )
}

export default SwitchColor
