"use client"
import CardCandidatos from "@/components/CardCandidatos";
import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from 'react'

export default function Candidatos() {
    const [json, setJson] = useState([])

    useEffect(() => {
      
        fetch('https://zubnbzeluoigqrlekvwg.supabase.co/rest/v1/profissionals', {
            method: 'GET',
            headers: {
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1Ym5iemVsdW9pZ3FybGVrdndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODg5OTQsImV4cCI6MjAxNTU2NDk5NH0.OWcr5QAqdHObatJtiUm3G5yBawPg-NAl3zUnJCV-pnA',
              'Content-Type': 'application/json'
            }
           })
            .then((res:any) => res.json())
            .then((data:any) => {
            setJson(data)
            }).catch((e:any)=>console.log(e));
        }, []);


  return (
    <div className="bg-primaryDark min-h-screen flex flex-col justify-start items-center overflow-scroll lg:overflow-auto">
      <div className="my-12 text-white flex flex-col justify-center items-center gap-3 md:flex-row lg:flex-row lg:gap-12 ">
          <Link href="/">
              <Button>Voltar</Button>
          </Link>
          <Link href="/formularios">
              <Button cor="blue">Novo Talento</Button>
          </Link>
      </div>
      <CardCandidatos />
      <table className="table-auto">
        <thead>
          <tr className="text-center text-xl font-medium text-white ">
            <th className="border border-white divide-y divide-white px-3">id</th>
            <th className="border border-white divide-y divide-white px-3">Nome</th>
            <th className="border border-white divide-y divide-white px-3">CPF</th>
            <th className="border border-white divide-y divide-white px-3">Descricao</th>
            <th className="border border-white divide-y divide-white px-3">Contato</th>
            <th className="border border-white divide-y divide-white px-3">Contato 2</th>
            <th className="border border-white divide-y divide-white px-3">Nascimento</th>
            <th className="border border-white divide-y divide-white px-3">Pais</th>
            <th className="border border-white divide-y divide-white px-3">UF</th>
            <th className="border border-white divide-y divide-white px-3">Cidade</th>
            <th className="border border-white divide-y divide-white px-3">Rua</th>
            <th className="border border-white divide-y divide-white px-3">Habilidades</th>
          </tr>
        </thead>
        <tbody>
        
            {
                    json.map((obj:any)=>{
                        return(
                          <tr className="text-center text-md font-medium text-white">
                                <td className="border border-white divide-y divide-white px-3">{obj.id}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.name}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.cpf}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.description}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.contact}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.contact2}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.date_birth}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.pais}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.uf}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.city}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.street}</td>
                                <td className="border border-white divide-y divide-white px-3">{obj.skills}</td>
                            </tr>
                        );
                    })
                
            }
          
        </tbody>
      </table>

    </div>
  );
}
