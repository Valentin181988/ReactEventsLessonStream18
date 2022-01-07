import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Search
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
