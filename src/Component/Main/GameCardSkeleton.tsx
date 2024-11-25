import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function GameCardScaleton() {
  return (
    <Card>
        <Skeleton h={'250px'}/>
      <CardBody>
      <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardScaleton
