describe('Airport', function() {
  
  var airport, plane;

  beforeEach(function() {
    airport = new Airport('Heathrow');
    plane = { 
      name: "747"
    };
    plane2 = { };
  });

  describe('#hangar', function() {
    it('has an array called hangar', function() {
      expect(airport.hangar).toBeInstanceOf(Array);
    });
    it('starts with a length of 0', function() {
      expect(airport.hangar.length).toEqual(0);
    });
  });

  describe('#name', function() {
    it('returns its name when name called', function() {
      expect(airport.name).toEqual('Heathrow');
    });
  });

  describe('#addPlane', function() {
    it('adds plane to hangar', function() {
      airport.addPlane(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('#removePlane', function() {
    it('removes plane from hangar', function() {
      airport.addPlane(plane2);
      airport.addPlane(plane);
      airport.addPlane(plane2);
      airport.removePlane(plane);
      expect(airport.hangar).not.toContain(plane);
    });
  });
});
