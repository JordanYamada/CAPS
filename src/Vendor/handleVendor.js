'use strict';

const events = require('../eventEmitter.js');


const handleVendor = (payload) => {
  console.log('VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0');
  events.emit('global', payload);
}

module.exports = handleVendor;
