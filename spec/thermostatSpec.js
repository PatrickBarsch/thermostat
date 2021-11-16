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
});