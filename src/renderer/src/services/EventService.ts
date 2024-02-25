import { EVENT_NAMES } from '../../../variables/constants'

export class EventService {
   
   public static closeAllWindows(): void {
      EventService.callEvent(EVENT_NAMES.CLOSE_ALL_WINDOWS)
   }

   public static showWindow(name: string): void {
      EventService.callEvent(EVENT_NAMES.SHOW_WINDOW, { name })
   }

   public static hideWindow(name: string): void {
      EventService.callEvent(EVENT_NAMES.HIDE_WINDOW, { name })
   }

   private static callEvent(event, params = {}): void {
      window.callEvent(event, params)
   }
}