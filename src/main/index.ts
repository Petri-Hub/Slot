import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { shutdown } from 'electron-shutdown-command'

function createMainWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    resizable: false,
    maximizable: false,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/index.html')
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

function createTriggersWindow(): BrowserWindow {
  const triggerWindow = new BrowserWindow({
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

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    console.log(process.env['ELECTRON_RENDERER_URL'] + '/triggers.html');

    triggerWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/triggers.html')
  } else {
    triggerWindow.loadFile(join(__dirname, '../renderer/triggers.html'))
  }

  return triggerWindow
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron.slot')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  const mainWindow = createMainWindow()
  const triggerWindow = createTriggersWindow()

  //Janelas
  mainWindow.on('ready-to-show', () => mainWindow.show())

  //Eventos IPC
  ipcMain.handle('shutdown', () => {
    shutdown()
  })

  ipcMain.handle('close-everything', () => {
    mainWindow.close()
    triggerWindow.close()
  })

  ipcMain.handle('open-triggers', () => {
    triggerWindow.show()
  })

  ipcMain.handle('close-triggers', () => {
    triggerWindow.hide()
  })


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