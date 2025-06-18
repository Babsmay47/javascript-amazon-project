class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
    this.displayInfo();
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed'; 

    console.log(`brand: ${this.#brand}, Model: ${this.#model}`)
    console.log(`${this.#brand}, ${this.speed} km/hr, Trunk: ${trunkStatus}`);
  }

  go() {
    if(!this.isTrunkOpen){
      this.speed += 5;
    }
    //Limit the Speed to 200
    if(this.speed > 200){
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;

    //limit th speed to 0.

    if(this.speed < 0){
      this.speed = 0;
    }
  }

  openTrunk() {
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if(this.speed > 300){
      this.speed = 300;
    }
  }

  openTrunk() {
    this.isTrunkOpen = false;
  }


}

const car1 = new Car({
  brand: 'Toyata',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

car1.go();
car1.brake();
car1.openTrunk();
car1.go();
car1.closeTrunk();
car1.go();
car1.displayInfo();

raceCar.go();
raceCar.go();
raceCar.openTrunk();
raceCar.displayInfo();

/*
const cars = [{
  brand: 'Toyata',
  model: 'Corolla'
},
{
  brand: 'Tesla',
  model: 'Model 3'
}].map((carDetails) => {
  return new Car(carDetails);
});

console.log(cars);
cars[1].go();
cars[1].go();
cars[1].go();
cars[1].brake();
cars[1].brake();
cars[1].brake();
cars[1].brake();

cars[1].displayInfo();
*/