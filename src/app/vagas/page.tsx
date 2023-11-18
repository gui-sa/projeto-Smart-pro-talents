"use client"

import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from 'react'
import { iEmpresa } from "../empresas/page";
import { supabase } from "@/libs/supabase";
// import {supabase} from "../../libs/supabase"
 
export interface iVagas {
  id:number,
  title:string,
  description:string,
  type:string,
  modal_contract:string,
  days_hour: number,
  min_salary: number,
  max_salary: number,
  exp_years: number,
  benefits: string,
  nivel: string,
  duration: number,
  languages: string,
  fk_company_id: number,
  created_at: string,
  status: string,
 
};

export interface iVagasDTO {
  id:number,
  title:string,
  description:string,
  type:string,
  modal_contract:string,
  days_hour: number,
  min_salary: number,
  max_salary: number,
  exp_years: number,
  benefits: string,
  nivel: string,
  duration: number,
  languages: string,
  company_name: string,
  created_at: string,
  status: string,
  companies: iEmpresa
};

export default function Vagas() {

    const [json, setJson] = useState<iVagasDTO[]>([])

    const [loading,setLoading] = useState(true)
 

    useEffect(() => {
            (async()=>{
              const {data,error} = await supabase.from("vacancies").select("*, companies(*)")
              const dados = data || []
              console.log(data)
              setJson(dados)
              setLoading(false)
            })()
         /*   const consulta1 = fetch('https://zubnbzeluoigqrlekvwg.supabase.co/rest/v1/vacancies', {
                method: 'GET',
                headers: {
                  'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Ym5iemVsdW9pZ3FybGVrdndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODg5OTQsImV4cCI6MjAxNTU2NDk5NH0.OWcr5QAqdHObatJtiUm3G5yBawPg-NAl3zUnJCV-pnA',
                  'Content-Type': 'application/json'
                }
              }).then((res) => res.json())
                .then((data) => {
                setJson(data)
                
                }).catch((e)=>console.log(e));
*/
        }, []);

  return (
    <div className="bg-primaryDark min-h-screen flex flex-col justify-start items-center overflow-scroll lg:overflow-auto">
      <div className="my-12 text-white flex flex-col justify-center items-center gap-3 md:flex-row lg:flex-row lg:gap-12 ">
          <Link href="/">
              <Button>Voltar</Button>
          </Link>
          <Link href="/vagas/create">
              <Button cor="blue">Nova Empresa</Button>
          </Link>
      </div>
      {loading && <h1 className="text-white text-lg font-bold mb-4">Carregando...</h1>}
    
   <div className="overflow-auto rounded-lg max-w-full xl:max-w-[1300px]">
<table className="border-collapse w-full min-w-[600px]">
        <thead>
          <tr  className=" text-center text-xl font-medium text-white ">
            <th className="text-sm bg-zinc-900 p-4">id</th>
            <th className="text-sm bg-zinc-900 p-4">Titulo</th>
            <th className="text-sm bg-zinc-900 p-4">Descricao</th>
            <th className="text-sm bg-zinc-900 p-4">Empresa</th>
            <th className="text-sm bg-zinc-900 p-4">Tipo</th>
            <th className="text-sm bg-zinc-900 p-4">Modelo de Trabalho</th>
            <th className="text-sm bg-zinc-900 p-4">Horas por dia</th>
            <th className="text-sm bg-zinc-900 p-4">Salario Mínimo</th>
            <th className="text-sm bg-zinc-900 p-4">Salario Máximo</th>
            <th className="text-sm bg-zinc-900 p-4">Anos de Experiencia</th>
            <th className="text-sm bg-zinc-900 p-4">Beneficios</th>
            <th className="text-sm bg-zinc-900 p-4">Senioridade </th>
            <th className="text-sm bg-zinc-900 p-4">Duração do contrato</th>
            <th className="text-sm bg-zinc-900 p-4">Idiomas</th>
            <th className="text-sm bg-zinc-900 p-4">Status</th>
          </tr>
        </thead>
        <tbody>
            {
                    json.map((obj:iVagasDTO)=>{
                        return(
                          <tr key={obj.id} className="text-center text-md font-medium text-white">
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.id}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.title}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.description}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.companies.name}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.type}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.modal_contract}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.days_hour}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.min_salary}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.max_salary}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.exp_years}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.benefits}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.nivel}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.duration}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.languages}</td>
                            <td className="p-4 border-t-2 border-solid border-zinc-900 bg-zinc-950 text-sm font-medium">{obj.status}</td>
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
