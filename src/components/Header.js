// Import necessary modules and components
import React from 'react'; // Import the React library to create and use React components
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'; // Import specific components from Material UI for building the UI
import MenuIcon from '@mui/icons-material/Menu'; // Import the Menu icon from Material UI icons library
import Navigation from './Navigation'; // Import the Navigation component

// Define the Header functional component
const Header = () => {
  return (
    // AppBar component from Material UI used to create an application bar
    <AppBar position="static" style={{ width: '100%' }}> 
      {/* Toolbar component to group the elements horizontally */}
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
        {/* Box to group the menu icon and app name/logo */}
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          {/* IconButton component to create a clickable icon button with some space on the left edge */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* MenuIcon component to display a menu icon inside the IconButton */}
            <MenuIcon /> 
          </IconButton>
          {/* Typography component to display text */}
          <Typography variant="h6">
            Pantry Tracker {/* Text content for the app name/logo */}
          </Typography>
        </Box>
        {/* Box to align navigation links */}
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          {/* Navigation component for navigation links */}
          <Navigation />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Export the Header component to be used in other parts of the application
export default Header;
