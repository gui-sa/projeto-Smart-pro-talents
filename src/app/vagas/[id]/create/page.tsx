"use client";

export default function ListaInscricoes({ params: { id } }:any) {
  console.log(id);
  return <h1>Inscrever novo aluno na vaga de {id}</h1>;
}
