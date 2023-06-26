const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
const handleSubscribe = () => {
    console.log("Thanks For Subscribing to College Wallah");
};
eventEmitter.on("subscribe", handleSubscribe);
eventEmitter.emit("subscribe", "College Wallah");
