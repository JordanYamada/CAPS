'use strict';

const events = require('../src/eventEmitter.js');
const observables = require('../src/eventPool.js');
const handleDriver = require('../src/Driver/handleDriver.js');
const handleVendor = require('../src/Vendor/handleVendor.js');
const handleGlobal = require('../src/Global/handleGlobal.js');

describe('testing event handlers', () => {

  test('Driver should confirm package was picked up', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(events, 'emit');
    events.on(observables[0], handleDriver);
    events.emit(observables[0], { event: 'pick-up' });
    expect(console.log).toHaveBeenCalledWith('DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(events.emit).toHaveBeenCalledWith('pick-up', { event: 'pick-up' });
  });

  test('Driver should confirm package is delivered', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(events, 'emit');
    events.on(observables[1], handleDriver);
    events.emit(observables[1], { event: 'in-transit' });
    expect(console.log).toHaveBeenCalledWith('DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(events.emit).toHaveBeenCalledWith('in-transit', { event: 'in-transit' });
  });
  test('Vendor should confirm package was received', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(events, 'emit');
    events.on(observables[2], handleVendor);
    events.emit(observables[2], { event: 'delivered' });
    expect(console.log).toHaveBeenCalledWith('VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(events.emit).toHaveBeenCalledWith('delivered', { event: 'delivered' });
  });
});

