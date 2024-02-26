import { useTheme } from "@renderer/hooks/useTheme";
import React from "react";
import { MdOutlineNightsStay } from "react-icons/md";
import { TbMoon } from "react-icons/tb";
import { TbSunHigh } from "react-icons/tb";
import { TbX } from "react-icons/tb";

type WindowHeaderProps = {
   title: string
   description: string
   onClose: () => void
}

export function WindowHeader({ title, description, onClose }: WindowHeaderProps) {
   const [theme, toggleTheme] = useTheme()

   return (
      <header
         style={{ '-webkit-app-region': 'drag' } as React.CSSProperties}
         className="flex justify-between">
         <div>
            <MdOutlineNightsStay className="text-amber-400 dark:text-amber-400 text-2xl" />
            <h1 className="text-black dark:text-zinc-200 text-lg">{title}</h1>
            <p className="text-zinc-500 text-sm tracking-wide">{description}</p>
         </div>
         <ul
            style={{ '-webkit-app-region': 'no-drag' } as React.CSSProperties}
            className="flex gap-x-2 items-center h-min">
            <li
               onClick={toggleTheme}
               className="cursor-pointer h-min text-zinc-500 hover:text-zinc-400 duration-100 text-xl">
               {theme === 'dark' ? <TbMoon /> : <TbSunHigh />}
            </li>
            <li
               onClick={onClose}
               className="cursor-pointer h-min text-zinc-500 hover:text-zinc-400 duration-100 text-2xl">
               <TbX />
            </li>
         </ul>
      </header>
   )
}