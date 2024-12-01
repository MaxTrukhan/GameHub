import { Badge} from "@chakra-ui/react";

interface Prop {
    ShowRating: number
}

// Ensure your rating values are mapped correctly (as integers).

function Rating({ShowRating}: Prop) {
const color = ShowRating > 70 ? 'green' : ShowRating <= 70 &&  ShowRating >= 50 ? 'yellow' : ShowRating < 50 ? 'red' : ''

    return(
        <Badge
            paddingRight={3}
            paddingLeft={3} 
            paddingTop={1} 
            paddingBottom={1} 
          fontSize={14}
          colorScheme={color}
          >
          
            {ShowRating}
        </Badge>
    )
}

export default Rating;
