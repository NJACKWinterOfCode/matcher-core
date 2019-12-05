const liveServer = require('live-server');
var liveServerStart = liveServer.start({
    open: false,
    port: 9097
  });

module.exports.liveServerStart = liveServerStart;
