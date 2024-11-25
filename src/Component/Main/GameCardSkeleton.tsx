import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const cardSize = '400px'

function GameCardScaleton() {
  return (
    <Card w={cardSize} minH={'400px'} overflow={'hidden'}>
        <Skeleton h={'200px'}/>
      <CardBody>
      <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardScaleton
