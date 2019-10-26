const addon = require('../native');

module.exports = {
  console: {
    info: addon.consoleInfo,
    error: addon.consoleError,
    success: addon.consoleSuccess,
    warn: addon.consoleWarn,
  },
  file: {
    info: addon.fileInfo,
    error: addon.fileError,
    success: addon.fileSuccess,
    warn: addon.fileWarn
  }
};