import { contextBridge, ipcRenderer } from 'electron'

const api = {
    'closeTriggers': () => ipcRenderer.invoke('close-triggers'),
    'closeEverything': () => ipcRenderer.invoke('close-everything'),
    'openTriggers': () => ipcRenderer.invoke('open-triggers'),
    'shutdown': () => ipcRenderer.invoke('shutdown')
}

contextBridge.exposeInMainWorld('api', api)
