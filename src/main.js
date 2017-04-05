const electron = require('electron')

const app = electron.app
const BrowserWindows = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
  mainWindow = new BrowserWindows({
    height: 400,
    width: 400
  })

  mainWindow.on('closed', _ => {
    console.log('my-app closed!')
    mainWindow = null
  })
})
