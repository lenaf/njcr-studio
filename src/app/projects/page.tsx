
import { genPageMetadata } from "../seo"

import WorkCarousel from "./WorkCarousel"

export const metadata = genPageMetadata({ title: 'Work' })

export default function Page() {

  return (
    <WorkCarousel />
  )
}
