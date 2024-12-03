import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Contador: {count}</h2>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-600"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-600"
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default Counter;
