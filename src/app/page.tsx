import Maintenance from "@/components/Maintenance";
import THSLogo from "@/components/THSLogo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-white text-zinc-800 dark:bg-darkBlue dark:text-zinc-200">
      <main className="flex flex-col w-3/4 h-full gap-8 justify-center items-center text-center space-y-6 md:flex-row md:text-left">
        <div className="flex flex-col h-full w-full md:w-2/4 items-center justify-center gap-8 md:gap-4 md:items-start">
          <THSLogo />
          <h1 className="text-2xl font-semibold md:mt-4">
            Estamos em manutenção para melhor atende-lo!
          </h1>
          <span>
            Estamos trabalhando para melhorar sua experiência em nossa loja. Em
            breve novidades!
          </span>
          <h2 className="text-2xl font-semibold md:mt-4">Fique por dentro</h2>
          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/thsinformatica" target="_blank">
              <Image
                src="logoInstagram.svg"
                height={35}
                width={35}
                alt="Logo Instagram"
              />
            </a>

            <a href="https://www.facebook.com/thsinformatica" target="_blank">
              <Image
                src="logoFacebook.svg"
                height={35}
                width={35}
                alt="Logo Facebook"
              />
            </a>

            <a href="https://wa.me/551935822711" target="_blank">
              <Image
                src="logoWhatsapp.svg"
                height={35}
                width={35}
                alt="Logo Whatsapp"
              />
            </a>
          </div>
        </div>
        <Maintenance className="hidden dark:hidden md:flex md:dark:flex" />
      </main>

      <footer className="flex flex-col w-3/4 bottom-0 top-auto items-center text-center text-zinc-400 text-xs py-4 md:justify-end md:items-end">
        <div className="h-px w-full mt-2 mb-6 bg-zinc-400 "></div>
        <span>©THS Informática 2023. Todos os direitos reservados.</span>
        <a
          className="hover:underline hover:text-orange-400"
          href="https://www.capy.digital"
          target="_blank"
        >
          Desenvolvido por ©Capy Soluções.
        </a>
      </footer>
    </div>
  );
}
