import { HStack, Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { gameProp } from "../../hooks/useGame";
import { IconType } from "react-icons";

interface Prop {
    ShowRating: gameProp
}

// Ensure your rating values are mapped correctly (as integers).
const stars: { [key: string]: IconType[] } = {
  1: [FaStar, FaRegStar, FaRegStar, FaRegStar, FaRegStar],
  2: [FaStar, FaStar, FaRegStar, FaRegStar, FaRegStar],
  3: [FaStar, FaStar, FaStar, FaRegStar, FaRegStar],
  4: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  5: [FaStar, FaStar, FaStar, FaStar, FaStar],
};

function Rating({ShowRating}: Prop) {
    const rating = Math.floor(ShowRating.rating)
    return(
    <HStack marginX={0.1} marginY={1}>
        {
            stars[rating].map((rating, index) => (
                <Icon key={index} as={rating}/>
            ))
        }
    </HStack>
       
    )
}

export default Rating;
