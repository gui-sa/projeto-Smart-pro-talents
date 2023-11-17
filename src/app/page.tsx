import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center  bg-primaryDark text-white">
        <div className="flex flex-row gap-3">
          <Link href="/empresa">
            <Button>Empresa</Button>
          </Link>
          <Link href="/candidatos">
            <Button cor="blue">Candidatos</Button>
          </Link>
        </div>
        <Link className="mt-3" href="/vagas">
          <Button> Vagas</Button>
        </Link>
        
        
      </div>
    </>
  );
}
