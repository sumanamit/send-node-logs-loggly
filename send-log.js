var winston  = require('winston');
require('winston-loggly-bulk');

winston.add(winston.transports.Loggly, {
   inputToken: "45866f2f-57c3-459c-bc3d-a19214c34edf",
   subdomain: "supportindia",
   tags: ["Winston-NodeJS"],
   json:true
});

winston.log('info',"Hello World from Node.js!");