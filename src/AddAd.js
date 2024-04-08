import React, { useState, useContext } from 'react';
import { AdContext } from './AdContext';

const AddAd = () => {
  const [text, setText] = useState('');
  const { addAd } = useContext(AdContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addAd({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add &hearts;</button>
    </form>
  );
};

export default AddAd;
