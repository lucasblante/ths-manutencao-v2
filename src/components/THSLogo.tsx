import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface THSLogoProps {
  className?: string;
}

export default function THSLogo({ className }: THSLogoProps) {
  return (
    <>
      <Image
        className={twMerge(
          "max-w-3/5 w-3/5 hidden dark:flex md:w-5/12",
          className
        )}
        src="logoTHSDark.svg"
        height={1}
        width={1}
        alt="Logomarca da THS Informática"
      />
      <Image
        className={twMerge(
          "max-w-3/5 w-3/5 flex dark:hidden md:w-5/12",
          className
        )}
        src="logoTHSLight.svg"
        height={1}
        width={1}
        alt="Logomarca da THS Informática"
      />
    </>
  );
}
