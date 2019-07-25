function Filter(soundwaveInput) {
  this._lowerLimit = 90
  this._upperLimit = 110
  this._soundWave = soundwaveInput
}

Filter.prototype.setLowerLimit = function(lowerLimit) {
  this._lowerLimit = lowerLimit
}

Filter.prototype.setUpperLimit = function(upperLimit) {
  this._upperLimit = upperLimit
}

Filter.prototype.returnSoundwave = function() {
  return this._soundWave
}
