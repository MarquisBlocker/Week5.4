import React from 'react';

const styles = {
  background: 'green',
  border: '2px solid orange',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'crosshair',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;