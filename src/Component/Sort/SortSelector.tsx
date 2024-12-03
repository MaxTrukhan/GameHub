import { MenuButton, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Prop {
    onSelectSelector: (selectore: string) => void
    selectore: string
}

function SortSelector({onSelectSelector, selectore}: Prop) {
    const sortOrder = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ]
    const findCurrentOrder = sortOrder.find(order => order.value === selectore )
  return (
    <Menu >
        <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order by : {findCurrentOrder?.label || 'Relevance'}</MenuButton>  
        <MenuList>
            {sortOrder.map(sort => 
                <MenuItem onClick={() => onSelectSelector(sort.value)} key={sort.label}>
                    {sort.label}
                </MenuItem>
            )}
        </MenuList>   
    </Menu>
  )
}

export default SortSelector
