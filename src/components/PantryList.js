// src/components/PantryList.js
import React from 'react'; // Import React
import PantryItem from './PantryItem'; // Import PantryItem component
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon from Material UI icons

// PantryList component to display list of pantry items
const PantryList = ({ items, onDelete }) => {
  return (
    <div>
      {items.map(item => ( // Map through items and render a PantryItem for each
        <PantryItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PantryList;
