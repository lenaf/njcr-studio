import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <div className="p-24">
      Contact
    </div>
  )
}
