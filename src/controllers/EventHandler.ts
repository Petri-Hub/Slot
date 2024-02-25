import { WindowController } from "./WindowController";
import { EVENT_NAMES } from "../variables/constants";

export class EventHandler{

   constructor(
      private windowController: WindowController
   ){}

   public handleEvent(name: string, params = {}){
      if(!this.isValidEvent(name)) return

      const event = this.getEvents()[name]

      event(params)
   }

   private getEvents(){
      return {
         [EVENT_NAMES.CLOSE_ALL_WINDOWS]: () => this.windowController.closeAllWindows(),
         [EVENT_NAMES.SHOW_WINDOW]: ({ name }) => this.windowController.showWindow(name),
         [EVENT_NAMES.HIDE_WINDOW]: ({ name }) => this.windowController.hideWindow(name),
      }
   }

   private isValidEvent(name: string){
      return Object.keys(this.getEvents()).includes(name)
   }
}