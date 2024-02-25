import { contextBridge, ipcRenderer } from 'electron'

declare global {
   interface Window { 
      callEvent: (event: string, params: any) => void; 
   }
}


contextBridge.exposeInMainWorld('callEvent', (...args: any[]) => ipcRenderer.invoke('event', ...args))
