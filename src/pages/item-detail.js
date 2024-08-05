// Import necessary modules and components
import React from 'react'; // Import the React library to create and use React components
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js for navigation
import { Container, Typography, IconButton, Card, CardContent } from '@mui/material'; // Import Material UI components for layout and styling
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBack icon from Material UI icons library
import Header from '../components/Header'; // Import the Header component
import Navigation from '../components/Navigation'; // Import the Navigation component

// Define the ItemDetail functional component
const ItemDetail = () => {
  const router = useRouter(); // Initialize the useRouter hook to access the router object
  const { id } = router.query; // Get the item ID from the query parameters

  // Placeholder for fetching item details based on the ID
  const item = {
    id, // Item ID
    name: 'Sample Item', // Item name
    quantity: 10, // Item quantity
    details: 'Extra details about the item.', // Item details
    imageUrl: '/path/to/image.jpg', // Item image URL
  };

  return (
    // Container component to center the content on the page
    <Container>
      <Header /> {/* Header with back button and item name */}
      {/* IconButton component to create a clickable back button */}
      <IconButton onClick={() => router.back()}>
        <ArrowBackIcon /> {/* Back button icon */}
      </IconButton>
      {/* Typography component to display the item name */}
      <Typography variant="h5" align="center">
        {item.name} {/* Item name */}
      </Typography>
      {/* Card component to display item details in a card layout */}
      <Card style={{ marginTop: 20 }}>
        {/* Display the item image */}
        <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
        <CardContent>
          {/* Typography component to display the item quantity */}
          <Typography variant="h6">Quantity: {item.quantity}</Typography>
          {/* Typography component to display additional item details */}
          <Typography variant="body1">{item.details}</Typography>
          {/* IconButton component for the edit button */}
          <IconButton color="primary">Edit</IconButton>
        </CardContent>
      </Card>
      <Navigation /> {/* Navigation bar */}
    </Container>
  );
};

// Export the ItemDetail component to be used in other parts of the application
export default ItemDetail;
