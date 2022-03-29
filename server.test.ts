const app = require("./server.ts");
import WebSocket from 'ws';

describe('testing websocket server', () => {
    
    // create a test that tests a websocket server
    it('should be able to connect to the websocket server', (done) => {
        // create a websocket client
        const ws = new WebSocket('ws://localhost:3001');
        
        // when the connection is open, send some data to the server
        ws.onopen = () => {
            ws.send('something');
        };
        
        // when the connection is open, expect the server to send us some data
        ws.onmessage = (event) => {
            // Connected
            expect(event.data).toBe('User Key Used to many times');
            done();
        };


            // when the connection is open, expect the server to send us some data
            ws.onclose = (event) => {
                expect(event.code).toBe(1000);
                console.log(event);
                console.log(typeof(event));
                done();
            };




    });

// create a test that tests a websocket inside another websocket
    



});



