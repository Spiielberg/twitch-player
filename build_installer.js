const { MSICreator } = require("electron-wix-msi");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "./Twitch-player-win32-x64");
const OUT_DIR = path.resolve(__dirname, "windows_installer");

const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  description: "App to watch live in Twitch.tv",
  exe: "twitch-player",
  name: "Twitch Player",
  manufacturer: "Twitch",
  version: "1.0.4",
  ui: {
    chooseDirectory: true,
  },
});

msiCreator.create().then(() => {
  msiCreator.compile();
});
