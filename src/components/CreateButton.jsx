import React from 'react';
import '../css/createbutton.css';

function CreateButton({ onClick }) {
  return (
    <button onClick={onClick} className="create-button">
      Create a Blog
    </button>
  );
}

export default CreateButton;
