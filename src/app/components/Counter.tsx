'use client';
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('hello - client');
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        Increase number
      </button>
    </div>
  );
}
