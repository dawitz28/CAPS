'use strict';
//brains 

// Require our vendor and driver here ... they will hear our events
require('./driver/driver.js');
require('./vendor/vendor.js');



//the event handler takes in an event, and a callback to run.
//Callback can be written inline as shown, or as a reference to a function 
events.on('order-placed', (payload) => {
    events.emit('order', {large: payload})
});