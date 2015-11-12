var fs = require('fs');
var path = require('path');

module.exports = function (context){
  var scripts = ['build.js','clean.js'];
  var newScript;
  var oldScript;
  var bkScript;
  
  scripts.forEach(function(script){
    newScript = path.resolve(context.opts.plugin.dir,'src/ios/cordova/lib', script);
    oldScript = path.resolve(context.opts.projectRoot,'platforms/ios/cordova/lib', script);
    bkScript  = path.resolve(context.opts.projectRoot,'platforms/ios/cordova/lib', script+'.bk.js');
    //create a backup for the script
    console.log('renaming', oldScript, bkScript);
    fs.renameSync(oldScript, bkScript);
    //replace cordova script with ours
    console.log('replacing', newScript, oldScript);
    fs.renameSync(newScript, oldScript);
  });
  
}
