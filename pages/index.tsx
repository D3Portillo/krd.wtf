import { Fragment } from "react"

import SeoTags from "@/components/SeoTags"
import Navigation from "@/components/Navigation"
import CardList from "@/components/CardList"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen px-8 max-w-screen-sm mx-auto shadow-xl">
        <Navigation />
        <h1 className="text-3xl font-bold mt-8">Your cards</h1>
        <CardList />
      </main>
    </Fragment>
  )
}
