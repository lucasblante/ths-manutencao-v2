import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface MaintenanceProps {
  className?: string;
}

export default function Maintenance({ className }: MaintenanceProps) {
  return (
    <div className={twMerge("h-full", className)}>
      <Image
        className={twMerge("hidden dark:flex w-full order-last")}
        src="contructionDark.svg"
        height={1}
        width={1}
        alt="Imagem manutenção"
      />
      <Image
        className={twMerge("flex dark:hidden w-full order-last")}
        src="constructionLight.svg"
        height={1}
        width={1}
        alt="Imagem manutenção"
      />
    </div>
  );
}
