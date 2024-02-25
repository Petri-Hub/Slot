import React from "react";
import { MdOutlineNightsStay } from "react-icons/md";
import { MdClose } from "react-icons/md";

type WindowHeaderProps = {
   title: string
   description: string
   onClose: () => void
}

export function WindowHeader({ title, description, onClose }: WindowHeaderProps) {
   return (
      <header
         style={{ '-webkit-app-region': 'drag' } as React.CSSProperties}
         className="flex justify-between">
         <div className="space-y-1">
            <MdOutlineNightsStay className="text-amber-400 text-2xl" />
            <h1 className="text-zinc-200 text-lg">{title}</h1>
            <p className="text-zinc-500 text-sm tracking-wide">{description}</p>
         </div>
         <ul
            style={{ '-webkit-app-region': 'no-drag' } as React.CSSProperties}
            className="flex gap-x-2">
            <li
               className="cursor-pointer h-min text-zinc-500 hover:text-zinc-400 duration-100 text-2xl"
               onClick={onClose}>
               <MdClose />
            </li>
         </ul>
      </header>
   )
}