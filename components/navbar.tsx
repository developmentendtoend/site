import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC<any> = ({ socialNetworks }: any) => {

  const [ socialNetworksInfo, setSocialNetworksInfo ] = useState([]);

  useEffect(() => {
    if (!!socialNetworks) {
      setSocialNetworksInfo(() => socialNetworks);
    }
  }, [ socialNetworks ])

  return <section className="fixed top-0 left-0 w-screen">
    {
      !!socialNetworksInfo.length && <section className="bg-[#C2302F] flex gap-6 justify-end p-4">
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
}

export default Navbar;