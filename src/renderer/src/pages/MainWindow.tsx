import { useTrigger } from "../hooks/useTrigger"
import { WindowHeader } from "@renderer/components/WindowHeader"
import { TriggerTimer } from "@renderer/components/TriggerTimer"
import { EventService } from "@renderer/services/EventService"
import { WINDOWS } from '../../../variables/constants'

export function MainWindow(): JSX.Element {
   const [triggers, nextTrigger] = useTrigger([])

   return (
      <main className="bg-white dark:bg-zinc-900 size-full p-4 space-y-4">
         <WindowHeader
            title="Slot"
            description="Your next trigger will run in..."
            onClose={() => EventService.closeAllWindows()}
         />
         <TriggerTimer
            nextTrigger={nextTrigger}
         />
         <footer className="space-y-2">
            <button
               onClick={() => EventService.showWindow(WINDOWS.TRIGGERS)}
               className="w-full py-2 rounded bg-violet-500 hover:bg-violet-600 dark:bg-violet-900 dark:hover:bg-violet-800 duration-100 text-white text-sm">My triggers</button>
            <button
               onClick={() => EventService.closeAllWindows()}
               className="w-full py-2 rounded border hover:bg-zinc-100 dark:hover:bg-zinc-800 border-solid border-zinc-200 dark:border-zinc-800 duration-100 text-black dark:text-white text-sm">Close</button>
            <span className="text-sm text-zinc-600">
               Made by <a className="text-blue-400" href="https://github.com/Petri-Hub">Petri</a>
            </span>
         </footer>
      </main>
   )
}
