// Import necessary modules and functions
import { createTheme } from '@mui/material/styles'; // Import createTheme function from Material UI

// Define a custom theme for the application
const theme = createTheme({
  palette: { // Define color palette for the theme
    primary: { // Primary color configuration
      main: '#556cd6', // Set primary main color to a specific shade of blue
    },
    secondary: { // Secondary color configuration
      main: '#19857b', // Set secondary main color to a specific shade of green
    },
    error: { // Error color configuration
      main: '#ff0000', // Set error main color to red
    },
    background: { // Background color configuration
      default: '#fff', // Set default background color to white
    },
  },
});

export default theme; // Export the custom theme for use in other parts of the application
