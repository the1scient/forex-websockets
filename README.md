﻿# Forex Websockets Repository
 
 ## What are websockets?
 Websockets are defined being a web protocol which provides asynchronous full-duplex (server & client) communication over one single TCP connection.
 
 ## What does this repository does?
 This repository contains the Forex Websockets, which are required for running the entire application.
 Those websockets provide the data needed for the trading proccesses, such as rate, instrument, change percent, etc.
 
 ## How do I run it?
 You can run it with docker or using yarn and npx.
 
 ### Using Docker:
 > docker run -p 3001:3001 image_id

 
 ### Using yarn and npx:
 > yarn install
alternatively, you can use npm
> npm install
then:
> npx ts-node server.ts



 ### Testing:
 The tests are made with **Jest**. You can test it with:
 > jest server.test.ts

 to see the test coverage:
 > jest server.test.ts --coverage
 
 
