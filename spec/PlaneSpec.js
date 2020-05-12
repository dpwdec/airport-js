describe('Plane', function() {
  var plane, port;

  beforeEach(function() {
    plane = new Plane();
    port = {
      name: 'Heathrow'
    };
  });

  describe('#landAt', function() {
    it('adds port to the port property', function() {
      plane.land_at(port);
      expect(plane.port).toEqual(port);
    });
  });

  describe('#getPortName', function() {
    it('returns the name of the current port', function() {
      plane.land_at(port);
      expect(plane.getPortName()).toEqual('Heathrow');
    });
  });
});