function DepositWithdraw() {
  return (
    <div className="w-full z-10 fixed bottom-0 left-0">
      <div className="bg-gradient-to-b from-transparent to-white h-12 -mb-1" />
      <section className="bg-white w-full max-w-screen-sm mx-auto drop-shadow text-center rounded-t-3xl p-4 z-10">
        <h2 className="text-zinc-400 text-sm">Card Balance</h2>
        <strong className="text-2xl">123.32 EUR</strong>
        <nav className="flex items-center gap-4 mt-8 font-bold">
          <button className="border rounded-full py-4 px-8 w-full">
            TOP UP
          </button>
          <button className="border rounded-full py-4 px-8 w-full bg-black border-black text-white">
            SEND
          </button>
        </nav>
      </section>
    </div>
  )
}

export default DepositWithdraw
