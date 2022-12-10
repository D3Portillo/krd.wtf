import Image from "next/image"

import { VscBellDot } from "react-icons/vsc"
import asset_cx from "@/assets/cx.jpg"
function Navigation() {
  return (
    <nav className="flex items-center justify-between my-4">
      <figure className="w-12 h-12 border-2 overflow-hidden border-binance-green rounded-full">
        <Image src={asset_cx} alt="" />
      </figure>
      <VscBellDot className="text-2xl" />
    </nav>
  )
}

export default Navigation
