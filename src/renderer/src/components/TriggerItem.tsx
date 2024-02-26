import { ITrigger } from "@renderer/interfaces/ITrigger";
import { TbPencilCog, TbTrashX } from "react-icons/tb";

export function TriggerItem({ title, hour, minute, weekDays }: ITrigger) {
   return (
      <li className="border border-solid border-zinc-800 group duration-100 rounded p-2">
         <div className="mb-2 flex justify-between">
            <div>
               <h3 className="text-white text-md">{title}</h3>
               <p className="text-sm text-zinc-500">{hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}</p>
            </div>
            <div className="flex gap-x-2 flex-shrink-0 group-hover:opacity-100 opacity-0 duration-100">
               <button className="flex items-center justify-center w-7 h-7 text-md text-white rounded bg-zinc-800">
                  <TbTrashX className="opacity-70"/>
               </button>
               <button className="flex items-center justify-center w-7 h-7 text-md text-white rounded bg-red-800 ">
                  <TbPencilCog className="opacity-70"/>
               </button>
            </div>
         </div>
         <ul className="grid grid-cols-7 gap-x-4">
         </ul>
      </li>
   )
}