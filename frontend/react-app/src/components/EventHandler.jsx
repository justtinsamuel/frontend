import { useState } from "react";
import React from "react";

const MIN_VALUE = 0;
const MAX_VALUE = 10;

const EventHandler = () => {
  const [number, setNumber] = useState(0);

  const tambahHandler = () => {
    setNumber((prev) => {
      if (prev >= MAX_VALUE) {
        alert(`Can't go above ${MAX_VALUE}`);
        return prev;
      }
      return prev + 1;
    });
  };

  const kurangHandler = () => {
    setNumber((prev) => {
      if (prev <= MIN_VALUE) {
        alert(`Can't go below ${MIN_VALUE}`);
        return prev;
      }
      return prev - 1;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello, your name is ${name}`);
  }

  return (
    <>
      <div>
        <button onClick={tambahHandler}>Tambah +</button>
        <h1>{number}</h1>
        <button onClick={kurangHandler}>Kurang -</button>
      </div>

    </>
  );
};

export default EventHandler;
