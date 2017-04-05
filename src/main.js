const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindows = electron.BrowserWindow
const ipc = electron.ipcMain

const windows = []

app.on('ready', _ => {
  [1, 2, 3].forEach(_ => {
    let win = new BrowserWindows({
      height: 400,
      width: 400
    })

    win.loadURL(`file://${__dirname}/countdown.html`)

    win.on('closed', _ => {
      console.log('my-app closed!')
      win = null
    })
    windows.push(win)
  })
})

ipc.on('countdown-start', _ => {
  countdown(count => {
    console.log('count', count)
    windows.forEach(win => {
      win.webContents.send('countdown', count)
    })
  })
})
