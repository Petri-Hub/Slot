import { WindowHeader } from "@renderer/components/WindowHeader";

export function EditTriggerWindow() {
   return (
      <main className="bg-zinc-900 size-full p-4 space-y-4">
         <WindowHeader
            title="Create Trigger"
            description="Create a new trigger."
            onClose={() => {}}
         />
      </main>

   )
}