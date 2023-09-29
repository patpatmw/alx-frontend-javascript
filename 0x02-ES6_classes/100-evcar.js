import Car from './10-car';

// This line imports the 'Car' class from a module located at './10-car'.

class EVCar extends Car {
  // This is the 'EVCar' class, which extends the 'Car' class.

  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    // The constructor of 'EVCar' calls the constructor of the parent class 'Car' using 'super'. It also accepts additional parameters specific to EVs.

    this._range = range;
    // It initializes an instance variable '_range' with the provided 'range' value, representing the electric range of the EV.
  }

  static get [Symbol.species]() {
    return Car;
  }
  // This static getter method defines a custom species for the 'EVCar' class, which specifies the constructor function to be used when creating new instances. In this case, it returns the 'Car' constructor, indicating that when you create a new 'EVCar' instance, it will use the 'Car' constructor.

}

export default EVCar;
// The 'EVCar' class is exported as the default export of this module.
