import React, { useState } from 'react';

const ControlledForm = () => {
  const [input, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A first name was submitted: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{margin: '20px', padding: '20px', border: '1px solid #ddd'}}>
      <label>
       First Name:
        <input type="text" value={input} onChange={handleChange} style={{marginLeft: '10px'}} />
      </label>
      <button type="submit" style={{marginLeft: '10px'}}>Submit</button>
    </form>
  );
};

export default ControlledForm;
