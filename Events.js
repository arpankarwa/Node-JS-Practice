import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('Inverter', () => {
  console.log('Please switch off lights and fans!');

  setTimeout(() => {
    console.log('reminder :: turn of main switch');
  }, 4000);
});


console.log("going on..");
myEmitter.emit('Inverter');
console.log("still going on.....");
// myEmitter.emit('Inverter');