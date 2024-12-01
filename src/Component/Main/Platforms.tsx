import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";
import { PlatformIcon } from "../../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";

interface Prop {
    platform: PlatformIcon[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IconMap: {[key: string] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
}

function Icons({platform}: Prop) {
    return(
        <HStack>
            {platform.map(p => (
                <Icon marginY={1} color={'gray.500'} as={IconMap[p.slug]}/>
            ))}
        </HStack>
    )
}

export default Icons
