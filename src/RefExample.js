import React, { useRef } from 'react';

function TextInputWithFocus() {
  const inputEl = useRef(null);

  const focusInput = () => {
    // Check if the input element exists and then focus it
    if(inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <div>
      {/* Button to focus the input */}
      <button onClick={focusInput}>Focus the input</button>

      {/* The input element with ref */}
      <input ref={inputEl} type="text" style={inputStyle} />
    </div>
  );
}

// Define some CSS styling for the input
const inputStyle = {
  padding: '10px',
  margin: '10px',
  border: '2px solid green',
  borderRadius: '5px'
};

export default TextInputWithFocus;
