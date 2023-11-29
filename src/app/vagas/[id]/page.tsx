"use client";

export default function Inscreve({ params: { id } }:any) {
  console.log(id);
  return <h1>Lista de alunos inscritos da vaga {id}</h1>;
}
