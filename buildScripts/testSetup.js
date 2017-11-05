require('babel-register')();

//diable webpack feature that Mocha doesn't support
require.extensions['.css'] = function() {};
