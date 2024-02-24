import { ITrigger } from "@renderer/interfaces/ITrigger";
import { IWeekDay } from '../interfaces/IWeekDay'
import { twMerge } from "tailwind-merge";

export function TriggerItem({ title, hour, minute, weekDays }: ITrigger) {
    return (
        <li className="border border-solid border-zinc-800 group duration-100 rounded p-2">
            <div className="mb-2 flex justify-between">
                <div>
                    <h3 className="text-white text-md">{title}</h3>
                    <p className="text-sm text-zinc-500">{hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}</p>
                </div>
                <div className="flex gap-x-2 flex-shrink-0 group-hover:opacity-100 opacity-0 duration-100">
                    <button className="w-8 h-8 text-xs rounded bg-zinc-800">✏️</button>
                    <button className="w-8 h-8 text-xs rounded bg-red-800">🗑️</button>
                </div>
            </div>
            <ul className="grid grid-cols-7 gap-x-4">
                {
                    Object.values(IWeekDay).filter(value => typeof value === 'number').map(weekDay => {
                        return <li
                            className={twMerge('w-full aspect-square bg-zinc-800 text-white flex items-center justify-center text-xs place rounded-full', weekDays.includes(weekDay) && 'bg-purple-800')}>
                            {'SMTWTFS'.split('')[weekDay]}
                        </li>
                    })
                }
            </ul>
        </li>
    )
}