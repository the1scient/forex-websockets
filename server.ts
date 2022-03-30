const express = require('express');
const http = require('http');
const WebSocket = require('ws');
import protobuf from 'protobufjs';


const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

let ws = WebSocket;
wss.on('connection', (ws: WebSocket) => {

  const root = new protobuf.Root().loadSync('./YPricingData.proto', {keepCase: true});

const Yaticker = root.lookupType("yaticker");
const Yahoo = new WebSocket('wss://streamer.finance.yahoo.com');


Yahoo.onopen = function open() {
  console.log('[WEBSOCKET] Successfully connected!');
  Yahoo.send(JSON.stringify({
      subscribe: ['GBPUSD=X', 'GBP=X']
  }));
};

Yahoo.onmessage = function incoming(data: { data: string}) {

  console.log(Yaticker.decode(new Buffer(data.data, 'base64')));
  ws.send(JSON.stringify(Yaticker.decode(new Buffer(data.data, 'base64'))));

};




  //send immediatly a feedback to the incoming connection    
    ws.send('Connected');


});



module.exports = app;

export { wss as server };

//start our server
server.listen(3001, async () => {
   await console.log(`Server started on port 3001 :) `);
});