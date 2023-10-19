// CreateButton.js
import React from 'react';
import { Button } from '@mui/material';
function CreateButton({ onClick }) {
  return (
    <Button onClick={onClick} variant="contained" disableElevatio={true}>Create a Blog</Button>
  );
}

export default CreateButton;
