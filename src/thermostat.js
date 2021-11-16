'use strict';

class Thermostat {
  constructor() { 
    this.temperature = 20 
  }
  up() { if(this.temperature < 25) {this.temperature++} }
  down() { if(this.temperature > 10) { this.temperature-- }; }
}