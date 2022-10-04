'use strict';

const events = require('./src/eventEmitter');
const observables = require('./src/eventPool');
const handleDriver = require('./src/Driver/handleDriver.js');
const handleVendor = require('./src/Vendor/handleVendor.js');
const handleGlobal = require('./src/Global/handleGlobal.js');
const { datetime1, datetime2, datetime3 } = require('./src/Date/handleDate.js');


events.on('pick-up', handleDriver);
events.on('in-transit', handleDriver);
events.on('delivered', handleVendor);
events.on('global', handleGlobal);


events.emit(observables[0], {
  event: 'pick-up',
  time: datetime1,
  payload:
  {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA',
  },
});
events.emit(observables[1], {
  event: 'in-transit',
  time: datetime2,
  payload:
  {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA',
  },
});
events.emit(observables[2], {
  event: 'delivered',
  time: datetime3,
  payload:
  {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA',
  },
});

