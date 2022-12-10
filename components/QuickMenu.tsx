import type { PropsWithChildren } from "react"

import { AiFillEye } from "react-icons/ai"
import { MdAirplaneTicket } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"

function QuickMenu() {
  return (
    <nav className="flex items-center justify-around">
      <Action Icon={AiFillEye}>View PIN</Action>
      <Action Icon={MdAirplaneTicket}>Transactions</Action>
      <Action Icon={IoMdSettings}>Settings</Action>
    </nav>
  )
}

function Action({ Icon, children }: PropsWithChildren<{ Icon: any }>) {
  return (
    <button className="flex flex-col items-center gap-2">
      <div className="bg-zinc-100 flex items-center justify-center w-12 h-12 rounded-full">
        <Icon className="text-zinc-500 text-xl" />
      </div>
      <span className="text-sm">{children}</span>
    </button>
  )
}

export default QuickMenu
