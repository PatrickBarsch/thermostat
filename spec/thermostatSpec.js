describe('thermostat', function(){
  it('has a default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20)
  });
  it('has an up function to increase temperature', function() {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });
});