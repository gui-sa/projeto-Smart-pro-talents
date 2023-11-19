import Button from "../../Button";
import Input from "../../Input";
import {useForm,FormProvider} from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";




const schemaCreateCompany = zod.object({
  name: zod.string().min(1,"Nome da empresa é necessário"),
  cnpj:zod.string().min(1,"Cnpj é necessário"),
  email:zod.string().email("Insira um formato de email correto"),
  branch:zod.string().min(1,"Informe o ramo da empresa"),
  culture:zod.string().min(1,"Informe a cultura da empresa"),
  reason:zod.string().min(1,"Informe a razão da empresa "),
  mission:zod.string().min(1,"Informe a missão da empresa "),
  contact:zod.string().min(1,"Informe o contato"),
  contact2:zod.string().min(1,"Informe o contato"),
  country:zod.string().min(1,"Informe o País"),
  uf:zod.string().min(1,"Informe o estado"),
  city:zod.string().min(1,"Informe a cidade"),
  cep:zod.string().min(1,"Informe o cep"),
  street:zod.string().min(1,"Informe o endereco"),
})
export type createCompanyType = zod.infer<typeof schemaCreateCompany>

export default function FormCompany() {
  const formCreateCompany = useForm<createCompanyType>({
    resolver: zodResolver(schemaCreateCompany) 
  }) 
  const {handleSubmit,register,formState : {errors}} = formCreateCompany
function onSubmit(data:createCompanyType) {
  console.log(data)
}
console.log(errors)

  return (
    <>
      <div className="py-8  flex min-h-screen items-center justify-center bg-primaryDark">
        <div className="flex w-full max-w-screen-md flex-col items-center gap-2 bg-primaryGrayDark px-11 py-7">
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl ">
            Preencha o perfil da Empresa
          </h1>
          <FormProvider {...formCreateCompany}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2 text-white">
              <Input 
              {...register("name")}
                input="input"
                label="Nome" 
                placeholder="Copico Co. . . ."
                errors={errors.name?.message}
              />
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                {...register("email")}
                  label="Email"
                  type="email"
                  input="input"
                  className="sm:w-full"
                  errors={errors.email?.message}
                  placeholder="empresa@email.com"
                />

                <Input
                {...register("cnpj")}
                  label="CNPJ"
                  className="sm:w-full"
                  errors={errors.cnpj?.message}
                  input="input"
                  placeholder="XX.XXX.XXX/0001-XX"
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                {...register("contact")}
                  input="input"
                  label="Contato 1"
                  className="sm:w-1/2"
                  errors={errors.contact?.message}
                  placeholder="+99 (99) 99999-9999 "
                />
                <Input
                {...register("contact2")}
                  input="input"
                  label="Contato 2"
                  className="sm:w-1/2"
                  placeholder="+99 (99) 99999-9999 "
                  errors={errors.contact2?.message}
                />
              </div>
              <div className="flex flex-col  gap-4 sm:flex-row">
                <Input
                {...register("country")}
                  input="input"
                  label="Pais"
                  className="sm:w-full"
                  errors={errors.country?.message}
                  placeholder="Brasil"
                />
                <Input
                  {...register("uf")}
                  input="input"
                  label="UF"
                  className="sm:w-full"
                  errors={errors.uf?.message}
                  placeholder="RN"
                />
                <Input
                {...register("city")}
                  input="input"
                  label="Cidade"
                  className="sm:w-full"
                  errors={errors.city?.message}
                  placeholder="Natal"
                />
              </div>
              <Input   errors={errors.street?.message} {...register("street")} input="input" label="Endereço" placeholder="Digite o enderenco" />
              <Input input="input"  errors={errors.cep?.message} {...register("cep")} label="CEP"  placeholder="99999-999" />
              <Input  label="Ramo"    placeholder="Descreva o ramo da empresa"  errors={errors.branch?.message} {...register("branch")} input="textarea"  />
              <Input label="Cultura" placeholder="Descreva a da empresa"   errors={errors.culture?.message} {...register("culture")} input="textarea"  />
              <Input label="Razão" placeholder="Descreva a razão da empresa"   errors={errors.reason?.message} {...register("reason")} input="textarea"  />
              <Input {...register("mission")} label="Missão" placeholder="Descreva a missão da empresa"   errors={errors.reason?.message} input="textarea"  />

              <Button cor="blue" type="submit" className="mt-4 self-end">
                Criar Conta
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
