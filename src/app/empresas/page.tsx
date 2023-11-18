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

    useEffect(() => {

        (async () => {
          const dados = await supabase.from("companies").select("*, vacancies(*)");
          const data = dados.data || [];
        
          setJson(data);
        })();
      
    }, []);
console.log(json)

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
      <table className="table-auto">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="border border-white divide-y divide-white px-3">id</th>
            <th className="border border-white divide-y divide-white px-3">Nome</th>
            <th className="border border-white divide-y divide-white px-3">Razão Social</th>
            <th className="border border-white divide-y divide-white px-3">CNPJ</th>
            <th className="border border-white divide-y divide-white px-3">E-mail</th>
            <th className="border border-white divide-y divide-white px-3">Ramo</th>
            <th className="border border-white divide-y divide-white px-3">Cultura</th>
            <th className="border border-white divide-y divide-white px-3">Missão</th>
            <th className="border border-white divide-y divide-white px-3">Contato</th>
            <th className="border border-white divide-y divide-white px-3">Contato 2</th>
            <th className="border border-white divide-y divide-white px-3">Pais</th>
            <th className="border border-white divide-y divide-white px-3">UF</th>
            <th className="border border-white divide-y divide-white px-3">Cidade</th>
            <th className="border border-white divide-y divide-white px-3">CEP</th>
            <th className="border border-white divide-y divide-white px-3">Rua</th>
          </tr>
        </thead>
        <tbody>
            {
                    json.map((obj:iEmpresa)=>{
                        return(
                          <tr key={obj.id} className="text-center text-md font-medium text-white">
                            <td className="border border-white divide-y divide-white px-3">{obj.id}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.name}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.reason}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.cnpj}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.email}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.branch}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.culture}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.mission}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.contact}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.contact2}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.country}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.uf}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.city}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.cep}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.street}</td>
                            </tr>
                        );
                    })
            }
          
        </tbody>
      </table>

    </div>
  );
}
