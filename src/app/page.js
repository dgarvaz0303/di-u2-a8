'use client'
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    if(walk){
      alert("lo siguiente es parar");
    }else{
      alert("lo siguiente es caminar");
    }
  }
  

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? 'Parar' : 'Caminar'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Caminar' : 'Parar'}
      </h1>
    </>
  );
}
