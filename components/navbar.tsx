import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSocialMedia from "@/lib/useSocialMedia";

const Navbar: FC<any> = () => {

  const { allSocialMedia } = useSocialMedia();

  const [ socialNetworksInfo, setSocialNetworksInfo ] = useState<Array<any>>([]);

  useEffect(() => {
    if (!!allSocialMedia) {
      setSocialNetworksInfo([ ...allSocialMedia ]);
    }
  }, [ allSocialMedia ])

  return <section className="fixed top-0 left-0 w-screen">
    {
      !!socialNetworksInfo.length && <section className="bg-[#C2302F] flex gap-6 justify-end p-4 drop-shadow-navbar pr-6">
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
    <section>
      <ul className="flex justify-end">
        <li className="p-6">Acerca de</li>
        <li className="p-6">Servicios</li>
        <li className="p-6">Alianzas</li>
        <li className="p-6">Clientes y Casos de Éxito</li>
        <li className="p-6">Carrera</li>
        <li className="p-6">Contacto</li>
      </ul>
    </section>
  </section>
}

export default Navbar;