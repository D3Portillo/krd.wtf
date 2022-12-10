import Image from "next/image"

import asset_card_bg from "@/assets/card-bg.png"

function CardList() {
  return (
    <div className="flex py-8 snap-x snap-proximity overflow-y-auto">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

function Card() {
  return (
    <section className="px-[5vw] snap-center">
      <figure className="overflow-hidden rounded-2xl min-w-[80vw] max-w-[80vw]">
        <Image alt="" src={asset_card_bg} />
      </figure>
    </section>
  )
}

export default CardList
