const chromeLauncher = require('chrome-launcher');


var chromelauncherfunction = (async function () {
    await chromeLauncher.launch({
      port: 9222,
      chromeFlags: ['--remote-debugging-port=9222', '--headless'],
    });
  })();

module.exports.chromelauncherfunction = chromelauncherfunction;