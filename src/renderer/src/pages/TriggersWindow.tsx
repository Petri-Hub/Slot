import { TriggerItem } from "@renderer/components/TriggerItem"
import { WindowHeader } from "@renderer/components/WindowHeader"
import { useTrigger } from "@renderer/hooks/useTrigger"
import { IWeekDay } from "@renderer/interfaces/IWeekDay"
import { EventService } from "@renderer/services/EventService"
import { WINDOWS } from '../../../variables/constants'
import { useState } from "react"
import { EditableTriggerItem } from "@renderer/components/EditableTriggerItem"

export function TriggersWindow() {
   const [unlocked, setUnlocked] = useState<string[]>([])
   const [isEditing, setIsEditing] = useState<boolean>(false)
   const [triggers] = useTrigger([
      {
         title: "Teste",
         id: crypto.randomUUID(),
         hour: 23,
         minute: 0,
         weekDays: [
            IWeekDay.FRIDAY,
            IWeekDay.SATURDAY,
            IWeekDay.SUNDAY,
            IWeekDay.MONDAY,
            IWeekDay.TUESDAY,
            IWeekDay.WEDNESDAY,
            IWeekDay.THURSDAY
         ],
         password: crypto.randomUUID()
      }
   ])

   const handleClose = (): void => {
      setUnlocked([])
      setIsEditing(false)
      EventService.hideWindow(WINDOWS.TRIGGERS)
   }

   return (
      <main className="bg-zinc-900 size-full p-4 space-y-4">
         <WindowHeader
            title="Your triggers"
            description="See your registered triggers"
            onClose={handleClose}
         />
         <ul className="space-y-2">
            {
               isEditing && <EditableTriggerItem />
            }
            {
               triggers.map(trigger => <TriggerItem {...trigger} />)
            }
         </ul>
         <footer>
            <footer className="space-y-2">
               <button
                  onClick={() => setIsEditing(true)}
                  className="w-full py-2 rounded bg-purple-800 hover:bg-purple-900 duration-100 text-white text-sm">New Trigger</button>
               <button
                  className="w-full py-2 rounded border border-solid border-zinc-800 duration-100 text-white text-sm"
                  onClick={handleClose}>Close</button>
            </footer>
         </footer>
      </main>
   )
}