class Plane {
  constructor() {
    this.port;
  }
  
  land_at(port) {
    this.port = port;
  }

  getPortName() {
    return this.port.name();
  }
}