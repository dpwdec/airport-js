describe('Airport', function() {
  
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#hangar', function() {
    it('has an array called hangar', function() {
      expect(airport.hangar).toBeInstanceOf(Array);
    });
    it('starts with a length of 0', function() {
      expect(airport.hangar.length).toEqual(0);
    });
  });
});
