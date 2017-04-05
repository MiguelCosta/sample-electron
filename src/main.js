const electron = require('electron')

const app = electron.app
const BrowserWindows = electron.BrowserWindow

app.on('ready', _ => {
  new BrowserWindows({
    height: 400,
    width: 400
  })
})
