import React, { useState } from 'react';
import { Switch, Box, Stack } from '@chakra-ui/react';

function SwitchColor() {
  const [theme, setTheme] = useState('light'); // Initial theme is 'light'
  
  const changeColor = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box 
      bg={theme === 'light' ? 'white' : 'black'} // Change background based on theme
      color={theme === 'light' ? 'black' : 'white'} // Change text color
      minHeight="100vh" // Ensure the box takes full height of the screen
      p={4}
    >
      <Stack direction="row" spacing={4}>
        <Switch 
          colorScheme="red" 
          isChecked={theme === 'dark'} 
          onChange={changeColor} 
        />
        <Switch 
          colorScheme="teal" 
          size="lg" 
          isChecked={theme === 'dark'} 
          onChange={changeColor} 
        />
      </Stack>
    </Box>
  );
}

export default SwitchColor;
