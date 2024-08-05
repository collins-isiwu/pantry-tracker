// Import necessary modules and components
import React, { useState } from 'react'; // Import React and useState hook for managing state
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js for navigation
import { Container, TextField, Button, Typography, IconButton } from '@mui/material'; // Import Material UI components for layout and styling
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBack icon from Material UI icons library
import Header from '../components/Header'; // Import the Header component
import Navigation from '../components/Navigation'; // Import the Navigation component
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions for database operations
import { db } from '../lib/firebase'; // Import the Firestore database instance

// Define the AddItem functional component
const AddItem = () => {
  const router = useRouter(); // Initialize the useRouter hook to access the router object
  const [name, setName] = useState(''); // Initialize state to store the item name
  const [quantity, setQuantity] = useState(''); // Initialize state to store the item quantity
  const [details, setDetails] = useState(''); // Initialize state to store additional item details

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    await addDoc(collection(db, 'pantryItems'), { // Add a new document to the Firestore collection
      name, // Item name
      quantity: parseInt(quantity), // Item quantity, converted to an integer
      details, // Additional item details
    });
    router.push('/'); // Redirect to the home page after adding the item
  };

  return (
    // Container component to center the content on the page
    <Container>
      <Header /> {/* Header with back button and screen title */}
      {/* IconButton component to create a clickable back button */}
      <IconButton onClick={() => router.back()}>
        <ArrowBackIcon /> {/* Back button icon */}
      </IconButton>
      {/* Typography component to display the screen title */}
      <Typography variant="h5" align="center">
        Add New Item {/* Screen title */}
      </Typography>
      {/* Form element to handle item addition */}
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        {/* TextField component for the item name input */}
        <TextField
          label="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        {/* TextField component for the item quantity input */}
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        {/* TextField component for additional item details input */}
        <TextField
          label="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          fullWidth
          margin="normal"
        />
        {/* Button component for form submission */}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
          Save Item {/* Save button */}
        </Button>
      </form>
      <Navigation /> {/* Navigation bar */}
    </Container>
  );
};

// Export the AddItem component to be used in other parts of the application
export default AddItem;
