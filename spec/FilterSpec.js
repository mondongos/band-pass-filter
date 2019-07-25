describe("Filter", function() {
  var filter

  beforeEach(function() {
  filter = new Filter([80, 90, 100, 110, 120])
  });

  it("allows user to set lower sound limit", function() {
    filter.setLowerLimit(80)
    expect(filter._lowerLimit).toEqual(80)
  })

  it("allows user to set upper sound limit", function() {
    filter.setUpperLimit(120)
    expect(filter._upperLimit).toEqual(120)
  })

  it("show have an array as an argument", function() {
    expect(filter._soundWave).toEqual([80, 90, 100, 110, 120])
  });

  it("should return the soundwave array when called", function() {
    expect(filter.returnSoundwave()).toEqual([80, 90, 100, 110, 120])
  })

  it("should change the integer in array if less than lower limit", function() {
    filter.checkSoundwave()
    expect(filter.returnSoundwave()).toEqual([90, 90, 100, 110, 120])
  })

});
