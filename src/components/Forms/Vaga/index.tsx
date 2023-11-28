"use client"
import Button from "../../Button";
import Input from "../../Input";
import Link from "next/link";
import {useForm,FormProvider} from "react-hook-form"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {supabase} from "../../../libs/supabase";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { iVagas } from "@/app/vagas/page";
import { useState, useEffect } from 'react';
import { iEmpresa } from "@/app/empresas/page";

const schemaCreateVaga = zod.object({
  title: zod.string().min(1,"Titulo da Vaga é necessário"),
  description: zod.string().min(1,"É necessário que a vaga possua descrição"),
  type: zod.string().min(1,"É necessário que a vaga possua o tipo de contrato"),
  modal_contract: zod.string().min(1,"É necessário que a vaga possua o modelo de contratação"),
  days_hour: zod.coerce.number().min(1,"É necessário que a vaga possua horas por dia requisitada"),
  min_salary: zod.coerce.number().min(1,"É necessário que a vaga possua faixa salarial"),
  max_salary: zod.coerce.number().min(1,"É necessário que a vaga possua faixa salarial"),
  exp_years: zod.coerce.number().min(1,"É necessário que a vaga possua faixa de experiência"),
  benefits: zod.string().min(1,"É necessário que a vaga possua beneficios"),
  nivel: zod.string().min(1,"É necessário que a vaga possua nível"),
  duration: zod.coerce.number().min(1,"É necessário que a vaga possua uma previsao de duraçao de contrato"),
  languages: zod.string().min(1,"É necessário que a vaga diga quais linguas é requisitada"),
  fk_company_id: zod.string(),
})



export type createVagaType = zod.infer<typeof schemaCreateVaga>

export default function FormVacancies() {

  const [json, setJson] = useState<iEmpresa[]>([]);
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
  
    (async () => {
      const dados = await supabase.from("companies").select("*");
      const data = dados.data || [];
      setJson(data);
      setLoading(false);
    })();
  
  }, []);


    const router = useRouter();

    const formCreateVaga = useForm<createVagaType>({
      resolver: zodResolver(schemaCreateVaga) 
    }) 
    const {handleSubmit,register,formState : {errors}} = formCreateVaga


    async function onSubmit(data:createVagaType) {
      try{
        const { error, data:iVagas } = await supabase.from("vacancies").insert({...data, status:"aberta"}).select()
        if (error) {
          console.log(error);
          toast.error("Erro ao cadastrar vaga");
          return [];
        }
        toast.success("Vaga cadastrada com sucesso")
        router.push("/vagas");
        return data;
      }catch(e){
        console.log(e)
        return [];
      }
    }

  return (
    <>
      <div className=" flex min-h-screen items-center justify-center bg-primaryDark">
        <div className="flex w-full max-w-screen-md flex-col items-center gap-2 bg-primaryGrayDark px-11 py-7">
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl ">
            Preencha o Perfil da Vaga
          </h1>
          <FormProvider {...formCreateVaga}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2 text-white">
              <label className="text-lg mt-8">
                Selecione a Empresa
                <select 
                  {...register("fk_company_id")}
                  className="mt-3 h-[71px] w-full bg-primaryDark py-6 transition-all pl-5 outline-none focus:bg-zinc-950">
                  {json.map((obj)=>{
                    return(
                        <option 
                        value={obj.id}
                        className="h-[71px] w-full bg-primaryDark py-6 transition-all pl-5 outline-none focus:bg-zinc-950"
                        >{obj.name}
                        </option>
                    );
                  })}
                </select>
              </label>
              <Input
                {...register("title")}
                errors={errors.title?.message}
                input="input"
                label="Titulo"
                required
                placeholder="Vaga Software Developer"
              />
              <Input
                {...register("description")}
                errors={errors.description?.message}
                label="Descrição"
                input="textarea"
                required
                placeholder="Vaga para . . ."
              />
              <div className="flex flex-col  gap-4 sm:flex-row">
                <Input
                  {...register("type")}
                  errors={errors.type?.message}
                  input="input"
                  label="Tipo"
                  className="sm:w-full"
                  placeholder="CLT/PJ/Freelancer"
                  required
                />
                <Input
                  {...register("modal_contract")}
                  errors={errors.modal_contract?.message}
                  input="input"
                  label="Modelo de Contrato"
                  className="sm:w-full"
                  required
                  placeholder="Remoto/Hibrido/Presencial"
                />
              </div>

              <div className="flex flex-col  gap-4 sm:flex-row">
                <Input
                  {...register("days_hour")}
                  errors={errors.days_hour?.message}
                  input="input"
                  type="number"
                  label="Hora por dia"
                  className="sm:w-full"
                  placeholder="8"
                  required
                />
                <Input
                  {...register("min_salary")}
                  errors={errors.min_salary?.message}
                  input="input"
                  label="Salario Mínimo"
                  className="sm:w-full"
                  placeholder="2000"
                  required
                />
                <Input
                  {...register("max_salary")}
                  errors={errors.max_salary?.message}
                  input="input"
                  label="Salario Máximo"
                  className="sm:w-full"
                  placeholder="5000"
                  required
                />
              </div>
              <Input
                {...register("benefits")}
                errors={errors.benefits?.message}
                label="Benefícios"
                input="textarea"
                required
                placeholder="Benefícios para . . ."
              />
              <div className="flex flex-col  gap-4 sm:flex-row">
                <Input
                  {...register("nivel")}
                  errors={errors.nivel?.message}
                  input="input"
                  label="Nível"
                  className="sm:w-full"
                  placeholder="Senior"
                  required
                />
                <Input
                  {...register("duration")}
                  errors={errors.duration?.message}
                  input="input"
                  label="Duração em Meses"
                  className="sm:w-full"
                  placeholder="48"
                  required
                />
                <Input
                  {...register("exp_years")}
                  errors={errors.exp_years?.message}
                  input="input"
                  label="Anos de experiência"
                  className="sm:w-full"
                  placeholder="3"
                  required
                />
              </div>
              <Input
                {...register("languages")}
                errors={errors.languages?.message}
                label="Idiomas"
                input="textarea"
                required
                placeholder="Ingles Avançado, Português nativo"
              />
              <div className="flex flex-row justify-center items-center flex-between gap-5 mt-5">
                <Link href="/vagas">
                  <Button cor="blue">Voltar</Button>
                </Link>
                <Button cor="green" type="submit">
                  Confirma
              </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
