import { TriggerItem } from "@renderer/components/TriggerItem"
import { WindowHeader } from "@renderer/components/WindowHeader"
import { useTrigger } from "@renderer/hooks/useTrigger"
import { IWeekDay } from "@renderer/interfaces/IWeekDay"

export function TriggersWindow() {
    const { triggers, nextTrigger, setTriggers } = useTrigger([
        {
            title: "Teste",
            id: crypto.randomUUID(),
            hour: 23,
            minute: 0,
            weekDays: [IWeekDay.FRIDAY],
            password: crypto.randomUUID()
        }
    ])

    return (
        <main className="bg-zinc-900 size-full p-4 space-y-4">
            <WindowHeader
                title="Your triggers"
                description="See your registered triggers"
            />
            <ul>
                {
                    triggers.map(trigger => <TriggerItem {...trigger} />)
                }
            </ul>
            <footer>
                <footer className="space-y-2">
                    <button
                        className="w-full py-2 rounded bg-purple-800 hover:bg-purple-900 duration-100 text-white text-sm">New Trigger</button>
                    <button
                        className="w-full py-2 rounded border border-solid border-zinc-800 duration-100 text-white text-sm"
                        onClick={() => window.api.closeTriggers()}>Close</button>
                </footer>
            </footer>
        </main>
    )
}