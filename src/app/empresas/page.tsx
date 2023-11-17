import {useState} from "react"
export interface ICompany {
  id:number,
  nome: string,
  email:string,
  cnpj: string,
  pais:string,
  ramo: string,
  missao: string,
  cultura:string,
  razao:string,
  contact: string,
  contact2:string,
  uf:string,
  city:string,
  street:string,
  cep?:string,
  user_id?: number
}
export default function Empresa() {
   const dados : ICompany[] = [{id:1,nome: "Smart Soft", email:"smart@gmail.com",cnpj: "543223232", city:"São Paulo",uf:"SP",contact:"+55 121312", contact2: "+55 2312331",cultura:"cultura da empresa",ramo:"Ramo da empresa",missao:"Missao da empresa",pais:"Brasil", razao:"Razao da empresa",street:"Rua da empresa",cep:"31312313123"}]
    
   
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="border border-black divide-y divide-black">Nome</th>
                    <th className="border border-black divide-y divide-black">Cnpj</th>
                    <th className="border border-black divide-y divide-black">Email</th>
                    <th className="border border-black divide-y divide-black">Missao</th>
                    <th className="border border-black divide-y divide-black">Razao</th>
                    <th className="border border-black divide-y divide-black">Ramo</th>
                    <th className="border border-black divide-y divide-black">cultura</th>
                    <th className="border border-black divide-y divide-black">País</th>
                    <th className="border border-black divide-y divide-black">uf</th> 
                    <th className="border border-black divide-y divide-black">city</th> 
                    <th className="border border-black divide-y divide-black">street</th> 
                    <th className="border border-black divide-y divide-black">cep</th> 
                    <th className="border border-black divide-y divide-black">contact</th>
                    <th className="border border-black divide-y divide-black">contact2</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((company) => (
                    <tr key={company.id}>
                            <td>{company.nome}</td>
                            <td>{company.cnpj}</td>
                            <td>{company.email}</td>
                            <td>{company.missao}</td>
                            <td>{company.razao}</td>
                            <td>{company.ramo}</td>
                            <td>{company.cultura}</td>
                            <td>{company.pais}</td>
                            <td>{company.uf}</td>
                            <td>{company.city}</td>
                            <td>{company.street}</td>
                            <td>{company.cep}</td>
                            <td>{company.contact}</td>
                            <td>{company.contact2}</td>    
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}