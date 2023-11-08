'use client';
import React, { useState } from 'react';

export default function MaltApp() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }

  function parteVera() {
    return (
      <div>
        <h1>Contatore: {count}</h1>
        <button onClick={click}>Aggiungi</button>
      </div>
    );
  }

  function parteFalsa() {
    return (
      <div>
        <h1>Valore nullo</h1>
        <button onClick={click}>Aggiungi</button>
      </div>
    );
  }

  let component;

  if (count !== 0) {
    component = parteVera();
  } else {
    component = parteFalsa();
  }

  return component;
}
