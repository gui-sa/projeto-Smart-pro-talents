"use client"
import CardCandidatos from "@/components/CardCandidatos";
import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from 'react'
import {supabase} from "../../libs/supabase"

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
  status: string
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
  status: string
};

export default function Vagas() {

    const [json, setJson] = useState<iVagasDTO[]>([])



    useEffect(() => {
        
            const consulta1 = fetch('https://zubnbzeluoigqrlekvwg.supabase.co/rest/v1/vacancies', {
                method: 'GET',
                headers: {
                  'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Ym5iemVsdW9pZ3FybGVrdndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODg5OTQsImV4cCI6MjAxNTU2NDk5NH0.OWcr5QAqdHObatJtiUm3G5yBawPg-NAl3zUnJCV-pnA',
                  'Content-Type': 'application/json'
                }
              }).then((res) => res.json())
                .then((data) => {
                setJson(data)
                }).catch((e)=>console.log(e));

        }, []);


  return (
    <div className="bg-primaryDark min-h-screen flex flex-col justify-start items-center overflow-scroll lg:overflow-auto">
      <div className="my-12 text-white flex flex-col justify-center items-center gap-3 md:flex-row lg:flex-row lg:gap-12 ">
          <Link href="/">
              <Button>Voltar</Button>
          </Link>
          <Link href="/formularios">
              <Button cor="blue">Nova Empresa</Button>
          </Link>
      </div>
      <CardCandidatos />
      <table className="table-auto">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="border border-white divide-y divide-white px-3">id</th>
            <th className="border border-white divide-y divide-white px-3">Titulo</th>
            <th className="border border-white divide-y divide-white px-3">Descricao</th>
            <th className="border border-white divide-y divide-white px-3">Empresa</th>
            <th className="border border-white divide-y divide-white px-3">Tipo</th>
            <th className="border border-white divide-y divide-white px-3">Modelo de Trabalho</th>
            <th className="border border-white divide-y divide-white px-3">Horas por dia</th>
            <th className="border border-white divide-y divide-white px-3">Salario Minimo</th>
            <th className="border border-white divide-y divide-white px-3">Salario Maximo</th>
            <th className="border border-white divide-y divide-white px-3">Anos de Experiencia</th>
            <th className="border border-white divide-y divide-white px-3">Beneficios</th>
            <th className="border border-white divide-y divide-white px-3">Senioridade </th>
            <th className="border border-white divide-y divide-white px-3">Duracao do contrato</th>
            <th className="border border-white divide-y divide-white px-3">Idiomas</th>
            <th className="border border-white divide-y divide-white px-3">Status</th>
          </tr>
        </thead>
        <tbody>
            {
                    json.map((obj:iVagasDTO)=>{
                        return(
                          <tr className="text-center text-md font-medium text-white">
                            <td className="border border-white divide-y divide-white px-3">{obj.id}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.title}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.description}</td>
                            <td className="border border-white divide-y divide-white px-3">{"JOIN DA EMPRESA"}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.type}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.modal_contract}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.days_hour}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.min_salary}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.max_salary}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.exp_years}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.benefits}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.nivel}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.duration}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.languages}</td>
                            <td className="border border-white divide-y divide-white px-3">{obj.status}</td>
                            </tr>
                        );
                    })
            }
          
        </tbody>
      </table>

    </div>
  );
}
