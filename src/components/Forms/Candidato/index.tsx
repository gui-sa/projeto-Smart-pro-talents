import Button from "../../Button";
import Input from "../../Input";
import {useForm, FormProvider} from "react-hook-form"
import * as zod from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
export const createSchema = zod.object({
  name: zod.string().min(1,"O digite o nome"),
  email: zod.string().email("Preencha corretamente o Email").min(1,"O email é obrigatorio"),
  cpf: zod.string().min(1, "Cpf é obrigatório"),

  contact: zod.string(),
  contact2: zod.string(),
  date_birth: zod.string().min(1,"Informe a data de nascimento"),
  pais: zod.string().min(1, "País é obrigatório"),
  uf: zod.string().min(1, "Escolha o Estado"),
  city: zod.string().min(1,"Cidade é obrigatorio"),
  street: zod.string().min(1,"Endereco obrigatório"),

  skills: zod.string().min(1,"Skill é obrigatorio")

})
export type formTypeCandidato = zod.infer<typeof createSchema>;
 
export default function FormCandidato() {
  const useFormulario = useForm<formTypeCandidato>({
    resolver:zodResolver(createSchema)
  })
  const {handleSubmit,register, formState: {errors}} = useFormulario
  function onSubmit(data: formTypeCandidato) {
    console.log(data)
  }

  return (
    <>
      <div className=" flex min-h-screen items-center justify-center bg-primaryDark">
        <div className="flex w-full max-w-screen-md flex-col items-center gap-2 bg-primaryGrayDark px-11 py-7">
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl ">
            Preencha o seu perfil do profissional
          </h1>
          <FormProvider {...useFormulario}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2 text-white">
            <Input input="input" label="Nome" {...register("name")} placeholder="João . . ."  errors={errors.name?.message}/>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                label="Email"
                {...register("email")}
                className="sm:w-full"
                input="input"
                requiredInput
                placeholder="pessoa@email.com"
                errors={errors.email?.message}
              />
              <Input
              input="input"
                label="CPF"
                className="sm:w-full"
                requiredInput
                {...register("cpf")}
                placeholder="999.999.999.99"
                errors={errors.cpf?.message}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
              input="input"
              {...register("contact")}
                label="Contato 1"
                className="sm:w-1/2"
                requiredInput
                placeholder="+99 (99) 99999-9999 "
                errors={errors.contact?.message}
              />
              <Input
              input="input"
              {...register("contact2")}
                label="Contato 2"
                className="sm:w-1/2"
                placeholder="+99 (99) 99999-9999 "
                errors={errors.contact2?.message}
                requiredInput
              />
            </div>
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
              input="input"
              {...register("pais")}
                label="Pais"
                className="sm:w-full"
                requiredInput
                placeholder="Brasil"
                errors={errors.pais?.message}
              />
              <Input
              input="input"
                label="UF"
                {...register("uf")}
                className="sm:w-full"
                requiredInput
                placeholder="RN"
                errors={errors.uf?.message}
              />
              <Input
              input="input"
              {...register("city")}
                label="Cidade"
                className="sm:w-full"
                requiredInput
                placeholder="Natal"
                errors={errors.city?.message}
              />
            </div>
            <Input input="input" errors={errors.street?.message} {...register("street")} label="Endereço"  />
            <div className="flex flex-col gap-4  sm:flex-row">
              <Input
              input="input"
              {...register("date_birth")}
                label="Data de Nascimento"
                className="sm:w-full"
                requiredInput
            
                type="date"
                errors={errors.date_birth?.message}
              />
              <Input input="input" errors={errors.skills?.message} {...register("skills")}label="Habilidades" className="sm:w-full"  placeholder="HTML/CSS/React"/>
            </div>
            <Button cor="green" type="submit" className="mt-4 self-end">
              Criar Conta
            </Button>
          </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
