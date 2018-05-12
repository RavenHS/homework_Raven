// //OBJECT
//  var restaurant = {
//    name: 'Baked It',
//    employees: [
//      {name:"Joe",role:"server"}
//    ],
//    dishes: [
//      { name:'Chicken Salad', price: 9, cooked: false },
//      { name:'Baked Ziti', price: 12, cooked: false }
//    ],
//    order: function(index)
//    {
//      return this.dishes[index];
//    },
//    cook: function(dish)
//    {
//      dish.cooked = true;
//      return dish;
//    },
//    hire: function(name)
//    {
//      var employee = {
//        name: name,
//        role: "host"
//      }
//      this.employees.push(employee);
//    },
//    listEmployees: function()
//    {
//      for(index in this.employees)
//      {
//        var employee = this.employees[index];
//        console.log(employee.name);
//      }
//    }
//  }
//
//  //OBJECT INTERACTIONS
//  console.log(restaurant.name);
//
//  console.log("# Employees at opening #");
//  restaurant.listEmployees(); //will show "Joe"
//  console.log("# Employees after a week #");
//  restaurant.hire('Brittany');
//  restaurant.listEmployees(); //will show "Joe" & "Brittany"
//
//  //hire 3 more people!
//
//  console.log("Has the following dishes:");
//  for(index in restaurant.dishes){
//    var dish = restaurant.dishes[index];
//    console.log(dish.name, " for $", dish.price);
//  }
//  myOrder = restaurant.order(1); //order the baked ziti
//  console.log(myOrder.name);
//  console.log("Is my order cooked?", myOrder.cooked);
//  myOrder = restaurant.cook(myOrder);
//  console.log("Is my order cooked?", myOrder.cooked);


var myRestaurant = {
  name: 'Plant Food',
  dishes: [
    {name: 'Cashew Cheese Stuffed Shells', price: 12, cooked: false},
    {name: 'BBQ Jackfruit Sliders', price: 10, cooked: false},
    {name: 'Mushroom Burger', price: 10, cooked: false},
    {name: 'Avocado Taco', price: 6, cooked: false}
  ],
  readMenu: function(){
    for(index in this.dishes){
      var dish = this.dishes[index]
      console.log(dish.name, dish.price);
    }
  },
  order: function(index){
    return this.dishes[index]
  },
  cook: function(dish){
    dish.cooked = true;
    return dish;
  },
  employees: [
    {name: "Raven", role: "Owner"},
    {name: "Wendy", role: "Chef"},
    {name: "Yara", role: "Host"},
    {name: "Chris", role: "Server"}
  ],
  listEmployees: function(){
    for(index in this.employees){
      var employee = this.employees[index]
      console.log(employee.name, employee.role);
    }
  },
  hire: function(name, role){
    employee = {name: name, role: role}
    this.employees.push(employee)
  }
}

console.log("Welcome to " + myRestaurant.name + ".");
myRestaurant.readMenu();
myOrder = myRestaurant.order(1);
console.log("I would like the " + myOrder.name + ", please.");
console.log("Is my order cooked?", myOrder.cooked);
myRestaurant.cook(myOrder);
console.log("Is my order cooked?", myOrder.cooked);
console.log("The lovely employees of Plant Food include: ");
myRestaurant.listEmployees();
myRestaurant.hire("Damien", "Sous Chef");
myRestaurant.hire("Courtney", "Server");
myRestaurant.hire("Aimee", "Host");
console.log("We've hired 3 more employees! The new team includes: ")
myRestaurant.listEmployees();
