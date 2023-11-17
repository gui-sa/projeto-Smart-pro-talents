import Button from "../../Button";
import Input from "../../Input";

export default function FormCandidato() {
  return (
    <>
      <div className=" flex min-h-screen items-center justify-center bg-primaryDark">
        <div className="flex w-full max-w-screen-md flex-col items-center gap-2 bg-primaryGrayDark px-11 py-7">
          <h1 className="w-full text-center text-2xl font-medium text-white sm:text-3xl ">
            Preencha o seu perfil do profissional
          </h1>
          <form className="flex w-full flex-col gap-2 text-white">
            <Input label="Nome" required placeholder="João . . ." />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                label="Email"
                type="email"
                className="sm:w-full"
                required
                placeholder="pessoa@email.com"
              />
              <Input
                label="CPF"
                className="sm:w-full"
                required
                placeholder="999.999.999.99"
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                label="Contato 1"
                className="sm:w-1/2"
                required
                placeholder="+99 (99) 99999-9999 "
              />
              <Input
                label="Contato 2"
                className="sm:w-1/2"
                placeholder="+99 (99) 99999-9999 "
              />
            </div>
            <div className="flex flex-col  gap-4 sm:flex-row">
              <Input
                label="Pais"
                className="sm:w-full"
                required
                placeholder="Brasil"
              />
              <Input
                label="UF"
                className="sm:w-full"
                required
                placeholder="RN"
              />
              <Input
                label="Cidade"
                className="sm:w-full"
                required
                placeholder="Natal"
              />
            </div>
            <Input label="Endereço" required />
            <div className="flex flex-col gap-4  sm:flex-row">
              <Input
                label="Data de Nascimento"
                className="sm:w-full"
                required
                type="date"
              />
              <Input label="Habilidades" className="sm:w-full" required placeholder="HTML/CSS/React"/>
            </div>
            <Button cor="green" type="submit" className="mt-4 self-end">
              Criar Conta
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
