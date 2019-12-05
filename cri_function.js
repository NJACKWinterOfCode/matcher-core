const CRI = require('chrome-remote-interface');

var cri_function = CRI((client) => {

    const {Page, Runtime} = client;
  
    Promise.all([
      Page.enable()
    ]).then(() => {
      return Page.navigate({url: 'http://localhost:9097/demo/index.html'});
    });
  
    Page.loadEventFired(() => {
        Runtime.evaluate({expression: 'document.getElementById("res").innerHTML'})
        .then((result) => {
          client.close();
          liveServer.shutdown();
          console.log(result.result.value);
          process.exit();
        });
    });
  
  })
  .on('error', (err) => {
    console.error('Cannot connect to browser:', err);
  });
  
  module.exports.cri_function = cri_function;