import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const incrementByTwo = () => {
        setCounter(counter + 2);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded shadow-md">
            <h1 className="text-4xl font-bold text-gray-900">
                <span className="text-black">
                    Counter:
                </span>{' '}
                {counter}
            </h1>

            <div className="flex space-x-4">
                <button
                    className="bg-pink-200 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded"
                    onClick={incrementCounter}
                >
                    Incrementar +1
                </button>
                <button
                    className="bg-pink-400 hover:bg-pink-600 text-back font-bold py-2 px-4 rounded"
                    onClick={incrementByTwo}
                >
                    Incrementar +2
                </button>
                <button
                    className="bg-pink-600 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded"
                    onClick={resetCounter}
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default Counter;
