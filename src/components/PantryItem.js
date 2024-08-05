// src/components/PantryItem.js
import React from 'react'; // Import React
import { Card, CardContent, Typography, IconButton } from '@mui/material'; // Import Material UI components
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon from Material UI icons

// PantryItem component to display individual pantry item
const PantryItem = ({ item, onDelete }) => {
  return (
    <Card variant="outlined"> {/* Card component to display item details */}
      <CardContent>
        <Typography variant="h5" component="div"> {/* Item name */}
          {item.name}
        </Typography>
        <Typography color="text.secondary"> {/* Item quantity */}
          Quantity: {item.quantity}
        </Typography>
        <IconButton onClick={() => onDelete(item.id)}> {/* Delete button */}
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PantryItem;
