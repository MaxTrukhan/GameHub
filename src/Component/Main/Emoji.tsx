import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react'
import thumbImg from '../../assets/thumbs-up.webp'
import mehImg from '../../assets/meh.webp'
import bullsEye from '../../assets/bulls-eye.webp'
import { gameProp } from '../../hooks/useGame'

interface Prop {
    game: gameProp
}

function Emoji({game}: Prop) {

    if(game.rating_top < 3) return ''

    const EmojiMap: {[key: number]: ImageProps} =  {
        3: {src: mehImg, alt: 'meh', boxSize: '25px'},
        4: {src: thumbImg, alt: 'thumb', boxSize: '25px'},
        5: {src: bullsEye, alt: 'bullish Eye', boxSize: '35px'}
    }

  return (
    <>
      <Image  m={1} {...EmojiMap[game.rating_top]}/>
    </>
  )
}

export default Emoji
