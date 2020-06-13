const { app, BrowserWindow } = require('electron');

const config = require('./config');

function createWindow () {

  win = new BrowserWindow({
    width: config.width,
    height: config.height,
    x: config.x,
    y: config.y,
    darkTheme: true,
    title:config.title,
    webPreferences: {
      nodeIntegration: true
    },
    icon: config.icon,
    show: false
  });

  win.setMenu(null);
  win.maximize();
  win.show();

  win.loadFile('./src/index.html');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
.then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', recreateWindow);

function recreateWindow() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.