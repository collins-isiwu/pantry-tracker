// Import necessary modules and components
import React from 'react'; // Import the React library to create and use React components
import { Box, Typography } from '@mui/material'; // Import Box and Typography components from Material UI for layout and styling
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js for navigation

// Define the Navigation functional component
const Navigation = () => {
  const router = useRouter(); // Initialize the useRouter hook to access the router object
  const [value, setValue] = React.useState(router.pathname); // Initialize state to keep track of the current navigation value, using the current path

  // Function to handle changes in the navigation selection
  const handleChange = (newValue) => {
    setValue(newValue); // Update the state with the new navigation value
    router.push(newValue); // Use the router object to navigate to the new path
  };

  return (
    // Box component from Material UI to create a flex container for navigation links
    <Box display="flex" alignItems="center" gap={2}>
      {/* Typography components to create clickable navigation links */}
      <Typography
        variant="h6" // Use h6 variant for the Typography component
        style={{
          cursor: 'pointer', // Change cursor to pointer to indicate clickable element
          color: value === '/' ? '#fff' : 'rgba(255, 255, 255, 0.7)', // Change color based on whether the link is active
        }}
        onClick={() => handleChange('/')} // Handle click to navigate to Home
      >
        Home
      </Typography>
      <Typography
        variant="h6" // Use h6 variant for the Typography component
        style={{
          cursor: 'pointer', // Change cursor to pointer to indicate clickable element
          color: value === '/add-item' ? '#fff' : 'rgba(255, 255, 255, 0.7)', // Change color based on whether the link is active
        }}
        onClick={() => handleChange('/add-item')} // Handle click to navigate to Add Item
      >
        Add Item
      </Typography>
      <Typography
        variant="h6" // Use h6 variant for the Typography component
        style={{
          cursor: 'pointer', // Change cursor to pointer to indicate clickable element
          color: value === '/shopping-list' ? '#fff' : 'rgba(255, 255, 255, 0.7)', // Change color based on whether the link is active
        }}
        onClick={() => handleChange('/shopping-list')} // Handle click to navigate to Shopping List
      >
        Shopping List
      </Typography>
      <Typography
        variant="h6" // Use h6 variant for the Typography component
        style={{
          cursor: 'pointer', // Change cursor to pointer to indicate clickable element
          color: value === '/profile' ? '#fff' : 'rgba(255, 255, 255, 0.7)', // Change color based on whether the link is active
        }}
        onClick={() => handleChange('/profile')} // Handle click to navigate to Profile
      >
        Profile
      </Typography>
    </Box>
  );
};

// Export the Navigation component to be used in other parts of the application
export default Navigation;
