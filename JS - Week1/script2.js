var foods = [
  {
    name: 'Sweet Potato Kale Scramble',
    ingredients: ['sweet potatoes', 'kale', 'vegan eggz'],
    price: '$9'
  },
  {
    name: 'Cashew Cheese Stuffed Shells',
    ingredients: ['cashew cheese', 'marinara sauce', 'pasta shells'],
    price: '$13'
  },
  {
    name: 'Mushroom Burger',
    ingredients: ['Mushroom Patty', 'almond feta', 'whole wheat bun']
  }
]

for(index in foods){
  var meal = foods[index];
  for(key in meal){
    console.log(meal.name, meal.ingredients, meal.price)
  }
}
