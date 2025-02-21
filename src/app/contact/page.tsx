import { genPageMetadata } from "../seo"
import Image from "next/image";
import dining from "public/images/photography/interiors/ues/dining.jpg"

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 md:gap-16 flex flex-col h-full w-full">
      <div>
        <div className="uppercase mb-4"> Contact</div>
        <div>njcrstudio@gmail.com</div>
        <div>917.209.9253 </div>
        <div>@noahruttenberg</div>

      </div>
      <div className="relative flex-grow md:mt-10">
        <Image
          src={dining}
          alt="Noah"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'top left'
          }}
          placeholder="blur"
        />
      </div>
    </div>
  )
}

