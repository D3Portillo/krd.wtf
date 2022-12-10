import { Fragment } from "react"

import SeoTags from "@/components/SeoTags"
import Navigation from "@/components/Navigation"
import CardList from "@/components/CardList"
import QuickMenu from "@/components/QuickMenu"
import DepositWithdraw from "@/components/DepositWithdraw"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-[calc(100vh+6rem)] lg:min-h-[50vw] relative max-w-screen-sm mx-auto shadow-xl">
        <section className="px-8">
          <Navigation />
          <h1 className="text-3xl font-bold mt-8">Your cards</h1>
          <CardList />
          <QuickMenu />
        </section>
      </main>
      <DepositWithdraw />
    </Fragment>
  )
}
