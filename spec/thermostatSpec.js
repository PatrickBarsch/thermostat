'use strict';

describe('thermostat', function(){
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20)
  });
  it('has an up function to increase temperature', function() {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });
  it('has a down fuction to decrease the temperature', function() {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  });
  it('has a minimum temperature of 10 degrees', function() {
    for(let i=1; i<=10; i++) {
      thermostat.down()
    }
    expect(thermostat.temperature).toEqual(10)
    thermostat.down();
    expect(thermostat.temperature).toEqual(10)
  });
  it('has a maximum temperature of 25, when powerSavingMode is on', () => {
    for(let i=1; i<=5;i++) {
      thermostat.up()
    };
    expect(thermostat.temperature).toEqual(25)
    thermostat.up()
    expect(thermostat.temperature).toEqual(25)
  });
  it('has a maximum temperature of 32, when powerSavingMode is off', () => {
    thermostat.powerSavingModeOff()
    for(let i=1; i<=12;i++) {
      thermostat.up()
    };
    expect(thermostat.temperature).toEqual(32)
    thermostat.up()
    expect(thermostat.temperature).toEqual(32)
  });
  it('has a reset function which sets the temperature to 20', () => {
    thermostat.powerSavingModeOff()
    for(let i=1; i<=12;i++) {
      thermostat.up()
    };
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  });
  it('returns energy usage, based on temperture', () => {
    expect(thermostat.usage()).toEqual('medium-usage')
    for(let i=1; i<=3;i++) {
      thermostat.down()
    };
    expect(thermostat.usage()).toEqual('low-usage')
    thermostat.reset()
    for(let i=1; i<=6;i++) {
      thermostat.up()
    };    
    expect(thermostat.usage()).toEqual('high-usage')
  });
});