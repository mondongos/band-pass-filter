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

Filter.prototype.checkSoundwave = function() {
  for (var i = 0; i < this._soundWave.length; i++)
  if (this._soundWave[i] < this._lowerLimit) {
    this._soundWave[i] = this._lowerLimit
  } else if (this._soundWave[i] > this._upperLimit) {
    this._soundWave[i] = this._upperLimit
  }
}
