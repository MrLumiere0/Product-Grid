import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A family name was submitted: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{margin: '20px', padding: '20px', border: '1px solid #ddd'}}>
      <label>
       Family Name:
        <input type="text" ref={inputRef} style={{marginLeft: '10px'}}/>
      </label>
      <button type="submit" style={{marginLeft: '10px'}}>Submit</button>
    </form>
  );
};

export default UncontrolledForm;
