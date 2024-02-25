import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { WindowController } from '../controllers/WindowController'
import { EventHandler } from '../controllers/EventHandler'

//Instanciando classes
const windowController = new WindowController()
const eventHandler = new EventHandler(windowController)

/**
 * When the app
 */
app.whenReady().then(() => {

   //Important for Windows
   electronApp.setAppUserModelId('com.electron.slot')

   //Setting hotkeys listener while in development
   app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
   })

   //Janela principal
   const mainWindow = windowController.createWindow('main', {
      width: 300,
      height: 300,
      resizable: false,
      maximizable: false,
      show: true,
      frame: false,
      autoHideMenuBar: true,
      webPreferences: {
         preload: join(__dirname, '../preload/index.js'),
         sandbox: false
      }
   })

   //Janela de triggers
   const triggerWindow = windowController.createWindow('triggers', {
      width: 300,
      height: 400,
      show: false,
      frame: false,
      resizable: false,
      maximizable: false,
      autoHideMenuBar: true,
      webPreferences: {
         preload: join(__dirname, '../preload/index.js'),
         sandbox: false
      }
   })   

   //Lidando com eventos 
   ipcMain.handle('event', (_, event, params) => eventHandler.handleEvent(event, params))

   app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
         mainWindow.show()
      }
   })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit()
   }
})