"use client";
import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { supabase } from "../../libs/supabase";

export interface iCandidatos {
  id: number;
  name: string;
  email: string;
  cpf: string;
  description: string;
  contact: string;
  contact2: string;
  date_birth: string;
  pais: string;
  uf: string;
  city: string;
  street: string;
  fk_profission_id: number;
  fk_user_id: number;
  created_at: string;
  skills: string;
}

export default function Candidatos() {
  const [json, setJson] = useState<iCandidatos[]>([]);
  const [loading,setLoading] = useState(true)
 

  useEffect(() => {
    (async () => {
      const dados = await supabase.from("profissionals").select();
      const data = dados.data || [];
      setJson(data);
      setLoading(false)
    })();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start overflow-scroll bg-primaryDark lg:overflow-auto">
      <div className="my-12 flex flex-col items-center justify-center gap-3 text-white md:flex-row lg:flex-row lg:gap-12 ">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
        <Link href="/candidatos/create">
          <Button cor="blue">Novo Talento</Button>
        </Link>
      </div>
      {loading && <h1 className="text-white text-lg font-bold mb-4">Carregando...</h1>}
    
      <div className="overflow-auto rounded-lg max-w-full xl:max-w-[1300px]">
      <table className="table-auto">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="text-sm bg-zinc-900 p-4">
              id
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Nome
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              CPF
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Descricao
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Contato
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Contato 2
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Nascimento
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Pais
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              UF
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Cidade
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Rua
            </th>
            <th className="text-sm bg-zinc-900 p-4">
              Habilidades
            </th>
          </tr>
        </thead>
        <tbody>
          {json.map((obj: iCandidatos) => {
            return (
              <tr
                key={obj.id}
                className="text-md text-center font-medium text-white"
              >
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.id}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.name}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.cpf}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.description}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.contact}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.contact2}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.date_birth}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.pais}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.uf}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.city}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.street}
                </td>
                <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">
                  {obj.skills}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
