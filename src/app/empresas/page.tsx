"use client"
import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from 'react'
import {supabase} from "../../libs/supabase"
import { iVagasDTO } from "../vagas/page";

export interface iEmpresa {
  id:number,
  name:string,
  cnpj:string,
  email:string,
  branch:string,
  culture:string,
  reason:string,
  mission:string,
  fk_user_id:number,
  contact:string,
  contact2:string,
  country:string,
  uf:string,
  city:string,
  cep:string,
  street:string,
  created_at:string
  vacancies: iVagasDTO[]
}

export default function Empresa() {
  
    const [json, setJson] = useState<iEmpresa[]>([]);
  const [loading,setLoading] = useState(true)
    useEffect(() => {

        (async () => {
          const dados = await supabase.from("companies").select("*, vacancies(*)");
          const data = dados.data || [];
        
          setJson(data);
          setLoading(false)
        })();
      
    }, []);

  return (
    <div className="bg-primaryDark min-h-screen flex flex-col justify-start items-center overflow-scroll lg:overflow-auto">
      <div className="my-12 text-white flex flex-col justify-center items-center gap-3 md:flex-row lg:flex-row lg:gap-12 ">
          <Link href="/">
              <Button>Voltar</Button>
          </Link>
          <Link href="/empresas/create">
              <Button cor="blue">Nova Empresa</Button>
          </Link>
      </div>
      {loading && <h1 className="text-white text-lg font-bold mb-4">Carregando...</h1>}
      <div className="overflow-auto rounded-lg max-w-full xl:max-w-[1200px] ">
      <table className="border-collapse w-full min-w-[600px]">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="text-sm bg-zinc-900 p-4">id</th>
            <th className="text-sm bg-zinc-900 p-4">Nome</th>
            <th className="text-sm bg-zinc-900 p-4">Razão Social</th>
            <th className="text-sm bg-zinc-900 p-4">CNPJ</th>
            <th className="text-sm bg-zinc-900 p-4">E-mail</th>
            <th className="text-sm bg-zinc-900 p-4">Ramo</th>
            <th className="text-sm bg-zinc-900 p-4">Cultura</th>
            <th className="text-sm bg-zinc-900 p-4">Missão</th>
            <th className="text-sm bg-zinc-900 p-4">Contato</th>
            <th className="text-sm bg-zinc-900 p-4">Contato 2</th>
            <th className="text-sm bg-zinc-900 p-4">Pais</th>
            <th className="text-sm bg-zinc-900 p-4">UF</th>
            <th className="text-sm bg-zinc-900 p-4">Cidade</th>
            <th className="text-sm bg-zinc-900 p-4">CEP</th>
            <th className="text-sm bg-zinc-900 p-4">Rua</th>
          </tr>
        </thead>
        <tbody>
            {
                    json.map((obj:iEmpresa)=>{
                        return(
                          <tr key={obj.id} className="text-center text-md font-medium text-white">
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.id}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.name}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.reason}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.cnpj}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.email}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.branch}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.culture}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.mission}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.contact}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.contact2}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.country}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.uf}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.city}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.cep}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.street}</td>
                            </tr>
                        );
                    })
            }
          
        </tbody>
      </table>
      </div>
    </div>
  );
}
