import { ITrigger } from "@renderer/interfaces/ITrigger"
import { TimerNumber } from "./TimerNumber"

type TriggerTimerProps = {
   nextTrigger: ITrigger | null
}

export function TriggerTimer({ nextTrigger }: TriggerTimerProps) {

   const hoursLeft = nextTrigger ? nextTrigger.hour - new Date().getHours() : 0
   const minutesLeft = nextTrigger ? nextTrigger.minute - new Date().getMinutes() : 0

   const formatedHour = hoursLeft.toString().padStart(2, '0')
   const formatedMinutes = minutesLeft.toString().padStart(2, '0')

   return (
      <div className="grid grid-cols-timer border border-solid border-zinc-800 p-4">
         <TimerNumber>{formatedHour.charAt(0)}</TimerNumber>
         <TimerNumber>{formatedHour.charAt(1)}</TimerNumber>
         <span>:</span>
         <TimerNumber>{formatedMinutes.charAt(0)}</TimerNumber>
         <TimerNumber>{formatedMinutes.charAt(1)}</TimerNumber>
      </div>
   )
}