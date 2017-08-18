// plase don't import electron here

const isDev = require('electron-is-dev');
const { join } = require('path');

const APP_PATH = isDev ? join(process.cwd(), 'app') : join(process.resourcesPath, 'app');

module.exports = {
  isDev,
  APP_PATH
};



