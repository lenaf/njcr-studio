import { genPageMetadata } from "../seo"
import Image from "next/image";
import koreaTown7 from "public/images/photography/interiors/koreaTown7.jpeg"

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div>
        <div className="uppercase mb-4"> Contact</div>
        <div>njcrstudio@gmail.com</div>
        <div>917.209.9253 </div>
        <div>@noahruttenberg</div>
      </div>
      <Image
        src={koreaTown7}
        alt=''
        width={500}
        className="w-full "
      />
    </div>
  )
}