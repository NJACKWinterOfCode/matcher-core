const ejs = require('ejs');
const fs = require('fs');
const XY = global.XY || ['../assets/resources/small.jpg', '../assets/resources/big.jpg'];

var renderfile = ejs.renderFile('./demo/template.html.ejs', {X:XY[0], Y:XY[1]}, function(err, str) {
    if(err) console.error(err);
    fs.writeFile('./demo/index.html', str, function(err){
      if(err) console.error(err);
    })
  });
  module.exports.renderfile = renderfile;