import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSocialMedia from "@/lib/useSocialMedia";

const Footer = () => {

  const { allSocialMedia } = useSocialMedia();

  const [ socialNetworksInfo, setSocialNetworksInfo ] = useState<Array<any>>([]);

  useEffect(() => {
    if (!!allSocialMedia) {
      setSocialNetworksInfo([ ...allSocialMedia ]);
    }
  }, [ allSocialMedia ])

  return <section className="w-full bg-[#585A5B] text-white flex flex-col py-6">
    <section className="flex items-center gap-[40px] px-6">
      <section className="grow-[2]">ICON</section>
      <section className="flex flex-col grow">
        <p>Contacto</p>
        <Link href="mailto:contacto@e2e.com.mx" passHref legacyBehavior>
          <a>contacto@e2e.com.mx</a>
        </Link>
        <Link href="tel:+527222275249" passHref legacyBehavior>
          <a>Tel: 72-2227-5249</a>
        </Link>
        <Link href="tel:+525539933103" passHref legacyBehavior>
          <a>Mov: 55-3993-3103</a>
        </Link>
      </section>
      <section className="flex flex-col grow">
        <p>E2E</p>
        <Link href="" passHref legacyBehavior>
          <a>Acerca de</a>
        </Link>
        <Link href="" passHref legacyBehavior>
          <a>Servicios</a>
        </Link>
        <Link href="" passHref legacyBehavior>
          <a>Alianzas</a>
        </Link>
        <Link href="" passHref legacyBehavior>
          <a>Clientes y Casos de Éxito</a>
        </Link>
        <Link href="" passHref legacyBehavior>
          <a>Carrera</a>
        </Link>
        <Link href="" passHref legacyBehavior>
          <a>Aviso de privacidad</a>
        </Link>
      </section>
    </section>
    <section className="w-screen flex justify-between items-center px-6">
      <p>END TO END Enterprise Solutions S.A. de C.V.</p>
    {
      !!socialNetworksInfo.length && <section className=" flex gap-6 justify-end p-4">
        {
          socialNetworksInfo.map( ({ src, alt, url }: any, i: number) => <Link key={`social-${i}`} href={url} legacyBehavior>
              <a target="_blank">
                <Image className="cursor-pointer" src={`/icons/${src}`} alt={alt} width={25} height={25} />
              </a>
            </Link>
          )
        }
      </section>
    }
  </section>
  </section>
}

export default Footer