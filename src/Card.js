import React, { useState, useEffect } from 'react';
import './Card.css';
 
export default function Card() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    setCount(5);
  }, []);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      This is a button
    </button>
  );
}
