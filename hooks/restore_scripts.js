var fs = require('fs');
var path = require('path');

module.exports = function (context){
  var scripts = ['build.js','clean.js'];
  var oldScript;
  var bkScript;
  
  scripts.forEach(function(script){
    oldScript = path.resolve(context.opts.projectRoot,'platforms/ios/cordova/lib', script);
    bkScript  = path.resolve(context.opts.projectRoot,'platforms/ios/cordova/lib', script+'.bk.js');
    //restore backup script
    console.log('restoring', bkScript, oldScript);
    fs.renameSync(bkScript, oldScript);
  });
}