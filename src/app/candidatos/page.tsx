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
    <>
        <Link href="/">
            <Button>Voltar</Button>
        </Link>
      <CardCandidatos />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border border-black divide-y divide-black">id</th>
            <th className="border border-black divide-y divide-black">Nome</th>
            <th className="border border-black divide-y divide-black">CPF</th>
            <th className="border border-black divide-y divide-black">Descricao</th>
            <th className="border border-black divide-y divide-black">Contato</th>
            <th className="border border-black divide-y divide-black">Contato 2</th>
            <th className="border border-black divide-y divide-black">Nascimento</th>
            <th className="border border-black divide-y divide-black">Pais</th>
            <th className="border border-black divide-y divide-black">UF</th>
            <th className="border border-black divide-y divide-black">Cidade</th>
            <th className="border border-black divide-y divide-black">Rua</th>
            <th className="border border-black divide-y divide-black">Habilidades</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            {
                    json.map((obj:any)=>{
                        return(
                            <>
                                <td className="border border-black divide-y divide-black">{obj.id}</td>
                                <td className="border border-black divide-y divide-black">{obj.name}</td>
                                <td className="border border-black divide-y divide-black">{obj.cpf}</td>
                                <td className="border border-black divide-y divide-black">{obj.description}</td>
                                <td className="border border-black divide-y divide-black">{obj.contact}</td>
                                <td className="border border-black divide-y divide-black">{obj.contact2}</td>
                                <td className="border border-black divide-y divide-black">{obj.date_birth}</td>
                                <td className="border border-black divide-y divide-black">{obj.pais}</td>
                                <td className="border border-black divide-y divide-black">{obj.uf}</td>
                                <td className="border border-black divide-y divide-black">{obj.city}</td>
                                <td className="border border-black divide-y divide-black">{obj.street}</td>
                                <td className="border border-black divide-y divide-black">{obj.skills}</td>
                            </>
                        );
                    })
                
            }
          </tr>
        </tbody>
      </table>

    </>
  );
}
