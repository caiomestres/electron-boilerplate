// Modules
const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

//Referencia global ao objeto para ele não ser garbage collected
let mainWindow


// Cria novo BrowserWindow quando app está pronto
function createWindow() {

  let state = windowStateKeeper({
    defaultWidth: 800, defaultHeight: 800
  })

  mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width: state.width, height: state.height,
    minWidth: 800, minHeight: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('renderer/main.html')

  // Gerenciar o estado da janela
  state.manage(mainWindow)

  // Evento pra quando main.Window for fechada
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Electron `app` está pronto
app.on('ready', createWindow)

// Quit quando todas janelas forem fechadas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Quando ícone do app está rodando e é clicado, recria BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
