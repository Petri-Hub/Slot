import { IWeekDay } from "../interfaces/IWeekDay"
import { useTrigger } from "../hooks/useTrigger"
import { WindowHeader } from "@renderer/components/WindowHeader"
import { TriggerTimer } from "@renderer/components/TriggerTimer"
import { EventService } from "@renderer/services/EventService"
import { WINDOWS } from '../../../variables/constants'

export function MainWindow(): JSX.Element {
   const { nextTrigger } = useTrigger([
      {
         hour: 23,
         minute: 59,
         id: crypto.randomUUID(),
         password: '123',
         title: "Teste",
         weekDays: [IWeekDay.FRIDAY]
      }
   ])

   return (
      <main className="bg-zinc-900 size-full p-4 space-y-4">
         <WindowHeader
            title="Slot"
            description="Your next trigger will run in..."
            onClose={() => EventService.closeAllWindows() }
         />
         <TriggerTimer
            nextTrigger={nextTrigger}
         />
         <footer className="space-y-2">
            <button
               className="w-full py-2 rounded bg-violet-900 hover:bg-violet-800 duration-100 text-white text-sm"
               onClick={() => EventService.showWindow(WINDOWS.TRIGGERS)}>My triggers</button>
            <button
               className="w-full py-2 rounded border hover:bg-zinc-800 border-solid border-zinc-800 duration-100 text-white text-sm"
               onClick={() => EventService.closeAllWindows()}>Close</button>
         </footer>
      </main>
   )
}
