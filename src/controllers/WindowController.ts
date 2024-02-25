import { is } from "@electron-toolkit/utils"
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron"
import { join } from "path"

export class WindowController {

   constructor(
      private windows: Map<string, BrowserWindow> = new Map()
   ) {}

   public createWindow(name: string, options: BrowserWindowConstructorOptions): BrowserWindow {
      const window = new BrowserWindow(options)

      this.registerWindow(name, window)
      this.loadWindowContent(name, window)

      return window
   }

   public showWindow(name: string): void {
      const window = this.getWindowByName(name)

      if (!window) return

      window.show()
   }

   public hideWindow(name: string): void {
      const window = this.getWindowByName(name)

      if (!window) return

      window.hide()
   }

   public closeWindow(name: string): void {
      const window = this.getWindowByName(name)

      if (!window) return

      this.unregisterWindow(name)

      window.close()
   }

   public closeAllWindows(): void {
      this.getWindowNames().forEach(name => this.closeWindow(name))
   }

   private getWindowNames(): string[] {
      return Array.from(this.windows.keys())
   }

   private registerWindow(name: string, window: BrowserWindow): void {
      this.windows.set(name, window)
   }

   private unregisterWindow(name: string): void {
      this.windows.delete(name)
   }

   private getWindowByName(name: string): BrowserWindow | null {
      return this.windows.get(name) ?? null
   }

   private loadWindowContent(name: string, window: BrowserWindow): void {
      if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
         window.loadURL(process.env['ELECTRON_RENDERER_URL'] + `/index.html?window=${name}`)
      } else {
         window.loadFile(join(__dirname, `../renderer/index.html?window=${name}`))
      }
   }
}