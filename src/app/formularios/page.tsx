"use client"
import { useEffect, useState } from "react";

export default function Formulario() {
  const [numero, setNumero] = useState(1);

useEffect(()=>{

  console.log(numero)
  
},[numero])



  return (
    <>
      <button onClick={() => setNumero((s) => s + 1)}>mais</button>
      <h1>{numero}</h1>
    </>
  );
}
