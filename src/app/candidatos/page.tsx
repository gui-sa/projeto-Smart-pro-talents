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

  useEffect(() => {
    (async () => {
      const dados = await supabase.from("profissionals").select();
      const data = dados.data || [];
      setJson(data);
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
      <table className="table-auto">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="divide-y divide-white border border-white px-3">
              id
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Nome
            </th>
            <th className="divide-y divide-white border border-white px-3">
              CPF
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Descricao
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Contato
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Contato 2
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Nascimento
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Pais
            </th>
            <th className="divide-y divide-white border border-white px-3">
              UF
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Cidade
            </th>
            <th className="divide-y divide-white border border-white px-3">
              Rua
            </th>
            <th className="divide-y divide-white border border-white px-3">
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
                <td className="divide-y divide-white border border-white px-3">
                  {obj.id}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.name}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.cpf}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.description}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.contact}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.contact2}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.date_birth}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.pais}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.uf}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.city}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.street}
                </td>
                <td className="divide-y divide-white border border-white px-3">
                  {obj.skills}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
