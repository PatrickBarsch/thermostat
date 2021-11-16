'use strict';

class Thermostat {
  constructor() { 
    this.temperature = 20 
    this._maxTemperature = 25;
    this._minTemperature = 10;
  }
  powerSavingModeOn() { this._maxTemperature = 25; }
  powerSavingModeOff() { this._maxTemperature = 32; }
  up() { if(this.temperature < this._maxTemperature) { this.temperature++ } }
  down() { if(this.temperature > this._minTemperature) { this.temperature-- }; }
}