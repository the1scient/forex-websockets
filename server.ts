const express = require('express');
const http = require('http');
const WebSocket = require('ws');



const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

let ws = WebSocket;
wss.on('connection', (ws: WebSocket) => {

  const tradermade = new WebSocket('wss://marketdata.tradermade.com/feedadv');

function connect() {
  
  tradermade.on('open', function open() {
    tradermade.send("{\"userKey\":\"sioZfyXNXtuji47n2BMGA\", \"symbol\":\"GBPUSD\"}");
 });

 tradermade.on('message', function incoming(data: object) {
  //console.log(data.toString('utf8'));

  ws.send(data.toString());



  tradermade.on('close', function() {
    setTimeout(function() {
     connect(); 
     
    }, 1000);
  });

});

}
connect();

    //send immediatly a feedback to the incoming connection    
    ws.send('Connected');
});



module.exports = app;

export { wss as server };

//start our server
server.listen(3001, async () => {
   // await console.log(`Server started on port 3001 :) `);
});