import Button from "../../Button";
import Input from "../../Input";
import Link from "next/link";

export default function FormVacancies() {
  return (
    <>
      <div className=" flex min-h-screen items-center justify-center bg-primaryDark">
        <div className="flex w-full max-w-screen-md flex-col items-center gap-2 bg-primaryGrayDark px-11 py-7">
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl ">
            Preencha o seu perfil da Vaga
          </h1>
          <form className="flex w-full flex-col gap-2 text-white">
            <Input
              input="input"
              label="Nome"
              required
              placeholder="Vaga developer"
            />
            <Input
              label="Descrição"
              input="textarea"
              required
              placeholder="Vaga para . . ."
            />
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
                input="input"
                label="Tipo"
                className="sm:w-full"
                placeholder="CLT/PJ/Freelancer"
                required
              />
              <Input
                input="input"
                label="Modelo de Contrato"
                className="sm:w-full"
                required
                placeholder="Residencial"
              />
            </div>

            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
                input="input"
                label="Dia Hora"
                className="sm:w-full"
                placeholder=""
                required
                type="number"
              />
              <Input
                input="input"
                label="Salario Mínimo"
                className="sm:w-full"
                placeholder=""
                required
                type="number"
              />
              <Input
                input="input"
                label="Salario Máximo"
                className="sm:w-full"
                placeholder=""
                required
                type="number"
              />
            </div>
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
                input="input"
                label="Salario Mínimo"
                className="sm:w-full"
                placeholder=""
                required
                type="number"
              />
              <Input
                input="input"
                label="Salario Máximo"
                className="sm:w-full"
                placeholder=""
                required
                type="number"
              />
            </div>
            <Input
              label="Benefícios"
              input="textarea"
              required
              placeholder="Benefícios para . . ."
            />
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
                input="input"
                label="Nível"
                className="sm:w-full"
                placeholder=""
                required
              />
              <Input
                input="input"
                label="Duração em Meses"
                className="sm:w-full"
                placeholder="48"
                required
                type="number"
              />
            </div>
            {/* <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                label="Email"
                type="email"
                className="sm:w-full"
                required
                placeholder="empresa@email.com"
              />
              <Input label="CNPJ" className="sm:w-full" required />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input label="Contato 1" className="sm:w-1/2" required />
              <Input label="Contato 2" className="sm:w-1/2" />
            </div>
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input label="Pais" className="sm:w-full" required />
              <Input label="UF" className="sm:w-full" required />
              <Input label="Cidade" className="sm:w-full" required />
            </div>
            <Input label="Endereço" required />
            <Input label="CEP" required />
            <Input label="Ramo" input="textarea" required />
            <Input label="Cultura" input="textarea" required />
            <Input label="Razão" input="textarea" required /> */}
            <div className="flex flex-row justify-center items-center flex-between gap-5 mt-5">
              <Link href="/vagas">
                <Button cor="blue">Voltar</Button>
              </Link>
              <Button cor="green" type="submit">
                Confirma
            </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
