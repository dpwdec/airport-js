class Airport {
  constructor(name) {
    this.hangar = [];
    this.name = name;
  }

  addPlane(plane) {
  	this.hangar.push(plane);
  }

  removePlane(plane) {
  	let index = this.hangar.indexOf(plane);
  	this.hangar.splice(index);
  }
}