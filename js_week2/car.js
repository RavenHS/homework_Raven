var car = {
  name: "Raven's Smart Corvette",
  gas: 0,
  distanceToEmpty: 800 + " km",
  speed: 280 + " km/hr",
  currentLocation: "",
  carStart: function(){
    if(this.gas == 0){
      return "Car won't start.";
    }else{
      return "Let's Go!";
    }
  },
  setGas: function(gallons){
    this.gas += gallons;
  },
  setCurrentLocation: function(location){
    console.log("Your current location is " + location + ". Where would you like to go?");
  },
  honk: function(){
    console.log("Get Out of the Way!");
  }
};

car.setGas(20);
console.log(car.carStart());
console.log("Your distance to empty is " + car.distanceToEmpty + ".");
console.log("You can travel up to " + car.speed + ".");
car.setCurrentLocation("Los Angeles");
car.honk();
