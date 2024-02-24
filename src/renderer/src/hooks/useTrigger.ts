import { ITrigger } from "@renderer/interfaces/ITrigger";
import { useState } from "react";

export function useTrigger(initialValue: ITrigger[] = []) {
    const [triggers, setTriggers] = useState<ITrigger[]>(initialValue)

    const isTriggerForToday = (trigger: ITrigger): boolean => {
        return trigger.weekDays.includes(new Date().getDay())
    }

    const willTriggerOccur = (trigger: ITrigger): boolean => {
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()

        if(hours <= trigger.hour){
            return true
        }

        if((hours === trigger.hour) && minutes <= trigger.minute){
            return true
        }

        return false
    }

    const sortTriggers = (triggerA: ITrigger, triggerB: ITrigger): number => {
        const timeA = String(triggerA.hour) + String(triggerA.minute)
        const timeB = String(triggerB.hour) + String(triggerB.minute)

        return Number(timeA) - Number(timeB)
    }

    const nextTrigger = triggers
        .filter(trigger => isTriggerForToday(trigger))
        .filter(trigger => willTriggerOccur(trigger))
        .sort((triggerA, triggerB) => sortTriggers(triggerA, triggerB))
        .at(0) ?? null


    return { triggers, nextTrigger, setTriggers }
}