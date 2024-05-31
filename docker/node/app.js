var http = require("http");
// Import the os module
var os = require("os");
// Import the system-sleep module
var sleep = require("system-sleep");

// Get the hostname using the os module
var hostname = os.hostname();

http.createServer(function(request, response) {
    sleep(1);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Swarm service (Node app), hostname: " + hostname);
}).listen(8085);

console.log("Node App, port 8085, hostname=" + hostname);
