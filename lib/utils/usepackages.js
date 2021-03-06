var fs = require('fs')
  , path = require('path')
  , assembly = require('../assembly/package');


exports = module.exports = function usePackages(oe, pkgs, cb) {
  var pkg, i, len;
  for (i = 0, len = pkgs.length; i < len; ++i) {
    pkg = pkgs[i];
    
    var asm = assembly(pkg);
    oe.use(pkg.assembly.namespace || '', asm);
  }
  
  process.nextTick(cb);
};
