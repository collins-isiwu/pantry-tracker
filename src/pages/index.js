// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // Import React and hooks for state and lifecycle management
import { collection, query, onSnapshot, deleteDoc, doc, addDoc } from 'firebase/firestore'; // Import Firestore functions for database operations
import { db } from '../lib/firebase'; // Import the Firestore database instance
import { Container, Grid } from '@mui/material'; // Import Container and Grid components from Material UI for layout
import Header from '../components/Header'; // Import the Header component
import PantryList from '../components/PantryList'; // Import the PantryList component

// Define the Home functional component
const Home = () => {
  const [items, setItems] = useState([]); // Initialize state to store pantry items

  // useEffect hook to fetch pantry items from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, 'pantryItems')); // Create a Firestore query to get all pantry items
    const unsubscribe = onSnapshot(q, (querySnapshot) => { // Set up a real-time listener for the query
      const itemsData = []; // Temporary array to store fetched items
      querySnapshot.forEach((doc) => { // Iterate through each document in the query snapshot
        itemsData.push({ ...doc.data(), id: doc.id }); // Add the document data and ID to the items array
      });
      setItems(itemsData); // Update the state with the fetched items
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to handle item deletion
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id)); // Delete the document with the given ID from Firestore
    setItems((prevItems) => prevItems.filter(item => item.id !== id)); // Update the state to remove the deleted item
  };

  // Function to handle adding a new item
  const handleAdd = async (item) => {
    const docRef = await addDoc(collection(db, 'pantryItems'), item); // Add a new document to the Firestore collection
    setItems([...items, { ...item, id: docRef.id }]); // Update the state to include the new item
  };

  return (
    <div>
      <Header /> {/* Header with app name, menu icon, and navigation */}
      {/* Container component to center the content on the page */}
      <Container>
        {/* Grid layout to organize content */}
        <Grid container spacing={3} style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            {/* Grid view of pantry items */}
            <PantryList items={items} onDelete={handleDelete} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

// Export the Home component to be used in other parts of the application
export default Home;
