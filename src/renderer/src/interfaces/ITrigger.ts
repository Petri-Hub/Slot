import { IWeekDay } from "./IWeekDay"

export type ITrigger = {
    id: string
    password: string
    hour: number
    minute: number
    title: string
    weekDays: IWeekDay[]
}